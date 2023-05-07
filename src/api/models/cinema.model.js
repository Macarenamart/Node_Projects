

//Importamos librería de mongoose y la usamos para generar los modelos de nuestra bbdd

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Creamos un modelo de cómo vamos a enviar los datos

const cinemaSchema = new Schema(
    {
        name: {type: String, required: true},
        location: {type: String, required: true},
        movies:[],
    },{
        timestamps: true,
        collection: 'cinemas'
    }
)

const cinema = mongoose.model('cinemas', cinemaSchema);

module.exports = cinema;