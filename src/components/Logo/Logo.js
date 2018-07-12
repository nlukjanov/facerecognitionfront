import React from 'react';
import Tilt from 'react-tilt';
import face from './face.png'
import './Logo.css';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className="Tilt br2 shwdow-2" options={{ max : 55 }} style={{ height: 120, width: 120 }} >
        <div className="Tilt-inner pa3"><img src={face} alt="face logo"/></div>
      </Tilt>
    </div>
  )
}

export default Logo;
