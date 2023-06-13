const http = require("http");

const server = http.createServer((req, res)=>{
    if(req.url === "/"){
        res.write("Welcome to our home page") 
        return;
    }
    // res.end("hy")
    if (req.url === "/about"){
        res.write("Here is the about page")
    }
    if(req.url !== "/about" || req.url !== "/"){


        res.end(`
        <h1>Page 404</h1>
        
        <p>Page not available</p>
        <a href="/">back home</a>   
        `)
    }
})

server.listen(5000)