let query="select * from employee";

if(req.query){
    console.log("in query", req.query);
    if(req.query.empId){
        query += "where empId = "+req.query.empId;
    }
    
}