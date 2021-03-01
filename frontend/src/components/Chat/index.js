import { useRef, useEffect, useState } from 'react';
import { Form } from '@unform/web';
import { useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { useSocket } from '../../hooks/Socket';
import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api'
import { useAuth } from '../../hooks/Auth';


import { Container, ChatMessagesContainer, Message, InputMessageContainer } from './styles';


export default function Chat() {
    const [messages, setMessages] = useState([])
    let { roomId } = useParams();
    const { socket } = useSocket();
    let { user, isAuthenticated } = useAuth();
    const { enqueueSnackbar } = useSnackbar();
    const formRef = useRef(null);

    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
      }, [messages]);

    const getMessagesFromRoom = async () => {
        try {
            const response = await api.get('/messages');

            setMessages(response.data);
        } catch(error){
            console.log("🚀 ~ file: index.js ~ line 33 ~ getMessagesFromRoom ~ error", error);
        }
    }

    useEffect(() => {
        getMessagesFromRoom();
    }, []);

    socket.on('receivedMessage', function(newMessage) {
        getMessagesFromRoom();
        console.log("🚀 NEW SAGEMSSAGE@@@@@", newMessage)

    });

    const handleSubmit = async (data) => {
        try {
            if (!user) {
                enqueueSnackbar('Você precisa estar logado para enviar mensagens.', { variant: 'error' });
                return
            }

            socket.emit('chatMessage', {message: data.message, sender_id: user._id, room_id: roomId, sender_name: user.name });
            formRef.current.reset();
            await getMessagesFromRoom();

        } catch(error) {
           
            enqueueSnackbar('Ocorreu um erro ao fazer Chat, usuário e/ou senha inválidos.', { variant: 'error' });
            return
        }   
    }


    return (
        <>
        <Container isAuthenticated={isAuthenticated}> 
            <ChatMessagesContainer>
                {messages.map(item => (
                    <Message>{item.message}</Message>
                ))}
                    
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