import { reactive } from "vue";
import exercises from "@/data/exercises.json";

export interface strengthExercise{
    exercise: string;
    weight: number;
}

export function getStrength(){
    return exercises;
}

export function returnStrength(){
    const change = reactive({
        exercises: exercises
    });

    return change;
}