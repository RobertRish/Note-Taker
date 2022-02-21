const fs = require('fs');
const path = require('path');
const express = require('express');
const { db } = require('./db/db');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// establishes port at which the server will be hosted
const PORT = process.env.PORT || 3001;
const app = express();
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Note Taker API server now on port ${PORT}!`);
});
