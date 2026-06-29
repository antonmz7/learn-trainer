import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import type { Question } from '@/entities/question';

import { QuestionCard } from './QuestionCard';

const mockQuestion: Question = {
  id: 'q_test_1',
  topicId: 'topic_test',
  question: 'Что такое замыкание?',
  answer: 'Это функция, которая помнит своё лексическое окружение.',
  order: 1,
  createdAt: '2026-01-01T00:00:00.000Z',
  updatedAt: '2026-01-01T00:00:00.000Z',
};

describe('QuestionCard', () => {
  it('отображает текст вопроса', () => {
    render(
      <QuestionCard question={mockQuestion} isAnswerVisible={false} onToggleAnswer={() => {}} />,
    );

    expect(screen.getByText('Что такое замыкание?')).toBeInTheDocument();
  });

  it('показывает кнопку "Показать ответ" когда ответ скрыт', () => {
    render(
      <QuestionCard question={mockQuestion} isAnswerVisible={false} onToggleAnswer={() => {}} />,
    );

    expect(screen.getByRole('button', { name: /показать ответ/i })).toBeInTheDocument();
  });

  it('показывает кнопку "Скрыть ответ" когда ответ виден', () => {
    render(
      <QuestionCard question={mockQuestion} isAnswerVisible={true} onToggleAnswer={() => {}} />,
    );

    expect(screen.getByRole('button', { name: /скрыть ответ/i })).toBeInTheDocument();
  });

  it('передаёт правильный aria-expanded состояние', () => {
    const { rerender } = render(
      <QuestionCard question={mockQuestion} isAnswerVisible={false} onToggleAnswer={() => {}} />,
    );

    expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'false');

    rerender(
      <QuestionCard question={mockQuestion} isAnswerVisible={true} onToggleAnswer={() => {}} />,
    );

    expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'true');
  });

  it('вызывает onToggleAnswer при клике на кнопку', async () => {
    const user = userEvent.setup();
    const handleToggle = vi.fn();

    render(
      <QuestionCard
        question={mockQuestion}
        isAnswerVisible={false}
        onToggleAnswer={handleToggle}
      />,
    );

    await user.click(screen.getByRole('button'));

    expect(handleToggle).toHaveBeenCalledTimes(1);
  });

  it('отображает текст ответа в DOM (он скрыт через CSS, но доступен скринридерам)', () => {
    render(
      <QuestionCard question={mockQuestion} isAnswerVisible={false} onToggleAnswer={() => {}} />,
    );

    // Ответ есть в DOM — для accessibility важно
    expect(
      screen.getByText('Это функция, которая помнит своё лексическое окружение.'),
    ).toBeInTheDocument();
  });
});
