const express = require("express")
const bodyPaser = require("body-parser")
const date =require(__dirname + "/date.js")
const app =express()
let items =[];
let workItems =[];
app.use(express.static("public"))
app.set ('view engine', 'ejs')
app.use(bodyPaser.urlencoded({extended:true}))
app.get("/",function(req,res){
    const currentDay = date.getDate()
    console.log(currentDay)
    res.render("list",{listTitle:currentDay ,newList:items})
})
app.post("/",function(req,res){
    let item=req.body.itemList
    if(req.body.list === "Work"){
        workItems.push(item)
        res.redirect("/work")
    }
    else{
        items.push(item)
        res.redirect("/")
    }
})
app.get("/work",function(req,res){
    res.render("list",{listTitle:"Work List",newList:workItems})
})
app.get("/about",function(req,res){
    res.render("about")
})
app.listen(3000,function(){
    console.log("server is running on port:3000.",)
})