import { useQuery } from '@tanstack/react-query';

import { topicApi } from '@/entities/topic';
import { queryKeys } from '@/shared/api';

export function useTopicQuery(
  areaSlug: string | undefined,
  directionSlug: string | undefined,
  topicSlug: string | undefined,
) {
  return useQuery({
    queryKey: queryKeys.topics.bySlug(areaSlug ?? '', directionSlug ?? '', topicSlug ?? ''),
    queryFn: () => topicApi.getBySlug(areaSlug!, directionSlug!, topicSlug!),
    enabled: Boolean(areaSlug) && Boolean(directionSlug) && Boolean(topicSlug),
  });
}
