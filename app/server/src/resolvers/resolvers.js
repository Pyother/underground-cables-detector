const distanceMeasurementsResolver = require('./distanceMeasurementsResolver');

const resolvers = {
    Query: {
        ...distanceMeasurementsResolver.Query,
    }
};

module.exports = { resolvers };