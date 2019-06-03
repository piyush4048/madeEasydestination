var socket = io.connect('http://localhost:3000');


var message = document.getElementById('message');
     btn = document.getElementById('send'),
     handle = document.getElementById('handle'),
     feedback=document.getElementById('feedback'),
     output = document.getElementById('output');


//Emitting messages

btn.addEventListener('click',function(){
    socket.emit('chat',{
        message : message.value,
        handle : handle.value
    });//emits message to srver on click of send button
});



message.addEventListener('keypress', function(){
    socket.emit('typing',handle.value);
})


//Listening for data coming from the server
socket.on('chat',function(data){
    feedback.innerHTML='';
    output.innerHTML += '<p><strong>' + data.handle + ':<strong>' + data.message + '</p>'; 
})


socket.on('typing',function(data){
    feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
})