const express = require('express');
const { getCardio, searchCardio, addCardio, deleteCardio } = require('../models/cardioExercises');
const router = express.Router();

router
    .get('/', (req, res, next) => {
        const list = model.getCardio();
        res.send(list)
    })

    .get('/:cardioExercise', (req, res, next) => {
        const cardio = req.params.cardio;
        const list = model.searchCardio(cardio);
        res.send(list);
    })

    .post('/', (req, res, next) => {
        addCardio(req.body)
        .then((cardio) => {
            res.send(cardio);
        }).catch(next);
    })

    .delete('/:id', (req, res, next) => {
        deleteCardio(+req.params.id)
        .then(() => {
            res.send({message: 'Exercise removed'});
        }).catch(next);
  })