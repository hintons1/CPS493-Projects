const express = require('express');
const { getStrength, searchStrength, addStrength, deleteStrength } = require('../models/strengthExercises');
const router = express.Router();

router
    .get('/', (req, res, next) => {
        const list = model.getStrength();
        res.send(list)
    })

    .get('/:strengthExercise', (req, res, next) => {
        const strength = req.params.strength;
        const list = model.searchStrength(strength);
        res.send(list);
    })

    .post('/', (req, res, next) => {
        addStrength(req.body)
        .then((strength) => {
            res.send(strength);
        }).catch(next);
    })

    .delete('/:id', (req, res, next) => {
        deleteStrength(+req.params.id)
        .then(() => {
            res.send({message: 'Exercise removed'});
        }).catch(next);
  })
