import React from 'react'
import "./hero.css";
import {Link} from "react-router-dom";
import Slider from "../slider/ImageSlider";

  const containerStyles = {

  };
const Hero = () => {
  return (
    <div className='hero' style={{overflowX:'hidden', marginTop:'100px'}}>
       <div className='row'>
        <div className='col-md-6 col-lg-6 left'>
            <h3>Get <span className='inner_border'>Fast <span style={{color:"#f9b898"}}>Medical</span></span></h3>
            <h3>Quotation and,</h3>
            <h3><span className='inner_border'><span style={{color:"#f9b898"}}>Travel</span> with Ease</span></h3>
            <p>Featuring the best Hospital in India</p>
            <div className='action'>
                <Link className='btn-action' href=''>Get a Quote</Link>
                <Link className='btn-action2' href=''>Download App</Link>
            </div>
        </div>

        <div className='col-md-6 col-lg-6 text-center'>
            <div style={containerStyles}>
                <Slider />
            </div>
        </div>
       </div>
    </div>
  )
}

export default Hero


