import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <main className="main-content">
        <section className="hero">
          <div className="hero-content">
            <h1>Welcome to Landing Page</h1>
            <p>Discover amazing content and explore our services</p>
            <button className="cta-button">Get Started</button>
          </div>
        </section>

        <section className="features">
          <h2>Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Fast & Reliable</h3>
              <p>Lightning-fast performance with 99.9% uptime reliability.</p>
            </div>
            <div className="feature-card">
              <h3>Easy to Use</h3>
              <p>Simple and intuitive interface designed for everyone.</p>
            </div>
            <div className="feature-card">
              <h3> 24/7 Support</h3>
              <p>Round-the-clock customer support to help you anytime.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
