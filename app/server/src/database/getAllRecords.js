// * Imports: 
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
const path = require('path');

// * Envirionment variables:
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

// * Local variables:
const mongoUri = process.env.MONGODB_URI;
const dbname = process.env.DB_NAME;
const client = new MongoClient(mongoUri);
const collectionName = "rover-measurements";

const getAllRecords = async () => {
    try {
        await client.connect();
        const db = client.db(dbname);
        const collection = db.collection(collectionName);
        const records = await collection.find().toArray();
        return records;
    } catch (err) {
        console.log(err);
    } finally {
        await client.close();
    }
}

module.exports = getAllRecords;