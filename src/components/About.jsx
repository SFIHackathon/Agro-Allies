import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

import './styles/About.css'

import { Box, Stack, Typography } from '@mui/material'
import { fontSize } from '@mui/system'

const About = () => {
  return (
    <div className='about'>
        <Navbar />

        {/*  */}

            <Stack direction='column' spacing={10}>

                <Box sx={{ height: '100vh' }} className='about-companyVision'>
                    <img src="https://images.unsplash.com/photo-1625758476698-1dfa8317a09a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                        alt="" />
                    <Stack direction='column' spacing={3} sx={{ ml: '3rem' }}>
                        <Typography variant='h2' component='div'>
                            Empowering the growth of farmers!
                        </Typography>
                        <Typography variant='p' component='div' sx={{ 
                            color: 'gray', 
                            lineHeight: '2rem',
                            textAlign: 'justify' 
                        }}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nobis est laborum aperiam fugiat. Tempora minima possimus 
                            harum assumenda molestias laborum voluptate blanditiis provident! Commodi labore non similique accusantium voluptas.
                        </Typography>
                    </Stack>
                </Box>

                <Box className='about-companyMotto'>
                    <Typography variant='h2' component='div' sx={{ 
                        textAlign: 'center',
                        mt:'20px',
                        color:'white',
                        fontWeight:600,
                        textShadow: '-1px 1px 3px rgba(128, 0, 0, 1)'
                    }}>
                        Our Motto
                    </Typography>
                    <Typography variant='p' component='div' sx={{
                        textAlign:'center',
                        color: 'white',
                        mt: '20px',
                        lineHeight: '3rem',
                        fontSize:'1.5rem'
                    }}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Ab, saepe? Ducimus unde sit iure temporibus cumque quod? Facilis neque nihil iusto provident sint est, blanditiis ipsam quos in a, 
                        voluptatum deserunt tempora magnam. Velit, ipsam? Et ipsum commodi quo deleniti.
                    </Typography>
                </Box>

            </Stack>

        {/*  */}

        <Footer />
    </div>
  )
}

export default About