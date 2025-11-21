import { useAdventures } from '../hooks/useAdventures';
import { formatDate } from '../utils/helpers';
import '../styles/Adventures.css';

export default function Adventures() {
  const { adventures, loading } = useAdventures();

  if (!Array.isArray(adventures)) {
    return (
      <section className="adventures section">
        <div className="container">
          <h2 className="section-title">My Adventures</h2>
          <p className="adventures-empty">No adventures yet. Check back soon!</p>
        </div>
      </section>
    );
  }

  return (
    <section className="adventures section">
      <div className="container">
        <h2 className="section-title">🗺️ My Adventures Around the World</h2>
        <p className="section-subtitle">Exploring peaks, countries, and experiences</p>

        {loading && <p className="adventures-empty">Loading adventures...</p>}

        {!loading && adventures.length > 0 ? (
          <div className="adventures-timeline">
            {adventures.map((adventure, index) => (
              <div key={adventure._id} className="adventure-item">
                <div className="adventure-marker"></div>
                
                <div className={`adventure-content ${index % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="adventure-card">
                    <div className="adventure-header">
                      <h3>{adventure.title}</h3>
                      <span className="adventure-date">
                        {formatDate(adventure.startDate)}
                      </span>
                    </div>

                    <p className="adventure-type">
                      📍 {adventure.location}, {adventure.country}
                    </p>

                    <p className="adventure-description">
                      {adventure.description}
                    </p>

                    <div className="adventure-meta">
                      {adventure.difficulty && (
                        <span className="adventure-difficulty">
                          Difficulty: {'⭐'.repeat(adventure.difficulty)}
                        </span>
                      )}
                      {adventure.distance && (
                        <span className="adventure-distance">
                          Distance: {adventure.distance} km
                        </span>
                      )}
                      {adventure.elevation && (
                        <span className="adventure-elevation">
                          Elevation: {adventure.elevation}m
                        </span>
                      )}
                    </div>

                    {adventure.highlights && adventure.highlights.length > 0 && (
                      <div className="adventure-highlights">
                        <h4>Highlights:</h4>
                        <ul>
                          {adventure.highlights.slice(0, 3).map((highlight, i) => (
                            <li key={i}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="adventures-empty">No adventures yet. Check back soon!</p>
        )}
      </div>
    </section>
  );
}