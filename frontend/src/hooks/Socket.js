import { createContext, useRef, useContext, useEffect, useState } from 'react';
import { io } from "socket.io-client";

import { useAuth } from './Auth';

const SERVER = "http://localhost:3333";

const SocketContext = createContext();


const SocketProvider = ({ children }) => {

  let { user } = useAuth();
  const [isSocketInitialized, setIsSocketInitializated] = useState(false)
  const [socket, setSocket] = useState()
  
  useEffect(() => {
    if(!isSocketInitialized){
      setSocket(io(
        SERVER, 
        user && {
          query: {
            userEmail: user.email,
            userName: user.name,
          },
        }
      ));
      setIsSocketInitializated(true)
    }
  }, [user, isSocketInitialized]);
     
  return (
    <SocketContext.Provider value={{socket, isSocketInitialized}}>
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

