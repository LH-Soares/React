const mongoose = require('mongoose');


const dbConfig = 'mongodb+srv://usuario:usuario@cluster0.hmkiht4.mongodb.net/annotations?retryWrites=true&w=majority';

const connection = mongoose.connect(dbConfig,)

module.exports = connection

