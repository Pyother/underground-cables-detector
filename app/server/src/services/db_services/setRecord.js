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
    "deviceId": "device-001",
    "location": {
        "latitude": 52.2297,
        "longitude": 21.0122, 
        "altitude": 100.5
    },
    "magnetometer": {
        "x": 0.0025,
        "y": -0.0012,
        "z": 0.0038
    },
    "fieldStrength": 0.75,
    "measurementTime": new Date(),  
    "meta": {
        "operator": "Piotr Sobol",
        "environment": "urban"
    }
};

// Call the setRecord function with example data
setRecord('measurements', exampleRecord);

module.exports = setRecord;
