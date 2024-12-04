const getAllMeasurements = require('./getAllMeasurements');

const resolvers = {
    Query: {
        ...getAllMeasurements.Query
    }
};

module.exports = { resolvers };