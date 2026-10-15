import { ListOrdered } from 'lucide-react';
import { useEffect, useRef } from 'react';

import type { Question } from '@/entities/question';
import { cn, stripHtml } from '@/shared/lib';

interface TrainerSidebarProps {
  /** Вопросы в исходном порядке */
  questions: Question[];
  /** Порядок показа: позиция → индекс в `questions` (с учётом перемешивания) */
  questionOrder: number[];
  /** Текущая позиция в порядке показа */
  currentIndex: number;
  /** Переход к вопросу по позиции в порядке показа */
  onSelect: (index: number) => void;
  className?: string;
}

/**
 * Боковой список всех вопросов темы. Позволяет перейти к любому вопросу
 * напрямую, не листая стрелками. Текущий вопрос подсвечен и автоматически
 * прокручивается в видимую область.
 */
export function TrainerSidebar({
  questions,
  questionOrder,
  currentIndex,
  onSelect,
  className,
}: TrainerSidebarProps) {
  const activeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    activeRef.current?.scrollIntoView({ block: 'nearest' });
  }, [currentIndex]);

  return (
    <nav
      aria-label="Список вопросов"
      className={cn('border-border bg-card flex flex-col rounded-xl border shadow-sm', className)}
    >
      <div className="border-border flex items-center gap-2 border-b px-4 py-3">
        <ListOrdered className="text-muted-foreground size-4" aria-hidden="true" />
        <h2 className="text-sm font-semibold">Вопросы</h2>
        <span className="text-muted-foreground ml-auto text-xs tabular-nums">
          {questions.length}
        </span>
      </div>

      <ol className="flex flex-col gap-0.5 overflow-y-auto p-2">
        {questionOrder.map((realIndex, position) => {
          const question = questions[realIndex];
          if (!question) return null;

          const isActive = position === currentIndex;

          return (
            <li key={question.id}>
              <button
                ref={isActive ? activeRef : undefined}
                type="button"
                onClick={() => onSelect(position)}
                aria-current={isActive ? 'true' : undefined}
                title={stripHtml(question.question)}
                className={cn(
                  'flex w-full items-start gap-2.5 rounded-lg px-2.5 py-2 text-left text-sm transition-colors',
                  'focus-visible:ring-ring/50 outline-none focus-visible:ring-3',
                  isActive
                    ? 'bg-primary text-primary-foreground font-medium'
                    : 'text-foreground/80 hover:bg-muted hover:text-foreground',
                )}
              >
                <span
                  className={cn(
                    'mt-px shrink-0 text-xs tabular-nums',
                    isActive ? 'text-primary-foreground/70' : 'text-muted-foreground',
                  )}
                >
                  {position + 1}.
                </span>
                <span className="line-clamp-2 leading-snug">{stripHtml(question.question)}</span>
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
