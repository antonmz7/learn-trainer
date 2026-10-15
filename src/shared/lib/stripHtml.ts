/**
 * Превращает HTML-строку в обычный текст: убирает теги и декодирует сущности.
 * Используем для коротких превью (например, список вопросов в сайдбаре),
 * где нужен только текст без форматирования.
 */
export function stripHtml(html: string): string {
  if (typeof DOMParser === 'undefined') {
    return html
      .replace(/<[^>]*>/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return (doc.body.textContent ?? '').replace(/\s+/g, ' ').trim();
}
