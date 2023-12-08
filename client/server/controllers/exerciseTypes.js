const express = require('express');
const { getExercises, searchExercise, addExercise, deleteExercise } = require('../models/exerciseTypes');
const router = express.Router();

router
    .get('/', (req, res, next) => {
        const list = model.getExercises();
        res.send(list)
    })

    .get('/:workout', (req, res, next) => {
        const workout = req.params.workout;
        const list = model.searchExercise(exercise);
        res.send(list);
    })
