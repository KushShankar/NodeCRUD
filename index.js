const mysql=require('mysql');
const express=require('express');
var app=express();
const bodyparser=require('body-parser');

app.use(bodyparser.json());

//Mysql connection..................
var mysqlconnection=mysql.createConnection({
host:"localhost",
user:"root",
password:"password",
database:"test"
})

mysqlconnection.connect((err)=>{
    if(!err)
    console.log("Connected!");
    else{
        console.log('Failed \n Error'+JSON.stringify(err,undefined,2));
    }
})


app.listen(8000,()=>console.log("Express server is running"));

//Get Method for select query.................
app.get("/employee ",(req,res)=>{
   // let qer="select * from employee";
    mysqlconnection.query("select * from employee",(err,rows,fields)=>{
        if(!err)
        {
            res.send(rows);
        }
        else{
            console.log(err);
        }
    })
})

//delete method.....................
app.delete("/employee/:id",(req,res)=>{
    mysqlconnection.query("DELETE FROM employee WHERE id=?",[req.params.id],(err,rows,fields)=>{
        if(!err)
        {
            res.send("Deleted Successfully");
        }
        else{
            console.log(err);
        }
    })
})
//post method....................
app.post("/employee/post",(req,res)=>{
    mysqlconnection.query("insert into employee values('1','1000')",(err,rows,fields)=>{
        if(!err)
        {
            res.send("Inserted Successfully");
        }
        else{
            console.log(err);
        }
    })
})

//put method......................
app.put("/employee/put/:id",(req,res)=>{
   
    mysqlconnection.query("update employee set salary=5000 WHERE id=?",[req.params.id],(err,rows,fields)=>{
        if(!err)
        {
            res.send("Updated Successfully");
        }
        else{
            console.log(err);
        }
    })
})



