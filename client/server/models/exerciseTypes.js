const data = require('../data/exercises.json');

function getExercises(){
    return data.exercises;
}

function searchExercise(){
    return data.exercises.find(exercises => exercises.exercise === exercise);
}

function addExercise(){
    exercise.id = data.exercises.length + 1;
    data.exercises.push(exercise);
}

function deleteExercise(){
    const index = data.exercises.findIndex(x => x.exercise === exercise);
    data.exercises.splice(index, 1);
}

module.exports = {
    getExercises, searchExercise, addExercise, deleteExercise
}