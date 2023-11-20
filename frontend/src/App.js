import React from 'react';
import Header from './Header';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import Footer from './Footer';
import './Library.css';

function App() {
  return (
    <div className="app-container">
      <div className="header">
        <Header />
      </div>
      <div className="main-content">
        <div className="left-column">
          <LeftColumn />
        </div>
        <div className="right-column">
          <RightColumn />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
