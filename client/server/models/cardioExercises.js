const data = require('../data/cardioExercises.json');

function getCardio(){
    return data.cardio;
}

function searchCardio(){
    return data.cardio.find(cardio => cardio.cardio === cardio);
}

function addCardio(){
    cardio.id = data.cardio.length + 1;
    data.cardio.push(cardio);
}

function deleteCardio(){
    const index = data.cardio.findIndex(x => x.cardio === cardio);
    data.cardio.splice(index, 1);
}

module.exports = {
    getCardio, searchCardio, addCardio, deleteCardio
}