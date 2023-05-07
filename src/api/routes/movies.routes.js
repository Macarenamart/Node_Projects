//Añadimos nuestra librería express
const express = require('express');

//Nos traemos las funciones de controller

const { getAll,getById,getByGenre,getYear2010,postMovies, putMovies, deleteMovies} = require('../controllers/movies.controller');

//Creamos enrutador

const router = express.Router();

//Sobre el haremos todos los métodos

router.get('/', getAll);
router.get('/id/:id', getById);
router.get('/genre/:genre', getByGenre);
router.get('/getYear2010/', getYear2010);

//Clase Sergio
router.post('/', postMovies);
router.put('/', putMovies);
router.delete('/',deleteMovies);

//Lo exportamos

module.exports = router;