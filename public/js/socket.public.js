var socket = io();

var lblTicket1 = $('#lblTicket1');
var lblTicket2 = $('#lblTicket2');
var lblTicket3 = $('#lblTicket3');
var lblTicket4 = $('#lblTicket4');

var lblDesktop1 = $('#lblDesktop1');
var lblDesktop2 = $('#lblDesktop2');
var lblDesktop3 = $('#lblDesktop3');
var lblDesktop4 = $('#lblDesktop4');

var lblTickets = [lblTicket1, lblTicket2, lblTicket3, lblTicket4];
var lblDesktops = [lblDesktop1, lblDesktop2, lblDesktop3, lblDesktop4];

socket.on('getLast', function(data) {
    console.log(data);
    updateHTML(data.last4)
});

socket.on('last4', function(data) {
    var audio = new Audio('audio/new-ticket.mp3');
    audio.play();
    updateHTML(data.last4);
});

function updateHTML(last4) {
    for (var i = 0; i <= last4.length - 1; i++) {
        lblTickets[i].text('Ticket ' + last4[i].number);
        lblDesktops[i].text('Desktop ' + last4[i].desktop);
    }
}