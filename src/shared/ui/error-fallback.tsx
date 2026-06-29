import { AlertTriangle, RefreshCcw } from 'lucide-react';

import { Button } from './button';

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

export function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  return (
    <div
      role="alert"
      className="border-destructive/30 bg-destructive/5 flex flex-col items-center gap-4 rounded-xl border p-8 text-center"
    >
      <div className="bg-destructive/10 rounded-full p-3">
        <AlertTriangle className="text-destructive size-8" aria-hidden="true" strokeWidth={1.5} />
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Что-то пошло не так</h2>
        <p className="text-muted-foreground max-w-md text-sm">
          Произошла непредвиденная ошибка. Попробуйте обновить эту секцию или вернитесь на главную.
        </p>
      </div>

      {import.meta.env.DEV && (
        <details className="w-full max-w-md text-left">
          <summary className="text-muted-foreground hover:text-foreground cursor-pointer text-xs font-medium">
            Детали ошибки (только в dev)
          </summary>
          <pre className="bg-muted mt-2 overflow-auto rounded-md p-3 text-xs">
            {error.message}
            {error.stack && '\n\n' + error.stack}
          </pre>
        </details>
      )}

      <Button type="button" variant="outline" onClick={resetErrorBoundary}>
        <RefreshCcw className="size-4" aria-hidden="true" />
        Попробовать снова
      </Button>
    </div>
  );
}
