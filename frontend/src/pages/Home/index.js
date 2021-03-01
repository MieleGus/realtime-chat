import { useEffect } from 'react'
import { AnimationContainer, Container, Content, LogoutContainer } from './styles';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';

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
                
                {isAuthenticated 
                    ?
                        <LogoutContainer>
                            <Link onClick={handleLogout}>
                                <FiLogOut />
                                Logout
                            </Link>
                        </LogoutContainer>
                    :
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
  