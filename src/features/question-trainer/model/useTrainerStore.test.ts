import { beforeEach, describe, expect, it } from 'vitest';

import { useTrainerStore } from './useTrainerStore';

describe('useTrainerStore', () => {
  // Перед каждым тестом сбрасываем стор в начальное состояние
  beforeEach(() => {
    useTrainerStore.getState().reset();
  });

  describe('initialize', () => {
    it('устанавливает totalQuestions и сбрасывает прогресс', () => {
      useTrainerStore.getState().initialize(5);
      const state = useTrainerStore.getState();

      expect(state.totalQuestions).toBe(5);
      expect(state.currentIndex).toBe(0);
      expect(state.isAnswerVisible).toBe(false);
      expect(state.isShuffled).toBe(false);
      expect(state.questionOrder).toEqual([0, 1, 2, 3, 4]);
    });

    it('сбрасывает прогресс при повторной инициализации', () => {
      const { initialize, goNext, showAnswer } = useTrainerStore.getState();

      initialize(5);
      goNext();
      goNext();
      showAnswer();

      // Инициализируем заново — состояние должно сброситься
      initialize(3);
      const state = useTrainerStore.getState();

      expect(state.currentIndex).toBe(0);
      expect(state.isAnswerVisible).toBe(false);
      expect(state.totalQuestions).toBe(3);
    });
  });

  describe('навигация по вопросам', () => {
    beforeEach(() => {
      useTrainerStore.getState().initialize(5);
    });

    it('goNext увеличивает currentIndex', () => {
      useTrainerStore.getState().goNext();
      expect(useTrainerStore.getState().currentIndex).toBe(1);
    });

    it('goNext скрывает ответ при переходе', () => {
      useTrainerStore.getState().showAnswer();
      useTrainerStore.getState().goNext();
      expect(useTrainerStore.getState().isAnswerVisible).toBe(false);
    });

    it('goNext не выходит за последний вопрос', () => {
      const { goNext } = useTrainerStore.getState();

      // Доходим до последнего
      for (let i = 0; i < 10; i++) goNext();

      expect(useTrainerStore.getState().currentIndex).toBe(4);
    });

    it('goPrevious уменьшает currentIndex', () => {
      useTrainerStore.getState().goNext();
      useTrainerStore.getState().goPrevious();
      expect(useTrainerStore.getState().currentIndex).toBe(0);
    });

    it('goPrevious не выходит за первый вопрос', () => {
      useTrainerStore.getState().goPrevious();
      expect(useTrainerStore.getState().currentIndex).toBe(0);
    });
  });

  describe('селекторы', () => {
    it('canGoNext возвращает false на последнем вопросе', () => {
      useTrainerStore.getState().initialize(3);
      const { goNext, canGoNext } = useTrainerStore.getState();

      expect(canGoNext()).toBe(true);
      goNext();
      expect(canGoNext()).toBe(true);
      goNext();
      expect(canGoNext()).toBe(false); // на последнем
    });

    it('canGoPrevious возвращает false на первом вопросе', () => {
      useTrainerStore.getState().initialize(3);
      expect(useTrainerStore.getState().canGoPrevious()).toBe(false);

      useTrainerStore.getState().goNext();
      expect(useTrainerStore.getState().canGoPrevious()).toBe(true);
    });

    it('isFinished true когда currentIndex на последнем вопросе', () => {
      useTrainerStore.getState().initialize(2);
      expect(useTrainerStore.getState().isFinished()).toBe(false);

      useTrainerStore.getState().goNext();
      expect(useTrainerStore.getState().isFinished()).toBe(true);
    });

    it('isFinished false когда totalQuestions = 0', () => {
      useTrainerStore.getState().initialize(0);
      expect(useTrainerStore.getState().isFinished()).toBe(false);
    });
  });

  describe('управление ответом', () => {
    beforeEach(() => {
      useTrainerStore.getState().initialize(3);
    });

    it('toggleAnswer переключает видимость', () => {
      expect(useTrainerStore.getState().isAnswerVisible).toBe(false);

      useTrainerStore.getState().toggleAnswer();
      expect(useTrainerStore.getState().isAnswerVisible).toBe(true);

      useTrainerStore.getState().toggleAnswer();
      expect(useTrainerStore.getState().isAnswerVisible).toBe(false);
    });

    it('showAnswer всегда показывает ответ', () => {
      useTrainerStore.getState().showAnswer();
      useTrainerStore.getState().showAnswer();
      expect(useTrainerStore.getState().isAnswerVisible).toBe(true);
    });

    it('hideAnswer всегда скрывает ответ', () => {
      useTrainerStore.getState().showAnswer();
      useTrainerStore.getState().hideAnswer();
      expect(useTrainerStore.getState().isAnswerVisible).toBe(false);
    });
  });

  describe('перемешивание', () => {
    it('shuffle меняет questionOrder, сохраняя те же индексы', () => {
      useTrainerStore.getState().initialize(10);
      const orderBefore = [...useTrainerStore.getState().questionOrder];

      useTrainerStore.getState().shuffle();
      const orderAfter = useTrainerStore.getState().questionOrder;

      // Те же индексы (0..9), но в другом порядке
      expect([...orderAfter].sort()).toEqual(orderBefore);
      expect(useTrainerStore.getState().isShuffled).toBe(true);
    });

    it('shuffle сбрасывает currentIndex и скрывает ответ', () => {
      useTrainerStore.getState().initialize(5);
      useTrainerStore.getState().goNext();
      useTrainerStore.getState().showAnswer();

      useTrainerStore.getState().shuffle();
      const state = useTrainerStore.getState();

      expect(state.currentIndex).toBe(0);
      expect(state.isAnswerVisible).toBe(false);
    });
  });

  describe('restart', () => {
    it('возвращает к началу с тем же количеством вопросов', () => {
      useTrainerStore.getState().initialize(5);
      useTrainerStore.getState().shuffle();
      useTrainerStore.getState().goNext();
      useTrainerStore.getState().goNext();

      useTrainerStore.getState().restart();
      const state = useTrainerStore.getState();

      expect(state.currentIndex).toBe(0);
      expect(state.isAnswerVisible).toBe(false);
      expect(state.totalQuestions).toBe(5);
      expect(state.isShuffled).toBe(false);
      expect(state.questionOrder).toEqual([0, 1, 2, 3, 4]);
    });
  });
});
