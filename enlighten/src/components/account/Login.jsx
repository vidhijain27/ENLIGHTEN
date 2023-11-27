import { useState } from 'react';
import { Box, TextField, Button, styled, Typography } from '@mui/material';

import { API } from '../../service/api';
// import { set } from 'mongoose';

const Component = styled(Box) `
    width: 400px;
    margin-top: auto;
    margin-left: 150px;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0 / 50%);
`

const Image = styled('img')({
    width: 250, 
    margin: 'auto',
    display: 'flex',
    padding: '50px 0 0'
});

const Wrapper = styled(Box) `
    padding: 25px 35px;
    display: flex;
    flex: 1;
    flex-direction: column;
    & > div, & > button, & > pf {
        margin-top: 30px;
    }
`
const LoginButton = styled(Button)`
    text-transform: none;
`;
const SignUpButton = styled(Button)`
    text-transform: none;
`;

const Error = styled(Typography)`
    text-size: 10px;
`
const Text = styled(Typography)`
    font-size: 20px;
`

const signUpInitialValues = {
    name: '',
    username: '',
    password: ''
}

const loginInitialValues = {
    username: '',
    password: ''
}

const Login = () => {

    const imageURL = 'https://png.pngtree.com/png-clipart/20230430/original/pngtree-yoga-day-cartoon-meditation-png-image_9127494.png';

    const [ account, toggleAccount ] = useState('login');
    const [ signup, setSignup ] = useState(signUpInitialValues);
    const [ error, setError ] = useState('');
    const [ login, setLogin ] = useState(loginInitialValues);

    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const signUpUser = async () => {
        let response = await API.userSignup(signup);
        if (response.isSuccess) {
            setError('');
            setSignup(signUpInitialValues);
            toggleAccount('login')
        } else {
            setError('Something went wrong! please try again later');
        }
    }

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value})
    }

    const loginUser = async () => {
        let response = await API.userLogin(login);
        if (response.isSuccess) {
            setError('');


        }
        else {
            setError('Something went wrong');
        }
    }

    return (
        <Component>
            <Box>
            <Image src={imageURL} alt = "login" />
            {
                account === 'login' ? 
                <Wrapper>
                    <TextField variant='standard' value={login.username} onChange={(e) => onValueChange(e)} name="username" label= "Enter username" />
                    <TextField variant='standard' value={login.password} onChange={(e) => onValueChange(e)} name="password" label= "Enter password" />
                    { error && <Error>{error}</Error>}
                    <LoginButton variant='contained' onClick={() => loginUser()}>Login</LoginButton>
                    <Text style= {{ textAlign: 'center'}}>or</Text>
                    <SignUpButton onClick={() => toggleSignup()}>Create an account</SignUpButton>
                </Wrapper>
                :
                <Wrapper>
                    <TextField variant='standard' onChange={(e) => onInputChange(e)} name='name' label= "Enter name" />
                    <TextField variant='standard' onChange={(e) => onInputChange(e)} name='username' label= "Enter username" />
                    <TextField variant='standard' onChange={(e) => onInputChange(e)} name='password' label= "Enter password" />

                    { error && <Error>{error}</Error>}
                    <SignUpButton onClick={() => signUpUser( )}>SignUp</SignUpButton>
                    <Text style= {{ textAlign: 'center'}}>or</Text>
                    <LoginButton variant='contained' onClick={() => toggleSignup()}>Already have an account</LoginButton>
                </Wrapper>
            }
            </Box>
        </Component>
    )
}

export default Login;



