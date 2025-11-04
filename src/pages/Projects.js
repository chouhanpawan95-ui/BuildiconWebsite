import React from 'react'

export default function Projects() {
  return (
    <div>
        <center><h2>Our Projects</h2></center>
         <div className="container-fluid mt-5" >
        <div className="container mt-5" >
            <div className="row g-0">
                <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                    <div className="d-flex flex-column justify-content-center bg-primary h-100 p-5">
                        <h1 className="text-white mb-5">Our Latest <span
                                className="text-uppercase text-primary bg-light px-2">Projects</span></h1>
                        <h4 className="text-white mb-0"><span className="display-1">6</span> of our latest projects</h4>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="row g-0">
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.2s">
                            <div className="project-item position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="img/project-1.jpg" alt="" style={{width:"400px"}}/>
                                <a className="project-overlay text-decoration-none" href="#!">
                                    <h4 className="text-white">HMS</h4>
                                    <small className="text-white">3 Projects</small>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                            <div className="project-item position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="img/project-2.jpg" alt=""/>
                                <a className="project-overlay text-decoration-none" href="#!">
                                    <h4 className="text-white">Opthomology</h4>
                                    <small className="text-white">2 Project</small>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.4s">
                            <div className="project-item position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="img/project-3.jpg" alt="" style={{height:144}}/>
                                <a className="project-overlay text-decoration-none" href="#!">
                                    <h4 className="text-white">Pharmacy</h4>
                                    <small className="text-white">3 Project</small>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                            <div className="project-item position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="img/project-4.jpg" alt="" style={{height:200}}/>
                                <a className="project-overlay text-decoration-none" href="#!">
                                    <h4 className="text-white">Optical</h4>
                                    <small className="text-white">1 Project</small>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.6s">
                            <div className="project-item position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="img/project-5.jpg" alt=""  style={{height:200}}/>
                                <a className="project-overlay text-decoration-none" href="#!">
                                    <h4 className="text-white">Building</h4>
                                    <small className="text-white">1 Projects</small>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.7s">
                            <div className="project-item position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="img/project-6.jpg" alt=""  style={{height:200}}/>
                                <a className="project-overlay text-decoration-none" href="#!">
                                    <h4 className="text-white">Rennovation</h4>
                                    <small className="text-white">1 Projects</small>
                                </a>
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


