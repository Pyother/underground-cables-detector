// * Main packages:
import express from 'express';
import { ApolloServer } from 'apollo-server-express';  

// * GraphQL imports:
import { typeDefs } from './schema/schema.mjs';
import { resolvers } from './resolvers/resolvers.mjs';

// * Own packages:
import createRoutes from './routes.mjs';

// * Utils:
import 'colors';

const API_PORT = process.env.PORT || 5000;

async function startServer() {
    const app = express();  

    const server = new ApolloServer({
        typeDefs,
        resolvers
    });

    await server.start();

    server.applyMiddleware({ app });

    createRoutes(app);

    app.listen(API_PORT, () => {
        console.log(`🚀 Server ready at http://localhost:${API_PORT}${server.graphqlPath}`.green);
        console.log('Query at: '.green + 'https://studio.apollographql.com/dev'.yellow);
    });
}

startServer().catch(error => {
  console.error('Error starting server: ', error);
});
