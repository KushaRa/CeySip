import React from 'react';
import './section1.css';
import history from '../../Assets/History.png';

const Section1 = () => {
  return (
    <div className='welcomeNote2'>
        <div className='secHeader'>
            <h3 className='sech3'>Taste the Legacy</h3>
            <p></p>
        </div>
      
        <div className='logo1'>
          <img src={history} alt='history is here'/>
        </div>

        <div className='hisParagraph'>
        Sri Lanka’s journey with tea began unexpectedly – with coffee. During British rule, when the
        island was known as Ceylon, coffee thrived in the central hills, and the British invested heavily 
        in turning it into a major export. Roads were built, land was cleared, and the economy bloomed around coffee.
        But in the 1870s, a fungal disease, known as "coffee blight," destroyed most of the coffee crops, leaving planters desperate 
        for a new path. After unsuccessful experiments with other crops, they turned to tea. This shift not only saved 
        the industry but also transformed Sri Lanka into a global tea icon. Today, 
        “Ceylon Tea” is celebrated for its rich flavor and history. 
        </div>

        <div className='readmore'>
          <button className='read'>Read More</button>
        </div>
        
    </div>
  );
};

export default Section1;