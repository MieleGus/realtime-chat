import { useRef, useEffect, useState } from 'react';
import { Form } from '@unform/web';
import { useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { useSocket } from '../../hooks/Socket';
import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api'
import { useAuth } from '../../hooks/Auth';
import ClipLoader from "react-spinners/ClipLoader";
import { css } from 'styled-components'

import { Container, ChatMessagesContainer, Message  } from './styles';


export default function Chat() {
    const [messages, setMessages] = useState([])
    const [loading, setLoading] = useState(true)
    let { roomId } = useParams();
    const { socket, isSocketInitialized } = useSocket();
    let { user, isAuthenticated } = useAuth();
    const { enqueueSnackbar } = useSnackbar();
    const formRef = useRef(null);

    const override = css`
        display: block;
        margin: auto;
        align-self: center;
        justify-self: center;
        border-color: #19d3da;
        margin-top: 20%;
    `;
    
    if (!roomId) roomId = 'general'

    const joinRoom = async () => {
        console.log("🚀 ~ file: index.js ~ line 34 ~ joinRoom ~ isSocketInitialized", isSocketInitialized)
        if (isSocketInitialized) {
            console.log('JOIN ROOM')
             socket.emit('joinRoom', {room: roomId});
        }
    }


    const getMessagesFromRoom = async () => {
        try {
            console.log('chegou get messages from room')
            setLoading(true);
            let response = await api.get('/messages', {
                params: {
                    room: roomId
                }
            });
            if (user) {
                for (let item of response.data) {
                    if (item.sender_id === user._id) {
                        item.isAuthor = true;
                    }
                }
            }
            
            setMessages(response.data);
            setLoading(false);
        } catch(error){
            setLoading(false);
        }
    }

    useEffect(() => {
        getMessagesFromRoom();
        joinRoom();
        roomControl();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSocketInitialized]);

    const roomControl = () => {
        if (isSocketInitialized) {
            socket.on("room", function(newMessage) {
                console.log("🚀 joined room", newMessage)
            });

            socket.on('receivedMessage', function(newMessage) {
                console.log("🚀 ~ file: index.js ~ line 83 ~ socket.on ~ receivedMessage", newMessage)
                if (newMessage.sender_id) {
                    if (newMessage.sender_id === user._id) {
                        newMessage.isAuthor = true;
                    }
                }
               
                setMessages(state => [...state, newMessage])
            });
        }
    }
    
    const handleSubmit = async (data) => {
        try {
            if (!user) {
                enqueueSnackbar('Você precisa estar logado para enviar mensagens.', { variant: 'error' });
                formRef.current.reset();
                return
            }

            socket.emit('chatMessage', {message: data.message, sender_id: user._id, room_id: roomId, sender_name: user.name });
            formRef.current.reset();
            // await getMessagesFromRoom();

        } catch(error) {
        console.log("🚀 ~ file: index.js ~ line 68 ~ handleSubmit ~ error", error)
           
            enqueueSnackbar('Ocorreu um erro ao fazer Chat, usuário e/ou senha inválidos.', { variant: 'error' });
            return
        }   
    }


    return (
        <>
        <Container isAuthenticated={isAuthenticated}> 
            <ChatMessagesContainer>
                {loading 
                    ?
                        <ClipLoader color={'#19d3da'} loading={loading} css={override} size={120} />
                    :
                        messages.map((item, index) => (
                            <Message isAuthor={item.isAuthor || ''} key={index}>{item.sender_name && <span>{`${item.sender_name }:`}</span>}{item.message}</Message>
                        ))
                    }
                    
            </ChatMessagesContainer>
            <Form ref={formRef} onSubmit={handleSubmit}>
                {/* <h1> Chat</h1> */}
            
                <Input 
                    isChatInput="true"
                    name="message" 
                    placeholder="Digite sua mensagem" 
                />
            
                <Button isChatButton="true" isAuthenticated={isAuthenticated} type="submit">Enviar</Button>
            </Form>
        </Container>
            
        </>
    )
}