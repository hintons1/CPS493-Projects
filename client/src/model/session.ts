import { reactive } from "vue";
import type { cardioExercise } from "./cardioExercise";
import type { strengthExercise } from "./strengthExercise";
import { useRouter } from "vue-router"
import { useToast } from "vue-toastification";
import * as myFetch from "./myFetch";
import type { User } from "./users";

const toast = useToast();

const session = reactive({
  user: null as User | null,
  redirectUrl: null as string | null,
  messages: [] as {
    type: string,
    text: string
  }[],
  loading: 0
})

export function api(action: string, data?: unknown, method?: string, headers?: any){
  session.loading++;

  if(session.user?.token){
    headers = headers ?? {};
    headers['Authorization'] = `Bearer $(session.token)`;
  }

  return myFetch.api(`${action}`, data, method)
    .catch(err=> showErr(err))
    .finally(()=> session.loading--);
}

export function getSession(){
  return session;
}

export function showErr(err: any){
  console.error(err);
  session.messages.push({ type: "error", text: err.message ?? err});
  toast.error( err.message ?? err);
}

export function useLogin(){
  const router = useRouter();

  return {
    async login(email: string, password: string): Promise< User | null> {
      session.user = await api("users/login", { email, password });
      router.push(session.redirectUrl || "/");
      return session.user;
    },
    logout(){
      session.user = null;
      router.push("/login");
    }
  }
}

export function addCardioExercise(exercise: string, duration: number) {
  if(exercise !== "" && duration > 0)
 { session.user?.exercises.push({exercise, duration});}
}

export function removeCardioExercise(exercise: cardioExercise) {
  const index = session.user?.exercises.indexOf(exercise);
  if (index !== undefined) {
      session.user?.exercises.splice(index, 1);
  }
}

export function addStrengthExercise(exercise: string, weight: number) {
  if(exercise !== "" && weight > 0)
 { session.user?.exercises.push({exercise, weight});}
}

export function removeStrengthExercise(exercise: strengthExercise) {
  const index = session.user?.exercises.indexOf(exercise);
  if (index !== undefined) {
      session.user?.exercises.splice(index, 1);
  }
}

export function getUsers(){
  return api('users');
}

export function getUser(id: number){
  return api(`users/${id}`)
}

export function createUser(user: User){
  return api('users/', user, 'POST')
}

export function deleteUser(user: User){
  return api(`users/`, undefined, 'DELETE')
}

export function login(user: User){
  session.user = user;
}

export function logout() {
  session.user = null;
}