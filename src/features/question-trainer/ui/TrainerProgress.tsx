import { Progress } from '@/shared/ui/progress';

interface TrainerProgressProps {
  current: number;
  total: number;
}

export function TrainerProgress({ current, total }: TrainerProgressProps) {
  const percentage = total > 0 ? ((current + 1) / total) * 100 : 0;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-foreground font-medium">
          Вопрос {current + 1} из {total}
        </span>
        <span className="text-muted-foreground">{Math.round(percentage)}%</span>
      </div>
      <Progress value={percentage} className="h-2" />
    </div>
  );
}
