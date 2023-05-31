const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/user');

const db = mongoose.connection;

db.on('error',console.error.bind(console,'error connecting DB'));

db.once('open',function(){
    console.log('connected to database ::mongoDB');
});

module.exports = db;
