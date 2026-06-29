import { CheckCircle2, RotateCcw, Shuffle } from 'lucide-react';

import { Button } from '@/shared/ui/button';

interface TrainerCompletedProps {
  totalQuestions: number;
  onRestart: () => void;
  onShuffle: () => void;
}

export function TrainerCompleted({ totalQuestions, onRestart, onShuffle }: TrainerCompletedProps) {
  return (
    <div className="border-border bg-card flex flex-col items-center gap-4 rounded-xl border p-12 text-center shadow-sm">
      <div className="bg-brand-50 dark:bg-brand-500/10 rounded-full p-3">
        <CheckCircle2 className="text-brand-600 size-10" aria-hidden="true" strokeWidth={1.5} />
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold tracking-tight">Тема пройдена!</h2>
        <p className="text-muted-foreground max-w-md">
          Вы прошли все {totalQuestions} {totalQuestions === 1 ? 'вопрос' : 'вопросов'} в этой теме.
          Можно повторить или вернуться к выбору темы.
        </p>
      </div>

      <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
        <Button type="button" onClick={onRestart}>
          <RotateCcw className="size-4" aria-hidden="true" />
          Начать заново
        </Button>
        <Button type="button" variant="outline" onClick={onShuffle}>
          <Shuffle className="size-4" aria-hidden="true" />
          Перемешать
        </Button>
      </div>
    </div>
  );
}
