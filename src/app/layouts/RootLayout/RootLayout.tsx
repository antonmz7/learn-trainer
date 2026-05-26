import { Outlet } from 'react-router';

import { Header } from './Header';

export function RootLayout() {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col">
      <Header />
      <main className="container mx-auto flex-1 px-4 py-8">
        <Outlet />
      </main>
      <footer className="border-border border-t py-6">
        <div className="text-muted-foreground container mx-auto px-4 text-center text-sm">
          Learn Trainer · {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
}
