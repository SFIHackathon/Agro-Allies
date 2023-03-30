import React, { useState } from 'react'

import Navbar from './Navbar'
import Footer from './Footer';

import './styles/Login.css'

import { Stack, Box, Container, TextField, Button, Typography } from '@mui/material'

const Login = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

//   submit the form
  const handleSubmit = (e) => {
    e.preventDefault(); //stops from refreshing

    setEmail('');
    setPassword('');
  } 

  return (
    <>
        <Navbar />
        <div className='login'>
            

            <Stack direction='row' spacing={0} className='login-formContainer'>

                <Container maxWidth='xs'>
                    <form className='login-form' onSubmit={handleSubmit}>
                        <TextField
                            variant='outlined'
                            label='email'
                            type='email'
                            autoComplete='email'
                            fullWidth
                            autoFocus

                            className='login-email'
                            sx={{ mb: 3 }}

                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField 
                            variant='outlined'
                            label='password'
                            fullWidth
                            type='password'

                            className='login-password'
                            sx={{ mb: 2 }}

                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Typography variant='p' component='div' sx={{ color:'#1976d2', cursor:'pointer', ':hover':{textDecoration:'underline'} }}>
                            Forgot password ?
                        </Typography>
                        <Button type='submit' variant='contained' color='primary' fullWidth sx={{mt:3}}>Login</Button>
                    </form>
                </Container>

                <Box sx={{width: '50%'}} className='login-formContainerInfo'>
                    <Typography variant='h5' component='div' sx={{mt:'45%',color:'white', fontWeight:'bold', textAlign:'center'}}>
                        Connecting farmer and buyer for better future!
                    </Typography>
                </Box>

            </Stack>
        </div>
        <Footer />
    </>
  )
}

export default Login