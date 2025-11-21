const express = require('express');
const {
  getAllProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
  getFeaturedProjects,
} = require('../controllers/projectController');

const router = express.Router();

// Public routes
router.get('/', getAllProjects);
router.get('/featured', getFeaturedProjects);
router.get('/:id', getProject);

// Admin routes
router.post('/', createProject);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);

module.exports = router;