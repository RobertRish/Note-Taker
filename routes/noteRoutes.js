const router = require('express').Router();
const { response } = require('express');
const fs = require("fs");
// const { notes } = require('../../data/notes.json');
const util = require("util");
const readFileAsync = util.promisify(fs.readFile);
function readFile(){
  return readFileAsync('data/notes.json', 'utf-8')
  .then(response => {
    let notesArray = [];
    notesArray = notesArray.concat(JSON.parse(response))
    return notesArray;
  })
}

router.get('/notes', (req, res) => {
  readFile().then(response => res.json(response)).catch(err => res.json(err))
});
  
// router.post('/notes', (req, res) => {
//       // set id based on what the next index of the array will be
//       console.log(req.body)//.id = notes.length.toString(););
    
//       // if any data in req.body is incorrect, send 400 error back
//       // if (!validateNote(req.body)) {
//       //   res.status(400).send('The note is not properly formatted.');
//       // } else {
//       //   const note = createNewNote(req.body, notes);
//       //   res.json(note);
//       // }
// });

// DELETE route

module.exports  = router;