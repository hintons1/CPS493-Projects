const { MongoClient, ObjectId} = require('mongodb');
const uri = process.env.MONGO_URI;
const DB_Name = process.env.MONGO_DB_NAME;

const client = new MongoClient(uri, {});

async function connect(){
    await client.connect();
    return client.db(DB_Name);
}

module.exports = {
    ObjectId, DB_Name, connect
}