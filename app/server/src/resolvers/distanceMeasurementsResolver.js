const path = require('path');
const fs = require('fs');

const distanceMeasurementsResolver = {
    Query: {
        getDistanceMeasurementsData: async () => {
            try {
                const dataPath = path.join(__dirname, '../assets/data/temp_response.json');
                const fileData = fs.readFileSync(dataPath, 'utf8');
                const parsedData = JSON.parse(fileData);
                return parsedData.distanceMeasurements;
            } catch (error) {
                throw new Error('Failed to load: ' + JSON.stringify(error));
            }
        }
    }
}

module.exports = distanceMeasurementsResolver;