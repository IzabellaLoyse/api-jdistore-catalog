require('dotenv').config({ path: '.env' });

const DB_USER = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

export default {
  port: 4000,
  dbUri: `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_NAME}.bzs4j5i.mongodb.net/?retryWrites=true&w=majority`,
  env: 'development',
};
