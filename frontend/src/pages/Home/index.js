import { useRef } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content } from './styles';
export default function Home() {
    const formRef = useRef(null);
    console.log("🚀 ~ file: index.js ~ line 9 ~ Home ~ formRef", formRef)

    const handleSubmit = async (data) => {
        try {
            formRef.current.setErrors({})
        
            console.log("🚀 ~ file: index.js ~ line 12 ~ handleSubmit ~ data", data)

            const schema = Yup.object().shape({
                email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
                password: Yup.string().required('Senha obrigatória'),
            });
        
            await schema.validate(data, {
                abortEarly: false,
            });
            
        } catch(error) {
            let errors = {}
            error.inner.forEach((error) => {
                errors[error.path] = error.message;
            })

            formRef.current.setErrors(errors)

            //aqui
            return

        }   
    
    }

    return (
        <>
            <Container>
                <Content>
                    <Form ref={formRef} onSubmit={handleSubmit} >
                        <h1>Faça seu login</h1>
                        <Input 
                            name="email" 
                            icon={FiMail} 
                            placeholder="E-mail" 
                        />
                        <Input
                            name="password"
                            icon={FiLock}
                            placeholder="Senha"
                            type="password"
                        />
                        <Button type="submit">Entrar</Button>
                        {/* <Button type="submit">Entrar</Button> */}
                    </Form>
                </Content>
            </Container>
        </>
    );
  }
  