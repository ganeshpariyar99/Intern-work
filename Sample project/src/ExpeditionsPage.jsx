import React from 'react';

function ExpeditionsPage() {
  return (
    <section className="page-content">
      <h2 className="section-title">Our Expeditions</h2>
      <div className="features-grid">
        <div className="feature-card glass">
          <h3>Everest Base Camp</h3>
          <p>A 14-day trek through the Khumbu Valley, experiencing Sherpa culture and reaching the foot of the world's highest peak.</p>
          <br/>
          <strong>Difficulty: Hard</strong>
        </div>
        <div className="feature-card glass">
          <h3>Mount Kilimanjaro</h3>
          <p>Ascend the Roof of Africa via the Machame Route. A 7-day journey through five distinct climate zones.</p>
          <br/>
          <strong>Difficulty: Moderate</strong>
        </div>
        <div className="feature-card glass">
          <h3>Patagonia Peaks</h3>
          <p>Explore the rugged spires of Fitz Roy and Cerro Torre. An unforgettable journey to the end of the world.</p>
          <br/>
          <strong>Difficulty: Extreme</strong>
        </div>
      </div>
    </section>
  );
}

export default ExpeditionsPage;
