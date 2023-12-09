import React from 'react'
import "./footer.css";
import {Link} from "react-router-dom";
import footerlogo from "./../../assets/footer-logo.svg";

const Footer = () => {
  return (
    <div className='footer'>
       <div className='row'>
            <div className='col-lg-5  col-md-6 col-6 logo_sec'>
                <img src={footerlogo} alt='footer logo'/>
            </div>
            <div className='col-lg-2 col-md-6 col-6  footer_about'>
                <h3>About</h3>
                <ul>
                    <li><Link>Company</Link></li>
                    <li><Link>Hospital Access</Link></li>
                    <li><Link>Careers</Link></li>
                    <li><Link>Privacy Policy</Link></li>
                </ul>
            </div>
            <div className='col-lg-2 col-md-6 col-6  footer_link'>
                <h3>Help Links</h3>
                <ul>
                    <li><Link>Application</Link></li>
                    <li><Link>How to Apply</Link></li>
                    <li><Link>Plan your Stay</Link></li>
                    <li><Link>Track Status</Link></li>
                </ul>
            </div>
            <div className='col-lg-3 col-md-6 col-6 footer_reach_out'>
                <h3>Reach Out</h3>
                <ul>
                    <li><Link>General Inquiry</Link></li>
                    <div className='footer_btn'>
                    <li><Link><span><i className='fa fa-phone'></i> +91 970 008 0000</span></Link></li>
                    </div>
                    <div className='footer_btn'>
                    <li><Link><span><i className='fa fa-phone'></i> +91 970 008 0000</span></Link></li>
                    </div>
                    <div className='footer_btn'>
                    <li><Link><span><i className='fa fa-envelope'></i> support@medtour.in</span></Link></li>
                    </div>
                    
                </ul>
            </div>
            <div className='footer_bottom'>
                <hr/>
                <div className='row'>
                    <div className='col-lg-8 col-md-12 col-12' >
                        <p>Copyright © 2023 MedTour. All rights reserved.</p>
                    </div>
                    <div className='col-lg-4 icon col-md-12 col-12'>
                        <span><i className='fa fa-facebook'></i></span>
                        <span><i className='fa fa-twitter'></i></span>
                        <span><i className='fa fa-instagram'></i></span>
                    </div>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Footer


