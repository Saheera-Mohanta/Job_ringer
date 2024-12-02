
import React, {  useEffect } from 'react';
import "./Navbar.css"; 
import { Link } from 'react-router-dom';

const Navbar = () => {

  useEffect(() => {
    const handleScroll = () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) { 
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);


  return (
    <nav className="navbar">
      <div className="navbar-right">
        <img
          src="https://www.jobringer.com/images/logonew.svg"
          alt="jobRinger"
          width="180"
        />
      </div>

      <div className="heading-container">
        <h1 className="animated-gradient-text">BRINGING YOU THE PERFECT JOB</h1>
      </div>

      <div className="navbar-left">
        <ul className="navbar-links">
          <li>
            <Link to="/Frontend/src/Page/Jobs.jsx">Jobs</Link>
          </li>
          <li>
            <Link to="#about">Active Employers</Link>
          </li>
          <li>
            <Link to="#contact">Pricing</Link>
          </li>
        </ul>
        <button className="navbar-btn">Jobseeker Login</button>
        <button className="navbar-btn">Employer Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
