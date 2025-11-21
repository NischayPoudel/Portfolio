// API Endpoints
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Colors
export const COLORS = {
  primary: '#1a1a2e',
  secondary: '#f4e4c1',
  accent: '#d4af37',
  danger: '#ff6b6b',
  success: '#51cf66',
  info: '#4dabf7',
  text: '#f5f5f5',
  border: '#2a2a3e',
};

// Routes
export const ROUTES = {
  HOME: '/',
  PROJECTS: '/projects',
  ADVENTURES: '/adventures',
  CONTACT: '#contact',
};

// Navigation Links
export const NAV_LINKS = [
  { name: 'Home', path: ROUTES.HOME },
  { name: 'Projects', path: ROUTES.PROJECTS },
  { name: 'Adventures', path: ROUTES.ADVENTURES },
  { name: 'Contact', path: ROUTES.CONTACT },
];

// Social Links
export const SOCIAL_LINKS = [
  { icon: '🐙', label: 'GitHub', url: 'https://github.com/NischayPoudel' },
  { icon: '💼', label: 'LinkedIn', url: 'https://linkedin.com/in/nischay-poudel' },
  { icon: '𝕏', label: 'Twitter', url: 'https://twitter.com/nischay_codes' },
  { icon: '♟️', label: 'Chess.com', url: 'https://chess.com/member/nischay' },
  { icon: '✉️', label: 'Email', url: 'mailto:nischay@example.com' },
];

// Contact Info
export const CONTACT_INFO = {
  email: 'nischay@example.com',
  phone: '+977 9800000000',
  location: 'Nepal',
};

// Project Difficulties
export const DIFFICULTY_LEVELS = {
  BEGINNER: 'Beginner',
  INTERMEDIATE: 'Intermediate',
  ADVANCED: 'Advanced',
};

// Adventure Types
export const ADVENTURE_TYPES = {
  TREK: 'trek',
  HIKE: 'hike',
  TRAVEL: 'travel',
  ADVENTURE: 'adventure',
};

// Stats
export const STATS = {
  countriesVisited: 15,
  peakHeight: 4500,
  chessRating: 1850,
  projectsBuilt: 12,
};

// Skills by category
export const SKILLS = {
  frontend: ['React', 'JavaScript', 'CSS', 'HTML', 'Responsive Design'],
  backend: ['Node.js', 'Express', 'MongoDB', 'RESTful APIs'],
  devops: ['Git', 'GitHub', 'VS Code', 'Postman'],
};