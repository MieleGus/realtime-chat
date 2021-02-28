import { useRef, useState } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import { useAuth } from '../../hooks/Auth';
import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api'

import { Container, ChatMessagesContainer, Message } from './styles';


export default function Chat() {
    const { enqueueSnackbar } = useSnackbar();
    
    const formRef = useRef(null);


    const handleSubmit = async (data) => {
        try {
           
            
        } catch(error) {
           
            enqueueSnackbar('Ocorreu um erro ao fazer Chat, usuário e/ou senha inválidos.', { variant: 'error' });
            return
        }   
    }


    return (
        <>
        <Container>
            <ChatMessagesContainer>
                     <Message>tewtrwetewtewtwetwetwtwtew</Message>
                     <Message>teste</Message>
                     <Message>teste</Message>
                     <Message>tewtrwetewtewtwetwetwtwtew</Message>
                     <Message>teste</Message>
                     <Message>teste</Message>
                     <Message>tewtrwetewtewtwetwetwtwtew</Message>
                     <Message>teste</Message>
                     <Message>teste</Message>
                     <Message>tewtrwetewtewtwetwetwtwtew</Message>
                     <Message>teste</Message><Message>tewtrwetewtewtwetwetwtwtew</Message>
                     <Message>teste</Message>
                     <Message>teste</Message><Message>tewtrwetewtewtwetwetwtwtew</Message>
                     <Message>teste</Message>
                     <Message>teste</Message>
                     <Message>teste</Message>
            </ChatMessagesContainer>
            
            <Form ref={formRef} onSubmit={handleSubmit}>
                {/* <h1> Chat</h1> */}
               
                <Input 
                    isChatInput="true"
                    name="message" 
                    placeholder="Digite sua mensagem" 
                />
               
                <Button isChatButton="true" type="submit">Enviar</Button>
            </Form>
        </Container>
            
        </>
    )
}