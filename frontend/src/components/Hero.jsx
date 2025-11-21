import { useEffect, useState } from 'react';
import '../styles/Hero.css';

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Crafting software, collecting summits.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleExplore = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero section">
      <div className="hero-bg">
        <div className="hero-blob hero-blob-1"></div>
        <div className="hero-blob hero-blob-2"></div>
        <div className="hero-blob hero-blob-3"></div>
      </div>

      <div className="hero-content container">
        <h1>
          Hi, I'm{' '}
          <span className="hero-gradient-text">Nischay</span>
        </h1>

        <p>Full Stack Developer | Chess Enthusiast </p>

        <div className="hero-typewriter">
          {displayedText}
          <span className="hero-typewriter-cursor">|</span>
        </div>

        <div className="hero-buttons">
          <button className="btn btn-primary">
            Let's Build Something Epic ➜
          </button>
          <button className="btn btn-secondary" onClick={handleExplore}>
            Explore Adventures ↓
          </button>
        </div>
      </div>

      <div className="hero-scroll">
        <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
          <path d="M7 10l5 5 5-5z" />
        </svg>
      </div>
    </section>
  );
}