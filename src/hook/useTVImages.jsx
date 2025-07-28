import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchTVImages = (id) => {
  return api.get(`/tv/${id}/images`);
};

export const useTVImages = (id) => {
  return useQuery({
    queryKey: ['tv-images', id],
    queryFn: () => fetchTVImages(id),
  });
};