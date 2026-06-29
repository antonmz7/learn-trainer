import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';

import { RootLayout } from '@/app/layouts/RootLayout';
import { ROUTE_PATTERNS } from '@/shared/config/routes';
import { Skeleton } from '@/shared/ui/skeleton';

const HomePage = lazy(() => import('@/pages/HomePage').then((m) => ({ default: m.HomePage })));
const AreasPage = lazy(() => import('@/pages/AreasPage').then((m) => ({ default: m.AreasPage })));
const DirectionsPage = lazy(() =>
  import('@/pages/DirectionsPage').then((m) => ({ default: m.DirectionsPage })),
);
const TopicsPage = lazy(() =>
  import('@/pages/TopicsPage').then((m) => ({ default: m.TopicsPage })),
);
const TrainerPage = lazy(() =>
  import('@/pages/TrainerPage').then((m) => ({ default: m.TrainerPage })),
);
const NotFoundPage = lazy(() =>
  import('@/pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })),
);

function PageFallback() {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="h-8 w-48" />
      <Skeleton className="h-40 w-full" />
    </div>
  );
}

function withSuspense(element: React.ReactNode) {
  return <Suspense fallback={<PageFallback />}>{element}</Suspense>;
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: ROUTE_PATTERNS.home, element: withSuspense(<HomePage />) },
      { path: ROUTE_PATTERNS.areas, element: withSuspense(<AreasPage />) },
      {
        path: ROUTE_PATTERNS.directions,
        element: withSuspense(<DirectionsPage />),
      },
      { path: ROUTE_PATTERNS.topics, element: withSuspense(<TopicsPage />) },
      { path: ROUTE_PATTERNS.trainer, element: withSuspense(<TrainerPage />) },
      { path: '*', element: withSuspense(<NotFoundPage />) },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
