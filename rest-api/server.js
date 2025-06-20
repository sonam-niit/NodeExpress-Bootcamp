const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.status(200).send('Get Method Triggered')
})
app.post('/',(req,res)=>{
    res.status(201).send('data created successfully')
})
app.put('/',(req,res)=>{
    res.status(200).send('data updated successfully')
})
app.delete('/',(req,res)=>{
    res.status(404).send('User not found to delete')
})
app.listen(5000,()=>console.log('server started'))