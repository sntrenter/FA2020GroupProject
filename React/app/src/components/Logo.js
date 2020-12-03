import React from 'react';
import img from '../static/rsz_1rsz_alexalogo.png'
const Logo = (props) => {
  return (
    <img
      alt="Alexa app"
      src={img}
      {...props}
    />
  );
};

export default Logo;