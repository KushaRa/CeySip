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
        <div className='textOverlay' style={{marginLeft:'-18px'}}>Masala Chai</div>
        <div className='cOverlay'>
         <p> A spiced tea made with black tea, 
          milk, sugar, and a blend of aromatic spices like cardamom, cinnamon, cloves, ginger, and black pepper.
          It's simmered together to create a warm and flavorful beverage.
          </p></div> 
      </div>

      <div className='card'>
        <img src={img2} alt='chai'/>
        <div className='textOverlay'>Strawberry Iced Tea</div>
        <div className='cOverlay'>
          <p>
        A fruity iced tea infused with fresh strawberries, 
        offering a sweet and refreshing flavor. Often made with black tea,
         strawberries, and sweetener, served over ice.
         </p>
          </div>
      </div>

      <div className='card'>
        <img src={img3} alt='chai'/>
        <div className='textOverlay' style={{marginLeft:'40px'}}>Butterfly Pea Tea Lemonade</div>
        <div className='cOverlay'>
          <p>
        Known for its vibrant color, this drink is made from
         butterfly pea flower tea, which changes color when mixed with 
         acidic ingredients like lemon juice. It is typically 
        served chilled, with mint leaves for garnish.
        </p>
          </div>

      </div>
     
    </div>  
    
     
    </div>
    

    
  )
}

export default Recipe
