//Creamos el servidor
//Primero importamos nuestras librerías
//express nos levanta el servidor
//dotenv para datos confidenciales
const express = require('express');
const dotenv = require('dotenv');
//const cors = require('cors');
const routerMovies = require('./src/api/routes/movies.routes');
const routerCinema = require('./src/api/routes/cinema.routes');
dotenv.config();

const {connect} = require('./src/utils/db');

const app = express();

//Abrimos el puerto y le decimos que escuche por ahí
//Una vez importado dotenv cambiamos la variable PORT

const PORT = process.env.PORT || 3000;

//Nos conectamos a la bbdd
connect();

//Para poder recibir archivos con formato json
app.use(express.json());

//Asociamos el enrutador movies a un endpoint
app.use('/movies', routerMovies);

//Asociamos el enrutador Cinema a un endpoint
app.use('/cinema', routerCinema);

//Le decimos que escuche por este puerto

app.listen (PORT, () => console.log('server listening on port',PORT));



