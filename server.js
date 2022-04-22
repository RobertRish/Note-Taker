const fs = require('fs');
const path = require('path');
const express = require('express');
const { notes }  = require('./data/notes.json');
const apiRoutes = require('./routes/noteRoutes');
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

// remote repo name is al-dente-ware
// heroku app name is note-taker-dream-maker

// 1. Define the schema basically in lib/notes.js
// 2. Make CRUD routes in routes/apiRoutes/noteRoutes.js
// 3. Connect backend to frontend
// 4. Update things to reflect new file/folder names db/ to data/ , db.json to notes.json