const express = require("express");
const app = express();

const userModel = require("./usermodel");
const usermodel = require("./usermodel");

// create a route

app.get("/", (req, res)=>{
      res.send("hello node2");
});


// create user

app.get("/create", async(req, res)=>{
  let createduser =  await userModel.create({
            name: "chetanp",
            email:"chetanpatil12243@gmail.com",
            usename :"chetan"
      })
      res.send(createduser);
});


// update user
app.get("/update", async(req, res)=>{

let updateduser = await userModel.findOneAndUpdate({usename:"chetan"}, {name:"chetan patil"} ,{new:true});
          res.send(updateduser);
    });

//     read user

app.get("/read", async(req, res) =>{
 let users =   await  usermodel.find({_id: "675eb26ce8651a08bd625f17"});
 res.send(users);
});

// delete user

app.get("/delete", async(req, res) =>{
      let usersdelete =   await  usermodel.findOneAndDelete({_id: "675eb26ce8651a08bd625f17"});
      res.send(usersdelete);
     });

    
app.listen(3000);