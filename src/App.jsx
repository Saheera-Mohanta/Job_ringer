import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Page/Home';
import Slider from './components/Slider/Slider';
import AppDownload from './components/Appdownload/Appdownload';
import Footer from './components/Footer/footer';
import Slider2 from './components/Slider2/Slider2'
import ImageSlider from './components/ImageSlider/ImageSlider'
import Jobs from './Page/Jobs';

const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Jobs" element={<Jobs />} />
      </Routes>
    </Router>
    <Slider /> 
    <Slider2 />
    <ImageSlider />
    <AppDownload />
    <Footer />
    </>
  );
}

export default App;
