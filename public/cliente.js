

// conexion al socket
const socket = io( 'http://localhost:8080/' );

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

			// escuhamos al servidor
/* socket.on('mensaje-bienvenida', (data) => {
    console.log('data', data);
}); */

/* setTimeout(() => {
    // emitimos el evento
    socket.emit('mensaje-cliente', {
        msg: 'cliente',
        nombre: 'Kevin Echeverri',
    });
}, 2000);*/