// Email validation
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Phone validation
export const isValidPhone = (phone) => {
  const phoneRegex = /^[0-9\s\-+()]{10,}$/;
  return phoneRegex.test(phone);
};

// Name validation
export const isValidName = (name) => {
  return name.trim().length >= 2;
};

// Message validation
export const isValidMessage = (message) => {
  return message.trim().length >= 10;
};

// URL validation
export const isValidURL = (url) => {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
};

// Password validation
export const isValidPassword = (password) => {
  return password.length >= 6;
};

// Validate contact form
export const validateContactForm = (data) => {
  const errors = {};

  if (!isValidName(data.name)) {
    errors.name = 'Please enter a valid name (min 2 characters)';
  }

  if (!isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email';
  }

  if (!data.subject || data.subject.trim().length === 0) {
    errors.subject = 'Please enter a subject';
  }

  if (!isValidMessage(data.message)) {
    errors.message = 'Message must be at least 10 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

// Validate project data
export const validateProject = (data) => {
  const errors = {};

  if (!data.title || data.title.trim().length === 0) {
    errors.title = 'Title is required';
  }

  if (!data.description || data.description.trim().length < 10) {
    errors.description = 'Description must be at least 10 characters';
  }

  if (data.technologies && !Array.isArray(data.technologies)) {
    errors.technologies = 'Technologies must be an array';
  }

  if (data.difficulty && !['Beginner', 'Intermediate', 'Advanced'].includes(data.difficulty)) {
    errors.difficulty = 'Invalid difficulty level';
  }

  if (data.liveLink && !isValidURL(data.liveLink)) {
    errors.liveLink = 'Invalid URL for live link';
  }

  if (data.githubLink && !isValidURL(data.githubLink)) {
    errors.githubLink = 'Invalid URL for GitHub link';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

// Validate adventure data
export const validateAdventure = (data) => {
  const errors = {};

  if (!data.title || data.title.trim().length === 0) {
    errors.title = 'Title is required';
  }

  if (!data.location || data.location.trim().length === 0) {
    errors.location = 'Location is required';
  }

  if (data.difficulty && (data.difficulty < 1 || data.difficulty > 5)) {
    errors.difficulty = 'Difficulty must be between 1 and 5';
  }

  if (data.type && !['trek', 'hike', 'travel', 'adventure'].includes(data.type)) {
    errors.type = 'Invalid adventure type';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};