import { createContext, useState, useContext, useEffect } from 'react';
import { io } from "socket.io-client";

import { useAuth } from './Auth';

const SERVER = "http://localhost:3333";

const SocketContext = createContext();


const SocketProvider = ({ children }) => {

  let { user } = useAuth();
  // const [socket, setSocket] = useState()
  
  // useEffect(() => setSocket(io(
  //   SERVER, user && {
  //     query: {userEmail: user.email},
  //   })), [user])

    let socket = io(
      SERVER, user && {
        query: {userEmail: user.email},
    })
  return (
    <SocketContext.Provider value={{socket}}>
      {children}
    </SocketContext.Provider>
  );
}

function useSocket() {
  const context = useContext(SocketContext);

  if (!context) {
      console.log('useSocket must be used within a SocketProvider')
    throw new Error('useSocket must be used within a SocketProvider')
  }

  return context;
}

export { SocketProvider, useSocket };

