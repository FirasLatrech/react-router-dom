import React from 'react';
import './headers.css'; 

const Headers = () => {
  return (
    
    <div className='headerContainer'>
      <div className='logoContainer'>
        Firas Latrach
      </div>
      <div className='linkContainer'>
        <a href="home">Home</a>
        <a href="about">About</a>
        <a href="skils">Skills</a>
      </div>
    </div>
  );
}

export default Headers;
