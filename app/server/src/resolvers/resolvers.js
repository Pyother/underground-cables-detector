const distanceMeasurementsResolver = require('./distanceMeasurementsResolver');
const getAllMeasurements = require('./getAllMeasurements');

const resolvers = {
    Query: {
        ...distanceMeasurementsResolver.Query,
        ...getAllMeasurements.Query
    }
};

module.exports = { resolvers };