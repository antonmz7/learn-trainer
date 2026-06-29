export const queryKeys = {
  areas: {
    all: ['areas'] as const,
    bySlug: (slug: string) => ['areas', slug] as const,
  },
  directions: {
    all: ['directions'] as const,
    byAreaSlug: (areaSlug: string) => ['directions', areaSlug] as const,
    bySlug: (areaSlug: string, directionSlug: string) =>
      ['directions', areaSlug, directionSlug] as const,
  },
  topics: {
    all: ['topics'] as const,
    byDirectionSlug: (areaSlug: string, directionSlug: string) =>
      ['topics', areaSlug, directionSlug] as const,
    bySlug: (areaSlug: string, directionSlug: string, topicSlug: string) =>
      ['topics', areaSlug, directionSlug, topicSlug] as const,
  },
  questions: {
    byTopicSlug: (areaSlug: string, directionSlug: string, topicSlug: string) =>
      ['questions', areaSlug, directionSlug, topicSlug] as const,
  },
} as const;
