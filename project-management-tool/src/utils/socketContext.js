// src/utils/socketContext.js
import { createContext, useContext } from 'react';
import { initSocket } from './socket';

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const socket = initSocket();

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);