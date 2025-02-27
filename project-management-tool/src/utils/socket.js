import { io } from 'socket.io-client';

export const initSocket = () => {
    return io('http://localhost:5000', {
      withCredentials: true,
      transports: ['websocket'],
      autoConnect: false
    });
  };