import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '@/shared/api';

import { directionApi } from './directionApi';

export function useDirectionQuery(areaSlug: string | undefined, directionSlug: string | undefined) {
  return useQuery({
    queryKey: queryKeys.directions.bySlug(areaSlug ?? '', directionSlug ?? ''),
    queryFn: () => directionApi.getBySlug(areaSlug!, directionSlug!),
    enabled: Boolean(areaSlug) && Boolean(directionSlug),
  });
}
