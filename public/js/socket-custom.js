const socket = io();
socket.on('connect', (params) => {
    console.log('Conectado al servidor');
});

// Escuchar
socket.on('disconnect', () => {
    console.log('Perdimos coneccion con el server');
});

// Enviar informacion
socket.emit(
    'enviarMensaje',
    {
        usuario: 'Erick',
        mensaje: 'Hola Mundo'
    },
    (resp) => {
        console.log('Respuesta server:', resp);
    }
);

// Escuchar informacion
socket.on('enviarMensaje', (mensaje) => {
    console.log('Servidor:', mensaje);
});