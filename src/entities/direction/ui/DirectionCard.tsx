import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

import { Card, CardContent, CardDescription, CardTitle } from '@/shared/ui/card';

import type { Direction } from '../model';

interface DirectionCardProps {
  direction: Direction;
  to: string;
}

export function DirectionCard({ direction, to }: DirectionCardProps) {
  return (
    <Link
      to={to}
      className="group focus-visible:ring-ring/50 block rounded-xl outline-none focus-visible:ring-3"
    >
      <Card className="group-hover:border-brand-500/50 h-full transition-all group-hover:shadow-md">
        <CardContent className="flex h-full flex-col gap-2 p-6">
          <div className="flex items-start justify-between gap-4">
            <CardTitle className="text-xl">{direction.name}</CardTitle>
            <ArrowRight className="text-muted-foreground group-hover:text-brand-600 size-5 shrink-0 transition-transform group-hover:translate-x-1" />
          </div>
          <CardDescription className="text-sm leading-relaxed">
            {direction.description}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
