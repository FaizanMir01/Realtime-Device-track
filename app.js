const express =require('express');
const app= express();
const socketio = require("socket.io");
const http = require("http");
const path = require("path");

app.set(express.static(path.join(__dirname,"public")));
app.set("veiw engine", "ejs");


const server = http.createServer(app);
const io= socketio(server);



app.get("/",(req,res)=>{
    res.send("hey");
})

app.listen(3000);