import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Button } from '@/shared/ui/button';

interface TrainerNavigatorProps {
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
  isLastQuestion: boolean;
}

export function TrainerNavigator({
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
  isLastQuestion,
}: TrainerNavigatorProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <Button type="button" variant="outline" onClick={onPrevious} disabled={!canGoPrevious}>
        <ChevronLeft className="size-4" aria-hidden="true" />
        Предыдущий
      </Button>

      {!isLastQuestion ? (
        <Button type="button" onClick={onNext} disabled={!canGoNext}>
          Следующий
          <ChevronRight className="size-4" aria-hidden="true" />
        </Button>
      ) : (
        <span className="text-brand-600 text-sm font-medium">Это последний вопрос</span>
      )}
    </div>
  );
}
