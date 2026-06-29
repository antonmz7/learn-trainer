import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '@/shared/api';

import { directionApi } from './directionApi';

export function useDirectionsQuery(areaSlug: string) {
  return useQuery({
    queryKey: queryKeys.directions.byAreaSlug(areaSlug),
    queryFn: () => directionApi.getByAreaSlug(areaSlug),
  });
}
