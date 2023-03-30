import React, {useState, useEffect, useRef} from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import  { Stack, Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { Link } from 'react-router-dom';

import './styles/Navbar.css'

const Navbar = () => {

  const [anchorEle, setAnchorEle] = useState(null);  

  const handleMenuClick = (event) => {
    setAnchorEle(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEle(null);
  };

  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= window.innerHeight / 2) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarStyle = {
    position: 'fixed',
    top: 0,
    zIndex: 100,
    transition: 'transform 0.3s ease-in-out',
    transform: showNavbar ? 'translateY(0)' : 'translateY(-100%)',
  };


  return (
    <AppBar position="static" className="navbar" style={navbarStyle}>
      <Toolbar>
        <Link to='/'>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aris-aria-label="logo"
            sx={{ mr: 2 }}
          >
            <img
              src="https://png.pngtree.com/element_our/sm/20180411/sm_5ace062b08f53.jpg"
              alt="agro-allies"
              className="navbar-logo"
            />
          </IconButton>
        </Link>

        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1, fontWeight: 600 }}
        >
          Agro Allies
        </Typography>

        <Stack direction="row" spacing={5} className="navbar-options">
          <Link to='/about'>
              <Button color="inherit" sx={{
                fontWeight: 800,
                ':hover':{
                  background:'transparent',
                  color:'#0a8d48'
                }
              }}>About</Button>
          </Link>
          <Button color="inherit" onClick={() => window.location.hash='services'}>Services</Button>
          <Button color="inherit">News & Media</Button>
          <Link to='/form/login'>
            <Button variant='outlined' className='navbar-loginBtn' sx={{fontWeight:800}}>Login</Button>
          </Link>
          <div>
            <Button onClick={handleMenuClick} variant='contained' className='navbar-registerBtn'>Register</Button>
            <Menu
              anchorEl={anchorEle}
              open={Boolean(anchorEle)}
              onClose={handleMenuClose}
              sx={{ mt : 1, zIndex: 101 }}
            >
              <Link to='/form/registerSeller'>
                <MenuItem onClick={handleMenuClose} sx={{ textDecoration:'none' }}>As Seller</MenuItem>
              </Link>
              <Link to='/form/registerBuyer'>
                <MenuItem onClick={handleMenuClose} sx={{ textDecoration:'none' }}>As Buyer</MenuItem>
              </Link>
            </Menu>
          </div>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar