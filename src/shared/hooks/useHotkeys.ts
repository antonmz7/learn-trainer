import { useEffect } from 'react';

export interface Hotkey {
  /** Клавиша как event.key (например, ' ', 'ArrowRight', 'Escape') */
  key: string;
  /** Обработчик нажатия */
  handler: () => void;
  /** Игнорировать ли нажатие в input/textarea (по умолчанию — да) */
  ignoreInputs?: boolean;
}

const INPUT_TAGS = new Set(['INPUT', 'TEXTAREA', 'SELECT']);

/**
 * Регистрирует глобальные клавиатурные шорткаты, привязанные к window.
 * Автоматически игнорирует нажатия, когда пользователь печатает в поле ввода.
 */
export function useHotkeys(hotkeys: Hotkey[]) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Не реагируем, если фокус в текстовом поле (пользователь печатает)
      const target = event.target as HTMLElement | null;
      const isTypingInField =
        target instanceof HTMLElement &&
        (INPUT_TAGS.has(target.tagName) || target.isContentEditable);

      for (const hotkey of hotkeys) {
        if (event.key !== hotkey.key) continue;
        if (isTypingInField && hotkey.ignoreInputs !== false) continue;

        event.preventDefault();
        hotkey.handler();
        return;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [hotkeys]);
}
