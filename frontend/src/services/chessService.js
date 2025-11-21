import api from './api';

export const chessService = {
  // Get chess stats
  getChessStats: (username) => api.get(`/chess/${username}`),

  // Update chess stats (admin)
  updateChessStats: (data) => api.put('/chess/stats', data),

  // Link chess account (admin)
  linkChessAccount: (username) => 
    api.post('/chess/link', { chessUsername: username }),
};

export default chessService;