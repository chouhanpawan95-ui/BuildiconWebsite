import React from 'react'
import { Link } from "react-router-dom";
export default function Footer() {
  return (  
         <div className="container-fluid bg-dark text-white-50 footer pt-5" >
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                    <a href="index.html" className="d-inline-block mb-3">
                        <h1 className="text-white">BuildIcon</h1>
                    </a>
                    <p className="mb-0">We craft innovative software solutions that empower businesses to grow smarter and faster. From web to mobile to enterprise systems.</p>
                </div>
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                    <h5 className="text-white mb-4">Get In Touch</h5>
                    <p><i className="fa fa-map-marker-alt me-3"></i>29,Dream Aashiyana Super Corridor, India</p>
                    <p><i className="fa fa-phone-alt me-3"></i>9755561388</p>
                    <p><i className="fa fa-envelope me-3"></i>info@example.com</p>
                   
                </div>
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                    <h5 className="text-white mb-4">Popular Link</h5>
                    <Link to="/about" className="btn btn-link">
                        About us
                    </Link>
                   <Link to="/contact" className="btn btn-link">
                        Contact us
                    </Link>
                    <Link to="/PrivacyPolicy" className="btn btn-link">
                      Privacy Policy
                    </Link>                                 
                    <Link to="/services" className="btn btn-link">
                        Services
                    </Link>
                </div>
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                    <h5 className="text-white mb-4">Our Services</h5>
                    <a className="btn btn-link" href="#!">Custom Design</a>
                    <a className="btn btn-link" href="#!">Project Planning</a>
                    <a className="btn btn-link" href="#!">Renovation</a>
                    <a className="btn btn-link" href="#!">Implement</a>                  
                </div>
            </div>
        </div>
        <div className="container wow fadeIn" data-wow-delay="0.1s">
           
        </div>
    </div>
  
   
  )
}
