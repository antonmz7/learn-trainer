import { fetchTopicBySlug, fetchTopicsByDirectionSlug } from '@/mocks/handlers';

export const topicApi = {
  getByDirectionSlug: fetchTopicsByDirectionSlug,
  getBySlug: fetchTopicBySlug,
};
