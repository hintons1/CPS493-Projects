const data = require('../data/strengthExercises.json');

function getStrength(){
    return data.strength;
}

function searchStrength(){
    return data.strength.find(strength => strength.strength === strength);
}

function addStrength(){
    strength.id = data.strength.length + 1;
    data.strength.push(strength);
}

function deleteStrength(){
    const index = data.strength.findIndex(x => x.strength === strength);
    data.strength.splice(index, 1);
}

module.exports = {
    getStrength, searchStrength, addStrength, deleteStrength
}