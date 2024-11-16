import React from 'react';
import './recipe.css';
import img1 from '../../Assets/image1.png';
import img2 from '../../Assets/image2.png';
import img3 from '../../Assets/image3.png';
import './recipe.css'


function Recipe() {
  return (
    
    <div className='sec2'>
      <h3 className="sech3">Sip Something New</h3>

    <div className='recipeCntan'>
      <div className='card'>
        <img src={img1} alt='chai' />
        <div className='textOverlay'>Delicious Chai</div>
      </div>

      <div className='card'>
        <img src={img2} alt='chai'/>

      </div>

      <div className='card'>
        <img src={img3} alt='chai'/>

      </div>
    </div>      
    </div>

    
  )
}

export default Recipe
