import { reactive } from "vue";
import exercises from "@/data/exercises.json";

export interface cardioExercise{
    exercise: string;
    duration: number;
}

export function getCardio(){
    return exercises;
}

export function returnCardio(){
    const change = reactive({
        exercises: exercises
    });

    return change;
}