// * Imports:
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
const path = require('path');
require('colors');

// * Environment variables:
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

// * Local variables:
const mongoUri = process.env.MONGODB_URI;
const dbname = process.env.DB_NAME;
const client = new MongoClient(mongoUri);

const setRecord = async (record, collectionName) => {
    try {
        await client.connect();

        const database = client.db(dbname); 
        const collection = database.collection(collectionName);  

        const result = await collection.insertOne(record);

        console.log(`Record added: ${result.insertedId}`.green);
        return result.insertedId;

    } catch (err) {
        console.error('Error occurred while setting the record: ' + err);
    } finally {
        await client.close();  
    }
}

setRecord({
    "measurementTime": new Date(),
    "measurement": {
        "value": 1
    },
    "meta": {
        "operator": "Piotr Sobol"
    }
}, 'distance-measurements-collection');

module.exports = setRecord;
