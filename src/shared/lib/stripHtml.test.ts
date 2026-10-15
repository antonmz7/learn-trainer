import { describe, expect, it } from 'vitest';

import { stripHtml } from './stripHtml';

describe('stripHtml', () => {
  it('убирает теги и оставляет текст', () => {
    expect(stripHtml('Что такое <code>let</code> и <b>const</b>?')).toBe('Что такое let и const?');
  });

  it('декодирует HTML-сущности', () => {
    expect(stripHtml('a &lt; b &amp;&amp; c &gt; d')).toBe('a < b && c > d');
  });

  it('схлопывает пробелы и переносы строк', () => {
    expect(stripHtml('<p>Первая\n   строка</p>\n<p>вторая</p>')).toBe('Первая строка вторая');
  });

  it('возвращает строку без изменений, если тегов нет', () => {
    expect(stripHtml('Простой вопрос?')).toBe('Простой вопрос?');
  });
});
