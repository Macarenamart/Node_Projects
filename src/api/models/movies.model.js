//Importamos librería de mongoose y la usamos para generar los modelos de nuestra bbdd

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Creamos un modelo de cómo vamos a enviar los datos

const moviesSchema = new Schema(
    {
        id: {type: String, required:true},
        title: {type: String, required:true},
        director: {type: String, required:true},
        year:{type: Number, required:true},
        genre:{type: String, required:true},

    },
    {

        //timestamp nos crea una fecha de creación y una fecha de modificación
        timestamps:true,
        //Creamos la colección movies compuesta por el esquema que le hemos dicho
       collection:'movies',
       
    }
);

//Ahora nos generamos la clase para este modelo (le decimos que la clase movie tiene ese esquema)

const movie = mongoose.model('movies', moviesSchema);

//Nos exportamos el modulo

module.exports = movie;