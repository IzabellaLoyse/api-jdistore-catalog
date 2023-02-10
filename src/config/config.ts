require('dotenv').config({ path: '.env' });

const DB_URI = process.env.DB_URI;

export default {
  port: 4000,
  dbUri: DB_URI,
  env: 'development',
};
