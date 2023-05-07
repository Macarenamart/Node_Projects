const express = require('express');

//Creamos enrutador

const router = express.Router();

//Haremos los métodos

const {getCinemas, postCinemas, putCinema, deleteCinemas, getAddMovie

} = require('../controller/cinema.controller');

//const router = express.Router();


router.get('/', getCinemas);
router.get('/name/:name', getCinemasByName);
router.post('/', postCinemas);
router.put('/:id', putCinema);
router.delete('/', deleteCinemas);

//router.get('/addMovie', getAddMovie);






//router.get('/',(req,res)=> {res.send('Este es mi get de cinema')})
//router.post('/',(req,res)=> {res.send('Este es mi post de cinema')})
//outer.put('/',(req,res)=> {res.send('Este es mi put de cinema')})
//router.delete('/',(req,res)=> {res.send('Este es mi delete de cinema')})

//Lo exportamos

module.exports = router;