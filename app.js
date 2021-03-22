const mysql=require("mysql");
const express=require("express");
var app=express();
const bodyparser=require("body-parser");
app.use(bodyparser.json());


var mysqlconn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"test"
})
mysqlconn.connect((err)=>{
    if(!err) console.log("Connected");
    else console.log("Failed");
})

app.listen(8000,()=>console.log("Server is running"));

app.get("/employee",(req,res)=>{
    mysqlconn.query("select * from employee",(err,rows,fields)=>{
        if(!err)
        res.send("Inserted");
        else console.log(err);
    })
})

app.delete("/employee/:id",(req,res)=>{
    mysqlconn.query("delete from employee where id=?",[req.params.id],(err,rows,fields)=>{
        if(!err) res.send("Deleted Successfully");
        else console.log(err);
    })
})
