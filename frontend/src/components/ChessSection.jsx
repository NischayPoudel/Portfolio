import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import '../styles/ChessSection.css';

export default function ChessSection() {
  const [username, setUsername] = useState('');
  const { data: chessStats, loading } = useFetch(username ? `/chess/${username}` : '');

  const handleSearch = (e) => {
    e.preventDefault();
    // The useFetch hook will automatically fetch when username changes
  };

  return (
    <section className="chess-section section">
      <div className="container">
        <h2 className="section-title">♟️ Chess is My Passion</h2>
        <p className="section-subtitle">Compete, learn, and enjoy the game</p>

        <div className="chess-container">
          {/* Search Section */}
          <div className="chess-search">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Enter Chess.com username..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="chess-input"
              />
              <button type="submit" className="btn btn-primary">
                Search Stats 🔍
              </button>
            </form>
          </div>

          {/* Stats Display */}
          {loading && <p className="text-center text-secondary">Loading chess stats...</p>}

          {chessStats && chessStats.rating ? (
            <div className="chess-stats-grid">
              <div className="chess-stat-card">
                <h3>Bullet</h3>
                <p className="chess-rating">{chessStats.rating.bullet || '-'}</p>
              </div>
              <div className="chess-stat-card">
                <h3>Blitz</h3>
                <p className="chess-rating">{chessStats.rating.blitz || '-'}</p>
              </div>
              <div className="chess-stat-card">
                <h3>Rapid</h3>
                <p className="chess-rating">{chessStats.rating.rapid || '-'}</p>
              </div>
              <div className="chess-stat-card">
                <h3>Classical</h3>
                <p className="chess-rating">{chessStats.rating.classical || '-'}</p>
              </div>
            </div>
          ) : (
            !loading && (
              <div className="chess-default">
                <p className="text-secondary">
                  My Chess.com username: <strong>nischay</strong>
                </p>
                <div className="chess-stats-grid">
                  <div className="chess-stat-card">
                    <h3>Bullet</h3>
                    <p className="chess-rating">1750</p>
                  </div>
                  <div className="chess-stat-card">
                    <h3>Blitz</h3>
                    <p className="chess-rating">1850</p>
                  </div>
                  <div className="chess-stat-card">
                    <h3>Rapid</h3>
                    <p className="chess-rating">1950</p>
                  </div>
                  <div className="chess-stat-card">
                    <h3>Classical</h3>
                    <p className="chess-rating">1800</p>
                  </div>
                </div>
              </div>
            )
          )}

          {/* Achievements */}
          <div className="chess-achievements">
            <h3>🏆 Achievements</h3>
            <div className="achievements-grid">
              <div className="achievement">
                <span className="achievement-icon">👑</span>
                <p>Checkmate Master</p>
              </div>
              <div className="achievement">
                <span className="achievement-icon">⚡</span>
                <p>Blitz Warrior</p>
              </div>
              <div className="achievement">
                <span className="achievement-icon">🎯</span>
                <p>1000+ Wins</p>
              </div>
              <div className="achievement">
                <span className="achievement-icon">🌟</span>
                <p>ELO Climber</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}