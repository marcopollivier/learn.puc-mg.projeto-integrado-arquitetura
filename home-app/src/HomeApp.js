import React, { lazy, Suspense } from 'react';
import './HomeApp.css';

const Header = lazy(() => import('HeaderApp/Header'));
const Footer = lazy(() => import('FooterApp/Footer'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header />
      </Suspense>
      <div className="Container">
        
        <div className="Box">One</div>
        <div className="Box">Two</div>
        <div className="Box">Three</div>
        <div className="Box">Three</div>
        <div className="Box">Three</div>
        <div className="Box">Three</div>
        <div className="Box">Three</div>

      </div>
      <Suspense fallback={<div>Loading footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;