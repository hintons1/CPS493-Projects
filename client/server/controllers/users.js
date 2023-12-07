const express = require('express');
const { requireUser } = require('./middleware/authorization');
const { getAll, getById, search, add, deleteUser, login } = require('../models/users');
const router = express.Router();

router
    .get('/', requireUser(true), (req, res, next) => {
        res.send(getAll());
    })

    .get('/search', requireUser() , (req, res, next) => {
    const results = search(req.query.q);
    res.send(results);
    })

    .get('/:id', requireUser(), (req, res, next) => {
        const user = getById(+req.params.id);
        res.send( user );
    })

    .post('/', requireUser(true), (req, res, next) => {
        const user = add(req.body);
        res.send(user);
    })

    .post('/login', (req, res, next) => {
        login(req.body.email, req.body.password)
        .then(user => {
            res.send(user);
        }).catch(next)
    })

    .delete('/:id', requireUser(true), (req, res, next) => {
        remove(+req.params.id);
        res.send({message: 'User removed'});
    });

module.exports = router;