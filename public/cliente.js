

// conexion al socket
const socket = io( 'http://localhost:8080' );

// referencias a elementos del DOM
const formulario = document.querySelector( '#miFormulario' );
const mensajes = document.querySelector( '#misMensajes' );
const txtMensaje = document.querySelector( '#txtMensaje' );


socket.on( 'mensaje-from-server', ( data ) => {
    // callback
} );

