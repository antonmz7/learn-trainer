import { ErrorBoundary } from 'react-error-boundary';
import { Outlet, useLocation } from 'react-router';

import { ErrorFallback } from '@/shared/ui/error-fallback';
import { Toaster } from '@/shared/ui/sonner';

import { Header } from './Header';

export function RootLayout() {
  const location = useLocation();

  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col">
      <Header />
      <main className="container mx-auto flex-1 px-4 py-8">
        <ErrorBoundary FallbackComponent={ErrorFallback} resetKeys={[location.key]}>
          <Outlet />
        </ErrorBoundary>
      </main>
      <footer className="border-border border-t py-6">
        <div className="text-muted-foreground container mx-auto px-4 text-center text-sm">
          Learn Trainer · {new Date().getFullYear()}
        </div>
      </footer>
      <Toaster position="bottom-right" richColors closeButton />
    </div>
  );
}
