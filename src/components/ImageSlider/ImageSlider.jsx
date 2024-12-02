import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const Carousel = () => {
    const images = [
        "https://jobringer.com/images/content/company-logo/hjp2142d4bfcd859a5d0d8fc35326410cae.png",
        "https://www.jobringer.com/images/content/company-logo/hjp118cedcdd8a010fa68d3a910e29de3b9.png",
        "https://www.jobringer.com/images/content/company-logo/hjp449ab2e94039fa2ed97976ae0b70d810.png",
        "https://www.jobringer.com/images/content/company-logo/hjpdf84317cc2767956ee075c7118eef86e.png",
        "https://www.jobringer.com/images/content/company-logo/hjpa65e078438132d6ec3548c63f434265e.png",
        "https://www.jobringer.com/images/content/company-logo/hjp5085b17be8f08f70e306a16955be5f1b.png",
        "https://www.jobringer.com/images/content/company-logo/hjp010e98705978e8b2d6a0bec0897c5b71.png",
        "https://jobringer.com/images/content/company-logo/hjp3e3026cdadb5baca89e5a7dce0700cd8.png",
        "https://jobringer.com/images/content/company-logo/hjp54d780d784918b041bd00293d1832604.png",
        "https://jobringer.com/images/content/company-logo/hjp6e5ba07a31acc54590bb318789b1079a.png",
        "https://jobringer.com/images/content/company-logo/hjp9f3e5aefc1556b25987304c83bd033f5.png",

    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to move to the next image set
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (images.length - 6));
    };

    // Function to move to the previous image set
    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length - 6) % (images.length - 6));
    };

    // Automatically move to the next image set every 3 seconds
    useEffect(() => {
        const interval = setInterval(nextImage, 3000); // Change every 3 seconds (3000ms)

        
        return () => clearInterval(interval);
    }, []); 

    return (
        <>
            <div className="headline"><h1>Image Carousel</h1></div>
            <div className="carousel-container">
                <button className="carousel-nav prev" onClick={prevImage}>
                    &#10094;
                </button>
                <div className="carousel-images">
                    {images.slice(currentIndex, currentIndex + 6).map((image, index) => (
                        <div className="image-card" key={index}>
                            <img src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
                        </div>
                    ))}
                </div>
                <button className="carousel-nav next" onClick={nextImage}>
                    &#10095;
                </button>
            </div>
        </>
    );
};

export default Carousel;
