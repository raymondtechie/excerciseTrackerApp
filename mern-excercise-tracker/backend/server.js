const express = require('express'); 
const cors = require('cors');
const mongoose = require('mongoose'); //connects to our mongodb DB

require('dotenv').config(); //environment variables in the .env file

//creates express server
 const app = express(); 
 const port = process.env.PORT || 5000;



//middleware
app.use(cors());
app.use(express.json()); //parse JSON

//DB URI
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once( 'open', () => {
    console.log("MongoDB databse connection established successfully");
})

const excercisesRouter = require('./routes/excercises');
const usersRouter = require ('./routes/users');

//When at root url then puts in /x it would load the router
app.use('/excerises', excercisesRouter);
app.use('/users', usersRouter);


//Starts the server 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});