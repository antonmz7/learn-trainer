import { createBrowserRouter, RouterProvider } from 'react-router';

import { RootLayout } from '@/app/layouts/RootLayout';
import { AreasPage } from '@/pages/AreasPage';
import { DirectionsPage } from '@/pages/DirectionsPage';
import { HomePage } from '@/pages/HomePage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { TopicsPage } from '@/pages/TopicsPage';
import { TrainerPage } from '@/pages/TrainerPage';
import { ROUTE_PATTERNS } from '@/shared/config/routes';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: ROUTE_PATTERNS.home,
        element: <HomePage />,
      },
      {
        path: ROUTE_PATTERNS.areas,
        element: <AreasPage />,
      },
      {
        path: ROUTE_PATTERNS.directions,
        element: <DirectionsPage />,
      },
      {
        path: ROUTE_PATTERNS.topics,
        element: <TopicsPage />,
      },
      {
        path: ROUTE_PATTERNS.trainer,
        element: <TrainerPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
