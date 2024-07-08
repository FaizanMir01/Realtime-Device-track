const express =require('express');
const app= express();
const socketio = require("socket.io");
const http = require("http");
const path = require("path");

app.set(express.static(path.join(__dirname,"public")));
app.set("view engine", "ejs");


const server = http.createServer(app);
const io= socketio(server);

io.on("connection",(socket)=>{
    socket.on("send-location",(data)=>{
        io.emit("recieve-location",{id:socket.id,...data});

    })
   socket.on("disconnect",()=>{
    io.emit("user-disconnected",{id:socket.id})
   })

})



app.get("/",(req,res)=>{
    res.render("index");
})

app.listen(3000);