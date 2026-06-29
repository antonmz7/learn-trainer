import DOMPurify from 'dompurify';
import { useMemo } from 'react';

interface SafeHtmlProps {
  /** HTML-строка для рендера. Будет очищена через DOMPurify. */
  html: string;
  /** CSS-классы для обёртки */
  className?: string;
  /** Тег обёртки (по умолчанию div) */
  as?: 'div' | 'span' | 'article' | 'section';
}

/**
 * Безопасный рендер HTML-строки.
 * Санитизирует входной HTML через DOMPurify, удаляя потенциально опасные
 * элементы (script, on*-атрибуты, javascript: URLs и т.д.).
 *
 * Используем для отображения HTML-форматированных вопросов и ответов,
 * которые приходят из моков (или в будущем — с бэкенда).
 */
export function SafeHtml({ html, className, as: Tag = 'div' }: SafeHtmlProps) {
  const clean = useMemo(() => DOMPurify.sanitize(html), [html]);

  return <Tag className={className} dangerouslySetInnerHTML={{ __html: clean }} />;
}
