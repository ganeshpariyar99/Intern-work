import React, { useState } from 'react';
import './index.css';
import HomePage from './HomePage';
import ExpeditionsPage from './ExpeditionsPage';
import GearPage from './GearPage';
import AboutPage from './AboutPage';

// --- Main App Component ---

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'expeditions':
        return <ExpeditionsPage />;
      case 'gear':
        return <GearPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="navbar">
        <div 
          className="logo" 
          onClick={() => setCurrentPage('home')}
          style={{ cursor: 'pointer' }}
        >
          PeakExplorer
        </div>
        <ul className="nav-links">
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}>Home</a>
          </li>
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('expeditions'); }}>Expeditions</a>
          </li>
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('gear'); }}>Gear</a>
          </li>
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('about'); }}>About Us</a>
          </li>
        </ul>
        <button className="btn-primary-small" onClick={() => setCurrentPage('expeditions')}>Book Now</button>
      </nav>

      {/* Dynamic Page Content */}
      <main style={{ flex: 1, paddingTop: '100px', paddingBottom: '50px' }}>
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} PeakExplorer. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
