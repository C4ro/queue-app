// Command to establish the connection
var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('Connected to server');
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

socket.on('getLast', function(res) {
    label.text(res.last)
});

$('button').on('click', function() {

    socket.emit('nextTicket', null, function(nextTicket) {
        label.text(nextTicket);
    });

});