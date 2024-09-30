// * Main packages:
const express = require('express');
const fs = require('fs');
const path = require('path');

// * GraphQL imports:
const { ApolloServer } = require('apollo-server-express');
const { resolvers } = require('./resolvers/resolvers');

// * Own packages:
const createRoutes = require('./routes');
const connect = require('./services/db_services/connection');

// * Utils:
require('dotenv').config(); 
require('colors');

// * Local variables:
const typeDefs = fs.readFileSync(path.join(__dirname, './schema/schema.gql'), 'utf8');
const API_PORT = process.env.PORT || 5000;

function startServer() {
    
    const app = express();

    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    server.start().then(() => {
        return connect();
    }).then(() => {

        server.applyMiddleware({ app });

        createRoutes(app);

        app.listen(API_PORT, () => {
            console.log(`🚀 Server ready at http://localhost:${API_PORT}${server.graphqlPath}`.green);
            console.log('Query at: '.green + 'https://studio.apollographql.com/dev'.yellow);
        });

    }).catch((error) => {
        console.error('Error starting server: ', error);
    });
}

startServer();
