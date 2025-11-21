import api from './api';

export const adventureService = {
  // Get all adventures
  getAllAdventures: () => api.get('/adventures'),

  // Get single adventure
  getAdventure: (id) => api.get(`/adventures/${id}`),

  // Get featured adventures
  getFeaturedAdventures: () => api.get('/adventures/featured'),

  // Get adventures by country
  getAdventuresByCountry: (country) => 
    api.get(`/adventures/country/${country}`),

  // Create adventure (admin)
  createAdventure: (data) => api.post('/adventures', data),

  // Update adventure (admin)
  updateAdventure: (id, data) => api.put(`/adventures/${id}`, data),

  // Delete adventure (admin)
  deleteAdventure: (id) => api.delete(`/adventures/${id}`),
};

export default adventureService;