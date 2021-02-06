const express = require("express");
const app = express();
const cors = require("cors");
const socketio = require("socket.io");
const router = require("./router/chat");
const { sendMessage, sendLocation } = require("./utils/messages");
const {addUser, removeUser, getUser, getUsersInRoom} = require('./utils/users')

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3001;

app.use(router);

// const server

const server = app.listen(port, () => {
  console.log("server runs on port ", port);
});

const io = socketio(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("join", ({ name, room }, cb) => {
    
    const {error, user} = addUser({id:socket.id,name: name,room: room})
    if(error){
        return cb(error)
    }

    socket.join(user.room);
    socket.to(user.room).emit("welcome", sendMessage("Welcome to the chat application"));
    socket.to(user.room).broadcast.emit("welcome", sendMessage("New user join"));
  });

  socket.on("send", (message, cb) => {
    const {user,error} = getUser(socket.id)
    if(error){
        return cb('can not send messages')
    }

    io.to(user.room).emit("message", sendMessage(message, user.name));
    cb();
  });

  socket.on("sendLocation", ({ latitude, longitude }, cb) => {
    const {user, error} = getUser(socket.id)
    if(error){
        return cb('can\'t send message')
    }
    io.to(user.room).emit(
      "location",
      sendLocation(`https://google.com/maps?q=${latitude},${longitude}`,user.name)
    );
    cb();
  });

  socket.on("disconnect", () => {
    io.emit("message", sendMessage("user leave"));
  });
});

// const io = require("socket.io-client");
// const socket = io("https://api.example.com", {
//   withCredentials: true,
//   extraHeaders: {
//     "my-custom-header": "abcd"
//   }
// });
