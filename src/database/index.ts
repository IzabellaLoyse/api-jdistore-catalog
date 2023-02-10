import mongoose from 'mongoose';

import config from '../config/config';

async function connect() {
  const DB_URI = config.dbUri;

  try {
    await mongoose.connect(DB_URI);
    console.log('🚀 Connected to database');
  } catch (err) {
    console.log(err);
  }
}

connect();
