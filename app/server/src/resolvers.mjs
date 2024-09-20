export const resolvers = {
    Query: {
        checkApiStatus: () => {
            return {
                status: 'API is running'
            }
        }
    }
}