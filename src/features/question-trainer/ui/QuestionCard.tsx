import { ChevronDown, ChevronUp } from 'lucide-react';

import type { Question } from '@/entities/question';
import { Button } from '@/shared/ui/button';
import { SafeHtml } from '@/shared/ui/safe-html';

interface QuestionCardProps {
  question: Question;
  isAnswerVisible: boolean;
  onToggleAnswer: () => void;
}

export function QuestionCard({ question, isAnswerVisible, onToggleAnswer }: QuestionCardProps) {
  return (
    <article className="border-border bg-card flex flex-col gap-4 rounded-xl border p-6 shadow-sm">
      <SafeHtml
        html={question.question}
        className="prose-question text-xl leading-relaxed font-semibold"
      />

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
          <SafeHtml
            html={question.answer}
            className="prose-answer bg-muted/40 text-foreground/90 rounded-lg p-4 leading-relaxed"
          />
        </div>
      </div>
    </article>
  );
}
