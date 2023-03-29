import React, {useRef} from 'react'
import { Typography, Stack, Button, Box } from '@mui/material'

import './styles/Services.css'

const Services = () => {
  
  const buyRef = useRef(null);
  const sellRef = useRef(null);
  const rentRef = useRef(null);

  const scrollToBuy = () => {
    buyRef.current.scrollIntoView({
        behaviour: 'smooth'
    })
  }

  const scrollToSell = () => {
    sellRef.current.scrollIntoView({
        behaviour: 'smooth'
    })
  }

  const scrollToRent = () => {
    rentRef.current.scrollIntoView({
        behaviour: 'smooth'
    })
  }
    
  return (
    <div className='services' id='services'>
        <Typography variant='h3' sx={{
            mt: '30px',
            textAlign: 'center',
            fontWeight : 'bold',
            mb: '30px'
        }}>
            Our Services
        </Typography>

        <Stack direction='row' spacing={3} className='services-btn' sx={{
            display: 'flex',
            justifyContent: 'center',
            padding: '20px',
            alignItems: 'center',
            mb: '5rem'
        }}>
            <Button variant="outlined" color='success' onClick={scrollToBuy}>Buy on Agro Allies</Button>
            <Button onClick={scrollToSell} variant="outlined" color='success'>Sell on Agro Allies</Button>
            <Button onClick={scrollToRent} variant="outlined" color='success'>Rentals on Agro Allies</Button>
        </Stack>

        <Stack direction='column' spacing={15}> 
            {/* Buy the product from farm */}
            <Box className='services-buy' id="service-buy" ref={buyRef}>
                <img src='https://farmdrop.us/wp-content/uploads/2021/12/Find-Your-Market-1.jpg' alt='buy'/>
                <Stack direction='column' spacing={3} className='services-buyInfo'>
                    <Typography variant='h3' component='div' sx={{ color: 'black' }}>
                        Find Your Market
                    </Typography>
                    <Typography variant='paragraph' component='div'>
                        We're making it easier to choose the great food being produced in our very own foodsheds. By shopping on Agro-Allies you:
                        <br />
                        <ul>
                            <li>Get the freshest, most nutritious local foods available year round</li>
                            <li>Support the interests of small-scale food producers in your<br/> community</li>
                            <li>Help preserve the sustainable stewardship of our rural landscapes</li>
                        </ul>
                        Agro-Allies increases community access to locally made and grown products through this restructured food system, which in turn, 
                        serves our planet and our place-based sense of self and sovereignty. We're excited for you to join our mission and put your money 
                        where your heart is!
                    </Typography>
                    <Button variant='contained' sx={{ width: '30%', padding: '10px' }}>Buy from Local Market</Button>
                </Stack>
            </Box>

            {/* Sell the product from farm */}
            <Box className='services-sell' sx={{ flexDirection: 'row-reverse' }} id="service-sell" ref={sellRef}>
                <img src='https://images.unsplash.com/photo-1464454709131-ffd692591ee5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80' alt='sell'/>
                <Stack direction='column' spacing={3} className='services-sellInfo' sx={{ ml: '0rem', mr: '3rem' }}>
                    <Typography variant='h3' component='div' sx={{ color: 'black' }}>
                        Sell On Agro Allies
                    </Typography>
                    <Typography variant='paragraph' component='div'>
                        Agro-Allies is a collaborative marketplace hosting multiple farmers and producers together on a local online storefront. Here's how it works:
                        <br />
                        <ul>
                            <li>Shoppers order from your availability each week and pay in advance.</li>
                            <li>Customers pickup their orders at a designated pickup location</li>
                        </ul>
                        This prepaid, harvest-to-order model reduces waste by ensuring your customers get your freshest goods while you make efficient use of your labor, product, and time.
                        Review our current locations to contact the market hub nearest to you. Your location's Market Hub Manager will invite you to complete a brief training on how to register on FarmDrop.
                    </Typography>
                    <Button variant='contained' sx={{ width: '30%', padding: '10px' }}>Get Started With Selling</Button>
                </Stack>
            </Box>

            {/* rent or get rent of agricultural machinery */}
            <Box className='services-rent' id="service-rent" ref={rentRef}>
                <img src='https://images.unsplash.com/photo-1595569099963-77bf7706643a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80' 
                    alt='buy'/>
                <Stack direction='column' spacing={3} className='services-rentInfo'>
                    <Typography variant='h3' component='div' sx={{ color: 'black' }}>
                        Rent On Agro-Allies
                    </Typography>
                    <Typography variant='paragraph' component='div'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae molestiae voluptates libero officiis tempora sunt sapiente aperiam voluptas.
                        <br />
                        <ul>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, aut!</li>
                            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae dignissimos mollitia,<br/> voluptatibus nemo odio tempore?</li>
                        </ul>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta voluptatem amet illum, vero eaque temporibus tenetur officia quam accusantium quis, 
                        ipsam nostrum quibusdam. Numquam dignissimos consequatur totam asperiores ad exercitationem.
                    </Typography>
                    <Button variant='contained' sx={{ width: '30%', padding: '10px' }}>Get Started</Button>
                </Stack>
            </Box>
        </Stack>
    </div>
  )
}

export default Services