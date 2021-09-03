const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/todo_app_db');
const db = mongoose.connection;

db.on('error',console.error.bind(console,"error connectiong to database") );

db.once('open',function()
{
    console.log("successfully connected to database") ;
} ) ;
//include//require this file before firing up the severs