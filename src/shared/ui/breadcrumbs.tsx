import { ChevronRight } from 'lucide-react';
import { Fragment } from 'react';
import { Link } from 'react-router';

import { cn } from '@/shared/lib';

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Хлебные крошки">
      <ol className="text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <Fragment key={index}>
              <li>
                {item.to && !isLast ? (
                  <Link
                    to={item.to}
                    className="hover:text-foreground focus-visible:ring-ring/50 rounded px-1 transition-colors focus-visible:ring-2 focus-visible:outline-none"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className={cn('px-1', isLast && 'text-foreground font-medium')}
                    aria-current={isLast ? 'page' : undefined}
                  >
                    {item.label}
                  </span>
                )}
              </li>
              {!isLast && (
                <ChevronRight
                  className="text-muted-foreground/60 size-3.5 shrink-0"
                  aria-hidden="true"
                />
              )}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
