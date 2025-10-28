import React from 'react'

export default function Services() {
  return (
    <div>
       <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="row g-5 align-items-center">
                <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                    <h1 className="mb-5">Our Creative <span
                            className="text-uppercase text-primary bg-light px-2">Services</span></h1>
                    <p>At Buildicon, we believe creativity is the foundation of innovation. Our creative services are designed to help your brand stand out,</p>
                    <p className="mb-5">Connect deeply with your audience, and build lasting impressions. From concept to creation, we blend imagination with strategy to deliver impactful design and digital experiences.</p>
                    <div className="d-flex align-items-center bg-light">
                        <div className="btn-square flex-shrink-0 bg-primary" style={{width: 100, height: 100}}>
                            <i className="fa fa-phone fa-2x text-white"></i>
                        </div>
                        <div className="px-3">
                            <h3>+9755561388</h3>
                            <span>Call us direct 24/7 for get a free consultation</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="row g-0">
                        <div className="col-md-6 wow fadeIn" data-wow-delay="0.2s">
                            <div className="service-item h-100 d-flex flex-column justify-content-center bg-primary">
                                <a href="#!" className="service-img position-relative mb-4">
                                    <img className="img-fluid w-100" src="img/service-1.jpg" alt=""/>
                                    <h3>Our Mission</h3>
                                </a>
                                <p className="mb-0">To deliver high-quality, patient-centered healthcare through clinical excellence, continuous innovation, and a deep sense of empathy..</p>
                            </div>
                        </div>
                        <div className="col-md-6 wow fadeIn" data-wow-delay="0.4s">
                            <div className="service-item h-100 d-flex flex-column justify-content-center bg-light">
                                <a href="#!" className="service-img position-relative mb-4">
                                    <img className="img-fluid w-100" src="img/service-2.jpg" alt=""/>
                                    <h3>Emergency & Critical Care</h3>
                                </a>
                                <p className="mb-0">Our 24x7 emergency unit is equipped with advanced life-support systems and managed by expert trauma specialists to handle any medical crisis swiftly and effectively..</p>
                            </div>
                        </div>
                        <div className="col-md-6 wow fadeIn" data-wow-delay="0.6s">
                            <div className="service-item h-100 d-flex flex-column justify-content-center bg-light">
                                <a href="#!" className="service-img position-relative mb-4">
                                    <img className="img-fluid w-100" src="img/service-3.jpg" alt=""/>
                                    <h3>Cardiology & Diagnostics</h3>
                                </a>
                                <p className="mb-0">From routine checkups to complex cardiac surgeries, our cardiology department combines advanced diagnostic tools with expert care..</p>
                            </div>
                        </div>
                        <div className="col-md-6 wow fadeIn" data-wow-delay="0.8s">
                            <div className="service-item h-100 d-flex flex-column justify-content-center bg-primary">
                                <a href="#!" className="service-img position-relative mb-4">
                                    <img className="img-fluid w-100" src="img/service-4.jpg" alt=""/>
                                    <h3>General Medicine</h3>
                                </a>
                                <p className="mb-0">General Medicine is the branch of medical science that focuses on the prevention, diagnosis, and treatment of adult diseases</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
