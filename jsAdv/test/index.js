const http= require("http");
const app=http.createServer((req,res)=>{
     res.writeHead(200, { 'Content-Type': 'text/plain' });
    console.log("new req rec ");
    res.end("hello from sever");
    
});
app.listen(8000,'localhost',()=>console.log("server started"))