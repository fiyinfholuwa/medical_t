import React from 'react'
import "./auth.css";
import {Link} from "react-router-dom";
import Slider from "../slider/ImageSlider";
import logo from "./../../assets/header-logo.svg";

  
const Login = () => {
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
            <h3>Login</h3>
            <form>
                <div className='form-group mt-3'>
                    <input type='email' className='form-control' placeholder='Enter Email or Username'/>
                </div>

                <div className='form-group mt-3'>
                    <input type='password' className='form-control' placeholder='Password'/>
                </div>
                <div className='form-group mt-3'>
                    <button className='form-control btn btn-primary'>Login with email</button>
                </div>
                <p>OR</p>
                <div className='form-group mt-3'>
                    <button className='form-control'><i className='fa fa-google text-primary'></i> Continue with Google</button>
                </div>
                <p>Don’t have an account? <Link to='/sign-up'>SignUp</Link></p>
                <div className='form-group mt-3'>
                    <button className='form-control btn btn-dark'>Sign Up with Email</button>
                </div>
            </form>
           </div>
        </div>
       </div>
    </div>
  )
}

export default Login


