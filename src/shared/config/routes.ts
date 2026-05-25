export const ROUTES = {
  home: '/',
  areas: '/areas',
  directions: (areaSlug: string) => `/areas/${areaSlug}/directions`,
  topics: (areaSlug: string, directionSlug: string) =>
    `/areas/${areaSlug}/directions/${directionSlug}/topics`,
  trainer: (areaSlug: string, directionSlug: string, topicSlug: string) =>
    `/areas/${areaSlug}/directions/${directionSlug}/topics/${topicSlug}/trainer`,
} as const;

// Паттерны для роутера (с :slug-параметрами)
export const ROUTE_PATTERNS = {
  home: '/',
  areas: '/areas',
  directions: '/areas/:areaSlug/directions',
  topics: '/areas/:areaSlug/directions/:directionSlug/topics',
  trainer: '/areas/:areaSlug/directions/:directionSlug/topics/:topicSlug/trainer',
} as const;
