import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar'
import Footer from './Footer'

import './styles/Register.css'

import { Container, TextField, Button, Typography } from '@mui/material'

const Register = () => {

  // submission fields.
  const [Location, setLocation] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [farmname, setFarmname] = useState('');


  const location = useLocation();

  const [showusername, setShowUsername] = useState(false);
  const [showfirstName, setShowFirstName] = useState(false);
  const [showlastName, setShowLastName] = useState(false);
  const [showfarmName, setShowFarmName] = useState(false);

  useEffect(() => {
    const lastPathSegment = location.pathname.split('/').pop(); //get registerSeller or Buyer.

    if (lastPathSegment === 'registerSeller') {
      setShowFirstName(true);
      setShowLastName(true);
      setShowFarmName(true);
    }
    else if (lastPathSegment === 'registerBuyer') {
      setShowUsername(true);
    }

  }, [location.pathname]);

  const handle_regsiter_submit = (e) => {
    e.preventDefault();
    //depending upon the location path we will perform further operation, if pathname is seller we won't
    //consider the username.
  }

  return (
    <>
      <Navbar />
      <div className='register'>

        <Container maxWidth='sm' className='register-form' sx={{mb:3}}>
          <Typography variant='h4' component='div' sx={{mb: 3, textShadow:'0px -1px 1px rgba(10, 141, 72, 1)'}}>
            Register With Agro Allies
          </Typography>
          <form onSubmit={handle_regsiter_submit}>
            <TextField 
              label='Location/Address'
              variant='outlined'
              type='text'
              autoFocus
              fullWidth
              required
              InputLabelProps={{
                classes: {
                  asterisk: 'required-color',
                },
              }}
              sx={{mb:3}}
              value={Location}
              onChange={(e) => setLocation(e.target.value)}
            />

            {showusername && (
              <TextField 
                label='Username'
                variant='outlined'
                type='text'
                fullWidth
                required
                InputLabelProps={{
                  classes: {
                    asterisk: 'required-color',
                  },
                }}
                sx={{mb:3}}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            )}

            <TextField 
              label='Phone'
              variant='outlined'
              type='tel'
              fullWidth
              required
              InputLabelProps={{
                classes: {
                  asterisk: 'required-color',
                },
              }}
              sx={{mb:3}}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <TextField
              label='email'
              variant='outlined'
              type='email'

              fullWidth
              required
              InputLabelProps={{
                classes: {
                  asterisk: 'required-color',
                },
              }}
              sx={{mb:3}}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              label='password'
              variant='outlined'
              type='password'

              fullWidth
              required
              InputLabelProps={{
                classes: {
                  asterisk: 'required-color',
                },
              }}
              sx={{mb:3}}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {showfirstName && (
              <TextField
                label='First Name'
                variant='outlined'
                type='text'

                fullWidth
                required
                InputLabelProps={{
                  classes: {
                    asterisk: 'required-color',
                  },
                }}
                sx={{mb:3}}
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            )}

            {showlastName && (
              <TextField
                label='Last Name'
                variant='outlined'
                type='text'

                fullWidth
                required
                InputLabelProps={{
                  classes: {
                    asterisk: 'required-color',
                  },
                }}
                sx={{mb:3}}
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            )}

            {showfarmName && (
              <TextField
                label='Farm/Business Name'
                variant='outlined'
                type='text'

                fullWidth
                required
                InputLabelProps={{
                  classes: {
                    asterisk: 'required-color',
                  },
                }}
                sx={{mb:3}}
                value={farmname}
                onChange={(e) => setFarmname(e.target.value)}
              />
            )}

            <Button variant='contained' fullWidth sx={{mt:1, py:'10px'}}>Register</Button>
          </form>
        </Container>
        
      </div>
      <Footer />
    </>
  )
}

export default Register