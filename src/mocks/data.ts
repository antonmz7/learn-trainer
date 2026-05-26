import type { Area } from '@/entities/area/model';
import type { Direction } from '@/entities/direction/model';
import type { Question } from '@/entities/question/model';
import type { Topic } from '@/entities/topic/model';

const NOW = '2026-01-01T00:00:00.000Z';

export const mockAreas: Area[] = [
  {
    id: 'area_it',
    slug: 'it',
    name: 'IT',
    description: 'Информационные технологии и разработка',
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'area_design',
    slug: 'design',
    name: 'Дизайн',
    description: 'Графический и продуктовый дизайн',
    createdAt: NOW,
    updatedAt: NOW,
  },
];

export const mockDirections: Direction[] = [
  {
    id: 'dir_frontend',
    areaId: 'area_it',
    slug: 'frontend',
    name: 'Frontend',
    description: 'Разработка пользовательских интерфейсов',
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'dir_backend',
    areaId: 'area_it',
    slug: 'backend',
    name: 'Backend',
    description: 'Серверная разработка и архитектура',
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'dir_ux',
    areaId: 'area_design',
    slug: 'ux',
    name: 'UX',
    description: 'Дизайн пользовательского опыта',
    createdAt: NOW,
    updatedAt: NOW,
  },
];

export const mockTopics: Topic[] = [
  {
    id: 'topic_js',
    directionId: 'dir_frontend',
    slug: 'javascript',
    name: 'JavaScript',
    description: 'Базовые и продвинутые концепции языка',
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'topic_react',
    directionId: 'dir_frontend',
    slug: 'react',
    name: 'React',
    description: 'Хуки, рендеринг, оптимизация',
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'topic_nodejs',
    directionId: 'dir_backend',
    slug: 'nodejs',
    name: 'Node.js',
    description: 'Event loop, модули, асинхронность',
    createdAt: NOW,
    updatedAt: NOW,
  },
];

export const mockQuestions: Question[] = [
  {
    id: 'q_js_1',
    topicId: 'topic_js',
    question: 'Что такое замыкание (closure) в JavaScript?',
    answer:
      'Замыкание — это функция вместе с её лексическим окружением. Внутренняя функция имеет доступ к переменным внешней функции даже после того, как внешняя функция завершила выполнение. Замыкания широко используются для создания приватных переменных и в паттернах вроде каррирования.',
    order: 1,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_js_2',
    topicId: 'topic_js',
    question: 'Чем отличаются `let`, `const` и `var`?',
    answer:
      '`var` имеет функциональную область видимости и поднимается (hoisting) с инициализацией undefined. `let` и `const` имеют блочную область видимости и находятся в temporal dead zone до момента объявления. `const` запрещает переприсваивание ссылки, но не мутацию объекта.',
    order: 2,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_js_3',
    topicId: 'topic_js',
    question: 'Что такое event loop?',
    answer:
      'Event loop — это механизм, который позволяет JavaScript выполнять асинхронные операции, оставаясь однопоточным. Он управляет стеком вызовов, очередью микротасков (Promise.then) и очередью макротасков (setTimeout, события). Микротаски имеют приоритет над макротасками.',
    order: 3,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_js_4',
    topicId: 'topic_js',
    question: 'Что такое `this` и как он определяется?',
    answer:
      '`this` — это контекст вызова функции. В обычных функциях он определяется в момент вызова: при вызове через точку — это объект слева, при new — новый объект, иначе — undefined в strict mode или globalThis. Стрелочные функции не имеют своего `this` и наследуют его из окружающего лексического контекста.',
    order: 4,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_js_5',
    topicId: 'topic_js',
    question: 'Что такое prototype chain?',
    answer:
      'Цепочка прототипов — это механизм наследования в JavaScript. Каждый объект имеет ссылку на свой прототип через [[Prototype]] (доступную через __proto__ или Object.getPrototypeOf). При обращении к свойству JS ищет его сначала в самом объекте, затем по цепочке прототипов вверх до null.',
    order: 5,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_react_1',
    topicId: 'topic_react',
    question: 'В чём разница между `useEffect` и `useLayoutEffect`?',
    answer:
      '`useEffect` выполняется асинхронно после того, как браузер отрисовал изменения — он не блокирует визуальное обновление. `useLayoutEffect` выполняется синхронно после DOM-мутаций, но до отрисовки — он блокирует браузер. Используй useLayoutEffect только когда нужно измерить DOM и сразу обновить состояние, чтобы избежать "мигания".',
    order: 1,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_react_2',
    topicId: 'topic_react',
    question: 'Что такое reconciliation?',
    answer:
      'Reconciliation — это процесс сравнения нового виртуального DOM-дерева со старым и определения минимального набора изменений для обновления реального DOM. React использует эвристический алгоритм O(n) на основе ключей (key) и типа компонента, вместо общего алгоритма diff деревьев O(n³).',
    order: 2,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_react_3',
    topicId: 'topic_react',
    question: 'Зачем нужен `key` в списках?',
    answer:
      '`key` помогает React идентифицировать элементы в списке между рендерами. Это позволяет правильно сохранять состояние компонентов, эффективно переиспользовать DOM-узлы и избегать ошибок при изменении порядка элементов. Использовать индекс массива в качестве key — плохая практика, если список может меняться.',
    order: 3,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_node_1',
    topicId: 'topic_nodejs',
    question: 'Что такое event loop в Node.js?',
    answer:
      'Event loop в Node.js — механизм асинхронной обработки на базе libuv. Он состоит из нескольких фаз: timers (setTimeout/setInterval), pending callbacks, idle/prepare, poll (I/O), check (setImmediate), close callbacks. Между фазами выполняется очередь микротасков (Promise.then, queueMicrotask) и process.nextTick.',
    order: 1,
    createdAt: NOW,
    updatedAt: NOW,
  },
];
