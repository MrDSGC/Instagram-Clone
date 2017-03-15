import React from 'react';

const Splashpage = ({children}) => (
  <div className="vertical-center">
    <div className="splash-page">
      <img src="/assets/login-graphic.png"/>
      <div className="auth-component">
        {children}
      </div>
    </div>
  </div>
)

export default Splashpage;
