// servidor de express
const express = require( 'express' );
const http = require( 'http' );
const socketio = require( 'socket.io' );
const path = require( 'path' );
const Sockets = require( './Sockets' );


class Server {

    constructor () {

        this.app = express();
        this.port = process.env.PORT;
        // this.port = 8081;

        //http server
        this.server = http.createServer( this.app );

        // configuracion del socket server
        this.io = socketio( this.server, {/* configuraciones */ } );

    }

    middleware () {
        //desplegar directorio publico
        this.app.use( express.static( path.resolve( __dirname, '../public' ) ) );
    }

    configurarSockets () {

        new Sockets( this.io );

    }

    //metodos
    execute () {



        // inicializar middlewares
        this.middleware();

        // inicializar sockets
        this.configurarSockets();

        this.server.listen( 8080, () => {
            console.log( 'server corriendo en puerto', this.port );
        } );
    }

}


module.exports = Server;