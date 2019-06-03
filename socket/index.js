var express = require('express');
var app = express();




var socket = require('socket.io');

const port = 3000;

var server = app.listen(port,function(){
    console.log(`Listening on port : ${port}`);
})



app.use(express.static('public'));


var io = socket(server)

//Socket connection
io.on('connection', function(socket){
    console.log('Established Socket conncetion.',socket.id);

    //now listening to the messages being sent from the client
    socket.on('chat',function(data){
        io.sockets.emit('chat',data);//this is emitting data to all the connected sockets    
    })

    socket.on('typing',function(data){
        socket.broadcast.emit('typing',data);
    })

});







