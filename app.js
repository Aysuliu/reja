console.log("Web Serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();

const fs = require("fs") // file system 

// MongoDB connect
const db = require("./server").db();


let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if (err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data)
    }
}); //callback


//1 Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
    //
});

app.get("/author", (req, res) => {
    res.render('author.ejs', { user: user });
});

app.get("/", function(req, res) {
    res.render('reja.ejs')
})

//Client-side rendering => React