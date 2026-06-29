import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '@/shared/api';

import { areaApi } from './areaApi';

export function useAreasQuery() {
  return useQuery({
    queryKey: queryKeys.areas.all,
    queryFn: areaApi.getAll,
  });
}
