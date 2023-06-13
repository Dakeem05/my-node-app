const http = require("https")

const server = http.createServer()

server.on("request", (req, res)=>{
    res.end("Welcome")
})

server.listen(5000)