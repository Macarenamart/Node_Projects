const Cinema = require('../models/cinema.models');


//Movies II ---- GET

const getCinemas = async (req,res) => {
    try{
        const cinemas = await Cinema.find();
        return res.json(cinemas);
    }catch (error) {
        res.status(500).send({message: error})
    }
};

//Movies II --- POST

const postCinemas = async (req, res) => {
    try {
        const newCinema = new Cinema(req.body);
        const createdCinema = await newCinema.save();
        return res.status(201).json(createdCinema)
    } catch (error) {
        return res.status(500).json(error);
    }
};

//Movies II --- PUT

const putCinema = async (req, res) => {
    try {
        const { id } = req.params;
        const putCinema = new Cinema(req.body);
        
        putCinema._id = id;
        
        const updateCinema = await Cinema.findByIdAndUpdate(id, putCinema, {new:true,
        });
        return res.status(200).json(updateCinema);
    } catch (error) {
        return res.status(500).json(error);
    }
};


//Movies II --- DELETE

const deleteCinemas = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteCinema = await Cinema.findByIdAndDelete(id);
        return res.status(200).json(deleteCinema);
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = { getCinemas, postCinemas, putCinema, deleteCinemas,};