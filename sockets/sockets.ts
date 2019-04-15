import { Socket } from 'socket.io';
import socketIO from 'socket.io';


export const disconnect = ( cliente: Socket) =>{
    cliente.on('disconnect', () => {
        console.log('Cliente desconectado');       
    });
}
// Escuchar mensajes
export const menssage = ( cliente: Socket, io: socketIO.Server) => {
    cliente.on('mensaje', (payload: {de:string, body:string}) =>{
        console.log('Mensaje recibido: ', payload);

        io.emit('mensaje-nuevo', payload);
        
    });
}