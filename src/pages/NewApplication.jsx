import React from 'react'
import NavBar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import NewApplication from '../components/new-application/NewApplication';

const NewApplicationPage = () => {
  return (
    <div style={{overflowX:'hidden'}}>
        <NavBar/>
        <NewApplication/>  
        <Footer/>
    </div>
  )
}

export default NewApplicationPage