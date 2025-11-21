import { STATS, SOCIAL_LINKS } from '../utils/constants';
import '../styles/About.css';

export default function About() {
  const stats = [
    { label: 'Countries Visited', value: `${STATS.countriesVisited}+`, icon: '🌍' },
    { label: 'Peak Height', value: `${STATS.peakHeight}m`, icon: '🏔️' },
    { label: 'Chess Rating', value: STATS.chessRating, icon: '♟️' },
    { label: 'Projects Built', value: STATS.projectsBuilt, icon: '💻' },
  ];

  return (
    <section className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-image">
            <div className="about-image-wrapper">
              <div className="about-image-glow"></div>
              <img
                src="/images/profile.jpeg"
                alt="Profile"
              />
            </div>
          </div>

          <div className="about-text">
            <h3>Building Dreams, One Line at a Time</h3>
            <p>
              I'm a passionate full-stack developer who loves creating beautiful, 
              functional web applications. When I'm not coding, you'll find me exploring 
              new countries, climbing mountains, or analyzing chess positions.
            </p>
            <p>
              My journey combines technical excellence with a spirit of adventure. 
              I believe in writing clean code and living bold experiences.
            </p>

            <div className="about-social">
              {SOCIAL_LINKS.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  className="about-social-link" 
                  title={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="about-stats">
          {stats.map((stat, index) => (
            <div key={index} className="about-stat-card">
              <div className="about-stat-icon">{stat.icon}</div>
              <div className="about-stat-value">{stat.value}</div>
              <div className="about-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}