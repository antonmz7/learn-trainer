import { create } from 'zustand';

interface TrainerState {
  currentIndex: number;
  isAnswerVisible: boolean;
  totalQuestions: number;
  isShuffled: boolean;
  /**
   * Порядок индексов вопросов для отображения.
   * При обычном режиме это [0, 1, 2, ...n-1].
   * При перемешивании — переставленные значения.
   */
  questionOrder: number[];

  // Selectors
  canGoNext: () => boolean;
  canGoPrevious: () => boolean;
  isFinished: () => boolean;
  /** Реальный индекс вопроса в исходном массиве — с учётом перемешивания */
  getCurrentQuestionIndex: () => number;

  // Actions
  initialize: (totalQuestions: number) => void;
  goNext: () => void;
  goPrevious: () => void;
  showAnswer: () => void;
  hideAnswer: () => void;
  toggleAnswer: () => void;
  shuffle: () => void;
  restart: () => void;
  reset: () => void;
}

const INITIAL_STATE = {
  currentIndex: 0,
  isAnswerVisible: false,
  totalQuestions: 0,
  isShuffled: false,
  questionOrder: [] as number[],
};

/**
 * Перемешивание Fisher-Yates — гарантирует равномерное распределение
 * всех возможных перестановок. Не используй sort(() => Math.random()) —
 * он даёт неравномерный результат.
 */
function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export const useTrainerStore = create<TrainerState>((set, get) => ({
  ...INITIAL_STATE,

  // Selectors
  canGoNext: () => {
    const { currentIndex, totalQuestions } = get();
    return currentIndex < totalQuestions - 1;
  },
  canGoPrevious: () => get().currentIndex > 0,
  isFinished: () => {
    const { currentIndex, totalQuestions } = get();
    return totalQuestions > 0 && currentIndex >= totalQuestions - 1;
  },
  getCurrentQuestionIndex: () => {
    const { currentIndex, questionOrder } = get();
    return questionOrder[currentIndex] ?? currentIndex;
  },

  // Actions
  initialize: (totalQuestions) =>
    set({
      ...INITIAL_STATE,
      totalQuestions,
      questionOrder: Array.from({ length: totalQuestions }, (_, i) => i),
    }),

  goNext: () => {
    const { currentIndex, totalQuestions } = get();
    if (currentIndex < totalQuestions - 1) {
      set({ currentIndex: currentIndex + 1, isAnswerVisible: false });
    }
  },

  goPrevious: () => {
    const { currentIndex } = get();
    if (currentIndex > 0) {
      set({ currentIndex: currentIndex - 1, isAnswerVisible: false });
    }
  },

  showAnswer: () => set({ isAnswerVisible: true }),
  hideAnswer: () => set({ isAnswerVisible: false }),
  toggleAnswer: () => set((state) => ({ isAnswerVisible: !state.isAnswerVisible })),

  shuffle: () => {
    const { totalQuestions } = get();
    const baseOrder = Array.from({ length: totalQuestions }, (_, i) => i);
    set({
      questionOrder: shuffleArray(baseOrder),
      currentIndex: 0,
      isAnswerVisible: false,
      isShuffled: true,
    });
  },

  restart: () => {
    const { totalQuestions } = get();
    set({
      ...INITIAL_STATE,
      totalQuestions,
      questionOrder: Array.from({ length: totalQuestions }, (_, i) => i),
    });
  },

  reset: () => set(INITIAL_STATE),
}));
