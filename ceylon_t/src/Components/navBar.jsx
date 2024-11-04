import React from 'react';

import './navBar.css';

const NavBar = () => {
  return (
    <div className='navBar'>
        <header>
            <h3>CeySip</h3>
        </header>

            
              <ul>
                <li><a href='/#'>History</a></li>
                <li><a href='/#'>Locations</a></li>
                <li> <a href='/#'>Recipe</a></li>
                </ul>
            

            <h3>
                Account
            </h3>
       
      
    </div>
  );
};

export default NavBar;