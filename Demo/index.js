//! Dependencies -------

const http = require('http')

//!----------------------

//? Start server --------

const server = http.createServer((req,res)=>{
    res.writeHead(200,'Content-type','text/html')
    res.write('<h1>AAAAAAAAAA<h1>')
    res.end()
})

server.listen(3000,()=>{
    console.log('server works')
})