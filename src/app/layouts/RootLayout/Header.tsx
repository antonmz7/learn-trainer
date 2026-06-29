import { GraduationCap } from 'lucide-react';
import { Link, NavLink } from 'react-router';

import { ThemeToggle } from '@/features/theme';
import { ROUTES } from '@/shared/config/routes';
import { cn } from '@/shared/lib';

export function Header() {
  return (
    <header className="border-border bg-background/80 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <Link to={ROUTES.home} className="flex items-center gap-2 font-semibold">
          <GraduationCap className="text-brand-600 size-5" />
          <span>Learn Trainer</span>
        </Link>

        <div className="flex items-center gap-3">
          <nav className="flex items-center gap-1">
            <HeaderLink to={ROUTES.home}>Главная</HeaderLink>
            <HeaderLink to={ROUTES.areas}>Области</HeaderLink>
          </nav>
          <div className="bg-border h-5 w-px" aria-hidden="true" />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

function HeaderLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        cn(
          'rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
          'hover:bg-muted hover:text-foreground',
          isActive ? 'text-foreground' : 'text-muted-foreground',
        )
      }
    >
      {children}
    </NavLink>
  );
}
