import { ApolloServer, gql } from 'apollo-server';
import 'reflect-metadata';

import config from './config/config';
import './database';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      _empty: Boolean
    }
  `,

  resolvers: {
    Query: {
      _empty: () => true,
    },
  },
});

server.listen(config.port).then(({ url }) => {
  console.log(`🔥🔥 Server listening on ${url}`);
});
