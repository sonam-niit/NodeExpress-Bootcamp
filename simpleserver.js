//http is a module which is provided by node it self
//module means already created features by someone which we
//are just importing and using it.
const http= require('http'); //import http module

//created Server
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'})
    res.write('<h1>Hello from My NodeJS Server</h1>'); //writing response
    res.end();//end response
})

//Start the server
server.listen(5000,()=>console.log('server started'));