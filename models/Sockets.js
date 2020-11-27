

class Sockets {

    constructor ( io ) {
        this.io = io;

        this.socketEvents();

    }

    socketEvents () {

        this.io.on( 'connection', ( socket ) => {
            // console.log( 'Cliente conectado!: ', socket.id );

            // Eschar evento: mensaje-to-server
            socket.on( 'mensaje-to-server', ( data ) => {
                console.log( data );

                // io le envia a todos
                this.io.emit( 'mensaje-from-server', data );
            } );

        } );
    }
}

module.exports = Sockets;
