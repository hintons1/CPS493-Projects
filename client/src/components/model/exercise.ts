import { reactive } from "vue";
import exercises from "@/data/exercises.json";

export interface Exercise{
    exercise: string;
    duration: number;
}

export function getExercise(){
    return exercises;
}

export function returnExercises(){
    const change = reactive({
        exercises: exercises
    });

    return change;
}