import { ErrorBoundary } from 'react-error-boundary';

import { QueryProvider } from '@/app/providers/QueryProvider';
import { AppRouter } from '@/app/router';
import { useApplyTheme } from '@/features/theme';
import { ErrorFallback } from '@/shared/ui/error-fallback';

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryProvider>
        <ThemeApplier />
        <AppRouter />
      </QueryProvider>
    </ErrorBoundary>
  );
}

function ThemeApplier() {
  useApplyTheme();
  return null;
}

export default App;
