// * Imports:
const getAllRecords = require('../database/getAllRecords');

const getAllMeasurements = {
    Query: {
        getAllMeasurements: async () => {
            try {
                const records = await getAllRecords();
                return records.map(record => ({
                    ...record,
                    id: record._id.toString() 
                }));
            } catch (error) {
                throw new Error('Failed to load: ' + JSON.stringify(error));
            }
        }
    }
}

module.exports = getAllMeasurements;
