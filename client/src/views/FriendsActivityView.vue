<script setup lang="ts">

import { ref } from 'vue';
import { getSession, addCardioExercise, addStrengthExercise} from '@/model/session';
import { type User } from '@/model/users';

const session = getSession();
const user = ref(session.user);



const workoutForm = ref({
    formToggle: false
})

const toggle = (trigger: keyof typeof workoutForm.value) => {
    workoutForm.value[trigger] = !workoutForm.value[trigger]
}

</script>

<template>
    <div>
        <h1 class="title">Friend's Activity</h1>
        <div class="columns is-centered">
            <div class="column is-half">
                <button class="button is-primary is-light is-outlined is-fullwidth" @click="() => toggle('formToggle')">Add Workout</button>
                <div class="modal is-active" id="workoutModal" v-if="workoutForm.formToggle">
                    <div class="modal-background"></div>
                    <div class="modal-card">
                        <header class="modal-card-head">
                            <p class="modal-card-title">Add Workout</p>
                            <button class="delete" aria-label="close" @click="() => toggle('formToggle')"></button>
                        </header>
                        <section class="modal-card-body">
                        <label class="label">Title</label>
                        <div class="control">
                            <input class="input" type="text">
                        </div>
                    <div class="field">
                        <label class="label">Date</label>
                        <div class="control">
                            <input class="input" type="date" placeholder="mm/dd/yyyy">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Duration/Weight</label>
                        <div class="control">
                            <input class="input" type="text">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Location</label>
                        <div class="control">
                            <input class="input" type="text">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Picture</label>
                        <div class="control">
                            <input class="input" type="text">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Type</label>
                        <div class="control">
                            <div class="select">
                            <select>
                                <option></option>
                                <option>Run</option>
                                <option>Bike</option>
                                <option>Walk</option>
                                <option>Cardio</option>
                                <option>Strength</option>
                            </select>
                            </div>
                        </div>
                    </div>
                </section>
                <footer class="modal-card-foot">
                    <button class="button is-success" @click=" () => toggle('formToggle')">Save changes</button>
                    <button class="button" @click="() => toggle('formToggle')">Cancel</button>
                </footer>
            </div>
        </div>
        
    </div>
</div>
</div>
</template>

<style scoped>

</style>