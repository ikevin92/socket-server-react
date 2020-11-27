
// conexion al socket
const socket = io( 'https://react-socket-server-01.herokuapp.com/' );
// const socket = io( 'http://localhost:8080' );

// referencias a elementos del DOM
const formulario = document.querySelector( '#miFormulario' );
const mensajes = document.querySelector( '#misMensajes' );
const txtMensaje = document.querySelector( '#txtMensaje' );

formulario.addEventListener( 'submit', ( e ) => {
    e.preventDefault();

    const nuevoMensaje = txtMensaje.value;
    console.log( nuevoMensaje );

    // enviamos mensaje al servidor
    socket.emit( 'mensaje-to-server', { texto: nuevoMensaje } );

    txtMensaje.value = '';
} );

socket.on( 'mensaje-from-server', ( data ) => {
    console.log( 'data: ', data );

    mensajes.innerHTML += `<li>${ data.texto }</li>`;
} );
