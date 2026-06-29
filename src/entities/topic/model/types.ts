export interface Topic {
  id: string;
  directionId: string;
  slug: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface Topic {
  id: string;
  directionId: string;
  slug: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Тема с дополнительными агрегированными данными.
 * На бэкенде эти поля будут вычисляться через JOIN/COUNT,
 * сейчас — на стороне моков.
 */
export interface TopicWithStats extends Topic {
  questionsCount: number;
}
