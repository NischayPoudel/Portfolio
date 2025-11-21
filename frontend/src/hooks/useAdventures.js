import { useState, useEffect } from 'react';
import adventureService from '../services/adventureService';

export const useAdventures = () => {
  const [adventures, setAdventures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdventures = async () => {
      try {
        setLoading(true);
        const response = await adventureService.getAllAdventures();
        setAdventures(response.data.data || response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching adventures:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAdventures();
  }, []);

  return { adventures, loading, error };
};

export default useAdventures;