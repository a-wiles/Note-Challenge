const fs = require("fs")
const app = require("express").Router()
let db = require("../db/db.json");


app.get("/notes", function (req, res) {
db = JSON.parse(fs.readFileSync("./db/db.json"))
console.log("Get Route", db)
res.json(db)
})

app.post("/notes", function (req, res) {
    var id = Math.floor(Math.random()*101)
    db.push({
        id:id,
        title:req.body.title,
        text:req.body.text
    })
   fs.writeFileSync("./db/db.json", JSON.stringify(db))
    console.log("POST Route", db)
    res.json(db)
    })