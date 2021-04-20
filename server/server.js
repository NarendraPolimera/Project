const express = require('express');
const mongoose = require('mongoose');
//const { countReset } = require('node:console');
const Course = require('./course')
const bodyParser = require("body-parser");
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db')
const app = express()



//config .env to ./config/config.env
require('dotenv').config({
    path:'./config/config.env'
})



//development configuration
if(process.env.NODE_ENV==='development'){
    app.use(cors( {origin: process.env.CLIENT_URL} ));
    app.use(morgan('dev'));
}


const PORT = process.env.PORT
//connect to mongodb
//const dbURL='mongodb+srv://Narendra:nandumanasa@cluster0.8n4bh.mongodb.net/EGURU?retryWrites=true&w=majority';
//mongoose.connect(dbURL,{ useNewUrlParser:true, useUnifiedTopology:true})
  //.then((result)=> console.log('connected to db'))
  //.catch((err) => console.log(err));

//connect to database
connectDB()

  app.use(bodyParser.json())

  app.listen(PORT, () =>{
      console.log(`APP listening on port ${PORT}`);
  });

 app.get('/Courses', (req,res) => {
      Course.find()
       .then(data => { 
        console.log(data);
        res.json(data);
       })
       .catch((err) => {
           console.log(err);
       });
  } )

  //loading routes
const authRouter=require('./routes/auth.route');

//use route
app.use('/api/',authRouter);


//no routes available
app.use((req,res,next)=>{
    res.status(404).json({success:false, message:"page not found"});
})