import { AlertCircle, Inbox } from 'lucide-react';

import { AreaCard, AreaCardSkeleton, useAreasQuery } from '@/entities/area';
import { ROUTES } from '@/shared/config/routes';
import { EmptyState } from '@/shared/ui/empty-state';

export function AreasPage() {
  const { data: areas, isLoading, isError, error } = useAreasQuery();

  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Области знаний</h1>
        <p className="text-muted-foreground">Выберите область, в которой хотите тренироваться</p>
      </header>

      <AreasContent areas={areas} isLoading={isLoading} isError={isError} error={error} />
    </div>
  );
}

interface AreasContentProps {
  areas: ReturnType<typeof useAreasQuery>['data'];
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
}

function AreasContent({ areas, isLoading, isError, error }: AreasContentProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <AreaCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <EmptyState
        icon={AlertCircle}
        title="Не удалось загрузить области"
        description={error?.message ?? 'Попробуйте обновить страницу'}
      />
    );
  }

  if (!areas || areas.length === 0) {
    return (
      <EmptyState
        icon={Inbox}
        title="Областей пока нет"
        description="Здесь появятся области знаний, как только они будут добавлены"
      />
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {areas.map((area) => (
        <AreaCard key={area.id} area={area} to={ROUTES.directions(area.slug)} />
      ))}
    </div>
  );
}
