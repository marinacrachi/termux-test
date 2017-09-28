var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function (socket) {
    console.log('a user connected');

    socket.on('disconnect', function () {
        console.log('user disconnected');
    });

    socket.on('sync', function (data) {
        console.log(data);
        socket.broadcast.emit("sync", data);
    });

    socket.on('open-video', function (data) {
        console.log(data);
        socket.broadcast.emit("open-video", data);
    });


});

http.listen(3000, function () {
    console.log('listening on *:3000');
});
