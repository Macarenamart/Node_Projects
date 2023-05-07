//Nos importamos la clase Movie que hemos creado en movies.model

const movies = require('../models/movies.model');

//En este archivo ponemos todos los métodos de movies

//Movie I -- Endpoint get que devuelva todas las peliculas.

const getAll = async (req, res) => {
    try {
        const allMovies = await Movie.find()
        return res.status(200).json(allMovies);
    } catch (error) {
        return res.status(500).json(error);
    }
};

//Movie I -- Devuelve las peliculas según su _Id

const getById = async (req, res) => {
    try {
        const {id} = req.params;
        const movieById = await Movie.find({_id: id});
        return res.status(200).json(movieById);
        
    } catch (error) {
        return res.status(500).json(error);
        
    }

};

//Movie I -- Devuelve películas según su género

const getByGenre = async (req, res) => {
    try {
        const {genre} = req.params;
        const movieByGenre = await Movie.find({genre: genre})
        return res.status(200).json(movieByGenre);
    } catch (error) {
        return res.status(500).json(error);
        
    }
};

//Movie I -- Devuelve las peliculas a partir del año 2010
//$gt = "greater than" mayor que -- Mongo para especificar que un campo debe ser mayor
//que un valor que especifiquemos.
//$gt:2010 ---- Valores mayores a 2010

const getYear2010 = async (req, res) => {
    try {
        const get2010 = await Movie.find({$gt:2010});
        return res.status(200).json(get2010);
    } catch (error) {
        return res.status(500).json(error);
    }
};



//Movies II -- POST

const postMovies = async (req, res) => {
    try{
        const newMovie = new Movie(req.body);
        const createdMovie = await newMovie.save();
        return res.status(201).json(createdMovie);
    }catch (error) {
        return res.status(500).json(error);
    }
}

//Movies II --- PUT

const putMovies = async (req, res) => {
    try{
        const {id} = req.params;
        const putMovie = new Movie(req.body);
        putMovie._id = id;
    }catch(error){
        return res.status(500).json(error)
    }
}

//Movies II --- DELETE

const deleteMovies = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteMovie = await Movie.findByIdAndDelete(id);
        return res.status(200).json(deleteMovie);
    } catch (error) {
        return res.status(500).json(error);
    }
}









//Metodos generales (Clase Sergio)
//const getMovies = (req, res) => {
 //   res.send("este es el get de movies")
//}

//const postMovies = (req, res) => {
    try {
        const newMovies = new movies(req.body);
        const createdMovies = newMovies.Save();
        return res.status(201).json(createdMovies);
    } catch (error) {
        return res.status(500).json(error)
        
    }
    
//}

//const putMovies = (req, res) => {
  //  res.send("este es el put de movies")
//}

//const deleteMovies = (req, res) => {
 //   res.send("este es el delete de movies")
//}

//Exportamos los métodos

//module.exports = {getMovies, postMovies, putMovies, deleteMovies}

module.exports = {getAll, getById, getByGenre, getYear2010, postMovies, putMovies, deleteMovies};