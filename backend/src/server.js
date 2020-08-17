const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const morgan = require('morgan');
require('colors');
const connectDB = require('./config/db');
const app = express();

app.use(express.json());
dotenv.config({ path: path.resolve('src', 'config', 'config.env') });

// Connect Database
// connectDB();

// Dev logging moddleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount routes
app.use('/api/v1/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));


// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));
});