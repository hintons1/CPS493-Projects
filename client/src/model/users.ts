import { api } from "./session";

export type User = {
    id?: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: "admin" | "user",
    token?: string,
    exercises?: any
}

export function getUser(): Promise< User[]> {
    return api("user");
}

export async function getUserByEmail(email: string): Promise<User | undefined> {
    const users = await getUser();
    return users.find(x => x.email === email);
}

export async function searchUsers(query: string, page: number): Promise<User[]> {
    return api('users/search?q=$(query)&page=$(page)');
}