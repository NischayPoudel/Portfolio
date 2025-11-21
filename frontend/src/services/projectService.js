import api from './api';

export const projectService = {
  // Get all projects
  getAllProjects: () => api.get('/projects'),

  // Get single project
  getProject: (id) => api.get(`/projects/${id}`),

  // Get featured projects
  getFeaturedProjects: () => api.get('/projects/featured'),

  // Create project (admin)
  createProject: (data) => api.post('/projects', data),

  // Update project (admin)
  updateProject: (id, data) => api.put(`/projects/${id}`, data),

  // Delete project (admin)
  deleteProject: (id) => api.delete(`/projects/${id}`),
};

export default projectService;