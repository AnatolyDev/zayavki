import React, { useState } from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const SignIn = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = e => {
        setLogin(e.target.value)
    }

    const handlePassword = e => {
        setPassword(e.target.value)
    }

    const loginClick = () => {
        alert(login + ' ' + password)
    }

    return (
        <>
            <Container maxWidth="sm">
                <Typography component="div" className='signin' >
                    <div>
                        <TextField
                            required
                            id="standard-required"
                            label="Login"
                            defaultValue=""
                            onChange={handleLogin}
                        />
                    </div>
                    <div>
                        <TextField
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            onChange={handlePassword}
                        />
                    </div>
                    <div>
                        <Button onClick={loginClick}>
                            Войти
                        </Button>
                    </div>
                </Typography>
            </Container>
        </>
    )
}

export default SignIn;