const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const server = app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});

const io = require('socket.io')(server, {cors:true});
const messages=[];
io.on("connection", socket=> {
    console.log("Nice to meet you.(shake hand)");
    socket.emit("connection", "Welcome to my world habibi!");
    socket.emit("chat", messages);
    socket.on("chat", (data)=>{messages.push(data);io.emit("chat", messages);});
})