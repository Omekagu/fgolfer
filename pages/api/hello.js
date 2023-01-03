const mongoose = require('mongoose');

require('dotenv').config();

const uri = process.env.DB_URI;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('mongoDB connection successful...'))
  .catch((err) => console.log('mongoDB connection failed', err.message));
