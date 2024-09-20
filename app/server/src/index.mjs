import 'colors';
import { ApolloServer } from 'apollo-server';  
import { typeDefs } from './schema.mjs';
import { resolvers } from './resolvers.mjs';

const API_PORT = 4000;

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen({port: API_PORT || 4000}).then(({url}) => {
    console.log(`🚀 Server ready at ${url}`.green);
    console.log('Query at: '.green + 'https://studio.apollographql.com/dev'.yellow);
}).catch((error) => {
    console.error('Error starting server: ', error);
});