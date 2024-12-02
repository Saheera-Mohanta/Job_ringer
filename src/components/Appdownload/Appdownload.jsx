import React from 'react'
import './AppDownload.css'
import image from '../../assets/image.png'
import appStore from '../../assets/app_store.png'

const AppDownload = () => {
  return (
    <div className='app-download'>
     <h1>Apply to JOBS On-The-Go</h1>
     <p>Jobringer Mobile App</p>
      <div className="app-download-platforms">
      <img src={image} alt="Jobringer App Screenshot" />
      <img src={appStore} alt="App Store Badge" />
      </div>
      <h3>Mobile App Download</h3>
      
    </div>
  )
}

export default AppDownload
