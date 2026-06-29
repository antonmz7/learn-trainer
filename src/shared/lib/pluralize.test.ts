import { describe, expect, it } from 'vitest';

import { pluralize } from './pluralize';

describe('pluralize', () => {
  const forms: [string, string, string] = ['вопрос', 'вопроса', 'вопросов'];

  describe('единственное число (singular)', () => {
    it('возвращает singular для 1', () => {
      expect(pluralize(1, forms)).toBe('вопрос');
    });

    it('возвращает singular для чисел, оканчивающихся на 1, кроме 11', () => {
      expect(pluralize(21, forms)).toBe('вопрос');
      expect(pluralize(101, forms)).toBe('вопрос');
      expect(pluralize(1001, forms)).toBe('вопрос');
    });
  });

  describe('малое количество (few)', () => {
    it('возвращает few для 2, 3, 4', () => {
      expect(pluralize(2, forms)).toBe('вопроса');
      expect(pluralize(3, forms)).toBe('вопроса');
      expect(pluralize(4, forms)).toBe('вопроса');
    });

    it('возвращает few для 22, 23, 24', () => {
      expect(pluralize(22, forms)).toBe('вопроса');
      expect(pluralize(23, forms)).toBe('вопроса');
      expect(pluralize(24, forms)).toBe('вопроса');
    });
  });

  describe('много (many)', () => {
    it('возвращает many для 0', () => {
      expect(pluralize(0, forms)).toBe('вопросов');
    });

    it('возвращает many для 5-9', () => {
      expect(pluralize(5, forms)).toBe('вопросов');
      expect(pluralize(9, forms)).toBe('вопросов');
    });

    it('возвращает many для 11-19 (исключение для подростковых)', () => {
      expect(pluralize(11, forms)).toBe('вопросов');
      expect(pluralize(12, forms)).toBe('вопросов');
      expect(pluralize(14, forms)).toBe('вопросов');
      expect(pluralize(19, forms)).toBe('вопросов');
    });

    it('возвращает many для 111-119 (длинные числа с подростковым хвостом)', () => {
      expect(pluralize(111, forms)).toBe('вопросов');
      expect(pluralize(112, forms)).toBe('вопросов');
    });
  });

  it('корректно работает с отрицательными числами', () => {
    expect(pluralize(-1, forms)).toBe('вопрос');
    expect(pluralize(-5, forms)).toBe('вопросов');
  });
});
