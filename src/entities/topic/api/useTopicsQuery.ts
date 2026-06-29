import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '@/shared/api';

import { topicApi } from './topicApi';

export function useTopicsQuery(areaSlug: string, directionSlug: string) {
  return useQuery({
    queryKey: queryKeys.topics.byDirectionSlug(areaSlug, directionSlug),
    queryFn: () => topicApi.getByDirectionSlug(areaSlug, directionSlug),
  });
}
