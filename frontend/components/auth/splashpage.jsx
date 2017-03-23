import React from 'react';

const Splashpage = ({children}) => (
  <div className="vertical-center">
    <div className="splash-page">
      <img className="splash-page-img" src="https://res.cloudinary.com/mrdsgc/image/upload/v1489707263/seedfiles/login-graphic_poopng.png"/>
      <div className="auth-component">
        {children}
      </div>
    </div>
  </div>
)

export default Splashpage;
