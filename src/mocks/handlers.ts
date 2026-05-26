import type { Area } from '@/entities/area/model';
import type { Direction } from '@/entities/direction/model';
import type { Question } from '@/entities/question/model';
import type { Topic } from '@/entities/topic/model';

import { mockAreas, mockDirections, mockQuestions, mockTopics } from './data';

/**
 * Имитация задержки сети. В production эти функции будут заменены на реальные fetch-запросы.
 */
const SIMULATED_DELAY_MS = 300;

const delay = <T>(value: T): Promise<T> =>
  new Promise((resolve) => setTimeout(() => resolve(value), SIMULATED_DELAY_MS));

// Areas
export const fetchAreas = (): Promise<Area[]> => delay([...mockAreas]);

export const fetchAreaBySlug = async (slug: string): Promise<Area | null> => {
  const area = mockAreas.find((a) => a.slug === slug) ?? null;
  return delay(area);
};

// Directions
export const fetchDirectionsByAreaSlug = async (areaSlug: string): Promise<Direction[]> => {
  const area = mockAreas.find((a) => a.slug === areaSlug);
  if (!area) return delay([]);
  const directions = mockDirections.filter((d) => d.areaId === area.id);
  return delay(directions);
};

export const fetchDirectionBySlug = async (
  areaSlug: string,
  directionSlug: string,
): Promise<Direction | null> => {
  const area = mockAreas.find((a) => a.slug === areaSlug);
  if (!area) return delay(null);
  const direction =
    mockDirections.find((d) => d.areaId === area.id && d.slug === directionSlug) ?? null;
  return delay(direction);
};

// Topics
export const fetchTopicsByDirectionSlug = async (
  areaSlug: string,
  directionSlug: string,
): Promise<Topic[]> => {
  const area = mockAreas.find((a) => a.slug === areaSlug);
  if (!area) return delay([]);
  const direction = mockDirections.find((d) => d.areaId === area.id && d.slug === directionSlug);
  if (!direction) return delay([]);
  const topics = mockTopics.filter((t) => t.directionId === direction.id);
  return delay(topics);
};

export const fetchTopicBySlug = async (
  areaSlug: string,
  directionSlug: string,
  topicSlug: string,
): Promise<Topic | null> => {
  const area = mockAreas.find((a) => a.slug === areaSlug);
  if (!area) return delay(null);
  const direction = mockDirections.find((d) => d.areaId === area.id && d.slug === directionSlug);
  if (!direction) return delay(null);
  const topic =
    mockTopics.find((t) => t.directionId === direction.id && t.slug === topicSlug) ?? null;
  return delay(topic);
};

// Questions
export const fetchQuestionsByTopicSlug = async (
  areaSlug: string,
  directionSlug: string,
  topicSlug: string,
): Promise<Question[]> => {
  const area = mockAreas.find((a) => a.slug === areaSlug);
  if (!area) return delay([]);
  const direction = mockDirections.find((d) => d.areaId === area.id && d.slug === directionSlug);
  if (!direction) return delay([]);
  const topic = mockTopics.find((t) => t.directionId === direction.id && t.slug === topicSlug);
  if (!topic) return delay([]);
  const questions = mockQuestions
    .filter((q) => q.topicId === topic.id)
    .sort((a, b) => a.order - b.order);
  return delay(questions);
};
