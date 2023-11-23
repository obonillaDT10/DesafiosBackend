const http = require('http');
const express = require('express');
const app = express();

app.listen(8080), () => console.log("Server is listening, por 8080");
const server = http.createServer((request, response) => {
    express.response.end("Mi primer servidor de backend!")
})

server.listen(8080, ()=>{
    console.log("Listening on port 8080")
})


a