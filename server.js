const express= require('express')
const mysql = require('mysql')
const cors =require('cors')
const bp = require('body-parser')

const app=express()
app.use(cors())
app.use(express.json())
const db=mysql.createConnection(
    {
        host:"sql6.freesqldatabase.com",
        user:'sql6685684',
        password:"RjnUBFvL6E",
        database:'sql6685684'
    }
)

app.get('/',(req,res)=>{
    const sql = "SELECT * FROM emp";
    db.query(sql,(err,r)=>{
        if(err) return res.json({mes: "error"});
        return res.json(r);

    }
    )
})
app.delete('/del', (req, res) => {
    const v = req.body.i; 
    const sql = "DELETE FROM `emp` WHERE empid = ?"; 
    db.query(sql, v, (err, r) => {
        if (err) {
            return res.json(err);
        } else {
            return res.json(r);
        }
    });
});

app.post('/ser',(req,res)=>{
    const sql = "INSERT INTO emp (empid,name,dept,salary,gender,desg,dob) VALUES (?)"
    
    const vla = [
        req.body.empid,
        req.body.name,
        req.body.dept,
        
        req.body.salary,
        req.body.gender,
        req.body.desg,
        req.body.dob,
    ]
    
    db.query(sql,[vla],(err,r)=>{
        if(err){
            return res.json(err)
        } 
        else{
            return res.json(r)
        }
    
    })
})
app.listen(7000,()=>{
    console.log("running")
    
})