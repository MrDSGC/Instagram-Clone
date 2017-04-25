import React from 'react';

const Splashpage = ({children}) => (
  <div className="vertical-center">
    <div className="splash-page">
      <div className="overlay">
        <img className="splash-page-img" src="https://res.cloudinary.com/mrdsgc/image/upload/v1489707263/seedfiles/login-graphic_poopng.png" />
        <img className="splash-page-gif" src="https://res.cloudinary.com/mrdsgc/image/upload/c_scale,h_430,w_250/v1493161023/1nw0qp_cly6sh.gif" />
      </div>
      <div className="auth-component">
        {children}
      </div>
    </div>
  </div>
)

export default Splashpage;
