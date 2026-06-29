import { ChevronDown, ChevronUp } from 'lucide-react';

import type { Question } from '@/entities/question';
import { Button } from '@/shared/ui/button';

interface QuestionCardProps {
  question: Question;
  isAnswerVisible: boolean;
  onToggleAnswer: () => void;
}

export function QuestionCard({ question, isAnswerVisible, onToggleAnswer }: QuestionCardProps) {
  return (
    <article className="border-border bg-card flex flex-col gap-4 rounded-xl border p-6 shadow-sm">
      <h2 className="text-xl leading-relaxed font-semibold">{question.question}</h2>

      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={onToggleAnswer}
        className="self-start"
        aria-expanded={isAnswerVisible}
        aria-controls={`answer-${question.id}`}
      >
        {isAnswerVisible ? (
          <>
            <ChevronUp className="size-4" aria-hidden="true" />
            Скрыть ответ
          </>
        ) : (
          <>
            <ChevronDown className="size-4" aria-hidden="true" />
            Показать ответ
          </>
        )}
      </Button>

      <div
        id={`answer-${question.id}`}
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: isAnswerVisible ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="bg-muted/40 text-foreground/90 rounded-lg p-4 leading-relaxed">
            {question.answer}
          </div>
        </div>
      </div>
    </article>
  );
}
