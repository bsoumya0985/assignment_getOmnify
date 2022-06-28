const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const route = require('./route/route');
const multer = require('multer');
const cookieParser = require('cookie-parser')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().any());
app.use(cookieParser());

mongoose.connect('mongodb+srv://soumya0985:ZtoqUK1lBKP7jUtw@cluster0.lwz2n.mongodb.net/omnify-database?authSource=admin&replicaSet=atlas-12u83k-shard-0&readPreference=primary&ssl=true',).then(()=>{
    console.log('MongoDB is connected');
}).catch((err)=>{
    console.log(err.message);
});


app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port '+ (process.env.PORT || 3000))
});