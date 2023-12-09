import React from 'react'
import NavBar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Application from '../components/applications/Application';

const ApplicationPage = () => {
  return (
    <div style={{overflowX:'hidden'}}>
        <NavBar/>
        <Application/>  
        <Footer/>
    </div>
  )
}

export default ApplicationPage