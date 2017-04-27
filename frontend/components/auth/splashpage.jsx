import React from 'react';
import FontAwesome from 'react-fontawesome';



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
    <div className="footer">
      <ul className="footer-list">
        <li className="f-list-item">
          <a href="https://github.com/mrdsgc" target="_blank" className="fa fa-github"><span className="f-label">GitHub</span></a>
        </li>
        <li className="f-list-item">
          <a href="https://www.linkedin.com/in/dcheng47" target="_blank" className="fa fa-linkedin"><span className="f-label">LinkedIn</span></a>
        </li>
        <li className="f-list-item">
          <a href="http://www.danielscheng.com" target="_blank" className="fa fa-id-card"><span className="f-label">Portfolio</span></a>
        </li>
      </ul>
    </div>
    <div className='copyright'> &copy; InstaClone All rights reserved. </div>
  </div>
)

export default Splashpage;
