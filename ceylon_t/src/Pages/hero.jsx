import React from 'react';
import './hero.css';
import NavBar from '../Components/navBar';

const Hero = () => {
  return (
    <div className='upper'>
      <div className='navBar'>
        <NavBar/>
      </div>

      <div>
        <h3 className='welcomeNote'>Step into the soul of Sri Lanka’s tea heritage,<br></br>
           where every leaf tells a story!</h3>
      </div>

      
    </div>
   
  );
};

export default Hero;