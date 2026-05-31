import React from 'react';

function HomePage({ setCurrentPage }) {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Conquer the <span className="gradient-text">Peaks</span>
          </h1>
          <p className="hero-subtitle">
            Discover the world's most breathtaking summits and begin your next great adventure with expert guides and premium equipment.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => setCurrentPage('expeditions')}>Find a Trail</button>
            <button className="btn-secondary" onClick={() => setCurrentPage('about')}>Join Expedition</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2 className="section-title">Why Explore With Us?</h2>
        <div className="features-grid">
          <div className="feature-card glass">
            <h3>Expert Guides</h3>
            <p>Our certified mountaineers will lead you safely through the most challenging terrains. With decades of combined experience across all continents.</p>
          </div>
          <div className="feature-card glass">
            <h3>Premium Gear</h3>
            <p>We provide top-of-the-line camping and climbing equipment for your safety and comfort. Tested in the harshest conditions.</p>
          </div>
          <div className="feature-card glass">
            <h3>Breathtaking Views</h3>
            <p>Experience sunsets and sunrises from the highest points on Earth. Memories that last a lifetime, captured from above the clouds.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
