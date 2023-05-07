//Usamos este archivo para conectarnos a la bbdd
//Importamos la librería de mongoose

const mongoose = require('mongoose');

const connect = async () => {
    try{
        const db = await mongoose.connect(process.env.DB_URL);
        const {name,host} = db.connection;
        
        console.log(`connected to ${name} in host:${host}`);
    } catch (error) {
        console.log(`Error connecting to DDBB ${error}`);
    }
}

module.exports = {connect};