// const fs  = require('fs')
// fs.appendFile("hey.txt","heloaazzzsszszljsfdlgkj4444444444444shfdlgkjszoo guysssssssssssssssssssss fuck youuuuuuuuuuu",function(err){
//     if(err){
//       console.log(err);
//     }else {
//         console.log('done')
//     }
// })
// fs.rename("hey.txt","hellooo.txt",function(err){
//     if(err){u
//       console.log(err);
//     }else {
//         console.log('done')
//     }
// // })
// fs.unlink("hey.txt",function(err){
//     if(err){
//       console.log(err);
//     }else {
//         console.log('done')
//     }
// })

const express = require("express");

// const http = require('http');
// const server = http.createServer(function(req,res){
//     res.end("hello from server");
// })
// server.listen(3000); 


// const express = require('express');
// const app = express()
//THIS is middleware
// app.use(function(req,res,next){
//     console.log("middleware")
//     next();
// });

///////////

// app.get('/',function(req,res){
//     res.send("heeeeellloo from server");
// })
// app.get('/profile',function(req,res){
//     res.send("heeeeellloo frommmmmm server");
// })
//error handling
// app.get('/about',function(req,res,next){
//     return next(new Error("somethng something")) ///will print in console
// })
// app.use((err,req,res,next)=>{
//     console.error(err.stack)
//     res.status(500).send("something went wrong") //will print in fronytend
// })

///////////
// app.listen(3000); 

///////////////////////
//Form handling 
app.use(express.json());
app.use(express.urlencoded({extended:true}));