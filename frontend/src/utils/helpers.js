// Format date
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

// Format date time
export const formatDateTime = (date) => {
  return new Date(date).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

// Get difficulty class
export const getDifficultyClass = (difficulty) => {
  switch (difficulty) {
    case 'Beginner':
      return 'beginner';
    case 'Intermediate':
      return 'intermediate';
    case 'Advanced':
      return 'advanced';
    default:
      return 'intermediate';
  }
};

// Truncate text
export const truncateText = (text, length = 100) => {
  if (text && text.length > length) {
    return text.substring(0, length) + '...';
  }
  return text;
};

// Get stars for rating
export const getStars = (rating) => {
  return '⭐'.repeat(Math.min(Math.max(rating, 0), 5));
};

// Format number with commas
export const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// Scroll to element
export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Copy to clipboard
export const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(
    () => {
      console.log('Text copied to clipboard');
      return true;
    },
    (err) => {
      console.error('Failed to copy: ', err);
      return false;
    }
  );
};

// Get initials from name
export const getInitials = (name) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
};

// Check if array is empty
export const isEmpty = (arr) => {
  return Array.isArray(arr) && arr.length === 0;
};

// Delay function
export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Get random item from array
export const getRandomItem = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

// Check if object is empty
export const isEmptyObject = (obj) => {
  return Object.keys(obj).length === 0;
};

// Capitalize first letter
export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Convert string to kebab-case
export const toKebabCase = (str) => {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase();
};