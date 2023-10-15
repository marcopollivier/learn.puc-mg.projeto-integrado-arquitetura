import React from 'react';
import './FooterApp.css';

const FooterApp = () => {
  return (
    <div className="Footer">
      <div className="FooterContent">
        <span>Sob a <a href="https://opensource.org/licenses/MIT" className="license-link">Licença MIT</a></span>
        <span>criado por</span>
        <a href="https://marcopollivier.github.io" className="author-link">Marco Ollivier</a>
      </div>
    </div>
  );
};

export default FooterApp;