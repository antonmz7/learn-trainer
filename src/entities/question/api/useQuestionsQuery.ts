import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '@/shared/api';

import { questionApi } from './questionApi';

export function useQuestionsQuery(areaSlug: string, directionSlug: string, topicSlug: string) {
  return useQuery({
    queryKey: queryKeys.questions.byTopicSlug(areaSlug, directionSlug, topicSlug),
    queryFn: () => questionApi.getByTopicSlug(areaSlug, directionSlug, topicSlug),
  });
}
