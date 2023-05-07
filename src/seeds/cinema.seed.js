//Importamos librerias

mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
const Cinema = require("../api/models/cinema.model.js");


const arrayCinemas = [
    {
        name: 'Avenida 5',
        location: 'C/Marqués de Paradas, 15',
        movies: []
    },
    {
        name: 'Cinezona 3D',
        location: 'C/Alcalde LuisUruñuela',
        movies: []
    },
    {
        name: 'Cinesa',
        location: 'C/Poeta Muñoz San Román',
        movies: []
    },
    {
        name: 'Metromar',
        location: 'C/Los descubrimientos',
        movies: []
    },
    {
        name: 'Cinesa',
        location: 'C/Las cortes de Cádiz',
        movies: []
    }
    ];

mongoose.connect(process.env.DB_URL)
.then(async () => {
    const allCinemas = await Cinema.find();
    if(allCinemas.length > 0){
        await Cinema.collection.drop();
        console.log("Borrados");
    }
})

.catch((error) => console.log("Error borrando"))

.then(async() => {
    const cinemasMap = arrayCinemas.map(cinema => new Cinema(cinema));
    await Cinema.insertMany(cinemasMap);
    console.log("Insertados");
})

.catch((error) => console.log(`Error insertando cines: $:{error}`))

.finally(() => mongoose.disconnect());
