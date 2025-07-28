import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchImages = (movieId) => {
  return api.get(`/movie/${movieId}/images`);
};

export const useImages = (movieId) => {
  return useQuery({
    queryKey: ['movie-images', movieId],
    queryFn: () => fetchImages(movieId),
  });
};