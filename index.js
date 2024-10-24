const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv').config();
const authorRoute = require("./routes/author.route")

const app = express();
//const port = 3000;



const CONNECTION_URL = process.env.CONNECTION_URL;
console.log(process.env.CONNECTION_URL);

//middlewares
app.use(express.json());

mongoose
.connect(CONNECTION_URL)
.then(() => console.log("I am connected"))
.catch((error)=> console.log(error))
.finally(()=> console.log("Done Done"));

const callBack =() => {
  console.log(`Example app listening on port ${process.env.PORT}`);
}


//routes
app.use('/authors', authorRoute)


// app.patch('/', (req,res)=>{
//   res.send('I am patching')
// })



app.use('*', (req,res)=>{
  res.send('Not found')
})







app.listen(process.env.PORT, callBack);
  