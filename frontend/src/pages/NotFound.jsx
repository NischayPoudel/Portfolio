import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main>
      <section style={{ 
        minHeight: '60vh', 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center',
        textAlign: 'center',
        padding: '40px 20px'
      }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '20px' }}>404</h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '30px', color: '#f4e4c1' }}>
          Oops! Page not found
        </p>
        <p style={{ marginBottom: '40px', color: '#d1d5db' }}>
          The page you're looking for might have been removed or the URL was typed incorrectly.
        </p>
        <Link to="/" className="btn btn-primary">
          Back to Home ➜
        </Link>
      </section>
    </main>
  );
}