// * Imports:
const connect = require('./connection');

const setRecord = async (collectionName, record) => {
    return connect(collectionName, async (collection) => {
        const result = await collection.insertOne(record);
        console.log('Record inserted with id:', result.insertedId);
        return result.insertedId;
    });
};

// Example usage
const exampleRecord = {
    measurementTime: new Date(),
    value: 42,
    unit: 'Celsius'
};

setRecord('measurements', exampleRecord)
    .then(insertedId => {
        console.log('Inserted record ID:', insertedId);
    })
    .catch(error => {
        console.error('Error inserting record:', error);
});

module.exports = setRecord;