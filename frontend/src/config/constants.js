// API Configuration
export const API_CONFIG = {
  BASE_URL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3,
};

// App Configuration
export const APP_CONFIG = {
  APP_NAME: 'Code & Compass',
  VERSION: '1.0.0',
  DESCRIPTION: 'A unique portfolio for a full-stack developer, chess enthusiast, and adventurer',
};

// Feature Flags
export const FEATURE_FLAGS = {
  ENABLE_CHESS: true,
  ENABLE_ADVENTURES: true,
  ENABLE_CONTACT_FORM: true,
  ENABLE_BLOG: false,
  ENABLE_DARK_MODE: true,
};

// API Endpoints
export const API_ENDPOINTS = {
  PROJECTS: '/projects',
  PROJECTS_FEATURED: '/projects/featured',
  ADVENTURES: '/adventures',
  ADVENTURES_FEATURED: '/adventures/featured',
  CHESS: '/chess',
  CONTACT: '/contact',
  HEALTH: '/health',
};

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  MAX_LIMIT: 50,
};

// Cache Configuration
export const CACHE_CONFIG = {
  CACHE_PROJECTS: 5 * 60 * 1000, // 5 minutes
  CACHE_ADVENTURES: 5 * 60 * 1000, // 5 minutes
  CACHE_CHESS: 30 * 60 * 1000, // 30 minutes
};

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  SERVER_ERROR: 'Server error. Please try again later.',
  VALIDATION_ERROR: 'Please check your input and try again.',
  NOT_FOUND: 'The requested resource was not found.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
};

// Success Messages
export const SUCCESS_MESSAGES = {
  CONTACT_FORM_SENT: 'Your message has been sent successfully!',
  PROJECT_CREATED: 'Project created successfully!',
  ADVENTURE_CREATED: 'Adventure created successfully!',
  PROFILE_UPDATED: 'Your profile has been updated!',
};