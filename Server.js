var express = require("express");
var app = express();
app.use(express.static("./public"));
var server = require("http").Server(app);
var io = require('socket.io')(server);
server.listen(3000);

console.log("Dung tat cai nay de tui ngoc sy test :D");
io.on("connection", function (socket) {
    socket.on("client-send", function () {
        io.sockets.emit("server-send");
    });
});

// io.on("connection", function (socket) {
//     socket.on("dangkyUsername", function (data) { });

//     io.to("socket_id").emit("ten_Connection", data);
//     io.sockets.emit('ten_Connection', data);
//     io.sockets.in("ten_channel").emit("ten_Connection", data);
// });

// <script src="/socket.io/socket.io.js"></script>
// var socket = io('http://localhost:3000');

// socket.on("dsDangKy", function (data) { });
// socket.emit("ten_Connection", data);
