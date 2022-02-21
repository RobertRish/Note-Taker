const router = require('express').Router();
// Update below!
const { filterByQuery, findById, createNewAnimal, validateAnimal } = require('../../lib/animals');
//
const { db } = require('../../db/db.json');

router.use(notesRoutes);

module.exports = router;