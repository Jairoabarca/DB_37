const express = require('express');
const router = express.Router();
const genresController = require('../controllers/genresController');

router.get('/genres', genresController.listGenres);
//router.get('/genres/detail/:id', genresController.detail);


module.exports = router;