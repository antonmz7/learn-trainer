import { QueryProvider } from '@/app/providers/QueryProvider';
import { AppRouter } from '@/app/router';
import { useApplyTheme } from '@/features/theme';

function App() {
  return (
    <QueryProvider>
      <ThemeApplier />
      <AppRouter />
    </QueryProvider>
  );
}

function ThemeApplier() {
  useApplyTheme();
  return null;
}

export default App;
