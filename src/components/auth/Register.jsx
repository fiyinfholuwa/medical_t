import React from 'react'
import "./auth.css";
import {Link} from "react-router-dom";
import PhoneInput from 'react-phone-input-2';

import Slider from "../slider/ImageSlider";
import 'react-phone-input-2/lib/style.css';

import logo from "./../../assets/header-logo.svg";

  
const Register = () => {
  return (
    <div className='login'>
       <div className='row'>
        <div className='col-md-6 col-lg-6 left'>
            <img className='logo_img' src={logo} alt="logo"/>
            <div className='slider_section'>
                <Slider />
            </div>
        </div>
        <div className='col-md-6 col-lg-6 right'>
            <Link className='cancel' to='/'><i className='fa fa-times'></i></Link>
           <div className='form_auth'>
            <h3>Create an Account</h3>
            <form>
                <div className='row'>
                    <div className='col-lg-6 mt-3'>
                    <input type='text' className='form-control' placeholder='First Name'/>
                    </div>

                    <div className='col-lg-6 mt-3'>
                    <input type='text' className='form-control' placeholder='Last Name'/>
                    </div>

                </div>
                <div className='form-group mt-3'>
                    <input type='email' className='form-control'  placeholder='Enter Email'/>
                </div>

                
                <PhoneInput  country={'in'} className='mt-3 react-tel-input border-none' />

            

                <div className='form-group mt-3'>
                    <input type='password' className='form-control' placeholder='Enter Password'/>
                </div>

                <div className='form-group mt-3'>
                    <input type='password' className='form-control' placeholder='Enter Confirm Password'/>
                </div>

                <div className='form-group mt-4'>
                    <button className='form-control btn btn-primary'>Create Account</button>
                </div>
                
                <p>By clicking, create account up you will be agreeing 
                to our <Link>Terms & Conditions</Link> & <Link>PrivacyPolicy</Link>.</p>
            </form>
           </div>
        </div>
       </div>
    </div>
  )
}

export default Register


