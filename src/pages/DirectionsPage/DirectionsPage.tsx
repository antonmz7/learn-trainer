import { AlertCircle, Inbox } from 'lucide-react';
import { Navigate } from 'react-router';

import { useAreaQuery } from '@/entities/area';
import { DirectionCard, DirectionCardSkeleton, useDirectionsQuery } from '@/entities/direction';
import { ROUTES } from '@/shared/config/routes';
import { useTypedParams } from '@/shared/lib';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import { EmptyState } from '@/shared/ui/empty-state';

export function DirectionsPage() {
  const { areaSlug } = useTypedParams('areaSlug');

  const areaQuery = useAreaQuery(areaSlug);
  const directionsQuery = useDirectionsQuery(areaSlug);

  // Если область явно не найдена (не путать с состоянием загрузки) — 404
  if (areaQuery.isSuccess && !areaQuery.data) {
    return <Navigate to="/not-found" replace />;
  }

  const area = areaQuery.data;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <Breadcrumbs
          items={[{ label: 'Области', to: ROUTES.areas }, { label: area?.name ?? '...' }]}
        />
        <header className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">{area?.name ?? 'Загрузка...'}</h1>
          {area && <p className="text-muted-foreground">{area.description}</p>}
        </header>
      </div>

      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Направления</h2>
        <DirectionsContent
          directions={directionsQuery.data}
          isLoading={directionsQuery.isLoading}
          isError={directionsQuery.isError}
          error={directionsQuery.error}
          areaSlug={areaSlug}
        />
      </section>
    </div>
  );
}

interface DirectionsContentProps {
  directions: ReturnType<typeof useDirectionsQuery>['data'];
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  areaSlug: string;
}

function DirectionsContent({
  directions,
  isLoading,
  isError,
  error,
  areaSlug,
}: DirectionsContentProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <DirectionCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <EmptyState
        icon={AlertCircle}
        title="Не удалось загрузить направления"
        description={error?.message ?? 'Попробуйте обновить страницу'}
      />
    );
  }

  if (!directions || directions.length === 0) {
    return (
      <EmptyState
        icon={Inbox}
        title="Направлений пока нет"
        description="В этой области ещё не созданы направления"
      />
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {directions.map((direction) => (
        <DirectionCard
          key={direction.id}
          direction={direction}
          to={ROUTES.topics(areaSlug, direction.slug)}
        />
      ))}
    </div>
  );
}
