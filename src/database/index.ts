import mongoose from 'mongoose';

import config from '../config/config';

mongoose.set('strictQuery', false);

async function connect() {
  const DB_URI = config.dbUri as string;

  try {
    await mongoose.connect(DB_URI);
    console.log('🚀 Connected to database');
  } catch (err) {
    console.log(err);
  }
}

connect();
