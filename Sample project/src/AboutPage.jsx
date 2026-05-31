import React from 'react';

function AboutPage() {
  return (
    <section className="page-content">
      <h2 className="section-title">About PeakExplorer</h2>
      <div className="feature-card glass" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
        <h3>Our Story</h3>
        <p style={{ marginBottom: '1rem' }}>
          Founded in 2010 by a group of passionate climbers, PeakExplorer was born out of a desire to share the majesty of the mountains with the world. We believe that the high alpine environment teaches resilience, teamwork, and humility.
        </p>
        <h3>Our Mission</h3>
        <p>
          To provide safe, sustainable, and life-changing mountain experiences while protecting the delicate alpine ecosystems we visit. We follow strict Leave No Trace principles on all our expeditions.
        </p>
      </div>
    </section>
  );
}

export default AboutPage;
