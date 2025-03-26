const http = require ("http");
const server = http.createServer((req,res)=>{
 console.log(req.url);
 res.setHeader('content-type','text/html');
 res.write("<html><head><title>testing web</title></head><body><h1>hello world</h1></body></html>");
 res.end();
})
const PORT= 3000;
server.listen(PORT,()=>{
    console.log("server is lisning at http://localhost:3000")
})
