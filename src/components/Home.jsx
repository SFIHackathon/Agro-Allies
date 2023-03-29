import React from 'react'
import Navbar from './Navbar'
import CarouselHome from './CarouselHome'
import Services from './Services';
import Footer from './Footer';

const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <CarouselHome />
        <Services />
        <Footer />
    </div>
  )
}

export default Home