const express =require("express");
const app = express();
const path = require("path");

const userModel = require('./models/user');

//  middlware create
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "public")));

// creating routes

app.get("/", (req,res)=>{
      res.render("index");
});


// read users
app.get("/read", async(req,res)=>{
  let users = await  userModel.find();
      res.render("read",{users});
});


// create users
app.post("/create", async(req,res)=>{
      let {name, email, image} = req.body;   //destsrring 
    let createduser = await userModel.create({
            name,
            email,
            image
      })
      res.redirect("/");
});

// delete users 

app.get("/delete/:id", async(req, res)=>{
 let users = await userModel.findByIdAndDelete({_id: req.params.id});
 res.redirect("/read");
});


// edit users
app.get("/edit/:id", async(req, res)=>{
let user = await userModel.findOne({_id: req.params.id});
   res.render("edit",{user});
  });

  app.post("/update/:id", async(req, res)=>{
      let {name, email, image} = req.body;
      let user = await userModel.findByIdAndUpdate({_id: req.params.id},{name, email, image},{new:true});
         res.redirect("/read");
        });
      

app.listen(3000);