const http=require("http");
const fs=require("fs");
const myServer=http.createServer((req,res)=>{
    const log=`${Date.now()} ${req.url}:New req Recieved \n`;
    switch (req.url){
        case '/': res.end("Home page");
        case '/about': res.end("I am naveen chaudhary");
        default : res.end("404 not found");
    }
    
    fs.appendFile('log.text',log,(err,data)=>{
        res.end("hello from server ");
    });
   
});
myServer.listen(8000,()=>console.log("server Started"));