import React, { useState, useEffect } from 'react';
import './Slider.css';

const Carousel = () => {
    const jobs = [
        {
            title: "Customer Support Associate",
            company: "Magnum Group",
            type: "Full-time",
            location: "New York, NY"
        },
        {
            title: "Software Engineer",
            company: "Tech Innovations",
            type: "Part-time",
            location: "San Francisco, CA"
        },
        {
            title: "Product Manager",
            company: "Creative Solutions",
            type: "Contract",
            location: "Remote"
        },
        {
            title: "Customer Support Associate",
            company: "Magnum Group",
            type: "Full-time",
            location: "New York, NY"
        },
        {
            title: "Software Engineer",
            company: "Tech Innovations",
            type: "Part-time",
            location: "San Francisco, CA"
        },
        {
            title: "Product Manager",
            company: "Creative Solutions",
            type: "Contract",
            location: "Remote"
        },
        {
            title: "Software Engineer",
            company: "Tech Innovations",
            type: "Part-time",
            location: "San Francisco, CA"
        },
        {
            title: "Product Manager",
            company: "Creative Solutions",
            type: "Contract",
            location: "Remote"
        },
        {
            title: "Software Engineer",
            company: "Tech Innovations",
            type: "Part-time",
            location: "San Francisco, CA"
        },
        {
            title: "Product Manager",
            company: "Creative Solutions",
            type: "Contract",
            location: "Remote"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to move to the next job set
    const nextJob = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (jobs.length - 5));
    };

    // Function to move to the previous job set
    const prevJob = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + jobs.length - 5) % (jobs.length - 5));
    };

    // Automatically move to the next job set every 3 seconds
    useEffect(() => {
        const interval = setInterval(nextJob, 3000); 

        // Clear the interval when the component is unmounted or when interval changes
        return () => clearInterval(interval);
    }, []); 

    return (
      <>
      <div className='headline'><h1>Featured Jobs</h1></div>
        <div className="carousel-container">
            <button className="carousel-nav prev" onClick={prevJob}>
                &#10094;
            </button>
            <div className="carousel-job">
                <div className="job-cards">
                    {jobs.slice(currentIndex, currentIndex + 5).map((job, index) => (
                        <div className="job-card" key={index}>
                            <div className="job-title">{job.title}</div>
                            <div className="company">{job.company}</div>
                            <div className="details">
                                <i className="fas fa-clock"></i> {job.type}
                            </div>
                            <div className="location">{job.location}</div>
                            <button className="apply-button">Apply Now</button>
                        </div>
                    ))}
                </div>
            </div>
            <button className="carousel-nav next" onClick={nextJob}>
                &#10095;
            </button>
        </div>
        </>
    );
};

export default Carousel;
