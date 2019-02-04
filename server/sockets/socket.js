const { io } = require('../server');
const { TicketControl } = require('../classes/ticket-control')

const ticketControl = new TicketControl();

io.on('connection', (client) => {

    client.on('nextTicket', (data, callback) => {
        let next = ticketControl.next();
        console.log(next);
        callback(next);
    });

    client.emit('getLast', {
        last: ticketControl.getLast(),
        last4: ticketControl.getLast4()
    });


    client.on('solveTicket', (data, callback) => {
        if (!data.desktop) {
            return callback({
                err: true,
                message: 'Desktop necessary'
            })
        }

        let solveTicket = ticketControl.solveTicket(data.desktop);

        callback(solveTicket);

        client.broadcast.emit('last4', {
            last4: ticketControl.getLast4()
        })

    });

});