var socket = io();

var searchParams = new URLSearchParams(window.location.search);
if (!searchParams.has('desktop')) {
    window.location = 'index.html';
    throw new Error('Desktop is necessary');
}

var desktop = searchParams.get('desktop');
var label = $('small');

console.log(desktop);
$('h1').text('Desktop ' + desktop);

$('button').on('click', function() {
    socket.emit('solveTicket', { desktop: desktop }, function(res) {
        if (res === '0 people in queue') {
            $('h4').text('No tickets');
            alert(res);
            return;
        }

        label.text('Ticket ' + res.number);
    });
});