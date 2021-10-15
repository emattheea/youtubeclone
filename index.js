const mongoose = require('mongoose'); 
const connectDB = require('./startup/db')
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const Comment = require('./routes/comments');
const cors =  require('cors');


 connectDB() 
app.use(cors());
app.use('/api/comments',Comment);

const port = process.env.PORT || 5000;
app.listen(port, () => {
console.log(`Server started on port: ${port}`);
});


module.exports = connectDB;