import React from 'react';

function GearPage() {
  return (
    <section className="page-content">
      <h2 className="section-title">Premium Equipment</h2>
      <div className="features-grid">
        <div className="feature-card glass">
          <h3>High-Altitude Tents</h3>
          <p>Designed to withstand hurricane-force winds and extreme cold. Your safe haven above 6,000 meters.</p>
        </div>
        <div className="feature-card glass">
          <h3>Technical Climbing Gear</h3>
          <p>Ice axes, crampons, and ropes from the most trusted brands in mountaineering. Inspected before every trip.</p>
        </div>
        <div className="feature-card glass">
          <h3>Thermal Clothing</h3>
          <p>Layering systems that keep you warm in sub-zero temperatures while maintaining breathability.</p>
        </div>
      </div>
    </section>
  );
}

export default GearPage;
