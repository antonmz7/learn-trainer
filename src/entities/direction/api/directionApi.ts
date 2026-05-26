import { fetchDirectionBySlug, fetchDirectionsByAreaSlug } from '@/mocks/handlers';

export const directionApi = {
  getByAreaSlug: fetchDirectionsByAreaSlug,
  getBySlug: fetchDirectionBySlug,
};
