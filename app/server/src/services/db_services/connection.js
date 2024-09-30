// * Imports:
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
const path = require('path');

// * Environment variables:
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

// * Local variables:
const mongoUri = process.env.MONGODB_URI;
const dbname = process.env.DB_NAME;
const client = new MongoClient(mongoUri);
const collectionName = "measurements";

function connect() {
    return client.connect()
        .then(function() {
            const db = client.db(dbname);
            const collection = db.collection(collectionName);
            return collection.find().toArray();
        })
        .then(function(records) {
            return records;
        })
        .catch(function(error) {
            console.error(error);
        })
        .finally(function() {
            return client.close();
        });
}

module.exports = connect;
