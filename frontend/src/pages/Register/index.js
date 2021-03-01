import { useRef } from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCalendar } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import { useAuth } from '../../hooks/Auth';
import Input from '../../components/Input';
import Button from '../../components/Button';


export default function Register() {
    const { enqueueSnackbar } = useSnackbar();

    const formRef = useRef(null);

    let { isRegisterPage, setIsRegisterPage, register } = useAuth();

    const handleSubmit = async (data) => {
        try {
            formRef.current.setErrors({})
        
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório!'),
                email: Yup.string().required('E-mail obrigatório!').email('Digite um e-mail válido'),
                birthday: Yup.string().required('Data de nascimento obrigatória!'),
                password: Yup.string().required('Senha obrigatória!'),
            });
        
            await schema.validate(data, {
                abortEarly: false,
            });

            await register(data);
            
            enqueueSnackbar('Cadastrado com sucesso!', { variant: 'success' });
            
        } catch(error) {
            let errors = {}
            console.log("🚀 ~ file: index.js ~ line 42 ~ handleSubmit ~ error", error)
            if (error instanceof Yup.ValidationError) {
                error.inner.forEach((error) => {
                    errors[error.path] = error.message;
                    enqueueSnackbar(error.message, { variant: 'error' });
                    formRef.current.setErrors(errors)
                })
                return;
            }

            enqueueSnackbar('Email já existente!', { variant: 'error' });
            return
        }   
    }

    const handleChangeRegisterPage = () => {
        setIsRegisterPage(!isRegisterPage)
    }

    return (
        <>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <h1>Faça seu registro</h1>
                <Input 
                    name="name" 
                    icon={FiUser} 
                    placeholder="Nome" 
                />
                <Input 
                    name="email" 
                    icon={FiMail} 
                    placeholder="E-mail" 
                />
                <Input 
                    name="birthday" 
                    icon={FiCalendar} 
                    placeholder="Data de Nascimento" 
                    type="date"
                />
                <Input
                    name="password"
                    icon={FiLock}
                    placeholder="Senha"
                    type="password"
                />
                <Button type="submit">Cadastrar</Button>
            </Form>
            <Link onClick={handleChangeRegisterPage}>
                    <FiArrowLeft />
                    Voltar para logon
            </Link>
        </>
    )
}