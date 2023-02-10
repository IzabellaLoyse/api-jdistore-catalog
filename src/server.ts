import { ApolloServer } from 'apollo-server';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';

import path from 'node:path';
import config from './config/config';
import './database';
import { ProductResolver } from './graphql/resolvers/ProductResolver';

async function main() {
  const schema = await buildSchema({
    resolvers: [ProductResolver],
    emitSchemaFile: path.join(__dirname, 'schema.gql'),
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await server.listen({ port: config.port });

  console.log(`🔥🔥 Server listening on ${url}`);
}

main();
