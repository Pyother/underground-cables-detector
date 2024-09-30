const resolvers = {
    Query: {
        checkApiStatus: () => {
            return {
                status: 'API is running'
            }
        }
    }
}

module.exports = { resolvers };