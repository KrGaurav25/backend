const express= require('express')
const app=express()
const contacts=require('./ContactData')
const cors = require('cors');
app.use(cors())
app.get('/home',(req,res)=>{
res.send(JSON.stringify(contacts))
})
// app.get('/user',(req,res)=>{
//     res.send('user data')
// })
app.listen(3001,()=>{console.log("server has been started at port 3001")})