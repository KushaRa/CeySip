import React from 'react';
import './hero.css';
import NavBar from '../Components/navBar';



const Hero = () => {
  return (
    <div className='container'>
     
    
     <div className='section0'>
      <div className='navBar'>
        <NavBar/>
        
      </div>
      <div className='welcomeNote'>
        <h3 ><i>Step Into The Soul Of Sri Lanka’s Tea Heritage,<br></br>
           Where Every Leaf Tells a Story!
          </i></h3>
      </div>   
      <div>
      
      </div>
     
     </div>    
      
      
    </div>
   
  );
};

export default Hero;