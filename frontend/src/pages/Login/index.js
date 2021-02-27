import { useRef } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import { useAuth } from '../../hooks';
import Input from '../../components/Input';
import Button from '../../components/Button';


export default function Login() {
    const { enqueueSnackbar } = useSnackbar();

    const formRef = useRef(null);

    let { isRegisterPage, setIsRegisterPage } = useAuth();

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

            enqueueSnackbar('Login realizado com sucesso!', { variant: 'success' });
            
        } catch(error) {
            let errors = {}
            error.inner.forEach((error) => {
                errors[error.path] = error.message;
                enqueueSnackbar(error.message, { variant: 'error' });
            })

            formRef.current.setErrors(errors)
            //aqui
            return
        }   
    }

    const handleChangeRegisterPage = () => {
        setIsRegisterPage(!isRegisterPage)
    }

    return (
        <>
            <Form ref={formRef} onSubmit={handleSubmit}>
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
            </Form>

            <Link onClick={handleChangeRegisterPage}>
                <FiLogIn />
                Criar conta
            </Link>
        </>
    )
}