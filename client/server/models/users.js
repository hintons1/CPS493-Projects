const data = require("../data/users.json");
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES = process.env.JWT_EXPIRES;

function getAll(){
    return data.users;
}

function getById(id){
    const person = data.users.find(x => x.id === id);
    if(!person){
        throw new Error('User not found');
    }else{
        return person
    }
}

function search(query){
    return data.users.filter(x => {
        return(
        x.firstName.toLowerCase().includes(query.toLowerCase()) ||
        x.lastName.toLowerCase().includes(query.toLowerCase()) ||
        x.username.toLowerCase().includes(query.toLowerCase()) ||
        x.email.toLowerCase().includes(query.toLowerCase())
        );
    });
}

async function add(person){
    person.email = person.email.toLowerCase();
    const col = await collection();
    const takenErr = await col.findOne({ email: person.email });
    if(takenErr){
        throw new Error('Email already taken');
    }
    const newPerson = {
        id: data.users.length + 1,
        admin: false,
        ...values
    };
    data.users.push(newPerson);
    return newPerson;
}

function deleteUser(person){
    const index = data.users.findIndex(x => x.id === id);
    if(index === -1){
        throw new Error('User not Found');
    }
    data.users.splice(index, 1);
}

async function login(email, password){
    const item = data.users.find(x => x.email === email);
    if(!item){
        throw new Error('Wrong email or password');
    }
    if(item.password != password){
        throw new Error('Wrong email or password');
    }
    const user = { ...item};
    const token = await generateJWT(user);
    return { user, token };
}

function generateJWT(user){
    return new Promise((resolve, reject) => {
        jwt.sign(user, process.env.JWT_SECRET, { expiresIn: JWT_EXPIRES }, (err, token) => {
            if(err){
                reject(err);
            }else{
                resolve(token);
            }
        });
    });
}

function verifyJWT(token){
    return new Promise((resolve, reject) => {
        jwt.verify(token, JWT_SECRET, (err, user) => {
            if(err){
                reject(err);
            }else{
                resolve(user);
            }
        });
    });
}

module.exports = {
    getAll, getById, search, add, deleteUser, login, generateJWT, verifyJWT
}