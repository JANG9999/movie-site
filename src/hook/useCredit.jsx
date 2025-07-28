import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchCredit = (id) => {
  return api.get(`/movie/${id}/credits`);
};

export const useCredit = (id) => {
  return useQuery({
    queryKey: ['movie-credit', id],
    queryFn: () => fetchCredit(id),
    enabled: !!id
  });
};