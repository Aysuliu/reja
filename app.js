console.log("Web Serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();

const fs = require("fs") // file system 

// MongoDB connect
const db = require("./server").db();
const mongodb = require("mongodb");


let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if (err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data)
    }
}); //callback


//1 Kirish code
app.use(express.static("public")); //MiddleWare 
app.use(express.json()); // Rest API
app.use(express.urlencoded({ extended: true })); //traditional API

//2 Session code
//3 BSSR => Views backend server site rendering
app.set("views", "views");
app.set("view engine", "ejs");
//single page appplication method

//4 Routing code
// app.get("/hello", function(req, res) {
//     res.end(`<h1 style="background-color: red"> Hello WOrld </h1>`); // html faylni render qilish
// });
// app.get("/gift", function(req, res) {
//     res.end(`<h1> Siz sovg'alar bolimidasiz </h1>`); // html faylni render qilish
// });

app.post("/create-item", (req, res) => {
    //console.log(req.body);
    console.log('user entered /create-item');
    const new_reja = req.body.reja
    db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
        res.json(data.ops[0]);
    });
});

app.post("/delete-item", (req, res) => {
    const id = req.body.id;
    db.collection("plans").deleteOne({
            _id: new mongodb.ObjectId(id)
        },
        function(err, data) {
            res.json({ state: "success" });
        })
});

app.get("/", function(req, res) {
    console.log('user entered /');
    db.collection("plans").find().toArray((err, data) => {
        if (err) {
            console.log(err);
            res.end("something went wrong");
        } else {
            //console.log(data);
            res.render("reja", { items: data });
        }
    });
});

module.exports = app;

//Client-side rendering => React