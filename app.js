const http = require("http");
http.createServer((req,resp)=>{
         resp.write("This is Elon Mask");
         resp.end();
}).listen(4100);