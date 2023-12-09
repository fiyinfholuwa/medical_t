import React from 'react'
import NavBar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero';
import Process from '../components/process/Process';
import Footer from '../components/footer/Footer';

const Home = () => {
  return (
    <div style={{overflowX:'hidden'}}>
        <NavBar/>
        <Hero/>
        <Process/>
        <Footer/>
    </div>
  )
}

export default Home
