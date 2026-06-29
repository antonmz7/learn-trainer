import { ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router';

import { pluralize } from '@/shared/lib';
import { Card, CardContent, CardDescription, CardTitle } from '@/shared/ui/card';

import type { TopicWithStats } from '../model';

interface TopicCardProps {
  topic: TopicWithStats;
  to: string;
}

export function TopicCard({ topic, to }: TopicCardProps) {
  const questionsLabel = pluralize(topic.questionsCount, ['вопрос', 'вопроса', 'вопросов']);

  return (
    <Link
      to={to}
      className="group focus-visible:ring-ring/50 block rounded-xl outline-none focus-visible:ring-3"
    >
      <Card className="group-hover:border-brand-500/50 h-full transition-all group-hover:shadow-md">
        <CardContent className="flex h-full flex-col gap-3 p-6">
          <div className="flex items-start justify-between gap-4">
            <CardTitle className="text-xl">{topic.name}</CardTitle>
            <ArrowRight className="text-muted-foreground group-hover:text-brand-600 size-5 shrink-0 transition-transform group-hover:translate-x-1" />
          </div>
          <CardDescription className="text-sm leading-relaxed">{topic.description}</CardDescription>
          <div className="text-muted-foreground mt-auto flex items-center gap-1.5 text-sm">
            <BookOpen className="size-4" aria-hidden="true" />
            <span>
              {topic.questionsCount} {questionsLabel}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
