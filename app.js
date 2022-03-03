const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const UserFunctions = require('./Functions/User');
const session_handler = require('io-session-handler').from(io)

require('./Configs/Db');
require('./Schemas/User');

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.emit('connected', "LOL")

    session_handler.add(socket, {
        user: {
            id: socket.id
        }
    })

    socket.on('register', (data) => {
        UserFunctions.CreateUser(data, { Language: "TR" }).then((user) => {
       
        }).catch((err) => {
            socket.emit('register-failed', err);
        });
    });

    socket.on('disconnect', (data) => {
        // UserFunctions.RemoveUser(data.id);
        console.log('user disconnected', JSON.stringify(data));
    });

    // Login
    socket.on('login', (data) => {
        data = JSON.parse(data);

        UserFunctions.LoginUser(data, { Language: "TR" }).then((user) => {
            socket.emit('login-failed', JSON.stringify({
                status: "success",
                message: "Logged in successfully!"
            }));
            session_handler.set(socket, {
                user: {
                    id: socket.id,
                    uid: user._id,
                    username: user.username
                }
            });
        }).catch((err) => {

            socket.emit('login-failed', JSON.stringify(err));
        });
    });

    socket.on('register', (data) => {
        data = JSON.parse(data);

        UserFunctions.CreateUser(data, { Language: "TR" }).then((user) => {
            socket.emit('register-failed', JSON.stringify({
                status: "success",
                message: "Succesfully registered."
            }));
        }).catch((err) => {

            socket.emit('register-failed', JSON.stringify(err));
        });
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});