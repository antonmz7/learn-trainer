import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '@/shared/api';

import { areaApi } from './areaApi';

export function useAreaQuery(slug: string | undefined) {
  return useQuery({
    queryKey: queryKeys.areas.bySlug(slug ?? ''),
    queryFn: () => areaApi.getBySlug(slug!),
    enabled: Boolean(slug),
  });
}
