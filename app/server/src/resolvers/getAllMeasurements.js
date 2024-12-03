// * Imports:
const getAllRecords = require('../database/getAllRecords');

const getAllMeasurements = {
    Query: {
        getAllMeasurements: async () => {
            try {
                const records = await getAllRecords();
                return records;
            } catch (error) {
                throw new Error('Failed to load: ' + JSON.stringify(error));
            }
        }
    }
}

module.exports = getAllMeasurements;
