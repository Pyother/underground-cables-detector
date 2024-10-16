const path = require('path');
const fs = require('fs');

const resolvers = {
    Query: {
        getTempData: async () => {
            try {
                const dataPath = path.join(__dirname, '../assets/data/temp_response.json');
                const fileData = fs.readFileSync(dataPath, 'utf8');
                return JSON.parse(fileData);
            } catch (e) {
                throw new Error('Failed to load data: ' + e.message);
            }
        }
    }
}

module.exports = { resolvers };