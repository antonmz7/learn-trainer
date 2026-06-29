import { AlertCircle, Inbox } from 'lucide-react';
import { Navigate } from 'react-router';

import { useAreaQuery } from '@/entities/area';
import { useDirectionQuery } from '@/entities/direction';
import { TopicCard, TopicCardSkeleton, useTopicsQuery } from '@/entities/topic';
import { ROUTES } from '@/shared/config/routes';
import { useTypedParams } from '@/shared/lib';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import { EmptyState } from '@/shared/ui/empty-state';

export function TopicsPage() {
  const { areaSlug, directionSlug } = useTypedParams('areaSlug', 'directionSlug');

  const areaQuery = useAreaQuery(areaSlug);
  const directionQuery = useDirectionQuery(areaSlug, directionSlug);
  const topicsQuery = useTopicsQuery(areaSlug, directionSlug);

  // 404 — если область или направление явно не найдены
  if (
    (areaQuery.isSuccess && !areaQuery.data) ||
    (directionQuery.isSuccess && !directionQuery.data)
  ) {
    return <Navigate to="/not-found" replace />;
  }

  const area = areaQuery.data;
  const direction = directionQuery.data;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <Breadcrumbs
          items={[
            { label: 'Области', to: ROUTES.areas },
            { label: area?.name ?? '...', to: ROUTES.directions(areaSlug) },
            { label: direction?.name ?? '...' },
          ]}
        />
        <header className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">{direction?.name ?? 'Загрузка...'}</h1>
          {direction && <p className="text-muted-foreground">{direction.description}</p>}
        </header>
      </div>

      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Темы</h2>
        <TopicsContent
          topics={topicsQuery.data}
          isLoading={topicsQuery.isLoading}
          isError={topicsQuery.isError}
          error={topicsQuery.error}
          areaSlug={areaSlug}
          directionSlug={directionSlug}
        />
      </section>
    </div>
  );
}

interface TopicsContentProps {
  topics: ReturnType<typeof useTopicsQuery>['data'];
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  areaSlug: string;
  directionSlug: string;
}

function TopicsContent({
  topics,
  isLoading,
  isError,
  error,
  areaSlug,
  directionSlug,
}: TopicsContentProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <TopicCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <EmptyState
        icon={AlertCircle}
        title="Не удалось загрузить темы"
        description={error?.message ?? 'Попробуйте обновить страницу'}
      />
    );
  }

  if (!topics || topics.length === 0) {
    return (
      <EmptyState
        icon={Inbox}
        title="Тем пока нет"
        description="В этом направлении ещё не созданы темы"
      />
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {topics.map((topic) => (
        <TopicCard
          key={topic.id}
          topic={topic}
          to={ROUTES.trainer(areaSlug, directionSlug, topic.slug)}
        />
      ))}
    </div>
  );
}
