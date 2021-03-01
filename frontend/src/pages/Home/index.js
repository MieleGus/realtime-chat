import { useState, useEffect } from 'react'
import { AnimationContainer, Container, Content, ChatContainer } from './styles';
import Login from '../Login'
import Register from '../Register';

import { useAuth } from '../../hooks/Auth';
import { useSocket } from '../../hooks/Socket';
import Chat from '../../components/Chat';

export default function Home() {
    
    let { isRegisterPage, isAuthenticated, logout} = useAuth();
    const { socket }  = useSocket();

    useEffect(() => {}, [isAuthenticated ]);

    const handleLogout = async () => {
        await logout()
        socket.disconnect()
    }

    return (
        <>
            <Container isAuthenticated={isAuthenticated}>
                
                    {!isAuthenticated && 
                    <Content>
                        <AnimationContainer>
                            {isRegisterPage ? <Register/> : <Login/>}
                        </AnimationContainer>
                    </Content>
                    }
                
                <Chat/>


            </Container>
        </>
    );
  }
  