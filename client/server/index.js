const express = require('express');
const path = require('path');
const users = require('./controllers/users');
const app = express();
const { parseAuthorization } = require('./middleware/authorization');


//For Middleware
app
    .use(express.json())
    .use(express.static(path.join(__dirname, '../client/dist/')))
    .use(parseAuthorization)

    .use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Headers', '*')
        res.header('Access-Control-Allow-Methods', '*')
        if(req.method === 'OPTIONS'){
            return res.send(200);
        }
        next()
    })

app
    .use('api/v1/users', users)
    .get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/dist/index.html'))
    });

//Error Handling
app
    .use((err, req, res, next) =>{
        console.error(err);
        res.status(err?.status || 500)
        res.json(
            {
                message: err?.message || err
            });
    })

console.log('1: Starting Server...');
console.log('2: Server Running');
console.log('3: Waiting...');