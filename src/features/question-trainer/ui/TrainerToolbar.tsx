import { Shuffle } from 'lucide-react';

import { Button } from '@/shared/ui/button';

interface TrainerToolbarProps {
  isShuffled: boolean;
  onShuffle: () => void;
}

export function TrainerToolbar({ isShuffled, onShuffle }: TrainerToolbarProps) {
  return (
    <div className="flex items-center justify-between gap-2">
      <p className="text-muted-foreground text-xs">
        <kbd className="border-border bg-muted rounded border px-1.5 py-0.5 font-mono text-[0.7rem]">
          Space
        </kbd>{' '}
        — ответ ·{' '}
        <kbd className="border-border bg-muted rounded border px-1.5 py-0.5 font-mono text-[0.7rem]">
          ←
        </kbd>{' '}
        <kbd className="border-border bg-muted rounded border px-1.5 py-0.5 font-mono text-[0.7rem]">
          →
        </kbd>{' '}
        — навигация
      </p>

      <Button
        type="button"
        variant={isShuffled ? 'secondary' : 'outline'}
        size="sm"
        onClick={onShuffle}
      >
        <Shuffle className="size-3.5" aria-hidden="true" />
        {isShuffled ? 'Перемешано' : 'Перемешать'}
      </Button>
    </div>
  );
}
