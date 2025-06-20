const express = require('express');

const app= express(); //server created

//localhost:5000/
app.get('/',(req,res)=>{
    // res.status(200).send('<h1>This is My landing Page</h1>')
    res.sendFile(__dirname+'/views/index.html')
})
//localhost:5000/about
app.get('/about',(req,res)=>{
    res.status(200).send('<h1>This is My About Us Page</h1>')
})
//localhost:5000/contact
app.get('/contact',(req,res)=>{
    res.status(200).send('<h1>Contact Us</h1>')
})
app.get('/hello',(req,res)=>{
    res.status(200).send('<h1>Hello From SONAM')
})
app.listen(5000,()=>console.log('Server started'))