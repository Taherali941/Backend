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

// const express = require("express");

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
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
// const morgan = require('morgan');
// app.use(morgan('dev'))


// const express = require('express');
// const app = express()

// app.set("view engine",'ejs')

// const morgan = require('morgan');
// app.use(morgan('dev'))

// app.use(express.json());
// app.use(express.urlencoded({extended:true}));

// app.get("/",function(req,res,next){
//     res.render('index')
// })
// app.post("/get-form-data",(req,res)=>{
//     console.log(req.body)
//     res.send("data received to server")
// })
// app.listen(3000)



///////////////////////////////////////////

const express = require('express');
const app = express();

//middleware built in to read json
app.use(express.json());

let users = [];
let userId = 1;
/////create a user
app.post('/users',(req,res)=>{
    console.log("post /users called")
    console.log(req.body)
    const {name ,email} = req.body;
    if(!name || !email){
        return res.status(400).json({message:"name and email are required"});
    }
    const newUser ={
        id:userId++,
        name,
        email
    };
    users.push(newUser);
    res.status(201).json(newUser)
})
////get alll user in route
app.get("/users",(req,res)=>{
    res.json(users)
})
////get user by id
app.get("/users/:id",(req,res)=>{
    const id = Number(req.params.id);
    console.log(id)
    const user = users.find(u=> u.id ===id);
    if(!user){
        return res.status(404).json({message:"user not found"});
    }
    res.json(user);
})
//// delete user
app.delete("/users/:id",(req,res)=>{
    console.log("delete /users called")
    const id = Number(req.params.id);
    const index = users.findIndex(u=> u.id === id);
    if (index === -1) {
        return res.status(404).json({message:"user not found"})
    }
    users.splice(index ,1)
    res.json({message:"user deleted succesfully"})
})

/// update user
app.put("/users/:id",(req,res)=>{
    console.log("put route hit")
    const id = Number(req.params.id)
    const {name , email} = req.body;
    const index = users.findIndex(u=>u.id === id);
    if(index ==-1){
        return res.status(404).json({message:"user not found"})
    }
    //update if only value is provided
    if (name) users[index].name = name;
    if (email) users[index].email = email;
    res.json({message:"user updated successfully",user: users[index]})
})
app.listen(3000)