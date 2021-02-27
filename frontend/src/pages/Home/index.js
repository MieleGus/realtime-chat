import { useState, useEffect } from 'react'
import { AnimationContainer, Container, Content } from './styles';
import Login from '../Login'
import Register from '../Register';

import { useAuth } from '../../hooks';

export default function Home() {
    
    let { isRegisterPage, isAuthenticated, logout} = useAuth();

    useEffect(() => {}, [isAuthenticated ]);

    return (
        <>
            <Container>
                <Content>
                    {!isAuthenticated && 
                        <AnimationContainer>
                            {isRegisterPage ? <Register/> : <Login/>}
                        </AnimationContainer>
                    }
                </Content>
                <button onClick={logout}>logout</button>
            </Container>
        </>
    );
  }
  