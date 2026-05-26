import { fetchAreaBySlug, fetchAreas } from '@/mocks/handlers';

export const areaApi = {
  getAll: fetchAreas,
  getBySlug: fetchAreaBySlug,
};
