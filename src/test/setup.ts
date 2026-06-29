import '@testing-library/jest-dom/vitest';

import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

// Очистка DOM после каждого теста — изоляция между тестами
afterEach(() => {
  cleanup();
});
