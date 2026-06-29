import { create } from 'zustand';

interface TrainerState {
  currentIndex: number;
  isAnswerVisible: boolean;
  totalQuestions: number;

  // Selectors
  canGoNext: () => boolean;
  canGoPrevious: () => boolean;
  isFinished: () => boolean;

  // Actions
  initialize: (totalQuestions: number) => void;
  goNext: () => void;
  goPrevious: () => void;
  showAnswer: () => void;
  hideAnswer: () => void;
  toggleAnswer: () => void;
  reset: () => void;
}

const INITIAL_STATE = {
  currentIndex: 0,
  isAnswerVisible: false,
  totalQuestions: 0,
};

export const useTrainerStore = create<TrainerState>((set, get) => ({
  ...INITIAL_STATE,

  // Selectors (производные значения, вычисляемые при вызове)
  canGoNext: () => {
    const { currentIndex, totalQuestions } = get();
    return currentIndex < totalQuestions - 1;
  },
  canGoPrevious: () => get().currentIndex > 0,
  isFinished: () => {
    const { currentIndex, totalQuestions } = get();
    return totalQuestions > 0 && currentIndex >= totalQuestions - 1;
  },

  // Actions
  initialize: (totalQuestions) => set({ ...INITIAL_STATE, totalQuestions }),

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

  reset: () => set(INITIAL_STATE),
}));
