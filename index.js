// const express = require("express");
// const mongoose = require("mongoose");
// // const morgan = require("morgan");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// // const { readdirSync } = require("fs"); //destructring
// // const { UserSchema } = require("./models/user");
// var http = require('http');
// var fs = require('fs');
// require("dotenv").config();
// //app
// const app = express();
// app.use(express.urlencoded({ limit: '25mb', extended: true }));
// app.use(express.json({ limit: '25mb' }));
// app.use(cors());

// //import
// // const authRoute = require("./routes/auth");
// //database
// mongoose
//   .connect("mongodb+srv://pmjshah11:Priyanshu11@cluster0.4i5uu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
//     useNewUrlParser: true,
//   })
//   .then(() => {
//     console.log(`DB connection is successfully connected`);
//   })
//   .catch((err) => console.log(`DB connection err are ${err}`));
  
// //middlewares
// app.use(bodyParser.json({ limit: "2mb" })); // here the data sent by kind
// // will converterd to json and limit stands not more than 2mb
// // app.use(morgan("dev"));

// //routes middlewares
//  //here api is prefix like /api/other routes

// app.get('/', (req, res) => {  
//     // Print the name of the file for which request is made.
//     console.log("Request for demo file received.",__dirname);
//     res.json(<h1>Priyanshu Shah Is here</h1>)
//     // fs.readFile("./htmlFiles/index.html",function(error, data){
//     //   if (error) {
//     //     res.writeHead(404);
//     //     res.write('Contents you are looking for-not found');
//     //     res.end();
//     //   }  else {
//     //     res.writeHead(200, {
//     //       'Content-Type': 'text/html'
//     //     });
//     //     res.write(data.toString());
//     //     res.end();
//     //   }
//     // });
//   });
// // app.get('/functions', (req, res) => {  
// //     // Print the name of the file for which request is made.
// //     console.log("Request for demo file received.");
// //     fs.readFile("./htmlFiles/functions.html",function(error, data){
// //       if (error) {
// //         res.writeHead(404);
// //         res.write('Contents you are looking for-not found');
// //         res.end();
// //       }  else {
// //         res.writeHead(200, {
// //           'Content-Type': 'text/html'
// //         });
// //         res.write(data.toString());
// //         res.end();
// //       }
// //     });
// //   });

//   // var crypto = require("crypto-js");
  
//   // console.log(crypto.SHA1().toString());
// const api = require('./routes/apis');
// app.use('/api',api);
// //it will read all the files from routes folder and .map() will help to require every route so we
// //dont need app.use every time

// //PORT
// const port = process.env.PORT || 8000;
// app.listen(port, () => {
//   console.log("server is successfully running on", port);
// });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();



// const schedule = require('node-schedule')


const app = express();

app.use(express.urlencoded({ limit: '25mb', extended: true }));
app.use(express.json({ limit: '25mb' }));
app.use(cors());

// console.log("dirname is",__dirname);
var http = require('http');
var fs = require('fs');

app.get('/', (req, res) => {  
  // Print the name of the file for which request is made.
  // console.log("Request for salesroom file.");
  res.json(<h1>Priyanshu Shah is here</h1>)
  // fs.readFile(__dirname+"/htmlFiles/salesroom.html",function(error, data){
  //   if (error) {
  //     res.writeHead(404);
  //     res.write('Contents you are looking for-not found webinar');
  //     res.end();
  //   }  else {
  //     res.writeHead(200, {
  //       'Content-Type': 'text/html'
  //     });
  //     res.write(data.toString());
  //     res.end();
  //   }
  // });
});
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("server is successfully running on", port);
});
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`DB connection is successfully connected`);
  })
  .catch((err) => console.log(`DB connection err are ${err}`));
  
