import React from 'react'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Header() {
      const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide spinner after component mounts
    setLoading(false);
  }, []);
  return (
  <div>
  {loading && (
    <div
      id="spinner"
      className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
    >
      <div className="spinner-grow text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )}

  <div className="container-fluid sticky-top bg-light shadow-sm">
    <nav className="navbar navbar-expand-lg navbar-light border-bottom border-2 border-white px-4">
      <Link to="/" className="navbar-brand">
      <img src="img/logo.png" alt="Logo" style={{ height: '90px',width:"180px" }} />
      </Link>
      <button
        type="button"
        className="navbar-toggler ms-auto me-0"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto">
          <Link to="/" className="nav-item nav-link active">
            Home
          </Link>
          <Link to="/about" className="nav-item nav-link">
            About
          </Link>
          <Link to="/services" className="nav-item nav-link">
            Services
          </Link>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
              Projects
            </a>
            <div className="dropdown-menu bg-light mt-2">
              <Link to="/projects" className="dropdown-item">
                HMS
              </Link>
              <Link to="/projects" className="dropdown-item">
                Build Site
              </Link>
            </div>
          </div>
          <Link to="/contact" className="nav-item nav-link">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  </div>
</div>

  )
}
