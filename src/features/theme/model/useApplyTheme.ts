import { useEffect } from 'react';

import type { ThemeMode } from './useThemeStore';
import { useThemeStore } from './useThemeStore';

/**
 * Определяет, нужна ли тёмная тема прямо сейчас,
 * на основе выбора пользователя и системных предпочтений.
 */
function resolveIsDark(mode: ThemeMode): boolean {
  if (mode === 'dark') return true;
  if (mode === 'light') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

/**
 * Применяет выбранную тему к <html>.
 * При режиме 'system' автоматически реагирует на смену системной темы.
 * Должен быть вызван один раз на уровне приложения.
 */
export function useApplyTheme() {
  const mode = useThemeStore((state) => state.mode);

  useEffect(() => {
    const root = document.documentElement;

    const apply = () => {
      const isDark = resolveIsDark(mode);
      root.classList.toggle('dark', isDark);
      // Сообщаем браузеру цвет — это влияет на нативные элементы (scrollbar, form inputs)
      root.style.colorScheme = isDark ? 'dark' : 'light';
    };

    apply();

    // Если режим — system, слушаем изменения системной темы
    if (mode !== 'system') return;

    const media = window.matchMedia('(prefers-color-scheme: dark)');
    media.addEventListener('change', apply);
    return () => media.removeEventListener('change', apply);
  }, [mode]);
}
