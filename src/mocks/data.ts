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
    id: 'dir_computer_science',
    areaId: 'area_it',
    slug: 'computer_science',
    name: 'Computer Science',
    description: 'База знаний Computer Science',
    createdAt: NOW,
    updatedAt: NOW,
  },
];

export const mockTopics: Topic[] = [
  {
    id: 'topic_js_language_runtime',
    directionId: 'dir_frontend',
    slug: 'language-runtime',
    name: 'JavaScript: Язык и среда исполнения',
    description: '',
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'topic_js_types',
    directionId: 'dir_frontend',
    slug: 'types-values',
    name: 'JavaScript: Типы данных и значения',
    description: '',
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'topic_js_numbers',
    directionId: 'dir_frontend',
    slug: 'numbers-math',
    name: 'JavaScript: Числа, точность и Math',
    description: '',
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'topic_js_strings',
    directionId: 'dir_frontend',
    slug: 'strings',
    name: 'JavaScript: Строки',
    description: '',
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'topic_js_regexp',
    directionId: 'dir_frontend',
    slug: 'regexp',
    name: 'JavaScript: Регулярные выражения',
    description: '',
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'topic_js_symbol',
    directionId: 'dir_frontend',
    slug: 'symbol',
    name: 'JavaScript: Symbol',
    description: '',
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'topic_js_coercion',
    directionId: 'dir_frontend',
    slug: 'type-coercion',
    name: 'JavaScript: Преобразование типов',
    description: '',
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'topic_js_operators',
    directionId: 'dir_frontend',
    slug: 'operators',
    name: 'JavaScript: Операторы',
    description: '',
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'topic_js_scope',
    directionId: 'dir_frontend',
    slug: 'variables-scope-hoisting',
    name: 'JavaScript: Переменные, область видимости, hoisting',
    description: '',
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'topic_js_control_flow',
    directionId: 'dir_frontend',
    slug: 'control-flow',
    name: 'JavaScript: Управляющие конструкции',
    description: '',
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'topic_js_errors',
    directionId: 'dir_frontend',
    slug: 'error-handling',
    name: 'JavaScript: Обработка ошибок',
    description: '',
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'topic_js_error_types',
    directionId: 'dir_frontend',
    slug: 'error-types',
    name: 'JavaScript: Ошибки — встроенные типы',
    description: '',
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'topic_js_functions',
    directionId: 'dir_frontend',
    slug: 'functions',
    name: 'JavaScript: Функции',
    description: '',
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'topic_js_this',
    directionId: 'dir_frontend',
    slug: 'this-context',
    name: 'JavaScript: this, контекст, call/apply/bind',
    description: '',
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'topic_js_closures',
    directionId: 'dir_frontend',
    slug: 'closures-iife',
    name: 'JavaScript: Замыкания и IIFE',
    description: '',
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'topic_js_objects',
    directionId: 'dir_frontend',
    slug: 'objects',
    name: 'JavaScript: Объекты',
    description: '',
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'topic_js_prototypes',
    directionId: 'dir_frontend',
    slug: 'prototypes',
    name: 'JavaScript: Прототипы и прототипное наследование',
    description: '',
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'topic_js_classes',
    directionId: 'dir_frontend',
    slug: 'classes',
    name: 'JavaScript: Классы',
    description: '',
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'topic_js_collections',
    directionId: 'dir_frontend',
    slug: 'collections',
    name: 'JavaScript: Коллекции — Set, Map, WeakMap, WeakSet',
    description: '',
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'topic_js_arrays',
    directionId: 'dir_frontend',
    slug: 'arrays',
    name: 'JavaScript: Массивы',
    description: '',
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'topic_js_async',
    directionId: 'dir_frontend',
    slug: 'async',
    name: 'JavaScript: Асинхронность',
    description: '',
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'topic_js_builtins',
    directionId: 'dir_frontend',
    slug: 'builtins-utils',
    name: 'JavaScript: Встроенные объекты и утилиты',
    description: '',
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'topic_browser_env',
    directionId: 'dir_frontend',
    slug: 'env',
    name: 'Браузерный JavaScript: Среда браузера',
    description: '',
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'topic_browser_loading',
    directionId: 'dir_frontend',
    slug: 'loading',
    name: 'Браузерный JavaScript: Загрузка страницы и скриптов',
    description: '',
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'topic_browser_dom',
    directionId: 'dir_frontend',
    slug: 'dom',
    name: 'Браузерный JavaScript: Работа с DOM',
    description: '',
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'topic_browser_geometry',
    directionId: 'dir_frontend',
    slug: 'geometry',
    name: 'Браузерный JavaScript: Рендеринг, координаты, размеры',
    description: '',
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'topic_browser_events',
    directionId: 'dir_frontend',
    slug: 'events',
    name: 'Браузерный JavaScript: События',
    description: '',
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'topic_browser_network',
    directionId: 'dir_frontend',
    slug: 'network',
    name: 'Браузерный JavaScript: Сеть и HTTP',
    description: '',
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'topic_browser_storage',
    directionId: 'dir_frontend',
    slug: 'storage',
    name: 'Браузерный JavaScript: Хранение данных',
    description: '',
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'topic_browser_api',
    directionId: 'dir_frontend',
    slug: 'api',
    name: 'Браузерный JavaScript: Браузерные API и компоненты',
    description: '',
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'topic_algorithms',
    directionId: 'dir_computer_science',
    slug: 'algorithms',
    name: 'Алгоритмы',
    description: '',
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'topic_css_fundamentals',
    directionId: 'dir_frontend',
    slug: 'css_fundamentals',
    name: 'CSS: Основы',
    description: '',
    createdAt: NOW,
    updatedAt: NOW,
  },
];

export const mockQuestions: Question[] = [
  // JavaScript: Язык и среда исполнения (slug: language-runtime, topicId: topic_js_language_runtime) — 6 вопрос(ов)
  {
    id: 'q_language_runtime_001',
    topicId: 'topic_js_language_runtime',
    question: 'Javascript какой язык?',
    answer:
      '<ol><li>Высокоуровневый - Высокий уровень абстракции, благодаря удобным конструкциям: массивы, объекты и тд. Управление памятью осуществляется автоматически с помощью сборщика мусора</li><li>Интерпретируемый - Код не компилируется заранее в машинный код, а исполняется движком во время выполнения. Современные движки (например V8) применяют JIT-компиляцию: горячие участки кода компилируются в машинный код «на лету» для ускорения</li><li>Динамически типизированный - Переменные могут быть любого типа и в ходе выполнения тип переменной может меняться (строго говоря, тип имеют сами значения, а переменная лишь хранит ссылку на значение любого типа)</li><li>Слабо типизированный (нетипобезопасный, с неявным приведением типов) - JS позволяет выполнять автоматическое приведение типов</li><li>Однопоточный - Основной поток выполняет только одну операцию в каждый момент времени, остальные действия блокируются до её завершения. При этом среда (браузер, Node.js) позволяет выносить вычисления в отдельные потоки через Web Workers</li><li>Прототипно-ориентированный - Наследование реализовано через прототипы: объекты наследуют свойства и методы напрямую от других объектов, а не от классов. Классы в JS - это синтаксический сахар над прототипами</li><li>Встраиваемый - Может быть встроен в различные среды (браузеры, Node.js и тд) и его поведение и доступные API зависят от окружения в котором он работает</li><li>Мультипарадигменный - Поддерживает несколько парадигм: императивное программирование, ООП, функциональное программирование, событийно-ориентированное программирование, асинхронное программирование</li></ol>',
    order: 1,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_language_runtime_002',
    topicId: 'topic_js_language_runtime',
    question: 'Что такое сборка мусора?',
    answer:
      '<p>Это процесс автоматического освобождения памяти. Если объект становится недостижимым, то есть до него больше нельзя добраться, движок JavaScript автоматически удаляет его и освобождает занятую им память.</p><p>Достижимость определяется относительно корней (roots) - это значения, которые заведомо доступны: глобальный объект, переменные и параметры выполняющихся в данный момент функций и т.д. Объект считается достижимым, если до него можно добраться от корня по цепочке ссылок.</p><p>Основной алгоритм сборки мусора - mark-and-sweep (пометить и убрать):</p><ol><li>Сборщик берёт корни и помечает (запоминает) их</li><li>Затем переходит по всем ссылкам от них и помечает все достижимые объекты</li><li>Так продолжается, пока есть непосещённые ссылки</li><li>Все непомеченные объекты считаются недостижимыми и удаляются</li></ol><p>Благодаря такому подходу корректно очищаются даже объекты с циклическими ссылками друг на друга: если на них нельзя попасть от корней, они будут удалены. Альтернативная стратегия - подсчёт ссылок (reference counting), если на объект 0 ссылок, то он удаляется, такая стратегия на циклах не сработала бы (2 недостижимых от корней объекта ссылаются друг на друга), поэтому в современных движках она не используется как основная.</p><p>В реальных движках алгоритм сильно оптимизирован. В V8 сборка поколенческая (generational): куча делится на молодое и старое поколение по «гипотезе о поколениях» (большинство объектов живут недолго).</p><ul><li>Молодое поколение собирается часто и быстро копирующим алгоритмом Scavenge (алгоритм Чейни): живые объекты копируются в другую половину пространства, остальное считается мусором</li><li>Старое поколение (пережившие несколько сборок объекты) собирается реже алгоритмом Mark-Sweep-Compact, с компактизацией для борьбы с фрагментацией памяти</li></ul><p>Чтобы не блокировать основной поток надолго, сборка выполняется инкрементально (по частям), а часть работы вынесена в параллельные и фоновые потоки (в V8 этот набор оптимизаций называется Orinoco).</p>',
    order: 2,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_language_runtime_003',
    topicId: 'topic_js_language_runtime',
    question: 'Что такое глобальный объект?',
    answer:
      '<p>Это объект, который предоставляет переменные и функции, доступные в любом месте программы. В браузере новый глобальный объект создаётся каждый раз при загрузке новой страницы.</p><p>Имя глобального объекта зависит от окружения:</p><ul><li>в браузере - window</li><li>в Node.js - global</li><li>в Web Workers - self (объекта window там нет)</li></ul><p>Поскольку имя различается, раньше для доступа к глобальному объекту приходилось писать код по-разному под каждую среду. В ES2020 появилась универсальная ссылка globalThis, которая указывает на глобальный объект в любом окружении - это рекомендуемый способ.</p><p>Глобальные переменные и функции, объявленные с помощью var и function declaration, становятся свойствами глобального объекта, но только в обычных скриптах. В ES-модулях (type="module", модули Node) это не работает: их переменные верхнего уровня не попадают в глобальный объект. Переменные let и const свойствами глобального объекта не становятся ни в одном из режимов.</p>',
    order: 3,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_language_runtime_004',
    topicId: 'topic_js_language_runtime',
    question: 'Что такое ECMAScript? Чем отличается от JavaScript?',
    answer:
      '<p>ECMAScript - это стандарт (спецификация), описывающий синтаксис и поведение языка. JavaScript - это конкретная реализация этого стандарта. То есть ECMAScript определяет «как должен работать язык», а JavaScript - это сам язык, следующий этим правилам. Другие реализации того же стандарта - например ActionScript.</p><p>Стандарт называется ECMA-262 и разрабатывается комитетом TC39 при организации Ecma International. Предложения по новым возможностям (proposals) проходят 5 стадий зрелости - от Stage 0 (идея) до Stage 4 (готово к включению в стандарт). Каждый год выходит новая редакция стандарта.</p><p>Важно различать сам язык (ECMAScript) и среду выполнения. В спецификацию ECMAScript входят только базовые конструкции: синтаксис, типы, операторы, встроенные объекты (Object, Array, Math, JSON, Promise и т.д.). А такие API как DOM, fetch, setTimeout, console - это НЕ часть ECMAScript, их предоставляет окружение (браузер, Node.js).</p><p>История версий:</p><ul><li>ES1 (1997) - первая редакция</li><li>ES5 (2009) - strict mode, JSON, методы массивов (map, filter и др.), геттеры/сеттеры</li><li>ES6 / ES2015 - переломная версия: let/const, классы, стрелочные функции, промисы, модули, Map/Set, Symbol, деструктуризация, спред и многое другое</li><li>С 2015 года версии выходят ежегодно и называются по году: ES2016, ES2017 (async/await), ES2020 (optional chaining, globalThis, BigInt) и далее</li></ul>',
    order: 4,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_language_runtime_005',
    topicId: 'topic_js_language_runtime',
    question: 'Что такое строгий режим (strict mode)? Что он меняет?',
    answer:
      '<p>Строгий режим - это режим выполнения с более строгими правилами, введённый в ES5 для устранения исторических «опасных» особенностей языка. Включается директивой "use strict" в начале скрипта или в начале тела функции.</p><p>Что меняет строгий режим:</p><ul><li>Нельзя использовать необъявленные переменные - присваивание необъявленной переменной бросает ReferenceError (в нестрогом режиме создалась бы глобальная переменная)</li><li>this в обычном вызове функции равен undefined, а не глобальному объекту</li><li>Запрещено дублирование имён параметров функции</li><li>Присваивание неперезаписываемым свойствам, свойствам только для чтения и т.п. бросает ошибку, а не молча игнорируется</li><li>Запрещён оператор with</li><li>Переменные, объявленные через eval, не «утекают» в окружающую область видимости</li><li>Имена eval и arguments нельзя использовать как идентификаторы переменных</li><li>Запрещён восьмеричный синтаксис вида 010</li></ul><p>Важная деталь: в ES-модулях и внутри тела класса строгий режим включён всегда автоматически, директива не нужна. Поскольку современный код в основном модульный, strict mode де-факто стал режимом по умолчанию.</p><p>Строгий режим работает на уровне всего скрипта или отдельной функции и не может быть отменён внутри своей области действия.</p>',
    order: 5,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_language_runtime_006',
    topicId: 'topic_js_language_runtime',
    question: 'Что такое утечки памяти (memory leaks) в JS? Типичные причины?',
    answer:
      '<p>Утечка памяти - это ситуация, когда объекты, которые программе уже не нужны, остаются достижимыми от корней, и поэтому сборщик мусора не может их удалить. Память постепенно растёт, что приводит к деградации производительности или падению приложения.</p><p>Типичные причины:</p><ul><li>Забытые таймеры и интервалы - setInterval, который не очищается через clearInterval, продолжает удерживать через замыкание ссылки на используемые переменные</li><li>Необработанные подписки на события - addEventListener без последующего removeEventListener: обработчик удерживает связанные данные, даже если элемент уже не нужен</li><li>Замыкания - функция, которая дольше нужного удерживает ссылку на большой объект из внешней области видимости</li><li>Ссылки из глобальных или долгоживущих структур - случайно добавленный объект в глобальный массив/Map/кэш, который никогда не чистится</li><li>Отсоединённые DOM-узлы (detached DOM) - элемент удалён из дерева, но на него ещё есть ссылка из JS, поэтому он не собирается вместе со всем поддеревом</li></ul><p>Инструменты для борьбы:</p><ul><li>WeakMap и WeakSet - хранят объекты «слабо»: такие ссылки не препятствуют сборке мусора, ключ автоматически удаляется, когда объект становится недостижим иными путями</li><li>WeakRef - слабая ссылка на отдельный объект</li><li>FinalizationRegistry - позволяет зарегистрировать колбэк, вызываемый после сборки объекта (использовать с осторожностью, момент вызова не гарантирован)</li><li>Профилирование через вкладку Memory в DevTools: снимки кучи (heap snapshots) и сравнение для поиска растущих объектов</li></ul>',
    order: 6,
    createdAt: NOW,
    updatedAt: NOW,
  },

  // JavaScript: Типы данных и значения (slug: types-values, topicId: topic_js_types) — 19 вопрос(ов)
  {
    id: 'q_types_values_001',
    topicId: 'topic_js_types',
    question: 'Типы данных в JavaScript?',
    answer:
      '<p>Все типы делятся на две категории: примитивные типы и объект (ссылочный тип). Спецификация ECMAScript определяет ровно 8 языковых типов.</p><p>7 примитивных типов:</p><ul><li>число (number) - 64-битное число с плавающей точкой по стандарту IEEE 754 (double). Один и тот же тип хранит и целые, и дробные числа, а также особые значения Infinity, -Infinity и NaN</li><li>строка (string)</li><li>булево значение (boolean) - true или false</li><li>null - указывает на намеренное отсутствие значения</li><li>undefined - значение не присвоено</li><li>symbol - уникальный идентификатор</li><li>bigint - целые числа произвольной длины</li></ul><p>8-й тип - объект (object): всё, что не примитив. Сюда входят обычные объекты, массивы, функции, Date, RegExp, Map, Set и т.д.</p><p>Ключевые отличия категорий: примитивы иммутабельны (неизменяемы) и копируются по значению; объекты изменяемы и копируются/передаются по ссылке.</p><p>Тип значения определяется оператором typeof, и здесь есть два важных подвоха:</p><ul><li>typeof null возвращает "object" - это историческая ошибка ещё первой реализации языка, которую не стали исправлять ради обратной совместимости. null - это примитив, а не объект</li><li>typeof function возвращает "function" - хотя функция не является отдельным языковым типом. Это вызываемый объект (callable object), а "function" typeof выдаёт как удобный частный случай</li></ul><p>Для всех остальных значений typeof возвращает ожидаемое: "number", "string", "boolean", "undefined", "symbol", "bigint", а для прочих объектов - "object".</p>',
    order: 1,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_types_values_002',
    topicId: 'topic_js_types',
    question: 'Что такое Infinity?',
    answer:
      '<p>Это специальное числовое значение, представляющее математическую бесконечность. Относится к типу number (typeof Infinity === "number"). Существует положительная Infinity и отрицательная -Infinity. Infinity больше любого конечного числа, -Infinity - меньше любого конечного.</p><p>Это свойство глобального объекта; также доступно как Number.POSITIVE_INFINITY и Number.NEGATIVE_INFINITY.</p><p>Способы получить:</p><ul><li>Деление на ноль: 1 / 0 даёт Infinity, -1 / 0 даёт -Infinity</li><li>Переполнение - когда результат вычисления превышает максимальное представимое число Number.MAX_VALUE (около 1.8e308): например 1e308 * 10 даёт Infinity</li><li>Явно или через математические операции и функции</li></ul><p>Арифметика с бесконечностью даёт неочевидные результаты, в том числе NaN:</p><ul><li>Infinity + 1 === Infinity, Infinity + Infinity === Infinity</li><li>Infinity - Infinity === NaN</li><li>Infinity * 0 === NaN</li><li>1 / Infinity === 0</li><li>Infinity / Infinity === NaN</li></ul><p>Проверить, что число конечно (не Infinity, -Infinity и не NaN), можно через Number.isFinite(). Практический нюанс сериализации: JSON.stringify(Infinity) возвращает "null", так как JSON не поддерживает бесконечность.</p>',
    order: 2,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_types_values_003',
    topicId: 'topic_js_types',
    question: 'Что такое NaN? Когда получаем?',
    answer:
      '<p>NaN (Not a Number) - специальное числовое значение, означающее результат некорректной или неопределённой математической операции. Парадоксально, но typeof NaN === "number": NaN относится к типу number и является частью стандарта IEEE 754 для чисел с плавающей точкой.</p><p>Получаем NaN при:</p><ul><li>Неопределённых математических выражениях: 0 / 0, Infinity / Infinity, Infinity - Infinity, Infinity * 0</li><li>Взятии квадратного корня из отрицательного числа: Math.sqrt(-1)</li><li>Арифметических операциях с операндами, которые не приводятся к числу: "abc" * 2, undefined + 1</li><li>Неудачном парсинге: parseInt("abc"), Number("12px")</li></ul><p>Ключевое свойство: NaN не равно никакому значению, включая самого себя - NaN === NaN возвращает false. Причина в том, что NaN представляет не конкретное число, а целый класс «невычислимых» результатов, и два разных таких результата не обязаны быть равны.</p><p>Из этого следует, что проверять на NaN обычным сравнением нельзя. Корректные способы:</p><ul><li>Number.isNaN(x) - надёжная проверка, возвращает true только для самого NaN</li><li>Object.is(x, NaN) - тоже корректно</li><li>Глобальная функция isNaN(x) - работает иначе: сначала приводит аргумент к числу, поэтому isNaN("abc") возвращает true, хотя строка - это не NaN. Из-за этого глобальную isNaN обычно избегают в пользу Number.isNaN</li></ul><p>Ещё одно следствие неравенства самому себе - разное поведение методов поиска: [NaN].includes(NaN) возвращает true (использует алгоритм SameValueZero), а [NaN].indexOf(NaN) возвращает -1 (использует строгое равенство ===).</p><p>NaN «заразителен»: любая арифметическая операция с участием NaN в результате тоже даёт NaN.</p>',
    order: 3,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_types_values_004',
    topicId: 'topic_js_types',
    question: 'Что такое BigInt? Как записываются? Особенности',
    answer:
      '<p>BigInt - это примитивный тип (typeof 10n === "bigint") для работы с целыми числами произвольной длины. Появился в ES2020. Нужен для точных вычислений с целыми числами за пределами безопасного диапазона number (Number.MAX_SAFE_INTEGER = 2^53 - 1), где обычные числа теряют точность.</p><p>Создание:</p><ul><li>Литерал с суффиксом n в конце: 10n. Поддерживаются разные основания: 0xFFn (hex), 0b1010n (binary), 0o17n (octal)</li><li>Функция BigInt(value) - принимает число, строку и др. Вызывается без new. BigInt("123"), BigInt(123). Передача дробного числа бросает ошибку: BigInt(1.5) - RangeError</li></ul><p>Особенности и подводные камни:</p><ul><li>Нельзя смешивать BigInt и number в арифметических операциях: 1n + 1 бросает TypeError. Нужно явно приводить: 1n + BigInt(1) или Number(1n) + 1. Это сделано намеренно, чтобы не было неявной потери точности</li><li>А вот в сравнениях смешивать можно: 1n == 1 это true (нестрогое равенство с приведением), 1n < 2 это true, 2n > 1 это true. Но строгое равенство учитывает тип: 1n === 1 это false, потому что типы разные (bigint и number)</li><li>Деление округляется к нулю (отбрасывает дробную часть), так как BigInt всегда целый: 5n / 2n === 2n, -5n / 2n === -2n</li><li>Унарный плюс к BigInt запрещён: +1n бросает TypeError. Причина историческая - в asm.js оператор +x означает приведение к number, и это поведение решили сохранить</li><li>Объект Math не работает с BigInt: Math.max(1n, 2n) бросает TypeError</li><li>Логическое преобразование: 0n - ложное значение (falsy), любой ненулевой BigInt - истинное. Boolean(0n) === false</li><li>BigInt не сериализуется в JSON: JSON.stringify(10n) бросает TypeError. Нужно конвертировать вручную, например в строку</li></ul><p>BigInt работает медленнее обычных number, поэтому его стоит применять только там, где действительно нужны большие целые (например работа с id из БД, точные финансовые расчёты, криптография).</p>',
    order: 4,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_types_values_005',
    topicId: 'topic_js_types',
    question: 'Что такое булевое значение? Какие значения будут преобразованы в true и false?',
    answer:
      '<p>Булево значение (boolean) - примитивный тип с двумя значениями: true и false. В булевом контексте (условия if, логические операторы, тернарный оператор) любое значение неявно приводится к boolean. Значения, приводящиеся к true, называют truthy (истинные), к false - falsy (ложные).</p><p>Falsy-значений ровно 8, всё остальное - truthy. Полный список falsy:</p><ul><li>false</li><li>0</li><li>-0</li><li>0n (ноль типа BigInt)</li><li>"" (пустая строка)</li><li>null</li><li>undefined</li><li>NaN</li></ul><p>Отдельный курьёз: document.all - единственный объект, который ведёт себя как falsy. Это намеренная аномалия спецификации, оставленная ради совместимости со старым кодом, который проверял браузер через if (document.all).</p><p>Всё, что не входит в список falsy, является truthy. На этом часто попадаются - вот коварные truthy-значения:</p><ul><li>"0" - строка с нулём (непустая строка всегда truthy)</li><li>"false" - строка со словом false</li><li>" " - строка из одного пробела</li><li>[] - пустой массив</li><li>{} - пустой объект</li><li>function(){} - любая функция</li><li>Infinity и -Infinity</li></ul><p>Привести значение к boolean явно можно через Boolean(x) или двойное отрицание !!x.</p><p>Важный нюанс: булево приведение в условии - это НЕ то же самое, что нестрогое сравнение == true. Алгоритмы разные. Например if ([]) выполнится, потому что пустой массив truthy, но [] == true возвращает false, так как при == массив приводится к числу, а не к boolean. Поэтому сравнивать с true/false через == не следует - нужно полагаться на прямое булево приведение.</p>',
    order: 5,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_types_values_006',
    topicId: 'topic_js_types',
    question: 'Что такое null и undefined?',
    answer:
      '<p>Это два примитивных типа, каждый со своим единственным значением, оба означают «отсутствие значения». typeof undefined возвращает "undefined", а typeof null возвращает "object" - это историческая ошибка первой реализации языка, оставленная ради обратной совместимости (null - примитив, а не объект).</p><p>Смысловое различие в том, кто присваивает значение:</p><ul><li>undefined - отсутствие на уровне системы: значение, которое движок выставляет сам, когда «значения ещё/вообще нет»</li><li>null - намеренное отсутствие на уровне программиста: его осознанно присваивают, чтобы сказать «здесь пусто»</li></ul><p>undefined появляется автоматически в случаях:</p><ul><li>объявленная, но не инициализированная переменная (let x;)</li><li>отсутствующий аргумент функции</li><li>обращение к несуществующему свойству объекта</li><li>функция без return (или с пустым return)</li><li>результат оператора void</li></ul><p>Нюансы равенства (частые подвохи):</p><ul><li>null == undefined возвращает true (нестрогое равенство), но null === undefined возвращает false (строгое - типы разные)</li><li>null и undefined нестрого равны только друг другу и самим себе, и больше ничему - даже нулю: null == 0 это false, undefined == 0 это false</li></ul><p>Нюансы приведения к числу (важная асимметрия):</p><ul><li>Number(null) === 0</li><li>Number(undefined) - это NaN</li><li>Из-за этого null >= 0 возвращает true (здесь работает числовое приведение, null становится 0), но null == 0 возвращает false (для == действует отдельный алгоритм без приведения null к числу). Это классический парадокс</li></ul><p>Другие отличия в поведении:</p><ul><li>Параметры по умолчанию срабатывают только на undefined, но не на null: при передаче null значение по умолчанию НЕ подставляется</li><li>Операторы ?? (нулевое слияние) и ?. (опциональная цепочка) считают «пустыми» (nullish) оба значения - и null, и undefined</li><li>JSON.stringify выбрасывает свойства со значением undefined, но сохраняет null</li></ul><p>Технические детали: undefined - это свойство глобального объекта, исторически перезаписываемое, но с ES5 доступное только для чтения (его всё ещё можно перекрыть в локальной области как имя переменной). null - это литерал (ключевое слово), его переприсвоить нельзя. Надёжно получить undefined можно через void 0.</p>',
    order: 6,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_types_values_007',
    topicId: 'topic_js_types',
    question: 'Что будет если разделить на 0?',
    answer:
      '<p>При делении ненулевого числа на ноль получается Infinity или -Infinity (а не ошибка) - это поведение определено стандартом IEEE 754. Знак результата зависит от знаков делимого и нуля:</p><ul><li>1 / 0 === Infinity</li><li>-1 / 0 === -Infinity</li><li>1 / -0 === -Infinity (знак нуля учитывается)</li></ul><p>Отдельный случай - 0 / 0 даёт NaN, а не Infinity.</p><p>Важное отличие для BigInt: у него нет значения Infinity, поэтому 1n / 0n не возвращает бесконечность, а бросает RangeError: Division by zero.</p>',
    order: 7,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_types_values_008',
    topicId: 'topic_js_types',
    question: 'Что будет если разделить 0 на 0?',
    answer:
      '<p>Получится NaN. В отличие от деления ненулевого числа на ноль (которое даёт Infinity), выражение 0 / 0 математически неопределено (indeterminate form) - у него нет единственного осмысленного результата, поэтому стандарт IEEE 754 предписывает вернуть NaN.</p><p>0 / 0 - представитель класса неопределённых форм, которые все дают NaN: Infinity / Infinity, Infinity - Infinity, Infinity * 0 и т.п.</p><p>Для BigInt поведение другое: 0n / 0n не возвращает NaN, а бросает RangeError: Division by zero, поскольку у BigInt вообще нет ни Infinity, ни NaN.</p>',
    order: 8,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_types_values_009',
    topicId: 'topic_js_types',
    question: 'Что такое обёртки примитивов и автоупаковка (autoboxing)?',
    answer:
      '<p>Примитивы не являются объектами и сами по себе не имеют свойств и методов. Но обращение вроде "abc".length или (5).toFixed(2) работает. Это происходит за счёт автоупаковки (autoboxing): когда мы обращаемся к свойству или методу примитива, движок временно создаёт соответствующий объект-обёртку (wrapper), вызывает на нём нужный метод, возвращает результат и тут же удаляет обёртку.</p><p>Каждому «объектному» примитиву соответствует обёртка: String, Number, Boolean, Symbol, BigInt. У null и undefined обёрток нет, поэтому обращение к их свойствам бросает TypeError.</p><p>Важное следствие временности обёртки - примитиву нельзя добавить свойство: "abc".foo = 1 в нестрогом режиме молча не сработает (обёртка создаётся и тут же выбрасывается вместе с присвоенным свойством), в строгом - бросит ошибку.</p><p>Функции String/Number/Boolean можно вызывать двумя способами, и это принципиально разные вещи:</p><ul><li>Без new - как функция приведения типа. Возвращает примитив: Number("5") даёт примитив 5, typeof - "number". Это нормальный и рекомендуемый способ преобразования</li><li>С new - создаёт объект-обёртку. typeof new Number(5) - это "object", а не "number". Это антипаттерн</li></ul><p>Почему new-обёртки опасны:</p><ul><li>new Number(5) === 5 это false (объект против примитива)</li><li>new Boolean(false) - это объект, а значит truthy: if (new Boolean(false)) выполнится, хотя интуитивно ждёшь обратного. Классический баг</li></ul><p>Symbol и BigInt как обёртки через new вызывать вообще нельзя - new Symbol() и new BigInt() бросают TypeError.</p>',
    order: 9,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_types_values_010',
    topicId: 'topic_js_types',
    question: 'Что такое -0 (отрицательный ноль)?',
    answer:
      '<p>В стандарте IEEE 754 ноль знаковый: существуют отдельно +0 и -0. В JS это разные значения на уровне битов, хотя в большинстве операций они ведут себя одинаково.</p><p>Где они равны:</p><ul><li>+0 === -0 возвращает true (строгое равенство их не различает)</li><li>-0 == 0 тоже true</li><li>String(-0) даёт "0" - знак при приведении к строке теряется. И (-0).toString() === "0"</li><li>JSON.stringify(-0) даёт "0"</li></ul><p>Где они различаются:</p><ul><li>Object.is(-0, 0) возвращает false - это основной способ отличить -0 от +0</li><li>Деление: 1 / -0 даёт -Infinity, а 1 / +0 даёт Infinity. Это второй надёжный способ детекции -0</li></ul><p>Как получить -0: литералом -0, либо операциями -1 * 0, 0 * -1, -0.0. Также его может вернуть, например, Math.round(-0.1) или Math.ceil(-0.5).</p><p>Нюанс с поиском в массивах: includes использует алгоритм SameValueZero, который НЕ различает нули, поэтому [-0].includes(0) возвращает true. А Object.is (алгоритм SameValue) различает. indexOf использует строгое равенство и тоже находит: [-0].indexOf(0) возвращает 0.</p><p>На практике различие -0 и +0 важно редко - в основном в математических и графических расчётах, где знак нуля несёт смысл направления. Но как edge case и подвох на собеседовании встречается часто.</p>',
    order: 10,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_types_values_011',
    topicId: 'topic_js_types',
    question: 'Чем отличается передача примитивов и объектов (по значению vs по ссылке)?',
    answer:
      '<p>Примитивы хранятся и копируются по значению, объекты - по ссылке. Это влияет на присваивание, передачу в функции и сравнение.</p><p>Примитивы (по значению):</p><ul><li>При присваивании копируется само значение, копии независимы: let a = 5; let b = a; b = 10 - a остаётся 5</li><li>Сравниваются по значению: 5 === 5 это true, "ab" === "ab" это true</li></ul><p>Объекты (по ссылке):</p><ul><li>Переменная хранит не сам объект, а ссылку на него. При присваивании копируется ссылка, а объект остаётся один: let a = {}; let b = a; b.x = 1 - теперь и a.x === 1, потому что a и b указывают на один объект</li><li>Сравниваются по ссылке (по идентичности), а не по содержимому: {} === {} это false, [] === [] это false. Два объекта равны строго только если это буквально один и тот же объект в памяти</li></ul><p>Передача в функцию. Технически JS всегда передаёт аргументы по значению, но для объектов «значение» - это и есть ссылка (такую модель называют call by sharing):</p><ul><li>Переприсваивание параметра внутри функции не влияет на внешнюю переменную - и для примитивов, и для объектов (function f(x){ x = 10 } - снаружи ничего не меняется)</li><li>Но мутация объекта через параметр видна снаружи, потому что это тот же объект: function f(obj){ obj.x = 1 } - изменит исходный объект</li></ul><p>Связанный нюанс с const: const запрещает переприсваивать переменную, но не запрещает мутировать объект, на который она ссылается. Можно менять свойства, нельзя заменить сам объект.</p>',
    order: 11,
    createdAt: NOW,
    updatedAt: NOW,
  },

  // JavaScript: Числа, точность и Math (slug: numbers-math, topicId: topic_js_numbers) — 4 вопрос(ов)
  {
    id: 'q_numbers_math_001',
    topicId: 'topic_js_numbers',
    question: 'Как устроен тип number в JavaScript?',
    answer:
      '<p>В JS есть единственный тип для всех чисел - number, и он представлен 64-битным числом с плавающей точкой двойной точности по стандарту IEEE 754 (double). Отдельного целочисленного типа нет: и 5, и 5.0, и 0.1 - все они double.</p><p>Структура 64 бит: 1 бит знака, 11 бит экспоненты (порядок), 52 бита мантиссы (значащая часть). Из этого следуют все особенности чисел.</p><p>Следствия:</p><ul><li>Целые числа точно представимы только до 2^53 - 1 (Number.MAX_SAFE_INTEGER). <li>Максимальное конечное значение - около 1.8e308 (Number.MAX_VALUE), при превышении получается Infinity</li><li>Наименьшее положительное - Number.MIN_VALUE (около 5e-324)</li></ul><p>Особые значения типа number: Infinity, -Infinity и NaN - все они формально относятся к типу number.</p><p>Также есть нулей два: +0 и -0. Они равны через === и ==, но различаются в Object.is и дают разный результат в 1/+0 (Infinity) против 1/-0 (-Infinity).</p><p>Для целых чисел произвольной точности (больше 2^53) существует отдельный примитив BigInt - он не смешивается с number в арифметике без явного приведения.</p>',
    order: 1,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_numbers_math_002',
    topicId: 'topic_js_numbers',
    question: 'Какие есть методы у чисел (toFixed, toPrecision, toString)?',
    answer:
      '<p>Основные методы экземпляра number:</p><ul><li>toFixed(digits) - строка с фиксированным числом знаков после запятой. (1.5).toFixed(2) даёт "1.50". Часто для денег и вывода</li><li>toPrecision(n) - строка с заданным числом ЗНАЧАЩИХ цифр (не после запятой, а всего). (123.456).toPrecision(4) даёт "123.5"</li><li>toString(radix) - представление в другой системе счисления: (255).toString(16) даёт "ff", (5).toString(2) даёт "101"</li><li>toLocaleString() - форматирование с учётом локали (разделители разрядов, валюта): (1234.5).toLocaleString("ru") учтёт российский формат</li><li>valueOf() - возвращает примитивное значение (для объектов-обёрток Number)</li></ul><p>Главный подвох toFixed - округление работает не всегда «как в школе» из-за двоичного представления чисел:</p><ul><li>(1.005).toFixed(2) даёт "1.00", а не "1.01" - потому что 1.005 хранится как чуть меньшее значение</li><li>toFixed использует банковское/неоднозначное округление в граничных случаях и возвращает СТРОКУ, а не число</li><li>Для надёжного округлення применяют Math.round(x * 100) / 100 или специализированные библиотеки для денег</li></ul><p>Нюанс синтаксиса: вызов метода прямо на числовом литерале требует особой записи, потому что точка трактуется как десятичная: 255.toString() - синтаксическая ошибка. Нужно (255).toString(), или 255..toString(), или пробел 255 .toString().</p><p>Эти методы работают благодаря автоупаковке: примитив временно оборачивается в объект Number ради доступа к методам прототипа.</p>',
    order: 2,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_numbers_math_003',
    topicId: 'topic_js_numbers',
    question: 'Чем отличаются isNaN/Number.isNaN, parseInt/Number и подобные?',
    answer:
      '<p>Здесь есть несколько пар «глобальная функция против метода Number», и различия важны.</p><p>Проверка на NaN:</p><ul><li>Глобальная isNaN(x) - сначала ПРИВОДИТ аргумент к числу, потом проверяет. Поэтому isNaN("abc") даёт true (строка привелась к NaN), isNaN(undefined) - true. Это источник ложных срабатываний</li><li>Number.isNaN(x) (ES2015) - НЕ приводит, возвращает true только для настоящего NaN. Number.isNaN("abc") даёт false. Это надёжный способ</li></ul><p>Проверка на конечность:</p><ul><li>Глобальная isFinite(x) - тоже приводит к числу перед проверкой</li><li>Number.isFinite(x) - без приведения, true только для настоящих конечных чисел. Number.isFinite("5") даёт false</li></ul><p>Парсинг из строки:</p><ul><li>parseInt(str, radix) - читает строку посимвольно, пока идут допустимые цифры, и останавливается на первом недопустимом: parseInt("12px") даёт 12. ВАЖНО всегда указывать систему счисления вторым аргументом - parseInt("08", 10). parseFloat - аналогично, но понимает дробную часть</li><li>Number(str) - строгое приведение ВСЕЙ строки: Number("12px") даёт NaN, но Number("12") даёт 12. Не парсит «хвост»</li></ul><p>Когда что: parseInt/parseFloat - извлечь число из строки с «мусором» (например "12px"); Number - строго преобразовать чистую строку-число. Унарный плюс (+str) работает как Number.</p><p>Частый баг: ["1","2","3"].map(parseInt) даёт [1, NaN, NaN], потому что map передаёт индекс вторым аргументом, а parseInt принимает его как radix. Решение - map(Number).</p><p>Дополнительно: Number.isInteger(x) - целое ли число, Number.isSafeInteger(x) - целое в безопасном диапазоне (до 2^53).</p>',
    order: 3,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_numbers_math_004',
    topicId: 'topic_js_numbers',
    question: 'Что такое объект Math и какие у него методы?',
    answer:
      '<p>Math - встроенный объект-неймспейс со статическими методами и константами для математических операций. Это не конструктор: нельзя new Math, нет экземпляров - все члены вызываются прямо как Math.method().</p><p>Округление (важно различать четыре метода):</p><ul><li>Math.round(x) - к ближайшему целому (0.5 округляется ВВЕРХ: Math.round(2.5) = 3, но Math.round(-2.5) = -2, а не -3 - подвох с отрицательными)</li><li>Math.floor(x) - вниз (к меньшему): Math.floor(2.9) = 2, Math.floor(-2.1) = -3</li><li>Math.ceil(x) - вверх (к большему): Math.ceil(2.1) = 3</li><li>Math.trunc(x) - просто отбрасывает дробную часть без округления: Math.trunc(-2.9) = -2 (отличие от floor на отрицательных)</li></ul><p>Степени и корни: Math.pow(a, b) (или оператор **), Math.sqrt, Math.cbrt, Math.hypot.</p><p>Прочее: Math.abs (модуль), Math.sign (знак: -1/0/1), Math.min/Math.max (принимают список аргументов, для массива - Math.max(...arr)), Math.log/log2/log10/exp, тригонометрия (sin/cos/tan и др.).</p><p>Константы: Math.PI, Math.E, Math.SQRT2 и др.</p><p>Math.random() - псевдослучайное число в диапазоне [0, 1). Генерация целого в диапазоне [min, max]:</p><pre>Math.floor(Math.random() * (max - min + 1)) + min</pre><p>Важно: Math.random НЕ криптографически стойкий - для безопасности (токены, пароли) используют crypto.getRandomValues или crypto.randomUUID.</p><p>Нюанс Math.max/Math.min без аргументов: Math.max() даёт -Infinity, Math.min() даёт Infinity (нейтральные элементы), а с нечисловым аргументом, который не приводится к числу, - NaN.</p>',
    order: 4,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_numbers_math_005',
    topicId: 'topic_js_numbers',
    question: 'Проблема неточности вычислений в JS?',
    answer:
      '<p>В JS все числа (тип number) хранятся как 64-битные числа с плавающей точкой по стандарту IEEE 754 (double): 1 бит на знак, 11 бит на экспоненту, 52 бита на мантиссу. Из-за двоичного представления многие дробные числа невозможно сохранить точно.</p><p>Причина: в двоичной системе дробь представима точно, только если её знаменатель является степенью двойки. Числа вроде 0.1, 0.2, 0.3 в двоичной системе - бесконечные периодические дроби (как 1/3 в десятичной), поэтому движок хранит их округлённое приближение. Накопленная погрешность всплывает в вычислениях.</p><p>Канонический пример:</p><ul><li>0.1 + 0.2 === 0.3 возвращает false, потому что 0.1 + 0.2 даёт 0.30000000000000004</li><li>0.3 - 0.2 === 0.2 - 0.1 тоже false: левая часть даёт 0.09999999999999998, правая - 0.1</li></ul><p>Как корректно сравнивать дробные числа - проверять, что разница меньше очень малой величины Number.EPSILON (наименьшая разница между 1 и следующим представимым числом):<br>Math.abs(a - b) < Number.EPSILON</p><p>Способы избежать проблемы:</p><ul><li>Округление к нужной точности: (0.1 + 0.2).toFixed(2) или Math.round со множителем</li><li>Целочисленная арифметика - хранить и считать в наименьших единицах (например деньги в копейках), а делить только при выводе</li><li>Специальные библиотеки произвольной точности: decimal.js, big.js</li></ul><p>Важно: неточность касается не только дробей, но и больших целых чисел. Целые представимы точно лишь до Number.MAX_SAFE_INTEGER (2^53 - 1 = 9007199254740991). За этой границей точность теряется: 9007199254740992 + 1 === 9007199254740992 возвращает true. Для точной работы с большими целыми используют тип BigInt.</p>',
    order: 5,
    createdAt: NOW,
    updatedAt: NOW,
  },

  {
    id: 'q_numbers_math_006',
    topicId: 'topic_js_numbers',
    question: 'Как записываются числовые литералы? Какие есть системы счисления?',
    answer:
      '<p>Форматы записи чисел:</p><ul><li>Десятичные: 123, 1.5, .5 (можно без ведущего нуля), 5. (можно без дробной части)</li><li>Экспоненциальная запись: 1e3 === 1000, 1.5e-4 === 0.00015 (e означает «умножить на 10 в степени»)</li><li>Шестнадцатеричные (hex): 0xFF === 255, префикс 0x</li><li>Восьмеричные (octal): 0o17 === 15, префикс 0o (ES6). Старый синтаксис с ведущим нулём 017 запрещён в строгом режиме</li><li>Двоичные (binary): 0b1010 === 10, префикс 0b</li><li>BigInt-литералы: суффикс n - 123n, 0xFFn</li></ul><p>Разделители разрядов (numeric separators, ES2021) - подчёркивание для читаемости больших чисел: 1_000_000, 0xFF_FF, 1_000.50. Подчёркивание нельзя ставить в начале, в конце, рядом с точкой или несколько подряд.</p><p>Важный синтаксический нюанс: обращение к методу напрямую у целого литерала ломается, потому что точка трактуется как десятичный разделитель. 123.toString() - синтаксическая ошибка. Решения: взять в скобки (123).toString(), поставить две точки 123..toString() (первая - десятичная, вторая - доступ к свойству) или пробел 123 .toString().</p>',
    order: 6,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_numbers_math_007',
    topicId: 'topic_js_numbers',
    question: 'Какие есть полезные свойства и методы у Number?',
    answer:
      '<p>Статические свойства Number (константы):</p><ul><li>Number.MAX_SAFE_INTEGER - максимальное целое, представимое точно (2^53 - 1 = 9007199254740991)</li><li>Number.MIN_SAFE_INTEGER - минимальное безопасное целое (-(2^53 - 1))</li><li>Number.MAX_VALUE - максимальное представимое число (около 1.8e308), выше - Infinity</li><li>Number.MIN_VALUE - наименьшее положительное число близкое к нулю (около 5e-324), а НЕ самое отрицательное - частый подвох</li><li>Number.EPSILON - наименьшая разница между 1 и следующим представимым числом, используется для сравнения дробных</li><li>Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NaN</li></ul><p>Статические методы (строгие, без приведения аргумента):</p><ul><li>Number.isInteger(x) - является ли x целым числом</li><li>Number.isSafeInteger(x) - целое и в безопасном диапазоне</li><li>Number.isFinite(x) и Number.isNaN(x) - в отличие от глобальных версий не приводят аргумент к числу</li><li>Number.parseInt, Number.parseFloat - те же, что глобальные (добавлены для модульности)</li></ul><p>Методы экземпляра числа (работают благодаря автоупаковке - примитив временно оборачивается в объект-обёртку Number ради доступа к методам прототипа):</p><ul><li>toFixed(digits) - возвращает СТРОКУ с фиксированным числом знаков после запятой, с округлением: (1.5).toFixed(2) даёт "1.50". Часто для денег и вывода</li><li>toPrecision(n) - строка с заданным числом ЗНАЧАЩИХ цифр (не после запятой, а всего): (123.456).toPrecision(4) даёт "123.5"</li><li>toString(radix) - представление в другой системе счисления: (255).toString(16) даёт "ff", (5).toString(2) даёт "101"</li><li>toExponential(n) - экспоненциальная запись</li><li>toLocaleString() - форматирование числа с учётом локали (разделители разрядов, валюта): (1234.5).toLocaleString("ru") учтёт российский формат</li><li>valueOf() - возвращает примитивное значение (для объектов-обёрток Number)</li></ul><p>Главный подвох toFixed - округление работает не всегда «как в школе» из-за двоичного представления чисел:</p><ul><li>(1.005).toFixed(2) даёт "1.00", а не "1.01" - потому что 1.005 хранится как чуть меньшее значение</li><li>toFixed использует банковское/неоднозначное округление в граничных случаях и возвращает СТРОКУ, а не число</li><li>Для надёжного округления применяют Math.round(x * 100) / 100 или специализированные библиотеки для денег</li></ul><p>Нюанс синтаксиса: вызов метода прямо на числовом литерале требует особой записи, потому что точка трактуется как десятичная: 123.toString() - синтаксическая ошибка. Решения: взять в скобки (123).toString(), поставить две точки 123..toString() или пробел 123 .toString().</p>',
    order: 7,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_numbers_math_008',
    topicId: 'topic_js_numbers',
    question: 'Чем отличаются Number(), parseInt(), parseFloat() и унарный +?',
    answer:
      '<p>Все приводят значение к числу, но по разной логике. Главное различие: Number() и унарный + строгие (приводят значение целиком), а parseInt/parseFloat - снисходительные (читают число с начала строки, пока могут).</p><p>Number(value) и унарный + (+value):</p><ul><li>Преобразуют значение целиком. Если после обрезки пробелов остаётся что-то нечисловое - результат NaN: Number("123abc") даёт NaN</li><li>Пустая строка даёт 0: Number("") === 0</li><li>Понимают разные форматы чисел: hex (0xFF), экспоненту (1e3), пробелы по краям</li><li>Работают с любыми типами: Number(null) === 0, Number(undefined) - NaN, Number(true) === 1, Number([]) === 0, Number([5]) === 5, Number([1,2]) - NaN</li><li>Унарный + - это тот же Number(), только короче. Часто используется для быстрого приведения</li></ul><p>parseInt(string, radix):</p><ul><li>Читает целое число с начала строки и останавливается на первом символе, который не подходит: parseInt("123abc") === 123, parseInt("abc") - NaN</li><li>Второй аргумент radix - система счисления (основание). Его НУЖНО указывать всегда: без него parseInt("0x10") сам распознает hex и вернёт 16, а в старых движках строка с ведущим нулём могла трактоваться как восьмеричная. parseInt("10", 2) === 2</li><li>Не понимает экспоненту: parseInt("1e3") === 1 (останавливается на "e")</li><li>Знаменитый подвох: parseInt(0.0000005) === 5, потому что число сначала приводится к строке "5e-7", и parseInt читает "5"</li></ul><p>parseFloat(string):</p><ul><li>Как parseInt, но для дробных чисел и без аргумента radix (всегда десятичная)</li><li>Понимает точку и экспоненту: parseFloat("1.5abc") === 1.5, parseFloat("1e3") === 1000</li></ul><p>Когда что использовать: Number/унарный + - когда строка должна быть числом целиком (валидация ввода). parseInt/parseFloat - когда нужно «выдрать» число из строки с единицами измерения, например "100px".</p>',
    order: 8,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_numbers_math_009',
    topicId: 'topic_js_numbers',
    question:
      'Проверки чисел: isNaN/Number.isNaN, isFinite/Number.isFinite, isInteger/isSafeInteger?',
    answer:
      '<p>Это несколько пар «глобальная функция против метода Number», и ключевое различие между ними - приведение аргумента: глобальные функции сначала приводят аргумент к числу, методы Number - нет (строгие).</p><p>Проверка на NaN. Поскольку NaN не равно самому себе (NaN === NaN это false), сравнением проверить нельзя:</p><ul><li>Number.isNaN(x) - рекомендуемый способ: возвращает true только если x действительно является значением NaN. Не приводит аргумент к числу, поэтому для не-number сразу false: Number.isNaN("abc") === false</li><li>Глобальная isNaN(x) - опасна: сначала приводит аргумент к числу через Number(x), потом проверяет. Поэтому отвечает на вопрос «нельзя ли это привести к числу», а не «является ли это NaN»: isNaN("foo") === true, isNaN(undefined) === true, isNaN({}) === true</li><li>Object.is(x, NaN) - тоже корректно: ведёт себя как ===, но правильно различает NaN (и различает +0 и -0)</li><li>x !== x - исторический трюк: истинно только для NaN, ровно из-за того что NaN не равно самому себе. Так проверяли до появления Number.isNaN</li></ul><p>Проверка на конечность (та же логика «строгий метод против приводящей глобальной»):</p><ul><li>Number.isFinite(x) - true только если x является number и при этом не NaN, не Infinity и не -Infinity. Нечисла сразу дают false без приведения: Number.isFinite("123") === false</li><li>Глобальная isFinite(x) - сначала приводит аргумент к числу, поэтому isFinite("123") === true</li></ul><p>Проверка на целостность (строгие, без приведения):</p><ul><li>Number.isInteger(x) - является ли x целым числом</li><li>Number.isSafeInteger(x) - целое и в безопасном диапазоне (до 2^53 - 1)</li></ul><p>Частый баг с parseInt: ["1","2","3"].map(parseInt) даёт [1, NaN, NaN], потому что map передаёт колбэку индекс вторым аргументом, а parseInt принимает его как radix (систему счисления): parseInt("2", 1) и parseInt("3", 2) дают NaN. Решение - map(Number). Подробнее про parseInt/Number и приведение к числу - в отдельном вопросе.</p>',
    order: 9,
    createdAt: NOW,
    updatedAt: NOW,
  },
  // JavaScript: Строки (slug: strings, topicId: topic_js_strings) — 5 вопрос(ов)
  {
    id: 'q_strings_001',
    topicId: 'topic_js_strings',
    question: 'Что такое строка в JavaScript? Каковы её ключевые свойства?',
    answer:
      '<p>Строка - примитивный тип для текста, представляющий последовательность 16-битных кодовых единиц UTF-16. У строк есть несколько фундаментальных свойств.</p><p>Неизменяемость (immutability): строки нельзя менять на месте. Любой «изменяющий» метод (toUpperCase, replace, slice) возвращает НОВУЮ строку, а исходная остаётся прежней. Нельзя и присвоить символ по индексу: str[0] = "x" молча игнорируется (в строгом режиме - ошибка). Операции вроде str = str + "!" тоже не меняют строку, а создают новую и записывают её в переменную - меняется лишь то, на что ссылается переменная, поэтому «изменить переменную» и «изменить строку» - разные вещи.</p><p>Доступ к символам:</p><ul><li>По индексу: str[0] или str.charAt(0)</li><li>str.at(-1) - последний символ (поддерживает отрицательные индексы)</li><li>length - количество кодовых единиц UTF-16 (не всегда совпадает с числом видимых символов - см. вопрос про Unicode)</li></ul><p>Примитив, но с методами: строка - примитив, но к ней применимы методы благодаря автоупаковке (autoboxing) - при вызове метода примитив временно оборачивается в объект-обёртку String, метод выполняется, обёртка отбрасывается. Поэтому "abc".toUpperCase() работает.</p><p>Строки итерируемы: их можно перебирать через for...of и разворачивать спредом [...str], причём итерация идёт по кодовым ТОЧКАМ (code points), а не по кодовым единицам - это корректно обрабатывает символы вне базовой плоскости.</p><p>Создание: строковый литерал в одинарных, двойных кавычках или обратных кавычках (шаблонный литерал). Конструктор String(x) используется для приведения к строке; new String(x) создаёт объект-обёртку (так почти никогда не делают - typeof такого объекта "object", а не "string").</p><p>Зачем нужна иммутабельность: строки можно безопасно передавать и переиспользовать без копирования, использовать как ключи объектов и Map, а движок может их кешировать и оптимизировать сравнение.</p><p>Сравнение строк идёт лексикографически по кодам единиц (подробнее - в отдельном вопросе).</p>',
    order: 1,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_strings_002',
    topicId: 'topic_js_strings',
    question: 'Как строки работают с Unicode (кодовые единицы, точки, суррогатные пары)?',
    answer:
      '<p>Строки в JS - это последовательности 16-битных кодовых ЕДИНИЦ (code units) в кодировке UTF-16. Это порождает важные тонкости с символами за пределами базовой плоскости.</p><p>Кодовые единицы против кодовых точек:</p><ul><li>Кодовая точка (code point) - номер символа в Unicode (один логический символ)</li><li>Кодовая единица (code unit) - 16-битный «кусок» UTF-16. Символы из базовой плоскости (BMP, до U+FFFF) занимают одну единицу, а символы выше (эмодзи, редкие иероглифы) - ДВЕ единицы (суррогатную пару)</li></ul><p>Главный подвох - length считает кодовые единицы, а не символы:</p><ul><li>"😀".length даёт 2 (эмодзи - суррогатная пара из двух единиц)</li><li>"😀"[0] вернёт «половину» символа - сломанную одиночную суррогатную единицу</li></ul><p>Правильная работа с символами:</p><ul><li>for...of и спред [...str] перебирают по кодовым ТОЧКАМ - эмодзи останется цельным. [..."😀"].length даёт 1</li><li>codePointAt(i) - кодовая точка (учитывает суррогаты), в отличие от charCodeAt (кодовая единица)</li><li>String.fromCodePoint(cp) - построить символ из точки, в отличие от String.fromCharCode (из единицы)</li></ul><p>Нормализация: один и тот же видимый символ может быть записан по-разному (é как один символ U+00E9 или как e + комбинирующий акцент). str.normalize() (формы NFC/NFD/NFKC/NFKD) приводит к каноническому виду - без неё визуально одинаковые строки могут быть не равны.</p><p>Графемы (видимые символы): даже кодовой точки недостаточно - некоторые «символы» (флаги стран, эмодзи с модификаторами тона кожи, семейные эмодзи) состоят из НЕСКОЛЬКИХ точек, объединённых zero-width joiner. Для подсчёта именно видимых символов (графемных кластеров) нужен Intl.Segmenter или библиотека - ни length, ни [...str] не дадут корректный результат во всех случаях.</p>',
    order: 2,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_strings_003',
    topicId: 'topic_js_strings',
    question: 'Какие есть основные методы строк?',
    answer:
      '<p>Все методы возвращают НОВУЮ строку (строки неизменяемы).</p><p>Извлечение подстроки:</p><ul><li>slice(start, end) - основной способ, поддерживает отрицательные индексы (с конца). end не включается</li><li>substring(start, end) - как slice, но не понимает отрицательные (трактует их как 0) и сам меняет аргументы местами, если start больше end</li><li>substr(start, length) - устаревший (второй аргумент - длина, а не индекс)</li></ul><p>Поиск:</p><ul><li>indexOf / lastIndexOf - индекс вхождения или -1</li><li>includes - есть ли подстрока (boolean)</li><li>startsWith / endsWith - начинается/заканчивается ли подстрокой</li><li>search / match / matchAll - поиск по регулярному выражению</li></ul><p>Изменение:</p><ul><li>replace(search, replacement) - заменяет ПЕРВОЕ вхождение (или все, если регулярка с флагом g). replaceAll - заменяет все вхождения и для обычной строки</li><li>split(separator) - разбивает в массив: "a,b,c".split(",")</li><li>toUpperCase / toLowerCase - регистр (и локалезависимые toLocaleUpperCase/LowerCase)</li><li>trim / trimStart / trimEnd - убрать пробелы по краям</li><li>padStart(len, fill) / padEnd - дополнить до длины (например ведущими нулями)</li><li>repeat(n) - повторить строку n раз</li><li>concat - склейка (на практике чаще + или шаблонные литералы)</li></ul><p>Доступ к символам: charAt, at (с отрицательными индексами), charCodeAt (кодовая единица), codePointAt (кодовая точка).</p><p>Частые приёмы: "5".padStart(3, "0") даёт "005"; разворот строки [...str].reverse().join("") (через спред, чтобы не сломать суррогатные пары).</p>',
    order: 3,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_strings_004',
    topicId: 'topic_js_strings',
    question: 'Что такое шаблонные литералы и тегированные шаблоны?',
    answer:
      '<p>Шаблонные литералы (template literals) - строки в обратных кавычках с расширенными возможностями (ES2015):</p><ul><li>Интерполяция: вставка выражений через ${...} - `Привет, ${name}!`. Внутри может быть любое выражение, не только переменная; результат вычисляется и приводится к строке по обычным правилам (через String/toString)</li><li>Многострочность: переносы строк сохраняются прямо в литерале, без \\n</li><li>Внутри ${} работает любое выражение: ${a + b}, ${cond ? x : y}, ${arr.map(...).join("")}</li></ul><p>Тегированные шаблоны (tagged templates) - более продвинутая возможность: перед шаблонным литералом ставится функция-тег, и она получает разобранный шаблон для обработки:</p><pre>function tag(strings, ...values) {\n  // strings - массив строковых частей\n  // values - подставляемые значения\n}\ntag`Привет, ${name}! Тебе ${age} лет`;</pre><ul><li>Первый аргумент - массив литеральных кусков строки (между подстановками)</li><li>Остальные аргументы - вычисленные значения выражений ${...}</li><li>Тег сам решает, как собрать результат - может вернуть что угодно, не обязательно строку</li></ul><p>Применения тегированных шаблонов:</p><ul><li>Экранирование и безопасность (санитизация HTML, защита от инъекций)</li><li>Локализация и форматирование</li><li>CSS-in-JS (styled-components используют тегированные шаблоны), GraphQL-запросы (gql``)</li></ul><p>String.raw - встроенный тег, возвращающий «сырую» строку без обработки экранирующих последовательностей: String.raw`C:\\n` даст C:\\n буквально, не превращая \\n в перенос строки. Полезно для путей и регулярных выражений.</p>',
    order: 4,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_strings_005',
    topicId: 'topic_js_strings',
    question: 'Как сравниваются строки? В чём подвох сравнения с локалью?',
    answer:
      '<p>Операторы сравнения (&lt;, &gt;, &lt;=, &gt;=) сравнивают строки ЛЕКСИКОГРАФИЧЕСКИ - посимвольно по кодам единиц UTF-16 (code units), а не по алфавиту языка.</p><p>Из этого следуют подвохи:</p><ul><li>Регистр влияет: "Z" &lt; "a" даёт true, потому что код заглавной Z (90) меньше кода строчной a (97). Все заглавные латинские буквы идут раньше строчных</li><li>Сравнение идёт по кодам, а не по «правильному» алфавитному порядку языка</li><li>Кириллица, буквы с диакритикой, разные алфавиты сортируются по их Unicode-кодам, что часто не совпадает с ожидаемым порядком</li><li>Числа в строках сортируются как текст: "10" &lt; "2" (сравниваются посимвольно, "1" &lt; "2")</li></ul><p>Равенство (=== и ==) проверяет полное совпадение по кодам единиц. Подвох: визуально одинаковые строки могут быть не равны из-за разных Unicode-представлений (é одним символом или e + комбинирующий акцент) - перед сравнением применяют normalize().</p><p>Правильное сравнение с учётом языка - localeCompare:</p><ul><li>str.localeCompare(other) возвращает отрицательное/0/положительное (как компаратор для sort)</li><li>Учитывает алфавит локали, регистр и диакритику корректно для конкретного языка</li><li>Принимает опции: locale, sensitivity (чувствительность к регистру/акцентам), а главное - numeric: true для «натуральной» сортировки чисел в строках ("file2" перед "file10")</li></ul><pre>arr.sort((a, b) => a.localeCompare(b, "ru", { numeric: true }));</pre><p>Для массовых сравнений и сортировки эффективнее Intl.Collator - он создаётся один раз и переиспользует настройки, что быстрее многократного localeCompare.</p>',
    order: 5,
    createdAt: NOW,
    updatedAt: NOW,
  },

  // JavaScript: Регулярные выражения (slug: regexp, topicId: topic_js_regexp) — 4 вопрос(ов)
  {
    id: 'q_regexp_001',
    topicId: 'topic_js_regexp',
    question: 'Что такое регулярные выражения? Как создаются, какие есть флаги?',
    answer:
      '<p>Регулярное выражение (RegExp) - шаблон для поиска и обработки подстрок по заданным правилам. В JS это встроенный объект.</p><p>Два способа создания:</p><ul><li>Литерал: /pattern/flags - например /\\d+/g. Компилируется один раз при разборе кода, быстрее. Подходит, когда шаблон известен заранее</li><li>Конструктор: new RegExp("pattern", "flags") - когда шаблон собирается динамически из строки. Важно: в строке нужно ДВОЙНОЕ экранирование - new RegExp("\\\\d+") эквивалентно /\\d+/</li></ul><p>Флаги (модификаторы поведения):</p><ul><li>g (global) - искать все совпадения, а не только первое</li><li>i (ignoreCase) - без учёта регистра</li><li>m (multiline) - якоря ^ и $ работают на каждой строке, а не только на всей строке целиком</li><li>s (dotAll) - точка . начинает совпадать и с переносом строки (по умолчанию - нет)</li><li>u (unicode) - корректная работа с Unicode и кодовыми точками (правильная обработка эмодзи, \\u{...}, свойств \\p{...})</li><li>y (sticky) - совпадение строго с позиции lastIndex, без «перескакивания» вперёд</li><li>d (hasIndices) - добавляет индексы начала/конца каждой группы в результат</li><li>v - новый расширенный режим Unicode (надмножество u): операции над множествами символов и более мощные классы. Стоит проверять поддержку</li></ul><p>Флаги доступны как свойства: re.global, re.flags (строка всех флагов), re.source (текст шаблона).</p><p>Базовые элементы шаблона: классы символов (\\d цифра, \\w буква/цифра/подчёркивание, \\s пробел, и их инверсии \\D \\W \\S), точка . (любой символ кроме переноса), квантификаторы (* + ? {n,m}), наборы [abc], диапазоны [a-z], альтернатива |.</p>',
    order: 1,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_regexp_002',
    topicId: 'topic_js_regexp',
    question: 'Какие методы используются с регулярными выражениями? В чём подвох lastIndex?',
    answer:
      '<p>Методы делятся на методы самого RegExp и строковые методы, принимающие RegExp.</p><p>Методы RegExp:</p><ul><li>re.test(str) - есть ли совпадение, возвращает boolean. Самый быстрый для проверки «есть/нет»</li><li>re.exec(str) - возвращает подробную информацию о совпадении (массив с группами, индексом, входной строкой) или null. При флаге g вызывается многократно в цикле, продвигаясь по строке</li></ul><p>Строковые методы:</p><ul><li>str.match(re) - без g возвращает первое совпадение с группами; с g - массив всех совпадений (без групп)</li><li>str.matchAll(re) - возвращает итератор всех совпадений ВМЕСТЕ с группами (требует флаг g). Современный способ получить все совпадения с деталями</li><li>str.replace(re, replacement) / str.replaceAll - замена (с функцией-заменой или спецсимволами групп)</li><li>str.split(re) - разбить по шаблону</li><li>str.search(re) - индекс первого совпадения или -1</li></ul><p>Главный подвох - lastIndex с флагом g (и y): объект RegExp с этими флагами ХРАНИТ СОСТОЯНИЕ - свойство lastIndex, с которого продолжится следующий поиск. Последствия:</p><ul><li>Повторный test/exec на том же объекте продолжается с прошлой позиции, а не с начала. Поэтому re.test(str) в цикле или для разных строк на одном g-регэкспе даёт «через раз» true/false</li><li>Особенно коварно с литералом в цикле условия: один и тот же объект сохраняет lastIndex между итерациями</li></ul><p>Решения: не переиспользовать g-регэксп для одиночных проверок (создавать заново или убрать g для test), либо сознательно сбрасывать re.lastIndex = 0, либо использовать matchAll вместо ручного цикла с exec.</p>',
    order: 2,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_regexp_003',
    topicId: 'topic_js_regexp',
    question: 'Что такое группы захвата в регулярных выражениях? Как работает замена с группами?',
    answer:
      '<p>Группы выделяют части шаблона круглыми скобками для извлечения, обратных ссылок и замены.</p><p>Виды групп:</p><ul><li>Захватывающая (capturing): (...) - сохраняет совпавший фрагмент, доступен по номеру (1, 2, ...) в результате exec/match и в replace</li><li>Именованная (named): (?&lt;name&gt;...) - то же, но с именем. Доступна через result.groups.name и в замене через $&lt;name&gt;. Читаемее номеров</li><li>Незахватывающая (non-capturing): (?:...) - группирует для квантификатора или альтернативы, но НЕ сохраняет (экономит, не сдвигает нумерацию)</li></ul><p>Обратные ссылки (backreferences): \\1 в шаблоне ссылается на ранее захваченную группу - для поиска повторов. Например /(\\w)\\1/ найдёт удвоенный символ. Для именованных - \\k&lt;name&gt;.</p><p>Замена с группами в replace - спецсимволы в строке замены:</p><ul><li>$1, $2 - вставить захваченную группу по номеру; $&lt;name&gt; - по имени</li><li>$& - всё совпадение целиком; $` и $\' - текст до и после совпадения; $$ - буквальный знак доллара</li></ul><pre>"2024-01-15".replace(/(\\d{4})-(\\d{2})-(\\d{2})/, "$3.$2.$1");\n// "15.01.2024"</pre><p>Функция-замена - вместо строки в replace можно передать функцию: она вызывается для каждого совпадения и возвращает строку замены. Аргументы: (match, p1, p2, ..., offset, string, groups). Это даёт полный контроль - вычислять замену динамически:</p><pre>"a1b2".replace(/\\d/g, (m) => m * 2); // "a2b4"</pre><p>Через функцию-замену удобно делать сложные преобразования, которые нельзя выразить простым шаблоном замены.</p>',
    order: 3,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_regexp_004',
    topicId: 'topic_js_regexp',
    question: 'Что такое опережающие/ретроспективные проверки, якоря и жадность в регулярках?',
    answer:
      '<p>Утверждения (assertions) - условия, которые проверяют контекст, но НЕ включаются в совпадение (нулевая ширина).</p><p>Якоря и границы:</p><ul><li>^ - начало строки (или строки текста при флаге m), $ - конец</li><li>\\b - граница слова (между \\w и не-\\w), \\B - НЕ граница. /\\bcat\\b/ найдёт слово cat, но не часть в "category"</li></ul><p>Опережающие и ретроспективные проверки (lookaround):</p><ul><li>Позитивный lookahead (?=...) - совпадение, ЗА которым следует шаблон. /\\d+(?= руб)/ найдёт число перед " руб", но само " руб" в совпадение не войдёт</li><li>Негативный lookahead (?!...) - совпадение, за которым НЕ следует шаблон</li><li>Позитивный lookbehind (?&lt;=...) - совпадение, ПЕРЕД которым стоит шаблон. /(?&lt;=\\$)\\d+/ найдёт число после знака доллара</li><li>Негативный lookbehind (?&lt;!...) - совпадение, перед которым НЕТ шаблона</li></ul><p>Применение lookaround: извлечь часть без «окружения», проверить несколько условий одновременно, валидация (например пароль, содержащий и цифру, и букву - через несколько lookahead).</p><p>Жадность и ленивость квантификаторов:</p><ul><li>По умолчанию квантификаторы (* + ? {n,m}) ЖАДНЫЕ - захватывают как можно БОЛЬШЕ, затем «отдают» назад при необходимости. /&lt;.+&gt;/ на "&lt;a&gt;&lt;b&gt;" захватит всё "&lt;a&gt;&lt;b&gt;"</li><li>Добавление ? делает их ЛЕНИВЫМИ - захватывают как можно МЕНЬШЕ. /&lt;.+?&gt;/ захватит только "&lt;a&gt;"</li></ul><p>Производительность - катастрофический бэктрекинг (ReDoS): неудачно составленный шаблон с вложенными квантификаторами (например /(a+)+$/) на специально подобранной строке может перебирать экспоненциальное число вариантов и «повесить» поток. Это уязвимость ReDoS - при работе с пользовательским вводом регулярки нужно составлять осторожно (избегать вложенной жадности, использовать конкретные классы вместо .).</p>',
    order: 4,
    createdAt: NOW,
    updatedAt: NOW,
  },

  // JavaScript: Symbol (slug: symbol, topicId: topic_js_symbol) — 2 вопрос(ов)
  {
    id: 'q_symbol_001',
    topicId: 'topic_js_symbol',
    question: 'Что такое Symbol? Зачем он нужен?',
    answer:
      '<p>Symbol - примитивный тип (ES2015), главное свойство которого - гарантированная уникальность. Каждый вызов Symbol() создаёт новое, ни с чем не равное значение, даже если описание одинаковое:</p><pre>Symbol("id") === Symbol("id"); // false - это разные символы</pre><p>Аргумент Symbol("описание") - лишь метка для отладки (доступна через .description), на уникальность не влияет.</p><p>Symbol нельзя создать через new (это примитив, а не объект): new Symbol() бросает TypeError.</p><p>Главное применение - уникальные ключи свойств объекта, которые гарантированно не конфликтуют с другими:</p><pre>const id = Symbol("id");\nobj[id] = 123; // ключ, который точно не пересечётся с обычными</pre><p>Особенности символьных ключей:</p><ul><li>«Скрытость»: символьные свойства НЕ появляются в обычных переборах - for...in, Object.keys, JSON.stringify их игнорируют. Это не настоящая приватность, но защита от случайного доступа и коллизий</li><li>Получить их можно только специально: Object.getOwnPropertySymbols(obj) или Reflect.ownKeys(obj)</li><li>При этом при копировании объекта символьные ключи переносятся - через Object.assign() и спред {...obj} (несмотря на то что в перечислениях они скрыты)</li></ul><p>Зачем нужны символы:</p><ul><li>Добавить метаданные/служебные свойства к чужому объекту, не рискуя перезаписать существующие ключи и не «засветившись» в переборах</li><li>Определять системное поведение объекта через well-known символы (например сделать объект итерируемым)</li><li>Создавать «константы»-идентификаторы, гарантированно уникальные (вместо строковых енумов, где возможны коллизии)</li></ul><p>Нюансы:</p><ul><li>Symbol не приводится к строке неявно: "" + sym бросает TypeError (чтобы не терять уникальность по ошибке). Явно - String(sym) или sym.toString()</li><li>typeof возвращает "symbol"</li><li>Символы можно использовать как ключи в обычном объекте и в Map</li></ul>',
    order: 1,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_symbol_002',
    topicId: 'topic_js_symbol',
    question: 'Что такое глобальный реестр символов и well-known символы?',
    answer:
      '<p>Это два «системных» механизма вокруг символов.</p><p>Глобальный реестр символов (global symbol registry) - способ создать символ, общий для всего приложения (и даже между разными realm, например окном и iframe):</p><ul><li>Symbol.for(key) - возвращает символ из глобального реестра по строковому ключу; если такого ещё нет - создаёт и регистрирует. Повторный вызов с тем же ключом вернёт ТОТ ЖЕ символ: Symbol.for("id") === Symbol.for("id") даёт true</li><li>Symbol.keyFor(sym) - обратная операция: возвращает строковый ключ, под которым символ зарегистрирован (или undefined для обычных символов)</li></ul><p>Отличие от обычного Symbol(): обычный всегда уникален, а Symbol.for намеренно переиспользует один символ по ключу - для разделяемых идентификаторов.</p><p>Well-known символы (системные) - встроенные символы, через которые объект может настроить своё поведение для встроенных операций языка. Основные:</p><ul><li>Symbol.iterator - делает объект итерируемым (работает с for...of, спредом, деструктуризацией)</li><li>Symbol.asyncIterator - для асинхронной итерации (for await...of)</li><li>Symbol.hasInstance - кастомизирует поведение instanceof</li><li>Symbol.toPrimitive - управляет приведением объекта к примитиву (перекрывает toString/valueOf)</li><li>Symbol.toStringTag - задаёт «хвост» в Object.prototype.toString (получить "[object MyType]")</li><li>Symbol.isConcatSpreadable - влияет на то, разворачивает ли concat объект как массив</li><li>Symbol.species - задаёт конструктор, используемый методами вроде map при создании производных объектов</li><li>Symbol.match / replace / search / split - позволяют объекту вести себя как регулярное выражение в соответствующих строковых методах</li></ul><p>Смысл well-known символов: они дают «точки расширения» - возможность встроить пользовательский объект в стандартные механизмы языка, переопределив реакцию на iteration, instanceof, приведение типов и т.д. Именно через Symbol.iterator пишут собственные итераторы (часто в паре с генераторами).</p>',
    order: 2,
    createdAt: NOW,
    updatedAt: NOW,
  },

  // JavaScript: Преобразование типов (slug: type-coercion, topicId: topic_js_coercion) — 7 вопрос(ов)
  {
    id: 'q_type_coercion_001',
    topicId: 'topic_js_coercion',
    question: 'Как в JS происходит преобразование типов?',
    answer:
      '<p>Преобразование типов (type coercion) бывает явным (explicit) - когда мы сами вызываем String(), Number(), Boolean() - и неявным (implicit), когда движок автоматически приводит операнды в операциях. В спецификации этим занимаются абстрактные операции ToString, ToNumber, ToBoolean, а для объектов - ToPrimitive. Существует три направления приведения примитивов: к строке, к числу и к булеву значению.</p><p>Строковое преобразование (ToString) - когда требуется строка. Вызывается явно через String(value) или неявно при конкатенации со строкой (бинарный + со строковым операндом). Правила для примитивов:</p><ul><li>null - "null", undefined - "undefined"</li><li>число - его строковое представление, true/false - "true"/"false"</li><li>Symbol - String(sym) работает, но неявное приведение запрещено: "" + sym бросает TypeError</li></ul><p>Численное преобразование (ToNumber) - в математических операциях. Явно через Number(value) или унарный + (к BigInt унарный + неприменим). Правила:</p><ul><li>undefined - NaN</li><li>null - 0</li><li>true/false - 1/0</li><li>string - пробелы по краям обрезаются; пустая строка даёт 0, иначе считывается число, при ошибке NaN. Понимает hex, экспоненту</li><li>Symbol - бросает TypeError (символ нельзя привести к числу)</li></ul><p>Логическое преобразование (ToBoolean) - в логическом контексте (условия, логические операторы). Явно через Boolean(value) или двойное отрицание !!. Falsy-значений ровно 8: false, 0, -0, 0n, "" , null, undefined, NaN. Всё остальное - truthy.</p><p>Принципиальный нюанс: ToBoolean - единственное из трёх преобразований, которое НЕ заглядывает внутрь объекта и не вызывает ToPrimitive. Любой объект всегда truthy, даже пустой массив, пустой объект и new Boolean(false).</p><p>Преобразование объектов. Когда к строке/числу приводят объект, сначала срабатывает ToPrimitive: объект превращается в примитив (через методы Symbol.toPrimitive, valueOf, toString), и уже этот примитив приводится к нужному типу. Примеры: Number([]) === 0, Number([5]) === 5, Number([1,2]) - NaN, String([1,2]) - "1,2", String({}) - "[object Object]". Подробнее алгоритм ToPrimitive - в отдельном вопросе.</p>',
    order: 1,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_type_coercion_002',
    topicId: 'topic_js_coercion',
    question: 'Как объекты преобразуются в элементарные значения? Какие есть алгоритмы?',
    answer:
      '<p>Когда объект нужно привести к примитиву, срабатывает внутренняя операция ToPrimitive, которой передаётся подсказка (hint) - в каком направлении желательно преобразование. Возможны три hint:</p><ul><li>"string" - когда ожидается строка: String(obj), использование объекта как ключа, подстановка в шаблонный литерал, alert</li><li>"number" - когда ожидается число: унарный +, арифметика (кроме бинарного +), операторы сравнения < > <= >=, Number(obj)</li><li>"default" - когда непонятно, что ожидается: бинарный + (может быть и сложением, и конкатенацией) и операторы == / !=</li></ul><p>Алгоритм ToPrimitive по шагам:</p><ol><li>Если у объекта есть метод [Symbol.toPrimitive](hint) - вызывается он, ему передаётся hint, и он обязан вернуть примитив. Это высший приоритет, он перекрывает всё остальное</li><li>Если Symbol.toPrimitive нет - вызывается пара методов valueOf и toString в порядке, зависящем от hint:<ul><li>для hint "string": сначала toString(), затем valueOf()</li><li>для hint "number" и "default": сначала valueOf(), затем toString()</li></ul></li></ol><p>Ключевая тонкость работы пары: вызывается первый метод по порядку; если он вернул примитив - результат берётся; если он вернул объект (не примитив) - пробуется второй метод. То есть важно не «наличие» метода, а то, вернул ли он примитив. Если оба вернули объект - бросается TypeError.</p><p>Поведение по умолчанию (обычный объект без своих методов):</p><ul><li>valueOf по умолчанию возвращает сам объект (то есть не примитив), поэтому фактически пропускается</li><li>toString по умолчанию возвращает "[object Object]"</li><li>Поэтому Number({}) - NaN (через "[object Object]"), а String({}) - "[object Object]"</li></ul><p>Про Date: у него переопределён Symbol.toPrimitive так, что при hint "default" он ведёт себя как "string" (Date по умолчанию преобразуется в строку, а не в число). Поэтому, например, бинарный + с датой даёт строковую конкатенацию.</p><p>Классические примеры неявного приведения: [] + [] даёт "" (оба массива через toString дают пустые строки), [] + {} даёт "[object Object]", {} + [] в зависимости от контекста может дать 0 (если {} распознан как блок кода) или "[object Object]".</p>',
    order: 2,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_type_coercion_003',
    topicId: 'topic_js_coercion',
    question: 'Как работает бинарный плюс?',
    answer:
      '<p>Бинарный + - единственный арифметический оператор с двойным поведением: он умеет и складывать числа, и конкатенировать строки. Все остальные арифметические операторы (-, *, /, %, **) всегда приводят операнды к числу: "5" - 1 даёт 4, "5" * "2" даёт 10.</p><p>Полный алгоритм работы бинарного +:</p><ol><li>Оба операнда приводятся к примитиву через ToPrimitive с подсказкой "default" (объекты превращаются в примитивы)</li><li>После этого: если хотя бы один из полученных примитивов - строка, то второй тоже приводится к строке и выполняется конкатенация</li><li>Иначе оба приводятся к числу и выполняется сложение</li></ol><p>Ключевая тонкость: проверка «есть ли строка» происходит ПОСЛЕ приведения объектов к примитиву, а не до. Поэтому поведение с объектами определяется тем, во что они превращаются:</p><ul><li>[] + [] даёт "" - оба массива через toString дают пустые строки</li><li>[] + 1 даёт "1" - массив стал "", дальше конкатенация</li><li>[1,2] + [3,4] даёт "1,23,4"</li></ul><p>Подвохи с примитивами:</p><ul><li>1 + "2" даёт "12" (конкатенация), а "5" - 1 даёт 4 (вычитание всегда числовое)</li><li>Порядок важен, операции идут слева направо: 1 + 2 + "3" даёт "33" (сначала 1+2=3, потом 3+"3"), а "1" + 2 + 3 даёт "123"</li><li>1 + null даёт 1 (null приводится к 0), 1 + undefined даёт NaN, 1 + true даёт 2</li><li>"" + {} даёт "[object Object]"</li></ul><p>Поведение с особыми типами:</p><ul><li>BigInt: 1n + 1n даёт 2n, но 1n + 1 бросает TypeError (нельзя смешивать bigint и number в арифметике). При этом со строкой работает: 1n + "1" даёт "11" - это конкатенация, а не арифметика</li><li>Symbol: Symbol() + "" бросает TypeError - символ нельзя привести к строке неявно</li></ul>',
    order: 3,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_type_coercion_004',
    topicId: 'topic_js_coercion',
    question: 'Что делает унарный плюс и унарный минус?',
    answer:
      '<p>Унарный плюс (+x) приводит операнд к числу. Это самый короткий способ преобразования, эквивалент Number(x) - та же операция ToNumber. Примеры:</p><ul><li>+"123" даёт 123, +"" даёт 0, +"abc" даёт NaN</li><li>+true даёт 1, +false даёт 0</li><li>+null даёт 0, +undefined даёт NaN</li><li>+[] даёт 0, +[5] даёт 5, +{} даёт NaN (через ToPrimitive)</li></ul><p>Унарный минус (-x) делает то же самое приведение к числу, а затем меняет знак. -"5" даёт -5, -"abc" даёт NaN. Применённый к нулю даёт -0.</p><p>Важная асимметрия с BigInt:</p><ul><li>Унарный плюс к BigInt запрещён: +1n бросает TypeError. Это намеренно - в asm.js +x означает приведение к number, и поведение сохранили</li><li>А унарный минус к BigInt работает: -1n даёт -1n. Результат остаётся BigInt, в number он не превращается</li></ul><p>К Symbol оба оператора неприменимы: +Symbol() и -Symbol() бросают TypeError, символ нельзя привести к числу.</p>',
    order: 4,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_type_coercion_005',
    topicId: 'topic_js_coercion',
    question: 'Как работает алгоритм нестрогого равенства (==)?',
    answer:
      '<p>Нестрогое равенство == сравнивает значения, приводя их к общему типу. Алгоритм (в спецификации - IsLooselyEqual) работает по шагам:</p><ol><li>Если типы операндов одинаковы - выполняется строгое сравнение ===, без всякого приведения</li><li>null == undefined даёт true (и в обратном порядке). Это единственная пара разнотипных значений, равных по ==. Больше null и undefined не равны ничему</li><li>Число и строка: строка приводится к числу, сравниваются как числа. 1 == "1" даёт true</li><li>BigInt и строка: строка приводится к BigInt (если не получилось - false)</li><li>Если один из операндов boolean - он приводится к числу (true в 1, false в 0), и сравнение повторяется заново. Поэтому "1" == true даёт true ("1"->1, true->1), а "2" == true даёт false</li><li>Если одна сторона - объект, а другая - примитив (число, строка, BigInt, Symbol) - объект приводится к примитиву через ToPrimitive (hint "default"), и сравнение повторяется</li><li>Число и BigInt сравниваются по математическому значению: 1n == 1 даёт true</li><li>Во всех остальных случаях - false</li></ol><p>Важные следствия:</p><ul><li>Приведение boolean идёт к числу, а НЕ к булеву контексту. Это источник путаницы: == true не означает «truthy». [] == true даёт false, хотя if([]) истинно</li><li>Два объекта по == сравниваются как при === - по ссылке. {} == {} даёт false</li><li>NaN == NaN даёт false (типы одинаковые, уходит в ===, а там NaN не равно себе)</li></ul><p>Главная практическая рекомендация: из-за этих неочевидных приведений в реальном коде почти всегда используют строгое ===. Осмысленное применение == - это, по сути, только проверка x == null, которая одной операцией ловит и null, и undefined.</p>',
    order: 5,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_type_coercion_006',
    topicId: 'topic_js_coercion',
    question: 'Разбери знаменитые подвохи приведения типов (WTF JS)',
    answer:
      '<p>Классические неочевидные результаты приведения. Каждый объясняется применением алгоритмов == и ToPrimitive по шагам.</p><ul><li>[] == ![] даёт true. ![] - массив truthy, значит false. Получаем [] == false. Boolean->число: [] == 0. Объект->примитив: ToPrimitive([]) даёт "". Строка->число: "" == 0 -> 0 == 0 -> true</li><li>null == 0 даёт false. В алгоритме == нет шага, приводящего null к числу - null равно по == только undefined и себе</li><li>null >= 0 даёт true. Операторы сравнения < > <= >= используют ДРУГОЙ алгоритм: оба операнда приводятся к числу. Number(null) = 0, получаем 0 >= 0 -> true. Парадокс: null >= 0 истинно, null > 0 ложно, но null == 0 тоже ложно</li><li>"" == 0 даёт true. Строка приводится к числу: Number("") = 0</li><li>[] == 0 даёт true. ToPrimitive([]) = "", затем "" == 0 -> 0 == 0</li><li>[null] == 0 даёт true. [null].toString() даёт "" (null в join становится пустым), дальше как выше. Аналогично [undefined] == 0</li><li>"0" == false даёт true. false->0, потом "0"->0, итог 0 == 0. При этом "0" в булевом контексте truthy (непустая строка), то есть if("0") выполнится - снова разница между == false и falsy</li><li>[] == "" даёт true. ToPrimitive([]) = "", строки равны</li><li>NaN == NaN даёт false - NaN не равно ничему, включая себя</li><li>{} == {} и [] == [] дают false - разные объекты, сравнение по ссылке</li></ul><p>Общий вывод: почти все подвохи держатся на трёх правилах - boolean всегда приводится к числу (не к truthy/falsy), объект сначала проходит ToPrimitive, а операторы сравнения и == используют разные алгоритмы. Знание этих правил снимает «магию».</p>',
    order: 6,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_type_coercion_007',
    topicId: 'topic_js_coercion',
    question: 'Какие в JS есть алгоритмы сравнения на равенство?',
    answer:
      '<p>В языке четыре алгоритма равенства, и они различаются по двум граничным случаям: как обрабатывают NaN и как различают +0 и -0.</p><ol><li>Нестрогое равенство == (Abstract Equality / IsLooselyEqual) - сравнивает с приведением типов. NaN не равно себе. +0 и -0 равны</li><li>Строгое равенство === (Strict Equality / IsStrictlyEqual) - без приведения, разные типы сразу не равны. NaN не равно себе (NaN === NaN даёт false). +0 === -0 даёт true</li><li>SameValue - используется в Object.is. Как ===, но с двумя отличиями: NaN равно NaN, а +0 и -0 НЕ равны. Object.is(NaN, NaN) даёт true, Object.is(+0, -0) даёт false</li><li>SameValueZero - как SameValue, но нули считает равными: NaN равно NaN, а +0 и -0 равны</li></ol><p>Сводка по граничным случаям:</p><ul><li>NaN равно NaN: только в SameValue и SameValueZero (в == и === - нет)</li><li>+0 равно -0: в ==, === и SameValueZero (в SameValue/Object.is - нет)</li></ul><p>Где используется SameValueZero (это важно знать):</p><ul><li>Array.prototype.includes - поэтому [NaN].includes(NaN) даёт true</li><li>Сравнение ключей в Map и Set, элементов Set</li><li>TypedArray.prototype.includes</li></ul><p>А вот indexOf, lastIndexOf и switch/case используют строгое === - поэтому [NaN].indexOf(NaN) даёт -1 (NaN не находится). Это объясняет разницу между includes и indexOf при поиске NaN.</p><p>Практический итог: для обычных сравнений - ===. Для надёжного сравнения, корректно обрабатывающего NaN и -0 (например в реализации мемоизации, сравнении пропсов) - Object.is.</p>',
    order: 7,
    createdAt: NOW,
    updatedAt: NOW,
  },

  // JavaScript: Операторы (slug: operators, topicId: topic_js_operators) — 17 вопрос(ов)
  {
    id: 'q_operators_001',
    topicId: 'topic_js_operators',
    question: 'Отличие строгого равенства от нестрогого',
    answer:
      '<p>Это два оператора сравнения на равенство:</p><ul><li>Строгое равенство (===) сравнивает значение и тип. Если типы операндов разные - сразу возвращает false, без приведения. Если одинаковые - сравнивает значения</li><li>Нестрогое равенство (==) при разных типах сначала приводит операнды к общему типу, и только потом сравнивает. Поэтому 1 == "1" даёт true, а 1 === "1" даёт false</li></ul><p>Важный нюанс: «строгое» не значит «абсолютно точное». === тоже имеет два особых случая:</p><ul><li>NaN === NaN даёт false (NaN не равно ничему, включая себя)</li><li>+0 === -0 даёт true (хотя это разные на уровне битов значения)</li></ul><p>Для случаев, где нужно корректно обработать и NaN, и знак нуля, есть Object.is - он ведёт себя как ===, но различает -0 и считает NaN равным самому себе.</p><p>Практическая рекомендация: по умолчанию всегда используют ===, потому что неявные приведения == приводят к трудноуловимым багам. Единственное общепринятое оправданное применение == - это проверка x == null, которая одной операцией ловит и null, и undefined.</p><p>Полный пошаговый алгоритм работы == и сводка всех четырёх алгоритмов равенства языка (==, ===, SameValue, SameValueZero) разбираются в отдельных вопросах.</p>',
    order: 1,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_operators_002',
    topicId: 'topic_js_operators',
    question: 'С какими типами данных можно использовать операции сравнения? Как работают?',
    answer:
      '<p>Только числа и строки, все другие типы преобразуются для сравнения. Операнды сравниваются как строки только если оба являются строками, в остальных случаях сравниваются как числа</p>',
    order: 2,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_operators_003',
    topicId: 'topic_js_operators',
    question: 'Что делает операция in?',
    answer:
      '<p>Оператор in проверяет наличие свойства в объекте и возвращает true/false. Синтаксис: "prop" in obj. Левый операнд - имя свойства (строка или Symbol), правый - объект. Если справа не объект, бросается TypeError ("x" in 5 - ошибка).</p><p>Ключевой нюанс: in ищет свойство по всей цепочке прототипов - находит как собственные, так и унаследованные свойства. Например "toString" in {} даёт true, потому что toString унаследован от Object.prototype. Этим in отличается от hasOwnProperty / Object.hasOwn, которые проверяют только собственные свойства.</p><p>in отличает «свойства нет» от «свойство есть со значением undefined». Если obj = { x: undefined }, то "x" in obj даёт true, хотя obj.x === undefined. Поэтому для проверки именно существования свойства in надёжнее, чем сравнение obj.x !== undefined.</p><p>Поведение с массивами - частый подвох. in проверяет ИНДЕКСЫ (это имена свойств), а не значения:</p><ul><li>0 in [1,2,3] даёт true (индекс 0 существует)</li><li>3 in [1,2,3] даёт false (индекса 3 нет, длина 3)</li><li>1 in [1,2,3] спрашивает про индекс 1, а не про значение 1 - не путать с includes</li><li>на разреженных массивах видит дырки: 1 in [1,,3] даёт false (на позиции 1 элемента нет)</li><li>"length" in [] даёт true - length тоже свойство</li></ul><p>Дополнительная возможность (ES2022): in умеет проверять наличие приватного поля класса - синтаксис #field in obj. Это безопасный способ узнать, был ли объект создан данным классом (branding check), без выброса ошибки при обращении к чужому приватному полю.</p>',
    order: 3,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_operators_004',
    topicId: 'topic_js_operators',
    question: 'Как работает логический оператор &&(И)',
    answer:
      '<p>Оператор && вычисляет операнды слева направо и возвращает сам операнд (исходное значение), а не обязательно true/false. Правило: возвращается первый falsy-операнд; если все операнды truthy - возвращается последний. Решение принимается по truthy/falsy, а не по строгому true/false.</p><p>Примеры:</p><ul><li>1 && 2 даёт 2 (оба truthy, вернулся последний)</li><li>0 && 2 даёт 0 (первый falsy, вернулся он)</li><li>"a" && "b" даёт "b"</li><li>null && foo() даёт null, и foo НЕ вызывается</li></ul><p>Короткое замыкание (short-circuit evaluation): если левый операнд falsy, результат уже определён, поэтому правый операнд вообще не вычисляется. Это значит, что побочные эффекты справа не сработают - на этом основано условное выполнение кода.</p><p>Практические применения:</p><ul><li>Условное выполнение: isReady && doSomething() - вызовет функцию только если isReady истинно</li><li>Guard перед обращением к свойству: obj && obj.prop (сейчас для этого чаще используют оптциональную цепочку ?.)</li><li>Условный рендеринг в JSX: cond && <Component/>. Подвох: если cond это 0 или "", в DOM попадёт само это значение (0 отрендерится как «0»), потому что && возвращает операнд, а не boolean</li></ul><p>Приоритет: && выше, чем ||, поэтому a || b && c трактуется как a || (b && c). И && и || ниже по приоритету, чем операторы сравнения.</p>',
    order: 4,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_operators_005',
    topicId: 'topic_js_operators',
    question: 'Как работает логический оператор ||(ИЛИ)',
    answer:
      '<p>Оператор || вычисляет операнды слева направо и возвращает сам операнд (исходное значение), а не обязательно true/false. Правило: возвращается первый truthy-операнд; если все операнды falsy - возвращается последний. Решение принимается по truthy/falsy.</p><p>Примеры:</p><ul><li>1 || 2 даёт 1 (первый truthy, вернулся он)</li><li>0 || 2 даёт 2 (первый falsy, ушли дальше)</li><li>null || 0 || "" даёт "" (все falsy, вернулся последний)</li><li>"a" || foo() даёт "a", и foo НЕ вызывается</li></ul><p>Короткое замыкание (short-circuit): если левый операнд truthy, результат уже определён, и правый операнд не вычисляется (его побочные эффекты не сработают).</p><p>Главное применение - значения по умолчанию: const name = inputName || "Аноним". Если слева falsy, берётся запасное значение.</p><p>Важный подвох этого приёма: || считает «пустыми» ВСЕ falsy-значения, включая 0, "" и false. Поэтому если 0 или пустая строка - валидные значения, они ошибочно заменятся на дефолт. Например count || 10 при count === 0 вернёт 10, что обычно не то, что нужно. Именно для этой проблемы создан оператор нулевого слияния ??, который реагирует только на null и undefined.</p><p>Нюанс приоритета (ES2021): || нельзя смешивать с ?? в одном выражении без скобок - a || b ?? c это SyntaxError. Так сделано намеренно, чтобы исключить неоднозначность; нужно явно расставлять скобки: (a || b) ?? c.</p>',
    order: 5,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_operators_006',
    topicId: 'topic_js_operators',
    question: 'Как работает логический оператор !(НЕ)',
    answer:
      '<p>Оператор ! приводит операнд к булеву значению (ToBoolean) и инвертирует его. Ключевая особенность: ! всегда возвращает настоящий boolean (true или false), а не операнд - этим он отличается от && и ||, которые возвращают одно из исходных значений.</p><p>Логика: !truthy даёт false, !falsy даёт true. Примеры:</p><ul><li>!0 даёт true, !"" даёт true, !null даёт true</li><li>!"abc" даёт false (непустая строка truthy)</li><li>![] даёт false и !{} даёт false - пустые массив и объект являются truthy. Это частый подвох (и основа выражения [] == ![])</li><li>!"false" даёт false - это непустая строка, а не булево false</li></ul><p>Двойное отрицание !! - идиоматический способ явно привести значение к boolean, эквивалент Boolean(x). Первое ! приводит к boolean с инверсией, второе возвращает к исходной логике: !!"abc" даёт true, !!0 даёт false, !!"" даёт false.</p><p>Приоритет: ! - унарный оператор, он выше арифметики и сравнений. Поэтому !a == b трактуется как (!a) == b, а не !(a == b).</p>',
    order: 6,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_operators_007',
    topicId: 'topic_js_operators',
    question: 'Что такое присваивание с действием (составное присваивание)?',
    answer:
      '<p>Составное (комбинированное) присваивание - это операторы, совмещающие операцию с присваиванием. В общем виде x op= y эквивалентно x = x op y. Работает не только с арифметикой.</p><p>Полный список:</p><ul><li>Арифметические: += , -= , *= , /= , %= , **=</li><li>Битовые: &= , |= , ^= , <<= , >>= , >>>=</li><li>Логические (ES2021): &&= , ||= , ??=</li></ul><p>Нюанс семантики: левый операнд вычисляется один раз. Для простой переменной это незаметно, но для obj[getKey()] += 1 функция getKey() вызовется только один раз, а не дважды.</p><p>+= наследует поведение бинарного +: если один из операндов строка, происходит конкатенация. s += 1 при строковом s склеит строки, а не сложит числа.</p><p>Логические присваивания работают с коротким замыканием (short-circuit) - это их главная особенность. Присваивание (и вычисление правой части) происходит только если выполнено условие:</p><ul><li>x ||= y - присвоит y, только если x falsy</li><li>x &&= y - присвоит y, только если x truthy</li><li>x ??= y - присвоит y, только если x равно null или undefined (nullish)</li></ul><p>Если условие не выполнено, правая часть вообще не вычисляется (её побочные эффекты не сработают, присваивание не произойдёт - что важно для геттеров/сеттеров). Типичное применение - инициализация по умолчанию без перезаписи существующего значения: obj.list ??= []; settings.x ||= "default".</p><p>Выражение присваивания возвращает присвоенное значение, поэтому присваивания можно объединять в цепочку: a = b = 5.</p>',
    order: 7,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_operators_008',
    topicId: 'topic_js_operators',
    question: 'Что такое тернарная операция?',
    answer:
      '<p>Правильное название - условный оператор (conditional operator). «Тернарным» его зовут потому, что у него три операнда, и это единственный тернарный оператор в JS, поэтому названия стали синонимами.</p><p>Синтаксис: условие ? значениеЕслиИстина : значениеЕслиЛожь. Условие приводится к boolean (по truthy/falsy); если истинно - вычисляется и возвращается второй операнд, если ложно - третий. Вычисляется только выбранная ветка, побочные эффекты невыбранной не срабатывают.</p><p>Ключевое отличие от if: тернарный оператор - это выражение, он ВОЗВРАЩАЕТ значение. Поэтому его можно использовать там, где нужно выражение, а if (инструкция/statement) - нельзя:</p><ul><li>в присваивании: const access = age >= 18 ? "yes" : "no"</li><li>в аргументе функции, в return</li><li>в шаблонном литерале и в JSX</li></ul><p>Правоассоциативность: цепочка тернарников группируется справа налево, что даёт аналог else if. a ? b : c ? d : e трактуется как a ? b : (c ? d : e). Работает, но вложенные тернарники сильно вредят читаемости - для нескольких веток обычно лучше if/else или switch.</p><p>Приоритет у оператора низкий (ниже сравнений и арифметики, но выше присваивания), поэтому условие со сравнением скобок не требует: x > 0 ? ... читается корректно.</p><p>Практический ориентир: тернарный оператор - для выбора ЗНАЧЕНИЯ, if/else - для ветвления ДЕЙСТВИЙ.</p>',
    order: 8,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_operators_009',
    topicId: 'topic_js_operators',
    question: 'Что делает оператор нулевого слияния? Отличие от ||(ИЛИ)',
    answer:
      '<p>Оператор нулевого слияния возвращает первое значение, которое не равно null/undefined.</p><p>Оператор ИЛИ работает так же, но приравнивает 0, пустую строку и false к null и undefined</p>',
    order: 9,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_operators_010',
    topicId: 'topic_js_operators',
    question: 'Как узнать к какому типу данных относится значение?',
    answer:
      '<p>Базовый инструмент - оператор typeof (пишется слитно, это оператор, а не функция). Возвращает строку с названием типа. Формы записи: typeof x или typeof(x).</p><p>Все возможные значения typeof:</p><ul><li>"undefined" - для undefined</li><li>"boolean", "number", "string", "bigint", "symbol" - для соответствующих примитивов</li><li>"function" - для функций</li><li>"object" - для объектов и для null</li></ul><p>Две знаменитые особенности typeof:</p><ul><li>typeof null === "object" - историческая ошибка языка (null - примитив, а не объект)</li><li>typeof (function(){}) === "function" - хотя функция не является отдельным языковым типом (это вызываемый объект), typeof выделяет её особым случаем для удобства</li></ul><p>Главное ограничение: typeof не различает объекты между собой. Массив, обычный объект, Date, RegExp, Map - всё даёт "object". Для уточнения нужны другие средства.</p><p>Полезное свойство: typeof безопасен для необъявленных переменных - typeof undeclaredVar возвращает "undefined" без ошибки (единственный оператор с таким поведением). Но есть исключение: для переменных let/const в «мёртвой зоне» (TDZ, до строки объявления) typeof бросает ReferenceError, а не возвращает "undefined".</p><p>Способы определить тип точнее, где typeof бессилен:</p><ul><li>Array.isArray(x) - надёжная проверка на массив</li><li>x instanceof Constructor - проверка по цепочке прототипов (Date, RegExp, свои классы). Минус - не работает между разными realm (iframe, окна), так как там другие конструкторы</li><li>Object.prototype.toString.call(x) - возвращает строку вида "[object Type]": "[object Array]", "[object Date]", "[object Null]", "[object RegExp]". Самый надёжный способ получить внутренний тег типа; на него опирается определение «настоящего» типа объекта (тег можно настроить через Symbol.toStringTag)</li><li>x.constructor - иногда используют, но ненадёжно: свойство можно перезаписать, а у объектов с null-прототипом его нет</li></ul>',
    order: 10,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_operators_011',
    topicId: 'topic_js_operators',
    question: 'Что делает операция delete?',
    answer:
      '<p>Оператор delete удаляет собственное свойство объекта. Возвращает boolean: true, если свойство удалено или его не было, и false, если свойство неудаляемое (определено с configurable: false). В строгом режиме попытка удалить неудаляемое свойство бросает TypeError.</p><p>Что delete НЕ делает (важные ограничения):</p><ul><li>Удаляет только собственные свойства, прототип не трогает: delete obj.toString ничего не удалит, потому что toString живёт в прототипе</li><li>Не удаляет переменные, функции и параметры: delete x для переменной возвращает false (а в строгом режиме это вообще SyntaxError)</li><li>Не удаляет неконфигурируемые свойства, в том числе многие встроенные (например length у массива)</li></ul><p>Поведение с массивами: delete удаляет элемент, но оставляет на его месте дырку (массив становится разреженным), а length НЕ меняется и элементы не сдвигаются. delete arr[1] из [1,2,3] даёт [1, empty, 3] с длиной 3. Поэтому для реального удаления элементов массива используют splice или filter, а не delete.</p><p>Связь с in и for...in: после delete свойство исчезает и из проверки in, и из перебора for...in. Это отличает delete от присваивания undefined: obj.x = undefined оставляет свойство (in вернёт true, ключ останется в переборе), а delete obj.x убирает его полностью.</p><p>Нюанс производительности: в движках вроде V8 объекты оптимизируются через скрытые классы (hidden classes). delete может перевести объект в «медленный» режим (деоптимизация). Если важна производительность и не нужно убирать сам ключ, иногда выгоднее присвоить undefined, чем делать delete.</p><p>Граничные случаи: delete для несуществующего свойства возвращает true (delete obj.notExist), delete для не-объекта тоже true (delete 5) - ошибки нет.</p>',
    order: 11,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_operators_012',
    topicId: 'topic_js_operators',
    question: 'Что делает операция запятая?',
    answer:
      '<p>Оператор запятая вычисляет оба операнда слева направо и возвращает значение последнего (правого). Левый операнд вычисляется ради его побочного эффекта, а его результат отбрасывается. Например (a, b, c) вычислит a, b, c по порядку и вернёт c.</p><p>Ключевой нюанс - у оператора запятая самый низкий приоритет среди всех операторов. Поэтому при присваивании скобки обязательны: let x = (1, 2, 3) даёт x === 3, а let x = 1, 2, 3 - это уже не оператор запятая, а синтаксис объявления нескольких переменных.</p><p>Где реально применяется:</p><ul><li>В заголовке цикла for для нескольких счётчиков: for (let i = 0, j = 10; i < j; i++, j--) - здесь i++, j-- это оператор запятая</li><li>В минифицированном коде - минификаторы склеивают несколько выражений в одно через запятую</li><li>Трюк косвенного вызова (0, obj.method)() - вызывает функцию, «оторвав» её от объекта, из-за чего this становится undefined/глобальным, а не obj. Встречается в собранном бандлами коде</li></ul><p>Важно не путать оператор запятая с запятой-разделителем - это синтаксис разных конструкций, а не оператор:</p><ul><li>аргументы вызова: f(a, b)</li><li>элементы массива: [1, 2, 3]</li><li>свойства объекта: { a: 1, b: 2 }</li><li>объявление нескольких переменных: let a = 1, b = 2</li><li>параметры функции</li></ul><p>В этих местах запятая - часть грамматики конструкции, и оператором запятая не является.</p>',
    order: 12,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_operators_013',
    topicId: 'topic_js_operators',
    question: 'Что такое опциональная цепочка (?.)? Как работает?',
    answer:
      '<p>Опциональная цепочка ?. (optional chaining, ES2020) - оператор для безопасного доступа к свойствам, элементам и вызова методов, когда промежуточное значение может быть null или undefined. Если слева от ?. стоит nullish-значение, выражение немедленно возвращает undefined вместо выброса ошибки.</p><p>Три формы:</p><ul><li>Доступ к свойству: a?.b - если a равно null/undefined, вернёт undefined, иначе a.b</li><li>Доступ по ключу/индексу: a?.[key], arr?.[i]</li><li>Вызов функции/метода: a?.() и obj.method?.() - вызовет, только если функция существует (не nullish)</li></ul><p>Короткое замыкание всей цепочки: если проверка сработала (слева nullish), то ВСЯ остальная часть цепочки не вычисляется. user?.address.street - если user равен null, обращение к .address.street не происходит, побочные эффекты и вызовы дальше по цепочке не срабатывают.</p><p>Важные нюансы:</p><ul><li>?. реагирует только на nullish (null и undefined), но не на другие falsy: для 0, "", false доступ к свойству идёт как обычно</li><li>?. проверяет на nullish именно значение СЛЕВА от себя, а не всю переменную: a?.b.c защищает от nullish a, но НЕ от nullish a.b - если a.b окажется null, обращение к .c всё равно бросит ошибку. Защищать нужно каждое звено: a?.b?.c</li><li>Нельзя использовать слева от присваивания: a?.b = 1 - синтаксическая ошибка</li><li>Переменная должна быть объявлена: undeclaredVar?.x всё равно бросит ReferenceError (?. не спасает от отсутствия объявления)</li></ul><p>Отличие от guard через &&: раньше писали a && a.b && a.b.c. Разница в том, что && возвращает промежуточный операнд (например 0 или ""), а ?. всегда возвращает undefined при срабатывании, и проверяет именно на nullish, а не на truthy. Часто ?. комбинируют с ?? для значения по умолчанию: user?.name ?? "Гость".</p>',
    order: 13,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_operators_014',
    topicId: 'topic_js_operators',
    question: 'Какие есть битовые операторы? Как работают?',
    answer:
      "<p>Битовые операторы работают с двоичным представлением чисел. Ключевая особенность в JS: операнды сначала приводятся к 32-битному знаковому целому (со старшим битом как знак, дополнительный код / two's complement), операция выполняется побитово, результат возвращается как обычный number. Дробная часть отбрасывается, числа за пределами 32 бит теряют старшие биты.</p><p>Операторы:</p><ul><li>& (И) - бит результата 1, если оба бита 1</li><li>| (ИЛИ) - бит 1, если хотя бы один бит 1</li><li>^ (XOR, исключающее ИЛИ) - бит 1, если биты разные</li><li>~ (НЕ, инверсия) - инвертирует все биты. Из-за знакового представления ~n === -(n+1): ~5 === -6</li><li>&lt;&lt; (сдвиг влево) - сдвигает биты влево, заполняя нулями (умножение на 2^n)</li><li>&gt;&gt; (знаковый сдвиг вправо) - сдвигает вправо, сохраняя знак (старший бит копируется)</li><li>&gt;&gt;&gt; (беззнаковый сдвиг вправо) - сдвигает вправо, заполняя нулями, трактует число как беззнаковое. Единственный оператор, дающий результат в диапазоне беззнакового 32-битного</li></ul><p>Практические трюки:</p><ul><li>n | 0 и ~~n - быстрое отбрасывание дробной части (аналог Math.trunc для 32-битных): ~~4.7 === 4. Но осторожно: работает только в пределах 32 бит</li><li>n >>> 0 - приведение к беззнаковому 32-битному целому (используют для индексов, хешей)</li><li>a ^ b ^ b === a - XOR обратим, основа простых шифров и обмена значений без временной переменной</li><li>(n & 1) === 1 - проверка нечётности</li><li>Битовые флаги/маски - хранение набора boolean-настроек в одном числе</li></ul><p>Ограничения: из-за приведения к 32 битам битовые операторы нельзя применять к большим целым как number - для них есть отдельная поддержка у BigInt (& | ^ ~ << >> работают с bigint, но >>> для BigInt не определён, так как у него нет фиксированной разрядности).</p>",
    order: 14,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_operators_015',
    topicId: 'topic_js_operators',
    question: 'Как работает оператор возведения в степень (**)?',
    answer:
      '<p>Оператор ** (ES2016) возводит левый операнд в степень правого: 2 ** 10 === 1024. Эквивалент Math.pow(2, 10), но как оператор. Работает и с дробными/отрицательными степенями: 2 ** -1 === 0.5, 4 ** 0.5 === 2 (корень).</p><p>Особенность 1 - правоассоциативность. В отличие от большинства бинарных операторов, ** группируется справа налево: 2 ** 3 ** 2 вычисляется как 2 ** (3 ** 2) === 2 ** 9 === 512, а не (2 ** 3) ** 2 === 64. Это соответствует математической записи степенной башни.</p><p>Особенность 2 - запрет унарного минуса слева без скобок. -2 ** 2 это SyntaxError. Причина - неоднозначность: непонятно, это -(2 ** 2) === -4 или (-2) ** 2 === 4. Язык требует явных скобок: (-2) ** 2 или -(2 ** 2).</p><p>Работает с BigInt: 2n ** 3n === 8n. Но смешивать с number нельзя (как и в другой арифметике): 2n ** 2 бросает TypeError.</p><p>Существует форма присваивания **= : x **= 2 возводит x в квадрат.</p>',
    order: 15,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_operators_016',
    topicId: 'topic_js_operators',
    question: 'Что делает оператор void?',
    answer:
      '<p>Унарный оператор void вычисляет своё выражение и всегда возвращает undefined, отбрасывая результат выражения. void любое_выражение === undefined.</p><p>Зачем нужен:</p><ul><li>void 0 - надёжный способ получить гарантированный undefined. Исторически это было важно, потому что в старом коде идентификатор undefined можно было перезаписать (он не был защищён). void 0 всегда даёт настоящий undefined независимо от окружения. Многие минификаторы заменяют undefined на void 0, ещё и потому что он короче</li><li>javascript:void(0) в href ссылки - выполнить выражение, но не дать браузеру перейти по ссылке (результат undefined, навигации не происходит). Сейчас считается устаревшим приёмом</li><li>В стрелочных функциях для гарантии возврата undefined: onClick={() => void doSomething()} - если doSomething вернёт промис или значение, void отбросит его. Полезно, чтобы случайно не вернуть из обработчика «truthy» или промис там, где это меняет поведение (например в обработчиках событий или чтобы не передавать промис туда, где ждут void)</li></ul><p>void именно вычисляет выражение (побочные эффекты срабатывают), но результат гарантированно undefined - этим он отличается от простого игнорирования.</p>',
    order: 16,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_operators_017',
    topicId: 'topic_js_operators',
    question: 'Что делает инкремент и декремент? Какие бывают формы',
    answer:
      '<p>Инкремент (++) увеличивает значение переменной на 1, декремент (--) уменьшает на 1. У каждого две формы - префиксная и постфиксная, и различаются они тем, какое значение возвращает выражение (само изменение происходит одинаково):</p><ul><li>Префиксная (++x): сначала изменяет, затем возвращает уже НОВОЕ значение</li><li>Постфиксная (x++): сначала возвращает СТАРОЕ значение, и только потом изменяет переменную</li></ul><p>Примеры:</p><ul><li>let a = 5; let b = a++ - результат: b === 5 (старое), a === 6</li><li>let c = 5; let d = ++c - результат: d === 6 (новое), c === 6</li></ul><p>Если результат выражения не используется (отдельная инструкция, счётчик в for), формы эквивалентны: i++ и ++i в for(...; ...; i++) делают одно и то же.</p><p>Приведение типов: операнд приводится к числу (ToNumber). Поэтому:</p><ul><li>let s = "5"; s++ даёт число 6 (строка стала числом)</li><li>применение к нечисловой строке даёт NaN: let x = "abc"; x++ - x станет NaN</li><li>с BigInt работает: let n = 5n; n++ даёт 6n</li></ul><p>Операнд обязан быть присваиваемым (lvalue) - переменной, свойством или элементом массива. Применить к литералу или выражению нельзя: 5++ и (a + b)++ - синтаксическая ошибка. А obj.x++ и arr[i]++ работают.</p><p>Нюанс ASI (автоматической вставки точки с запятой): между операндом и постфиксным ++ нельзя переносить строку - интерпретатор вставит точку с запятой, и операторы разъедутся, изменив смысл кода.</p>',
    order: 17,
    createdAt: NOW,
    updatedAt: NOW,
  },

  // JavaScript: Переменные, область видимости, hoisting (slug: variables-scope-hoisting, topicId: topic_js_scope) — 9 вопрос(ов)
  {
    id: 'q_variables_scope_hoisting_001',
    topicId: 'topic_js_scope',
    question: 'В чём отличие let и const?',
    answer:
      '<p>Главное различие: const создаёт неизменяемую привязку (binding) - переменную, объявленную через const, нельзя переприсвоить. Важно понимать, что это запрет на переприсваивание самой переменной, а НЕ требование неизменяемости значения.</p><ul><li>Для примитивов это выглядит как настоящая константа: const x = 5; x = 6 бросает TypeError</li><li>Для объектов привязка неизменна, но сам объект мутабелен: можно менять его свойства (obj.prop = 1, arr.push(...)), нельзя только заменить сам объект (obj = {} бросает ошибку)</li></ul><p>Различия в инициализации:</p><ul><li>const требует присвоить значение сразу при объявлении: const x; - SyntaxError</li><li>let можно объявить без значения, тогда переменная будет undefined: let x; - валидно</li></ul><p>Нюанс с циклами:</p><ul><li>for (const item of arr) и for (const key in obj) работают - на каждой итерации создаётся новая привязка</li><li>классический for (const i = 0; i < 3; i++) НЕ работает - бросает TypeError на i++, потому что счётчик переприсваивается. Здесь нужен let</li></ul><p>Что у let и const общего (и отличает обоих от var): блочная область видимости, временная мёртвая зона (TDZ) при обращении до объявления, запрет повторного объявления в той же области, и они не становятся свойствами глобального объекта.</p><p>Важно: для настоящей неизменяемости объекта const недостаточно - нужен Object.freeze (и то он поверхностный). Практика: по умолчанию используют const, а let берут только когда переменную действительно нужно переприсваивать.</p>',
    order: 1,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_variables_scope_hoisting_002',
    topicId: 'topic_js_scope',
    question: 'Что такое области видимости (Scope)?',
    answer:
      '<p>Область видимости - это часть программы, в которой доступна (видна) переменная, функция или объект. Вне своей области имя недоступно. Виды областей:</p><ol><li>Глобальная - самый внешний уровень. Переменные доступны везде</li><li>Функциональная - тело функции. Переменные доступны только внутри функции. Важно: var имеет ТОЛЬКО функциональную область и игнорирует блоки</li><li>Блочная - любой блок в фигурных скобках { } (тело if, цикла, или просто отдельный блок). Переменные let и const видны только внутри этого блока</li><li>Модульная - переменные верхнего уровня модуля видны только внутри него; наружу отдаются через export</li></ol><p>Главный механизм - лексическая (статическая) область видимости. Это значит, что область определяется МЕСТОМ ОБЪЯВЛЕНИЯ в коде (где функция физически написана), а не местом её вызова. Вложенная функция всегда видит переменные той области, где она была определена, независимо от того, откуда её потом вызвали. Противоположный подход - динамическая область (зависела бы от места вызова) - в JS не используется. Именно на лексической области строятся замыкания.</p><p>Цепочка областей видимости (scope chain) и разрешение имён: когда мы обращаемся к переменной, движок ищет её сначала в текущей области, затем во внешней (родительской), затем выше - и так до глобальной. Используется первое найденное объявление; если нигде не нашлось - ReferenceError (при чтении).</p><p>Затенение (shadowing): если во внутренней области объявлена переменная с тем же именем, что и во внешней, она перекрывает внешнюю - доступ идёт к ближайшей по цепочке.</p><p>На уровне спецификации scope реализован через лексическое окружение (Lexical Environment): структуру, которая хранит переменные текущей области (Environment Record) и ссылку на внешнее окружение - эта цепочка ссылок и есть scope chain. Подробнее эта механика разбирается в вопросе про контекст выполнения.</p>',
    order: 2,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_variables_scope_hoisting_003',
    topicId: 'topic_js_scope',
    question: 'В чём отличие let и var?',
    answer:
      '<p>Несколько принципиальных отличий.</p><p>1. Область видимости. var имеет функциональную область (а вне функций - глобальную) и ИГНОРИРУЕТ блоки: переменная, объявленная через var внутри if или цикла, видна и снаружи блока - if (true) { var x = 1 } оставляет x доступной за пределами if. let и const имеют блочную область видимости и существуют только внутри своего блока { }.</p><p>2. Hoisting и инициализация. Оба вида объявлений всплывают (поднимаются в начало области), но ведут себя по-разному:</p><ul><li>var при подъёме сразу инициализируется значением undefined - поэтому обращение к ней до строки объявления возвращает undefined, без ошибки</li><li>let и const тоже поднимаются, но НЕ инициализируются - они попадают во временную мёртвую зону (TDZ, temporal dead zone) от начала блока до строки объявления. Любое обращение к ним в этой зоне бросает ReferenceError. Даже typeof в TDZ бросает ошибку (а не возвращает "undefined")</li></ul><p>3. Повторное объявление. var можно объявить повторно в той же области - ошибки не будет. let и const повторно объявить нельзя - SyntaxError.</p><p>4. Связь с глобальным объектом. На верхнем уровне var создаёт свойство глобального объекта: var x = 1 делает window.x === 1 (в браузере, обычный скрипт). let и const свойствами глобального объекта НЕ становятся, хотя и являются глобальными переменными.</p><p>Классический подвох с циклами и замыканиями: for (var i ...) создаёт ОДНУ переменную i на весь цикл, поэтому все колбэки, созданные в цикле, увидят её финальное значение. for (let i ...) создаёт НОВУЮ привязку i на каждой итерации, и каждый колбэк захватывает своё значение. Это типичная причина бага «все обработчики выводят последнее число».</p><p>На практике var считается устаревшим и в новом коде не используется - по умолчанию берут const, а let когда нужно переприсваивание.</p>',
    order: 3,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_variables_scope_hoisting_004',
    topicId: 'topic_js_scope',
    question: 'Можно ли использовать необъявленную переменную?',
    answer:
      '<p>Нужно различать два случая - чтение и присваивание, они ведут себя по-разному.</p><p>Чтение необъявленной переменной всегда бросает ReferenceError - и в строгом, и в нестрогом режиме. console.log(x) при необъявленной x - ошибка везде.</p><p>Присваивание необъявленной переменной зависит от режима:</p><ul><li>В нестрогом режиме - молча создаётся свойство глобального объекта. Это называют неявными (случайными) глобальными переменными - частый источник багов, например из-за опечатки в имени</li><li>В строгом режиме - бросается ReferenceError</li></ul><p>Тонкость: неявная глобальная - это не настоящая переменная-объявление, а именно свойство глобального объекта. Поэтому, в отличие от var, оно configurable - его можно удалить через delete. Объявленные же через var глобальные свойства удалить нельзя.</p><p>Исключение - оператор typeof: typeof undeclaredVar возвращает "undefined" без ошибки в обоих режимах. Это единственный безопасный способ проверить необъявленное имя. Но и тут есть оговорка: для переменных let/const в TDZ (до строки объявления) typeof всё равно бросит ReferenceError.</p><p>Именно ради отлова случайных глобальных и был введён строгий режим: он превращает молчаливое создание глобальной переменной в явную ошибку.</p>',
    order: 4,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_variables_scope_hoisting_005',
    topicId: 'topic_js_scope',
    question: 'Что такое всплытие (hoisting)',
    answer:
      '<p>Hoisting (всплытие) - это механизм, при котором объявления становятся «известны» движку до фактического выполнения кода, поэтому к ним можно обращаться выше места объявления. Важно понимать: физически код никуда не перемещается. Просто движок обрабатывает область видимости в две фазы:</p><ol><li>Фаза создания - движок сканирует область и регистрирует все объявления (переменные, функции, классы) в лексическом окружении</li><li>Фаза выполнения - код исполняется построчно</li></ol><p>«Всплытие» - это видимый эффект первой фазы. Разные виды объявлений всплывают по-разному:</p><ul><li>Function Declaration (function foo(){}) - всплывает ПОЛНОСТЬЮ, вместе с телом. Поэтому функцию можно вызвать до её объявления в коде</li><li>var - всплывает только объявление, переменная сразу инициализируется значением undefined. Само присваивание остаётся на своём месте, поэтому до него переменная равна undefined (ошибки нет)</li><li>let и const - всплывают, но НЕ инициализируются: попадают во временную мёртвую зону (TDZ). Обращение до строки объявления бросает ReferenceError</li><li>class - тоже всплывает, но, как let/const, находится в TDZ. Частое заблуждение, что классы «не всплывают» - всплывают, но недоступны до объявления</li><li>Function Expression, стрелочные функции, методы - сами по себе НЕ всплывают как функции. Они подчиняются правилам своей переменной: const fn = () => {} - это const, до объявления fn в TDZ; var fn = function(){} - до присваивания fn равна undefined, и попытка вызвать её там даёт TypeError (fn is not a function)</li></ul><p>Приоритет при конфликте имён: function declarations регистрируются раньше и «сильнее» var. Если в одной области есть и var, и функция с тем же именем, поднятая функция не затирается поднятием var (хотя последующее присваивание в коде, конечно, переопределит значение).</p><p>Нюанс блоков: в строгом режиме function declaration внутри блока { } имеет блочную область видимости - всплывает только в пределах этого блока, а не всей функции.</p>',
    order: 5,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_variables_scope_hoisting_006',
    topicId: 'topic_js_scope',
    question: 'Что такое временная мёртвая зона (TDZ)?',
    answer:
      '<p>Временная мёртвая зона (Temporal Dead Zone, TDZ) - это участок кода от начала области видимости до строки объявления переменной let, const или class, внутри которого переменная уже существует (всплыла), но ещё не инициализирована. Любое обращение к ней в этой зоне бросает ReferenceError.</p><p>Ключевое отличие от var: var при всплытии сразу получает значение undefined, поэтому к ней можно обращаться до объявления без ошибки. А let/const всплывают, но остаются в «неинициализированном» состоянии до строки объявления - это и есть TDZ.</p><pre>console.log(x); // ReferenceError - x в TDZ\nlet x = 5;      // здесь TDZ для x заканчивается</pre><p>Важные нюансы:</p><ul><li>«Temporal» (временная), а не «spatial» - зона определяется не местом в коде, а моментом выполнения. Переменная выходит из TDZ, когда выполнение доходит до её объявления, а не когда курсор «физически» проходит строку. Поэтому функция, объявленная до let, но вызванная после - сработает нормально</li><li>typeof не спасает: typeof x в TDZ бросает ReferenceError, хотя для вообще необъявленных переменных typeof безопасно возвращает "undefined"</li><li>В TDZ находятся и параметры со значениями по умолчанию, ссылающиеся на ещё не объявленный параметр: function f(a = b, b) {} - вызов f() даст ошибку, потому что b в TDZ на момент вычисления a</li><li>class тоже подчиняется TDZ</li></ul><p>Зачем введена: TDZ превращает обращение к переменной до её инициализации в явную ошибку. Это помогает ловить логические баги (использование значения раньше, чем оно задано) и делает поведение const логичным - к константе в принципе не должно быть доступа до присвоения значения.</p>',
    order: 6,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_variables_scope_hoisting_007',
    topicId: 'topic_js_scope',
    question: 'Как работают ES-модули? import и export?',
    answer:
      '<p>ES-модули (ESM) - стандартная система модулей JavaScript (ES2015). Каждый файл-модуль имеет собственную область видимости; всё, что не экспортировано, наружу не видно. В браузере подключается через script type="module".</p><p>Виды экспорта:</p><ul><li>Именованный (named): export const a = 1; export function f(){} - или списком export { a, f }. Импортируется по точному имени: import { a, f } from "./mod.js". Можно переименовать: import { a as x }</li><li>Экспорт по умолчанию (default): export default ... - один на модуль. Импортируется без фигурных скобок с любым именем: import Whatever from "./mod.js"</li><li>Можно совмещать named и default в одном модуле</li><li>Namespace-импорт: import * as ns from "./mod.js" - собирает все именованные экспорты в объект ns</li><li>Реэкспорт: export { x } from "./other.js"</li></ul><p>Ключевые свойства ESM:</p><ul><li>Статичность: import и export должны быть на верхнем уровне модуля и не могут зависеть от условий выполнения. Благодаря этому зависимости известны до выполнения - возможны статический анализ и tree-shaking (удаление неиспользуемого кода)</li><li>Hoisting импортов: импорты всплывают - модуль-зависимость загружается и выполняется до кода текущего модуля</li><li>Живые привязки (live bindings): импорт - это не копия значения, а живая ссылка на переменную из модуля-источника. Если там значение изменится, импортирующая сторона увидит новое. При этом импортированные привязки доступны только для чтения - переприсвоить import нельзя</li><li>Единственное выполнение (single evaluation): модуль выполняется один раз при первом импорте, результат кешируется; последующие импорты переиспользуют его</li><li>Строгий режим включён всегда, автоматически</li><li>Свой this: на верхнем уровне модуля this равен undefined (а не глобальному объекту)</li></ul>',
    order: 7,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_variables_scope_hoisting_008',
    topicId: 'topic_js_scope',
    question: 'Чем ES-модули отличаются от CommonJS?',
    answer:
      '<p>CommonJS (CJS) - модульная система Node.js, появившаяся до стандартных ES-модулей. ESM - стандарт языка. Основные отличия:</p><p>Синтаксис:</p><ul><li>CJS: подключение через require("./mod"), экспорт через module.exports = ... или exports.foo = ...</li><li>ESM: import / export</li></ul><p>Время разрешения (главное отличие):</p><ul><li>CJS - динамический и синхронный: require - это обычный вызов функции, выполняется в момент исполнения строки. Можно вызывать require условно, внутри if, с вычисляемым путём</li><li>ESM - статический: импорты разрешаются до выполнения кода (на этапе разбора модульного графа). Поэтому возможны tree-shaking и статический анализ, но обычный import нельзя поставить в условие</li></ul><p>Копия vs живая ссылка:</p><ul><li>CJS отдаёт КОПИЮ значения на момент require (для примитивов). Изменение экспортированной переменной в источнике не отразится у импортёра</li><li>ESM использует живые привязки (live bindings) - ссылку на актуальное значение</li></ul><p>Асинхронность и порядок:</p><ul><li>CJS загружается синхронно, module.exports формируется по мере выполнения. С циклическими зависимостями можно получить недозаполненный (частичный) exports</li><li>ESM строит граф зависимостей заранее и обрабатывает циклы аккуратнее за счёт живых привязок</li></ul><p>Прочее:</p><ul><li>В CJS доступны «магические» переменные require, module, exports, __dirname, __filename. В ESM их нет - вместо __dirname используют import.meta.url</li><li>ESM всегда в строгом режиме; в CJS - нет по умолчанию</li><li>В Node тип модуля определяется полем "type" в package.json ("module" или "commonjs") либо расширением .mjs / .cjs</li><li>Из ESM можно импортировать CJS, а вот require ESM-модуля напрямую не работает (ESM по своей природе асинхронен) - нужен динамический import()</li></ul>',
    order: 8,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_variables_scope_hoisting_009',
    topicId: 'topic_js_scope',
    question: 'Что такое динамический import() и top-level await?',
    answer:
      '<p>Динамический import() - функциоподобное выражение, позволяющее загрузить модуль во время выполнения, а не статически. В отличие от обычного import, его можно вызывать где угодно: в условии, в обработчике, с вычисляемым путём.</p><ul><li>Возвращает промис, который разрешается объектом пространства имён модуля (со всеми экспортами, включая default): const mod = await import("./mod.js"); mod.default, mod.named</li><li>Главное применение - ленивая загрузка (code splitting): подгрузить тяжёлый модуль только когда он реально нужен, уменьшая начальный бандл. Основа разбиения кода в сборщиках (Webpack, Vite)</li><li>Работает и в обычных скриптах, и в модулях</li></ul><p>Top-level await (ES2022) - возможность использовать await прямо на верхнем уровне ES-модуля, вне async-функции:</p><pre>// в модуле, без обёртки в async\nconst data = await fetch(url).then(r => r.json());\nexport { data };</pre><ul><li>Доступен ТОЛЬКО в ES-модулях (не в обычных скриптах и не в CommonJS)</li><li>Модуль с top-level await становится асинхронным: модули, которые его импортируют, ждут завершения его await перед своим выполнением. То есть он влияет на загрузку графа зависимостей</li><li>Типичные применения: дождаться динамического import() или fetch конфигурации, инициализировать соединение с БД, условно выбрать зависимость (const lib = await import(cond ? "./a.js" : "./b.js"))</li><li>Риск: может задержать запуск всего зависящего графа модулей, поэтому использовать осознанно</li></ul>',
    order: 9,
    createdAt: NOW,
    updatedAt: NOW,
  },

  // JavaScript: Управляющие конструкции (slug: control-flow, topicId: topic_js_control_flow) — 14 вопрос(ов)
  {
    id: 'q_control_flow_001',
    topicId: 'topic_js_control_flow',
    question: 'Что такое условные инструкции? Какие есть виды?',
    answer:
      '<p>Условные инструкции (conditional statements) выполняют или пропускают блоки кода в зависимости от истинности условия. Важно не путать термины: «условным оператором» в строгом смысле называют тернарный оператор ?: (это выражение, возвращающее значение), а if/switch - это инструкции (statements), которые управляют потоком выполнения, но значения не возвращают.</p><p>Виды:</p><ul><li>if - выполняет блок, если условие истинно</li><li>if/else - выбор из двух веток</li><li>цепочка else if - выбор из нескольких веток по порядку</li><li>switch/case - сопоставление одного значения с набором вариантов</li></ul><p>Условие в if приводится к boolean по правилам truthy/falsy - принимается любое значение, не только true/false. if ("text") выполнится (непустая строка truthy), if (0) - нет.</p><p>Ключевые нюансы switch:</p><ul><li>Сравнение строгое (===), без приведения типов. switch (1) не совпадёт с case "1" - это частый подвох</li><li>Fall-through (проваливание): если в case нет break (или return), выполнение «проваливается» в следующий case. Это можно использовать намеренно для группировки нескольких case с общим телом, но чаще это источник багов из-за забытого break</li><li>default - необязателен и может стоять не только в конце (хотя обычно ставят последним)</li><li>Область видимости общая на весь switch: let/const, объявленные в одном case, видны в других case и могут вызвать ошибку «уже объявлено» или попадание в TDZ. Решение - обернуть тело case в собственный блок { }</li></ul><p>Выбор между if и тернарным оператором: if - для ветвления действий, тернарник - когда нужно выбрать и вернуть значение (его можно встроить в выражение, в отличие от if).</p>',
    order: 1,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_control_flow_002',
    topicId: 'topic_js_control_flow',
    question: 'Что такое цикл, виды циклов?',
    answer:
      '<p>Цикл - конструкция, которая повторно выполняет блок кода. Циклы удобно разделить по назначению.</p><p>Циклы по счётчику и условию (управляются вручную заданным условием):</p><ul><li>for - классический цикл со счётчиком: инициализация, условие, шаг</li><li>while - повторяет, пока условие истинно; проверка перед итерацией</li><li>do/while - то же, но проверка после итерации, поэтому тело выполнится минимум один раз</li></ul><p>Циклы по коллекции (итерирующие):</p><ul><li>for...of - перебирает ЗНАЧЕНИЯ итерируемых объектов: массивов, строк, Map, Set, arguments и любых объектов с Symbol.iterator. По обычному объекту НЕ работает (бросит TypeError)</li><li>for...in - перебирает КЛЮЧИ объекта: перечислимые строковые свойства, включая унаследованные. Предназначен для объектов; на массивах технически работает, но не рекомендуется (даёт строковые индексы и может зацепить лишние свойства)</li></ul><p>Асинхронный цикл:</p><ul><li>for await...of - перебирает асинхронные итераторы (объекты с Symbol.asyncIterator), ожидая каждое значение. Используется для потоков данных и асинхронной генерации</li></ul><p>Ключевое различие for...of и for...in - частый источник путаницы: of идёт по значениям и только по итерируемым, in идёт по ключам и по любому объекту.</p><p>Альтернатива явным циклам - методы перебора массивов (forEach, map, filter, reduce и др.) в функциональном стиле. Они решают те же задачи, но их нельзя прервать через break (только forEach игнорирует break вовсе) - в отличие от настоящих циклов.</p><p>Управление потоком внутри циклов: break (прервать цикл) и continue (перейти к следующей итерации) работают во всех настоящих циклах, но НЕ в методах вроде forEach.</p>',
    order: 2,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_control_flow_003',
    topicId: 'topic_js_control_flow',
    question: 'Отличие while от do/while?',
    answer:
      '<p>Оба цикла повторяют тело, пока условие истинно. Различие - в моменте проверки условия:</p><ul><li>while - проверка ПЕРЕД телом (pre-test loop). Если условие изначально ложно, тело не выполнится ни разу</li><li>do/while - проверка ПОСЛЕ тела (post-test loop). Поэтому тело гарантированно выполняется минимум один раз, даже если условие сразу ложно</li></ul><p>Граничный пример: while (false) {} даёт 0 итераций, а do {} while (false) - ровно 1.</p><p>Синтаксический нюанс: конструкция do/while требует точку с запятой в конце - do {...} while (cond); - в отличие от while, где её нет. При опоре на автоматическую вставку точки с запятой это иногда приводит к неочевидным ошибкам.</p><p>Когда применяют do/while: когда тело нужно выполнить хотя бы раз до первой проверки - например запросить ввод и проверить его, показать меню, повторить попытку. На практике встречается редко, чаще используют while и for.</p>',
    order: 3,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_control_flow_004',
    topicId: 'topic_js_control_flow',
    question: 'Как работает цикл for?',
    answer:
      '<p>Цикл for объединяет в заголовке три части, разделённые точкой с запятой: for (инициализация; условие; обновление). Точный порядок выполнения:</p><ol><li>Инициализация - выполняется один раз перед началом цикла (обычно объявление счётчика)</li><li>Проверка условия - перед КАЖДОЙ итерацией. Если условие ложно, цикл завершается</li><li>Тело цикла - выполняется, если условие истинно</li><li>Обновление (afterthought) - выполняется ПОСЛЕ тела, затем снова шаг 2</li></ol><p>То есть проверка идёт до тела, а обновление - после. Важно не путать: условие проверяется перед итерацией, а счётчик меняется после неё.</p><p>Все три части необязательны:</p><ul><li>for (;;) {} - бесконечный цикл (пустое условие считается истинным)</li><li>можно опускать любую часть: for (; i < 5; i++), for (let i = 0; i < 5;) с обновлением внутри тела</li><li>несколько счётчиков задаются через оператор запятая: for (let i = 0, j = 10; i < j; i++, j--)</li></ul><p>Важный нюанс let vs var в счётчике:</p><ul><li>for (let i ...) создаёт НОВУЮ привязку i на каждой итерации (специальное правило спецификации). Поэтому замыкания, созданные в цикле, захватывают каждое своё значение i. И переменная видна только внутри цикла</li><li>for (var i ...) создаёт ОДНУ переменную на весь цикл, она имеет функциональную область и «утекает» наружу. Все замыкания увидят её финальное значение - классический баг</li></ul>',
    order: 4,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_control_flow_005',
    topicId: 'topic_js_control_flow',
    question: 'Что такое цикл for/of?',
    answer:
      '<p>for...of перебирает ЗНАЧЕНИЯ итерируемого объекта. Под капотом работает через протокол итерации: вызывает у объекта метод [Symbol.iterator](), получает итератор и последовательно дёргает его .next(), пока тот не вернёт done: true. Поэтому for...of работает с любым объектом, у которого есть Symbol.iterator.</p><p>Итерируемы из коробки:</p><ul><li>Array - по элементам</li><li>String - по символам (точкам кода / code points), поэтому корректно обрабатывает эмодзи и суррогатные пары, в отличие от перебора по индексу</li><li>Map - выдаёт пары [ключ, значение]</li><li>Set - по значениям</li><li>arguments, NodeList, TypedArray, генераторы</li></ul><p>Обычный объект НЕ итерируем - for...of по нему бросит TypeError. Чтобы перебрать объект, используют Object.keys(), Object.values() или Object.entries().</p><p>Отличия от других способов перебора:</p><ul><li>от for...in: of идёт по значениям и только по итерируемым; in идёт по ключам (строковым, включая унаследованные) и по любому объекту</li><li>от forEach: for...of поддерживает break, continue и return для управления циклом, а также корректно работает с await внутри тела. forEach всё это не умеет (break в нём не работает)</li></ul><p>Полезные приёмы:</p><ul><li>Индекс вместе со значением через entries(): for (const [i, val] of arr.entries())</li><li>Деструктуризация прямо в заголовке: for (const { id, name } of users), for (const [key, value] of map)</li></ul><p>Для асинхронных источников (объектов с Symbol.asyncIterator) существует парная конструкция for await...of, ожидающая каждое значение.</p>',
    order: 5,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_control_flow_006',
    topicId: 'topic_js_control_flow',
    question: 'Что такое итерируемые объекты?',
    answer:
      '<p>Итерируемость в JS строится на двух связанных протоколах.</p><p>1. Протокол Iterable (итерируемый объект). Объект итерируем, если у него есть метод с ключом Symbol.iterator, который возвращает итератор. Именно этот метод вызывают конструкции перебора, чтобы начать итерацию.</p><p>2. Протокол Iterator (итератор). Это объект с методом next(), который при каждом вызове возвращает объект вида { value, done }:</p><ul><li>done: false - value содержит очередное значение, итерация продолжается</li><li>done: true - итерация завершена</li></ul><p>Опционально итератор может иметь методы return() (досрочное завершение, например при break) и throw().</p><p>Различие iterable и iterator: iterable умеет ПРОИЗВОДИТЬ итераторы (через Symbol.iterator), а iterator ВЫДАЁТ значения (через next). Многие встроенные итераторы являются одновременно и iterable - их собственный Symbol.iterator возвращает this. Поэтому итератор массива (arr.values()) можно и самому передать в for...of.</p><p>Через этот протокол работает множество синтаксических конструкций - всё, что «понимает» итерируемые объекты:</p><ul><li>for...of</li><li>спред: [...iterable], f(...iterable)</li><li>деструктуризация массива: const [a, b] = iterable</li><li>Array.from(iterable), new Map(iterable), new Set(iterable)</li><li>Promise.all и подобные, yield* в генераторах</li></ul><p>Встроенные итерируемые: Array, String, Map, Set, TypedArray, arguments, NodeList, генераторы. Обычный объект НЕ итерируем.</p><p>Свой итерируемый объект делается реализацией Symbol.iterator. Пример - диапазон чисел:</p><pre>const range = {\n  from: 1, to: 3,\n  [Symbol.iterator]() {\n    let cur = this.from, last = this.to;\n    return { next: () => cur <= last ? { value: cur++, done: false } : { value: undefined, done: true } };\n  }\n};\n[...range] // [1, 2, 3]</pre><p>Самый простой способ создать итератор - генератор (function* с yield): он автоматически реализует оба протокола. Важная особенность итераторов - ленивость: значения вычисляются по требованию (на каждом next), что позволяет описывать даже бесконечные последовательности.</p>',
    order: 6,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_control_flow_007',
    topicId: 'topic_js_control_flow',
    question: 'Можно ли обойти объект с помощью for/of?',
    answer:
      '<p>Напрямую нет: обычный объект не итерируем, у него нет метода Symbol.iterator, поэтому for...of по нему бросает TypeError. Это сделано намеренно - чтобы язык не навязывал единственный способ перебора (по ключам? значениям? парам?) и не смешивал итерацию со свойствами. Но обойти объект можно несколькими способами.</p><p>Через статические методы Object + for...of:</p><ul><li>Object.keys(obj) - массив ключей, дальше for (const key of Object.keys(obj))</li><li>Object.values(obj) - массив значений</li><li>Object.entries(obj) - массив пар [ключ, значение]. Самый удобный вариант с деструктуризацией: for (const [key, value] of Object.entries(obj))</li></ul><p>Встроенный способ - цикл for...in: перебирает ключи объекта без промежуточного массива. Но у него своя специфика (см. ниже).</p><p>Важно понимать, что именно захватывает каждый способ:</p><ul><li>Object.keys/values/entries берут только СОБСТВЕННЫЕ строковые перечислимые свойства</li><li>for...in берёт строковые перечислимые свойства, но ВКЛЮЧАЯ унаследованные от прототипа - это главное отличие от Object.keys</li><li>символьные ключи не попадают ни в один из этих способов - для них нужен Object.getOwnPropertySymbols или Reflect.ownKeys</li><li>неперечислимые свойства видит только Object.getOwnPropertyNames</li></ul><p>Порядок перебоора у всех этих методов одинаковый: сначала целочисленные ключи по возрастанию, затем строковые в порядке добавления, затем символьные.</p><p>Альтернативы:</p><ul><li>Сделать объект итерируемым самому - добавить ему метод [Symbol.iterator], тогда for...of заработает напрямую</li><li>Если нужна именно итерируемая коллекция ключ-значение, лучше использовать Map - она итерируема из коробки и for...of по ней сразу даёт пары [ключ, значение]</li></ul>',
    order: 7,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_control_flow_008',
    topicId: 'topic_js_control_flow',
    question: 'Что такое цикл for/in? Все ли свойства перечисляет?',
    answer:
      '<p>Цикл for...in перебирает ключи объекта - его перечислимые (enumerable) свойства со строковыми именами. Ключевая особенность: он перечисляет НЕ только собственные, но и УНАСЛЕДОВАННЫЕ свойства - идёт по всей цепочке прототипов. Это главное отличие от Object.keys, который берёт только собственные свойства.</p><p>Что for...in НЕ перечисляет:</p><ul><li>символьные ключи (свойства с именем-Symbol)</li><li>неперечислимые свойства (enumerable: false). Поэтому встроенные методы из прототипов (toString и т.п.) в for...in не появляются - они неперечислимы</li></ul><p>Из-за обхода прототипа классическая защита - проверять, что свойство собственное:</p><pre>for (const key in obj) {\n  if (Object.hasOwn(obj, key)) { /* только собственные */ }\n}</pre><p>Раньше для этого использовали obj.hasOwnProperty(key), сейчас предпочтительнее Object.hasOwn.</p><p>for...in на массивах - антипаттерн. Причины:</p><ul><li>выдаёт индексы как СТРОКИ ("0", "1", ...), а не числа</li><li>может зацепить посторонние перечислимые свойства, добавленные в массив или в Array.prototype</li><li>пропускает дырки разреженного массива (в отличие от for...of, который вернёт на их месте undefined)</li></ul><p>Для массивов используют for...of, forEach или обычный for со счётчиком.</p><p>Порядок перечисления: сначала целочисленные ключи по возрастанию, затем строковые в порядке добавления. Символьные ключи for...in не обходит вовсе.</p>',
    order: 8,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_control_flow_009',
    topicId: 'topic_js_control_flow',
    question: 'Что такое метки (labels)?',
    answer:
      '<p>Метка - это идентификатор с двоеточием перед оператором (чаще всего перед циклом или блоком): labelName: оператор. Метка даёт оператору имя, на которое могут ссылаться break и continue. Только эти два оператора умеют работать с метками - произвольного goto в JS нет.</p><p>Зачем нужны: основной и по сути единственный практический случай - управление вложенными циклами. Обычный break/continue действует только на ближайший цикл, а с меткой можно выйти сразу из внешнего:</p><ul><li>break labelName - полностью прерывает помеченный цикл (выходит наружу из всех вложенных до него)</li><li>continue labelName - переходит к следующей итерации помеченного (внешнего) цикла</li></ul><pre>outer: for (let i = 0; i < 3; i++) {\n  for (let j = 0; j < 3; j++) {\n    if (условие) break outer; // выход из ОБОИХ циклов\n  }\n}</pre><p>Ограничения:</p><ul><li>continue с меткой обязан указывать на цикл - перейти к следующей итерации можно только у цикла</li><li>break с меткой может указывать и на цикл, и на любой помеченный блок { }: break из помеченного блока работает как ранний выход из этого блока</li></ul><p>На практике метки считаются признаком усложнённого кода (code smell) и обычно их избегают - вместо них выносят вложенные циклы в отдельную функцию и используют return, либо применяют флаги. Но как инструмент выхода из глубокой вложенности их полезно знать.</p>',
    order: 9,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_control_flow_010',
    topicId: 'topic_js_control_flow',
    question: 'Что делает оператор break?',
    answer:
      '<p>break немедленно прерывает выполнение и выходит за пределы конструкции. Оставшиеся итерации и код после break в теле не выполняются. Работает в трёх контекстах:</p><ul><li>В циклах (for, while, do/while, for...of, for...in) - полностью прерывает ближайший цикл</li><li>В switch - выходит из switch, предотвращая проваливание (fall-through) в следующие case. Это второе основное назначение break</li><li>С меткой - break labelName выходит из помеченного цикла или блока, что позволяет прервать сразу несколько вложенных циклов</li></ul><p>Важное ограничение: без метки break прерывает только ближайший уровень вложенности - для выхода из внешнего цикла нужна метка.</p><p>break НЕ работает в методах перебора массивов (forEach, map, filter, reduce и т.п.) - там это синтаксическая ошибка («Illegal break statement»), потому что тело метода - это отдельная callback-функция, а не тело цикла. Чтобы досрочно остановить перебор, используют:</p><ul><li>обычный цикл for или for...of (в них break работает)</li><li>методы, которые умеют останавливаться сами: some/every (останавливаются, когда callback вернул true/false соответственно), find/findIndex (останавливаются на первом совпадении)</li></ul><p>Использовать break вне цикла или switch нельзя - это синтаксическая ошибка.</p>',
    order: 10,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_control_flow_011',
    topicId: 'topic_js_control_flow',
    question: 'Что делает оператор continue?',
    answer:
      '<p>continue прекращает текущую итерацию цикла и переходит к следующей. Код после continue в теле цикла пропускается, но сам цикл продолжается (в отличие от break, который выходит из цикла полностью).</p><p>Нюанс «что именно происходит при переходе» зависит от цикла:</p><ul><li>В for после continue выполняется шаг обновления (afterthought, например i++), затем проверяется условие. То есть счётчик корректно инкрементируется</li><li>В while и do/while continue сразу переходит к проверке условия. Здесь подвох: если счётчик увеличивается ПОСЛЕ continue, он не обновится, и можно получить бесконечный цикл. Поэтому в while инкремент должен идти до continue</li></ul><p>Ограничения:</p><ul><li>continue работает только в циклах. В switch его использовать нельзя; если switch находится внутри цикла, continue относится к циклу, а не к switch</li><li>вне цикла - синтаксическая ошибка</li></ul><p>С меткой: continue labelName переходит к следующей итерации помеченного внешнего цикла - удобно во вложенных циклах. Метка для continue обязана указывать именно на цикл.</p><p>Как и break, continue НЕ работает в методах перебора (forEach, map и т.п.) - это callback-функции, а не циклы. Но там есть идиоматическая замена: внутри callback роль continue играет return - он завершает обработку текущего элемента и переходит к следующему вызову.</p>',
    order: 11,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_control_flow_012',
    topicId: 'topic_js_control_flow',
    question: 'Какими способами можно создать бесконечный цикл?',
    answer:
      '<p>Намеренные (идиоматические) бесконечные циклы - нормальный паттерн, из которого выходят изнутри через break, return или throw:</p><ul><li>while (true) {}</li><li>for (;;) {} - все три части заголовка опущены, пустое условие считается истинным</li><li>do {} while (true)</li></ul><p>Случайные бесконечные циклы (баги):</p><ul><li>Условие никогда не становится ложным из-за неверного шага: for (let i = 0; i < 5; i--) - счётчик уходит в другую сторону</li><li>continue до инкремента в while: счётчик не успевает увеличиться, и условие всегда истинно</li><li>Модификация коллекции во время перебора: в теле for...of добавлять новый элемент в перебираемый массив - итерация никогда не дойдёт до конца</li><li>Сравнение, которое из-за погрешности float никогда не выполнится точно: while (x !== 0.1) при накоплении дробных значений - в 0.1 ровно не попасть</li></ul><p>Ключевое последствие: синхронный бесконечный цикл полностью БЛОКИРУЕТ основной поток. JS однопоточный, поэтому страница зависает, вкладка перестаёт отвечать, а в Node процесс висит - ничего другое выполниться не может.</p><p>Этим бесконечный цикл важно отличать от похожих, но неблокирующих ситуаций:</p><ul><li>Бесконечная рекурсия НЕ виснет так же - она упрётся в ограничение стека вызовов и бросит RangeError: Maximum call stack size exceeded (стек конечен)</li><li>Бесконечный setInterval или рекурсивный setTimeout НЕ блокируют поток - они отдают управление обратно в event loop между вызовами, поэтому страница остаётся отзывчивой</li><li>Бесконечный цикл внутри генератора (function* с while(true) yield ...) безопасен - он ленивый, значения выдаются по одному на каждый next(), потока не блокирует</li></ul>',
    order: 12,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_control_flow_013',
    topicId: 'topic_js_control_flow',
    question: 'Что такое генераторы (function*, yield)?',
    answer:
      '<p>Генератор - особая функция, которая умеет приостанавливать и возобновлять своё выполнение, отдавая значения по одному. Объявляется через function* (звёздочка), а значения отдаёт оператором yield. Вызов генератора не выполняет его тело, а возвращает объект-генератор - он одновременно итератор и итерируемый.</p><p>Как работает:</p><ul><li>Каждый вызов .next() выполняет тело до ближайшего yield, возвращает { value: <значение yield>, done: false } и замораживает выполнение в этой точке (с сохранением всех локальных переменных)</li><li>Следующий .next() продолжает с места остановки</li><li>Когда тело завершается (или доходит до return), возвращается { value: <return или undefined>, done: true }</li></ul><pre>function* gen() {\n  yield 1;\n  yield 2;\n  return 3;\n}\nconst g = gen();\ng.next(); // { value: 1, done: false }\ng.next(); // { value: 2, done: false }\ng.next(); // { value: 3, done: true }  - значение return\ng.next(); // { value: undefined, done: true }</pre><p>Поскольку генератор - итерируемый, его можно перебирать через for...of и спред (значение из return при этом НЕ попадает в перебор - учитываются только yield).</p><p>yield* (делегирование) - передаёт управление другому генератору или итерируемому объекту, «вшивая» все его значения: yield* [1,2,3] отдаст 1, 2, 3 по очереди. Используется для композиции генераторов.</p><p>Двусторонняя связь - важная особенность: yield не только отдаёт значение наружу, но и может получать значение снаружи. Аргумент, переданный в .next(value), становится результатом выражения yield, на котором генератор был приостановлен:</p><pre>function* g() {\n  const x = yield "дай число";\n  console.log(x); // получит то, что передали в next()\n}\nconst it = g();\nit.next();      // запуск до первого yield\nit.next(42);    // x === 42</pre><p>Также у генератора есть методы .return(value) (досрочно завершить) и .throw(err) (вбросить исключение в точку yield).</p><p>Ленивость: значения вычисляются по требованию, поэтому генераторы позволяют описывать бесконечные или очень большие последовательности без затрат памяти (например бесконечный счётчик через while(true) yield i++).</p><p>Применение: создание итераторов без ручной реализации протокола, ленивые и бесконечные последовательности, корутины и управление потоком, обход древовидных структур. Существуют и асинхронные генераторы (async function*) для работы с for await...of.</p>',
    order: 13,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_control_flow_014',
    topicId: 'topic_js_control_flow',
    question: 'Как работает switch? Какие есть нюансы?',
    answer:
      '<p>switch сопоставляет значение выражения с набором вариантов case и выполняет код совпавшего варианта. Синтаксис: switch (выражение) { case значение: ...; break; default: ... }.</p><p>Ключевые нюансы:</p><ul><li>Сравнение СТРОГОЕ (===), без приведения типов. switch (1) не совпадёт с case "1" - это частый подвох, особенно при сравнении значений из input (там приходят строки)</li><li>Проваливание (fall-through): если в case нет break (или return/throw), выполнение «проваливается» в следующий case и продолжается там, пока не встретит break или конец switch</li><li>default срабатывает, если ни один case не совпал. Может стоять в любом месте (не обязательно последним), но по соглашению его пишут в конце. На default тоже распространяется fall-through</li></ul><p>Намеренный fall-through - легитимный приём для группировки нескольких case с общим телом:</p><pre>switch (day) {\n  case "сб":\n  case "вс":\n    return "выходной";\n  default:\n    return "будний";\n}</pre><p>Паттерн switch (true) - способ записать цепочку условий через switch: в case ставятся булевы выражения, а switch ищет первое, равное true:</p><pre>switch (true) {\n  case age < 18: return "ребёнок";\n  case age < 65: return "взрослый";\n  default: return "пенсионер";\n}</pre><p>Область видимости: все case делят один блок, поэтому let/const, объявленные в одном case, видны в других и могут вызвать ошибку «Identifier already declared» или попадание в TDZ. Решение - обернуть тело конкретного case в собственный блок { }:</p><pre>case 1: {\n  let x = 10;\n  break;\n}</pre><p>Когда веток много и они основаны на равенстве одного значения, switch читается лучше длинной цепочки if/else if. Но при сложных условиях (диапазоны, несколько переменных) обычно предпочитают if/else.</p>',
    order: 14,
    createdAt: NOW,
    updatedAt: NOW,
  },

  // JavaScript: Обработка ошибок (slug: error-handling, topicId: topic_js_errors) — 4 вопрос(ов)
  {
    id: 'q_error_handling_001',
    topicId: 'topic_js_errors',
    question: 'Что такое исключение?',
    answer:
      '<p>Исключение - это сигнал об ошибке во время выполнения, прерывающий нормальный ход программы. Исключения возникают в двух случаях:</p><ul><li>Автоматически - когда движок встречает ошибку выполнения (обращение к свойству null, вызов не-функции и т.п.). Создаётся объект ошибки с информацией о проблеме</li><li>Вручную - оператором throw, которым можно выбросить ошибку явно</li></ul><p>Объект ошибки (экземпляр Error) содержит:</p><ul><li>name - имя/тип ошибки</li><li>message - текстовое описание</li><li>stack - трассировка стека вызовов на момент создания (нестандартное свойство, но есть во всех движках) - главный инструмент отладки</li><li>cause (ES2022) - причина-первоисточник, для цепочки ошибок: new Error("обёртка", { cause: originalError })</li></ul><p>Встроенные типы ошибок (все наследуют Error):</p><ul><li>TypeError - значение не того типа (вызов не-функции, чтение свойства у null/undefined)</li><li>ReferenceError - обращение к несуществующей переменной</li><li>RangeError - значение вне допустимого диапазона (неверная длина массива, переполнение стека)</li><li>SyntaxError - синтаксическая ошибка. Обычно возникает на этапе разбора кода (до выполнения), поэтому обычным try/catch в том же скрипте не ловится; но появляется при JSON.parse и eval</li><li>URIError, EvalError, AggregateError (для Promise.any - объединяет несколько ошибок)</li></ul><p>throw может выбросить ЛЮБОЕ значение - строку, число, объект (throw "ошибка" валидно). Но это антипаттерн: теряется stack и ломается проверка instanceof Error. Хорошая практика - всегда бросать Error или его наследника. Для доменной логики создают свои классы: class ValidationError extends Error.</p><p>Что происходит при выбросе: исключение раскручивает стек вызовов (stack unwinding) - текущая функция немедленно прерывается, и исключение «всплывает» вверх по стеку вызовов, пока не встретит ближайший блок try/catch. Если обработчика нет нигде, исключение становится необработанным: в браузере оно логируется в консоль (поток продолжает работу), в Node по умолчанию завершает процесс.</p>',
    order: 1,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_error_handling_002',
    topicId: 'topic_js_errors',
    question: 'try/catch/finally, что делает и как?',
    answer:
      '<p>Базовый порядок работы:</p><ol><li>Выполняется код блока try</li><li>Если ошибок нет - блок catch пропускается</li><li>Если в try возникает ошибка - выполнение try немедленно прерывается, управление переходит в catch, куда передаётся объект ошибки</li><li>Блок finally, если он есть, выполняется в любом случае - и при успехе, и при ошибке</li></ol><p>Допустимые комбинации: try/catch, try/finally, try/catch/finally. Просто try без catch и finally - синтаксическая ошибка.</p><p>Optional catch binding (ES2019): параметр в catch можно опустить, если сам объект ошибки не нужен - catch { } вместо catch (e) { }.</p><p>Важнейший подвох - try/catch ловит только СИНХРОННЫЕ ошибки текущего стека. Он НЕ поймает:</p><ul><li>ошибку, брошенную в асинхронном колбэке: try { setTimeout(() => { throw new Error() }) } catch - не сработает, ошибка вылетит позже и мимо</li><li>отклонённый промис без await: try { fetch(url) } catch не поймает отказ. Нужно либо try { await fetch(url) } catch, либо .catch() на промисе</li></ul><p>Поэтому для асинхронного кода try/catch работает только в связке с await.</p><p>Тонкости finally:</p><ul><li>finally выполняется всегда, даже если в try или catch есть return, throw, break или continue - перед фактическим выходом сначала отработает finally</li><li>Опасный момент: return или throw внутри finally ПЕРЕКРЫВАЕТ return/throw из try и catch. Например return в finally «съест» брошенное ранее исключение и подменит результат. Поэтому управляющие операторы в finally - источник трудноуловимых багов</li></ul><p>Дополнительно:</p><ul><li>Проброс ошибки (rethrow): в catch можно частично обработать ошибку и бросить дальше через throw e - тогда её поймает внешний обработчик</li><li>catch ловит любое брошенное значение, не только Error. Поэтому надёжный код в catch проверяет тип: if (e instanceof Error) ...</li></ul>',
    order: 2,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_error_handling_003',
    topicId: 'topic_js_errors',
    question:
      'Что будет если интерпретатор выходит из блока try из-за оператора return, но есть блок finally?',
    answer:
      '<p>Базовое поведение: return в try не приводит к немедленному выходу. Сначала вычисляется возвращаемое значение, затем выполняется блок finally, и только после этого функция фактически возвращает уже вычисленное значение.</p><p>Ключевой нюанс - возвращаемое значение «замораживается» до finally. Выражение после return вычисляется ДО выполнения finally. Поэтому если finally меняет переменную, которая уже была вычислена для return, на результат это не повлияет (для примитивов):</p><pre>function f() {\n  let x = 1;\n  try { return x; }   // значение 1 уже снято\n  finally { x = 999; } // не влияет на возврат\n}\nf(); // 1</pre><p>Но для объекта возвращается ссылка, поэтому мутация объекта в finally будет видна снаружи:</p><pre>function f() {\n  const obj = { v: 1 };\n  try { return obj; }\n  finally { obj.v = 999; } // мутация видна\n}\nf().v; // 999</pre><p>Самый опасный случай - return внутри самого finally. Он ПОЛНОСТЬЮ перекрывает return из try и даже проглатывает исключение, если оно было брошено:</p><pre>function f() {\n  try { return 1; }\n  finally { return 2; } // вернётся 2, а 1 теряется\n}\nfunction g() {\n  try { throw new Error("боль"); }\n  finally { return "ок"; } // исключение проглочено, вернётся "ок"\n}</pre><p>Аналогично throw в finally перекрывает и return, и исключение из try.</p><p>Практический вывод: finally предназначен для очистки (закрыть соединение, снять блокировку, остановить таймер), а не для возврата значений или выбрасывания ошибок. return и throw в finally - источник трудноуловимых багов, их следует избегать.</p>',
    order: 3,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_error_handling_004',
    topicId: 'topic_js_errors',
    question: 'Как создавать свои классы ошибок (custom errors)?',
    answer:
      '<p>Свой тип ошибки создаётся наследованием от Error (или от его подкласса). Это позволяет различать ошибки по типу в catch и нести доменную информацию.</p><pre>class ValidationError extends Error {\n  constructor(message, field) {\n    super(message);        // задаёт this.message\n    this.name = "ValidationError";\n    this.field = field;    // своё доп. поле\n  }\n}</pre><p>Зачем это нужно:</p><ul><li>Различать ошибки в обработчике через instanceof: catch (e) { if (e instanceof ValidationError) ... else if (e instanceof NetworkError) ... }. Это чище, чем проверять строки в message</li><li>Прикреплять контекст: код ошибки, имя поля, HTTP-статус, исходную причину</li><li>Можно строить иерархию: class AppError extends Error, а от неё - конкретные типы</li></ul><p>Важные нюансы:</p><ul><li>name нужно задавать вручную - по умолчанию у наследника name унаследуется как "Error". Обычно присваивают this.name = "ValidationError" (или this.name = new.target.name для автоматизации)</li><li>super(message) обязателен и должен идти первым - он инициализирует message и stack</li><li>Свойство stack формируется корректно автоматически (в V8). При желании можно вызвать Error.captureStackTrace(this, ConstructorName), чтобы убрать конструктор из трассировки</li><li>Для передачи первопричины используют стандартный cause (ES2022): super(message, { cause: originalError }) - сохраняет цепочку ошибок</li></ul><p>Историческая тонкость (гик-факт): при транспиляции классов в ES5 (старый Babel/TypeScript с target es5) наследование от встроенного Error ломалось - instanceof CustomError возвращал false. Причина в том, что конструктор Error возвращал новый объект, игнорируя унаследованный прототип. Чинилось через Object.setPrototypeOf(this, new.target.prototype) в конструкторе. На современных движках (нативные классы) проблемы нет.</p>',
    order: 4,
    createdAt: NOW,
    updatedAt: NOW,
  },

  {
    id: 'q_error_handling_005',
    topicId: 'topic_js_error_types',
    question: 'Какие есть встроенные типы ошибок? Как устроена иерархия Error?',
    answer:
      '<p>Все встроенные ошибки наследуют от базового класса Error. От него происходят специализированные типы:</p><ul><li>TypeError - значение не того типа, которого ожидали (вызов не-функции, чтение свойства у null/undefined, изменение константы)</li><li>RangeError - значение вне допустимого диапазона (некорректная длина массива, превышение стека рекурсии, неверный radix у toString)</li><li>ReferenceError - обращение к несуществующей переменной (или к переменной в TDZ до объявления)</li><li>SyntaxError - некорректный синтаксис кода; бросается на этапе разбора, а также JSON.parse при невалидном JSON</li><li>URIError - неправильное использование функций работы с URI (decodeURIComponent с битой последовательностью)</li><li>EvalError - исторический, связан с eval, сейчас практически не используется</li><li>AggregateError - обёртка над НЕСКОЛЬКИМИ ошибками сразу; бросается Promise.any, когда отклонены все промисы (содержит массив errors)</li></ul><p>Свойства объекта ошибки:</p><ul><li>name - имя типа ошибки ("TypeError" и т.д.)</li><li>message - текстовое описание, переданное в конструктор</li><li>stack - строка стека вызовов на момент создания ошибки (нестандартизированное, но есть везде; полезно для отладки и логирования)</li></ul><p>Error.cause (ES2022) - возможность указать первопричину при перевыбрасывании, сохранив исходную ошибку:</p><pre>try {\n  // ...\n} catch (err) {\n  throw new Error("Не удалось загрузить данные", { cause: err });\n}</pre><p>Это решает давнюю проблему потери контекста: верхнеуровневая ошибка несёт ссылку на низкоуровневую через свойство cause - выстраивается цепочка причин.</p><p>Проверка типа ошибки - через instanceof:</p><pre>try { /* ... */ }\ncatch (err) {\n  if (err instanceof TypeError) { /* ... */ }\n  else if (err instanceof RangeError) { /* ... */ }\n  else throw err; // не наше - пробрасываем дальше\n}</pre><p>Важная практика: в catch стоит обрабатывать только ожидаемые типы ошибок, а неожиданные - пробрасывать дальше (re-throw), а не «глотать». Также в современном JS можно писать catch без параметра (catch {}), если объект ошибки не нужен. Свои классы ошибок наследуют от Error (или его наследников) - подробнее в вопросе о пользовательских ошибках.</p>',
    order: 5,
    createdAt: NOW,
    updatedAt: NOW,
  },

  // JavaScript: Функции (slug: functions, topicId: topic_js_functions) — 23 вопрос(ов)
  {
    id: 'q_functions_001',
    topicId: 'topic_js_functions',
    question: 'Что такое функция?',
    answer:
      '<p>На базовом уровне функция - это именованный (или анонимный) блок кода, который описывается один раз и может вызываться многократно, принимая аргументы и возвращая результат.</p><p>Но в JS функция - это нечто большее: это объект (точнее, вызываемый объект, callable object). typeof возвращает "function", но под капотом функция - специальный объект, наследующий от Function.prototype, а через него от Object.prototype. Поэтому у функций есть свойства и методы: name, length, call, apply, bind и т.д.</p><p>Главное свойство функций в JS - они являются функциями первого класса (first-class citizens). Это значит, функцию можно использовать как любое другое значение:</p><ul><li>присвоить переменной или свойству объекта (тогда это метод)</li><li>передать как аргумент другой функции (колбэк)</li><li>вернуть из функции (фабрики функций, замыкания)</li><li>хранить в массивах и других структурах данных</li></ul><p>Функция, которая принимает функцию как аргумент и/или возвращает функцию, называется функцией высшего порядка (higher-order function) - на этом построены map, filter, reduce, декораторы.</p><p>Полезные свойства-метаданные:</p><ul><li>fn.name - имя функции (выводится даже для анонимных, присвоенных переменной)</li><li>fn.length - количество объявленных параметров до первого параметра со значением по умолчанию или rest-параметра</li></ul><p>На уровне движка вызываемость обеспечивает внутренний метод [[Call]]. У функций, которые можно вызывать через new (конструкторы), есть дополнительно [[Construct]]. У стрелочных функций [[Construct]] нет, поэтому их нельзя использовать с new.</p><p>Функция инкапсулирует не только код, но и лексическое окружение, в котором была создана - благодаря этому работают замыкания. Способов определить функцию несколько: function declaration, function expression, стрелочные функции, методы объектов/классов, конструктор Function - они разбираются отдельно.</p>',
    order: 1,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_functions_002',
    topicId: 'topic_js_functions',
    question: 'Что такое параметры функции?',
    answer:
      '<p>Параметры - это именованные переменные, перечисленные при объявлении функции. Они локальны для функции и при вызове получают значения переданных аргументов. (Параметр - это «слот» в объявлении, аргумент - конкретное значение при вызове; подробнее различие - в отдельном вопросе.)</p><p>Виды параметров:</p><ul><li>Обычные позиционные: function f(a, b)</li><li>Со значением по умолчанию: function f(a = 10) - подставляется, если аргумент не передан или равен undefined</li><li>Rest-параметр: function f(...args) - собирает все оставшиеся аргументы в массив, должен быть последним</li><li>Деструктурирующие - параметр сразу разбирается на части: function f({ id, name }) для объекта или function f([a, b]) для массива. Можно с дефолтами: function f({ id, name = "Аноним" } = {})</li></ul><p>Свойство fn.length показывает число «обязательных» позиционных параметров - считаются только параметры ДО первого параметра со значением по умолчанию или rest. Например у function f(a, b, c = 1, ...rest) length равен 2.</p><p>Область видимости и порядок: параметры образуют отдельную область видимости между внешней и телом функции. Значения по умолчанию вычисляются слева направо, и параметр может ссылаться на ранее объявленные параметры (function f(a, b = a)), но не на последующие - обращение к ещё не инициализированному параметру даёт ошибку (TDZ).</p><p>Связь с arguments: в нестрогом режиме простые параметры связаны с объектом arguments (изменение параметра меняет arguments и наоборот). Но если у функции есть дефолтные, rest или деструктурирующие параметры, эта связь отключается даже в нестрогом режиме. В строгом режиме связи нет всегда.</p><p>Передача значений: параметр получает копию значения аргумента; для объектов копируется ссылка, поэтому мутация объекта через параметр видна снаружи, а переприсваивание самого параметра - нет.</p>',
    order: 2,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_functions_003',
    topicId: 'topic_js_functions',
    question: 'Как работает оператор return?',
    answer:
      '<p>return немедленно завершает выполнение функции и возвращает значение выражения, идущего после него, в вызывающий код. Если выражения нет (просто return) или функция вообще не содержит return - возвращается undefined. Код после return в том же блоке недостижим (dead code).</p><p>Знаменитая ловушка ASI (автоматической вставки точки с запятой): значение нельзя переносить на строку после return. Движок вставит точку с запятой сразу после return:</p><pre>function f() {\n  return\n    42;   // НЕ вернёт 42!\n}\nf(); // undefined - стало return; а 42 - недостижимый код</pre><p>Особенно коварно при возврате объектного литерала - открывающую скобку { нужно оставлять на той же строке, что и return.</p><p>Область действия:</p><ul><li>return допустим только внутри функции - вне функции это синтаксическая ошибка</li><li>return завершает ТОЛЬКО ближайшую функцию. Из колбэка (в forEach, map и т.п.) он выходит лишь из самого колбэка, а не из внешней функции. Внутри forEach return работает как «пропустить элемент», а не «выйти из перебора»</li></ul><p>Особые случаи:</p><ul><li>В связке с finally: значение return вычисляется до finally, но finally выполняется перед фактическим выходом и может перекрыть результат (см. вопрос про return и finally)</li><li>В конструкторе (вызов через new): если return возвращает ОБЪЕКТ, он заменяет создаваемый this; если возвращает примитив или ничего - примитив игнорируется и возвращается this</li><li>В стрелочных функциях с кратким телом return подразумевается неявно: x => x * 2 эквивалентно x => { return x * 2 }</li></ul>',
    order: 3,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_functions_004',
    topicId: 'topic_js_functions',
    question: 'Чем отличается объявление функции от выражения функции?',
    answer:
      '<p>Function Declaration (объявление) - function foo() {} в позиции инструкции. Function Expression (выражение) - функция в позиции выражения, например присвоенная переменной: const foo = function() {}.</p><p>Главное отличие - hoisting:</p><ul><li>Объявление всплывает ПОЛНОСТЬЮ (имя и тело), поэтому функцию можно вызвать до её объявления в коде</li><li>У выражения всплывает только переменная, которой оно присваивается, но не само тело. До строки присваивания переменная равна undefined (если var - тогда вызов даёт TypeError: not a function) или находится в TDZ (если const/let - ReferenceError). Функция становится доступна только когда выполнение дойдёт до присваивания</li></ul><p>Как движок различает: если строка начинается с ключевого слова function - это объявление; если function стоит в позиции выражения (правая часть =, аргумент, после оператора, в скобках) - это выражение. Именно поэтому работает IIFE: (function(){})() - скобки переводят функцию в контекст выражения.</p><p>Другие отличия:</p><ul><li>Объявление обязано иметь имя, выражение может быть анонимным</li><li>Именованное функциональное выражение (NFE): const f = function inner() {...}. Имя inner доступно ТОЛЬКО внутри самой функции - для рекурсии и самоссылки, а снаружи невидимо. Плюс такой рекурсии в том, что она не сломается, даже если внешнюю переменную f переприсвоят</li><li>В строгом режиме объявление функции внутри блока { } имеет блочную область видимости. Исторически в нестрогом режиме поведение объявлений в блоках было нестандартным и различалось между движками</li></ul><p>Практический вывод: для условного определения функции (внутри if) используют выражение, а не объявление - поведение объявления внутри блока ненадёжно.</p>',
    order: 4,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_functions_005',
    topicId: 'topic_js_functions',
    question: 'Что такое цепочка методов?',
    answer:
      '<p>Цепочка методов (method chaining) - приём, когда вызовы методов идут подряд через точку, без промежуточных переменных: obj.a().b().c(). Это возможно, когда каждый метод возвращает объект, на котором можно сразу вызвать следующий метод. API, спроектированный для такого использования, называют текучим интерфейсом (fluent interface).</p><p>Чтобы сделать свои методы чейнабельными, они должны возвращать this:</p><pre>class Query {\n  where(c) { /* ... */ return this; }\n  limit(n) { /* ... */ return this; }\n}\nnew Query().where("age > 18").limit(10);</pre><p>Важно различать два вида цепочек по природе методов:</p><ul><li>На методах, возвращающих НОВЫЙ объект (map, filter, slice, строковые методы) - каждый шаг создаёт новое значение, исходное не меняется. Иммутабельный стиль: arr.filter(f).map(g).slice(0, 5)</li><li>На МУТИРУЮЩИХ методах - они меняют исходный объект. С массивами здесь подвох: sort, reverse, splice мутируют массив и возвращают его же (цепочка работает, но оригинал портится), а push/unshift возвращают НЕ массив, а новую длину (число), поэтому цепочка через них обрывается - дальше у числа методов массива нет</li></ul><p>Риск длинных цепочек: если промежуточный метод вернёт null или undefined, следующий вызов упадёт с ошибкой. Для защиты используют опциональную цепочку: obj.a()?.b()?.c().</p><p>Нюанс форматирования: цепочки принято разбивать по строкам - каждый .method() с новой строки. ASI не вставляет точку с запятой перед строкой, начинающейся с точки, поэтому это безопасно и улучшает читаемость.</p>',
    order: 5,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_functions_006',
    topicId: 'topic_js_functions',
    question:
      'Что будет если функция вызывается с меньшим (или большим) количеством аргументов, чем объявленных параметров?',
    answer:
      '<p>Ключевая особенность: JS не проверяет соответствие числа аргументов числу параметров - ни в меньшую, ни в большую сторону. Ошибки не возникает ни в каком случае (в отличие от многих строго типизированных языков). Это следствие динамичной природы языка.</p><p>Если аргументов МЕНЬШЕ, чем параметров:</p><ul><li>Недостающие параметры получают значение undefined</li><li>Если у параметра задано значение по умолчанию, подставляется оно. Важно: дефолт срабатывает только когда аргумент не передан или равен undefined. Передача null дефолт НЕ активирует - null останется null</li></ul><p>Если аргументов БОЛЬШЕ, чем параметров:</p><ul><li>Лишние аргументы не вызывают ошибку, на уровне именованных параметров они просто игнорируются</li><li>Но до них можно добраться: через rest-параметр (...args соберёт все лишние в массив) или через объект arguments в обычных функциях</li></ul><p>Дополнительно:</p><ul><li>Свойство fn.length показывает число объявленных параметров и не зависит от того, сколько аргументов реально передали при вызове</li><li>Поскольку дефолт реагирует именно на undefined, проверять «передан ли аргумент» логично через сравнение с undefined. Необязательные параметры по этой же причине размещают в конце списка</li></ul>',
    order: 6,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_functions_007',
    topicId: 'topic_js_functions',
    question: 'Как указать параметры по умолчанию?',
    answer:
      '<p>Значение по умолчанию указывается после знака = в списке параметров: function f(a = 10) {} (ES2015).</p><p>Когда срабатывает: только если аргумент не передан или явно равен undefined. На null, 0, "", false дефолт НЕ применяется - эти значения остаются как есть. Этим нативные дефолты лучше старого приёма a = a || 10, который заменял любое falsy-значение (и ошибочно перезаписывал валидные 0 и "").</p><p>Значением по умолчанию может быть любое выражение, и вычисляется оно лениво - только в момент вызова и только когда дефолт реально нужен:</p><ul><li>Вызов функции: function f(id = generateId()) - generateId выполнится лишь если id не передан</li><li>Ссылка на ПРЕДЫДУЩИЕ параметры: function f(a, b = a * 2) - можно. На последующие нельзя - они в TDZ (function f(a = b, b) даст ошибку)</li><li>Можно ссылаться на внешние переменные из области видимости</li></ul><p>Важный нюанс: выражение по умолчанию вычисляется заново при КАЖДОМ вызове. Поэтому function f(arr = []) на каждый вызов создаёт новый пустой массив. (Это контраст с Python, где дефолт вычисляется один раз при определении функции - в JS такой ловушки нет.)</p><p>Прочие эффекты:</p><ul><li>fn.length перестаёт считать параметры, начиная с первого дефолтного: у function f(a, b = 1, c) length равен 1</li><li>Наличие дефолтных параметров отключает связь параметров с объектом arguments даже в нестрогом режиме</li><li>Дефолт можно ставить не только в конце, но чтобы пропустить такой параметр, нужно явно передать undefined: f(undefined, 5)</li></ul>',
    order: 7,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_functions_008',
    topicId: 'topic_js_functions',
    question: 'Что такое остаточный параметр (rest)?',
    answer:
      '<p>Rest-параметр (...args) собирает все оставшиеся аргументы вызова в настоящий массив. Указывается последним в списке параметров: function f(a, b, ...rest) - a и b получат первые два аргумента, остальные попадут в массив rest.</p><p>Главное преимущество перед arguments: rest даёт настоящий Array, поэтому к нему сразу применимы map, filter, reduce и т.д. без конвертации.</p><p>Не путать rest и spread - синтаксис одинаковый (...), но смысл противоположный:</p><ul><li>rest СОБИРАЕТ несколько элементов в один массив. Используется в объявлении параметров (function f(...args)) и в деструктуризации (const [first, ...rest] = arr)</li><li>spread РАЗВОРАЧИВАЕТ массив/итерируемое в отдельные элементы. Используется при вызове функции (f(...arr)) и в литералах ([...arr], {...obj})</li><li>Правило: в параметрах и слева от = - это rest; при вызове и в литералах - это spread</li></ul><p>Ограничения:</p><ul><li>rest всегда последний параметр - function f(...args, b) это SyntaxError</li><li>может быть только один rest-параметр</li><li>rest нельзя задать значение по умолчанию</li></ul><p>rest против arguments:</p><ul><li>rest - настоящий массив; arguments - псевдомассив (array-like) без методов массива</li><li>rest содержит только «лишние» аргументы (после именованных параметров); arguments - вообще все переданные аргументы</li><li>rest работает в стрелочных функциях, а arguments в них недоступен</li><li>rest - современный рекомендуемый способ, arguments - устаревший</li></ul><p>fn.length не учитывает rest: у function f(a, ...rest) length равен 1.</p><p>Тот же синтаксис rest работает и в деструктуризации объекта: const { a, ...others } = obj соберёт оставшиеся свойства в новый объект others.</p>',
    order: 8,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_functions_009',
    topicId: 'topic_js_functions',
    question: 'Что такое Arguments?',
    answer:
      '<p>arguments - это объект, доступный внутри обычных функций, который содержит ВСЕ переданные при вызове аргументы (независимо от того, сколько параметров объявлено). Имеет свойство length и доступ по индексу: arguments[0], arguments[1].</p><p>Это псевдомассив (array-like): у него есть length и числовые индексы, но НЕТ методов массива - map, forEach, filter к нему напрямую не применить. Чтобы превратить в настоящий массив:</p><ul><li>Array.from(arguments)</li><li>[...arguments] - arguments итерируем (имеет Symbol.iterator), поэтому работает спред и for...of</li><li>устаревшее: Array.prototype.slice.call(arguments)</li></ul><p>Критически важный нюанс: у стрелочных функций НЕТ собственного arguments. Внутри стрелочной функции arguments берётся лексически из внешней обычной функции (как и this). Если внешней функции нет - обращение к arguments даст ошибку.</p><p>Связь с параметрами:</p><ul><li>В нестрогом режиме простые именованные параметры связаны с arguments: изменение параметра меняет arguments[i] и наоборот</li><li>В строгом режиме эта связь разорвана - arguments и параметры независимы</li><li>Наличие дефолтных, rest или деструктурирующих параметров тоже разрывает связь даже в нестрогом режиме</li></ul><p>Устаревшие возможности (запрещены в строгом режиме):</p><ul><li>arguments.callee - ссылка на саму выполняемую функцию (использовалась для рекурсии анонимных функций)</li><li>arguments.callee.caller - вызвавшая функция</li></ul><p>Рекомендация: в современном коде вместо arguments используют rest-параметр (...args). Он даёт настоящий массив, работает в стрелочных функциях, содержит только нужные аргументы и делает сигнатуру функции явной.</p>',
    order: 9,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_functions_010',
    topicId: 'topic_js_functions',
    question: 'Как работает spread оператор?',
    answer:
      '<p>Spread (...) разворачивает итерируемое в отдельные элементы - это операция, обратная rest (который, наоборот, собирает элементы).</p><p>При вызове функции: f(...arr) передаёт элементы как отдельные аргументы. Работает с ЛЮБЫМ итерируемым, не только с массивом - строкой, Set, Map, arguments, генератором: Math.max(...[1, 2, 3]) даёт 3.</p><p>Spread заменил устаревший приём с apply:</p><ul><li>Раньше «массив в аргументы» делали через fn.apply(null, arr). Теперь fn(...arr) - чище</li><li>В отличие от apply, spread работает с new: new Date(...[2024, 0, 1])</li><li>Можно комбинировать с обычными аргументами и использовать несколько спредов: f(1, ...a, 2, ...b) - apply так не умел</li></ul><p>Spread в литералах (шире, чем только для функций):</p><ul><li>Массивы: [...a, ...b] - объединение, [...arr] - копия, [...new Set(arr)] - убрать дубликаты, [...str] - строка по символам (точкам кода)</li><li>Объекты (ES2018): {...obj} - копия, {...a, ...b} - слияние (последующие свойства перезаписывают предыдущие)</li></ul><p>Важные нюансы:</p><ul><li>Копирование через spread ПОВЕРХНОСТНОЕ (shallow): вложенные объекты копируются по ссылке, а не дублируются. Для глубокой копии нужен structuredClone или другой способ</li><li>Spread массивов/строк работает через протокол итерации (Symbol.iterator). А spread объекта {...obj} работает иначе - он копирует собственные перечислимые свойства и НЕ требует итерируемости. Поэтому {...obj} валидно для любого объекта, а [...obj] для неитерируемого объекта бросит ошибку</li></ul>',
    order: 10,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_functions_011',
    topicId: 'topic_js_functions',
    question: 'Как создать статическую переменную внутри функции?',
    answer:
      '<p>«Статическая» здесь означает переменную, которая сохраняет своё значение между вызовами функции (аналог static в других языках). Есть несколько способов.</p><p>Способ 1 - свойство на самой функции. Поскольку функция - это объект, ей можно добавить свойство и менять его при каждом вызове:</p><pre>function counter() {\n  counter.count = (counter.count || 0) + 1;\n  return counter.count;\n}</pre><p>Минусы: свойство публичное - его видно и можно перезаписать снаружи (counter.count = 999). Подход хрупкий: ломается, если функцию переприсвоить другой переменной (ссылка на имя пропадёт).</p><p>Способ 2 - замыкание (идиоматический, основной). Состояние хранится в переменной внешней функции (часто через IIFE), а возвращаемая функция её захватывает:</p><pre>const counter = (() => {\n  let count = 0;\n  return () => ++count;\n})();</pre><p>Здесь count приватный - снаружи к нему нет доступа, его нельзя случайно перезаписать. Это канонический способ инкапсулировать состояние функции.</p><p>Способ 3 - статическое поле класса (static), если код объектно-ориентированный: статическое поле принадлежит классу и общее для всех экземпляров.</p><p>Сравнение: свойство функции - просто, но публично и хрупко; замыкание - инкапсулировано и надёжно, но состояние недоступно для внешней инспекции или сброса. Выбор зависит от того, нужно ли прятать состояние.</p><p>Исторический способ (устаревший): анонимная функция могла ссылаться на себя через arguments.callee, чтобы хранить на себе свойство, но callee запрещён в строгом режиме.</p>',
    order: 11,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_functions_012',
    topicId: 'topic_js_functions',
    question: 'Что такое анонимная функция?',
    answer:
      '<p>Анонимная функция - это функция без собственного имени после ключевого слова function. Стрелочные функции тоже всегда анонимны.</p><p>Применяется во многих случаях (не только при присваивании переменной):</p><ul><li>Колбэки: arr.map(function(x) { return x * 2 }), setTimeout(function() {...}), обработчики событий</li><li>Аргументы функций высшего порядка</li><li>IIFE - немедленно вызываемое выражение: (function() {...})()</li><li>Присваивание переменной или свойству объекта</li></ul><p>Тонкость с именем (name): «анонимная» не всегда значит, что свойство name пустое. Если функция присвоена переменной или свойству, движок выводит имя автоматически (inferred name):</p><ul><li>const foo = function() {} - foo.name === "foo" (имя выведено из переменной)</li><li>А вот переданная инлайн как аргумент функция остаётся по-настоящему безымянной: arr.map(function() {}) - её name === ""</li></ul><p>То есть формально функция анонимна (имени нет в синтаксисе), но name может быть заполнен через вывод.</p><p>Минусы анонимных функций:</p><ul><li>Хуже читаются стек-трейсы при отладке (хотя вывод имени это частично смягчает)</li><li>Нельзя сослаться на саму себя для рекурсии</li></ul><p>Противоположность - именованное функциональное выражение (NFE): const f = function inner() {...}. Имя inner видно только внутри функции и служит для рекурсии и отладки. Его используют, когда анонимной функции нужно вызвать саму себя.</p>',
    order: 12,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_functions_013',
    topicId: 'topic_js_functions',
    question: 'Что вернёт typeof функции?',
    answer:
      '<p>typeof функции возвращает строку "function". При этом, с точки зрения спецификации, функция НЕ является отдельным языковым типом - это объект. Среди 8 типов языка типа «function» нет, есть object. typeof выделяет функции особым случаем просто для удобства - чтобы можно было быстро проверить, вызываемо ли значение.</p><p>Технический критерий: функция - это объект с внутренним методом [[Call]] (вызываемый объект, callable). Именно наличие [[Call]] заставляет typeof вернуть "function". Объект с [[Call]] даёт "function", объект без него - "object".</p><p>Из того, что функция - это объект, следуют важные вещи:</p><ul><li>Функции можно добавлять свойства, как обычному объекту</li><li>У них есть свойства name, length и методы call, apply, bind</li><li>Они наследуют от Function.prototype, а через него от Object.prototype</li></ul><p>Любопытные следствия:</p><ul><li>typeof класса тоже "function" - класс под капотом является функцией-конструктором (синтаксический сахар)</li><li>typeof встроенных конструкторов - тоже "function": typeof Date, typeof Array, typeof Symbol все дают "function"</li></ul><p>На практике typeof x === "function" - стандартный способ проверить, что значение можно вызвать, например перед вызовом колбэка: if (typeof cb === "function") cb().</p>',
    order: 13,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_functions_014',
    topicId: 'topic_js_functions',
    question: 'Отличие параметров от аргументов?',
    answer:
      '<p>Это разные стороны одного механизма:</p><ul><li>Параметр (formal parameter) - имя переменной в ОБЪЯВЛЕНИИ функции, «слот» для входного значения. Существует при определении функции</li><li>Аргумент (actual parameter / argument) - конкретное ЗНАЧЕНИЕ, переданное функции при ВЫЗОВЕ</li></ul><p>Пример: в function f(a, b) {} - a и b это параметры. При вызове f(1, 2) - 1 и 2 это аргументы.</p><p>Мнемоника: параметры объявляются (при определении), аргументы передаются (при вызове). Параметр принимает - аргумент передаётся.</p><p>Связанные нюансы:</p><ul><li>Число аргументов не обязано совпадать с числом параметров - JS это не проверяет</li><li>Лишние аргументы доступны через arguments или rest-параметр</li><li>fn.length считает объявленные ПАРАМЕТРЫ, а arguments.length при вызове - фактически переданные АРГУМЕНТЫ</li></ul><p>В разговорной речи термины часто смешивают, но формально это разные понятия.</p>',
    order: 14,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_functions_015',
    topicId: 'topic_js_functions',
    question: 'Что такое деструктуризация? Как работает?',
    answer:
      '<p>Деструктуризация (destructuring assignment, ES2015) - синтаксис, позволяющий распаковывать значения из массивов и свойства из объектов в отдельные переменные.</p><p>Деструктуризация массива (по позиции):</p><ul><li>Базово: const [a, b] = [1, 2]</li><li>Пропуск элементов: const [, , third] = arr (запятые пропускают позиции)</li><li>Rest: const [first, ...rest] = arr - остаток в массив</li><li>Значения по умолчанию: const [a = 10, b = 20] = [1] - b станет 20</li><li>Своп без временной переменной: [a, b] = [b, a]</li><li>Работает с любым итерируемым: const [x, y] = "ab", const [first] = new Set(...)</li></ul><p>Деструктуризация объекта (по имени свойства):</p><ul><li>Базово: const { id, name } = user</li><li>Переименование: const { id: userId } = user - значение из id попадёт в переменную userId</li><li>Значения по умолчанию: const { role = "guest" } = user</li><li>Переименование + дефолт: const { id: userId = 0 } = user</li><li>Rest: const { id, ...rest } = user - остальные свойства в новый объект</li><li>Вычисляемое имя свойства: const { [key]: value } = obj</li></ul><p>Вложенная деструктуризация: const { address: { city } } = user, const [[a], [b]] = [[1], [2]]. Можно комбинировать массивы и объекты.</p><p>В параметрах функции - очень частое применение: function f({ id, name = "Аноним" } = {}) {}. Пустой объект по умолчанию (= {}) нужен, чтобы вызов f() без аргумента не упал при попытке деструктурировать undefined.</p><p>Важные нюансы:</p><ul><li>Деструктуризация объекта в виде отдельной инструкции требует скобок: ({ a, b } = obj). Без скобок { } в начале строки трактуется как блок кода - будет ошибка</li><li>Если деструктурируемое значение null или undefined - бросается TypeError (нельзя «распаковать» отсутствие). От этого и защищает = {} по умолчанию</li><li>Деструктуризация объекта берёт свойства по имени независимо от порядка; массива - строго по позиции через протокол итерации</li></ul>',
    order: 15,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_functions_016',
    topicId: 'topic_js_functions',
    question: 'Что такое рекурсия? Какие есть нюансы в JS?',
    answer:
      '<p>Рекурсия - приём, при котором функция вызывает саму себя для решения задачи через её меньшие подзадачи. Любая рекурсия состоит из двух частей:</p><ul><li>Базовый случай (base case) - условие выхода, при котором функция возвращает результат без рекурсивного вызова. Без него - бесконечная рекурсия</li><li>Рекурсивный случай - функция вызывает себя с «уменьшенными» аргументами, приближаясь к базовому случаю</li></ul><p>Где применяется: обход древовидных и вложенных структур (DOM, файловая система, JSON), алгоритмы «разделяй и властвуй», перебор, математические определения (факториал, числа Фибоначчи).</p><p>Ключевой нюанс JS - ограничение стека вызовов. Каждый рекурсивный вызов добавляет фрейм в стек. Стек конечен, поэтому слишком глубокая рекурсия бросает RangeError: Maximum call stack size exceeded. Точная глубина зависит от движка (обычно тысячи-десятки тысяч вызовов).</p><p>Хвостовая рекурсия (tail call) и её оптимизация (TCO):</p><ul><li>Хвостовой называется рекурсия, где рекурсивный вызов - последнее действие функции (его результат сразу возвращается, без доп. вычислений). Такой вызов теоретически можно выполнять без роста стека</li><li>Оптимизация хвостовых вызовов (TCO) есть в спецификации ES2015, но на практике её реализовал почти только движок JavaScriptCore (Safari). В V8 (Chrome, Node) TCO не включён. Поэтому полагаться на неё в JS нельзя - глубокая рекурсия упрётся в стек даже в хвостовой форме</li></ul><p>Как ссылаться на себя:</p><ul><li>По имени (function declaration или named function expression). NFE предпочтительнее для рекурсии: имя видно внутри функции и не сломается, если внешнюю переменную переприсвоят</li><li>Устаревшее arguments.callee - запрещено в строгом режиме</li></ul><p>Способы избежать переполнения стека: переписать на итерацию (цикл с явным стеком/очередью), для повторяющихся вычислений - мемоизация (например наивный Фибоначчи без мемоизации экспоненциален), при асинхронной рекурсии - разбивать через setTimeout/микротаски, отдавая управление event loop.</p>',
    order: 16,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_functions_017',
    topicId: 'topic_js_functions',
    question: 'Что такое чистые функции и побочные эффекты?',
    answer:
      '<p>Чистая функция (pure function) - функция, удовлетворяющая двум условиям:</p><ol><li>Детерминированность: при одних и тех же аргументах всегда возвращает один и тот же результат. Не зависит от внешнего изменяемого состояния (глобальных переменных, времени, случайных чисел, внешних запросов)</li><li>Отсутствие побочных эффектов: не изменяет ничего за пределами себя</li></ol><p>Побочный эффект (side effect) - любое взаимодействие функции с внешним миром помимо возврата значения:</p><ul><li>мутация внешних переменных, аргументов-объектов, глобального состояния</li><li>обращение к сети, файлам, БД</li><li>работа с DOM, console.log</li><li>изменение localStorage, генерация случайных чисел, чтение текущего времени</li></ul><p>Примеры:</p><pre>// чистая: результат зависит только от входа, ничего не меняет\nconst add = (a, b) => a + b;\n\n// нечистая: мутирует внешний массив (побочный эффект)\nconst arr = [];\nconst addItem = x => { arr.push(x); };\n\n// нечистая: недетерминирована\nconst rnd = () => Math.random();</pre><p>Важный нюанс с объектами: чистая функция не должна мутировать переданные аргументы. arr => arr.sort() нечистая (sort мутирует исходный массив), а arr => [...arr].sort() чистая (работает с копией).</p><p>Почему чистота важна:</p><ul><li>Предсказуемость и простота рассуждения о коде</li><li>Лёгкое тестирование - не нужны моки внешнего состояния</li><li>Мемоизация - результат можно кешировать, раз он зависит только от входа</li><li>Безопасность для оптимизаций и параллелизма</li><li>Основа функционального стиля и реактивных фреймворков: в React компоненты и редьюсеры должны быть чистыми, а побочные эффекты выносятся в useEffect</li></ul><p>На практике полностью без эффектов программа бесполезна (нужно же что-то выводить и сохранять). Идея не в том, чтобы избавиться от эффектов, а чтобы изолировать их: держать ядро логики чистым, а эффекты выносить на «края» приложения.</p>',
    order: 17,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_functions_018',
    topicId: 'topic_js_functions',
    question: 'Что такое каррирование и частичное применение?',
    answer:
      '<p>Оба приёма основаны на замыканиях и преобразуют то, как функция принимает аргументы.</p><p>Каррирование (currying) - преобразование функции с несколькими аргументами в цепочку функций, каждая из которых принимает по одному аргументу. f(a, b, c) превращается в f(a)(b)(c):</p><pre>const curry = a => b => c => a + b + c;\ncurry(1)(2)(3); // 6</pre><p>Частичное применение (partial application) - фиксация части аргументов функции, чтобы получить новую функцию, ожидающую оставшиеся:</p><pre>const add = (a, b, c) => a + b + c;\nconst add5 = add.bind(null, 5); // зафиксировали a = 5\nadd5(2, 3); // 10</pre><p>Разница: каррирование строго разбивает на функции по одному аргументу; частичное применение просто фиксирует сколько-то аргументов, оставляя остальные сразу. bind - встроенный способ частичного применения.</p><p>Зачем это нужно:</p><ul><li>Переиспользование: из общей функции делаются специализированные (например log = curry, errorLog = log("ERROR"))</li><li>Композиция функций в функциональном стиле - каррированные функции удобно соединять в конвейеры (pipe/compose)</li><li>Конфигурируемые колбэки без обёрток-стрелок</li></ul><p>Универсальная функция curry обычно реализуется так: накапливает аргументы, и если их набралось достаточно (>= fn.length) - вызывает исходную функцию, иначе возвращает новую функцию для добора аргументов. Именно поэтому fn.length (число параметров) здесь важно. В библиотеках вроде Lodash и Ramda есть готовый _.curry.</p>',
    order: 18,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_functions_019',
    topicId: 'topic_js_functions',
    question: 'Что такое стрелочная функция?',
    answer:
      '<p>Стрелочная функция (ES2015) - компактный синтаксис функции с важными семантическими отличиями от обычной. Синтаксис: параметры => тело.</p><p>Синтаксические сокращения:</p><ul><li>Ключевое слово function не используется, тело отделяется стрелкой =></li><li>При одном параметре скобки можно опустить: x => x * 2. Без параметров скобки обязательны: () => 42</li><li>Если тело - одно выражение, return подразумевается неявно: x => x + 1. При теле в фигурных скобках return нужно писать явно</li><li>Стрелка всегда анонимна (имя получает только через вывод из переменной)</li></ul><p>Но главное - отличия в семантике. У стрелочных функций НЕТ собственных:</p><ul><li>this - берётся лексически из окружения, где функция создана. Это устраняет классические потери this в колбэках (подробнее - в отдельном вопросе)</li><li>arguments - берётся из внешней обычной функции; для своих «остаточных» аргументов используют rest (...args)</li><li>prototype и внутреннего метода [[Construct]] - поэтому стрелку нельзя вызвать через new (будет TypeError)</li><li>super и new.target - тоже наследуются лексически</li></ul><p>Также call, apply и bind НЕ могут переопределить this стрелочной функции - переданный контекст игнорируется (лексический this изменить нельзя).</p><p>Синтаксические ловушки:</p><ul><li>Возврат объектного литерала требует скобок: () => ({ a: 1 }). Без скобок { a: 1 } воспримется как блок кода, а не объект</li><li>В многострочном теле { } неявного return нет - нужен явный return</li></ul><p>Где НЕ стоит применять стрелки: как методы объекта (если методу нужен this самого объекта), как конструкторы, как методы в прототипе, как обработчики событий, которым нужен this элемента, и как генераторы (стрелка генератором быть не может).</p><p>Где удобны: короткие колбэки (map, filter, обработчики промисов) и случаи, когда нужен именно лексический this (например методы-стрелки как поля класса).</p>',
    order: 19,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_functions_020',
    topicId: 'topic_js_functions',
    question:
      'Что необходимо если стрелочная функция возвращает объект и мы хотим опустить оператор return?',
    answer:
      '<p>Нужно обернуть возвращаемый объект в круглые скобки: () => ({ a: 1 }).</p><p>Причина в неоднозначности фигурных скобок. При неявном return скобка { сразу после => трактуется как начало БЛОКА тела функции, а не как объектный литерал. Поэтому () => { a: 1 } разбирается как тело функции, где a: - это метка (валидный синтаксис), 1 - выражение, а return отсутствует. Такая функция молча возвращает undefined - что коварнее явной ошибки.</p><p>Круглые скобки переводят { } в контекст выражения, и тогда это уже объектный литерал:</p><ul><li>() => { id: 1 } возвращает undefined (блок с меткой)</li><li>() => ({ id: 1 }) возвращает { id: 1 }</li></ul><p>Частый практический кейс - map: arr.map(x => ({ id: x })). Без скобок получится массив из undefined.</p><p>Это частный случай общей двусмысленности фигурных скобок в JS (блок кода или объект). По той же причине деструктуризация объекта в виде инструкции тоже требует скобок: ({ a } = obj).</p>',
    order: 20,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_functions_021',
    topicId: 'topic_js_functions',
    question: 'this у стрелочных функций?',
    answer:
      '<p>У стрелочной функции нет собственного this. Она не создаёт свой контекст, а берёт this из окружающей лексической области - той, где была ОПРЕДЕЛЕНА (а не вызвана). Проще говоря, this внутри стрелки равен this снаружи неё.</p><p>«Лексический» означает «по месту в коде»: значение this фиксируется по расположению функции в момент её создания и не зависит от способа вызова. Это противоположность обычным функциям, где this определяется тем, КАК функцию вызвали (как метод, как функцию, через new, через call/apply).</p><p>Следствие - this стрелки нельзя переопределить:</p><ul><li>call, apply и bind игнорируют переданный контекст для стрелки - первый аргумент просто не действует на this</li><li>вызов стрелки как метода объекта не делает this этим объектом: obj.arrowMethod() оставит this лексическим</li></ul><p>Где это спасает (главный плюс) - колбэки, которые в обычной функции теряют this. Классический случай - асинхронный колбэк или перебор внутри метода:</p><pre>class Timer {\n  constructor() { this.sec = 0; }\n  start() {\n    setInterval(() => { this.sec++; }, 1000); // this - экземпляр Timer\n  }\n}</pre><p>Обычная function здесь потеряла бы this (стал бы undefined/глобальным). Раньше это обходили через const self = this или .bind(this).</p><p>Где это вредит (главный минус) - стрелка как метод объекта: this будет не объектом, а внешним контекстом (в модуле - undefined). const obj = { x: 1, getX: () => this.x } - getX() не вернёт 1.</p><p>Другие нюансы:</p><ul><li>В обработчике DOM-события обычная функция получает this = элемент, а стрелка - лексический this (не элемент). Для доступа к элементу из стрелки используют event.currentTarget</li><li>Поля класса со стрелкой - удобный паттерн «привязанного метода»: handleClick = () => {...} автоматически захватывает this экземпляра, поэтому в React не нужен bind в конструкторе</li><li>По той же лексической логике у стрелки нет своих arguments, super и new.target - они тоже берутся из окружения</li></ul>',
    order: 21,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_functions_022',
    topicId: 'topic_js_functions',
    question: 'Можно ли определять стрелочные функции в качестве конструкторов?',
    answer:
      '<p>Нет. Вызов стрелочной функции через new бросает TypeError: ArrowFn is not a constructor.</p><p>Истинная причина - у стрелочной функции нет внутреннего метода [[Construct]]. Именно [[Construct]] отвечает за создание объекта при вызове через new. Обычные функции имеют оба внутренних метода - [[Call]] (обычный вызов) и [[Construct]] (вызов через new), а стрелки имеют только [[Call]], поэтому они не конструируемы.</p><p>Отсутствие свойства prototype - это сопутствующее следствие, а не отдельная причина. Конструктор использует свой prototype как прототип создаваемого объекта. Раз стрелка не предназначена для new, ей prototype не нужен, и его нет: arrowFn.prototype === undefined. То есть «нет prototype» и «нельзя new» - две стороны одного: стрелка не задумана как конструктор.</p><p>Дополнительно у стрелки нет и собственного this, который new должен был бы инициализировать как новый объект, - ещё одна причина, по которой конструктор из неё невозможен.</p><p>Важное обобщение: не-конструируемость не уникальна для стрелок. Через new нельзя вызывать также:</p><ul><li>методы, заданные сокращённым синтаксисом ({ method() {} } или методы класса) - у них нет [[Construct]]</li><li>async-функции</li><li>генераторы</li></ul><p>Как конструкторы работают только function declaration/expression и классы.</p>',
    order: 22,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_functions_023',
    topicId: 'topic_js_functions',
    question: 'Чем стрелочная функция отличается от обычной? (сводно)',
    answer:
      '<p>Сводка всех различий между обычной функцией (function) и стрелочной (=>).</p><p>this:</p><ul><li>Обычная: собственный this, зависит от способа вызова (метод, функция, new, call/apply/bind)</li><li>Стрелочная: своего this нет, берётся лексически из окружения; переопределить через call/apply/bind нельзя</li></ul><p>arguments:</p><ul><li>Обычная: есть собственный объект arguments</li><li>Стрелочная: своего arguments нет, берётся из внешней функции; для аргументов используют rest (...args)</li></ul><p>Вызов через new (конструктор):</p><ul><li>Обычная: можно, имеет [[Construct]] и prototype</li><li>Стрелочная: нельзя (TypeError), нет [[Construct]] и нет свойства prototype</li></ul><p>super и new.target:</p><ul><li>Обычная: собственные</li><li>Стрелочная: лексические (из окружения)</li></ul><p>Hoisting:</p><ul><li>Function declaration всплывает целиком (вызов до объявления возможен)</li><li>Стрелочная - всегда выражение, подчиняется правилам своей переменной (TDZ для const/let)</li></ul><p>Генератор:</p><ul><li>Обычная: может быть генератором (function*)</li><li>Стрелочная: генератором быть не может</li></ul><p>Имя:</p><ul><li>Обычная: может иметь собственное имя (declaration, NFE)</li><li>Стрелочная: всегда анонимна (name только через вывод из переменной)</li></ul><p>Синтаксис:</p><ul><li>Обычная: всегда с function и явным return (или его отсутствием)</li><li>Стрелочная: компактная, неявный return для выражения, опускаемые скобки при одном параметре</li></ul><p>Где применять: обычные функции - методы объектов и классов, конструкторы, генераторы, обработчики, которым нужен this элемента. Стрелочные - короткие колбэки и случаи, где нужен лексический this (например handleClick = () => {} как поле класса).</p>',
    order: 23,
    createdAt: NOW,
    updatedAt: NOW,
  },

  // JavaScript: this, контекст, call/apply/bind (slug: this-context, topicId: topic_js_this) — 9 вопрос(ов)
  {
    id: 'q_this_context_001',
    topicId: 'topic_js_this',
    question: 'Что такое this?',
    answer:
      '<p>this - это ссылка на контекст выполнения функции. Ключевая идея: для обычных функций this определяется в МОМЕНТ ВЫЗОВА (по call-site), а не при объявлении. Один и тот же код функции может дать разный this в зависимости от того, КАК её вызвали. Исключение - стрелочные функции (см. ниже).</p><p>Значение this определяется по правилам в порядке приоритета:</p><ol><li>Вызов через new (конструктор): this - это новый создаваемый объект. Высший приоритет среди обычных вызовов</li><li>Явная привязка call / apply / bind: this - объект, переданный первым аргументом. bind создаёт функцию с жёстко зафиксированным this</li><li>Вызов как метод obj.fn(): this - объект перед точкой. Важно: значение задаёт именно точка вызова, а не место, где метод объявлен</li><li>Обычный вызов fn(): this - undefined в строгом режиме, глобальный объект в нестрогом</li></ol><p>Стрелочные функции стоят вне этих правил: у них нет своего this, он берётся лексически из окружения. new, call, apply, bind на их this не влияют.</p><p>Распространённая ошибка в понимании: this не «всегда указывает на объект, в котором функция лежит». Он указывает на объект, только если функция ВЫЗВАНА как его метод (obj.method()). Сама по себе принадлежность объекту значения не имеет.</p><p>Потеря this (частый источник багов): при «отрывании» метода от объекта неявная привязка теряется и срабатывает обычный вызов:</p><pre>const f = obj.method;\nf();                  // this уже не obj, а undefined/глобальный\nsetTimeout(obj.method, 0); // та же проблема - метод передан без объекта</pre><p>Решения: obj.method.bind(obj), обёртка стрелкой () => obj.method(), либо метод-стрелка как поле класса.</p><p>this в разных контекстах:</p><ul><li>Глобально: в обычном скрипте (нестрогий режим) - глобальный объект; в ES-модуле - undefined; в Node (CommonJS) на верхнем уровне - module.exports</li><li>В методе класса: тело класса всегда в строгом режиме, поэтому отвязанный метод даёт this === undefined</li><li>В обработчике DOM-события: обычная функция получает this = элемент (как event.currentTarget), стрелка - лексический this</li><li>В колбэках некоторых методов (forEach, map и др.) можно задать this вторым аргументом thisArg</li></ul>',
    order: 1,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_this_context_002',
    topicId: 'topic_js_this',
    question: 'Что такое контекст выполнения?',
    answer:
      '<p>Контекст выполнения (execution context) - это внутренняя структура, описывающая окружение, в котором исполняется код: какие доступны переменные, чему равен this, какова цепочка областей видимости. Любой код в JS выполняется внутри какого-то контекста.</p><p>Типы контекстов:</p><ol><li>Глобальный - создаётся один на программу, для кода вне функций</li><li>Функциональный - создаётся заново при каждом вызове функции (каждый вызов имеет свой контекст)</li><li>Контекст eval - для кода внутри eval (на практике редкость)</li></ol><p>Контексты управляются стеком вызовов (call stack): при вызове функции её контекст помещается на вершину стека и становится активным, по завершении - снимается. Глобальный контекст лежит на дне. Слишком глубокая вложенность (например бесконечная рекурсия) переполняет стек - RangeError: Maximum call stack size exceeded.</p><p>Состав контекста:</p><ol><li>this (определяется по способу вызова)</li><li>Лексическое окружение (Lexical Environment): Environment Record (хранилище объявленных переменных, функций, классов) + ссылка на внешнее окружение</li><li>Окружение переменных (Variable Environment) - тоже лексическое окружение, но именно для var</li></ol><p>Зачем два окружения (тонкий момент, объясняющий разницу var и let): Variable Environment хранит var (функциональная область), а Lexical Environment - let/const и функции (блочная область). При входе в блок { } создаётся новое лексическое окружение для let/const, а Variable Environment не меняется - поэтому var «протекает» сквозь блоки, а let/const - нет.</p><p>Жизненный цикл контекста - две фазы:</p><ol><li>Фаза создания: формируются окружения, регистрируются все объявления (function declaration - целиком, var - со значением undefined, let/const - как неинициализированные, в TDZ), определяется this. Именно эта фаза порождает эффект всплытия (hoisting)</li><li>Фаза выполнения: код исполняется построчно, переменным присваиваются реальные значения</li></ol><p>Ссылка на внешнее окружение (outer reference) образует цепочку областей видимости (scope chain), по которой ищутся переменные. На этом же механизме держатся замыкания: функция сохраняет ссылку на лексическое окружение, где была создана, поэтому окружение не уничтожается, пока на него кто-то ссылается - даже после того, как породивший его контекст снят со стека.</p>',
    order: 2,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_this_context_003',
    topicId: 'topic_js_this',
    question: 'Какой this у функции, вложенной в метод объекта? Как получить this объекта?',
    answer:
      '<p>Проблема: обычная функция, вложенная в метод (или колбэк внутри метода), НЕ наследует this внешнего метода. Когда такая функция вызывается «сама по себе», срабатывает обычная привязка - this становится undefined в строгом режиме или глобальным объектом в нестрогом. Это частный случай общего правила: this определяется способом вызова, а вложенную функцию движок вызывает как простую, без объекта перед точкой.</p><pre>const obj = {\n  items: [1, 2],\n  total: 0,\n  sum() {\n    this.items.forEach(function(x) {\n      this.total += x; // this здесь НЕ obj - бага\n    });\n  }\n};</pre><p>При этом важно различать scope и this: вложенная функция через замыкание ВИДИТ переменные и параметры внешней функции (лексическая область наследуется), но this у обычной функции лексически не наследуется. Поэтому проблема именно с this, а не с доступом к данным.</p><p>Способы получить this внешнего метода:</p><ul><li>Стрелочная функция (лучший современный способ): у неё нет своего this, она берёт его лексически из метода. this.items.forEach(x => { this.total += x; })</li><li>Сохранить this в переменную (исторический паттерн): const self = this в методе, затем использовать self внутри вложенной функции - её замыкание захватит self. Часто переменную называют self, that или _this</li><li>Привязать через bind: передать вложенную функцию с .bind(this)</li><li>Параметр thisArg: у методов перебора (forEach, map, some и др.) есть второй аргумент, задающий this колбэка: this.items.forEach(function(x){...}, this)</li></ul><p>Где это чаще всего проявляется: колбэки в setTimeout, в методах массивов (map/forEach), в обработчиках событий и в .then() промисов - везде, где обычная функция вызывается без объекта.</p>',
    order: 3,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_this_context_004',
    topicId: 'topic_js_this',
    question: 'Что такое условный вызов функций (?.())?',
    answer:
      '<p>Форма опциональной цепочки для вызова: fn?.() вызывает функцию, только если fn не является nullish (не null и не undefined). Если fn равна null/undefined - вызов не происходит, а выражение возвращает undefined, без ошибки. Без ?. вызов nullish-значения как функции бросил бы TypeError (x is not a function).</p><p>Проверяется значение слева от ?.() - сама функция. obj.method?.() означает «вызвать method, если он существует».</p><p>Типичные применения:</p><ul><li>Опциональные колбэки: onChange?.(value) - вызвать, только если колбэк передан</li><li>Опциональные методы объекта: obj.optionalHandler?.()</li><li>В составе цепочки: api?.getUser?.()</li></ul><p>Важный подвох: ?.() проверяет ТОЛЬКО на nullish, но не на то, что значение действительно вызываемо. Если fn существует, но это не функция (например число или объект), fn?.() всё равно бросит TypeError. То есть ?. спасает от null/undefined, но не от «значение есть, но это не функция».</p><p>Отличие от старого приёма fn && fn(): && реагирует на любое falsy, а ?.() - строго на nullish, и читается чище.</p><p>this сохраняется как обычно: obj.method?.() остаётся методным вызовом, поэтому this === obj. А если функцию сначала «оторвать» (const f = obj.method; f?.()), this будет потерян - ?. на правила привязки this не влияет.</p><p>Как часть опциональной цепочки, ?.() участвует в коротком замыкании: в a?.b() при nullish a метод b() не вызывается. Полный разбор опциональной цепочки (?., ?.[], короткое замыкание) - в отдельном вопросе.</p>',
    order: 4,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_this_context_005',
    topicId: 'topic_js_this',
    question: 'Что такое функция-конструктор? Как работает new?',
    answer:
      '<p>Функция-конструктор - это обычная функция, предназначенная для создания объектов и вызываемая через оператор new. По соглашению её имя пишут с заглавной буквы (function User(){}). Технически конструктором может быть любая обычная функция (у неё есть внутренний метод [[Construct]]); а вот стрелочные функции, методы, async-функции и генераторы конструкторами быть не могут.</p><p>Когда функция вызывается через new, выполняется алгоритм:</p><ol><li>Создаётся новый пустой объект</li><li>Прототип ([[Prototype]]) этого объекта устанавливается на Fn.prototype - объект наследует свойства и методы из Fn.prototype</li><li>Функция выполняется, при этом this указывает на новый объект - в теле через this объекту присваивают свойства</li><li>Возврат значения: если функция явно вернула ОБЪЕКТ, то результатом new станет этот объект; если вернула примитив или ничего - вернётся созданный this</li></ol><pre>function User(name) {\n  this.name = name; // this - новый объект\n}\nconst u = new User("Аня"); // { name: "Аня" }, прототип - User.prototype</pre><p>Связь с prototype и constructor: у каждой функции есть свойство prototype (объект), а у него - свойство constructor, ссылающееся обратно на саму функцию. Методы, помещённые в Fn.prototype, доступны всем созданным экземплярам через цепочку прототипов.</p><p>Подвох «забыл new»: если конструктор вызвать без new, как обычную функцию, this будет не новым объектом, а undefined (строгий режим) или глобальным объектом (нестрогий). В нестрогом это молча портит глобальный объект - источник трудных багов.</p><p>new.target: внутри функции это свойство показывает, была ли она вызвана через new (равно самой функции) или как обычная (undefined). Используется, чтобы запретить вызов без new или, наоборот, разветвить логику.</p><p>Связь с классами: class - это синтаксический сахар над функцией-конструктором. Под капотом работает тот же алгоритм new, но класс безопаснее: его нельзя вызвать без new (будет TypeError), методы по умолчанию неперечислимы, а тело всегда в строгом режиме.</p>',
    order: 5,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_this_context_006',
    topicId: 'topic_js_this',
    question: 'Значение свойства prototype у объекта функции?',
    answer:
      '<p>prototype - это обычное свойство-объект, которое есть у функций. По умолчанию оно содержит единственное собственное свойство constructor, ссылающееся обратно на саму функцию. Главная роль Fn.prototype - служить прототипом для объектов, создаваемых через new Fn(): при new именно этот объект назначается новому экземпляру.</p><p>Критически важно различать два похожих, но разных понятия:</p><ul><li>Fn.prototype - свойство ФУНКЦИИ. Это объект-шаблон, который станет прототипом будущих экземпляров. Есть только у функций</li><li>[[Prototype]] (доступен как __proto__ или через Object.getPrototypeOf) - внутренняя ссылка ЛЮБОГО объекта на его прототип, по которой движок ищет свойства. Есть у всех объектов</li></ul><p>Связь между ними: вызов new Fn() устанавливает экземпляру newObj.[[Prototype]] === Fn.prototype. То есть prototype функции становится [[Prototype]] созданного объекта - это и есть мост между двумя понятиями. Путаница prototype и __proto__ - классическая, и держится именно на том, что это разные вещи: одно принадлежит функции, другое - экземпляру.</p><p>У каких функций prototype НЕТ: у стрелочных функций, методов (сокращённый синтаксис), async-функций и обычных методов класса - то есть у всех, кого нельзя вызвать через new. Особый случай - генераторы (function*): у них prototype есть, но он не для new, а задаёт прототип возвращаемого объекта-генератора.</p><p>Дополнительно:</p><ul><li>prototype можно перезаписать целиком (Fn.prototype = {...}), но тогда теряется свойство constructor - при необходимости его восстанавливают вручную</li><li>Сам Fn.prototype тоже имеет свой [[Prototype]] - по умолчанию это Object.prototype, поэтому экземпляры через цепочку получают toString, hasOwnProperty и другие базовые методы</li></ul>',
    order: 6,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_this_context_007',
    topicId: 'topic_js_this',
    question: 'Для чего методы call и apply? Как работают? В чём разница?',
    answer:
      '<p>call и apply вызывают функцию немедленно, явно задавая ей this (это явная привязка, explicit binding). Физически функция не становится методом объекта - просто на время вызова её this устанавливается в переданное значение.</p><p>Сигнатуры и единственное различие - способ передачи аргументов:</p><ul><li>fn.call(thisArg, a, b, c) - аргументы перечисляются по отдельности</li><li>fn.apply(thisArg, [a, b, c]) - аргументы передаются массивом</li><li>Мнемоника: Apply - Array</li></ul><p>Поведение первого аргумента thisArg:</p><ul><li>null или undefined: в нестрогом режиме заменяются на глобальный объект, в строгом - остаются как есть (this будет null/undefined)</li><li>примитив: в нестрогом режиме оборачивается в объект-обёртку (5 станет объектом Number), в строгом - остаётся примитивом</li><li>для стрелочной функции thisArg игнорируется - её this лексический и не переопределяется</li></ul><p>Практические применения:</p><ul><li>Заимствование методов (method borrowing): применить методы массива к псевдомассиву - Array.prototype.slice.call(arguments)</li><li>Точное определение типа: Object.prototype.toString.call(x) даёт "[object Array]", "[object Null]" и т.п.</li><li>Передать массив как набор аргументов: Math.max.apply(null, arr)</li><li>Вызов родительского конструктора в ES5-наследовании: Parent.call(this, ...args)</li></ul><p>Связь со spread: fn.apply(null, arr) сегодня чаще пишут как fn(...arr) - читается лучше и работает с new. Но apply остаётся удобным, когда нужно одновременно задать динамический thisArg.</p><p>Отличие от bind: call и apply вызывают функцию сразу, а bind не вызывает, а возвращает новую функцию с зафиксированным this для последующего вызова.</p>',
    order: 7,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_this_context_008',
    topicId: 'topic_js_this',
    question: 'this функции при её вызове с помощью call и apply?',
    answer:
      '<p>this становится первым аргументом (thisArg), переданным в call или apply. Это явная привязка, которая перекрывает обычные правила определения this (вызов как метод или как простую функцию).</p><p>Краткие уточнения по thisArg (подробнее - в вопросе про call/apply):</p><ul><li>null или undefined - в нестрогом режиме заменяются на глобальный объект, в строгом остаются как есть</li><li>примитив - в нестрогом режиме оборачивается в объект-обёртку, в строгом остаётся примитивом</li></ul><p>Со стрелочными функциями это не работает: переданный объект игнорируется, потому что у стрелки нет собственного this - он лексический и не переопределяется ни call, ни apply.</p><p>Место в приоритете правил this: явная привязка через call/apply сильнее вызова как метода и обычного вызова, но слабее new.</p><p>Нюанс с bind: если функция уже создана через bind с зафиксированным this, последующие call/apply НЕ смогут переопределить её this - привязанную функцию перепривязать нельзя.</p>',
    order: 8,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_this_context_009',
    topicId: 'topic_js_this',
    question: 'Что делает метод bind?',
    answer:
      '<p>bind создаёт НОВУЮ функцию (bound function) с навсегда зафиксированным this. В отличие от call и apply, он не вызывает функцию сразу, а возвращает привязанную версию для последующего использования. Исходную функцию bind не меняет.</p><p>Аргументы: первый - значение this, последующие - аргументы для частичного применения. Они «приклеиваются» как начальные: fn.bind(obj, 1, 2) вернёт функцию, у которой первые два аргумента уже заданы, а остальные дотягиваются при вызове. Это и есть partial application.</p><p>Жёсткость привязки (hard binding) - ключевая особенность: this у привязанной функции переопределить уже нельзя - ни через call/apply, ни повторным bind. Привязка постоянна.</p><p>Исключение - вызов через new: если привязанную функцию вызвать как конструктор (new boundFn()), зафиксированный this игнорируется, потому что new создаёт свой объект. Привязанные же аргументы при этом сохраняются. То есть new по this «сильнее» bind.</p><p>Технические детали:</p><ul><li>name привязанной функции получает префикс: "bound originalName"</li><li>length уменьшается на число уже привязанных аргументов</li><li>На стрелочной функции bind не меняет this (он лексический), хотя привязать аргументы технически может</li></ul><p>Практические применения:</p><ul><li>Сохранить this для колбэка/обработчика: setTimeout(obj.method.bind(obj)), либо привязка методов в конструкторе класса (this.handleClick = this.handleClick.bind(this))</li><li>Частичное применение - специализация общей функции фиксацией части аргументов</li><li>Заимствование метода с фиксацией контекста</li></ul><p>Важный нюанс производительности: каждый вызов bind создаёт новую функцию (новую ссылку). Поэтому bind прямо в JSX/render на каждый рендер создаёт новую функцию, ломая мемоизацию по ссылке - в React это антипаттерн (привязку делают заранее, например в конструкторе или через поле-стрелку).</p>',
    order: 9,
    createdAt: NOW,
    updatedAt: NOW,
  },

  // JavaScript: Замыкания и IIFE (slug: closures-iife, topicId: topic_js_closures) — 4 вопрос(ов)
  {
    id: 'q_closures_iife_001',
    topicId: 'topic_js_closures',
    question: 'Что такое замыкания?',
    answer:
      '<p>Замыкание (closure) - это функция вместе с её лексическим окружением: функция «запоминает» область видимости, в которой была создана, и сохраняет доступ к её переменным даже после того, как внешняя функция завершила работу. Формально замыкание образует любая функция (она всегда замыкает место своего объявления), но практически интересны случаи, когда функция переживает свою внешнюю область.</p><p>Механизм: функция хранит ссылку на лексическое окружение, в котором создана. Когда внешняя функция завершается, её контекст снимается со стека вызовов, но само окружение НЕ удаляется сборщиком мусора, пока на него ссылается живущее замыкание. Поэтому переменные внешней функции продолжают существовать «внутри» замыкания.</p><p>Важно: замыкание хранит живую ССЫЛКУ на переменные, а не их снимок. Изменения переменной видны замыканию, а несколько замыканий над одной областью разделяют одни и те же переменные:</p><pre>function makeCounter() {\n  let count = 0;\n  return {\n    inc: () => ++count,\n    get: () => count,\n  };\n}\nconst c = makeCounter();\nc.inc(); c.inc(); c.get(); // 2 - inc и get делят общий count</pre><p>Классический баг с циклом и var: из-за того, что замыкание держит ссылку, а не копию, все колбэки в for (var i ...) видят ОДНУ переменную i с её финальным значением. Решения: использовать let (создаёт новую привязку на каждой итерации), IIFE для захвата текущего значения, либо bind.</p><p>Применения замыканий:</p><ul><li>Приватное состояние и инкапсуляция (счётчики, модульный паттерн)</li><li>Фабрики функций и каррирование</li><li>Мемоизация - кеш хранится в замыкании</li><li>Обработчики и колбэки, «запоминающие» контекст</li><li>debounce и throttle - таймер и состояние живут в замыкании</li></ul><p>Нюанс памяти: замыкания могут надолго удерживать большие объекты из внешней области, что приводит к утечкам памяти. При этом движки (например V8) обычно захватывают в замыкание не всю область, а только реально используемые переменные - но полагаться на эту оптимизацию как на гарантию не стоит.</p>',
    order: 1,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_closures_iife_002',
    topicId: 'topic_js_closures',
    question: 'Что такое IIFE?',
    answer:
      '<p>IIFE (Immediately Invoked Function Expression) - функция, которая вызывается сразу же после определения. Она создаёт собственную изолированную область видимости, недоступную извне.</p><p>Зачем нужны скобки: если строка начинается с ключевого слова function, парсер трактует её как объявление функции (function declaration), а его нельзя вызвать на месте - function(){}() даёт синтаксическую ошибку. Внешние скобки переводят функцию в контекст выражения, и тогда вызов () становится допустимым.</p><p>Формы записи:</p><ul><li>(function(){})() - скобки вызова снаружи</li><li>(function(){}()) - вызов внутри скобок (эквивалентно)</li><li>!function(){}(), +function(){}(), void function(){}() - унарные операторы тоже переводят функцию в выражение (короче, встречается в минификации)</li><li>Стрелочный: (() => {})()</li><li>Асинхронный: (async () => { await ... })() - частый приём запустить await на верхнем уровне (до появления top-level await)</li></ul><p>Исторически IIFE был ключевым инструментом, потому что до ES6:</p><ul><li>Изоляция области: var имел только функциональную область, и IIFE был основным способом не засорять глобальную область видимости. На IIFE + замыкании строился модульный паттерн</li><li>Приватность: переменные внутри IIFE недоступны снаружи - так создавали приватное состояние</li><li>Захват значения в цикле: IIFE фиксировал текущее значение переменной цикла для колбэков</li></ul><p>Сегодня IIFE нужен реже: блочная область видимости let/const (изоляция обычным блоком { }) и ES-модули (у каждого файла своя область) закрыли большинство этих задач. Но IIFE по-прежнему используется: асинхронный IIFE, одноразовая инициализация с возвратом значения (const config = (() => {...})()), обёртки библиотек (UMD).</p>',
    order: 2,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_closures_iife_003',
    topicId: 'topic_js_closures',
    question: 'Что такое модульный паттерн (module pattern)?',
    answer:
      '<p>Модульный паттерн - классический способ организации кода с приватным состоянием, построенный на IIFE и замыкании. До появления ES-модулей это был основной способ инкапсуляции в JS.</p><p>Идея: IIFE создаёт изолированную область видимости; переменные и функции внутри неё приватны (снаружи недоступны), а наружу через возвращаемый объект отдаётся только публичный API. Возвращаемые методы остаются замыканиями над приватным состоянием.</p><pre>const counter = (function() {\n  let count = 0;            // приватное\n  function log() {          // приватное\n    console.log(count);\n  }\n  return {                  // публичный API\n    increment() { count++; log(); },\n    get() { return count; },\n  };\n})();\ncounter.increment(); // 1\ncounter.count;       // undefined - снаружи нет доступа</pre><p>Revealing module pattern - разновидность: всю логику (и приватную, и публичную) определяют как локальные функции, а в возвращаемом объекте просто «раскрывают» ссылки на те, что должны быть публичными. Плюс - вся структура видна в одном месте (в return), код читается яснее.</p><pre>const module = (function() {\n  let data = [];\n  function add(x) { data.push(x); }\n  function getAll() { return [...data]; }\n  return { add, getAll }; // раскрываем только нужное\n})();</pre><p>Зачем это знать сегодня: ES-модули (import/export) закрыли ту же задачу инкапсуляции на уровне файла, поэтому в новом коде модульный паттерн почти не пишут вручную. Но он важен для понимания работы замыканий, встречается в legacy-коде и в UMD-обёртках библиотек, а его идея (приватное состояние через замыкание) актуальна и сейчас - например при создании фабрик объектов с приватными полями без классов.</p>',
    order: 3,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_closures_iife_004',
    topicId: 'topic_js_closures',
    question: 'Что такое debounce и throttle?',
    answer:
      '<p>Это два приёма ограничения частоты вызова функции, построенные на замыканиях и таймерах. Оба нужны, когда событие срабатывает слишком часто (ввод текста, скролл, ресайз, движение мыши) и обрабатывать каждый вызов дорого.</p><p>Debounce (устранение дребезга): функция выполняется только после того, как вызовы ПРЕКРАТИЛИСЬ на заданное время. Каждый новый вызов сбрасывает таймер. Срабатывает один раз - по «тишине».</p><ul><li>Применение: автодополнение/поиск (ждём, пока пользователь закончит печатать), валидация поля, автосохранение, обработка ресайза по завершении</li></ul><pre>function debounce(fn, delay) {\n  let timer;\n  return function(...args) {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn.apply(this, args), delay);\n  };\n}</pre><p>Throttle (троттлинг): функция выполняется не чаще, чем раз в заданный интервал, сколько бы вызовов ни было. Срабатывает регулярно во время потока событий.</p><ul><li>Применение: обработка скролла, отслеживание позиции мыши, частые ресайзы, ограничение запросов к API</li></ul><pre>function throttle(fn, interval) {\n  let last = 0;\n  return function(...args) {\n    const now = Date.now();\n    if (now - last >= interval) {\n      last = now;\n      fn.apply(this, args);\n    }\n  };\n}</pre><p>Разница простыми словами: debounce ждёт паузы и выполняет один раз в конце; throttle выполняет равномерно через фиксированные промежутки во время активности. Для поля поиска нужен debounce, для скролла - throttle.</p><p>Роль замыкания: таймер (timer) и время последнего вызова (last) хранятся в замыкании возвращаемой функции - это приватное состояние, переживающее отдельные вызовы. Важные детали реализации: сохранять this и аргументы через apply/замыкание, а в продвинутых версиях - опции leading/trailing (выполнять в начале и/или в конце) и метод cancel для сброса. Готовые реализации есть в Lodash (_.debounce, _.throttle).</p>',
    order: 4,
    createdAt: NOW,
    updatedAt: NOW,
  },

  // JavaScript: Объекты (slug: objects, topicId: topic_js_objects) — 19 вопрос(ов)
  {
    id: 'q_objects_001',
    topicId: 'topic_js_objects',
    question: 'Что такое объект?',
    answer:
      '<p>Объект - это коллекция свойств, где каждое свойство представляет собой пару «ключ-значение». Объект - ссылочный тип и фундаментальная структура языка: массивы, функции, Date, RegExp, Map, Set - всё это специализированные объекты.</p><p>Уточнение про порядок: объект часто называют «неупорядоченной» коллекцией, но начиная с ES2015 порядок перечисления ключей детерминирован - сначала целочисленные ключи по возрастанию, затем строковые в порядке добавления, затем символьные.</p><p>Ключи свойств: ключом может быть только строка или Symbol. Любой другой тип ключа приводится к строке: obj[1] это то же, что obj["1"], а obj[{}] превращается в obj["[object Object]"].</p><p>Виды свойств:</p><ul><li>Свойства-данные (data properties) - хранят значение и имеют атрибуты writable, enumerable, configurable</li><li>Свойства-аксессоры (accessor properties) - вместо значения имеют функции-геттер и/или сеттер</li></ul><p>Ссылочная природа: переменная хранит не сам объект, а ссылку на него. Поэтому объекты копируются и сравниваются по ссылке (по идентичности), а не по содержимому: два объекта с одинаковыми свойствами не равны.</p><p>Прототип: у каждого объекта есть внутренняя ссылка [[Prototype]] на объект-прототип, от которого он наследует свойства и методы. По умолчанию это Object.prototype (откуда берутся toString, hasOwnProperty и др.), но прототипом может быть и null - тогда объект «чистый», без наследования.</p><p>Динамичность: свойства можно добавлять, изменять и удалять во время выполнения, если объект не заморожен.</p><p>Создаётся объект литералом { }, через new Object(), Object.create(proto) или конструктором/классом (подробнее - в вопросе о способах создания).</p><p>Объект против Map: обычный объект удобен для структурированных записей с заранее известными ключами-строками; Map - для динамических коллекций ключ-значение с ключами любого типа и частыми добавлениями/удалениями.</p>',
    order: 1,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_objects_002',
    topicId: 'topic_js_objects',
    question: 'Могут ли быть 2 объекта или массива равны?',
    answer:
      '<p>Два разных объекта (или массива) не равны, даже если содержат одинаковые свойства/элементы в одинаковом порядке. Объекты сравниваются по ссылке (идентичности), а не по содержимому: они равны, только если обе переменные ссылаются на один и тот же объект в памяти.</p><p>Причина - ссылочная природа объектов: переменная хранит ссылку, и сравнение сравнивает именно ссылки. Это работает одинаково для всех операторов равенства, приведение типов тут ни при чём:</p><ul><li>{} === {} это false, [] === [] это false</li><li>{} == {} тоже false - даже нестрогое равенство для двух объектов не заглядывает внутрь</li><li>Object.is({}, {}) это false</li><li>а вот const a = {}; const b = a; a === b это true - это один объект</li></ul><p>Как всё-таки сравнить по содержимому (структурное равенство):</p><ul><li>Поверхностное (shallow): сравнить ключи и значения на одном уровне (перебрать Object.keys и сверить). Именно так React сравнивает пропсы</li><li>Глубокое (deep): рекурсивный обход вложенных структур. Готовое решение - Lodash _.isEqual</li><li>Через JSON: JSON.stringify(a) === JSON.stringify(b) - простой, но ненадёжный способ</li></ul><p>Подвохи сравнения через JSON.stringify:</p><ul><li>зависит от порядка ключей: {a:1, b:2} и {b:2, a:1} дадут разные строки</li><li>не сериализует undefined, функции и Symbol - такие свойства теряются</li><li>ломается на циклических ссылках (бросает ошибку)</li><li>Map, Set, Date и др. сериализуются некорректно (Map/Set превращаются в {})</li></ul><p>Когда сравнение по ссылке - это плюс: оно дёшево и используется для оптимизаций - мемоизация по ссылке, ключи в Map/Set по идентичности, сравнение пропсов в React через ===. (Object.is отличается от === только обработкой NaN и -0, но для разных объектов всё равно даёт false.)</p>',
    order: 2,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_objects_003',
    topicId: 'topic_js_objects',
    question: 'Можно ли скопировать объект путём присвоения другой переменной?',
    answer:
      '<p>Нет. Объекты - ссылочный тип, поэтому присваивание копирует не объект, а ссылку на него. После const b = a обе переменные указывают на один и тот же объект: любое изменение через b видно через a, и a === b даёт true.</p><pre>const a = { x: 0 };\nconst b = a;\nb.x = 1;\na.x; // 1 - это тот же объект</pre><p>Нюанс с const: даже если объект объявлен через const, его свойства можно менять. const запрещает переприсваивать саму переменную, но не мутировать объект, на который она ссылается.</p><p>Чтобы действительно скопировать объект, нужно создать новый. Кратко (подробнее - в вопросе о копировании):</p><ul><li>Поверхностная копия (shallow): {...obj} или Object.assign({}, obj). Копируются свойства верхнего уровня, но вложенные объекты остаются общими по ссылке</li><li>Глубокая копия (deep): structuredClone(obj) - современный нативный способ, либо рекурсия/библиотеки</li></ul><p>Главный подвох поверхностной копии: после const copy = {...obj} изменение вложенного объекта (copy.nested.x = 1) затронет и оригинал, потому что nested в копии - та же ссылка, что в исходном объекте. Именно поэтому «скопировал объект, а оригинал тоже поменялся» - частая ошибка.</p>',
    order: 3,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_objects_004',
    topicId: 'topic_js_objects',
    question: 'Как предотвратить изменения объекта?',
    answer:
      '<p>Есть три уровня ограничения изменяемости по нарастающей жёсткости, плюс точечный контроль через дескрипторы свойств.</p><p>Уровни заморозки:</p><ol><li>Object.preventExtensions(obj) - запрещает добавлять новые свойства. Существующие можно менять и удалять</li><li>Object.seal(obj) - запрещает добавлять и удалять свойства (все становятся non-configurable). Существующие значения менять можно</li><li>Object.freeze(obj) - полная заморозка: нельзя добавлять, удалять и изменять свойства (все становятся non-configurable и non-writable)</li></ol><p>Парные методы проверки: Object.isExtensible(obj), Object.isSealed(obj), Object.isFrozen(obj).</p><p>Точечный контроль через Object.defineProperty с атрибутами:</p><ul><li>writable: false - значение нельзя изменить</li><li>configurable: false - свойство нельзя удалить и нельзя менять его атрибуты</li><li>enumerable: false - свойство не появляется в переборах</li></ul><p>Поведение при нарушении: попытка изменить запрещённое в нестрогом режиме молча игнорируется, а в строгом режиме (и в модулях) бросает TypeError.</p><p>Главный подвох - freeze поверхностный (shallow). Он замораживает только верхний уровень, а вложенные объекты остаются изменяемыми:</p><pre>const o = Object.freeze({ nested: { x: 0 } });\no.nested.x = 1; // сработает! вложенный объект не заморожен</pre><p>Для полной защиты нужна глубокая заморозка (deep freeze) - рекурсивно применить Object.freeze ко всем вложенным объектам.</p><p>Прочие тонкости:</p><ul><li>freeze действует только на собственные свойства, прототип не трогает</li><li>заморозить можно и массив - тогда нельзя менять элементы и длину</li><li>freeze примитива - не ошибка, просто возвращает его же</li><li>const и freeze - разное: const запрещает переприсваивать переменную, freeze - менять содержимое объекта</li></ul><p>Для констант-конфигов часто используют Object.freeze; для полноценных иммутабельных структур данных применяют библиотеки (Immer, Immutable.js).</p>',
    order: 4,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_objects_005',
    topicId: 'topic_js_objects',
    question: 'Какие есть виды свойств у объекта и какие атрибуты есть у свойств?',
    answer:
      '<p>«Виды свойств» можно понимать двояко.</p><p>1. По происхождению:</p><ul><li>Собственные (own) - заданы в самом объекте</li><li>Унаследованные (inherited) - получены от объекта-прототипа через цепочку прототипов</li></ul><p>2. По типу (ключевое различие, у них разные атрибуты):</p><ul><li>Свойства-данные (data properties) - хранят значение</li><li>Свойства-аксессоры (accessor properties) - вместо значения имеют функции get и/или set. Свойство не может быть одновременно data и accessor</li></ul><p>Каждое свойство описывается дескриптором (property descriptor) - объектом с его атрибутами. Получить: Object.getOwnPropertyDescriptor(obj, key) или Object.getOwnPropertyDescriptors(obj) для всех.</p><p>Атрибуты свойства-данных:</p><ul><li>value - само значение</li><li>writable - можно ли менять значение</li><li>enumerable - появляется ли свойство в перечислениях</li><li>configurable - можно ли удалять свойство и менять его атрибуты</li></ul><p>Атрибуты свойства-аксессора: get, set, enumerable, configurable (value и writable у них нет - их заменяют get/set).</p><p>Важное уточнение про enumerable: он влияет не только на for...in, но и на Object.keys/values/entries, JSON.stringify и спред {...obj}. Неперечислимое свойство во всех них не появляется.</p><p>Нюанс configurable: выставленный в false он необратим - вернуть свойство в configurable: true уже нельзя. Единственное послабление - writable можно один раз сменить с true на false.</p><p>Главный подвох - значения атрибутов по умолчанию различаются:</p><ul><li>При создании литералом или присваиванием (obj.x = 1) все три флага равны true</li><li>При создании через Object.defineProperty без явного указания все три флага равны false. То есть defineProperty(obj, "x", { value: 1 }) создаёт неперечислимое, неизменяемое и неконфигурируемое свойство</li></ul><p>Задать несколько свойств с дескрипторами сразу - Object.defineProperties(obj, descriptors).</p>',
    order: 5,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_objects_006',
    topicId: 'topic_js_objects',
    question: 'Какой тип данных допустим для имени свойства объекта?',
    answer:
      '<p>Ключом свойства может быть только строка (включая пустую) или Symbol. Других «родных» типов ключей нет.</p><p>Главный нюанс: ключ любого другого типа автоматически приводится к строке. Из-за этого возникают классические эффекты:</p><ul><li>Числа становятся строками: obj[1] - это то же, что obj["1"]. Индексы массива тоже на самом деле строковые ключи</li><li>obj[true] становится obj["true"], obj[null] - obj["null"], obj[undefined] - obj["undefined"]</li><li>Объект в роли ключа приводится через toString к "[object Object]". Подвох: разные объекты-ключи схлопываются в один ключ "[object Object]" и затирают друг друга - obj[{}] = 1; obj[{ a: 1 }] = 2 запишут в одно и то же свойство. (Это поведение можно переопределить через toString / Symbol.toPrimitive объекта-ключа.)</li></ul><p>Symbol - исключение: он не приводится к строке и остаётся уникальным ключом. Поэтому символы используют для «скрытых» и защищённых от коллизий свойств.</p><p>Уникальность: у объекта не может быть двух свойств с одинаковым ключом. При повторном задании ключа последнее значение перезаписывает предыдущее - в литерале { a: 1, a: 2 } останется a: 2.</p><p>Если нужны ключи произвольного типа без приведения - используют Map. В ней ключом может быть что угодно (объект, функция, NaN, любой примитив), причём по идентичности: разные объекты остаются разными ключами, в отличие от обычного объекта.</p><p>Связанный синтаксис - вычисляемые ключи: { [выражение]: значение } - выражение вычисляется и его результат (если не Symbol) приводится к строке-ключу.</p>',
    order: 6,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_objects_007',
    topicId: 'topic_js_objects',
    question: 'Какие есть способы создания объектов?',
    answer:
      '<p>Основные способы:</p><ol><li>Объектный литерал { } - самый частый способ</li><li>Конструктор new Object() - эквивалент { }, на практике почти не используется. (Object(value) без new оборачивает переданное значение)</li><li>Object.create(proto, descriptors) - создаёт объект с явно заданным прототипом. Вторым необязательным аргументом можно передать дескрипторы свойств. Если передать null - объект не унаследует ничего, даже toString (чистый словарь без прототипа, безопасный от загрязнения прототипа). Для обычного объекта прототипом передают Object.prototype</li><li>Конструктор или class через new - для создания множества однотипных объектов с общими методами в прототипе</li><li>Фабричная функция - обычная функция, возвращающая литерал. Удобна, когда нужны приватные данные через замыкание (альтернатива классам без this и new)</li></ol><p>Объектный литерал - это не только { }, у него богатый синтаксис (ES2015+):</p><ul><li>Сокращённые свойства (shorthand): { x, y } вместо { x: x, y: y }</li><li>Сокращённые методы: { method() {} } вместо { method: function() {} }. Такие методы нельзя вызвать через new и в них доступен super</li><li>Вычисляемые ключи: { [выражение]: значение }</li><li>Спред: { ...other } - копирование и слияние объектов (поверхностное)</li><li>Геттеры и сеттеры: { get x() {}, set x(v) {} }</li><li>Задание прототипа прямо в литерале через __proto__ (легаси-синтаксис, оставленный в спецификации)</li></ul><p>Как выбирать: литерал - по умолчанию; Object.create - когда нужен конкретный прототип или объект вовсе без прототипа; class/конструктор - для серий однотипных объектов с методами; фабричная функция - когда нужны приватные поля через замыкание.</p>',
    order: 7,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_objects_008',
    topicId: 'topic_js_objects',
    question: 'Перезаписываются ли унаследованные свойства?',
    answer:
      '<p>Нет, прототип при этом не меняется. При присвоении obj.x = v, если x было унаследовано от прототипа, на самом объекте создаётся СОБСТВЕННОЕ свойство x, которое затеняет (shadowing) прототипное. Прототип остаётся нетронутым, и другие объекты, наследующие от него, по-прежнему видят прежнее значение.</p><p>Но поведение присвоения зависит от того, что именно находится в прототипе - есть три случая:</p><ol><li>Обычное свойство-данное (writable: true) - создаётся собственное свойство, затеняющее прототипное. Это нормальный случай</li><li>Свойство только для чтения (writable: false) - присвоение проваливается: в нестрогом режиме молча, в строгом бросает TypeError. Собственное свойство НЕ создаётся</li><li>Аксессор (сеттер) в прототипе - вызывается сеттер прототипа, собственное свойство не создаётся. А если в прототипе есть только геттер без сеттера - присвоение проваливается (в строгом режиме ошибка)</li></ol><p>Причина в алгоритме присваивания [[Set]]: прежде чем создать собственное свойство, движок проходит по цепочке прототипов и проверяет, нет ли там сеттера или неперезаписываемого свойства - и только потом решает.</p><p>Обход через defineProperty: Object.defineProperty(obj, "x", {...}) создаёт собственное свойство напрямую, минуя [[Set]] и проверки прототипа - так можно затенить даже read-only свойство или сеттер.</p><p>Важное различие присваивания и мутации: затенение происходит только когда мы ПРИСВАИВАЕМ само свойство. Если унаследованное свойство - объект, и мы его МУТИРУЕМ (obj.inherited.x = 1), то меняется общий объект из прототипа, и это изменение видят все наследники. Собственное свойство в этом случае не создаётся.</p>',
    order: 8,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_objects_009',
    topicId: 'topic_js_objects',
    question: 'Как работает delete с унаследованными свойствами?',
    answer:
      '<p>delete удаляет только СОБСТВЕННОЕ свойство объекта. Унаследованное свойство через delete obj.x убрать нельзя - оператор не трогает прототип, и обращение к obj.x после такого delete продолжит возвращать значение из прототипа.</p><p>Чтобы удалить унаследованное свойство, его нужно удалять из самого прототипа: delete Object.getPrototypeOf(obj).x. Но это опасно - изменение затронет ВСЕ объекты, которые наследуют от этого прототипа, а не только текущий.</p><p>Неочевидный эффект с затенением: если у объекта есть собственное свойство, перекрывающее одноимённое прототипное, то delete уберёт собственное - и прототипное свойство снова станет видимым. То есть после delete obj.x значение может стать не undefined, а унаследованным:</p><pre>const proto = { x: "из прототипа" };\nconst obj = Object.create(proto);\nobj.x = "своё";       // затеняет\ndelete obj.x;         // убрали собственное\nobj.x;                // "из прототипа" - не undefined!</pre><p>Проверка результата: после удаления собственного свойства Object.hasOwn(obj, "x") вернёт false, но "x" in obj может остаться true, если такое свойство есть в прототипе.</p><p>Полная механика delete (возвращаемое значение, неудаляемые свойства с configurable: false, поведение с массивами и разреженность, нюанс производительности) разбирается в отдельном вопросе об операторе delete.</p>',
    order: 9,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_objects_010',
    topicId: 'topic_js_objects',
    question:
      'Как можно проверить есть ли в объекте конкретное свойство? Как работают эти способы?',
    answer:
      '<p>Способы проверки и что каждый учитывает:</p><ul><li>"x" in obj - true, если свойство есть как собственное ИЛИ унаследованное (по всей цепочке прототипов). Работает и с символьными ключами</li><li>obj.hasOwnProperty("x") - только собственные свойства</li><li>Object.hasOwn(obj, "x") (ES2022) - тоже только собственные, рекомендуемая замена hasOwnProperty</li><li>obj.propertyIsEnumerable("x") - true, если свойство собственное И перечислимое</li><li>Object.getOwnPropertyDescriptor(obj, "x") - вернёт дескриптор (или undefined), позволяет проверить даже неперечислимые свойства и узнать их атрибуты</li><li>Reflect.has(obj, "x") - функциональный аналог in</li></ul><p>Главный антипаттерн - проверка obj.x !== undefined. Она ненадёжна, потому что не отличает «свойства нет» от «свойство есть, но со значением undefined»:</p><pre>const obj = { x: undefined };\nobj.x !== undefined;        // false - кажется, что свойства нет\n"x" in obj;                 // true - а оно есть\nObject.hasOwn(obj, "x");    // true</pre><p>Почему Object.hasOwn лучше hasOwnProperty:</p><ul><li>У объекта, созданного через Object.create(null), нет прототипа, поэтому obj.hasOwnProperty - не функция (TypeError)</li><li>Объект может переопределить hasOwnProperty собственным свойством, сломав проверку</li><li>Раньше для надёжности писали Object.prototype.hasOwnProperty.call(obj, key). Object.hasOwn решает всё это - это статический метод, не зависящий от прототипа и свойств самого объекта</li></ul><p>Как выбрать: нужно «есть ли свойство хоть где-то по цепочке» - in; «именно собственное» - Object.hasOwn; «собственное и перечислимое» - propertyIsEnumerable. Для различения «нет свойства» и «значение undefined» подходит любой из них, кроме сравнения с undefined. (Детально сам оператор in разбирается в отдельном вопросе.)</p>',
    order: 10,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_objects_011',
    topicId: 'topic_js_objects',
    question: 'Как скопировать объект?',
    answer:
      '<p>Ключевое различие - поверхностная (shallow) и глубокая (deep) копия.</p><p>Поверхностная копия - копирует свойства верхнего уровня, но вложенные объекты остаются общими по ссылке (менять их в копии = менять в оригинале):</p><ul><li>Спред: const clone = { ...obj }</li><li>Object.assign(target, ...sources): const clone = Object.assign({}, obj)</li></ul><p>Нюансы поверхностных способов: оба копируют только собственные перечислимые свойства (символьные ключи копируются, неперечислимые - нет), оба вызывают геттеры источника и сеттеры цели. Отличие: Object.assign мутирует свой первый аргумент (target) и умеет сливать несколько источников, а спред всегда создаёт новый объект.</p><p>Глубокая копия - рекурсивно дублирует всю структуру, вложенные объекты становятся независимыми:</p><ul><li>structuredClone(obj) - современный нативный способ (браузеры, Node 17+), лучший выбор по умолчанию. Поддерживает циклические ссылки, Map, Set, Date, RegExp, ArrayBuffer, типизированные массивы. НЕ умеет: функции (бросает DataCloneError), DOM-узлы, прототип (копия становится обычным объектом), геттеры/сеттеры (копируется только значение)</li><li>JSON: const clone = JSON.parse(JSON.stringify(obj)) - старый трюк. Ограничения: undefined, функции и Symbol теряются; Date превращается в строку; NaN и Infinity становятся null; ломается на циклических ссылках; теряются прототип и Map/Set</li><li>Рекурсивная функция или Lodash _.cloneDeep - когда нужны функции, особые типы или контроль над процессом</li></ul><p>Чего не копирует ни один из простых способов: прототип, неперечислимые свойства и точные дескрипторы. Для максимально полной копии с сохранением прототипа и дескрипторов: Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj)).</p><p>Как выбрать: shallow ({...obj}) - когда вложенность не важна и нужна скорость; structuredClone - для большинства глубоких копий; JSON - только для простых сериализуемых данных; библиотека - когда нужны функции и нестандартные типы.</p>',
    order: 11,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_objects_012',
    topicId: 'topic_js_objects',
    question: 'Какие есть методы/циклы для перечисления свойств объекта?',
    answer:
      '<p>Способы различаются по трём осям: собственные или унаследованные свойства, перечислимые или неперечислимые, строковые или символьные ключи.</p><p>Перебор с учётом прототипа:</p><ul><li>for...in - собственные И унаследованные перечислимые строковые свойства. Символьные и неперечислимые не берёт</li></ul><p>Только собственные перечислимые строковые (самые частые):</p><ul><li>Object.keys(obj) - массив ключей</li><li>Object.values(obj) - массив значений</li><li>Object.entries(obj) - массив пар [ключ, значение]</li></ul><p>Более полный доступ к собственным свойствам:</p><ul><li>Object.getOwnPropertyNames(obj) - все собственные строковые ключи, ВКЛЮЧАЯ неперечислимые (но без символьных)</li><li>Object.getOwnPropertySymbols(obj) - только собственные символьные ключи</li><li>Reflect.ownKeys(obj) - АБСОЛЮТНО все собственные ключи: строковые и символьные, перечислимые и неперечислимые. Самый полный способ</li></ul><p>Сводка (свои / унаследованные / неперечислимые / символьные):</p><ul><li>for...in: да / да / нет / нет</li><li>Object.keys/values/entries: да / нет / нет / нет</li><li>getOwnPropertyNames: да / нет / да / нет</li><li>getOwnPropertySymbols: да / нет / да / только символьные</li><li>Reflect.ownKeys: да / нет / да / да</li></ul><p>Порядок перечисления у всех одинаковый: сначала целочисленные ключи по возрастанию, затем строковые в порядке добавления, затем символьные.</p><p>Как выбрать: обычный перебор данных - Object.keys/entries; нужны неперечислимые - getOwnPropertyNames; нужны символы - getOwnPropertySymbols; всё сразу - Reflect.ownKeys; с учётом прототипа - for...in (часто с фильтром Object.hasOwn). Отдельно: JSON.stringify тоже неявно перечисляет только собственные перечислимые строковые свойства.</p>',
    order: 12,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_objects_013',
    topicId: 'topic_js_objects',
    question: 'В каком порядке перечисляются свойства объекта?',
    answer:
      '<p>Ключи перечисляются тремя группами в строгом порядке:</p><ol><li>Целочисленные ключи (integer index) - по возрастанию числового значения</li><li>Остальные строковые ключи - в порядке добавления (insertion order)</li><li>Символьные ключи - в порядке добавления</li></ol><p>Что именно считается целочисленным ключом (здесь есть подвохи): строка, являющаяся каноническим представлением неотрицательного целого числа (до 2^32 - 1). "0", "1", "42" - да. А вот "01" (ведущий ноль), "-1", "1.5", "1e2", " 1" целочисленными НЕ считаются и идут как обычные строковые в порядке вставки.</p><p>Поэтому числовые ключи «всплывают» наверх и сортируются, даже если добавлены последними:</p><pre>const obj = { 2: "b", 1: "a", first: "x", 0: "c" };\nObject.keys(obj); // ["0", "1", "2", "first"] - числа отсортированы и впереди</pre><p>Исторический контекст: до ES2015 порядок свойств спецификацией НЕ гарантировался (хотя движки де-факто его соблюдали), и полагаться на него считалось ошибкой. С ES2015 порядок ownKeys стандартизирован, а с ES2020 - и для for...in.</p><p>Этому порядку следуют все способы перечисления: Object.keys/values/entries, getOwnPropertyNames, Reflect.ownKeys, for...in, JSON.stringify, спред {...obj}.</p><p>Важное отличие Map: она сохраняет чистый порядок вставки для ЛЮБЫХ ключей, включая числовые, - без «всплытия» целочисленных. Поэтому если нужен строго порядок добавления с числовыми ключами, используют Map, а не объект.</p>',
    order: 13,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_objects_014',
    topicId: 'topic_js_objects',
    question: 'Что такое сериализация объекта? Какие есть методы?',
    answer:
      '<p>Сериализация - преобразование объекта в строку (для хранения или передачи), десериализация - восстановление объекта из строки. Основные методы - JSON.stringify (объект в JSON-строку) и JSON.parse (строка обратно в объект).</p><p>Что JSON.stringify НЕ сериализует:</p><ul><li>undefined, функции, Symbol - в объекте такие свойства пропускаются (ключ исчезает), в массиве заменяются на null, а как самостоятельное значение дают undefined</li><li>BigInt - бросает TypeError</li><li>NaN, Infinity, -Infinity - превращаются в null</li><li>Date - сериализуется в ISO-строку (через свой toJSON), но parse вернёт строку, а не объект Date</li><li>Map, Set, RegExp - превращаются в пустой объект {}</li><li>Циклические ссылки - бросают TypeError (Converting circular structure to JSON)</li><li>Берутся только собственные перечислимые строковые свойства (унаследованные, неперечислимые и символьные игнорируются)</li></ul><p>Аргументы JSON.stringify(value, replacer, space):</p><ul><li>replacer - функция (key, value) => ... для трансформации/фильтрации каждого значения, либо массив ключей-белый список (что включить)</li><li>space - отступ для форматирования (число пробелов или строка), для читаемого вывода</li></ul><p>Кастомизация через toJSON: если у объекта есть метод toJSON, JSON.stringify использует его возвращаемое значение вместо самого объекта. Именно так сериализуется Date. Можно определить свой toJSON, например в классе, чтобы управлять представлением.</p><p>Аргумент JSON.parse(text, reviver): reviver - функция (key, value) => ... для постобработки при разборе. Парная к replacer: например, ею оживляют даты-строки обратно в объекты Date или восстанавливают типы.</p><p>Подвохи JSON.parse: формат строгий - только двойные кавычки, без висячих запятых, без комментариев, без undefined. Ключ __proto__ во входном JSON исторически создавал риск загрязнения прототипа.</p><p>Сериализация часто используется как приём глубокого копирования: JSON.parse(JSON.stringify(obj)) - но со всеми ограничениями выше (подробнее - в вопросе о копировании). Общий разбор самого формата JSON - в отдельном вопросе.</p>',
    order: 14,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_objects_015',
    topicId: 'topic_js_objects',
    question: 'Что делает метод toString?',
    answer:
      '<p>toString() возвращает строковое представление значения. Интерпретатор вызывает его автоматически, когда объект нужно привести к строке (конкатенация со строкой, передача туда, где ожидается строка). Технически toString - один из методов, которые задействует алгоритм ToPrimitive: при строковом приведении (hint "string") он вызывается первым.</p><p>Дефолтный Object.prototype.toString возвращает малополезную строку "[object Object]". Но у него есть второе, неочевидное применение - определение внутреннего типа значения через вызов с подменой this:</p><pre>Object.prototype.toString.call([]);    // "[object Array]"\nObject.prototype.toString.call(null);  // "[object Null]"\nObject.prototype.toString.call(new Date()); // "[object Date]"</pre><p>Это самый надёжный способ узнать «настоящий» тип, где typeof бессилен.</p><p>У встроенных типов toString переопределён осмысленно:</p><ul><li>Array - элементы через запятую (работает через join): [1, 2].toString() даёт "1,2"</li><li>Date - читаемая дата, RegExp - вид /шаблон/флаги, функция - её исходный код</li><li>Number.prototype.toString(radix) - представление в другой системе счисления: (255).toString(16) даёт "ff"</li></ul><p>Symbol.toStringTag - позволяет настроить «хвост» в "[object X]". Если у объекта задать [Symbol.toStringTag] = "MyType", то Object.prototype.toString.call(obj) вернёт "[object MyType]". Так встроенные коллекции дают "[object Map]", "[object Set]" и т.п.</p><p>Свой toString определяют в объекте или классе, чтобы задать понятное строковое представление (для логирования, конкатенации):</p><pre>class Money {\n  constructor(v) { this.v = v; }\n  toString() { return `$${this.v}`; }\n}\n`${new Money(5)}`; // "$5"</pre><p>Связь с valueOf и Symbol.toPrimitive: toString отвечает за строковое приведение, а при числовом или default приведении движок сначала пробует valueOf (подробнее - в вопросах о ToPrimitive и valueOf).</p>',
    order: 15,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_objects_016',
    topicId: 'topic_js_objects',
    question: 'Что делает метод valueOf()?',
    answer:
      '<p>valueOf() возвращает примитивное представление объекта и вызывается, когда объект приводят к не-строковому типу (обычно к числу). В алгоритме ToPrimitive при hint "number" и "default" движок вызывает valueOf ПЕРВЫМ, а toString - запасным.</p><p>Дефолтный Object.prototype.valueOf возвращает сам объект, а не примитив. Именно поэтому по умолчанию он «бесполезен»: раз вернулся не примитив, ToPrimitive переходит к toString. Это объясняет, почему Number({}) идёт через toString и даёт NaN (через "[object Object]").</p><p>Переопределяют valueOf для объектов, которые осмысленно ведут себя как число - тогда заработают арифметика и сравнения:</p><pre>const money = {\n  amount: 100,\n  valueOf() { return this.amount; }\n};\nmoney * 2;     // 200\nmoney + 50;    // 150\nmoney > 99;    // true</pre><p>Встроенные примеры: Date.prototype.valueOf возвращает таймстамп в миллисекундах, поэтому разность дат date2 - date1 даёт интервал в мс. Обёртки Number, String, Boolean возвращают свой примитив.</p><p>Полная картина связки методов приведения (кто когда вызывается):</p><ul><li>Если у объекта есть [Symbol.toPrimitive](hint) - вызывается только он, перекрывая всё остальное</li><li>Иначе по hint: для "string" - сначала toString, потом valueOf; для "number" и "default" - сначала valueOf, потом toString</li><li>Используется первый метод, вернувший примитив; если оба вернули объект - TypeError</li></ul><p>Практический нюанс: valueOf влияет на +, -, *, / и сравнения, но строковое приведение (String(), шаблонный литерал) пойдёт через toString. Если определить только valueOf, можно получить рассогласование числового и строкового представления. Поэтому для полного контроля переопределяют либо оба метода (valueOf и toString), либо один Symbol.toPrimitive с разбором hint - последнее сейчас предпочтительнее.</p>',
    order: 16,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_objects_017',
    topicId: 'topic_js_objects',
    question: 'Что такое вычисляемое свойство?',
    answer:
      '<p>Вычисляемое свойство (computed property, ES2015) - синтаксис, позволяющий задать имя свойства динамически, поместив выражение в квадратные скобки: { [выражение]: значение }. Выражение вычисляется при создании объекта, и его результат становится ключом. До ES2015 динамический ключ можно было задать только после создания объекта через obj[expr] = value, а прямо в литерале - нет.</p><p>Приведение результата к ключу: если выражение даёт Symbol - он остаётся символьным ключом; в остальных случаях результат приводится к строке (по общим правилам ключей объекта).</p><p>Где работают вычисляемые ключи:</p><ul><li>В литерале объекта: { [key]: value }</li><li>Имена методов: { [methodName]() {} }</li><li>Геттеры и сеттеры: { get [k]() {} }</li><li>В классах, в том числе для системных символов: class C { [Symbol.iterator]() {} }</li><li>В деструктуризации: const { [key]: value } = obj</li></ul><p>Применения:</p><ul><li>Ключ из переменной: { [fieldName]: value }</li><li>Символьные ключи прямо в литерале - например сделать объект итерируемым: { [Symbol.iterator]() {...} }</li><li>Построение ключа из шаблона: { [`user_${id}`]: data }</li><li>Обновление по динамическому ключу: { ...state, [action.key]: action.value }</li></ul><p>Нюанс: если два вычисленных выражения дадут одинаковый ключ, последнее значение перезапишет предыдущее - как и для любых дублирующихся ключей.</p>',
    order: 17,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_objects_018',
    topicId: 'topic_js_objects',
    question: 'Что такое методы получения и установки (геттеры и сеттеры)?',
    answer:
      '<p>Геттеры и сеттеры - это свойства-аксессоры (accessor properties): вместо обычного значения у них есть функции-обработчики get и/или set. Снаружи доступ выглядит как обращение к обычному свойству (без скобок вызова), но за чтением и записью стоит код.</p><ul><li>Геттер вызывается при ЧТЕНИИ свойства (obj.x) и возвращает значение</li><li>Сеттер вызывается при ПРИСВАИВАНИИ (obj.x = v), получая присваиваемое значение как параметр</li></ul><p>Синтаксис - ключевые слова get и set перед именем. Работает в разных местах:</p><ul><li>В литерале: { get x() {...}, set x(v) {...} }</li><li>В классе: get x() {} / set x(v) {} (в том числе static и приватные get #x())</li><li>С вычисляемым именем: { get [key]() {} }</li><li>Программно через Object.defineProperty(obj, "x", { get() {}, set(v) {} })</li></ul><p>Если задан только геттер без сеттера, свойство становится доступным только для чтения: присвоение в нестрогом режиме молча игнорируется, в строгом бросает TypeError.</p><p>Применения:</p><ul><li>Вычисляемые на лету свойства: get fullName() { return this.first + " " + this.last }</li><li>Валидация при записи: set age(v) { if (v < 0) throw new Error(); this._age = v; }</li><li>Инкапсуляция - публичный аксессор поверх приватного поля #value</li><li>Реактивность: например реактивность Vue 2 была построена на геттерах/сеттерах через defineProperty</li></ul><p>Подвохи:</p><ul><li>Бесконечная рекурсия: get x() { return this.x } - геттер читает то же свойство и зацикливается. Значение нужно хранить в отдельном поле (_x или приватном #x)</li><li>Сериализация: JSON.stringify вызовет геттер и запишет его ВЫЧИСЛЕННОЕ значение (не определение), а сеттеры игнорируются</li><li>Наследование: аксессоры наследуются через прототип; присвоение свойства, у которого в прототипе есть сеттер, вызывает этот сеттер, а не создаёт собственное свойство</li><li>В дескрипторе у аксессора есть get/set, enumerable и configurable, но нет value и writable</li></ul>',
    order: 18,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_objects_019',
    topicId: 'topic_js_objects',
    question: 'Что такое Proxy?',
    answer:
      '<p>Proxy - объект-обёртка, перехватывающий фундаментальные операции над другим объектом (чтение, запись, удаление, перебор и т.д.) через ловушки (traps). Если для операции ловушка не задана, она прозрачно идёт напрямую к целевому объекту.</p><p>Конструктор принимает два аргумента:</p><ol><li>target - оборачиваемый объект</li><li>handler - объект с ловушками</li></ol><p>Полный набор ловушек:</p><ul><li>get / set - чтение и запись свойства</li><li>has - оператор in</li><li>deleteProperty - delete</li><li>apply - вызов функции; construct - вызов через new</li><li>ownKeys - Object.keys, for...in, getOwnPropertyNames</li><li>getOwnPropertyDescriptor, defineProperty</li><li>getPrototypeOf, setPrototypeOf, isExtensible, preventExtensions</li></ul><p>Reflect - парный к Proxy объект (важнейшая связка). Его методы зеркальны ловушкам: Reflect.get, Reflect.set, Reflect.has, Reflect.deleteProperty и т.д. Внутри ловушки правильно делегировать поведение по умолчанию через Reflect, а не обращаться к target вручную:</p><pre>const p = new Proxy(obj, {\n  get(target, prop, receiver) {\n    return Reflect.get(target, prop, receiver);\n  }\n});</pre><p>Reflect корректно пробрасывает receiver (это важно для геттеров и наследования) и возвращает осмысленные результаты (например set возвращает boolean успеха), поэтому target[prop] - менее надёжная альтернатива.</p><p>Инварианты: ловушки не могут нарушать базовые гарантии языка. Например, нельзя сообщить иное значение для неконфигурируемого неперезаписываемого свойства - будет TypeError. Proxy не позволяет «лгать» о целостности объекта.</p><p>Применения:</p><ul><li>Валидация и нормализация при записи (ловушка set)</li><li>Реактивность: на Proxy построен Vue 3 (в отличие от Vue 2, где использовался Object.defineProperty - Proxy перехватывает и добавление новых свойств, и работу с массивами)</li><li>Значения по умолчанию для отсутствующих ключей, отрицательные индексы массива</li><li>Логирование и трассировка доступа, моки в тестах</li><li>Защитные обёртки (read-only, сокрытие свойств), ленивая инициализация, виртуальные свойства</li></ul><p>Proxy.revocable(target, handler) создаёт отзываемый прокси: вызов revoke() навсегда отключает доступ через него.</p><p>Ограничения: приватные поля # чужого класса через Proxy корректно не перехватываются; есть небольшой оверхед производительности; внутренние слоты Map, Set, Date прозрачно не проксируются - для них нужно оборачивать методы.</p>',
    order: 19,
    createdAt: NOW,
    updatedAt: NOW,
  },

  // JavaScript: Прототипы и прототипное наследование (slug: prototypes, topicId: topic_js_prototypes) — 3 вопрос(ов)
  {
    id: 'q_prototypes_001',
    topicId: 'topic_js_prototypes',
    question: 'Что такое прототипы и прототипное наследование?',
    answer:
      '<p>Почти каждый объект в JS имеет внутреннюю ссылку [[Prototype]] на другой объект - свой прототип, от которого наследует свойства и методы. На этом построено наследование в языке.</p><p>Ключевое разграничение двух понятий:</p><ul><li>[[Prototype]] - есть у любого объекта (экземпляра), это ссылка на его прототип</li><li>prototype - свойство функции-конструктора (или класса): объект, который будет назначен прототипом всем создаваемым через неё экземплярам. По умолчанию в нём есть свойство constructor, ссылающееся на саму функцию</li><li>Связь: new Fn() устанавливает экземпляру obj.[[Prototype]] === Fn.prototype</li></ul><p>Цепочка прототипов: прототип сам имеет свой прототип, и так далее. Цепочка заканчивается на Object.prototype, чей [[Prototype]] равен null - именно null является терминатором цепочки. (Объект, созданный через Object.create(null), не имеет даже Object.prototype.)</p><p>Поиск свойства (delegation): при обращении к obj.x движок ищет x сначала в самом объекте, затем в его прототипе, затем выше по цепочке - и берёт первое найденное. Если нигде нет - undefined.</p><p>Важно: по цепочке идёт только ЧТЕНИЕ. Запись (obj.x = v) обычно создаёт собственное свойство, затеняющее прототипное, и сам прототип не меняет.</p><p>Получить и задать прототип:</p><ul><li>Object.getPrototypeOf(obj) / Object.setPrototypeOf(obj, proto) - современный способ</li><li>Object.create(proto) - создать объект сразу с нужным прототипом</li><li>__proto__ - исторический геттер/сеттер, устаревший (оставлен в стандарте ради совместимости), в новом коде не рекомендуется</li></ul><p>Прототипное против классического наследования: в JS объекты наследуют напрямую от объектов (делегирование), а не от классов. Наследование не копирует свойства - поиск идёт по живой ссылке, поэтому изменение прототипа сразу видно всем наследникам. class - это синтаксический сахар над прототипами.</p><p>Практический смысл: общие методы кладут в prototype (одна копия на все экземпляры - экономия памяти), а уникальные данные - в сам объект через конструктор.</p><p>Нюанс производительности: менять прототип существующего объекта (setPrototypeOf или запись в __proto__) - дорого, это деоптимизирует объект в движке. Прототип лучше задавать при создании (через new или Object.create), а не менять потом.</p>',
    order: 1,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_prototypes_002',
    topicId: 'topic_js_prototypes',
    question: 'Как установить прототип объекту?',
    answer:
      '<p>Способы делятся на два сценария: задать прототип при создании объекта (рекомендуется) и поменять у уже существующего (нежелательно).</p><p>При создании объекта:</p><ul><li>Object.create(proto, descriptors) - создаёт новый объект с указанным прототипом. Можно передать null для объекта без прототипа</li><li>new Fn() - прототипом нового объекта становится Fn.prototype</li><li>class X extends Y - выстраивает цепочку прототипов между классами</li><li>Литерал с __proto__: { __proto__: proto, a: 1 } - специальный синтаксис литерала, задающий прототип (это не обычное свойство)</li></ul><p>После создания:</p><ul><li>Object.setPrototypeOf(obj, proto) - первый аргумент объект, второй - новый прототип (или null)</li><li>obj.__proto__ = proto - устаревший сеттер</li><li>Reflect.setPrototypeOf(obj, proto) - функциональный аналог, возвращает boolean успеха</li></ul><p>Важное предупреждение о производительности: менять прототип уже созданного объекта (setPrototypeOf или запись в __proto__) - дорогая операция. Она деоптимизирует объект в движке (ломает скрытые классы и кеши доступа). Поэтому прототип следует задавать при создании (Object.create, new, extends), а не менять впоследствии.</p><p>Тонкость про __proto__ - под этим именем скрываются три разные вещи:</p><ul><li>obj.__proto__ как геттер/сеттер - устаревший доступ к [[Prototype]]</li><li>{ __proto__: x } в литерале - специальный синтаксис установки прототипа</li><li>"__proto__" как обычный строковый ключ свойства - возможен только в обход (Object.defineProperty, Object.create(null), Map). Историческая путаница вокруг этого - источник уязвимости загрязнения прототипа (prototype pollution)</li></ul><p>Парная операция для чтения прототипа - Object.getPrototypeOf(obj) (предпочтительнее, чем obj.__proto__).</p>',
    order: 2,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_prototypes_003',
    topicId: 'topic_js_prototypes',
    question: 'Что такое прототипы встроенных типов? Можно ли их расширять?',
    answer:
      '<p>У всех встроенных типов есть свои объекты-прототипы, в которых лежат их методы. Именно поэтому методы доступны всем значениям этого типа - они находятся не в самом значении, а в его прототипе, до которого ведёт цепочка.</p><p>Типичные цепочки прототипов:</p><ul><li>Массив: [] -> Array.prototype -> Object.prototype -> null. Поэтому массиву доступны map, filter (из Array.prototype) и одновременно toString, hasOwnProperty (из Object.prototype)</li><li>Функция: function(){} -> Function.prototype -> Object.prototype -> null. Отсюда у функций call, apply, bind</li><li>Строка: "abc" -> String.prototype -> Object.prototype -> null (через временную обёртку при автоупаковке)</li><li>Число, Boolean, Date, RegExp, Map, Set - аналогично, каждый со своим прототипом</li></ul><p>Object.prototype - вершина почти всех цепочек, поэтому его методы (toString, hasOwnProperty, valueOf) доступны почти любому значению.</p><p>Расширение встроенных прототипов (добавление своих методов, например Array.prototype.myMethod = ...) технически возможно, но считается антипаттерном. Почему:</p><ul><li>Конфликты и хрупкость: если два скрипта (или будущая версия стандарта) добавят метод с одинаковым именем, они перезапишут друг друга. Так уже бывало - метод массива flat едва не сломал популярную библиотеку, объявившую свой flatten/flat в прототипе (история со SmooshGate)</li><li>Ломает for...in по массивам и объектам: добавленное в прототип перечислимое свойство начнёт появляться в переборе. (Поэтому если уж расширять, метод добавляют через Object.defineProperty с enumerable: false)</li><li>Глобальное влияние: изменение затрагивает ВСЕ значения этого типа во всём приложении, включая чужой код и зависимости - это глобальная мутация общего состояния</li><li>Усложняет отладку и неявно связывает модули</li></ul><p>Модификацию чужих/встроенных прототипов называют monkey patching. Допустимое применение - полифилы: они добавляют стандартный метод по спецификации только если его ещё нет в окружении (с проверкой и обычно неперечислимо). Свои же произвольные методы лучше оформлять как обычные функции или утилиты, а не вешать на встроенные прототипы.</p>',
    order: 3,
    createdAt: NOW,
    updatedAt: NOW,
  },

  // JavaScript: Классы (slug: classes, topicId: topic_js_classes) — 12 вопрос(ов)
  {
    id: 'q_classes_001',
    topicId: 'topic_js_classes',
    question: 'Что такое класс?',
    answer:
      '<p>Класс (ES2015) - синтаксическая конструкция для создания объектов, задающая их начальные свойства и методы. Ключевое для понимания: класс - это синтаксический сахар над прототипами, а не новая модель ООП. Под капотом класс - это функция-конструктор, а его методы лежат в prototype. Поэтому typeof класса равен "function".</p><p>Структура класса: конструктор (инициализация экземпляра), методы экземпляра (попадают в prototype), статические члены, поля класса, геттеры/сеттеры, приватные поля и методы (#). Детали - в отдельных вопросах.</p><p>Хотя класс - это сахар, у него есть реальные семантические отличия от эквивалентной функции-конструктора:</p><ul><li>Класс нельзя вызвать без new - будет TypeError. Обычная функция-конструктор без new молча выполнится с неверным this</li><li>Тело класса всегда выполняется в строгом режиме</li><li>Методы класса неперечислимы (enumerable: false) - не появляются в for...in. У функции-конструктора методы, добавленные в прототип вручную, перечислимы</li><li>Классы не всплывают как function declaration - до объявления они находятся в TDZ (обращение раньше даёт ReferenceError)</li><li>Методы класса нельзя вызвать через new - у них нет [[Construct]]</li></ul><p>Формы записи: объявление class X {} и выражение const X = class {} (в том числе именованное class expression). Класс - полноценное значение (first-class): его можно передавать, возвращать из функций, создавать анонимным.</p><p>Зачем нужен: читаемый и привычный синтаксис для ООП, аккуратное наследование через extends и super, приватные поля. Но важно помнить, что в основе по-прежнему прототипы: extends выстраивает цепочку [[Prototype]], а методы ищутся по ней так же, как при ручном прототипном наследовании.</p>',
    order: 1,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_classes_002',
    topicId: 'topic_js_classes',
    question: 'Что такое constructor()?',
    answer:
      '<p>constructor - специальный метод класса для инициализации экземпляра; вызывается автоматически при создании объекта через new. Имя зарезервировано. В нём задают начальные значения свойств. Конструктор не обязателен - если особой инициализации нет, его опускают.</p><p>Дефолтный конструктор (если не задан явно) различается:</p><ul><li>В базовом классе - пустой: constructor() {}</li><li>В классе-наследнике - автоматически вызывает родительский: constructor(...args) { super(...args); }</li></ul><p>Ограничения:</p><ul><li>Конструктор может быть только один на класс - два бросают SyntaxError</li><li>Это не обычный метод: его нельзя вызвать отдельно через new</li></ul><p>return из конструктора:</p><ul><li>return объекта - new вернёт этот объект вместо создаваемого this</li><li>return примитива или отсутствие return - возвращается this (примитив игнорируется)</li></ul><p>Порядок инициализации (важные нюансы):</p><ul><li>В наследнике super() должен быть вызван ДО первого обращения к this - до вызова super экземпляр ещё не создан, и this находится в TDZ (обращение даёт ReferenceError)</li><li>Поля класса (x = 1) инициализируются: в базовом классе - в начале конструктора, в наследнике - сразу ПОСЛЕ super(). Общий порядок в наследнике: super() -> инициализация полей -> остальной код конструктора</li></ul><p>Связь с прототипом: instance.constructor ссылается на сам класс (через prototype.constructor). Это позволяет создавать «такой же» объект через new this.constructor().</p>',
    order: 2,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_classes_003',
    topicId: 'topic_js_classes',
    question: 'Свойства класса?',
    answer:
      '<p>Свойства класса хранят данные. Объявлять их можно прямо в теле класса как поля (class fields, x = 1) - относительно новая возможность; раньше свойства задавались только в конструкторе через this.x.</p><p>По принадлежности свойства делятся на:</p><ul><li>Свойства экземпляра - принадлежат каждому объекту. Физически это собственные свойства самого объекта (а не прототипа), у каждого экземпляра свои. Инициализируются при создании; в инициализаторе доступен this (можно x = this.compute()). Порядок - сверху вниз, в наследнике после super()</li><li>Статические свойства (static) - принадлежат самому классу, а не экземплярам. Живут на функции-конструкторе, доступ через Class.x. Наследуются классами-наследниками. Есть и блоки статической инициализации static { ... } для сложной настройки статики</li></ul><p>По уровню доступа:</p><ul><li>Открытые (public) - доступны отовсюду</li><li>Приватные - объявляются с префиксом #. Это настоящая приватность на уровне языка</li></ul><p>Особенности приватных полей (#):</p><ul><li>Доступны только внутри тела класса. Снаружи obj.#x - это SyntaxError (ошибка ещё на этапе разбора, а не во время выполнения)</li><li>Жёсткая инкапсуляция: к приватным полям нет доступа даже у наследников</li><li>Проверить наличие можно через #x in obj (branding-проверка)</li><li>Бывают и приватные статические поля: static #count</li><li>Приватное поле принадлежит конкретному классу: попытка прочитать #x у объекта, не созданного этим классом, бросает TypeError</li></ul><p>Важный контраст: исторически приватность обозначали подчёркиванием (_value) - но это лишь соглашение, не защита. Префикс # даёт реальную защиту, которую нельзя обойти извне.</p>',
    order: 3,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_classes_004',
    topicId: 'topic_js_classes',
    question: 'Методы класса?',
    answer:
      '<p>Методы класса - это функции для работы с данными объекта и реализации его поведения. Главное, что специфично именно для методов (в отличие от свойств) - где они физически расположены:</p><ul><li>Методы экземпляра живут в prototype класса - одна копия на ВСЕ экземпляры. Это экономит память: сколько бы объектов ни создали, метод существует один раз и наследуется через цепочку прототипов</li><li>Статические методы (static) принадлежат самому классу (конструктору), вызываются как Class.method(). Определяют логику класса, а не экземпляров. Наследуются</li><li>Отдельно стоит поле-стрелка (handleClick = () => {}) - формально это не метод, а поле: оно копируется в КАЖДЫЙ экземпляр и имеет привязанный лексический this. Метод экономнее по памяти, поле-стрелка удобнее для сохранения this</li></ul><p>Виды методов (богатый синтаксис):</p><ul><li>Обычные: method() {}</li><li>Геттеры и сеттеры: get x() {}, set x(v) {}</li><li>Генераторы и асинхронные: *gen() {}, async fn() {}, async *fn() {}</li><li>С вычисляемым именем: [expr]() {}</li><li>С системным символом - например сделать класс итерируемым: [Symbol.iterator]() {}</li></ul><p>Методы класса нельзя вызвать через new (у них нет [[Construct]]), и они неперечислимы (не появляются в for...in).</p><p>Потеря this - важный практический нюанс: метод, «оторванный» от экземпляра, теряет контекст. Поскольку тело класса всегда в строгом режиме, this станет undefined:</p><pre>const m = obj.method;\nm(); // this === undefined - частая причина ошибок в обработчиках</pre><p>Решения - привязать метод в конструкторе (this.method = this.method.bind(this)) или использовать поле-стрелку.</p><p>Уровни доступа (public, приватные #method(), статические) устроены так же, как у свойств - подробнее в вопросе о свойствах класса. Приватные методы, как и приватные поля, доступны только внутри тела класса.</p>',
    order: 4,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_classes_005',
    topicId: 'topic_js_classes',
    question: 'Что такое наследование классов?',
    answer:
      '<p>Наследование - расширение одного класса другим через ключевое слово extends: class Child extends Parent. Экземпляр Child получает доступ к методам и свойствам Parent, а также может добавлять свои и переопределять родительские.</p><p>Под капотом extends выстраивает ДВЕ прототипные связи:</p><ul><li>Child.prototype.[[Prototype]] === Parent.prototype - благодаря этому экземпляры Child наследуют методы экземпляров Parent</li><li>Child.[[Prototype]] === Parent - благодаря этому Child наследует СТАТИЧЕСКИЕ члены Parent (вторая, менее известная цепочка)</li></ul><p>Это подтверждает, что class - сахар над прототипами: extends просто настраивает цепочки [[Prototype]].</p><p>Ключевое слово super имеет два применения (детально - в отдельных вопросах):</p><ul><li>super(...) в конструкторе - вызвать конструктор родителя</li><li>super.method() - вызвать метод родителя из переопределённого</li></ul><p>Что можно наследовать через extends:</p><ul><li>другой класс</li><li>функцию-конструктор (старый стиль тоже работает)</li><li>встроенные типы: extends Array, extends Error, extends EventTarget - для своих коллекций и классов ошибок</li><li>выражение: extends getBase() - динамическое наследование, основа миксинов</li></ul><p>Порядок создания при наследовании: new Child() запускает конструктор Child, внутри super() создаёт «родительскую часть», и в итоге получается ОДИН объект с цепочкой прототипов (а не два отдельных). instanceof при этом истинен и для Child, и для Parent.</p><p>Ограничение - только одиночное наследование: класс наследует ровно от одного родителя, множественного наследования нет. Его эмулируют миксинами - функцией, которая принимает базовый класс и возвращает расширенный подкласс.</p><p>Практический ориентир: глубокие иерархии наследования хрупки и плохо расширяются, поэтому часто предпочитают композицию (объект собирается из частей) наследованию.</p>',
    order: 5,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_classes_006',
    topicId: 'topic_js_classes',
    question: 'Что такое переопределение конструктора в классах?',
    answer:
      '<p>Класс-наследник может задать свой конструктор, чтобы добавить или изменить инициализацию. Главное правило - вызов super().</p><p>Правила super() в конструкторе наследника:</p><ul><li>Если у наследника есть собственный конструктор, super() обязателен. Без него обращение к экземпляру даст ReferenceError</li><li>super() нужно вызвать ДО первого обращения к this. До вызова super экземпляр ещё не создан, и this находится в TDZ - попытка прочитать this или вернуть его раньше бросает ReferenceError</li><li>Причина: именно super() запускает конструктор родителя, который и создаёт this. В наследнике this «не существует», пока не отработал родительский конструктор</li></ul><pre>class Animal {\n  constructor(name) { this.name = name; }\n}\nclass Dog extends Animal {\n  constructor(name, breed) {\n    super(name);        // сначала родитель - создаёт this\n    this.breed = breed; // теперь можно обращаться к this\n  }\n}</pre><p>Передача аргументов: super(args) пробрасывает их в конструктор родителя, часто пишут super(...args).</p><p>Если конструктор в наследнике не задан, используется дефолтный, который автоматически вызывает super(...args) с теми же аргументами.</p><p>Порядок инициализации: поля класса наследника инициализируются СРАЗУ ПОСЛЕ super(), до остального кода конструктора. Отсюда тонкий подвох: если родительский конструктор вызывает метод, переопределённый в наследнике, и тот обращается к полям наследника, - на этот момент поля наследника ещё не инициализированы (они задаются после super()). Это распространённая причина неожиданного undefined.</p><p>Вызов методов родителя из других мест разбирается в вопросе о переопределении методов (super.method()).</p>',
    order: 6,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_classes_007',
    topicId: 'topic_js_classes',
    question: 'Что такое переопределение методов класса?',
    answer:
      '<p>Наследник может переопределить метод родителя, объявив метод с тем же именем. Есть два варианта:</p><ol><li>Полная замена - метод наследника полностью заменяет родительский (вместо родительского вызывается он)</li><li>Расширение через super - объявляем метод с тем же именем и внутри вызываем родительскую версию super.method(), а затем дополняем своей логикой</li></ol><pre>class Animal {\n  speak() { return "звук"; }\n}\nclass Dog extends Animal {\n  speak() {\n    return super.speak() + ": гав"; // расширяем родительский\n  }\n}</pre><p>Механизм super.method(): ищет метод в прототипе родителя (Parent.prototype.method) и вызывает его, но с текущим this - то есть this остаётся экземпляром наследника. Поэтому родительский метод работает с актуальными данными объекта.</p><p>Нюансы:</p><ul><li>super в статических методах вызывает статический метод родителя (работает через цепочку Child.[[Prototype]] === Parent)</li><li>super доступен не только в классах, но и в сокращённых методах объектных литералов (там, где у метода установлен внутренний [[HomeObject]])</li><li>super привязан к месту определения метода ([[HomeObject]]), а не к this, поэтому работает корректно даже если метод «оторвать» от объекта. Но в обычной вложенной функции (не методе) super недоступен</li></ul><p>Переопределение методов - основа полиморфизма: какой именно метод вызовется, определяется фактическим прототипом объекта (динамическая диспетчеризация по цепочке прототипов).</p>',
    order: 7,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_classes_008',
    topicId: 'topic_js_classes',
    question: 'Как проверить, относится ли объект к классу?',
    answer:
      '<p>Основной способ - оператор obj instanceof Class, возвращающий boolean.</p><p>Механизм: instanceof идёт по цепочке прототипов объекта и проверяет, встречается ли в ней Class.prototype. Поэтому:</p><ul><li>Работает с наследованием: экземпляр Child является instanceof и Child, и Parent, и Object (все их prototype есть в цепочке)</li><li>Проверяется именно .prototype конструктора, а не сам конструктор. Если подменить Class.prototype или прототип объекта через setPrototypeOf, результат изменится</li></ul><p>Кастомизация через Symbol.hasInstance: поведение instanceof можно переопределить, задав классу статический метод [Symbol.hasInstance](obj). Тогда x instanceof Class вызовет его. Это позволяет реализовать проверку по «утиной типизации», без реального наследования.</p><p>Главный подвох - граница realm. instanceof ломается между разными контекстами (iframe, Web Worker, Node vm), потому что в каждом realm свои конструкторы. Массив, созданный в другом iframe, даст arr instanceof Array === false, так как у того realm свой Array со своим prototype. Для надёжной кросс-realm проверки используют Array.isArray() или Object.prototype.toString.call().</p><p>Другие подвохи:</p><ul><li>Правый операнд должен быть функцией (или иметь Symbol.hasInstance), иначе TypeError</li><li>Примитивы всегда дают false: "str" instanceof String это false (примитив - не объект-обёртка), хотя new String() instanceof String это true</li></ul><p>Альтернативные способы проверки типа:</p><ul><li>Array.isArray(x) - надёжная проверка на массив, в том числе между realm</li><li>Object.prototype.toString.call(x) - даёт тег типа ("[object Array]" и т.п.)</li><li>obj.constructor === Class - проверка точного класса, но ненадёжна: constructor можно перезаписать, и она не учитывает наследование</li><li>#field in obj - branding-проверка для классов с приватными полями</li></ul>',
    order: 8,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_classes_009',
    topicId: 'topic_js_classes',
    question: 'Добавление новых методов в класс?',
    answer:
      '<p>Метод можно добавить в класс через его прототип: Class.prototype.method = function() {...}. Такой метод становится доступен ВСЕМ экземплярам - и будущим, и уже созданным ранее.</p><p>Почему работает для ранее созданных: каждый экземпляр хранит [[Prototype]] - живую ссылку на один и тот же объект Class.prototype. Добавление свойства в этот объект мгновенно видно всем экземплярам через цепочку прототипов (поиск идёт по ссылке, а не по копии). Это наглядная демонстрация делегирования.</p><p>Контраст с определением метода в теле класса:</p><ul><li>Метод, написанный внутри class, - неперечислимый (не попадает в for...in)</li><li>Метод, добавленный вручную через Class.prototype.x = fn, - перечислимый, поэтому появится в for...in. Чтобы добавить «как настоящий», используют Object.defineProperty(Class.prototype, "x", { value: fn, enumerable: false })</li></ul><p>Важные нюансы:</p><ul><li>В добавляемом методе нужна обычная функция, а не стрелочная: у стрелки лексический this, она не получит экземпляр как this. Обычная функция при вызове как метод получит правильный this</li><li>Добавленный извне метод НЕ имеет доступа к приватным полям # класса - они доступны только лексически внутри тела класса. Пропатчить снаружи метод, работающий с #, нельзя</li><li>Статические методы добавляют на сам класс (Class.staticMethod = ...), а не в prototype</li></ul><p>Модификация чужих прототипов называется monkey patching. Для СВОЕГО класса это допустимо (хотя обычно проще дописать метод прямо в класс), а вот расширять встроенные прототипы (Array.prototype и т.п.) - антипаттерн (см. вопрос о прототипах встроенных типов).</p><p>Альтернативы: объявить метод в теле класса, использовать наследование/миксины, либо вынести логику в обычную функцию-утилиту, если методу не нужен доступ к приватному состоянию объекта.</p>',
    order: 9,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_classes_010',
    topicId: 'topic_js_classes',
    question: 'Геттеры, сеттеры и статические члены в классах?',
    answer:
      '<p>Геттеры и сеттеры в классе - это свойства-аксессоры, объявляемые через get/set. Снаружи выглядят как обычное свойство (без скобок), но за доступом стоит метод.</p><pre>class User {\n  #name = "";\n  get name() { return this.#name; }\n  set name(v) {\n    if (!v) throw new Error("пусто");\n    this.#name = v;\n  }\n}\nconst u = new User();\nu.name = "Аня"; // вызовется сеттер\nu.name;          // вызовется геттер</pre><p>Где располагаются: геттеры/сеттеры экземпляра кладутся в prototype класса (как и методы), а не на сам объект. Это отличает их от полей.</p><p>Типичные применения:</p><ul><li>Публичный аксессор над приватным полем - инкапсуляция с валидацией при записи и/или вычислением при чтении</li><li>Вычисляемые свойства: get fullName() { return this.first + " " + this.last }</li><li>Только геттер без сеттера - свойство только для чтения (присвоение в строгом режиме класса бросит TypeError)</li></ul><p>Статические члены (static) принадлежат самому классу, а не экземплярам:</p><ul><li>Статические методы: static create() {} - вызываются как Class.create(). Часто это фабрики и утилиты, относящиеся к типу в целом</li><li>Статические свойства/поля: static count = 0</li><li>Статические геттеры/сеттеры: static get instance() {} - например для синглтона</li><li>Приватные статические члены: static #cache, static #helper()</li><li>Блок статической инициализации: static { ... } - для сложной настройки статики при объявлении класса</li></ul><p>Нюансы static:</p><ul><li>Внутри статического метода this - это сам класс, поэтому static-методы могут вызывать другие static-члены через this</li><li>Статические члены наследуются: подкласс получает доступ к статике родителя (через цепочку Child.[[Prototype]] === Parent), а super в статическом методе вызывает статический метод родителя</li><li>Экземпляр НЕ видит статические члены: instance.staticMethod - undefined, нужно обращаться через класс</li></ul>',
    order: 10,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_classes_011',
    topicId: 'topic_js_classes',
    question: 'Что такое миксины (mixins)?',
    answer:
      '<p>Миксин - способ добавить классу функциональность из нескольких источников, обходя ограничение одиночного наследования (класс может наследовать только от одного родителя). Это эмуляция множественного наследования.</p><p>Самый распространённый подход - функция, принимающая базовый класс и возвращающая новый подкласс с добавленными методами:</p><pre>const Serializable = (Base) => class extends Base {\n  serialize() { return JSON.stringify(this); }\n};\nconst Comparable = (Base) => class extends Base {\n  equals(other) { return this.id === other.id; }\n};\n\nclass Entity {}\nclass User extends Serializable(Comparable(Entity)) {}\n// User получил и serialize, и equals</pre><p>Идея: миксины комбинируются цепочкой вызовов, выстраивая цепочку прототипов из нескольких «слоёв». Каждый миксин - переиспользуемый блок поведения, не привязанный к конкретной иерархии.</p><p>Альтернативный (более старый) подход - копирование методов в прототип через Object.assign(Class.prototype, mixinObject). Минус: не выстраивает цепочку прототипов (instanceof не сработает), и могут возникнуть конфликты имён.</p><p>Плюсы миксинов: переиспользование поведения между несвязанными классами, гибкая композиция возможностей.</p><p>Минусы и риски: конфликты имён методов (последний миксин перезаписывает), усложнение цепочки прототипов и отладки, неявные зависимости между миксинами. Поэтому миксинами не злоупотребляют - часто чистая композиция (объект содержит другие объекты и делегирует им) оказывается проще и понятнее наследования с миксинами.</p>',
    order: 11,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_classes_012',
    topicId: 'topic_js_classes',
    question: 'Что такое new.target?',
    answer:
      '<p>new.target - специальная конструкция, доступная внутри функций и конструкторов, которая показывает, как была вызвана функция:</p><ul><li>при вызове через new - содержит ссылку на конструктор (функцию/класс), которую вызвали</li><li>при обычном вызове - равна undefined</li></ul><p>Применения:</p><ul><li>Защита от вызова конструктора без new в обычных функциях-конструкторах: if (!new.target) throw new Error("нужен new"). У классов это не нужно - они и так требуют new</li><li>Эмуляция абстрактного класса: запретить создавать экземпляры базового класса напрямую, разрешив только наследникам:</li></ul><pre>class Shape {\n  constructor() {\n    if (new.target === Shape) {\n      throw new Error("Shape абстрактный, нельзя создавать напрямую");\n    }\n  }\n}\nclass Circle extends Shape {}\nnew Circle(); // ок\nnew Shape();  // ошибка</pre><p>Важный нюанс при наследовании: new.target указывает на ФАКТИЧЕСКИ вызванный конструктор, а не на тот, в котором написан. При new Circle() внутри конструктора Shape (вызванного через super) new.target будет равен Circle, а не Shape. Именно это позволяет отличать прямое создание базового класса от создания через наследника.</p><p>Также new.target используется в продвинутых случаях с Reflect.construct, где можно явно задать, какой конструктор считать «целевым».</p>',
    order: 12,
    createdAt: NOW,
    updatedAt: NOW,
  },

  // JavaScript: Коллекции — Set, Map, WeakMap, WeakSet (slug: collections, topicId: topic_js_collections) — 4 вопрос(ов)
  {
    id: 'q_collections_001',
    topicId: 'topic_js_collections',
    question: 'Что такое Set?',
    answer:
      '<p>Set - коллекция уникальных значений. В отличие от массива, не допускает дубликатов и не индексируется (нет доступа по индексу). Важное уточнение: Set СОХРАНЯЕТ порядок вставки и итерируется именно в нём - это не «неупорядоченное» множество.</p><p>Хранить можно любые значения - и примитивы, и объекты любого типа.</p><p>Уникальность определяется алгоритмом SameValueZero. Следствия:</p><ul><li>NaN считается равным самому себе, поэтому в Set может быть только один NaN (в отличие от ===)</li><li>+0 и -0 считаются одним значением</li><li>объекты сравниваются по ссылке: два разных объекта с одинаковыми полями - это два разных элемента</li></ul><p>Основной API:</p><ul><li>new Set(iterable) - создание (можно сразу из массива)</li><li>size - количество элементов (свойство, не метод)</li><li>add(value) - добавляет элемент, дубликаты игнорируются. Возвращает сам Set, поэтому вызовы можно чейнить</li><li>delete(value) - удаляет, возвращает boolean (был ли элемент)</li><li>has(value) - проверка наличия</li><li>clear() - очистка</li></ul><p>Главное преимущество - производительность: add, has, delete работают за амортизированное O(1) (хеш-таблица), тогда как array.includes - это O(n). Поэтому для частых проверок принадлежности Set намного быстрее массива.</p><p>Итерируемость и перебор: Set итерируем (for...of, спред [...set]). Методы: forEach, values(), keys() (псевдоним values для совместимости с Map), entries() (даёт пары [value, value]).</p><p>Частые приёмы:</p><ul><li>Убрать дубликаты из массива: [...new Set(arr)]</li><li>Set в массив: [...set] или Array.from(set). Это нужно, чтобы применить map/filter/reduce - напрямую у Set их нет</li></ul><p>Когда Set, а когда массив: Set - когда нужна уникальность и быстрые проверки/добавления/удаления; массив - когда важны порядок с индексами, дубликаты и богатые методы перебора.</p><p>Современное дополнение: в стандарт добавлены методы операций над множествами - union, intersection, difference, symmetricDifference, isSubsetOf, isSupersetOf, isDisjointFrom (раньше их реализовывали вручную; стоит проверять поддержку в целевом окружении).</p>',
    order: 1,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_collections_002',
    topicId: 'topic_js_collections',
    question: 'Что такое Map?',
    answer:
      '<p>Map - коллекция пар ключ-значение. Главное отличие от объекта: ключом может быть значение ЛЮБОГО типа, включая объекты и функции (по идентичности, без приведения к строке).</p><p>Сравнение ключей идёт по алгоритму SameValueZero: NaN можно использовать как ключ (он один), +0 и -0 считаются одним ключом.</p><p>Основной API:</p><ul><li>new Map(iterable) - создание, можно сразу из массива пар: new Map([[k1, v1], [k2, v2]])</li><li>size - количество элементов (свойство)</li><li>set(key, value) - добавить/обновить. Возвращает сам Map, поэтому вызовы чейнятся</li><li>get(key) - получить значение (undefined, если ключа нет)</li><li>has(key) - проверка наличия</li><li>delete(key) - удалить, возвращает boolean</li><li>clear() - очистка</li></ul><p>Перебор: Map итерируем из коробки. for...of map даёт пары [key, value]. Методы: keys(), values(), entries(), forEach((value, key) => ...) - обрати внимание, value идёт первым аргументом.</p><p>Map против объекта (когда что выбирать):</p><ul><li>Ключи: Map - любой тип по идентичности; объект - только строки и символы (прочее приводится к строке)</li><li>Порядок: Map хранит строгий порядок вставки для всех ключей; у объекта целочисленные ключи «всплывают» и сортируются</li><li>Размер: у Map есть size; у объекта - только Object.keys().length</li><li>Итерация: Map итерируем напрямую; объект - нет (нужен Object.entries)</li><li>Чистота: у объекта есть унаследованные ключи из прототипа (риск коллизий и prototype pollution); Map не имеет ключей по умолчанию</li><li>Производительность: Map оптимизирован под частые добавления/удаления; объект - под статичную структуру</li><li>Сериализация: объект сериализуется в JSON напрямую, а Map - нет (превращается в {}), нужно конвертировать через [...map]</li></ul><p>Конвертация: Object.fromEntries(map) - в объект (если ключи строковые); new Map(Object.entries(obj)) - из объекта; [...map] - в массив пар.</p><p>Вывод: Map - для динамических коллекций, ключей-объектов, частых добавлений/удалений, когда важны порядок и размер. Объект - для фиксированной структуры записи, работы с JSON и когда нужен литеральный синтаксис и поведение (методы).</p>',
    order: 2,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_collections_003',
    topicId: 'topic_js_collections',
    question: 'Что такое WeakMap/WeakSet?',
    answer:
      '<p>Это «слабые» версии Map и Set: они хранят объекты по слабым ссылкам, которые НЕ препятствуют сборке мусора. Как только на объект-ключ (в WeakMap) или объект-элемент (в WeakSet) не остаётся других ссылок, сборщик мусора удаляет его, и соответствующая запись из коллекции исчезает автоматически.</p><p>Зачем это нужно: обычные Map и Set держат СИЛЬНЫЕ ссылки и тем самым удерживают объекты в памяти, даже если те больше нигде не используются - это потенциальная утечка. Weak-версии этого не делают, поэтому подходят для привязки данных к объектам без риска их «удержать».</p><p>Ключевое ограничение - только объекты: ключами WeakMap и элементами WeakSet могут быть только объекты (и с недавних пор незарегистрированные Symbol). Примитивы нельзя - у них нет идентичности для отслеживания достижимости.</p><p>Сильно урезанный API:</p><ul><li>WeakMap: get, set, has, delete. НЕТ size, clear, итерации, forEach, keys/values</li><li>WeakSet: add, has, delete</li></ul><p>Почему нет итерации и size: содержимое недетерминировано - сборщик мусора может удалить элемент в любой момент, поэтому перебор или подсчёт дали бы непредсказуемый результат. Невозможность итерации - прямое следствие «слабости». По этой же причине WeakMap/WeakSet не итерируемы (нет for...of и спреда).</p><p>Применения:</p><ul><li>Приватные данные объекта: weakMap.set(instance, privateData) - данные живут ровно столько, сколько сам объект (паттерн приватности до появления #-полей)</li><li>Кеш и мемоизация по объекту-ключу: результат хранится, пока жив объект-ключ, без утечек памяти</li><li>Пометки объектов через WeakSet («обрабатывали ли мы уже этот объект») без их модификации</li><li>Безопасное связывание метаданных с объектами в долгоживущих структурах</li></ul><p>Родственные низкоуровневые инструменты: WeakRef - слабая ссылка на отдельный объект (значение достаётся через deref()), FinalizationRegistry - регистрация колбэка, вызываемого после сборки объекта. Их применяют с осторожностью: момент сборки не гарантирован, полагаться на «когда именно» исчезнет объект нельзя.</p>',
    order: 3,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_collections_004',
    topicId: 'topic_js_collections',
    question: 'Что такое типизированные массивы (TypedArray), ArrayBuffer и DataView?',
    answer:
      '<p>Это механизм для работы с сырыми бинарными данными - в отличие от обычных массивов, которые хранят произвольные значения. Нужны для работы с файлами, сетью (fetch/WebSocket), графикой (Canvas, WebGL, WebGPU), аудио, WebAssembly.</p><p>Три части системы:</p><ul><li>ArrayBuffer - область сырой памяти фиксированного размера в байтах. Сам по себе он «непрозрачен»: читать/писать напрямую нельзя, нужен «вид» (view)</li><li>TypedArray - типизированный вид поверх ArrayBuffer, который интерпретирует байты как числа конкретного типа</li><li>DataView - более гибкий вид с ручным контролем смещений и порядка байт (endianness)</li></ul><p>Конкретные типы TypedArray (глобального TypedArray нет - это абстрактный суперкласс):</p><ul><li>Целые: Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array</li><li>64-битные целые: BigInt64Array, BigUint64Array (работают с BigInt)</li><li>С плавающей точкой: Float32Array, Float64Array (и новый Float16Array)</li><li>Uint8ClampedArray - особый: значения вне 0-255 «зажимаются» к границам (для пиксельных данных Canvas)</li></ul><p>Ключевые особенности TypedArray:</p><ul><li>Фиксированная длина и тип, заданные при создании - нельзя push/pop, элементы только перезаписываются</li><li>Хранят только числа, не разрежены, заполнены нулями по умолчанию</li><li>Доступ по индексу как у массива (arr[0]) и многие методы массива (map, filter, forEach, reduce), но map/filter возвращают TypedArray того же типа, а не обычный массив. Нет методов, меняющих длину (push, splice)</li><li>Запись значения вне диапазона типа - переполнение по модулю (для Uint8Array 256 станет 0), без ошибки</li></ul><p>Несколько видов могут смотреть на ОДИН буфер и интерпретировать его по-разному - так конвертируют данные между форматами. Изменение через один вид сразу видно через другой.</p><p>DataView отличается тем, что позволяет читать/писать значения любого типа по произвольному смещению и явно задавать порядок байт (little-endian / big-endian) - это важно для сетевых протоколов и форматов файлов, где порядок байт фиксирован. У TypedArray порядок байт зависит от платформы.</p><p>Современные возможности (ES2024): ArrayBuffer стал изменяемого размера - new ArrayBuffer(8, { maxByteLength: 16 }) создаёт буфер, который можно расширять/сужать методом resize() без перевыделения. Появился transfer() для передачи владения буфером (старый при этом отсоединяется - detached). SharedArrayBuffer (память, разделяемая между потоками/воркерами) умеет только расти через grow(). Проверить отсоединённость и тип вида можно через ArrayBuffer.isView().</p>',
    order: 4,
    createdAt: NOW,
    updatedAt: NOW,
  },

  // JavaScript: Массивы (slug: arrays, topicId: topic_js_arrays) — 34 вопрос(ов)
  {
    id: 'q_arrays_001',
    topicId: 'topic_js_arrays',
    question: 'Что такое массив?',
    answer:
      '<p>Массив - упорядоченная коллекция элементов, пронумерованных по индексам и хранящихся в порядке добавления. Но важно понимать его природу: в JS массив - это специализированный объект (exotic object), а не непрерывный блок памяти, как в низкоуровневых языках. typeof [] возвращает "object".</p><p>Из «объектной» природы следуют все особенности:</p><ul><li>Индексы - это на самом деле строковые ключи: arr[0] - то же, что arr["0"]. Числовой индекс приводится к строке, как любой ключ объекта</li><li>length - особое свойство, которое автоматически держится равным «максимальный индекс + 1». В него можно писать: уменьшение усекает массив, увеличение добавляет пустоты. Это не строго «количество элементов»</li><li>Динамичность: размер не фиксирован, элементы можно добавлять и удалять во время выполнения</li><li>Гетерогенность: в одном массиве могут лежать значения любых и разных типов - числа, строки, объекты, функции, вложенные массивы</li><li>Разреженность: массив может быть «дырявым» - не обязан быть плотным. [1, , 3] или arr[100] = x создают пропуски</li></ul><p>Проверка на массив - Array.isArray(x), а не typeof (который даёт "object" и для объектов, и для массивов).</p><p>Методы массива берутся из Array.prototype через цепочку прототипов.</p><p>Нюанс производительности (как устроено в движках): несмотря на «объектную» модель языка, движки вроде V8 хранят плотные однотипные массивы (например только числа) эффективно - близко к настоящим массивам в памяти (packed elements). Но как только массив становится разреженным или смешивает типы, движок переключается на «медленное» словарное представление (dictionary mode). Поэтому на практике массивы выгодно держать плотными и по возможности однотипными.</p>',
    order: 1,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_arrays_002',
    topicId: 'topic_js_arrays',
    question: 'Способы создания массива?',
    answer:
      '<p>Основные способы:</p><ul><li>Литерал [] - основной способ: [1, 2, 3] или пустой []</li><li>Конструктор new Array() - с подвохом (см. ниже)</li><li>Array.of(...items) - создаёт массив из переданных аргументов</li><li>Array.from(source, mapFn?) - из итерируемого или псевдомассива</li><li>Спред [...iterable] - из любого итерируемого</li></ul><p>Подвох new Array() - поведение зависит от аргументов:</p><ul><li>Один числовой аргумент задаёт ДЛИНУ и создаёт разреженный массив из пустот: new Array(3) - это [empty, empty, empty] длины 3, а НЕ [3]</li><li>Несколько аргументов или нечисловой - это элементы: new Array(1, 2, 3) даёт [1, 2, 3], new Array("3") даёт ["3"]</li><li>Из-за этой двусмысленности new Array избегают; для массива заданной длины используют осознанно в связке с fill</li></ul><p>Array.of решает эту двусмысленность: Array.of(3) всегда даёт [3] (элемент, а не длину).</p><p>Array.from мощнее, чем кажется:</p><ul><li>Работает не только с массивом, но с ЛЮБЫМ итерируемым (Set, Map, строка, генератор) и с псевдомассивом (arguments, NodeList, { length: 3 })</li><li>Второй аргумент - функция-маппер, применяемая к каждому элементу: Array.from({ length: 5 }, (_, i) => i) даёт [0, 1, 2, 3, 4]</li></ul><p>Идиомы создания заполненного массива:</p><ul><li>Array(n).fill(0) - массив из n нулей</li><li>Array.from({ length: n }, (_, i) => i) - массив [0 .. n-1]</li><li>[...Array(n).keys()] - тоже [0 .. n-1]</li></ul><p>Важный подвох: Array(n).map(fn) НЕ работает для генерации, потому что map пропускает пустоты разреженного массива - функция просто не вызовется. Поэтому для генерации используют fill или Array.from, а не map по «пустому» массиву длины n.</p><p>Современное дополнение: Array.fromAsync (ES2024) создаёт массив из асинхронного итерируемого (стоит проверять поддержку в окружении).</p>',
    order: 2,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_arrays_003',
    topicId: 'topic_js_arrays',
    question: 'Как можно скопировать массив?',
    answer:
      '<p>Как и с объектами, ключевое различие - поверхностная (shallow) и глубокая (deep) копия.</p><p>Поверхностные способы (копируют верхний уровень, вложенные объекты остаются общими по ссылке):</p><ul><li>Спред: const copy = [...arr]</li><li>slice: const copy = arr.slice()</li><li>Array.from: const copy = Array.from(arr)</li><li>concat: const copy = arr.concat([]) или [].concat(arr)</li><li>map: const copy = arr.map(el => el)</li></ul><p>Подвох поверхностной копии: если элементы - объекты, копируются ссылки. const copy = [...arr]; copy[0].x = 1 изменит и оригинал, потому что arr[0] и copy[0] - один объект.</p><p>Глубокие способы (дублируют всю вложенную структуру):</p><ul><li>structuredClone(arr) - современный нативный способ, лучший по умолчанию. Но не копирует функции (бросает ошибку) и теряет несериализуемое</li><li>JSON: JSON.parse(JSON.stringify(arr)) - со всеми ограничениями JSON: undefined/функции теряются, Date становится строкой, ломается на циклах</li><li>Рекурсия или Lodash _.cloneDeep - когда нужны функции и особые типы</li></ul><p>Подвох с разреженными массивами - способы по-разному обходятся с пустотами (дырками):</p><ul><li>map пропускает дырки: callback на них не вызывается, разреженность сохраняется</li><li>спред и Array.from превращают дырки в undefined (нормализуют в плотный массив)</li><li>slice и concat сохраняют разреженность</li></ul><p>Производительность: slice() и спред - самые быстрые для поверхностной копии; map медленнее (вызов функции на каждом элементе); JSON - самый медленный.</p><p>Нюанс: если на массив навешаны дополнительные нестандартные свойства (arr.foo = 1, ведь массив - это объект), большинство способов копирования их не переносят - копируются только индексированные элементы и length.</p>',
    order: 3,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_arrays_004',
    topicId: 'topic_js_arrays',
    question: 'Что будет если передать в метод Array.from() функцию вторым аргументом?',
    answer:
      '<p>Второй аргумент Array.from - это функция-маппер: она применяется к каждому элементу при создании массива, и в результат попадает её возвращаемое значение. По сути это Array.from(src).map(fn), но за ОДИН проход - без создания промежуточного массива, поэтому эффективнее.</p><p>Сигнатура маппера: (element, index) => ... - доступны и элемент, и индекс. Третьим аргументом Array.from(src, fn, thisArg) можно задать this для маппера.</p><p>Главное применение - генерация массивов. Поскольку Array.from работает и с псевдомассивом { length: n }, маппер вызывается для каждого индекса:</p><pre>Array.from({ length: 5 }, (_, i) => i);      // [0, 1, 2, 3, 4]\nArray.from({ length: 3 }, () => 0);          // [0, 0, 0]</pre><p>Ключевое отличие от .map(): при работе с { length: n } (где реальных элементов нет) маппер всё равно вызывается для каждого индекса, получая undefined. А вот map по разреженному массиву пропустил бы пустоты и функцию не вызвал. Именно поэтому для генерации используют Array.from, а не Array(n).map(fn).</p><p>Полезный практический случай - матрицы. Наивный Array(n).fill([]) создаёт массив, где все строки - ОДНА и та же ссылка на общий массив (изменение одной меняет все). Array.from с фабрикой создаёт независимые строки:</p><pre>Array.from({ length: n }, () => Array.from({ length: m }, () => 0));</pre><p>Общий разбор самого метода Array.from (работа с итерируемыми и псевдомассивами) - в вопросе о способах создания массива.</p>',
    order: 4,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_arrays_005',
    topicId: 'topic_js_arrays',
    question: 'Что будет если установить значение length массива меньшее, чем текущее значение?',
    answer:
      '<p>Все элементы с индексами больше либо равными новому значению length безвозвратно удаляются. Это работает, потому что length - записываемое свойство (writable), и запись в него легально меняет набор элементов массива.</p><p>Частный случай: arr.length = 0 - быстрый способ полностью очистить массив, мутируя его (в отличие от arr = [], который создаёт новый массив, а старый со всеми ссылками на него остаётся).</p><p>Зеркальный случай - установка length БОЛЬШЕ текущего: массив становится разреженным, в конец добавляются пустоты (дырки), а не undefined-элементы. length растёт, но реальных элементов не прибавляется.</p><p>Двусторонняя «магия» length: добавление элемента по индексу автоматически обновляет length (length всегда равен «максимальный индекс + 1»), а запись в length меняет элементы. Поэтому arr[100] = x в коротком массиве сделает length равным 101, оставив между ними дырки.</p><p>Ограничения значения length:</p><ul><li>Только целое число в диапазоне 0 .. 2^32 - 1</li><li>Отрицательное, дробное или нечисловое значение бросает RangeError: Invalid array length</li><li>length - неудаляемое и неперечислимое свойство: delete arr.length не сработает, в for...in и Object.keys оно не появляется</li></ul><p>Способы очистить массив: arr.length = 0 и arr.splice(0) мутируют существующий массив (все ссылки увидят его пустым), а arr = [] просто заводит новый массив, не трогая старый.</p>',
    order: 5,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_arrays_006',
    topicId: 'topic_js_arrays',
    question: 'Как работает операция delete с массивами?',
    answer:
      '<p>delete arr[i] удаляет элемент, но НЕ сдвигает остальные и НЕ меняет length - на месте элемента остаётся дырка (пустой слот), а массив становится разреженным. Например delete arr[1] из [1, 2, 3] даёт [1, empty, 3] с прежней длиной 3.</p><p>Важное различие: пустой слот (empty) - это не то же, что значение undefined. Элемента физически НЕТ:</p><ul><li>arr[1] при чтении вернёт undefined</li><li>но 1 in arr даёт false (индекса нет), Object.hasOwn(arr, 1) тоже false</li></ul><p>Именно поэтому delete для массивов - почти всегда ошибка: он оставляет разреженность, не сдвигает элементы и портит дальнейший перебор. Для реального удаления используют:</p><ul><li>splice(i, 1) - удаляет элемент, сдвигает остальные и уменьшает length. Главный способ удаления по индексу</li><li>filter - возвращает новый массив без элемента (иммутабельно)</li><li>pop / shift - для удаления с краёв</li></ul><p>Контраст: delete arr[1] оставляет дырку и length неизменным, а arr.splice(1, 1) даёт плотный массив с уменьшенным на 1 length.</p><p>Как методы реагируют на дырку после delete (кратко): forEach, map, filter пропускают пустоты; for...of и обычный for по индексу выдают undefined; for...in и Object.keys пропускают. Подробнее - в вопросе о разреженных массивах.</p><p>Общая механика оператора delete (возвращаемое значение, неудаляемые свойства, работа с объектами, нюансы производительности) - в отдельном вопросе об операторе delete.</p>',
    order: 6,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_arrays_007',
    topicId: 'topic_js_arrays',
    question: 'Что такое разреженный массив? Как методы работают с дырками?',
    answer:
      '<p>Разреженный массив (sparse array) - массив с «дырками»: отсутствующими элементами на некоторых индексах. При этом length больше числа реальных элементов.</p><p>Как возникают дырки:</p><ul><li>new Array(n) - создаёт n пустот</li><li>присвоение за пределы: arr[10] = x в коротком массиве</li><li>увеличение arr.length</li><li>delete arr[i]</li><li>литерал с пропуском: [1, , 3]</li></ul><p>Дырка - это не undefined. Элемента физически нет: 1 in [1, , 3] даёт false, тогда как 1 in [1, undefined, 3] даёт true. При чтении дырка возвращает undefined, но это «вычисленный» ответ, а не реальное значение.</p><p>Ключевая сложность - методы по-разному реагируют на дырки:</p><p>Пропускают дырки (callback не вызывается на пустотах):</p><ul><li>forEach, map, filter, reduce, some, every</li><li>for...in, Object.keys</li><li>особенность map: он пропускает дырки, но СОХРАНЯЕТ их в результирующем массиве (слот остаётся пустым)</li></ul><p>Видят дырки как undefined:</p><ul><li>for...of и обычный for по индексу</li><li>спред [...arr] и Array.from - нормализуют разреженный массив в плотный, заменяя дырки на undefined</li><li>join - дырка превращается в пустую строку (как null/undefined)</li></ul><p>«Заполняющие» и поисковые методы трактуют дырки как undefined:</p><ul><li>fill, find, findIndex - проходят все индексы, дырка = undefined</li><li>includes находит undefined в дырке (вернёт true при поиске undefined), а indexOf - НЕ находит (пропускает дырки). Это тонкое различие includes и indexOf на разреженных массивах</li></ul><p>Почему это важно: один и тот же разреженный массив даёт разные результаты в зависимости от метода - частый источник тонких багов. Поэтому разреженности избегают, а если она случайно возникла - нормализуют через спред или Array.from.</p>',
    order: 7,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_arrays_008',
    topicId: 'topic_js_arrays',
    question: 'Как работает метод forEach? Можно ли его остановить?',
    answer:
      '<p>forEach перебирает массив, вызывая для каждого элемента переданную функцию. Ничего не возвращает (результат - undefined), используется ради побочных эффектов.</p><p>Общая сигнатура callback (одинаковая у forEach, map, filter, find, some, every): callback(element, index, array). То есть доступны не только элемент, но и его индекс, и сам массив. Вторым аргументом самого метода можно передать thisArg - значение this внутри callback (не действует на стрелочные функции).</p><p>Остановить forEach нельзя: break и continue в нём не работают (это callback-функция, а не цикл - попытка break даёт SyntaxError). Прервать перебор можно только выбросив исключение, что считается плохой практикой. return внутри callback завершает лишь текущую итерацию (работает как continue), но не останавливает forEach.</p><p>Если нужна возможность прерывания - используют другие инструменты:</p><ul><li>обычный for или for...of (в них работает break)</li><li>some - останавливается, когда callback вернул true; every - когда вернул false. Их часто применяют как «прерываемый forEach»</li><li>find / findIndex - останавливаются на первом совпадении</li></ul><p>Общие нюансы методов перебора (касаются и forEach):</p><ul><li>Пропускают дырки разреженного массива - callback на пустотах не вызывается</li><li>Диапазон фиксируется в начале: элементы, добавленные в массив во время перебора, не обрабатываются; изменения ещё не посещённых элементов - видны; удаление влияет на обход</li><li>forEach не мутирует массив сам по себе (но callback может)</li></ul>',
    order: 8,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_arrays_009',
    topicId: 'topic_js_arrays',
    question: 'Как работает метод map?',
    answer:
      '<p>map создаёт НОВЫЙ массив той же длины, применяя callback к каждому элементу и собирая возвращаемые значения. Исходный массив не мутируется. callback(element, index, array), можно передать thisArg.</p><p>Ключевые моменты:</p><ul><li>Всегда возвращает массив той же длины, что исходный (соответствие 1:1). Если нужно отфильтровать - это filter, а не map. Для «map + filter» за один проход есть flatMap (возвращая [] для отбрасываемых) или reduce</li><li>Должен быть чистым: callback обязан возвращать значение. map ради побочных эффектов без использования результата - антипаттерн (для этого forEach)</li><li>Частый подвох: map(parseInt) ломается, потому что parseInt получает (element, index) и index трактуется как система счисления. ["1","2","3"].map(parseInt) даёт [1, NaN, NaN]. Нужно map(Number) или map(x => parseInt(x, 10))</li></ul><p>Поведение с дырками: map пропускает пустоты разреженного массива (callback не вызывается), но СОХРАНЯЕТ их в результате - слот остаётся пустым.</p><p>map широко используется в декларативной обработке данных и в UI (например рендеринг списка в React, где каждому элементу нужен уникальный key).</p>',
    order: 9,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_arrays_010',
    topicId: 'topic_js_arrays',
    question: 'Как работает метод filter?',
    answer:
      '<p>filter создаёт НОВЫЙ массив из элементов, для которых callback вернул truthy-значение (не обязательно строго true - проверяется по truthy/falsy). Исходный массив не мутируется. callback(element, index, array), можно передать thisArg.</p><p>Особенности:</p><ul><li>Длина результата от 0 до длины исходного. Если ничего не подошло - пустой массив</li><li>Решение по truthy/falsy: filter(Boolean) - идиома удаления всех falsy-значений (0, "", null, undefined, NaN, false) из массива</li><li>Сохраняет порядок и не меняет сами элементы (только отбирает)</li></ul><p>Частые приёмы:</p><ul><li>Удаление по условию (иммутабельная альтернатива splice/delete): arr.filter(x => x !== target)</li><li>filter(Boolean) - очистка от пустых значений</li><li>Удаление дубликатов с проверкой первого вхождения: arr.filter((x, i) => arr.indexOf(x) === i) (хотя для примитивов проще [...new Set(arr)])</li></ul><p>Поведение с дырками: пропускает пустоты разреженного массива (как и другие методы перебора).</p>',
    order: 10,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_arrays_011',
    topicId: 'topic_js_arrays',
    question: 'Как работают методы find и findIndex?',
    answer:
      '<p>Оба ищут ПЕРВЫЙ элемент, удовлетворяющий условию callback, и оба ОСТАНАВЛИВАЮТСЯ на первом совпадении (не обходят массив до конца). Различаются только тем, что возвращают:</p><ul><li>find - сам найденный элемент, или undefined, если не нашлось</li><li>findIndex - индекс найденного элемента, или -1, если не нашлось</li></ul><p>callback(element, index, array), можно передать thisArg. Условие проверяется по truthy/falsy.</p><p>Отличие от indexOf/includes: find/findIndex принимают ФУНКЦИЮ-предикат (гибкий поиск по любому условию, например по полю объекта: users.find(u => u.id === 5)), тогда как indexOf/includes ищут по конкретному значению.</p><p>Поведение с дырками: в отличие от forEach/map/filter, find и findIndex НЕ пропускают дырки - они проходят все индексы, и в дырке callback получает undefined. Поэтому find может «найти» в разреженном массиве элемент по условию x => x === undefined.</p><p>Парные методы для поиска с конца (ES2023): findLast и findLastIndex - то же самое, но обход справа налево, возвращают последнее совпадение.</p>',
    order: 11,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_arrays_012',
    topicId: 'topic_js_arrays',
    question: 'Как работают методы some и every? Как ведут себя на пустом массиве?',
    answer:
      '<p>Оба проверяют элементы массива предикатом callback и возвращают boolean, оба используют короткое замыкание (останавливаются досрочно):</p><ul><li>some - возвращает true, если ХОТЯ БЫ ОДИН элемент удовлетворяет условию. Останавливается на первом true (логическое ИЛИ по массиву)</li><li>every - возвращает true, если ВСЕ элементы удовлетворяют условию. Останавливается на первом false (логическое И по массиву)</li></ul><p>callback(element, index, array), можно передать thisArg. Их часто используют как «прерываемый перебор»: some прерывается, когда нашли подходящий, every - когда нашли неподходящий.</p><p>Поведение на пустом массиве (важный нюанс, следует из математической логики):</p><ul><li>[].every(...) возвращает true - «все ноль элементов удовлетворяют условию» (vacuous truth, истина по пустому множеству)</li><li>[].some(...) возвращает false - «не нашлось ни одного» (искать не в чем)</li></ul><p>На практике это значит: every на возможно пустых данных может неожиданно вернуть true (например «все товары в наличии», когда товаров нет вообще) - этот случай стоит проверять отдельно.</p><p>Поведение с дырками: пропускают пустоты разреженного массива.</p>',
    order: 12,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_arrays_013',
    topicId: 'topic_js_arrays',
    question: 'Как работает метод flat?',
    answer:
      '<p>flat создаёт НОВЫЙ массив, в котором вложенные массивы «развёрнуты» (подняты на верхний уровень) на заданную глубину. Исходный массив не мутируется.</p><p>Аргумент - глубина (depth), на сколько уровней уменьшить вложенность:</p><ul><li>По умолчанию 1 (один уровень): [1, [2, [3]]].flat() даёт [1, 2, [3]]</li><li>Любое число: [1, [2, [3]]].flat(2) даёт [1, 2, 3]</li><li>Infinity - полностью выровнять массив любой вложенности в плоский</li></ul><p>Дополнительный эффект: flat попутно удаляет дырки разреженного массива (пустоты выбрасываются).</p><p>Историческая заметка: метод чуть не назвали flatten, но это сломало бы старую версию библиотеки MooTools, добавившую свой Array.prototype.flatten - история известна как SmooshGate. Это классический пример, почему опасно расширять встроенные прототипы.</p><p>Для одновременного map и выравнивания на один уровень есть flatMap.</p>',
    order: 13,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_arrays_014',
    topicId: 'topic_js_arrays',
    question: 'Как работает метод flatMap?',
    answer:
      '<p>flatMap - комбинация map и flat с глубиной 1: сначала к каждому элементу применяется callback, затем результат выравнивается на ОДИН уровень. Возвращает новый массив. callback(element, index, array).</p><p>flatMap(fn) эквивалентно arr.map(fn).flat(1), но за один проход (эффективнее).</p><p>Главные применения:</p><ul><li>Когда callback возвращает массив на каждый элемент, и эти массивы нужно слить в один плоский: [1, 2].flatMap(x => [x, x * 2]) даёт [1, 2, 2, 4]</li><li>Map + filter за один проход: вернув [] из callback, элемент можно «отбросить», а вернув [value] - оставить. Например arr.flatMap(x => x > 0 ? [x] : []) - отфильтровать и преобразовать одновременно</li><li>Разбиение элементов: words.flatMap(s => s.split(" "))</li></ul><p>Важно: выравнивает только на ОДИН уровень. Более глубокую вложенность flatMap не развернёт - для этого нужен отдельный flat.</p>',
    order: 14,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_arrays_015',
    topicId: 'topic_js_arrays',
    question: 'Как работает метод concat?',
    answer:
      '<p>concat создаёт НОВЫЙ массив, объединяя исходный с переданными аргументами (другими массивами и/или отдельными значениями). Исходный массив не мутируется. arr.concat(a, b, ...).</p><p>Ключевая особенность - «распаковка» на один уровень: если аргумент - массив, его элементы добавляются по отдельности; если значение - добавляется как есть.</p><ul><li>[1, 2].concat([3, 4]) даёт [1, 2, 3, 4] (массив распакован)</li><li>[1, 2].concat(3, 4) даёт [1, 2, 3, 4] (значения)</li><li>[1].concat([2, [3]]) даёт [1, 2, [3]] - распаковка только на один уровень, вложенный массив остаётся</li></ul><p>concat против спреда [...a, ...b]: результат обычно одинаковый, и спред сейчас используют чаще. Тонкое различие: concat по умолчанию распаковывает только настоящие массивы (Array.isArray), а спред разворачивает любое итерируемое. Поведение распаковки в concat можно переопределить через символ Symbol.isConcatSpreadable.</p><p>Поверхностность: concat копирует ссылки на вложенные объекты (как и спред) - это поверхностное объединение.</p>',
    order: 15,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_arrays_016',
    topicId: 'topic_js_arrays',
    question: 'Как работают методы push и pop?',
    answer:
      '<p>Оба МУТИРУЮТ массив и работают с его КОНЦОМ:</p><ul><li>push(...items) - добавляет один или несколько элементов в конец. Возвращает новую длину массива</li><li>pop() - удаляет последний элемент. Возвращает удалённый элемент (или undefined, если массив пуст)</li></ul><p>Работа с концом массива - быстрая (амортизированно O(1)), так как не требует сдвига элементов. Этим push/pop выгодно отличаются от shift/unshift, которые работают с началом и сдвигают все элементы (O(n)).</p><p>Вместе push и pop реализуют структуру стек (LIFO - последним пришёл, первым ушёл).</p><p>Нюансы:</p><ul><li>push возвращает длину, а не массив - поэтому его НЕЛЬЗЯ чейнить как arr.push(1).push(2) (у числа нет методов массива)</li><li>Иммутабельная альтернатива push - спред: const next = [...arr, item] (новый массив, исходный не тронут) - частый приём в React/Redux</li><li>push можно использовать для слияния через спред-аргументы: arr.push(...otherArr)</li></ul>',
    order: 16,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_arrays_017',
    topicId: 'topic_js_arrays',
    question: 'Как работают методы shift и unshift?',
    answer:
      '<p>Оба МУТИРУЮТ массив и работают с его НАЧАЛОМ:</p><ul><li>shift() - удаляет первый элемент, сдвигая остальные к началу. Возвращает удалённый элемент (или undefined для пустого массива)</li><li>unshift(...items) - добавляет один или несколько элементов в начало, сдвигая остальные. Возвращает новую длину массива</li></ul><p>Важный нюанс производительности: работа с началом массива - дорогая, O(n), потому что после неё все остальные элементы приходится переиндексировать (сдвинуть). Это медленнее, чем push/pop (O(1) с конца). При больших массивах и частых операциях с началом это заметно.</p><p>Сочетания структур данных:</p><ul><li>push + shift реализуют очередь (FIFO - первым пришёл, первым ушёл)</li><li>unshift + pop - очередь в обратную сторону</li></ul><p>Нюанс unshift с несколькими аргументами: они вставляются в начало целым блоком, сохраняя свой порядок: [3].unshift(1, 2) даёт [1, 2, 3], а не [2, 1, 3].</p><p>Иммутабельные альтернативы через спред: [item, ...arr] (как unshift), arr.slice(1) (как shift).</p>',
    order: 17,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_arrays_018',
    topicId: 'topic_js_arrays',
    question: 'Как работает метод slice?',
    answer:
      '<p>slice(start, end) возвращает НОВЫЙ массив - копию участка исходного, не мутируя его. start - индекс начала (включительно), end - индекс конца (НЕ включается).</p><ul><li>Только start: до конца массива - arr.slice(2)</li><li>Без аргументов: arr.slice() - поверхностная копия всего массива</li><li>Отрицательные индексы отсчитываются с конца: arr.slice(-2) - последние два элемента, arr.slice(1, -1) - без первого и последнего</li></ul><p>Не путать со splice: slice не мутирует и возвращает копию участка; splice мутирует исходный массив. Похожие имена - частый источник путаницы.</p><p>Применения: поверхностное копирование массива (slice()), взятие подмассива, конвертация псевдомассива - Array.prototype.slice.call(arguments) (старый приём до Array.from/спреда).</p><p>Копия поверхностная: вложенные объекты копируются по ссылке.</p>',
    order: 18,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_arrays_019',
    topicId: 'topic_js_arrays',
    question: 'Как работает метод splice?',
    answer:
      '<p>splice(start, deleteCount, ...items) МУТИРУЕТ массив: удаляет и/или вставляет элементы на месте. Универсальный инструмент изменения массива.</p><p>Аргументы:</p><ul><li>start - индекс, с которого начать (поддерживает отрицательные - отсчёт с конца)</li><li>deleteCount - сколько элементов удалить. Если не указан - удаляются все от start до конца; если 0 - ничего не удаляется (режим чистой вставки)</li><li>...items - элементы для вставки на место удалённых (необязательно)</li></ul><p>Возвращает массив УДАЛЁННЫХ элементов (пустой, если ничего не удалили) - а не изменённый массив. Это частый подвох: чтобы получить изменённый массив, нужно использовать сам arr после вызова.</p><p>Примеры:</p><ul><li>Удаление: arr.splice(1, 2) - удалить 2 элемента с индекса 1</li><li>Вставка: arr.splice(1, 0, "a", "b") - вставить, ничего не удаляя</li><li>Замена: arr.splice(1, 1, "x") - удалить 1 и вставить на его место</li></ul><p>splice - правильный способ удалить элемент по индексу (в отличие от delete, оставляющего дырку): он сдвигает элементы и обновляет length.</p><p>Иммутабельный аналог (ES2023): toSpliced - делает то же, но возвращает новый массив, не мутируя исходный.</p>',
    order: 19,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_arrays_020',
    topicId: 'topic_js_arrays',
    question: 'Как работают методы indexOf и lastIndexOf?',
    answer:
      '<p>Оба ищут элемент по ЗНАЧЕНИЮ и возвращают его индекс, или -1, если не найдено. Различаются направлением:</p><ul><li>indexOf(value, fromIndex?) - ищет с начала, возвращает индекс первого совпадения</li><li>lastIndexOf(value, fromIndex?) - ищет с конца, возвращает индекс последнего совпадения</li></ul><p>Необязательный второй аргумент fromIndex задаёт стартовый индекс поиска (поддерживает отрицательные значения - отсчёт с конца).</p><p>Ключевой нюанс - сравнение через строгое равенство (===):</p><ul><li>Не находит NaN: [NaN].indexOf(NaN) даёт -1, потому что NaN !== NaN. Для поиска NaN нужен includes или findIndex</li><li>Объекты находит только по ссылке (один и тот же объект), не по содержимому: [{}].indexOf({}) даёт -1</li><li>+0 и -0 считаются равными</li></ul><p>Применения: проверка наличия (idx !== -1), поиск позиции. Но для простой проверки «есть ли элемент» чаще используют includes (читается яснее и находит NaN).</p>',
    order: 20,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_arrays_021',
    topicId: 'topic_js_arrays',
    question: 'Как работает метод includes? Чем отличается от indexOf?',
    answer:
      '<p>includes(value, fromIndex?) возвращает boolean: true, если массив содержит указанное значение. Предназначен именно для проверки наличия (читается яснее, чем indexOf(...) !== -1).</p><p>Главное отличие от indexOf - алгоритм сравнения:</p><ul><li>includes использует SameValueZero, поэтому НАХОДИТ NaN: [NaN].includes(NaN) даёт true</li><li>indexOf использует строгое равенство ===, поэтому NaN НЕ находит: [NaN].indexOf(NaN) даёт -1</li></ul><p>Это ключевая разница: для поиска NaN годится только includes (или findIndex с предикатом).</p><p>В остальном похоже: оба находят +0 по -0 (и наоборот), оба сравнивают объекты по ссылке, оба принимают необязательный fromIndex. Разница в возвращаемом значении: includes даёт boolean (наличие), indexOf - индекс (позицию). Если нужна позиция - indexOf; если только факт наличия - includes.</p>',
    order: 21,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_arrays_022',
    topicId: 'topic_js_arrays',
    question: 'Как работает метод sort? Как сортировать не по алфавиту?',
    answer:
      '<p>sort МУТИРУЕТ массив, сортируя его на месте, и возвращает ссылку на тот же (уже отсортированный) массив.</p><p>Без аргументов сортировка идёт лексикографически (как строки): каждый элемент приводится к строке и сравнивается по кодам символов. Отсюда знаменитый подвох с числами:</p><ul><li>[10, 1, 2, 21].sort() даёт [1, 10, 2, 21] - потому что сравниваются строки "10", "1", "2", "21", и "10" меньше "2"</li></ul><p>Чтобы сортировать по своему правилу, передают функцию сравнения (компаратор) compare(a, b):</p><ul><li>возвращает отрицательное число - a идёт перед b</li><li>возвращает положительное - b перед a</li><li>возвращает 0 - порядок не меняется</li></ul><p>Примеры:</p><ul><li>Числа по возрастанию: arr.sort((a, b) => a - b)</li><li>Числа по убыванию: arr.sort((a, b) => b - a)</li><li>Строки с локалью (буквы с диакритикой, регистр): arr.sort((a, b) => a.localeCompare(b))</li><li>По полю объектов: users.sort((a, b) => a.age - b.age)</li></ul><p>Важные нюансы:</p><ul><li>Мутирует исходный массив - если это нежелательно, сначала копируют: [...arr].sort(...). Иммутабельный аналог (ES2023) - toSorted</li><li>Стабильность: с ES2019 sort гарантированно стабилен (равные элементы сохраняют относительный порядок)</li><li>Компаратор должен быть согласованным; компаратор вида (a, b) => a - b некорректен для нечисел</li><li>undefined-элементы всегда переносятся в конец, и компаратор для них не вызывается</li></ul>',
    order: 22,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_arrays_023',
    topicId: 'topic_js_arrays',
    question: 'Как работает метод reverse?',
    answer:
      '<p>reverse МУТИРУЕТ массив, переставляя его элементы в обратном порядке, и возвращает ссылку на тот же массив.</p><p>Поскольку он изменяет исходный массив, для сохранения оригинала сначала копируют: [...arr].reverse() или arr.slice().reverse().</p><p>Иммутабельный аналог (ES2023) - toReversed: возвращает новый перевёрнутый массив, не трогая исходный.</p><p>Частая идиома - сортировка по убыванию через reverse после sort, но надёжнее сразу задать порядок в компараторе (sort((a, b) => b - a)), чем сортировать и переворачивать.</p>',
    order: 23,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_arrays_024',
    topicId: 'topic_js_arrays',
    question: 'Как преобразовать массив в строку?',
    answer:
      '<p>Способы и их различия:</p><ul><li>join(separator) - основной способ. Склеивает элементы через указанный разделитель (по умолчанию запятая). [1,2,3].join("-") даёт "1-2-3". Важно: null и undefined превращаются в пустую строку, вложенные массивы рекурсивно склеиваются через запятую</li><li>toString() - вызывается неявно при приведении массива к строке. Работает как join(",") без аргумента: [1,2,3].toString() даёт "1,2,3". Именно поэтому "" + [1,2] даёт "1,2"</li><li>toLocaleString() - как toString, но каждый элемент приводится к строке с учётом локали (форматирование чисел, дат, валют)</li><li>JSON.stringify - даёт JSON-представление с квадратными скобками и кавычками: [1,"a"] становится \'[1,"a"]\'. Это не «склейка», а сериализация (с ограничениями: undefined и функции в массиве становятся null)</li></ul><p>Ключевое различие: join/toString дают «плоскую» склейку значений, а JSON.stringify - структурированную строку, из которой массив можно восстановить через JSON.parse.</p><p>Нюанс join с дырками и пустыми значениями: дырки разреженного массива, null и undefined все превращаются в пустую строку. [1, , 3].join("-") даёт "1--3".</p>',
    order: 24,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_arrays_025',
    topicId: 'topic_js_arrays',
    question: 'Как проверить является ли объект массивом?',
    answer:
      '<p>Надёжный способ - Array.isArray(value): возвращает true только для настоящих массивов.</p><p>Почему именно он, а не альтернативы:</p><ul><li>typeof не подходит: typeof [] даёт "object" - не отличает массив от объекта</li><li>instanceof Array ненадёжен между realm (iframe, Web Worker, Node vm): массив из другого окна не является instanceof Array текущего окна, потому что там свой конструктор Array. Array.isArray работает корректно через границы realm</li><li>obj.constructor === Array - ненадёжно: constructor можно перезаписать</li></ul><p>Что считается массивом: Array.isArray возвращает true для литералов [], new Array(), Array.from(...). Но false для псевдомассивов (arguments, NodeList, { length: 3 }) и для типизированных массивов (Int8Array и т.п.) - это НЕ обычные массивы.</p><p>Под капотом Array.isArray проверяет внутренний слот объекта (является ли он exotic Array-объектом), а не цепочку прототипов - поэтому и устойчив к realm и к подмене прототипа.</p>',
    order: 25,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_arrays_026',
    topicId: 'topic_js_arrays',
    question: 'Можно ли применить методы массивов к объектам похожим на массивы?',
    answer:
      '<p>Да. Псевдомассивы (array-like) - объекты со свойством length и числовыми индексами, но без методов массива (arguments, NodeList, HTMLCollection, строка, { length, 0, 1 }). Методы массива можно применить к ним, позаимствовав через call или apply:</p><pre>Array.prototype.map.call(arrayLike, fn);\nArray.prototype.slice.call(arguments);    // классический приём конвертации\nArray.prototype.forEach.call(nodeList, fn);</pre><p>Это работает, потому что методы массива написаны «обобщённо» (generic): они опираются только на length и доступ по индексу, не требуя, чтобы this был настоящим массивом.</p><p>Более современный и читаемый способ - сначала превратить псевдомассив в настоящий массив:</p><ul><li>Array.from(arrayLike) - работает с любым псевдомассивом и итерируемым</li><li>Спред [...iterable] - но только для ИТЕРИРУЕМЫХ (есть Symbol.iterator): строки, NodeList, Set. Для чистого array-like вроде { length: 2 } спред НЕ сработает - нужен Array.from</li></ul><p>То есть заимствование через call - старый приём; сейчас обычно делают Array.from(x).method() или [...x].method(), если объект итерируемый.</p>',
    order: 26,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_arrays_027',
    topicId: 'topic_js_arrays',
    question: 'Как работает метод reduce?',
    answer:
      '<p>reduce «сворачивает» массив в одно значение, последовательно применяя функцию-редьюсер и накапливая результат. Сигнатура: reduce(callback, initialValue?), где callback(accumulator, currentElement, index, array).</p><ul><li>accumulator - накопленное значение (результат предыдущей итерации)</li><li>возвращаемое из callback значение становится новым accumulator для следующей итерации</li><li>итог - финальное значение accumulator</li></ul><p>Начальное значение (initialValue) - критичный нюанс:</p><ul><li>Если передано - accumulator стартует с него, обход с индекса 0</li><li>Если НЕ передано - accumulator = первый элемент, обход со второго (индекс 1)</li><li>Подвох: reduce без initialValue на ПУСТОМ массиве бросает TypeError (Reduce of empty array with no initial value). Поэтому initialValue почти всегда стоит указывать - и для безопасности, и для предсказуемости типа результата</li></ul><p>reduce универсален - через него выражаются map, filter, sum и др. Примеры:</p><ul><li>Сумма: arr.reduce((acc, x) => acc + x, 0)</li><li>Группировка/подсчёт в объект: arr.reduce((acc, x) => { acc[x] = (acc[x]||0)+1; return acc; }, {})</li><li>Превращение массива в Map/объект, flatten, max и т.д.</li></ul><p>reduceRight - то же, но обход справа налево (полезно для право-ассоциативных операций и композиции функций).</p><p>Практический совет: reduce мощен, но злоупотребление им (сложная логика, мутация acc, построение массивов) часто читается хуже, чем явный map/filter или цикл. Для накопления в объект иногда яснее цикл for...of.</p><p>Поведение с дырками: пропускает пустоты разреженного массива.</p>',
    order: 27,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_arrays_028',
    topicId: 'topic_js_arrays',
    question: 'Как работает метод fill? Что возвращает?',
    answer:
      '<p>fill(value, start?, end?) МУТИРУЕТ массив, заполняя его участок указанным значением, и возвращает ссылку на тот же массив.</p><ul><li>value - чем заполнять</li><li>start - индекс начала (включительно, по умолчанию 0)</li><li>end - индекс конца (НЕ включается, по умолчанию length)</li><li>Поддерживаются отрицательные индексы (отсчёт с конца)</li></ul><p>Только value - заполняется весь массив: [1,2,3].fill(0) даёт [0,0,0].</p><p>Главное применение - инициализация: Array(n).fill(0) создаёт массив из n нулей (в отличие от Array(n) без fill, который оставляет дырки - fill превращает разреженный массив в плотный).</p><p>КРИТИЧНЫЙ подвох: fill копирует ОДНО И ТО ЖЕ значение во все позиции (по ссылке для объектов). Array(3).fill([]) создаёт массив, где все три элемента - ОДИН И ТОТ ЖЕ массив: изменение matrix[0].push(1) затронет и matrix[1], matrix[2]. Для независимых объектов/массивов нужен Array.from({length: n}, () => []) с фабрикой, создающей новый объект на каждой позиции.</p>',
    order: 28,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_arrays_029',
    topicId: 'topic_js_arrays',
    question: 'Как работает метод copyWithin? Что возвращает?',
    answer:
      '<p>copyWithin(target, start?, end?) МУТИРУЕТ массив: копирует его участок в другое место ВНУТРИ этого же массива, перезаписывая существующие элементы. Длина массива при этом не меняется. Возвращает ссылку на тот же массив.</p><ul><li>target - индекс, КУДА вставлять копию</li><li>start - начало копируемого участка (по умолчанию 0)</li><li>end - конец копируемого участка, не включается (по умолчанию length)</li><li>Поддерживает отрицательные индексы</li></ul><p>Пример: [1,2,3,4,5].copyWithin(0, 3) копирует элементы с индекса 3 ([4,5]) в начало - результат [4,5,3,4,5].</p><p>Это низкоуровневый, редко используемый метод - он пришёл из мира типизированных массивов (TypedArray), где такие быстрые операции с памятью важны для производительности. В обычном прикладном коде с массивами встречается крайне редко. Не создаёт новых элементов и не меняет длину - только перезаписывает на месте.</p>',
    order: 29,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_arrays_030',
    topicId: 'topic_js_arrays',
    question: 'Чем являются индексы в массиве?',
    answer:
      '<p>Поскольку массив - это специализированный объект, индексы являются обычными именами свойств, причём СТРОКОВЫМИ: arr[0] на самом деле обращается к свойству с ключом "0". Числовой индекс приводится к строке, как любой ключ объекта.</p><p>Следствия:</p><ul><li>arr[0] и arr["0"] - одно и то же</li><li>Можно добавить «нечисловое» свойство: arr.foo = "bar" - оно не считается элементом, не влияет на length и не участвует в методах перебора и обходе по индексу. Но появится в for...in (поэтому for...in для массивов не используют)</li><li>Дробные и нечисловые ключи (arr[1.5] = x, arr["name"] = x) становятся обычными свойствами объекта, а не элементами массива</li></ul><p>Что считается настоящим «индексом массива» (по спецификации): строковый ключ, являющийся каноническим представлением целого числа в диапазоне 0 .. 2^32 - 2. Только такие ключи влияют на length и считаются элементами. Ключ "01", "1.5", "-1" или "abc" - просто свойство, а не индекс.</p><p>Именно поэтому length автоматически держится равным «максимальный индекс + 1»: при добавлении настоящего индексного свойства движок обновляет length, а при добавлении обычного свойства - нет.</p>',
    order: 30,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_arrays_031',
    topicId: 'topic_js_arrays',
    question: 'Как работает метод at()?',
    answer:
      '<p>at(index) (ES2022) возвращает элемент по индексу, поддерживая ОТРИЦАТЕЛЬНЫЕ индексы - отсчёт с конца. Это главное отличие от обычного доступа по индексу arr[i], который отрицательные не понимает.</p><ul><li>arr.at(0) - первый элемент (как arr[0])</li><li>arr.at(-1) - последний элемент</li><li>arr.at(-2) - предпоследний</li></ul><p>До at() последний элемент брали через arr[arr.length - 1] - длиннее и требует двойного обращения к массиву. arr.at(-1) короче и читаемее.</p><p>Возвращает undefined, если индекс выходит за границы (как и обычный доступ).</p><p>at() также доступен у строк и типизированных массивов. Это часть общего тренда на удобный доступ к концу коллекции.</p>',
    order: 31,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_arrays_032',
    topicId: 'topic_js_arrays',
    question: 'Как работают методы keys(), values() и entries() у массива?',
    answer:
      '<p>Эти методы возвращают ИТЕРАТОРЫ массива (объекты-итераторы, а не массивы). Используются в основном с for...of и спредом.</p><ul><li>keys() - итератор по индексам: for (const i of arr.keys())</li><li>values() - итератор по значениям (то же, что обход самого массива)</li><li>entries() - итератор по парам [индекс, значение]</li></ul><p>Самое полезное применение - entries() для получения индекса и значения одновременно в for...of:</p><pre>for (const [i, value] of arr.entries()) {\n  console.log(i, value);\n}</pre><p>Это чище, чем обычный for со счётчиком, и даёт индекс, которого нет в простом for...of arr.</p><p>Поскольку это итераторы, их можно развернуть: [...arr.keys()] даёт массив индексов [0, 1, 2, ...] - иногда используют как [...Array(n).keys()] для генерации диапазона.</p><p>Связь с другими коллекциями: у Map и Set есть одноимённые методы keys/values/entries - это часть единого протокола итерации, поэтому код перебора выглядит единообразно.</p><p>Нюанс с дырками: в отличие от forEach/map, эти итераторы НЕ пропускают пустоты - keys и entries выдают все индексы в диапазоне length, а values на месте дырок даёт undefined.</p>',
    order: 32,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_arrays_033',
    topicId: 'topic_js_arrays',
    question: 'Что такое иммутабельные методы массива (toSorted, toReversed, toSpliced, with)?',
    answer:
      '<p>Это группа методов (ES2023), которые делают то же, что мутирующие, но НЕ изменяют исходный массив, а возвращают НОВЫЙ. Они решают давнюю проблему: sort, reverse, splice мутируют массив на месте, из-за чего приходилось писать [...arr].sort() вручную.</p><p>Пары «мутирующий -> иммутабельный аналог»:</p><ul><li>sort -> toSorted(compareFn) - возвращает новый отсортированный массив</li><li>reverse -> toReversed() - новый перевёрнутый массив</li><li>splice -> toSpliced(start, deleteCount, ...items) - новый массив с применённой вставкой/удалением. Важно: возвращает сам изменённый массив (а не удалённые элементы, как splice)</li><li>with(index, value) - иммутабельный аналог присваивания по индексу arr[i] = v: возвращает новый массив с заменённым элементом</li></ul><p>Зачем нужны: в React/Redux и других подходах с иммутабельным состоянием нельзя мутировать существующие массивы. Раньше писали [...arr].sort(...), [...arr.slice(0, i), value, ...arr.slice(i+1)] - громоздко. Новые методы делают это в одну операцию: const sorted = arr.toSorted(); const updated = arr.with(2, "new").</p><p>Все они возвращают обычный массив (поверхностная копия), исходный остаётся нетронутым. Стоит проверять поддержку в целевом окружении, хотя в современных браузерах и Node они уже доступны.</p>',
    order: 33,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_arrays_034',
    topicId: 'topic_js_arrays',
    question: 'Как группировать элементы массива (Object.groupBy и Map.groupBy)?',
    answer:
      '<p>Object.groupBy и Map.groupBy (ES2024) - нативные методы группировки элементов итерируемого по ключу, который вычисляет callback. Они заменяют ручной boilerplate на reduce, который раньше требовался для группировки.</p><p>Важно: это СТАТИЧЕСКИЕ методы (вызываются как Object.groupBy(...), а не arr.groupBy(...)). Финальная форма стандарта - именно статические методы, а не Array.prototype.group (от прототипного варианта отказались).</p><p>Сигнатура: Object.groupBy(iterable, callbackFn). callback вызывается для каждого элемента и возвращает ключ группы.</p><pre>const inventory = [\n  { name: "бананы", quantity: 5 },\n  { name: "рыба", quantity: 22 },\n  { name: "вишня", quantity: 3 },\n];\nconst result = Object.groupBy(inventory, ({ quantity }) =>\n  quantity < 6 ? "restock" : "sufficient"\n);\n// { restock: [бананы, вишня], sufficient: [рыба] }</pre><p>Различие двух методов:</p><ul><li>Object.groupBy - возвращает обычный объект (с прототипом null). Ключи могут быть только строками или символами; иначе результат callback приводится к строке. Подходит, когда группы именуются строками</li><li>Map.groupBy - возвращает Map. Ключом может быть значение ЛЮБОГО типа, включая объекты, и сохраняется порядок вставки. Нужен, когда группируют по объекту-ключу или важен неблоковый тип ключа</li></ul><p>Нюанс: элементы в результате - те же ссылки на исходные объекты (не глубокие копии). Изменение элемента отразится и в исходном массиве, и в сгруппированном результате.</p><p>Поддержка: Baseline с 2024 года (Node с v21, Deno с v1.37). Для старых окружений используют полифил или Lodash (_.groupBy). Object.groupBy по производительности сопоставим с ручным reduce и обычно быстрее lodash-варианта.</p>',
    order: 34,
    createdAt: NOW,
    updatedAt: NOW,
  },

  // JavaScript: Асинхронность (slug: async, topicId: topic_js_async) — 9 вопрос(ов)
  {
    id: 'q_async_001',
    topicId: 'topic_js_async',
    question: 'Асинхронность в JS?',
    answer:
      '<p>JavaScript-движок однопоточный: у него один стек вызовов и в каждый момент выполняется только одна команда. Но важно различать движок и среду выполнения: сам движок синхронен, а среда (браузер или Node.js) - многопоточна. Таймеры, сетевые запросы, файловая система, рендеринг работают в отдельных потоках вне движка.</p><p>Ключевые понятия:</p><ul><li>Синхронный код - команды выполняются последовательно, каждая блокирует следующую до завершения</li><li>Асинхронный код - операция запускается, но не блокирует поток; результат приходит позже (через колбэк или промис)</li><li>Блокирующая операция останавливает поток (тяжёлый цикл, синхронное чтение файла), неблокирующая - нет</li></ul><p>Зачем нужна асинхронность: в однопоточной модели долгая синхронная операция (запрос на сервер, чтение файла) заморозила бы весь интерфейс или сервер. Асинхронность позволяет запустить такую операцию, не блокируя поток, и продолжить работу.</p><p>Откуда берётся асинхронность: в самом ECMAScript нет асинхронных механизмов - движок синхронен. Асинхронные возможности предоставляет окружение: в браузере это Web API (setTimeout, события, fetch/XHR, requestAnimationFrame), в Node.js - системные API (через libuv). JavaScript же даёт инструменты для работы с результатами этих операций:</p><ul><li>Колбэки - исторически первый способ (страдает от вложенности, callback hell)</li><li>Промисы (ES2015) - объект-обёртка над будущим результатом, поддерживает цепочки</li><li>async/await (ES2017) - синтаксический сахар над промисами, асинхронный код выглядит как синхронный</li></ul><p>Как результаты возвращаются в движок: через механизм Event Loop и очереди задач (микро- и макрозадачи) - подробно в отдельном вопросе.</p><p>Важное различие: JS обеспечивает конкурентность (управление множеством задач за счёт переключения), но не истинный параллелизм в основном потоке. Настоящий параллелизм возможен только через Web Workers (в браузере) или worker_threads (в Node) - это отдельные потоки со своим движком.</p>',
    order: 1,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_async_002',
    topicId: 'topic_js_async',
    question: 'Что такое колбэк?',
    answer:
      '<p>Колбэк (callback) - функция, переданная другой функции в качестве аргумента, чтобы та вызвала её. Это возможно благодаря тому, что в JS функции - значения первого класса (их можно передавать как аргументы).</p><p>Колбэки бывают синхронные и асинхронные - это важно различать:</p><ul><li>Синхронные вызываются немедленно, в той же итерации: arr.map(cb), arr.forEach(cb), arr.sort(cb)</li><li>Асинхронные вызываются позже, после события или операции: setTimeout(cb), addEventListener("click", cb), запросы. Именно их обычно имеют в виду в контексте асинхронности</li></ul><p>Распространённый паттерн в Node - error-first callback: первым аргументом передаётся ошибка (или null, если её нет), вторым - результат: fs.readFile(path, (err, data) => {...}). Это требует проверять err на каждом вызове.</p><p>Главная проблема колбэков - callback hell (пирамида вложенности, pyramid of doom): когда несколько асинхронных операций зависят друг от друга, колбэки вкладываются один в другой, и код «уезжает» вправо. Проблемы такого подхода:</p><ul><li>Плохая читаемость и поддержка</li><li>Обработку ошибок нужно дублировать на каждом уровне, легко забыть</li><li>Инверсия контроля (inversion of control): передавая колбэк чужой функции, ты доверяешь ей вызвать его корректно - один раз, вовремя, с правильными аргументами. Но она может вызвать его дважды, не вызвать вовсе или проглотить ошибку. Это концептуально главный недостаток</li></ul><p>Для решения этих проблем появились промисы: они дают плоские цепочки вместо вложенности, централизованную обработку ошибок через catch и возвращают контроль (промис - это объект-значение, его состояние нельзя «вызвать дважды»).</p><p>При этом колбэки не устарели: для синхронных операций (методы массива) и простых обработчиков событий это по-прежнему нормальный подход. Промисы и async/await вытеснили их в основном в цепочках асинхронных операций.</p>',
    order: 2,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_async_003',
    topicId: 'topic_js_async',
    question: 'Что такое промис (Promise)?',
    answer:
      '<p>Promise - объект-обёртка над будущим результатом асинхронной операции; хранит её состояние и итоговое значение. Промисы решают проблемы колбэков: дают плоские цепочки вместо вложенности и возвращают контроль над выполнением.</p><p>Три состояния:</p><ul><li>pending - в ожидании</li><li>fulfilled - успешно завершён (есть значение)</li><li>rejected - завершён с ошибкой (есть причина)</li></ul><p>Состояния fulfilled и rejected вместе называют settled (разрешён). Ключевое свойство - необратимость: однажды разрешённый промис навсегда сохраняет своё состояние и значение, повторные resolve/reject игнорируются. Именно это «возвращает контроль»: промис нельзя случайно разрешить дважды.</p><p>Создание: new Promise((resolve, reject) => {...}). Функция-executor вызывается СИНХРОННО и сразу при создании. Внутри запускают асинхронную работу и затем вызывают resolve(value) (перевести в fulfilled) или reject(reason) (в rejected). Исключение, брошенное в executor, автоматически приводит к reject.</p><p>Методы экземпляра:</p><ul><li>then(onFulfilled, onRejected) - реакция на результат. Возвращает НОВЫЙ промис, что и позволяет строить цепочки</li><li>catch(onRejected) - обработка ошибок (то же, что then(null, fn))</li><li>finally(fn) - выполнится в любом исходе (очистка ресурсов), значение не получает и пробрасывает его дальше</li></ul><p>Цепочки then: возвращённое из колбэка обычное значение становится результатом следующего then; возвращённый промис разворачивается (цепочка дожидается его); бroyшенная ошибка переводит следующий промис в rejected. Один catch в конце цепочки ловит ошибки всех предыдущих звеньев - ошибка «проваливается» вниз до ближайшего catch.</p><p>Статические методы-комбинаторы:</p><ul><li>Promise.all(iterable) - ждёт все; результат - массив значений. Если хотя бы один отклонён, немедленно отклоняется (fail-fast)</li><li>Promise.allSettled(iterable) - ждёт все независимо от исхода; результат - массив объектов { status, value | reason }</li><li>Promise.race(iterable) - разрешается первым ЗАВЕРШИВШИМСЯ промисом (успех или ошибка - неважно)</li><li>Promise.any(iterable) - разрешается первым УСПЕШНЫМ; если все отклонены - отклоняется с AggregateError (зеркало race, но по успеху)</li><li>Promise.resolve(value) / Promise.reject(reason) - сразу готовый разрешённый/отклонённый промис (resolve разворачивает переданный thenable)</li></ul><p>Связь с Event Loop: колбэки then/catch/finally выполняются как микрозадачи - после текущего синхронного кода, но раньше макрозадач вроде setTimeout (подробнее - в вопросе про Event Loop).</p><p>Подводные камни:</p><ul><li>Непойманный rejected порождает событие unhandledrejection</li><li>then всегда асинхронен: даже у Promise.resolve(1).then(...) колбэк выполнится не сразу, а в микрозадаче</li><li>Нативно промис нельзя отменить - для отмены используют отдельные паттерны (например AbortController)</li></ul>',
    order: 3,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_async_004',
    topicId: 'topic_js_async',
    question: 'Что такое async/await?',
    answer:
      '<p>Синтаксический сахар над промисами (ES2017), позволяющий писать асинхронный код в синхронном виде. async перед функцией делает её асинхронной (она всегда возвращает промис), await приостанавливает выполнение до разрешения промиса.</p><p>Что делает async:</p><ul><li>Возвращаемое значение оборачивается в промис: return 5 превращается в Promise.resolve(5)</li><li>Исключение внутри функции превращается в отклонённый промис</li><li>Поэтому результат async-функции всегда можно обработать через then/await</li></ul><p>Что технически делает await: приостанавливает async-функцию до разрешения промиса, НЕ блокируя поток - управление возвращается в Event Loop, и остальной код продолжает выполняться. Когда промис разрешён, продолжение функции ставится в очередь микрозадач. То есть await - это «пауза, а затем продолжение как микрозадача». Результат он разворачивает: при fulfilled возвращает значение, при rejected - бросает исключение.</p><p>Обработка ошибок: отклонённый промис под await бросает исключение, которое ловится обычным try/catch - это главное удобство по сравнению с .catch(). Если ошибку не поймать, она отклонит промис самой async-функции.</p><pre>async function load() {\n  try {\n    const res = await fetch(url);\n    return await res.json();\n  } catch (err) {\n    // сюда попадёт ошибка и сети, и парсинга\n  }\n}</pre><p>Важный перформанс-нюанс - последовательное против параллельного ожидания:</p><ul><li>Медленно (последовательно): const a = await f1(); const b = await f2(); - f2 стартует только после f1, хотя они независимы</li><li>Быстро (параллельно): const [a, b] = await Promise.all([f1(), f2()]); - оба запускаются сразу</li><li>Правило: await в цикле для независимых операций - антипаттерн; промисы лучше собрать и дождаться через Promise.all</li></ul><p>Дополнительно:</p><ul><li>await можно применить и к не-промису (await 5) - значение обернётся, но продолжение всё равно уйдёт в микрозадачу, а не выполнится мгновенно</li><li>Top-level await (ES2022) - await на верхнем уровне модуля, без оборачивающей async-функции. Откладывает выполнение модуля и его импортёров до разрешения</li><li>for await...of - асинхронный перебор (по async-итераторам, например потокам данных)</li><li>Асинхронной может быть любая функция: async-стрелка async () => {}, async-метод</li></ul><p>Концептуально важно: async/await не делает код синхронным и не убирает асинхронность - он лишь маскирует работу с промисами под синхронный вид. Под капотом - те же промисы и микрозадачи.</p>',
    order: 4,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_async_005',
    topicId: 'topic_js_async',
    question: 'Что такое Event Loop?',
    answer:
      '<p>Event Loop (цикл событий) - механизм, который координирует выполнение задач в однопоточном JavaScript, не блокируя поток. Он бесконечно ждёт задачи, выполняет их и ждёт следующие.</p><p>Компоненты:</p><ul><li>Call Stack (стек вызовов) - хранит контексты выполнения функций: при вызове контекст кладётся в стек, при завершении - снимается</li><li>Web API (в браузере) или libuv (в Node) - выполняют асинхронную работу (таймеры, сеть, события, I/O) ВНЕ движка, в отдельных потоках окружения</li><li>Очередь макрозадач (task queue) - таймеры (setTimeout/setInterval), события, I/O</li><li>Очередь микрозадач (microtask queue) - колбэки промисов (then/catch/finally), queueMicrotask, MutationObserver, продолжения после await</li></ul><p>Ключевое правило работы (самое важное): после каждой макрозадачи - и после первоначального синхронного скрипта - движок ПОЛНОСТЬЮ опустошает очередь микрозадач, выполняя все микрозадачи (включая те, что добавились по ходу), и только потом берёт ОДНУ следующую макрозадачу. То есть микрозадачи имеют приоритет над макрозадачами.</p><p>Порядок выполнения на классическом примере:</p><pre>console.log("1");                                  // синхронно\nsetTimeout(() => console.log("2"));                // макрозадача\nPromise.resolve().then(() => console.log("3"));    // микрозадача\nconsole.log("4");                                  // синхронно\n// Вывод: 1, 4, 3, 2</pre><p>Сначала весь синхронный код (1, 4), затем все микрозадачи (3), и только потом макрозадача (2).</p><p>Рендеринг: в браузере между макрозадачами может выполняться этап рендеринга (пересчёт стилей, layout, paint), обычно около 60 раз в секунду. requestAnimationFrame регистрирует колбэк прямо перед очередным рендерингом (для плавных анимаций). Тяжёлый синхронный код или бесконечная генерация микрозадач блокируют рендеринг - интерфейс «фризится».</p><p>Особенности Node.js: там Event Loop реализован через libuv и разделён на фазы (timers, poll, check, close и др.). setTimeout попадает в фазу timers, setImmediate - в check, I/O-колбэки - в poll. Отдельно стоит process.nextTick - его очередь выполняется раньше обычных микрозадач (промисов) и имеет наивысший приоритет. Порядок в Node: сначала очередь nextTick, затем очередь промисов.</p><p>Зачем это понимать: чтобы предсказывать порядок выполнения асинхронного кода, не блокировать поток и рендеринг, отлаживать «почему код выполнился позже, чем ожидалось», и грамотно дробить тяжёлые вычисления, отдавая управление циклу.</p>',
    order: 5,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_async_006',
    topicId: 'topic_js_async',
    question: 'Как обрабатывать ошибки в асинхронном коде?',
    answer:
      '<p>Способ обработки зависит от стиля асинхронного кода.</p><p>С async/await - обычный try/catch:</p><ul><li>Отклонённый промис под await бросает исключение, которое ловит try/catch. Один блок может покрыть несколько await</li><li>Если ошибку не поймать, она отклонит промис самой async-функции - и её нужно ловить уже снаружи</li></ul><p>С промисами - метод catch:</p><ul><li>catch в конце цепочки then ловит ошибки всех предыдущих звеньев</li><li>finally - для очистки независимо от исхода</li></ul><p>Ключевые подвохи асинхронной обработки ошибок:</p><ul><li>Ошибка в колбэке setTimeout НЕ ловится внешним try/catch: к моменту срабатывания таймера стек уже другой, и try/catch вокруг setTimeout бесполезен. Ошибку нужно обрабатывать внутри самого колбэка</li><li>Забытый промис без catch (и без await): его отклонение порождает unhandledrejection - ошибка «теряется», но всплывает глобально</li><li>Promise.all отклоняется при ПЕРВОЙ же ошибке (fail-fast), результаты остальных теряются. Если нужны все исходы - allSettled, где каждый элемент имеет status и value либо reason</li><li>Смешивание стилей: если внутри async-функции выполнить промис без await и без catch, его ошибка не попадёт в окружающий try/catch</li></ul><p>Глобальные обработчики «последнего шанса»:</p><ul><li>В браузере: событие unhandledrejection (непойманное отклонение промиса) и window.onerror (синхронные ошибки)</li><li>В Node: process.on("unhandledRejection") и process.on("uncaughtException")</li></ul><p>Эти обработчики - для логирования и аварийного завершения, а не штатный способ обработки. Ошибки лучше ловить локально там, где они возникают.</p>',
    order: 6,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_async_007',
    topicId: 'topic_js_async',
    question: 'Что такое генераторы и async-генераторы?',
    answer:
      '<p>Генератор - функция, объявленная через function*, способная приостанавливать и возобновлять своё выполнение. Внутри используется ключевое слово yield: при каждом yield функция «отдаёт» значение и замораживается до следующего запроса.</p><p>Вызов генератор-функции не выполняет её тело, а возвращает объект-генератор (итератор) с методами:</p><ul><li>next(value) - возобновляет выполнение до следующего yield, возвращает { value, done }. Переданное в next значение становится результатом текущего yield</li><li>return() - досрочно завершает генератор</li><li>throw() - бросает ошибку в точку текущего yield</li></ul><pre>function* gen() {\n  const x = yield 1;\n  yield x + 1;\n}\nconst g = gen();\ng.next();    // { value: 1, done: false }\ng.next(10);  // { value: 11, done: false }\ng.next();    // { value: undefined, done: true }</pre><p>Генератор - это итератор и итерируемый объект одновременно, поэтому работает с for...of и спредом. yield* делегирует выполнение другому генератору/итерируемому.</p><p>Применения: ленивые и бесконечные последовательности (значения вычисляются по запросу), собственные итераторы для объектов (через [Symbol.iterator]), пошаговые конечные автоматы. Исторически генераторы лежали в основе реализации async/await до нативной поддержки.</p><p>Async-генераторы (async function*) сочетают генераторы и промисы: внутри можно использовать и yield, и await, а next() возвращает промис. Перебираются специальным циклом for await...of.</p><pre>async function* fetchPages(urls) {\n  for (const url of urls) {\n    const res = await fetch(url);\n    yield await res.json();\n  }\n}\nfor await (const page of fetchPages(urls)) {\n  // обрабатываем страницы по мере загрузки\n}</pre><p>Главное применение async-генераторов - работа с асинхронными потоками данных, которые поступают порциями: постраничная подгрузка, чтение потоков (streams), обработка данных по мере прихода без ожидания всего объёма сразу.</p>',
    order: 7,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_async_008',
    topicId: 'topic_js_async',
    question: 'Как отменить асинхронную операцию (AbortController)?',
    answer:
      '<p>Нативно промис отменить нельзя - у него нет метода cancel. Для отмены асинхронных операций используют AbortController - стандартный механизм сигнализации об отмене.</p><p>Как работает:</p><ul><li>Создают контроллер: const controller = new AbortController()</li><li>Его свойство controller.signal передают в отменяемую операцию</li><li>Вызов controller.abort() переводит сигнал в состояние «прервано»: операция, слушающая сигнал, прекращается и отклоняет свой промис ошибкой AbortError</li></ul><pre>const controller = new AbortController();\nfetch(url, { signal: controller.signal })\n  .then(res => res.json())\n  .catch(err => {\n    if (err.name === "AbortError") {\n      // запрос отменён - это не настоящая ошибка\n    }\n  });\ncontroller.abort(); // отменяем</pre><p>Где поддерживается: fetch, addEventListener (опция signal - удобный способ снять слушатель), многие API Node, а также пользовательский код, который сам слушает signal.</p><p>Работа с сигналом вручную:</p><ul><li>signal.aborted - булево, прервано ли уже</li><li>signal.addEventListener("abort", ...) - реакция на отмену</li><li>В своей async-функции можно проверять signal.aborted между шагами и прерываться</li></ul><p>Типичные применения: отмена устаревших запросов (например при быстрой смене поискового ввода - отменяем предыдущий fetch), таймауты (AbortSignal.timeout(ms) автоматически прерывает по истечении времени), отмена группы операций одним контроллером. AbortError при штатной отмене обычно не считают ошибкой и обрабатывают отдельно.</p>',
    order: 8,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_async_009',
    topicId: 'topic_js_async',
    question: 'Что такое голодание микрозадач и как разбивать тяжёлые вычисления?',
    answer:
      '<p>Это две стороны одной проблемы - блокировки Event Loop, из-за которой интерфейс перестаёт отвечать (фризится), потому что рендеринг и обработка событий не получают управления.</p><p>Голодание (starvation) очереди задач:</p><ul><li>Микрозадачи выполняются ВСЕ перед следующей макрозадачей и рендерингом. Если микрозадачи бесконечно порождают новые микрозадачи (например промис, который в then создаёт новый промис, и так по кругу), очередь микрозадач никогда не опустеет</li><li>В результате макрозадачи и рендеринг «голодают» - не получают шанса выполниться, и страница зависает, хотя поток формально занят</li></ul><p>Блокировка синхронным кодом: тяжёлый синхронный цикл (обработка большого массива, сложные вычисления) удерживает стек вызовов и не отдаёт управление Event Loop - всё то же зависание UI.</p><p>Как разбивать тяжёлые вычисления (не блокировать поток):</p><ul><li>Разбить работу на части и отдавать управление между ними через setTimeout(fn, 0) или MessageChannel - тогда между кусками успеют выполниться рендеринг и события</li><li>scheduler.yield() / scheduler.postTask() - современные API планировщика, позволяющие «уступить» поток с контролем приоритета</li><li>requestIdleCallback - выполнять некритичную работу в простои браузера</li><li>Web Workers - вынести тяжёлые вычисления в отдельный поток, где они вообще не блокируют основной (главный инструмент для по-настоящему тяжёлых задач)</li></ul><p>Практический ориентир: микрозадачи (промисы) - для коротких продолжений, а не для длинной работы; длинные синхронные операции либо дробят с уступкой потока, либо выносят в Worker. Цель - регулярно отдавать управление Event Loop, чтобы оставался отзывчивым рендеринг.</p>',
    order: 9,
    createdAt: NOW,
    updatedAt: NOW,
  },

  // JavaScript: Встроенные объекты и утилиты (slug: builtins-utils, topicId: topic_js_builtins) — 136 вопрос(ов)
  {
    id: 'q_builtins_utils_001',
    topicId: 'topic_js_builtins',
    question: 'Объект Date? Какие у него подвохи?',
    answer:
      '<p>Date - встроенный объект для работы с датой и временем. Внутри он хранит ОДИН момент времени как timestamp - количество миллисекунд, прошедших с начала эпохи Unix (1 января 1970 UTC). Методы интерпретируют это число в локальном поясе или в UTC.</p><p>Создание через конструктор:</p><ul><li>new Date() - текущий момент</li><li>new Date(timestamp) - из числа миллисекунд</li><li>new Date(dateString) - разбор строки (с подвохом, см. ниже)</li><li>new Date(year, monthIndex, day, hours, minutes, seconds, ms) - из компонентов в ЛОКАЛЬНОМ поясе; обязательны первые два</li></ul><p>Главные подвохи:</p><ul><li>Месяцы считаются с 0: январь - 0, декабрь - 11. При этом день месяца - с 1, а getDay() (день недели) - с 0 (воскресенье). new Date(2026, 0, 1) - это 1 января. Источник постоянных багов</li><li>Парсинг строк ненадёжен: предсказуемо работает только ISO-формат. Причём чистая дата "2026-01-15" парсится как UTC, а дата со временем без указания зоны - как локальное время. Прочие форматы зависят от движка</li><li>Date МУТАБЕЛЕН: сеттеры (setFullYear и т.п.) меняют сам объект, а присваивание копирует ссылку - правки через одну переменную видны через другую</li><li>Невалидная дата даёт Invalid Date, а getTime() для неё - NaN</li></ul><p>Методы получения и установки идут парами и в двух вариантах:</p><ul><li>Локальные: getFullYear/getMonth/getDate/getDay/getHours/getMinutes/getSeconds/getMilliseconds и сеттеры set...</li><li>UTC-версии: getUTCFullYear и т.д.</li><li>getTime/setTime - timestamp; getTimezoneOffset - смещение пояса в минутах; Date.now() - текущий timestamp без создания объекта (для замеров времени)</li></ul><p>Автокоррекция: при выходе за границы значения нормализуются - 32 января становится 1 февраля. Это используют для арифметики: d.setDate(d.getDate() + 7) корректно перепрыгнет через границу месяца, а setDate(0) даст последний день предыдущего месяца.</p><p>Арифметика: вычитание дат (d2 - d1) даёт разницу в миллисекундах (через приведение к timestamp). Удобного встроенного «прибавить месяц» с учётом разной длины месяцев нет - отсюда сложности.</p><p>Форматирование: toISOString() (UTC, стандартный машинный формат), toLocaleDateString/toLocaleString (с локалью и опциями), для гибкого форматирования - Intl.DateTimeFormat.</p><p>Важная актуальность - Temporal: у Date накопилось столько проблем (мутабельность, месяцы с 0, слабые часовые пояса, ненадёжный парсинг), что для замены создали новый стандартный API - Temporal. Он вошёл в ECMAScript 2026, иммутабелен, имеет отдельные типы (PlainDate, PlainTime, ZonedDateTime, Instant, Duration), нормальную поддержку зон и календарей, месяцы с 1. Уже поставляется в Chrome, Firefox, Edge и Node 26; для старых окружений есть полифил. В новом коде для серьёзной работы с датами стоит смотреть в сторону Temporal (или библиотек date-fns/Day.js), а Date постепенно становится legacy.</p>',
    order: 1,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_builtins_utils_002',
    topicId: 'topic_js_builtins',
    question: 'Что такое формат JSON? Чем он отличается от объекта JavaScript?',
    answer:
      '<p>JSON (JavaScript Object Notation) - текстовый формат обмена данными, основанный на синтаксисе объектов и массивов JavaScript, но являющийся самостоятельным языконезависимым стандартом. Это всегда СТРОКА; объект JavaScript - это структура в памяти. JSON исторически вырос из JS, но используется повсеместно (API, конфиги) в любых языках.</p><p>Допустимые типы значений в JSON:</p><ul><li>строки (только в ДВОЙНЫХ кавычках), числа, true, false, null</li><li>массивы и объекты (вложенные)</li></ul><p>Чего в JSON НЕТ (в отличие от объектов JS): undefined, функций, Symbol, BigInt, комментариев, Date (даты представляют строками), Infinity и NaN (их нельзя записать).</p><p>Строгость синтаксиса (JSON строже объектного литерала JS):</p><ul><li>Ключи обязательно в двойных кавычках: { "name": "Аня" }, а не { name: "Аня" }</li><li>Только двойные кавычки для строк, одинарные запрещены</li><li>Запрещены висячие запятые (trailing comma) после последнего элемента</li><li>Запрещены комментарии</li><li>Числа - без ведущих нулей и без знака + у экспоненты, дробь только через точку</li></ul><p>Отличие «объект JSON» от «объекта JS»: строго говоря, выражения «объект JSON» не существует - JSON это всегда текст. Когда говорят про JSON, имеют в виду строку, которую через JSON.parse превращают в объект JS, а через JSON.stringify - обратно.</p><p>Работа с JSON в JS - через глобальный объект JSON:</p><ul><li>JSON.parse(text, reviver) - строка в значение JS</li><li>JSON.stringify(value, replacer, space) - значение JS в строку</li></ul><p>Детальный разбор этих методов (replacer/reviver, toJSON, что не сериализуется, подвохи) - в вопросе о сериализации объектов.</p><p>Важно: JSON - это не подмножество JavaScript на 100%. Редкий нюанс: символы U+2028 и U+2029 валидны в строке JSON, но раньше ломали JS при прямой вставке (до того как их разрешили в строковых литералах ES2019).</p>',
    order: 2,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_builtins_utils_003',
    topicId: 'topic_js_builtins',
    question: 'Что такое globalThis, structuredClone, queueMicrotask?',
    answer:
      '<p>Это стандартные глобальные утилиты языка/среды, появившиеся относительно недавно.</p><p>globalThis - универсальная ссылка на глобальный объект, единая для всех сред (ES2020). Раньше глобальный объект назывался по-разному: window в браузере, self в Web Worker, global в Node - и переносимый код приходилось писать с проверками. globalThis даёт один способ обратиться к глобальному объекту везде. На практике прямой доступ к нему нужен редко (глобальные переменные - антипаттерн), но он полезен для проверки наличия API (typeof globalThis.fetch) и в изоморфном (браузер + сервер) коде.</p><p>structuredClone(value) - встроенное ГЛУБОКОЕ копирование (структурированное клонирование). До него глубокую копию делали через JSON.parse(JSON.stringify(...)) с кучей ограничений или библиотеками. structuredClone:</p><ul><li>Корректно копирует вложенные структуры, а также Map, Set, Date, RegExp, ArrayBuffer, типизированные массивы, и даже ЦИКЛИЧЕСКИЕ ссылки</li><li>НЕ умеет копировать функции, DOM-узлы (бросает DataCloneError), не сохраняет прототип (объект становится обычным) и геттеры/сеттеры (копирует значение)</li><li>Использует алгоритм структурированного клонирования - тот же, что применяется при передаче данных в Web Workers через postMessage</li></ul><p>queueMicrotask(callback) - поставить функцию в очередь МИКРОзадач напрямую. Колбэк выполнится после текущего синхронного кода, но раньше любых макрозадач (как колбэки промисов).</p><ul><li>Зачем: когда нужно отложить работу на «сразу после текущего кода», но без задержки setTimeout(fn, 0) (которая ставит в очередь макрозадач и выполняется позже)</li><li>Раньше для этого использовали Promise.resolve().then(fn) - queueMicrotask делает то же явно и читаемее</li><li>Применяется для отложенной обработки, батчинга, гарантии порядка выполнения - подробнее в вопросе про Event Loop</li></ul>',
    order: 3,
    createdAt: NOW,
    updatedAt: NOW,
  },
  // JavaScript: Среда браузера
  {
    id: 'q_browser_env_001',
    topicId: 'topic_browser_env',
    question: 'Что такое DOM?',
    answer:
      '<p>DOM (Document Object Model, объектная модель документа) - это представление HTML-документа в виде дерева объектов, с которым можно работать из JavaScript: читать, менять, добавлять и удалять узлы. Каждый элемент, атрибут и фрагмент текста становится объектом-узлом, а связи «родитель-потомок» образуют дерево.</p><p>Важно отделять три разные вещи:</p><ul><li>HTML - это исходный текст (строка). Его пишет разработчик или отдаёт сервер</li><li>DOM - это уже РАСПАРСЕННОЕ браузером дерево объектов в памяти. Это не текст, а структура данных, которую можно менять во время выполнения. После загрузки HTML больше не нужен - вся работа идёт с DOM</li><li>То, что видно на экране (рендеринг) - отдельный результат: браузер строит его из DOM в связке с CSSOM (объектная модель стилей), вычисляя геометрию (layout) и рисуя пиксели (paint). Изменение DOM может, но не обязано приводить к перерисовке</li></ul><p>Ключевое: DOM - это «живое» (live) дерево. Он не копия HTML и не снимок: изменение объекта DOM немедленно отражается в документе и (при необходимости) в отрисовке. Например узел, полученный в переменную, продолжает отражать актуальное состояние, а многие коллекции узлов автоматически обновляются при изменении дерева (live-коллекции - см. вопрос про методы поиска).</p><p>DOM - это не часть JavaScript (ECMAScript). Это отдельный стандарт WHATWG DOM Standard - платформенно-независимый API, который браузер предоставляет окружению. Поэтому к нему обращаются и из других языков, а в самом ECMAScript никаких window, document и узлов нет.</p><p>Структура узлов. Всё в дереве - узлы (Node), и у каждого есть числовой тип (nodeType). Основные виды:</p><ul><li>Element - узел-тег (div, p, input и т.д.). Для конкретных HTML-тегов это подклассы HTMLElement (HTMLInputElement, HTMLDivElement...)</li><li>Text - текст внутри элементов. Важный нюанс: пробелы и переносы строк между тегами тоже становятся отдельными текстовыми узлами, поэтому в дереве «лишних» узлов больше, чем кажется по разметке</li><li>Comment - узлы-комментарии (есть в дереве, но не отображаются)</li><li>Document - корень всего дерева, точка входа (глобальный объект document)</li></ul><p>Иерархия классов: всё наследует от Node, а Node - от EventTarget (поэтому любой узел умеет принимать события). Полный разбор иерархии EventTarget → Node → Element → HTMLElement - в отдельном вопросе про классы DOM-узлов.</p><p>Устойчивость парсера: браузер строит валидное дерево даже из «кривого» HTML - по правилам спецификации парсинга автоматически закрывает теги, достраивает обязательные элементы (например table > tbody), исправляет вложенность. Поэтому итоговый DOM может структурно отличаться от написанной разметки.</p>',
    order: 1,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_browser_env_002',
    topicId: 'topic_browser_env',
    question: 'Что такое window?',
    answer:
      '<p>window - это объект окна (или вкладки) браузера. У него двойная природа, и это главное, что нужно понимать:</p><ul><li>Это глобальный объект (global object) среды в браузере - то, к чему привязаны глобальные переменные и встроенные функции. Все глобальные API (setTimeout, fetch, console, Array, parseInt и т.д.) - по сути свойства window</li><li>Это корень BOM (Browser Object Model) - набора объектов для управления самим окном и браузером (в отличие от DOM, который про содержимое документа)</li></ul><p>Что даёт BOM через window:</p><ul><li>location - адрес страницы, навигация и перезагрузка (управление URL)</li><li>history - управление историей сессии (назад/вперёд, pushState для SPA)</li><li>navigator - информация о браузере и окружении (userAgent, язык, онлайн-статус, и API вроде geolocation, clipboard)</li><li>screen - данные об экране</li><li>Размеры и прокрутка окна: innerWidth/innerHeight (область просмотра, viewport), scrollX/scrollY, методы scrollTo/scrollBy</li><li>Управление окнами: open(), close(), а также opener, parent, top, frames (для iframe и попапов)</li><li>Диалоги: alert, prompt, confirm</li><li>Таймеры: setTimeout, setInterval (формально это методы window/BOM, а не часть ECMAScript)</li><li>Хранилища: localStorage, sessionStorage</li></ul><p>window против document против globalThis (частая путаница):</p><ul><li>window - всё окно/вкладка (global object + BOM)</li><li>document - один из его узлов (window.document), точка входа именно в DOM (содержимое страницы)</li><li>globalThis - универсальная ссылка на глобальный объект, одинаковая во всех средах (ES2020). В браузере globalThis === window, но в Node это global, в Web Worker - self. Для переносимого кода обращаются к globalThis</li></ul><p>Связь глобальных переменных с window (важный нюанс области видимости):</p><ul><li>Объявленные на верхнем уровне обычного скрипта через var и function declaration становятся свойствами window: var x = 1 делает window.x === 1</li><li>А let, const и class - НЕ становятся свойствами window (они глобальные, но живут в отдельной записи окружения)</li><li>В ES-модулях (script type="module") это не работает вообще: переменные верхнего уровня модуля в window не попадают</li><li>Неявная глобальная: присваивание необъявленной переменной в нестрогом режиме создаёт свойство window (частый баг; в строгом режиме - ReferenceError)</li></ul><p>Обращение к свойствам window можно писать без префикса: window.location и просто location эквивалентны, потому что window - это global object и его свойства видны как глобальные имена. Префикс window. пишут для явности или при конфликте имён.</p><p>Контексты и изоляция: у каждой вкладки, каждого iframe и каждого окна - СВОЙ объект window со своим document. Поэтому объекты из разных window не взаимозаменяемы (например массив из другого iframe не пройдёт instanceof Array текущего окна - разные realm). В Web Worker объекта window вообще нет: там нет DOM, а глобальный объект - self.</p><p>Своё свойство window.name - особенное: строка, которая сохраняется при смене страницы в той же вкладке (исторически использовалось для передачи данных между страницами).</p>',
    order: 2,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_browser_env_003',
    topicId: 'topic_browser_env',
    question: 'Классы DOM-узлов?',
    answer:
      '<p>Каждый DOM-узел - это объект конкретного встроенного класса, и эти классы выстроены в цепочку наследования (по сути обычную прототипную цепочку). Главная линия: EventTarget ← Node ← Element ← HTMLElement ← конкретный класс элемента. В неё врезаются и другие ветки. Благодаря наследованию узел получает свойства и методы со всех уровней над собой.</p><p>Уровни иерархии:</p><ul><li>EventTarget - корневой «абстрактный» класс. Он не про DOM, а про события: даёт addEventListener, removeEventListener, dispatchEvent. Именно поэтому события работают на любом узле. Важно: от EventTarget наследуют не только узлы - его реализуют и window, XMLHttpRequest, WebSocket и др. Поэтому слушать события можно и на них, хотя они не часть DOM-дерева</li><li>Node - «абстрактный» базовый класс для всех узлов дерева. Даёт то, что есть у ЛЮБОГО узла независимо от его вида: навигацию (parentNode, childNodes, firstChild, nextSibling), nodeType, nodeName, textContent, методы вставки/удаления (appendChild, removeChild и т.п.)</li><li>От Node наследуются основные виды узлов: Element, CharacterData, Document, DocumentFragment</li></ul><p>Конкретные ветки от Node:</p><ul><li>Element - базовый класс для всех элементов-тегов. Даёт навигацию ПО ЭЛЕМЕНТАМ (children, firstElementChild, nextElementSibling), поиск (querySelector, getElementsByTagName, closest, matches), работу с атрибутами (getAttribute, setAttribute), classList, innerHTML/outerHTML</li><li>HTMLElement - базовый класс для всех HTML-элементов (наследует от Element). Даёт общее для HTML: style, dataset, hidden, click(), focus(), обработчики вида onclick. От него наследуются конкретные классы тегов: HTMLInputElement (со своим value, checked), HTMLImageElement (src), HTMLAnchorElement (href), HTMLBodyElement и т.д. - каждый добавляет свойства, специфичные именно для этого тега</li><li>Параллельно HTMLElement существуют SVGElement (для SVG-тегов) и MathMLElement - тоже наследники Element. Поэтому не каждый Element является HTMLElement</li><li>CharacterData - «абстрактный» класс для узлов с текстовым содержимым, от него наследуются:<ul><li>Text - текст внутри элементов (включая узлы из пробелов и переносов строк)</li><li>Comment - узлы-комментарии (есть в дереве, не отображаются)</li></ul></li><li>Document - класс документа в целом; глобальный document - его экземпляр (точнее HTMLDocument). Точка входа в DOM: содержит методы поиска по всему дереву (getElementById, querySelector), createElement, доступ к document.body, document.forms и др.</li><li>DocumentFragment - лёгкий «контейнер-обрывок» дерева в памяти, не часть документа; используется для пакетной вставки узлов без промежуточных перерисовок</li></ul><p>Где физически лежит метод/свойство - определяется уровнем класса. Это объясняет, почему, например, querySelector есть и у document, и у любого элемента (он определён в Document и в Element), а value есть только у input (он в HTMLInputElement, а не в общем HTMLElement). Понимание уровня помогает не искать свойство «не там».</p><p>nodeType - числовой код вида узла (свойство из Node). Главные значения: 1 - Element, 3 - Text, 8 - Comment, 9 - Document, 11 - DocumentFragment. Используется для быстрой проверки вида узла (например отфильтровать текстовые узлы при обходе childNodes).</p><p>Это реальные классы, а не абстракция «на бумаге»: их имена - глобальные конструкторы (HTMLInputElement, Node, Element...), работает elem instanceof HTMLElement, а саму цепочку можно увидеть через Object.getPrototypeOf (например для input: HTMLInputElement → HTMLElement → Element → Node → EventTarget → Object). Конкретный класс узла виден через elem.constructor.name.</p>',
    order: 3,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_browser_env_004',
    topicId: 'topic_browser_env',
    question:
      'Какие есть точки входа в DOM-дерево (documentElement, body, head) и готовые коллекции документа?',
    answer:
      '<p>Корень всего дерева - объект document (экземпляр класса Document). От него ведут несколько готовых ссылок-точек входа, чтобы не искать ключевые узлы вручную:</p><ul><li>document.documentElement - корневой элемент-тег, то есть &lt;html&gt;. Это самый верхний узел-ЭЛЕМЕНТ (document - его родитель, но сам document элементом не является). Через него удобно читать общую прокрутку/размеры страницы</li><li>document.head - элемент &lt;head&gt;</li><li>document.body - элемент &lt;body&gt;</li></ul><p>Важный подвох с document.body: он равен null, если скрипт выполняется ДО того, как браузер дошёл до разбора &lt;body&gt; - например обычный синхронный скрипт, размещённый в &lt;head&gt;. На момент его выполнения тела ещё нет в дереве. Поэтому к body (и к элементам страницы вообще) безопасно обращаться либо разместив скрипт в конце body, либо с defer, либо по событию DOMContentLoaded (подробнее - в подтеме про загрузку документа).</p><p>Готовые коллекции документа - заранее собранные наборы определённых элементов, доступные без вызова методов поиска:</p><ul><li>document.forms - все формы</li><li>document.images - все &lt;img&gt;</li><li>document.links - все ссылки (&lt;a&gt; и &lt;area&gt; с атрибутом href)</li><li>document.scripts - все &lt;script&gt;</li><li>document.embeds, document.forms[name] и т.п.</li></ul><p>Ключевая особенность этих коллекций - они «живые» (live HTMLCollection). Это значит, что коллекция автоматически отражает текущее состояние дерева: если добавить или удалить форму, document.forms сразу это покажет, без повторного запроса. Это поведение принципиально отличается от document.querySelectorAll(...), который возвращает СТАТИЧЕСКИЙ снимок (static NodeList) на момент вызова и при изменениях дерева не обновляется.</p><p>Практические следствия «живости»:</p><ul><li>Доступ по индексу (document.forms[0]) и по имени/id (document.forms.myForm или document.forms["myForm"]) - многие из этих коллекций индексируются ещё и по name/id</li><li>HTMLCollection - это НЕ массив: у него есть length и доступ по индексу, но нет map/filter/forEach. Чтобы применить методы массива, его превращают в массив: [...document.forms] или Array.from(...)</li><li>Опасность в циклах: если в цикле по живой коллекции добавлять/удалять соответствующие элементы, длина меняется на ходу - можно получить бесконечный цикл или пропуски. Для безопасного перебора снимают снимок через Array.from</li></ul><p>Подробный разбор живых (HTMLCollection) и статических (NodeList) коллекций и методов поиска - в подтеме про работу с DOM.</p>',
    order: 4,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_browser_env_005',
    topicId: 'topic_browser_env',
    question:
      'Как устроена архитектура браузера? Какие функции выполняет JS-движок и что такое Web API?',
    answer:
      '<p>Браузер - это не одна программа, а набор взаимодействующих подсистем («движков»). Классически выделяют компоненты:</p><ul><li>User Interface (UI) - видимая оболочка: адресная строка, кнопки навигации, вкладки, меню. Всё, кроме области самой страницы</li><li>Browser Engine - связующий слой между UI и движком рендеринга: передаёт команды (загрузить URL, назад/вперёд), управляет процессом</li><li>Rendering Engine (движок рендеринга) - превращает HTML/CSS в то, что видно: парсит HTML в DOM, CSS в CSSOM, строит дерево рендеринга, считает раскладку и рисует. Примеры: Blink (Chrome, Edge, Opera), WebKit (Safari), Gecko (Firefox)</li><li>Networking - сетевой слой: HTTP-запросы, TCP/TLS, кеш, DNS. Работает в отдельных потоках/процессе, не блокируя рендеринг</li><li>JavaScript Engine (движок JS) - исполняет JS. Примеры: V8 (Chrome, Edge, Node.js), JavaScriptCore (Safari), SpiderMonkey (Firefox)</li><li>UI Backend - низкоуровневая отрисовка базовых виджетов (поля ввода, окна), мост к графике ОС</li><li>Data Persistence (хранение) - локальные хранилища: cookie, localStorage, sessionStorage, IndexedDB, Cache API (WebSQL устарел и удалён - его упоминают только исторически)</li></ul><p>Важно различать движок рендеринга и движок JS - это РАЗНЫЕ подсистемы. Rendering engine отвечает за DOM/CSS/отрисовку, JS engine - только за выполнение скриптов. Они взаимодействуют (JS меняет DOM → рендеринг перерисовывает), но это отдельные части.</p><p>Что делает JS-движок (на примере V8):</p><ul><li>Компиляция и выполнение: современные движки не «интерпретируют построчно», а применяют JIT-компиляцию - горячий код компилируется в машинный «на лету» для скорости (в V8 интерпретатор Ignition + оптимизирующий компилятор TurboFan)</li><li>Управление памятью: куча (heap) для объектов, стек вызовов (call stack) для контекстов выполнения, автоматическая сборка мусора</li><li>Оптимизации: инлайн-кеши, скрытые классы (hidden classes) для быстрого доступа к свойствам, деоптимизация при изменении формы объектов</li></ul><p>Ключевой момент: сам JS-движок реализует ТОЛЬКО язык (ECMAScript) - синтаксис, типы, встроенные объекты, стек, кучу, сборку мусора. В нём НЕТ ни DOM, ни сети, ни таймеров.</p><p>Web API - это интерфейсы, которые предоставляет СРЕДА (браузер), а не JS-движок:</p><ul><li>DOM API (document, узлы), fetch / XMLHttpRequest, setTimeout / setInterval, localStorage, события, geolocation, Canvas, WebSocket и сотни других</li><li>Они доступны в JS как глобальные функции/объекты (через window), но реализованы браузером вне движка - движок лишь вызывает их</li><li>Именно Web API дают асинхронность: таймеры и сетевые запросы выполняются в потоках браузера, а результат возвращается в JS через очереди задач и Event Loop (подробно - в вопросе про Event Loop в базовом банке)</li></ul><p>Современная архитектура - многопроцессная. Браузер не один процесс, а много (модель особенно развита в Chrome):</p><ul><li>Отдельные процессы под вкладки/сайты (изоляция): падение или зависание одной вкладки не роняет остальные, и это граница безопасности (site isolation)</li><li>Процессы-рендереры запускаются в песочнице (sandbox) с урезанными правами - защита от вредоносного кода страницы</li><li>Внутри рендерера тоже несколько потоков: основной поток (парсинг, JS, стили, раскладка), потоки компоновки (compositor) и растеризации, web-воркеры. Поэтому тяжёлый JS блокирует основной поток (и рендеринг), но не весь браузер</li></ul><p>Связь с остальным: глобальный объект окна и BOM - в вопросе про window; DOM как объектная модель - в вопросе про DOM; этапы превращения DOM в пиксели (style → layout → paint → composite) - в подтеме про рендеринг.</p>',
    order: 5,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_browser_env_006',
    topicId: 'topic_browser_env',
    question:
      'Что такое History API? Как работает клиентская навигация в SPA (pushState, popstate)?',
    answer:
      '<p>History API - часть BOM (window.history) для управления историей сессии текущей вкладки. Именно он позволяет менять URL и реагировать на навигацию БЕЗ перезагрузки страницы - сердце клиентского роутинга в SPA.</p><p>Классические методы навигации по истории:</p><ul><li>history.back() / history.forward() - на шаг назад/вперёд (как кнопки браузера)</li><li>history.go(n) - на n шагов (отрицательное - назад); history.go(0) - перезагрузка</li><li>history.length - количество записей в истории сессии</li></ul><p>Ключевые методы для SPA - изменение истории без перезагрузки:</p><ul><li>history.pushState(state, title, url) - ДОБАВЛЯЕТ новую запись в историю и меняет адрес в строке браузера, НЕ загружая страницу и НЕ обращаясь к серверу. Это и есть механизм перехода между «экранами» SPA</li><li>history.replaceState(state, title, url) - ЗАМЕНЯЕТ текущую запись (без добавления новой). Применяют для нормализации URL, редиректов «без следа», обновления параметров, чтобы кнопка «назад» не возвращала на промежуточный адрес</li></ul><p>Параметры:</p><ul><li>state - произвольный СЕРИАЛИЗУЕМЫЙ объект (через структурное клонирование), который привязывается к записи истории. Доступен как history.state и в событии popstate как event.state. Есть лимит размера. Туда кладут данные для восстановления экрана (id, прокрутку, состояние)</li><li>title - почти всеми браузерами ИГНОРИРУЕТСЯ, передают пустую строку ""</li><li>url - новый адрес. Обязан быть того же origin (схема+хост+порт), иначе SecurityError. Меняет только строку адреса, документ не перезагружается</li></ul><p>Событие popstate (на window) - реакция на навигацию ПОЛЬЗОВАТЕЛЯ по истории:</p><ul><li>Срабатывает при переходах назад/вперёд (кнопки браузера, history.back/forward/go)</li><li>КРИТИЧНЫЙ нюанс: popstate НЕ срабатывает на pushState/replaceState. То есть программное изменение истории событие не порождает</li><li>Следствие для роутера: при ПРОГРАММНОМ переходе роутер сам и вызывает pushState, и рендерит новый экран. А popstate ловит ТОЛЬКО «назад/вперёд» - там роутер читает location/event.state и рендерит нужное состояние. Из-за этого логику отрисовки выносят в отдельную функцию, которую дёргают и при pushState, и в обработчике popstate</li></ul><pre>// программный переход\nhistory.pushState({ page: "about" }, "", "/about");\nrenderRoute();                 // pushState НЕ вызовет popstate - рендерим сами\n\n// назад/вперёд пользователем\nwindow.addEventListener("popstate", (e) => {\n  renderRoute(location.pathname, e.state); // только тут реагируем на историю\n});</pre><p>Связь с location (тоже BOM, см. вопрос про window): в отличие от History API, переходы через location ВЫПОЛНЯЮТ настоящую навигацию с перезагрузкой - location.href = url, location.assign(url) (с записью в историю), location.replace(url) (без записи), location.reload(). Старый способ SPA-роутинга до History API - через хеш (#): менять location.hash и слушать событие hashchange. Хеш не отправляется на сервер, поэтому не требует серверной настройки, но даёт «некрасивые» URL.</p><p>Серверный нюанс «чистых» URL (важно для SPA): при роутинге через History API адреса настоящие (/about, /users/5), и если пользователь обновит страницу или зайдёт по прямой ссылке, запрос уйдёт на СЕРВЕР по этому пути. Поэтому сервер должен быть настроен на возврат index.html для любого маршрута (fallback), иначе будет 404. С хеш-роутингом такой проблемы нет (после # на сервер не уходит).</p><p>Современное (стоит проверять поддержку): Navigation API - новый, более удобный интерфейс навигации с единым событием navigate, перехватывающим ВСЕ переходы (включая клики по ссылкам), что упрощает роутеры; есть и history.scrollRestoration для управления восстановлением прокрутки при навигации.</p><p>Связь: window/location/history как часть BOM - в вопросе про window; полный жизненный цикл настоящей навигации (DNS/TCP/рендер) - в подтеме про рендеринг; различия CSR/SSR/SPA - в отдельной (отложенной) теме про рендеринг приложений.</p>',
    order: 6,
    createdAt: NOW,
    updatedAt: NOW,
  },
  // JavaScript: Загрузка страницы и скриптов
  {
    id: 'q_browser_loading_001',
    topicId: 'topic_browser_loading',
    question: 'Что делают атрибуты async и defer у script? Чем отличаются?',
    answer:
      '<p>Оба атрибута применяются к ВНЕШНИМ скриптам (с src) и решают одну задачу: позволить браузеру грузить скрипт ПАРАЛЛЕЛЬНО с разбором HTML, не останавливая парсинг. Различаются они по двум осям: КОГДА скрипт выполнится и СОХРАНЯЕТСЯ ли порядок.</p><p>Чтобы понять смысл, нужен базовый случай - обычный скрипт без атрибутов:</p><ul><li>Обычный &lt;script src&gt; - парсер-блокирующий (parser-blocking): встретив его, браузер ОСТАНАВЛИВАЕТ разбор HTML, скачивает и выполняет скрипт, и только потом продолжает парсинг. Поэтому такие скрипты тормозят построение страницы, а если стоят в &lt;head&gt;, то на момент их выполнения document.body ещё null (тела нет в дереве)</li></ul><p>defer:</p><ul><li>Скрипт грузится параллельно с парсингом (не блокирует его), но ВЫПОЛНЯЕТСЯ только после полного разбора HTML, перед самым событием DOMContentLoaded</li><li>СОХРАНЯЕТ порядок: несколько defer-скриптов выполнятся строго в том порядке, в каком записаны в разметке, независимо от того, кто из них скачался первым</li><li>Гарантированно видит весь DOM. Идеален для скриптов, зависящих от дерева и/или друг от друга. Фактически defer - стандартный способ подключения скриптов приложения</li></ul><p>async:</p><ul><li>Тоже грузится параллельно, но ВЫПОЛНЯЕТСЯ сразу как только скачался - «кто первый загрузился, тот первый и выполнился»</li><li>НЕ сохраняет порядок: между собой async-скрипты выполняются в непредсказуемом порядке (по скорости загрузки), а не по разметке</li><li>Момент выполнения непредсказуем: может сработать как до, так и после DOMContentLoaded, и его выполнение может ненадолго прервать парсинг (если скрипт успел скачаться по ходу разбора)</li><li>Подходит для НЕЗАВИСИМЫХ скриптов, которым не важен порядок и которые не полагаются на остальной код: счётчики аналитики, реклама, виджеты</li></ul><p>Кратко: defer - «дождаться конца парсинга и выполнить ПО ПОРЯДКУ»; async - «выполнить КАК МОЖНО СКОРЕЕ, без гарантий порядка».</p><p>Если указаны ОБА атрибута сразу - срабатывает async (defer выступает запасным вариантом для очень старых браузеров, не понимающих async). Это и есть смысл фразы «приоритет у async».</p><p>Важные нюансы:</p><ul><li>И async, и defer игнорируются у инлайновых скриптов - то есть у &lt;script&gt; БЕЗ src. Атрибуты влияют только на внешние скрипты</li><li>type="module" (ES-модуль) по умолчанию ведёт себя как defer: модульные скрипты не блокируют парсинг и выполняются после него с сохранением порядка - писать defer для модуля не нужно. При этом к модулю можно добавить async - тогда он выполнится по async-семантике (как можно скорее, без гарантии порядка)</li><li>Атрибут nomodule - скрипт-фолбэк для старых браузеров без поддержки модулей (современные его игнорируют)</li></ul><p>Связь с событиями загрузки: defer-скрипты гарантированно отрабатывают до DOMContentLoaded, async - как повезёт. Полный разбор стадий загрузки документа, DOMContentLoaded, load и document.readyState - в отдельном вопросе.</p>',
    order: 1,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_browser_loading_002',
    topicId: 'topic_browser_loading',
    question: 'События load и error при загрузке ресурсов?',
    answer:
      '<p>Внешние ресурсы, которые браузер загружает отдельно (скрипты, изображения, стили, фреймы, медиа), умеют сообщать о результате своей загрузки двумя событиями на самом элементе ресурса:</p><ul><li>load - ресурс успешно загружен. Для &lt;script&gt; это значит, что код скачан и ВЫПОЛНЕН: в обработчике onload уже можно использовать переменные и функции, которые объявил этот скрипт. Для &lt;img&gt; - что картинка декодирована и доступны её размеры</li><li>error - загрузка не удалась (сеть, 404, битый ресурс)</li></ul><p>Где это реально нужно: главный сценарий - ДИНАМИЧЕСКАЯ загрузка. Когда мы создаём ресурс из JS (например подключаем сторонний скрипт или подгружаем картинку программно), нам нужно знать момент готовности, чтобы безопасно с ним работать:</p><pre>const script = document.createElement("script");\nscript.src = "https://example.com/lib.js";\nscript.onload = () => {\n  // библиотека загружена и выполнена - её API доступно\n};\nscript.onerror = () => {\n  // не удалось загрузить - показать запасной вариант\n};\ndocument.head.append(script);</pre><p>Эти же события поддерживают &lt;img&gt; (load/error по картинке), &lt;link rel="stylesheet"&gt; (готовность стилей), &lt;iframe&gt; (load по загрузке его документа), audio/video.</p><p>Важные нюансы (частые подвохи):</p><ul><li>Не путать с load у window. Событие load на КОНКРЕТНОМ ресурсе - про этот ресурс. Событие load на window - про загрузку ВСЕЙ страницы со всеми ресурсами. Это разные события на разных целях (window.onload разбирается в вопросе про стадии загрузки документа)</li><li>error у ресурсов НЕ всплывает (does not bubble). Поэтому делегирование на общем контейнере по обычному всплытию не сработает - обработчик вешают либо прямо на ресурс, либо на стадии перехвата (capture). Также такие ошибки не ловятся try/catch вокруг кода вставки и не приходят в обычный window.onerror как исключения</li><li>Подвох с кешем у изображений: если картинка уже в кеше, она может «загрузиться» мгновенно - и если назначить img.onload ПОСЛЕ установки src, событие можно пропустить. Решение - проверять флаг img.complete (true, если изображение уже загружено) и/или вешать обработчик до установки src</li><li>Кросс-доменные скрипты: чтобы получить детали ошибок выполнения такого скрипта в window.onerror, ему нужен атрибут crossorigin и корректные CORS-заголовки (иначе ошибка приходит обезличенной - "Script error"). Связь с CORS - в подтеме про сеть</li></ul><p>Промисификация - типовой приём: динамическую загрузку оборачивают в промис, резолвя его в onload и отклоняя в onerror, чтобы использовать с await:</p><pre>const loadScript = (src) => new Promise((resolve, reject) => {\n  const s = document.createElement("script");\n  s.src = src;\n  s.onload = resolve;\n  s.onerror = reject;\n  document.head.append(s);\n});</pre>',
    order: 2,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_browser_loading_003',
    topicId: 'topic_browser_loading',
    question: 'Какие есть стадии загрузки документа (DOMContentLoaded, load, readyState)?',
    answer:
      '<p>Жизненный цикл загрузки страницы отмечается двумя ключевыми событиями и свойством-индикатором стадии.</p><p>Два главных события (важно, что они на РАЗНЫХ целях):</p><ul><li>DOMContentLoaded - срабатывает на document, когда полностью построено DOM-дерево и выполнены все блокирующие парсинг и defer-скрипты. На этот момент HTML разобран и DOM готов, НО внешние ресурсы (картинки, стили, async-скрипты) могут быть ещё не загружены. Это сигнал «с DOM можно работать» - сюда вешают инициализацию, навешивание обработчиков и т.п.</li><li>load - срабатывает на window, когда загружено ВСЁ: и DOM, и все внешние ресурсы (изображения, стили, фреймы). Нужен, когда важны размеры картинок или полная готовность страницы. Обычно наступает заметно позже DOMContentLoaded</li></ul><p>document.readyState - текущая стадия загрузки, три значения:</p><ul><li>loading - идёт разбор HTML (DOM ещё строится)</li><li>interactive - HTML полностью разобран, DOM построен (но ресурсы могут грузиться). Выставляется прямо перед выполнением defer-скриптов и событием DOMContentLoaded</li><li>complete - загружено всё, включая ресурсы; соответствует моменту события load на window</li></ul><p>Парное событие readystatechange срабатывает при каждой смене readyState - устаревшая альтернатива отслеживанию стадий (сейчас предпочитают DOMContentLoaded/load).</p><p>Последовательность по шагам:</p><ol><li>readyState = "loading". Браузер разбирает HTML, строя DOM из узлов Element и Text. Обычный &lt;script&gt; (без атрибутов) останавливает парсинг до своего выполнения; defer грузится параллельно и выполнится в конце по порядку; async грузится параллельно и выполняется как только скачался</li><li>HTML полностью разобран, отработали defer-скрипты → readyState становится "interactive" и тут же срабатывает DOMContentLoaded</li><li>Догружаются оставшиеся ресурсы (картинки, стили, async-скрипты) → readyState становится "complete" и срабатывает событие load на window</li></ol><p>Важные нюансы и подвохи:</p><ul><li>Связь со скриптами: defer-скрипты ГАРАНТИРОВАННО выполняются до DOMContentLoaded (и по порядку), а async - в произвольный момент, может как до, так и после него (см. вопрос про async/defer)</li><li>CSS блокирует скрипты, а значит и DOMContentLoaded: сам по себе CSS не задерживает построение DOM, НО если перед скриптом есть &lt;link rel="stylesheet"&gt;, браузер дождётся загрузки стилей ПЕРЕД выполнением этого скрипта (скрипт может читать стили) - а раз DOMContentLoaded ждёт скрипты, он сдвигается до загрузки этих стилей. Частый неожиданный источник задержки DOMContentLoaded</li><li>Если обработчик навешивается ПОЗДНО (скрипт подключён в конце или асинхронно), событие DOMContentLoaded могло уже пройти - тогда обработчик не вызовется. Надёжный приём - проверить стадию: if (document.readyState === "loading") вешать слушатель, иначе выполнять сразу</li><li>document.body === null до разбора body: обычный скрипт в &lt;head&gt; выполняется на стадии loading, когда тела ещё нет в дереве (см. вопрос про точки входа в DOM)</li></ul><p>События выгрузки/ухода со страницы (зеркальная сторона жизненного цикла):</p><ul><li>beforeunload (на window) - перед уходом; вернув из обработчика строку/вызвав preventDefault, можно показать стандартный диалог подтверждения «Покинуть страницу?» (текст кастомизировать нельзя). Используют, чтобы предупредить о несохранённых данных</li><li>pagehide / visibilitychange - современные и надёжные события для сохранения состояния при уходе или сворачивании вкладки</li><li>unload - исторически «при выгрузке», но НЕНАДЁЖЕН: он ломает bfcache (back/forward cache - кеш мгновенной навигации назад/вперёд) и часто не срабатывает на мобильных. Сейчас вместо него рекомендуют pagehide/visibilitychange. Для финальной отправки данных на сервер при уходе используют navigator.sendBeacon</li></ul>',
    order: 3,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_browser_loading_004',
    topicId: 'topic_browser_loading',
    question:
      'Что такое ресурсные подсказки загрузки (preload, prefetch, preconnect, modulepreload)?',
    answer:
      '<p>Ресурсные подсказки (resource hints) - это атрибуты rel у тега &lt;link&gt;, которыми разработчик подсказывает браузеру, ЧТО и КОГДА грузить, чтобы оптимизировать загрузку. Браузер сам обнаруживает ресурсы по мере разбора HTML, но подсказки позволяют начать загрузку раньше или, наоборот, заранее подготовить соединение.</p><p>Делятся на две группы: загрузка самих ресурсов и подготовка соединения.</p><p>Загрузка ресурсов:</p><ul><li>&lt;link rel="preload"&gt; - принудительно и с ВЫСОКИМ приоритетом загрузить ресурс, критичный для ТЕКУЩЕЙ страницы, ещё до того как браузер дойдёт до него при парсинге. Обязателен атрибут as (тип ресурса: script, style, font, image) - он задаёт приоритет и корректную обработку. Для шрифтов нужен ещё crossorigin. Типичное применение: критичный шрифт, ключевая картинка (LCP), важный скрипт. Подвох: если preload-ресурс не использован в течение пары секунд, браузер предупредит в консоли - preload только ускоряет загрузку, но не «применяет» ресурс сам</li><li>&lt;link rel="prefetch"&gt; - загрузить ресурс с НИЗКИМ приоритетом в фоне для БУДУЩЕЙ навигации (вероятная следующая страница). Кладётся в кеш и достаётся мгновенно, когда понадобится. Это спекулятивная оптимизация: если переход не случится, трафик потрачен зря</li><li>&lt;link rel="modulepreload"&gt; - специальный preload для ES-модулей: не только качает сам модуль, но и разбирает его, чтобы заранее загрузить дерево импортируемых зависимостей. Для модульных приложений эффективнее обычного preload</li></ul><p>Подготовка соединения (для ресурсов с других доменов):</p><ul><li>&lt;link rel="preconnect"&gt; - заранее установить полное соединение с origin (DNS-резолв + TCP + TLS-рукопожатие). Когда позже понадобится ресурс с этого домена, задержки на установку соединения уже не будет. Полезно для CDN, доменов шрифтов, API</li><li>&lt;link rel="dns-prefetch"&gt; - более лёгкая версия: только DNS-резолв домена заранее. Дешевле preconnect, применяют как запасной вариант или для менее критичных доменов</li></ul><p>Атрибут fetchpriority (high / low / auto) - точная настройка приоритета загрузки конкретного ресурса (на &lt;img&gt;, &lt;script&gt;, &lt;link&gt; и в fetch). Позволяет поднять приоритет ключевой картинки или понизить второстепенной, не меняя порядок в разметке.</p><p>Связь с остальным: подсказки управляют именно ЗАГРУЗКОЙ, а не выполнением. preload скрипта не выполняет его - выполнение по-прежнему определяется обычным/async/defer тегом &lt;script&gt; (см. вопрос про async/defer). Зачем это важно для скорости рендеринга (render-blocking ресурсы, критичный путь отрисовки) - разбирается в подтеме про рендеринг.</p>',
    order: 4,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_browser_loading_005',
    topicId: 'topic_browser_loading',
    question: 'Как надёжно отправить данные при уходе со страницы (sendBeacon, keepalive)?',
    answer:
      '<p>Задача: отправить данные на сервер в момент, когда пользователь уходит со страницы или закрывает вкладку (аналитика, метрики сессии, недосохранённое состояние). Наивный подход - обычный fetch или XHR в обработчике ухода - НЕНАДЁЖЕН: при выгрузке страницы браузер обрывает «висящие» запросы, а синхронный XHR (которым раньше это решали) блокирует поток и ухудшает UX, и в современных браузерах при unload запрещён.</p><p>Правильный инструмент - navigator.sendBeacon(url, data):</p><ul><li>Ставит в очередь небольшой асинхронный POST-запрос, который браузер ГАРАНТИРОВАННО доставит, даже если страница уже выгружается - запрос живёт независимо от страницы</li><li>Не блокирует выгрузку и не ждёт ответа (ответ сервера игнорируется - «выстрелил и забыл»)</li><li>Возвращает boolean: удалось ли поставить запрос в очередь (false, например, если данные превышают лимит)</li><li>data может быть строкой, FormData, Blob (для JSON обычно отправляют Blob с типом application/json)</li><li>Ограничен по размеру (порядка десятков КБ) - для маленьких полезных нагрузок, не для больших выгрузок</li></ul><pre>navigator.sendBeacon("/analytics", JSON.stringify({ event: "leave", t: Date.now() }));</pre><p>Альтернатива - fetch с опцией keepalive: true. Делает то же (запрос переживает выгрузку страницы) и при этом даёт полный контроль: произвольный метод, заголовки, можно прочитать ответ. Подходит, когда нужен не только POST или нестандартные заголовки. Тоже ограничен по суммарному размеру keepalive-запросов.</p><pre>fetch("/analytics", { method: "POST", body, keepalive: true });</pre><p>Куда вешать отправку - критичный нюанс: НЕ на unload (он ломает bfcache и ненадёжен, особенно на мобильных). Рекомендуется:</p><ul><li>visibilitychange с проверкой document.visibilityState === "hidden" - самый надёжный момент «пользователь свернул/уходит», срабатывает и на мобильных</li><li>pagehide - как запасной/дополнительный сигнал ухода</li></ul><p>То есть связка: слушать visibilitychange/pagehide и в нём вызывать sendBeacon (или fetch с keepalive). Подробнее про события жизненного цикла ухода (beforeunload, pagehide, unload, bfcache) - в вопросе про стадии загрузки документа.</p>',
    order: 5,
    createdAt: NOW,
    updatedAt: NOW,
  },
  // JavaScript: Работа с DOM
  {
    id: 'q_browser_dom_001',
    topicId: 'topic_browser_dom',
    question: 'Какие есть методы поиска элементов в DOM? Чем отличаются?',
    answer:
      '<p>Методы поиска различаются по двум осям: ЧТО возвращают (один элемент или коллекцию) и КАКАЯ это коллекция - «живая» (live) или статический снимок (static). Вторая ось - источник тонких багов, поэтому важнее всего.</p><p>Возвращают ОДИН элемент (или null):</p><ul><li>document.getElementById(id) - ищет по id. Только на document (не на элементах), самый быстрый. Возвращает null, если не найдено</li><li>elem.querySelector(css) - первый элемент, подходящий под CSS-селектор. Работает на document и на ЛЮБОМ элементе (ищет внутри его поддерева). Максимально гибкий: любой селектор (.class, #id, [attr], комбинаторы, псевдоклассы)</li></ul><p>Возвращают КОЛЛЕКЦИЮ:</p><ul><li>elem.querySelectorAll(css) - все подходящие элементы. Возвращает СТАТИЧЕСКИЙ NodeList - снимок на момент вызова, который НЕ обновляется при изменении дерева</li><li>elem.getElementsByClassName(name), elem.getElementsByTagName(tag) - по классу/тегу. Возвращают ЖИВУЮ HTMLCollection</li><li>document.getElementsByName(name) - по атрибуту name (для полей форм). Живая коллекция</li></ul><p>Готовые коллекции документа (document.forms, images, links, scripts) - тоже живые HTMLCollection; разобраны в вопросе про точки входа в DOM.</p><p>Live HTMLCollection против static NodeList - ключевое различие:</p><ul><li>Живая (getElementsBy*, document.forms): автоматически отражает текущее состояние дерева. Добавили/удалили подходящий элемент - коллекция мгновенно это показала, без повторного запроса</li><li>Статическая (querySelectorAll): «фотография» на момент вызова, изменения дерева её не трогают</li><li>Подвох живой коллекции: цикл, который в теле добавляет/удаляет элементы, попадающие в эту же коллекцию, меняет её длину на ходу - можно получить бесконечный цикл или пропуски. Для безопасного перебора снимают снимок: [...collection] или Array.from(...). Для перебора назад тоже помогает обход с конца</li><li>Подвох производительности: повторное чтение length/элементов живой коллекции в цикле может каждый раз пересчитываться по дереву - кешируют длину или конвертируют в массив</li></ul><p>Тип результата и методы массива:</p><ul><li>И HTMLCollection, и NodeList - это НЕ массивы (псевдомассивы): есть length и доступ по индексу, но нет map/filter/reduce</li><li>Исключение: у NodeList (результата querySelectorAll) есть forEach, у HTMLCollection - нет вообще ничего</li><li>Чтобы пользоваться методами массива, конвертируют: [...nodeList] или Array.from(nodeList)</li></ul><p>Нюансы querySelector/querySelectorAll:</p><ul><li>Ищет по ВСЕМУ поддереву элемента, а не только среди прямых детей. el.querySelector("div") найдёт любой вложенный div на любой глубине</li><li>Псевдокласс :scope обозначает сам элемент-контекст: el.querySelectorAll(":scope > li") - только прямые дочерние li</li><li>Селектор должен быть валидным CSS: id или класс со спецсимволами (начинается с цифры, содержит точку и т.п.) нужно экранировать через CSS.escape, иначе SyntaxError</li><li>querySelectorAll работает «жадно» по селектору - можно искать сразу по нескольким: el.querySelectorAll("h1, h2, .title")</li></ul><p>getElementById - легаси-подвох: элемент с id автоматически создаёт одноимённую глобальную переменную (window.myId). Полагаться на это нельзя (засоряет глобальную область, перекрывается обычными переменными) - всегда явно получают элемент через getElementById/querySelector.</p><p>Когда что: getElementById - когда есть id (быстрее всего); querySelector/All - универсальный современный выбор (гибкие селекторы, предсказуемый статический результат); getElementsBy* - когда осознанно нужна именно живая коллекция. Поиск ВВЕРХ по дереву и проверка соответствия селектору (closest, matches, contains) - в отдельном вопросе.</p>',
    order: 1,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_browser_dom_002',
    topicId: 'topic_browser_dom',
    question: 'Как работают matches, closest и contains?',
    answer:
      '<p>Это три метода для проверки и поиска ВВЕРХ по дереву - в дополнение к querySelector, который ищет вниз по поддереву. Они отвечают на вопросы «подходит ли элемент?», «есть ли подходящий предок?» и «вложен ли узел внутрь?».</p><p>elem.matches(css) - проверяет, соответствует ли САМ элемент CSS-селектору. Возвращает boolean, ничего не ищет. Удобно для фильтрации:</p><ul><li>if (el.matches("a.external")) - элемент это внешняя ссылка?</li><li>Часто применяется в делегировании событий: проверить, по тому ли элементу кликнули - if (event.target.matches(".delete-btn"))</li><li>Селектор должен быть валидным CSS (иначе SyntaxError). Исторически метод назывался по-разному в браузерах (matchesSelector с вендорными префиксами) - сейчас всегда matches</li></ul><p>elem.closest(css) - ищет БЛИЖАЙШЕГО предка (или сам элемент), подходящего под селектор, поднимаясь вверх по цепочке родителей. Возвращает найденный элемент или null.</p><ul><li>Ключевой нюанс: проверка начинается с САМОГО элемента. Если он сам подходит под селектор - вернётся он же. Затем идёт по parentElement вверх до корня</li><li>Ходит ТОЛЬКО по предкам - не по соседям и не по потомкам</li><li>Главное применение - делегирование событий: клик мог прийтись на вложенный элемент (иконку внутри кнопки), а нужно найти саму кнопку/строку: event.target.closest(".list-item") надёжно поднимется до нужного контейнера. Это устойчивее, чем event.target.matches, который проверяет только сам target</li></ul><pre>// делегирование: клик внутри любой строки списка\nlist.addEventListener("click", (e) => {\n  const row = e.target.closest(".row");\n  if (row) { /* работаем со строкой */ }\n});</pre><p>parent.contains(node) - проверяет, является ли node потомком parent (вложен ли node внутрь). Возвращает boolean.</p><ul><li>Важный нюанс: contains возвращает true и в случае, когда node === parent (элемент «содержит сам себя»). То есть это проверка «node находится в поддереве parent, включая сам parent»</li><li>Работает с любыми узлами, не только элементами (например с текстовыми)</li><li>Типичные применения: проверить, был ли клик ВНЕ элемента (закрыть выпадашку, если !menu.contains(event.target)); убедиться, что узел всё ещё в документе - document.contains(node); избежать ложных срабатываний mouseover между родителем и детьми</li></ul><p>Сводно по направлению: querySelector/querySelectorAll смотрят ВНИЗ (в поддерево), closest смотрит ВВЕРХ (по предкам), matches проверяет сам элемент (без поиска), contains проверяет отношение «предок-потомок» между двумя узлами. Ручная навигация по конкретным связям (родитель, соседи, дети) - в отдельном вопросе про навигационные ссылки.</p>',
    order: 2,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_browser_dom_003',
    topicId: 'topic_browser_dom',
    question: 'Чем отличаются дочерние узлы от потомков?',
    answer:
      '<p>Это различие по ГЛУБИНЕ вложенности:</p><ul><li>Дочерние узлы (дети, children) - только НЕПОСРЕДСТВЕННО вложенные, на один уровень вниз (прямые потомки)</li><li>Потомки (descendants) - ВСЕ вложенные на любую глубину: дети, дети детей и так далее, всё поддерево</li></ul><p>На это различие накладывается вторая, независимая ось - УЗЛЫ против ЭЛЕМЕНТОВ (различие по типу, а не по глубине). Их часто путают, но в DOM это принципиально:</p><ul><li>Узлы (nodes) - вообще всё в дереве: элементы-теги, текстовые узлы, комментарии</li><li>Элементы (elements) - только узлы-теги (nodeType === 1)</li></ul><p>Из пересечения двух осей получаются разные наборы и разные свойства для доступа:</p><ul><li>childNodes - все ДЕТИ как УЗЛЫ (включая текстовые и комментарии)</li><li>children - только дети-ЭЛЕМЕНТЫ</li><li>Аналогично для потомков: querySelectorAll("*") даёт всех потомков-элементов, а полный обход всех узлов-потомков делают рекурсией или через NodeIterator/TreeWalker</li></ul><p>Ключевой подвох, почему childNodes и children почти всегда РАЗНЫЕ: пробелы и переносы строк между тегами в разметке - это настоящие текстовые узлы. Поэтому:</p><pre>&lt;ul&gt;\n  &lt;li&gt;A&lt;/li&gt;\n  &lt;li&gt;B&lt;/li&gt;\n&lt;/ul&gt;</pre><ul><li>ul.children.length === 2 (два li)</li><li>ul.childNodes.length === 5 (текстовый узел-перенос, li, перенос, li, перенос)</li><li>ul.firstChild - текстовый узел (перенос), а ul.firstElementChild - первый li</li></ul><p>Практический вывод: когда работают с тегами (а это почти всегда), используют «элементные» свойства (children, firstElementChild, parentElement), чтобы не спотыкаться о текстовые узлы из форматирования разметки. «Узловые» свойства (childNodes, firstChild) нужны, когда важен именно текст или комментарии.</p><p>Связанное понятие - соседи (siblings): узлы на одном уровне с общим родителем. Полный набор связей для перемещения по дереву (родитель, дети, соседи - в вариантах «узлы» и «элементы») разбирается в вопросе про навигационные ссылки. Проверить, является ли один узел потомком другого, можно через parent.contains(node) (см. вопрос про matches/closest/contains).</p>',
    order: 3,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_browser_dom_004',
    topicId: 'topic_browser_dom',
    question: 'Какие есть навигационные ссылки по DOM-дереву?',
    answer:
      '<p>Получив узел, можно перейти к его родителю, детям и соседям через свойства-ссылки (read-only геттеры). Они идут ПАРАМИ: «узловой» вариант (учитывает все узлы, включая текстовые и комментарии) и «элементный» (только узлы-элементы, пропускает текст/комментарии).</p><p>Набор для ВСЕХ узлов (включая текстовые узлы из пробелов/переносов и комментарии):</p><ul><li>parentNode - родительский узел</li><li>childNodes - все дочерние узлы (живой NodeList)</li><li>firstChild / lastChild - первый / последний дочерний узел</li><li>previousSibling / nextSibling - предыдущий / следующий соседний узел</li></ul><p>Набор ТОЛЬКО для элементов (пропускает текст и комментарии):</p><ul><li>parentElement - родитель-элемент</li><li>children - дочерние элементы (живой HTMLCollection)</li><li>firstElementChild / lastElementChild - первый / последний дочерний элемент</li><li>previousElementSibling / nextElementSibling - предыдущий / следующий соседний элемент</li><li>childElementCount - количество дочерних элементов (быстрее, чем children.length в некоторых случаях)</li></ul><p>Главный практический совет: для работы с тегами используют ЭЛЕМЕНТНЫЙ набор. Иначе «узловые» ссылки спотыкаются о текстовые узлы: из-за пробелов и переносов в разметке firstChild часто оказывается текстовым узлом-переносом, а не первым тегом, и nextSibling прыгает на текст между элементами. firstElementChild и nextElementSibling этих ловушек лишены (подробнее про узлы vs элементы - в вопросе про детей и потомков).</p><p>Подвох parentNode vs parentElement - почти всегда совпадают, но различаются на самом верху дерева. У большинства узлов родитель - это элемент, поэтому оба свойства дают одно и то же. Но у корневого &lt;html&gt; родитель - это document, который НЕ является элементом. Поэтому:</p><ul><li>document.documentElement.parentNode === document (узел-документ есть)</li><li>document.documentElement.parentElement === null (родителя-ЭЛЕМЕНТА нет)</li></ul><p>Это удобно для подъёма «вверх до элементов»: цикл while (el = el.parentElement) сам остановится на корне, не зайдя в document.</p><p>Тип коллекций: childNodes и children - живые (отражают изменения дерева) и являются псевдомассивами (есть length и доступ по индексу, но это не массивы). Нюанс: у childNodes (NodeList) есть forEach, у children (HTMLCollection) методов нет вовсе - для перебора с методами массива конвертируют через [...el.children] или Array.from. О живых vs статических коллекциях - в вопросе про методы поиска.</p><p>Когда нужны не «соседи по шагам», а поиск по условию - используют другие инструменты: querySelector/querySelectorAll для поиска вниз по поддереву и closest для подъёма к ближайшему подходящему предку (см. соответствующие вопросы), а ручную навигацию по ссылкам берут для точечного перемещения к конкретному соседнему узлу.</p>',
    order: 4,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_browser_dom_005',
    topicId: 'topic_browser_dom',
    question:
      'Какие есть свойства DOM-узлов для типа и содержимого (nodeType, innerHTML, textContent)?',
    answer:
      '<p>Свойства узла делятся на «про тип/имя узла» и «про его содержимое».</p><p>Тип и имя узла:</p><ul><li>nodeType - числовой код вида узла: 1 - элемент, 3 - текст, 8 - комментарий, 9 - документ. Используют для быстрой проверки вида узла при обходе</li><li>nodeName - имя узла, есть у ЛЮБОГО узла: для элемента это имя тега, для текстового узла - "#text", для комментария - "#comment", для документа - "#document"</li><li>tagName - имя тега, есть ТОЛЬКО у элементов (у текстовых узлов его нет). Для элементов tagName и nodeName совпадают. В HTML-документах имя тега возвращается в ВЕРХНЕМ регистре ("DIV"), в XML - как записано</li><li>nodeValue / data - содержимое текстового узла или комментария (у элемента nodeValue равен null)</li></ul><p>Доступ к содержимому - четыре свойства с важными различиями:</p><ul><li>innerHTML - HTML ВНУТРИ элемента в виде строки. Чтение даёт сериализованную разметку; запись ПАРСИТ строку как HTML и полностью заменяет содержимое реальными узлами. Самый мощный, но и самый опасный</li><li>outerHTML - то же, но ВКЛЮЧАЯ сам элемент (его открывающий/закрывающий теги). Подвох записи: outerHTML не меняет элемент «на месте», а ЗАМЕНЯЕТ его в дереве новым, разобранным из строки. Старая переменная при этом продолжает ссылаться на удалённый из дерева элемент - «протухшая» ссылка: el.outerHTML = "..." оставляет el указывающим на уже не вставленный узел</li><li>textContent - весь ТЕКСТ внутри (без тегов). Чтение возвращает текст всех потомков, включая скрытый CSS-ом (display:none) и текст из script/style. Запись вставляет строку как ОБЫЧНЫЙ ТЕКСТ - любые &lt; и &gt; экранируются, HTML не парсится. Быстрый, не вызывает пересчёт стилей</li><li>innerText - похоже на textContent, но возвращает только ВИДИМЫЙ текст (учитывает CSS: скрытое не попадает, регистр от text-transform может примениться). Минус: чтение innerText вызывает reflow (браузер вынужден пересчитать стили/раскладку, чтобы понять, что видимо) - поэтому он медленнее textContent. Для чтения «просто текста» предпочитают textContent</li></ul><p>Безопасность - XSS через innerHTML (критично). Запись в innerHTML парсит строку как HTML, поэтому вставка непроверенных пользовательских данных - это уязвимость межсайтового скриптинга (XSS):</p><ul><li>Сами теги &lt;script&gt;, вставленные через innerHTML, НЕ выполняются. Но это не защита: рабочий вектор - атрибуты-обработчики, например &lt;img src=x onerror=alert(1)&gt; сработает сразу</li><li>Правило: для вывода пользовательского текста используют textContent (он экранирует и не парсит HTML), а не innerHTML</li><li>Если HTML действительно нужен - применяют санитайзер (DOMPurify) или новый встроенный element.setHTML() с очисткой. Также помогает Trusted Types - механизм, запрещающий присваивать в innerHTML «сырые» строки</li></ul><p>Подвох innerHTML += - это НЕ дописывание, а полная перезапись: выражение el.innerHTML = el.innerHTML + "..." сериализует всё содержимое в строку и заново парсит его целиком. Последствия:</p><ul><li>Все вложенные узлы ПЕРЕСОЗДАЮТСЯ заново - теряются назначенные на них обработчики событий, выделение, состояние полей ввода, ссылки на старые узлы протухают</li><li>Это медленно и затратно на больших фрагментах</li><li>Правильнее добавлять через insertAdjacentHTML("beforeend", html) (парсит и вставляет, не трогая существующие узлы) или через создание узлов и append (см. вопрос про изменение DOM)</li></ul>',
    order: 5,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_browser_dom_006',
    topicId: 'topic_browser_dom',
    question:
      'Как работать с атрибутами? Чем атрибут отличается от DOM-свойства? Что такое dataset?',
    answer:
      '<p>Нужно различать две связанные, но разные вещи: HTML-АТРИБУТЫ (то, что написано в разметке) и DOM-СВОЙСТВА (поля объекта-элемента в JS). При загрузке браузер парсит атрибуты и для СТАНДАРТНЫХ из них создаёт соответствующие свойства DOM-объекта. Но это не одно и то же.</p><p>Ключевые различия:</p><ul><li>Тип: атрибут - ВСЕГДА строка. Свойство - типизировано: может быть строкой, числом, булевым, объектом (например elem.checked это boolean, elem.style это объект)</li><li>Имя: имена атрибутов регистронезависимы. Имена свойств - в camelCase и иногда отличаются от атрибута: атрибут class - свойство className, атрибут for - свойство htmlFor</li><li>Значение: атрибут хранит «как написано в HTML», свойство может быть «вычисленным/нормализованным»</li></ul><p>Методы для работы с АТРИБУТАМИ (работают с любыми атрибутами, включая нестандартные):</p><ul><li>elem.getAttribute(name) - значение атрибута (строка или null)</li><li>elem.setAttribute(name, value) - задать (value приводится к строке)</li><li>elem.hasAttribute(name) - есть ли атрибут</li><li>elem.removeAttribute(name) - удалить</li><li>elem.toggleAttribute(name) - переключить наличие булева атрибута</li><li>elem.getAttributeNames() - массив имён всех атрибутов</li><li>elem.attributes - живая коллекция (NamedNodeMap) всех атрибутов</li></ul><p>Главная неточность распространённого мнения «синхронизация в обе стороны». На самом деле:</p><ul><li>Синхронизируются ТОЛЬКО стандартные атрибуты, и часто ОДНОСТОРОННЕ. Нестандартные (произвольные) атрибуты в свойства не превращаются вовсе - к ним только через getAttribute/setAttribute</li><li>Подвох value у input - классический пример односторонней связи: атрибут value задаёт лишь НАЧАЛЬНОЕ значение (доступно как elem.defaultValue), а свойство elem.value - ТЕКУЩЕЕ. Пользователь печатает → меняется свойство value, но атрибут в разметке остаётся прежним. И обратно: setAttribute("value", ...) после того как пользователь что-то ввёл, не перезапишет текущее свойство. Поэтому текущее значение поля читают через property elem.value, а не getAttribute("value")</li><li>Булевы атрибуты (checked, disabled, selected, readonly): в HTML важно само НАЛИЧИЕ атрибута, а в DOM это булево СВОЙСТВО. Проверять/менять состояние нужно через свойство (elem.checked = true), а не через атрибут. getAttribute("checked") вернёт начальное состояние, а не текущее</li><li>href/src: атрибут хранит значение «как написано» (может быть относительным - getAttribute("href") даёт "/page"), а свойство elem.href возвращает АБСОЛЮТНЫЙ URL ("https://site.com/page")</li></ul><p>Практический вывод: для актуального СОСТОЯНИЯ элемента (значение поля, отмечен ли чекбокс, заблокирован ли) работают через DOM-свойства; для произвольных/нестандартных атрибутов и для чтения «исходного» значения из разметки - через getAttribute/setAttribute.</p><p>Атрибуты data-* и dataset. Любой атрибут с префиксом data- (например data-user-id) - валидный способ хранить пользовательские данные прямо в разметке, не ломая стандарт. Доступ к ним - через свойство elem.dataset:</p><ul><li>Имя преобразуется из kebab-case в camelCase: атрибут data-user-id доступен как elem.dataset.userId</li><li>Чтение и запись: elem.dataset.userId = "5" создаёт/меняет атрибут data-user-id="5"</li><li>Значения всегда СТРОКИ (как у любых атрибутов) - число/объект нужно парсить вручную (Number(...), JSON.parse(...))</li><li>dataset удобен для связи разметки и логики: хранить id строки таблицы, состояние, параметры - и читать их в обработчиках (часто в связке с делегированием событий и closest)</li></ul>',
    order: 6,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_browser_dom_007',
    topicId: 'topic_browser_dom',
    question: 'Какие есть методы создания, вставки, удаления и клонирования узлов?',
    answer:
      '<p>Создание узлов:</p><ul><li>document.createElement(tag) - создаёт элемент по имени тега. Для SVG нужен createElementNS с пространством имён</li><li>document.createTextNode(text) - текстовый узел (текст не парсится как HTML - безопасно)</li><li>document.createComment(text) - узел-комментарий</li><li>document.createDocumentFragment() - лёгкий контейнер для пакетной сборки узлов (разбирается отдельно)</li><li>elem.cloneNode(deep) - копия узла: при deep === true со всем поддеревом, при false - только сам узел</li></ul><p>Современные методы вставки (принимают НЕСКОЛЬКО аргументов, и узлы, И строки):</p><ul><li>parent.append(...nodes/strings) - в конец содержимого; parent.prepend(...) - в начало</li><li>node.before(...) / node.after(...) - перед узлом / после узла (как соседа)</li><li>node.replaceWith(...) - заменить узел на переданные</li><li>node.remove() - удалить узел из дерева</li><li>Важно: строки в этих методах вставляются как ТЕКСТ (createTextNode), а не парсятся как HTML - спецсимволы экранируются, XSS не возникает. Это безопаснее innerHTML</li></ul><p>Легаси-методы вставки (старее, ограниченнее - только по одному УЗЛУ, строки нельзя):</p><ul><li>parent.appendChild(node) - в конец; возвращает вставленный узел</li><li>parent.insertBefore(node, refNode) - перед refNode (если refNode === null - в конец)</li><li>parent.removeChild(node) / parent.replaceChild(newNode, oldNode)</li><li>Их всё ещё встретишь в коде, но в новом коде предпочитают append/before/remove - они короче, принимают строки и несколько аргументов</li></ul><p>Ключевой подвох - вставка ПЕРЕМЕЩАЕТ, а не копирует. Если передать в append/insertBefore узел, который УЖЕ есть в дереве, он не дублируется, а ПЕРЕНОСИТСЯ на новое место (удаляется со старого). Чтобы вставить копию, узел сначала клонируют (cloneNode) или используют новый узел.</p><p>Вставка HTML-строки и текста по позиции - insertAdjacentHTML/Element/Text(where, ...). Позиция where:</p><ul><li>"beforebegin" - перед самим элементом</li><li>"afterbegin" - внутрь, в начало</li><li>"beforeend" - внутрь, в конец</li><li>"afterend" - после самого элемента</li></ul><p>insertAdjacentHTML парсит строку как HTML (как innerHTML - значит XSS-риск при пользовательских данных), НО, в отличие от innerHTML +=, НЕ пересоздаёт уже существующие узлы рядом - поэтому это правильный способ «дописать» HTML без потери обработчиков на соседних узлах (см. вопрос про содержимое и innerHTML).</p><p>Нюансы cloneNode:</p><ul><li>deep === false копирует только сам элемент (с атрибутами), без содержимого; deep === true - со всем поддеревом</li><li>Копируются атрибуты, в том числе инлайновые обработчики on* (onclick="..."). Но обработчики, добавленные через addEventListener, НЕ копируются - это частый подвох</li><li>Копируется и id - получится дубликат id в документе, что обычно нежелательно</li></ul><p>Производительность: каждая отдельная вставка в живое дерево может вызывать пересчёт раскладки (reflow). Когда узлов много, их собирают вне дерева (в DocumentFragment) и вставляют разом - детали в вопросе про DocumentFragment и template, а влияние на отрисовку - в подтеме про рендеринг.</p>',
    order: 7,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_browser_dom_008',
    topicId: 'topic_browser_dom',
    question:
      'Как управлять классами и стилями элемента (className, classList, style, getComputedStyle)?',
    answer:
      '<p>Классы. Есть два способа, и второй почти всегда лучше:</p><ul><li>elem.className - строка ВСЕХ классов целиком. Присваивание ПОЛНОСТЬЮ заменяет весь набор классов - поэтому для точечных изменений неудобно и опасно (затрёт чужие классы). Соответствует атрибуту class (свойство названо className, потому что class - зарезервированное слово)</li><li>elem.classList - объект DOMTokenList (живой) для точечной работы с отдельными классами:<ul><li>add("a", "b") / remove("a", "b") - добавить/убрать (можно несколько сразу)</li><li>toggle("a") - переключить; со вторым аргументом-флагом toggle("a", force): при true только добавляет, при false только убирает (удобно привязать к условию)</li><li>contains("a") - есть ли класс (boolean)</li><li>replace("old", "new") - заменить один класс другим</li></ul></li></ul><p>Стили. elem.style - доступ к ИНЛАЙНОВЫМ стилям, то есть к атрибуту style самого элемента (НЕ к правилам из CSS-файлов):</p><ul><li>Имена свойств в camelCase: elem.style.backgroundColor = "red" (CSS background-color). Для float используется cssFloat (float - зарезервированное слово)</li><li>elem.style.cssText - задать/прочитать весь инлайновый стиль строкой целиком</li><li>setProperty(name, value, priority) / getPropertyValue(name) / removeProperty(name) - нужны в двух случаях: для CSS-переменных (кастомных свойств) и для приоритета !important. CSS-переменные через точку НЕ работают: elem.style.setProperty("--color", "red") и getPropertyValue("--color"), а elem.style["--color"] - нет. Для !important: setProperty("color", "red", "important")</li><li>Запись в elem.style меняет только инлайновые стили; убрать инлайновое свойство - присвоить "" или removeProperty</li></ul><p>Чтение ИТОГОВЫХ стилей - getComputedStyle(elem, pseudo):</p><ul><li>elem.style видит ТОЛЬКО инлайновые стили. Чтобы узнать реально применённое значение (из таблиц стилей, унаследованное, по умолчанию), используют getComputedStyle(elem) - он возвращает вычисленные (computed/resolved) значения с учётом ВСЕХ источников</li><li>Значения нормализованы: цвета в rgb(...), размеры в пикселях ("16px"), даже если в CSS заданы в em/%/именах</li><li>Результат только для ЧТЕНИЯ - менять стили через него нельзя</li><li>Второй аргумент - псевдоэлемент: getComputedStyle(elem, "::before")</li></ul><p>Нюанс производительности (важно): чтение getComputedStyle (а также offsetWidth, getBoundingClientRect и подобных геометрических свойств) заставляет браузер при необходимости СИНХРОННО пересчитать раскладку (forced reflow). Если в цикле чередовать запись стилей и чтение вычисленных значений, получается layout thrashing - множественные пересчёты, бьющие по производительности. Решение - группировать чтения отдельно от записей (детали - в подтеме про рендеринг).</p><p>Практический ориентир: для изменения внешнего вида предпочитают переключать КЛАССЫ (classList) и держать стили в CSS, а не расставлять инлайновые elem.style - так логика отображения остаётся в таблицах стилей, а JS лишь меняет состояние. Инлайновый style уместен для динамических вычисляемых значений (позиция, размер «на лету»). Связь class ↔ className с общим механизмом атрибутов/свойств - в вопросе про атрибуты.</p>',
    order: 8,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_browser_dom_009',
    topicId: 'topic_browser_dom',
    question: 'Что такое DocumentFragment и тег template?',
    answer:
      '<p>Оба инструмента решают одну идею - подготовить узлы ВНЕ живого дерева документа, а потом вставить разом. Это и удобнее (собрал структуру отдельно), и быстрее (меньше пересчётов раскладки).</p><p>DocumentFragment - это лёгкий «контейнер-обёртка» для узлов, который существует в памяти и НЕ является частью документа. По сути - кусок дерева без собственного видимого узла-обёртки. Создаётся через document.createDocumentFragment() (или как .content у template).</p><p>Ключевое и неочевидное свойство: когда фрагмент вставляют в дерево (parent.append(fragment)), в документ попадает его СОДЕРЖИМОЕ (все дети), а сам фрагмент «растворяется» - в DOM он не появляется, и после вставки остаётся пустым. То есть фрагмент - это временный держатель, который при вставке исчезает, отдав детей.</p><pre>const frag = document.createDocumentFragment();\nfor (const item of items) {\n  const li = document.createElement("li");\n  li.textContent = item;\n  frag.append(li);        // накапливаем вне документа\n}\nlist.append(frag);        // ОДНА вставка; в list попадут все li, frag станет пустым</pre><p>Зачем это нужно - производительность. Если вставлять элементы по одному прямо в живое дерево, каждая вставка может провоцировать пересчёт раскладки (reflow). Собрав всё во фрагменте и вставив одним вызовом, мы делаем фактически одну операцию вставки - меньше перерасчётов. (Замечу: современные append умеют принять и сразу несколько узлов append(...nodes), что тоже одна операция; фрагмент особенно полезен, когда узлы создаются в разных местах кода или нужно передать «пачку» узлов как единое целое.)</p><p>template - HTML-тег для хранения ИНЕРТНОГО (неактивного) фрагмента разметки прямо в HTML. Его особенности:</p><ul><li>Содержимое template НЕ рендерится и считается «вне документа»: скрипты внутри не выполняются, картинки и видео не загружаются, стили не применяются, обработчики не навешиваются - пока шаблон не «оживят»</li><li>Доступ к содержимому - через свойство template.content, и это как раз DocumentFragment</li><li>Внутри template допустима любая разметка, даже та, что обычно требует строгого родителя (например &lt;tr&gt; без &lt;table&gt;) - парсер это разрешает</li></ul><p>Типовой паттерн использования template - клонировать его содержимое, заполнить и вставить:</p><pre>&lt;template id="row"&gt;\n  &lt;li class="item"&gt;&lt;span class="name"&gt;&lt;/span&gt;&lt;/li&gt;\n&lt;/template&gt;</pre><pre>const tpl = document.getElementById("row");\nconst node = tpl.content.cloneNode(true); // копия фрагмента шаблона\nnode.querySelector(".name").textContent = "Аня";\nlist.append(node);</pre><p>Важно клонировать content (cloneNode(true)), а не вставлять его напрямую: иначе при первой же вставке содержимое «уедет» из шаблона в документ, и повторно шаблон использовать не выйдет.</p><p>Чем template лучше строки в innerHTML: разметка задаётся декларативно в HTML (подсветка, валидация, не нужно экранировать кавычки в JS-строке), парсится браузером один раз, и нет XSS-риска от вставки сырой строки. Поэтому для повторяющихся блоков (строки списка, карточки) template + клонирование - чистый и безопасный подход.</p><p>Связь с веб-компонентами: template - одна из базовых технологий веб-компонентов, его содержимое часто клонируют в Shadow DOM элемента (подробнее - в подтеме про браузерные API и компоненты). Перемещение узлов при вставке и cloneNode разбираются в вопросе про методы вставки/клонирования, а влияние на отрисовку (reflow, батчинг) - в подтеме про рендеринг.</p>',
    order: 9,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_browser_dom_010',
    topicId: 'topic_browser_dom',
    question: 'Что такое TreeWalker и NodeIterator?',
    answer:
      '<p>Это низкоуровневые инструменты для обхода поддерева DOM с фильтрацией по ТИПУ узла. Их главное отличие от querySelector/querySelectorAll: CSS-селекторы умеют находить только ЭЛЕМЕНТЫ, а TreeWalker/NodeIterator обходят узлы ЛЮБОГО вида - в том числе текстовые узлы и комментарии. Поэтому их берут, когда нужно пройтись именно по тексту (например подсветить/заменить слова во всех текстовых узлах) или по комментариям.</p><p>TreeWalker - «курсор», который перемещается по дереву во все стороны. Создаётся через document.createTreeWalker(root, whatToShow, filter):</p><ul><li>root - корень поддерева для обхода</li><li>whatToShow - битовая маска, какие виды узлов показывать: NodeFilter.SHOW_ELEMENT, SHOW_TEXT, SHOW_COMMENT, SHOW_ALL и др. Можно комбинировать через побитовое ИЛИ</li><li>filter - необязательный объект с методом acceptNode(node), возвращающим вердикт</li></ul><p>Методы перемещения курсора (возвращают следующий подходящий узел или null): nextNode(), previousNode(), parentNode(), firstChild(), lastChild(), nextSibling(), previousSibling(). То есть TreeWalker умеет ходить и вглубь, и вверх, и вбок - отсюда название «walker».</p><pre>const walker = document.createTreeWalker(\n  document.body,\n  NodeFilter.SHOW_TEXT          // только текстовые узлы\n);\nwhile (walker.nextNode()) {\n  const textNode = walker.currentNode;\n  // обработать текст\n}</pre><p>Вердикты фильтра (acceptNode) - и здесь важный гик-нюанс про разницу SKIP и REJECT:</p><ul><li>NodeFilter.FILTER_ACCEPT - узел попадает в обход</li><li>NodeFilter.FILTER_SKIP - сам узел пропускается, но его ПОТОМКИ всё равно обходятся</li><li>NodeFilter.FILTER_REJECT - узел пропускается ВМЕСТЕ со всем поддеревом (потомки не обходятся). Для TreeWalker это ключевое отличие: REJECT отсекает целую ветку, SKIP - только сам узел</li></ul><p>NodeIterator - более простой, «плоский» вариант: тоже обходит узлы по фильтру, но движется только ЛИНЕЙНО - вперёд (nextNode) и назад (previousNode), без прыжков к родителю/детям/соседям. Создаётся через document.createNodeIterator(root, whatToShow, filter). Для NodeIterator FILTER_SKIP и FILTER_REJECT работают одинаково (поддерево всё равно перебирается линейно), в отличие от TreeWalker.</p><p>Когда что: querySelectorAll - для поиска элементов по селектору (99% задач). TreeWalker/NodeIterator - для редких низкоуровневых сценариев обхода текстовых узлов/комментариев или когда нужен точный контроль перемещения и фильтрации по типам узлов. На практике встречаются нечасто, но это «правильный» инструмент для работы с текстовым слоем DOM.</p>',
    order: 10,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_browser_dom_011',
    topicId: 'topic_browser_dom',
    question: 'Что делает replaceChildren? Как правильно очистить элемент?',
    answer:
      '<p>elem.replaceChildren(...nodes/strings) - современный метод, который ЗАМЕНЯЕТ всё содержимое элемента переданными узлами и/или строками за одну операцию. По сути это «очистить и вставить новое» в одном вызове.</p><ul><li>Принимает несколько аргументов, и узлы, и строки (строки вставляются как ТЕКСТ, не парсятся как HTML - XSS-безопасно, как у append/prepend)</li><li>Передача существующих узлов их ПЕРЕМЕЩАЕТ (как все методы вставки)</li></ul><pre>list.replaceChildren(item1, item2, item3); // было любое содержимое - стало ровно эти три</pre><p>Очистка элемента - вызов БЕЗ аргументов: elem.replaceChildren() удаляет всё содержимое. Это сейчас рекомендуемый способ очистки, и он лучше старых приёмов:</p><ul><li>Против elem.innerHTML = "": replaceChildren() не запускает HTML-парсер (innerHTML даже для пустой строки задействует механизм разбора), не работает со строками вообще и потому не несёт риска неправильной обработки разметки. На больших деревьях обычно быстрее</li><li>Против цикла while (elem.firstChild) elem.removeChild(elem.firstChild): короче и нагляднее, одна операция вместо ручного цикла</li><li>Против elem.textContent = "": textContent = "" тоже очищает и тоже быстр, но семантически это «задать пустой текст»; replaceChildren() выразительнее именно как «убрать всех детей»</li></ul><p>Связанные методы замены:</p><ul><li>node.replaceWith(...) - заменяет САМ узел (целиком, вместе с ним) на переданные - в отличие от replaceChildren, который меняет ВНУТРЕННОСТИ (см. вопрос про методы вставки/удаления)</li><li>Пара prepend/append добавляют в начало/конец, не трогая остальное; replaceChildren - заменяет всё содержимое целиком</li></ul><p>Итого выбор: добавить - append/prepend; заменить часть - before/after/replaceWith; заменить ВСЁ содержимое или очистить - replaceChildren.</p>',
    order: 11,
    createdAt: NOW,
    updatedAt: NOW,
  },
  // JavaScript: Рендеринг, координаты, размеры
  {
    id: 'q_browser_geometry_001',
    topicId: 'topic_browser_geometry',
    question: 'Что такое Critical Rendering Path? Как браузер превращает DOM в пиксели?',
    answer:
      '<p>Critical Rendering Path (CRP, критический путь рендеринга) - последовательность шагов, которые браузер проходит, чтобы из HTML и CSS получить пиксели на экране. Понимание этих шагов объясняет, что тормозит первую отрисовку и почему одни изменения дешёвые, а другие дорогие.</p><p>Этапы конвейера:</p><ol><li>Парсинг HTML → DOM. Браузер разбирает HTML-текст и строит DOM-дерево (объектную модель документа)</li><li>Парсинг CSS → CSSOM. Параллельно из всех стилей (внешних, в &lt;style&gt;, инлайновых) строится CSSOM - объектная модель стилей: дерево, где для каждого узла известны вычисленные правила</li><li>Render Tree (дерево рендеринга). DOM и CSSOM объединяются в дерево рендеринга - в него попадают только ВИДИМЫЕ узлы с их стилями. Важный нюанс: display:none исключает элемент из render tree целиком (его как будто нет в отрисовке), а visibility:hidden оставляет (элемент занимает место, но невидим). Узлы head, script, meta в дерево рендеринга не входят</li><li>Layout (раскладка, она же reflow). Браузер вычисляет ГЕОМЕТРИЮ: точные координаты и размеры каждого узла с учётом потока, размеров окна, шрифтов. Результат - «где и какого размера» каждый элемент. Это самый дорогой по вычислениям этап</li><li>Paint (отрисовка). Заполнение пикселей: текст, цвета, границы, тени, фоны - перевод геометрии и стилей в растровые слои</li><li>Composite (композиция/компоновка). Браузер может разбить страницу на СЛОИ (layers) и собрать итоговую картинку из них, в том числе силами GPU. Это позволяет двигать/прозрачить слой, не перерисовывая остальное</li></ol><p>Что блокирует рендеринг (render-blocking) - ключ к скорости первой отрисовки:</p><ul><li>CSS - render-blocking по своей природе: браузер не станет рисовать страницу, пока не построит CSSOM (иначе показал бы нестилизованный контент). Поэтому критичный CSS стараются делать маленьким и подключать рано; некритичный - грузить асинхронно</li><li>Синхронный JS - parser-blocking: обычный &lt;script&gt; останавливает парсинг HTML (а значит и построение DOM). Более того, скрипт перед собой ждёт CSSOM (вдруг он читает стили), поэтому CSS косвенно задерживает и выполнение скриптов. Отсюда defer/async и приёмы из подтемы про загрузку</li></ul><p>Дёшево vs дорого (почему важно знать конвейер):</p><ul><li>Изменения геометрии (размеры, позиция, добавление/удаление узлов) запускают Layout → Paint → Composite - дорого. Это называют reflow</li><li>Изменения только внешнего вида без геометрии (цвет, фон, тень) пропускают Layout, но требуют Paint → Composite - дешевле. Это repaint</li><li>Изменения transform и opacity при наличии своего слоя могут обрабатываться ТОЛЬКО на этапе Composite (силами GPU), минуя Layout и Paint - самый дешёвый случай. Поэтому анимации делают через transform/opacity, а не через top/left/width. Подробно про триггеры reflow/repaint - в отдельном вопросе</li></ul><p>Связь с кадрами и Event Loop. Браузер стремится перерисовывать экран примерно 60 раз в секунду - это ~16.6 мс на КАДР (frame). За это время в кадр укладываются: выполнение JS, пересчёт стилей, layout, paint, composite. Если синхронный JS (или бесконечная очередь микрозадач) занимает поток дольше - кадр пропускается, появляются «фризы» и дёрганья (jank). Поэтому тяжёлые вычисления дробят или выносят в Worker, а визуальные обновления синхронизируют с кадром через requestAnimationFrame - колбэк, вызываемый прямо перед этапом рендеринга (детальнее Event Loop и рендеринг - в базовом банке).</p><p>Практический вывод: чтобы первая отрисовка была быстрой - минимизируют render-blocking CSS/JS и объём критичного пути; чтобы интерфейс не тормозил при работе - избегают лишних reflow, анимируют через composite-свойства и не блокируют основной поток.</p>',
    order: 1,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_browser_geometry_002',
    topicId: 'topic_browser_geometry',
    question: 'Какие действия вызывают reflow и repaint? Что такое layout thrashing?',
    answer:
      '<p>«Вызвать рендер» - неточная формулировка: важно, КАКОЙ этап конвейера запускается, потому что они отличаются по стоимости. Опираясь на этапы критического пути рендеринга (CRP):</p><ul><li>Reflow (layout, перекомпоновка) - пересчёт ГЕОМЕТРИИ (координат и размеров). Самый дорогой: за ним всегда следуют paint и composite</li><li>Repaint (перерисовка) - перерисовка пикселей БЕЗ изменения геометрии. Дешевле reflow (layout пропускается)</li><li>Composite (только композиция) - пересборка готовых слоёв, часто на GPU. Самый дешёвый</li></ul><p>Что вызывает REFLOW (изменения геометрии):</p><ul><li>Изменение размеров окна (resize) и смена ориентации устройства</li><li>Манипуляции с DOM, меняющие структуру: добавление/удаление/перемещение видимых элементов</li><li>Изменение контента, влияющего на размеры (текст, размеры картинок)</li><li>Изменение влияющих на раскладку стилей: width, height, padding, margin, border, position, top/left, font-size, display и т.п. (через классы или инлайновый style)</li><li>Изменение шрифта (другие метрики текста → другая раскладка)</li><li>Прокрутка в некоторых случаях</li></ul><p>Что вызывает только REPAINT (без изменения геометрии): color, background, background-image, visibility, box-shadow, border-radius, outline - внешний вид меняется, габариты нет.</p><p>Что обходится только COMPOSITE: анимация transform и opacity (если у элемента свой слой) выполняется на этапе композиции, минуя layout и paint. Поэтому плавные анимации делают через transform/opacity, а не через left/top/width/height (последние дёргают reflow на каждом кадре).</p><p>Важный нюанс - reflow «расползается»: пересчёт одного элемента может затронуть его предков, потомков и соседей, вплоть до полного пересчёта документа. Поэтому дешевле менять глубоко вложенные/изолированные элементы, чем корневые.</p><p>Forced synchronous layout (принудительный синхронный layout) - ключевая ловушка. Браузер старается НЕ пересчитывать раскладку на каждое изменение, а копит изменения и выполняет layout один раз перед кадром (batching). Но если сразу после записи в стиль ПРОЧИТАТЬ геометрическое свойство, браузер вынужден пересчитать layout НЕМЕДЛЕННО и синхронно, чтобы вернуть актуальное значение. Свойства/методы, форсирующие layout при чтении:</p><ul><li>offsetTop/Left/Width/Height, clientWidth/Height, scrollTop/Left/Width/Height</li><li>getBoundingClientRect()</li><li>getComputedStyle() (для размеров)</li><li>scrollTo/scrollBy, focus() в ряде случаев</li></ul><p>Layout thrashing (молотьба раскладкой) - худший сценарий: в ЦИКЛЕ чередуются запись стиля и чтение геометрии. Каждое чтение форсирует синхронный reflow, который только что был «испорчен» предыдущей записью - получаются десятки/сотни пересчётов вместо одного:</p><pre>// ПЛОХО: на каждой итерации запись (style.width) ломает layout,\n// а чтение (offsetWidth) тут же форсирует синхронный reflow\nfor (const el of items) {\n  el.style.width = el.offsetWidth + 10 + "px";\n}</pre><p>Решение - разделить чтения и записи (read/write batching): сначала прочитать ВСЕ нужные значения, потом записать ВСЕ изменения:</p><pre>// ХОРОШО: сначала все чтения, потом все записи\nconst widths = items.map((el) => el.offsetWidth);\nitems.forEach((el, i) => { el.style.width = widths[i] + 10 + "px"; });</pre><p>Дополнительные приёмы оптимизации:</p><ul><li>Группировать визуальные изменения в requestAnimationFrame (выполнятся разом перед кадром); читать геометрию отдельно от записей</li><li>Менять «оффлайн»: элемент вне документа, в display:none или в DocumentFragment не вызывает reflow - изменения применяют пакетно и возвращают в дерево (см. DocumentFragment)</li><li>will-change: transform/opacity и свой слой - подсказать браузеру вынести элемент на отдельный слой заранее (не злоупотреблять - слои тратят память)</li><li>CSS-свойства content-visibility и contain - изолируют часть дерева, ограничивая область пересчёта</li><li>Вместо синхронного чтения позиции/размеров в реальном времени - IntersectionObserver (видимость) и ResizeObserver (изменение размеров), которые не форсируют layout (см. подтему про браузерные API)</li></ul><p>Где брать геометрию правильно (getBoundingClientRect, offset/client/scroll-метрики) и как при этом не плодить reflow - в отдельном вопросе про координаты и размеры.</p>',
    order: 2,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_browser_geometry_003',
    topicId: 'topic_browser_geometry',
    question:
      'Как получить координаты и размеры элемента (getBoundingClientRect, offset/client/scroll)?',
    answer:
      '<p>Существуют ДВЕ системы координат, и их постоянно путают:</p><ul><li>Относительно окна (viewport) - от верхнего левого угла видимой области. Меняются при прокрутке. В событиях мыши это clientX/clientY</li><li>Относительно документа (page) - от верхнего левого угла всей страницы. НЕ меняются при прокрутке. В событиях мыши это pageX/pageY</li></ul><p>Связь через прокрутку: page = client + прокрутка. То есть pageX = clientX + window.scrollX, pageY = clientY + window.scrollY. Зная одни координаты и величину прокрутки, всегда можно получить другие.</p><p>Главный инструмент - elem.getBoundingClientRect(). Возвращает объект DOMRect с координатами ОТНОСИТЕЛЬНО ОКНА (viewport):</p><ul><li>top, left, right, bottom - края прямоугольника относительно viewport</li><li>width, height - размеры (с учётом padding и border; учитывают CSS-трансформации)</li><li>x, y - то же, что left/top</li><li>Значения дробные (subpixel) и могут быть отрицательными, если элемент выше/левее видимой области</li></ul><p>Чтобы получить координаты относительно ДОКУМЕНТА, прибавляют прокрутку:</p><pre>const r = elem.getBoundingClientRect();\nconst pageTop = r.top + window.scrollY;\nconst pageLeft = r.left + window.scrollX;</pre><p>Три семейства метрик размеров/позиции элемента (ключевой гик-вопрос - что включает каждая):</p><ul><li>offset* - «внешний» размер и позиция в макете:<ul><li>offsetWidth / offsetHeight - ПОЛНЫЙ размер элемента: контент + padding + border + полоса прокрутки (но без margin)</li><li>offsetTop / offsetLeft - позиция относительно offsetParent (ближайшего позиционированного предка)</li></ul></li><li>client* - «внутренняя» видимая область:<ul><li>clientWidth / clientHeight - контент + padding, но БЕЗ border и БЕЗ полосы прокрутки. Полезно для «сколько влезает по контенту»</li><li>clientTop / clientLeft - толщина верхней/левой границы (border)</li></ul></li><li>scroll* - полный размер содержимого с учётом прокрученного за края:<ul><li>scrollWidth / scrollHeight - полная высота/ширина контента, включая невидимую прокрученную часть. Если контент не помещается, scrollHeight больше clientHeight</li><li>scrollTop / scrollLeft - насколько контент прокручен внутри элемента (можно ПИСАТЬ - программная прокрутка элемента)</li></ul></li></ul><p>Частые сравнения: clientWidth (без border/скроллбара) vs offsetWidth (с border/скроллбаром) vs scrollWidth (весь контент). Проверка «прокручен ли элемент до низа»: scrollTop + clientHeight &gt;= scrollHeight.</p><p>Прокрутка окна и элемента:</p><ul><li>window.scrollX / window.scrollY - текущая прокрутка страницы (старые имена pageXOffset/pageYOffset)</li><li>window.scrollTo(x, y) / scrollBy(dx, dy) - прокрутить окно; elem.scrollTo/scrollBy - прокрутить элемент. Опция behavior: "smooth" - плавно</li><li>elem.scrollIntoView(options) - прокрутить так, чтобы элемент стал видимым (block: "center", behavior: "smooth" и т.п.)</li></ul><p>Поиск элемента по координатам - document.elementFromPoint(x, y) возвращает самый верхний элемент в точке (координаты ОТНОСИТЕЛЬНО ОКНА). Полезно для drag-and-drop, кастомных меню. Вернёт null, если точка вне viewport.</p><p>Критичный нюанс производительности: чтение getBoundingClientRect, offset*, client*, scroll* ФОРСИРУЕТ синхронный reflow (браузер пересчитывает раскладку, чтобы вернуть актуальные числа). Поэтому их не читают в цикле вперемешку с изменением стилей (layout thrashing - см. вопрос про reflow), а кэшируют значения и группируют чтения. Для отслеживания видимости и изменения размеров без форсирования layout используют IntersectionObserver и ResizeObserver (подтема про браузерные API) - они эффективнее постоянного опроса координат.</p>',
    order: 3,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_browser_geometry_004',
    topicId: 'topic_browser_geometry',
    question: 'Что происходит после ввода URL в браузере и до отрисовки страницы?',
    answer:
      '<p>Полный путь от ввода адреса до картинки на экране - классический «end-to-end» вопрос. Шаги:</p><ol><li>Разбор и нормализация URL. Браузер разбирает строку: если это не похоже на URL, отправляет её в поисковик; иначе выделяет протокол, домен, путь, параметры. Применяется HSTS (принудительный перевод на https для известных доменов)</li><li>Проверка кешей. Прежде чем идти в сеть, браузер проверяет: HTTP-кеш (нет ли свежей копии ресурса), Service Worker (может ответить из своего кеша/офлайн), кеш DNS. Если есть валидная закешированная страница - сеть может вообще не понадобиться</li><li>DNS-резолвинг. Доменное имя превращается в IP-адрес. Сначала смотрятся кеши (браузера, ОС, роутера), затем запрос к DNS-серверу. Часто по UDP, результат кешируется по TTL</li><li>Установка TCP-соединения - «трёхэтапное рукопожатие» (three-way handshake): клиент шлёт SYN, сервер отвечает SYN-ACK, клиент подтверждает ACK. После этого канал готов. Соединения переиспользуются (keep-alive), чтобы не платить за хендшейк каждый раз</li><li>TLS-рукопожатие (только для HTTPS). Поверх TCP согласуются версия TLS и шифры, сервер присылает сертификат (браузер проверяет его подлинность и срок), вырабатываются сеансовые ключи. Дальше весь трафик шифруется. Это добавляет круги задержки (в TLS 1.3 их меньше)</li><li>HTTP-запрос. Браузер шлёт запрос: стартовая строка (метод + путь + версия), заголовки (Host, Cookie, Accept, User-Agent...), при необходимости тело. Версия протокола влияет на скорость: HTTP/1.1 - по одному запросу на соединение (с очередью), HTTP/2 - мультиплексирование многих запросов в одном соединении, HTTP/3 - поверх QUIC (на UDP), быстрее устанавливается и устойчив к потерям</li><li>Обработка на сервере и ответ. Сервер формирует ответ: код состояния (200/301/404/500...), заголовки, тело. Возможен редирект (3xx) - тогда браузер идёт по новому адресу (часть шагов повторяется)</li><li>Парсинг и построение страницы. Браузер начинает разбирать HTML ПОТОКОВО, не дожидаясь полной загрузки: строит DOM, параллельно грузит и парсит CSS (CSSOM) и подресурсы (картинки, шрифты, скрипты). Здесь же действуют render-blocking CSS и parser-blocking JS</li><li>Рендеринг. DOM + CSSOM → дерево рендеринга → layout → paint → composite. Этот этап - это и есть Critical Rendering Path (разобран в отдельном вопросе)</li><li>Страница отображается и становится интерактивной; продолжают догружаться отложенные ресурсы, выполняются скрипты, срабатывают DOMContentLoaded и load</li></ol><p>Где ускоряют этот путь (связь с другими вопросами): preconnect/dns-prefetch заранее проходят DNS/TCP/TLS до нужных доменов, preload тянет критичные ресурсы раньше (см. ресурсные подсказки); HTTP-кеш и Service Worker сокращают сетевую часть; минимизация render-blocking ресурсов ускоряет первую отрисовку. Сетевые механизмы (заголовки, кеширование, CORS) подробнее - в подтеме про сеть, а сам рендеринг - в вопросе про CRP.</p>',
    order: 4,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_browser_geometry_005',
    topicId: 'topic_browser_geometry',
    question: 'Как измерять производительность страницы (Core Web Vitals, Performance API)?',
    answer:
      '<p>Производительность меряют по пользовательским метрикам, а не «на глаз». Стандарт - Core Web Vitals (ключевые веб-показатели от Google), три метрики о реальном опыте:</p><ul><li>LCP (Largest Contentful Paint) - время отрисовки самого крупного видимого элемента (обычно главная картинка или заголовок). Метрика СКОРОСТИ ЗАГРУЗКИ. Хорошо - до 2.5 с</li><li>INP (Interaction to Next Paint) - задержка отклика на действия пользователя (клик, ввод): сколько проходит от взаимодействия до следующей отрисовки. Метрика ОТЗЫВЧИВОСТИ. С 2024 года заменила прежний FID (First Input Delay). Хорошо - до 200 мс</li><li>CLS (Cumulative Layout Shift) - суммарный сдвиг макета: насколько контент «прыгает» во время загрузки (картинки без размеров, поздно подгруженные баннеры). Метрика ВИЗУАЛЬНОЙ СТАБИЛЬНОСТИ. Хорошо - до 0.1</li></ul><p>Сопутствующие метрики: FCP (First Contentful Paint - первая отрисовка хоть какого-то контента), TTFB (Time To First Byte - время до первого байта ответа, отражает сетевую/серверную часть).</p><p>Два типа данных:</p><ul><li>Lab (лабораторные) - замер в контролируемых условиях (эмуляция устройства/сети). Воспроизводимо, удобно при разработке, но не отражает реальных пользователей</li><li>Field / RUM (полевые, Real User Monitoring) - метрики собранные у реальных посетителей. Точнее отражают опыт, именно их учитывает поиск</li></ul><p>Инструменты:</p><ul><li>Lighthouse (встроен в Chrome DevTools, вкладка Lighthouse) - аудит производительности/SEO/доступности, lab-данные и рекомендации</li><li>PageSpeed Insights - онлайн-сервис: Lighthouse (lab) + реальные данные пользователей Chrome (field, из CrUX)</li><li>WebPageTest - детальный анализ загрузки, водопад ресурсов, разные локации/устройства</li><li>DevTools Performance - запись и разбор кадров: где тратится время (scripting, rendering, painting), длинные задачи, дропнутые кадры (jank). Memory - утечки и снимки кучи</li></ul><p>Программный сбор - Web Performance API прямо из JS:</p><ul><li>performance.now() - высокоточный таймер (доли мс, монотонный) для замеров участков кода</li><li>performance.mark() / performance.measure() - расставить метки и измерить интервал между ними (User Timing)</li><li>PerformanceObserver - подписка на записи производительности: Navigation Timing (этапы загрузки документа), Resource Timing (тайминги каждого ресурса), Paint Timing (FCP), а также LCP, CLS, события долгих задач (long tasks). Именно так метрики Core Web Vitals собирают в проде (часто через библиотеку web-vitals). PerformanceObserver подробнее - в подтеме про браузерные API/наблюдатели</li></ul><p>Связь с механикой рендеринга: LCP упирается в скорость критического пути и render-blocking ресурсы; CLS - в reflow/сдвиги раскладки (задавать размеры медиа, резервировать место); INP - в занятость основного потока (длинные синхронные задачи и тяжёлые обработчики блокируют отклик - дробить работу, выносить в Worker). То есть оптимизация метрик прямо опирается на CRP, reflow и Event Loop из соседних вопросов.</p>',
    order: 5,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_browser_geometry_006',
    topicId: 'topic_browser_geometry',
    question: 'Что такое requestAnimationFrame и requestIdleCallback?',
    answer:
      '<p>Оба - способы запланировать выполнение колбэка в «правильный» момент относительно работы браузера, но для ПРОТИВОПОЛОЖНЫХ задач: rAF - для визуальных обновлений каждый кадр, rIC - для фоновой неважной работы в простои.</p><p>requestAnimationFrame(callback) - планирует колбэк ПРЯМО ПЕРЕД следующей перерисовкой (этапом рендеринга кадра). Браузер стремится рисовать ~60 кадров в секунду, то есть ~16.6 мс на кадр (см. CRP и бюджет кадра в соседних вопросах).</p><ul><li>Колбэк получает высокоточную метку времени (как performance.now) - удобно считать прогресс анимации по реальному времени, а не по числу кадров</li><li>Возвращает id; отменить - cancelAnimationFrame(id)</li><li>Для анимации вызывают rAF РЕКУРСИВНО (внутри колбэка снова rAF) - получается цикл, синхронизированный с кадрами</li></ul><pre>function animate(time) {\n  // обновить позицию по time\n  element.style.transform = `translateX(${x}px)`;\n  requestAnimationFrame(animate);\n}\nrequestAnimationFrame(animate);</pre><p>Почему rAF лучше setTimeout/setInterval для анимаций:</p><ul><li>Синхронизация с частотой обновления экрана - нет рассогласования и «рывков» (jank), которые даёт таймер, не попадающий в кадр</li><li>В ФОНОВОЙ вкладке rAF приостанавливается (колбэки не вызываются) - экономия CPU и батареи. Таймеры же продолжают тикать (хоть и троттлятся)</li><li>Браузер сам объединяет визуальные изменения в один кадр</li></ul><p>rAF также используют для БАТЧИНГА работы с DOM: визуальные изменения откладывают в rAF, чтобы они применились разом перед кадром, а не вызывали лишние пересчёты раскладки (см. layout thrashing в вопросе про reflow). Важно: тяжёлую синхронную работу в rAF класть нельзя - она затянет кадр и вызовет пропуски (jank).</p><p>requestIdleCallback(callback, { timeout }) - планирует колбэк на моменты, когда основной поток СВОБОДЕН (браузер простаивает между кадрами/задачами).</p><ul><li>Колбэк получает объект IdleDeadline: deadline.timeRemaining() - сколько мс свободного времени осталось в этом простое (работу дробят, проверяя этот бюджет), deadline.didTimeout - сработал ли по таймауту</li><li>Опция timeout - гарантия, что колбэк выполнится не позже указанного времени, даже если простоя так и не случилось (иначе при постоянной занятости он может откладываться неопределённо долго)</li><li>cancelIdleCallback(id) - отменить</li></ul><p>Для чего rIC: НЕкритичная, откладываемая работа, которую нельзя делать в ущерб отзывчивости - отправка аналитики, предзагрузка данных, ленивая обработка, прогрев кешей. Подвох: в rIC НЕ стоит менять DOM/делать визуальные обновления - он выполняется в непредсказуемый момент и может вызвать поздний reflow; для визуального - rAF.</p><p>Разница простыми словами: rAF - «сделать перед очередным кадром» (высокий приоритет, каждый кадр, для анимаций и визуальных правок); rIC - «сделать, когда будет свободное время» (низкий приоритет, может откладываться, для фоновых задач).</p><p>Современное (стоит проверять поддержку): планировщик задач - scheduler.postTask() с приоритетами и scheduler.yield() для «уступки» потока, чтобы дробить длинную работу, не блокируя рендеринг (связь с голоданием микрозадач и дроблением вычислений - в базовом банке). Общая механика кадра и место рендеринга в цикле событий - в вопросе про CRP и в Event Loop.</p>',
    order: 6,
    createdAt: NOW,
    updatedAt: NOW,
  },
  // JavaScript: События
  {
    id: 'q_browser_events_001',
    topicId: 'topic_browser_events',
    question: 'Какие есть способы установить обработчик события? Что принимает addEventListener?',
    answer:
      '<p>Три способа, от устаревших к рекомендуемому:</p><ol><li>HTML-атрибут: &lt;button onclick="handler()"&gt;. Обработчик прямо в разметке. Минусы: смешивает HTML и JS, обработчик - глобальная функция, можно задать только один. Используется редко</li><li>DOM-свойство: elem.onclick = handler. Назначение через свойство объекта. Минус: только ОДИН обработчик на тип события - повторное присваивание elem.onclick ПЕРЕЗАПИШЕТ предыдущий. Снять - elem.onclick = null</li><li>elem.addEventListener(type, handler, options) - современный и основной способ. Позволяет навесить НЕСКОЛЬКО обработчиков на одно событие, поддерживает фазы и опции. Снять - removeEventListener</li></ol><p>Аргументы addEventListener:</p><ul><li>type - имя события строкой, без префикса on: "click", "input", "keydown" (а не "onclick")</li><li>handler - функция-обработчик. Получает объект события (event) первым аргументом. Вместо функции можно передать объект с методом handleEvent(event) - он будет вызван (удобно для классов-обработчиков)</li><li>options - объект настроек (или boolean - см. ниже)</li></ul><p>Свойства объекта options:</p><ul><li>capture (boolean) - на какой ФАЗЕ сработает обработчик: true - на фазе погружения (capturing), false (по умолчанию) - на фазе всплытия (bubbling). Подробно о фазах - в отдельном вопросе</li><li>once (boolean) - если true, обработчик сработает один раз и автоматически удалится</li><li>passive (boolean) - если true, обработчик ОБЕЩАЕТ не вызывать preventDefault(). Это даёт браузеру оптимизацию: он не ждёт завершения обработчика, чтобы решить, отменять ли действие по умолчанию (например прокрутку), а сразу скроллит - интерфейс плавнее. Важная деталь: для событий touchstart/touchmove/wheel на window, document, body браузеры по умолчанию считают обработчик passive (passive: true), и вызов preventDefault в нём будет ПРОИГНОРИРОВАН с предупреждением в консоли. Чтобы реально отменить прокрутку в таком обработчике, нужно явно передать passive: false</li><li>signal (AbortSignal) - современный способ снять обработчик: передать signal от AbortController, и вызов controller.abort() удалит обработчик (удобно снимать сразу группу слушателей). См. AbortController в базовом банке</li></ul><p>Историческая форма третьего аргумента: вместо объекта можно передать boolean - он трактуется как capture. addEventListener("click", fn, true) === addEventListener("click", fn, { capture: true }). Сейчас предпочитают объект options - он нагляднее и поддерживает once/passive/signal.</p><p>Снятие обработчика - частый подвох: removeEventListener требует ТУ ЖЕ ссылку на функцию и совпадающий флаг capture, что были при добавлении. Поэтому анонимную функцию или результат bind снять нельзя - их нужно сохранить в переменную:</p><pre>const handler = () => {...};\nel.addEventListener("click", handler);\nel.removeEventListener("click", handler); // ок - та же ссылка</pre><p>this внутри обработчика: у обычной функции this равен элементу, на котором висит обработчик (то есть event.currentTarget). У стрелочной функции this лексический (из окружения) - элемент через this не получить, берут event.currentTarget. Это частая причина «потери this» в обработчиках (см. вопрос про this в базовом банке).</p><p>Снять обработчик можно тремя способами: removeEventListener с той же ссылкой, опцией once (самоудаление), или signal + AbortController.</p>',
    order: 1,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_browser_events_002',
    topicId: 'topic_browser_events',
    question: 'Что такое всплытие и погружение событий? Какие есть фазы?',
    answer:
      '<p>Когда происходит событие, оно проходит по дереву ТРИ фазы (это единая модель распространения события, propagation):</p><ol><li>Погружение (capturing, перехват) - событие идёт СВЕРХУ ВНИЗ: от window/document через всех предков к целевому элементу. На этой фазе срабатывают только обработчики, добавленные с capture: true</li><li>Целевая фаза (target) - событие достигло самого элемента, на котором произошло (event.target)</li><li>Всплытие (bubbling) - событие идёт СНИЗУ ВВЕРХ: от целевого элемента обратно через всех предков до window. Срабатывают обработчики без capture (по умолчанию)</li></ol><p>Итого порядок: document → ... → target (погружение), затем target → ... → document (всплытие). По умолчанию обработчики вешаются на фазу всплытия - поэтому на практике чаще всего работают именно с ней. Погружение включают опцией capture: true (см. addEventListener).</p><p>Ключевые свойства объекта события для фаз:</p><ul><li>event.target - элемент, НА КОТОРОМ изначально произошло событие (где кликнули). Не меняется по ходу распространения - один и тот же на всех обработчиках</li><li>event.currentTarget - элемент, на котором висит ТЕКУЩИЙ обработчик (равен this в обычной функции). Меняется по мере прохода по дереву. Доступен только во время обработки (после - null)</li><li>event.eventPhase - номер текущей фазы (1 - погружение, 2 - target, 3 - всплытие)</li></ul><p>Разница target и currentTarget - основа делегирования: target говорит «где реально произошло», currentTarget - «кто сейчас обрабатывает». Если кликнули по иконке внутри кнопки, target - иконка, а currentTarget - элемент с обработчиком.</p><p>Остановка распространения:</p><ul><li>event.stopPropagation() - прекращает дальнейший проход события по дереву (выше/ниже обработчики на ДРУГИХ элементах не сработают). Но другие обработчики НА ТОМ ЖЕ элементе ещё выполнятся</li><li>event.stopImmediatePropagation() - прекращает распространение И не даёт выполниться остальным обработчикам на ТЕКУЩЕМ элементе тоже</li><li>Важно не путать со stopPropagation и preventDefault: остановка распространения не отменяет действие по умолчанию, а preventDefault не останавливает распространение (см. отдельный вопрос про preventDefault)</li><li>Останавливать распространение без необходимости - плохая практика: ломает делегирование и сторонний код, слушающий событие выше</li></ul><p>Какие события НЕ всплывают (важный нюанс): focus, blur, load, unload, mouseenter, mouseleave и др. Для них всплытие не работает, поэтому делегирование через всплытие невозможно. У большинства есть всплывающие аналоги: focusin/focusout (вместо focus/blur), mouseover/mouseout (вместо mouseenter/mouseleave). Для не-всплывающих событий используют либо аналог, либо обработчик на фазе погружения (capture: true).</p><p>Гик-нюанс - граница Shadow DOM. События из теневого дерева на пути наружу проходят РЕТАРГЕТИНГ (retargeting): event.target подменяется на host-элемент компонента, чтобы не раскрывать внутреннее устройство. Полный путь распространения (с учётом теневых границ) можно получить методом event.composedPath(). Всплывёт ли событие за пределы Shadow DOM, зависит от его флага composed. Подробнее - в подтеме про веб-компоненты.</p>',
    order: 2,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_browser_events_003',
    topicId: 'topic_browser_events',
    question:
      'Как отменить действие браузера по умолчанию (preventDefault)? Чем отличается от остановки распространения?',
    answer:
      '<p>У многих событий есть ДЕЙСТВИЕ ПО УМОЛЧАНИЮ (default action) - встроенная реакция браузера: переход по ссылке при клике, отправка формы по submit, выделение текста, показ контекстного меню по правому клику, прокрутка по колесу/тачу, установка галочки у чекбокса. Отменить это действие - вызвать event.preventDefault() в обработчике.</p><pre>link.addEventListener("click", (e) => {\n  e.preventDefault(); // переход по ссылке не произойдёт\n});</pre><p>Ключевое: preventDefault отменяет ТОЛЬКО действие браузера, но НЕ останавливает распространение события по дереву - обработчики на других элементах (выше/ниже) всё равно сработают. Это важно не путать:</p><ul><li>preventDefault() - «не делай встроенное действие» (ссылка/submit/скролл), но событие продолжает идти по дереву</li><li>stopPropagation() / stopImmediatePropagation() - «прекрати проход события по дереву», но действие по умолчанию при этом НЕ отменяется</li><li>Это ОРТОГОНАЛЬНЫЕ операции: можно вызвать одну, другую, обе или ни одной. Частая ошибка - вызвать stopPropagation, ожидая отмены действия (или наоборот)</li></ul><p>Сопутствующие свойства и нюансы:</p><ul><li>event.defaultPrevented - boolean, был ли уже вызван preventDefault. Позволяет проверить, не отменил ли действие другой обработчик</li><li>event.cancelable - можно ли вообще отменить это событие. У НЕотменяемых событий (cancelable: false) вызов preventDefault молча игнорируется (например scroll - уже произошедший факт, его не отменить; отменяют wheel/touchmove ДО прокрутки)</li><li>passive-обработчик: если обработчик помечен passive: true (а для touchmove/wheel/touchstart на корневых узлах это часто по умолчанию), preventDefault будет ПРОИГНОРИРОВАН с предупреждением в консоли. Чтобы реально отменить прокрутку, нужен passive: false (см. вопрос про addEventListener)</li></ul><p>Легаси-способ - return false. В обработчике, заданном через DOM-свойство (elem.onclick = ...) или HTML-атрибут (onclick="..."), возврат false отменяет действие по умолчанию (в HTML-атрибуте это работает из-за особой обёртки). Но в addEventListener возврат значения НИ НА ЧТО не влияет - там только preventDefault. Поэтому return false считают устаревшим и неоднозначным приёмом, в современном коде используют явный preventDefault.</p><p>Типичные применения: своя обработка submit формы без перезагрузки (валидация/отправка через fetch), кастомная навигация по ссылкам в SPA, своё контекстное меню (отмена contextmenu), управление прокруткой и drag-and-drop. Отмена действия по умолчанию у пользовательских событий зависит от их флага cancelable - см. вопрос про CustomEvent.</p>',
    order: 3,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_browser_events_004',
    topicId: 'topic_browser_events',
    question: 'Что такое делегирование событий? В чём плюсы и подвохи?',
    answer:
      '<p>Делегирование событий (event delegation) - приём, при котором ОДИН обработчик вешается на общий контейнер-предок, а не на каждый дочерний элемент. Работает благодаря всплытию: событие от любого потомка поднимается до контейнера, и в обработчике по event.target определяют, где именно оно произошло.</p><p>Ключевой механизм - связка target и closest. Клик может прийтись не точно на нужный элемент, а на что-то вложенное в него (иконку внутри кнопки, span внутри строки). Поэтому надёжнее искать целевой элемент через target.closest(selector), а не сравнивать target напрямую:</p><pre>list.addEventListener("click", (e) => {\n  const item = e.target.closest(".list-item");\n  if (!item || !list.contains(item)) return; // клик мимо или вне контейнера\n  const id = item.dataset.id;               // данные берём из data-атрибута\n  // обработать конкретный элемент\n});</pre><p>Почему closest, а не matches: matches проверяет только сам target (если кликнули по вложенному узлу - не сработает), а closest поднимается вверх до нужного предка. См. вопрос про matches/closest/contains.</p><p>Плюсы делегирования:</p><ul><li>Динамические элементы: обработчик автоматически работает для элементов, добавленных ПОЗЖЕ - не нужно вешать слушатель на каждый новый элемент. Огромный плюс для списков, которые меняются</li><li>Память и производительность: один слушатель вместо сотен. Меньше объектов-обработчиков, меньше работы при навешивании</li><li>Меньше кода и проще управление: не нужно навешивать/снимать обработчики на каждый элемент</li></ul><p>Подвохи:</p><ul><li>Не-всплывающие события (focus, blur, mouseenter, mouseleave) делегировать через всплытие НЕЛЬЗЯ. Используют всплывающие аналоги (focusin/focusout, mouseover/mouseout) или обработчик на фазе погружения (capture: true) - см. вопрос про фазы</li><li>Граница контейнера: closest может найти подходящий элемент ВЫШЕ контейнера. Поэтому проверяют, что найденный элемент действительно внутри (container.contains(item))</li><li>Сложнее точечно гасить событие: если внутренний элемент вызовет stopPropagation, делегированный обработчик на контейнере не сработает - делегирование и остановка распространения конфликтуют</li><li>Чуть выше задержка для очень частых событий и глубокого дерева (событие проходит весь путь всплытия), но на практике это почти всегда несущественно</li></ul><p>Где применяют: списки и таблицы с действиями (кнопки в строках), меню, тулбары, любые наборы однотипных элементов, динамически меняющийся контент. Данные конкретного элемента обычно хранят в data-атрибутах и читают через dataset (см. вопрос про атрибуты).</p>',
    order: 4,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_browser_events_005',
    topicId: 'topic_browser_events',
    question: 'Что такое пользовательские события (CustomEvent)? Как их генерировать?',
    answer:
      '<p>Кроме встроенных событий (click, input...) можно создавать и запускать СВОИ события. Это инструмент развязки: один модуль/компонент «объявляет» о чём-то событием, другие подписываются - без прямых вызовов между ними.</p><p>Создание - конструктор CustomEvent(type, options):</p><ul><li>type - имя события строкой (любое, например "user:login", "cart-updated")</li><li>options - объект:<ul><li>detail - произвольные данные, передаваемые подписчикам (объект, значение - что угодно). Читаются в обработчике как event.detail</li><li>bubbles - всплывает ли событие (по умолчанию FALSE)</li><li>cancelable - можно ли отменить через preventDefault (по умолчанию FALSE)</li><li>composed - выходит ли событие за границу Shadow DOM наружу (по умолчанию FALSE)</li></ul></li></ul><p>Запуск - elem.dispatchEvent(event): событие «выстреливается» на элементе и проходит фазы как обычное.</p><pre>const event = new CustomEvent("cart-updated", {\n  detail: { count: 3 },\n  bubbles: true,\n});\nelement.dispatchEvent(event);\n\n// где-то выше по дереву:\ndocument.addEventListener("cart-updated", (e) => {\n  console.log(e.detail.count); // 3\n});</pre><p>Важные нюансы:</p><ul><li>По умолчанию bubbles: false - частый подвох: событие НЕ всплывает, и обработчик на родителе не сработает. Чтобы делегировать/слушать выше по дереву, нужно явно bubbles: true</li><li>dispatchEvent СИНХРОННЫЙ: в отличие от «настоящих» пользовательских событий (клик и т.п.), которые ставятся в очередь и обрабатываются через Event Loop, dispatchEvent вызывает все обработчики ПРЯМО СЕЙЧАС - выполнение кода после dispatchEvent продолжится только когда все обработчики отработают (см. Event Loop в базовом банке)</li><li>Возвращаемое значение dispatchEvent - boolean: false, если событие было отменяемым (cancelable: true) и какой-то обработчик вызвал preventDefault. Так инициатор узнаёт, что действие «заблокировали» подписчики</li><li>composed: true нужен, чтобы событие из веб-компонента (Shadow DOM) дошло до внешнего документа - иначе оно остановится на границе тени (см. подтему про веб-компоненты)</li></ul><p>Старая форма - new Event(type, { bubbles, cancelable }): то же, но БЕЗ поля detail (нельзя передать данные). Для своих событий с данными используют CustomEvent. Существуют и специализированные конструкторы встроенных типов (MouseEvent, KeyboardEvent) - для программной эмуляции «настоящих» событий с их свойствами.</p><p>Где применяют: общение между слабосвязанными частями приложения (паб/саб через DOM), API веб-компонентов (компонент сообщает наружу о действиях через свои события), кастомные виджеты. Для встроенных действий по умолчанию у пользовательских событий их нет - cancelable/preventDefault имеют смысл, только если инициатор сам проверяет результат dispatchEvent и решает, выполнять ли действие.</p>',
    order: 5,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_browser_events_006',
    topicId: 'topic_browser_events',
    question:
      'Какие есть основные виды событий элементов (фокус, ввод, клавиатура, мышь, указатель, буфер)?',
    answer:
      '<p>События элементов удобно разложить по группам.</p><p>Фокус (focus / blur):</p><ul><li>focus - элемент получил фокус; blur - потерял. Главный нюанс: они НЕ всплывают, поэтому делегировать их через всплытие нельзя. Всплывающие аналоги - focusin / focusout (см. вопрос про фазы)</li><li>Фокусируемы по умолчанию интерактивные элементы (input, button, a[href], select). Любому другому можно дать фокус атрибутом tabindex: tabindex="0" - элемент встаёт в естественный порядок табуляции, tabindex="-1" - фокусируется только программно (elem.focus()), но не клавишей Tab</li><li>document.activeElement - текущий сфокусированный элемент. Методы elem.focus() / elem.blur() - программно</li></ul><p>Изменение значения (change / input):</p><ul><li>input - срабатывает на КАЖДОЕ изменение значения поля (каждый символ, вставка). Идеально для живой валидации/поиска</li><li>change - срабатывает по ЗАВЕРШЕНИИ изменения: для текстовых полей - при потере фокуса (если значение изменилось), для checkbox/radio/select - сразу при выборе</li></ul><p>Клавиатура (keydown / keyup):</p><ul><li>keydown - клавиша нажата (срабатывает повторно при удержании, с флагом event.repeat === true); keyup - отпущена</li><li>event.key - логический СИМВОЛ/значение клавиши с учётом раскладки и регистра ("a", "A", "Enter", "ArrowUp"). event.code - ФИЗИЧЕСКАЯ клавиша независимо от раскладки и регистра ("KeyA", "Enter"). Для горячих клавиш по позиции (WASD) берут code, для ввода символа - key</li><li>Модификаторы: event.ctrlKey, shiftKey, altKey, metaKey (Cmd/Win)</li><li>Устаревшее keypress (и event.keyCode/which) - не использовать; заменены keydown + event.key</li></ul><p>Мышь:</p><ul><li>click (левый клик/Enter на фокусе), dblclick, contextmenu (правый клик - часто отменяют для своего меню), mousedown / mouseup, mousemove</li><li>Наведение: mouseover / mouseout - ВСПЛЫВАЮТ (срабатывают и при переходе на дочерние элементы); mouseenter / mouseleave - НЕ всплывают и не реагируют на переход к детям (удобнее для «навёл на блок целиком»)</li><li>Кнопки: event.button (какая кнопка нажата), event.buttons (битовая маска зажатых). Координаты: clientX/Y (относительно окна), pageX/Y (относительно документа), offsetX/Y (относительно элемента) - см. вопрос про координаты</li><li>event.relatedTarget - «второй» элемент перехода (откуда/куда ушёл курсор) - для mouseover/mouseout и focus-событий</li></ul><p>Указатель (Pointer Events) - современная ЕДИНАЯ модель ввода, покрывающая мышь, тач и стилус одним API: pointerdown / pointermove / pointerup / pointercancel и др. У события есть pointerType ("mouse" / "touch" / "pen"), давление pressure, размеры касания. Рекомендуются вместо раздельных mouse- и touch-событий для универсального ввода. Отдельно есть wheel (прокрутка колесом) - его и touch-события часто делают passive для плавности (см. вопрос про addEventListener).</p><p>Буфер обмена (cut / copy / paste): срабатывают при вырезании/копировании/вставке. Объект события - ClipboardEvent, доступ к данным - через event.clipboardData (прочитать вставляемое, подменить копируемое). preventDefault отменяет стандартное действие (например запретить вставку или вставить своё).</p><p>Полезный гик-нюанс - event.isTrusted: true, если событие сгенерировано реальным действием пользователя, и false, если программно через dispatchEvent. Помогает отличать «настоящие» взаимодействия от синтетических.</p><p>Отмена действий по умолчанию (переход по ссылке, контекстное меню, прокрутка) - через preventDefault (см. отдельный вопрос). События формы и её отправки (submit, а также работа с полями и FormData) - в вопросе про формы.</p>',
    order: 6,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_browser_events_007',
    topicId: 'topic_browser_events',
    question: 'Как работать с формами и их элементами? Что такое submit и FormData?',
    answer:
      '<p>Доступ к формам и полям:</p><ul><li>document.forms[name/index] - все формы документа (живая коллекция, индексируется и по имени/id)</li><li>form.elements[name/index] - элементы формы; сокращённо form[name/index]. Индексируется по атрибуту name и id</li><li>Подвох с радиокнопками: несколько input одного name возвращаются как коллекция (RadioNodeList), но у неё есть удобное свойство .value - значение выбранного переключателя</li><li>У элемента есть обратная ссылка element.form - на родительскую форму, откуда бы он ни был получен</li></ul><p>Чтение значений по типам элементов:</p><ul><li>Текстовые: input.value, textarea.value</li><li>Флажки/переключатели: input.checked (boolean), а input.value - это их «значение» при отправке, не состояние</li><li>select: select.value (значение выбранного option), select.selectedIndex, коллекция select.options; для множественного выбора select.multiple - перебирают options и берут выбранные</li><li>Файлы: input.files - FileList выбранных файлов</li><li>Важно: value ВСЕГДА строка - даже у input type="number" (для числа есть input.valueAsNumber, для даты valueAsDate). Текущее значение читают через свойство .value, а не атрибут (см. вопрос про атрибуты и свойства)</li></ul><p>Событие submit - отправка формы. Срабатывает на самой форме при отправке. Два способа отправить форму пользователем:</p><ul><li>Нажать кнопку &lt;button&gt;/&lt;input type="submit"&gt; (или type="image")</li><li>Нажать Enter, находясь в текстовом поле формы</li></ul><p>Главное применение submit - перехватить отправку для валидации и/или ручной обработки (отправка через fetch без перезагрузки страницы):</p><pre>form.addEventListener("submit", (e) => {\n  e.preventDefault();              // отменяем стандартную отправку с перезагрузкой\n  const data = new FormData(form);\n  fetch("/api", { method: "POST", body: data });\n});</pre><p>Нюансы submit:</p><ul><li>event.submitter - какая именно кнопка инициировала отправку (полезно, когда в форме несколько submit-кнопок)</li><li>Метод form.submit() (программная отправка) НЕ генерирует событие submit и НЕ запускает встроенную валидацию - частый подвох. Чтобы вызвать стандартный путь с событием и валидацией, используют form.requestSubmit()</li><li>Парное событие reset (на сброс формы) - можно перехватить аналогично</li></ul><p>FormData - объект, представляющий набор полей формы (пар имя-значение), удобный для отправки. Создание: new FormData(form) - автоматически считывает поля формы.</p><ul><li>Берутся только поля, у которых есть атрибут name; disabled-поля пропускаются. Можно создать и пустой new FormData() и заполнить вручную</li><li>new FormData(form, submitter) - учитывает значение конкретной кнопки-отправителя</li></ul><p>Методы FormData:</p><ul><li>append(name, value) - добавить поле (можно несколько с одним именем); append(name, blob, fileName) - добавить файл</li><li>set(name, value) - то же, но ЗАМЕНЯЕТ все поля с этим именем (append добавляет ещё одно)</li><li>get(name) / getAll(name) - значение / все значения по имени</li><li>has(name) - есть ли поле; delete(name) - удалить</li><li>Итерируется: for (const [name, value] of formData) и entries()/keys()/values()</li></ul><p>Отправка FormData через fetch - важный нюанс Content-Type:</p><ul><li>Передаётся в body: fetch(url, { method: "POST", body: formData })</li><li>Браузер САМ выставит заголовок Content-Type: multipart/form-data с правильным boundary. Поэтому Content-Type руками задавать НЕЛЬЗЯ - иначе пропадёт boundary и сервер не разберёт данные. Это классическая ошибка</li><li>multipart нужен для файлов. Если файлов нет и нужен обычный urlencoded-формат, берут URLSearchParams (он сериализуется как application/x-www-form-urlencoded) - см. подтему про сеть</li></ul><p>Встроенная валидация (Constraint Validation API):</p><ul><li>Атрибуты-ограничения: required, pattern, min/max, minlength/maxlength, type="email"/"url"/"number"</li><li>form.checkValidity() - валидна ли форма (boolean, без UI); form.reportValidity() - проверить и ПОКАЗАТЬ браузерные подсказки. У элемента есть element.validity (объект с флагами вроде valueMissing, patternMismatch) и element.validationMessage</li><li>element.setCustomValidity(msg) - задать своё сообщение об ошибке (пустая строка - снять); поле считается невалидным, пока сообщение не сброшено</li><li>Атрибут формы novalidate отключает встроенную валидацию. CSS-псевдоклассы :valid / :invalid / :required стилизуют состояние полей</li></ul><p>Связанные события полей (input, change, focus/blur) разобраны в вопросе про виды событий; отмена отправки - через preventDefault (см. соответствующий вопрос).</p>',
    order: 7,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_browser_events_008',
    topicId: 'topic_browser_events',
    question: 'Как работает нативный Drag-and-Drop API?',
    answer:
      '<p>HTML Drag-and-Drop API - встроенный механизм перетаскивания элементов и файлов с помощью набора событий и объекта-переносчика данных dataTransfer.</p><p>Чтобы элемент можно было тащить, ему ставят атрибут draggable="true". По умолчанию перетаскиваемы только некоторые элементы: текст (выделенный), картинки и ссылки - для остального нужен draggable.</p><p>События делятся на две стороны.</p><p>На перетаскиваемом элементе (источнике):</p><ul><li>dragstart - начало перетаскивания. Здесь кладут данные в dataTransfer (что именно тащим)</li><li>drag - срабатывает постоянно во время перетаскивания (как mousemove)</li><li>dragend - конец перетаскивания (отпустили или отменили) - сюда ставят очистку/возврат стилей</li></ul><p>На цели-приёмнике (зоне сброса):</p><ul><li>dragenter - перетаскиваемый элемент вошёл в зону</li><li>dragover - срабатывает постоянно, пока курсор над зоной</li><li>dragleave - покинул зону</li><li>drop - элемент сброшен в зону. Здесь читают данные из dataTransfer</li></ul><p>КЛЮЧЕВОЙ подвох: по умолчанию НИ ОДИН элемент не является зоной сброса, и браузер блокирует drop. Чтобы разрешить сброс, нужно в обработчике dragover ВЫЗВАТЬ event.preventDefault() (часто и в dragenter). Без этого событие drop просто не сработает - самая частая ошибка при работе с DnD:</p><pre>dropZone.addEventListener("dragover", (e) => {\n  e.preventDefault();          // разрешаем сброс - без этого drop не будет\n});\ndropZone.addEventListener("drop", (e) => {\n  e.preventDefault();          // отменяем действие браузера по умолчанию\n  const text = e.dataTransfer.getData("text/plain");\n});</pre><p>Объект dataTransfer - переносчик данных между источником и целью:</p><ul><li>setData(type, value) / getData(type) - записать/прочитать данные по MIME-типу ("text/plain", "text/uri-list", свои типы). types - список доступных типов</li><li>dataTransfer.files - FileList файлов, когда пользователь тащит файлы ИЗ ОС в браузер (загрузка перетаскиванием). Это работает даже без draggable-источника на странице - перехватывают drop на зоне</li><li>effectAllowed и dropEffect - вид операции (copy / move / link) и курсор</li><li>setDragImage(element, x, y) - задать кастомное изображение-превью при перетаскивании</li><li>Ограничение безопасности: реально ПРОЧИТАТЬ данные (getData, files) можно только в обработчике drop. На промежуточных фазах (dragover и т.п.) доступны лишь types, но не значения - защита от слежки за буфером перетаскивания</li></ul><p>Практические нюансы: при drop файлов их обрабатывают как обычные File (читают через FileReader или отправляют как FormData/в fetch - см. формы и сеть); не забывают preventDefault на уровне документа, иначе браузер по умолчанию ОТКРОЕТ брошенный файл вместо обработки.</p><p>Когда нативный DnD не подходит: он капризен в стилизации и плохо работает на сенсорных экранах (touch). Для сортировки списков, перетаскивания внутри SPA и мобильной поддержки чаще берут Pointer Events (единая модель мышь+тач, см. вопрос про виды событий) или специализированные библиотеки (dnd-kit, SortableJS). Нативный API хорош в первую очередь для приёма файлов перетаскиванием из ОС.</p>',
    order: 8,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_browser_events_009',
    topicId: 'topic_browser_events',
    question: 'Как работать с файлами в браузере (File, Blob, FileReader, createObjectURL)?',
    answer:
      '<p>Работа с файлами строится на нескольких связанных объектах: Blob (сырые данные), File (файл как частный случай Blob), FileReader (чтение в память) и URL.createObjectURL (ссылка на данные). Это основа загрузки файлов на сервер, предпросмотра картинок и скачивания сгенерированных файлов.</p><p>Blob (Binary Large Object) - неизменяемый (immutable) «кусок» сырых бинарных данных с типом:</p><ul><li>Создание: new Blob([parts], { type }) - parts это массив строк, ArrayBuffer, типизированных массивов или других Blob; type - MIME-тип ("text/plain", "image/png")</li><li>Свойства: size (размер в байтах), type</li><li>blob.slice(start, end, type) - вырезать кусок (не мутирует, возвращает новый Blob)</li><li>Современные async-методы чтения (промисы): blob.text(), blob.arrayBuffer(), blob.stream() (ReadableStream для потоковой обработки)</li></ul><p>File - НАСЛЕДНИК Blob, представляющий файл: добавляет name (имя файла) и lastModified (время изменения). Раз File - это Blob, к нему применимо всё, что работает с Blob. Откуда берут File:</p><ul><li>Поле формы: input[type="file"] - его свойство .files это FileList (псевдомассив объектов File). Атрибуты accept (фильтр типов) и multiple (несколько файлов)</li><li>Drag-and-drop: event.dataTransfer.files при перетаскивании файлов из ОС (см. вопрос про Drag-and-Drop)</li><li>Буфер обмена, Clipboard API, File System Access API</li></ul><p>FileReader - СОБЫТИЙНЫЙ (асинхронный, на колбэках) API чтения File/Blob в память:</p><ul><li>Методы запуска чтения: readAsText(blob) (как строку), readAsDataURL(blob) (как data: URL в base64 - для вставки в src), readAsArrayBuffer(blob) (как бинарный ArrayBuffer)</li><li>События: onload (готово, результат в reader.result), onerror, onprogress (прогресс чтения), onloadend (любой исход), onabort</li><li>Это старый событийный интерфейс - наследие. Сейчас для простых случаев удобнее промис-методы самого Blob: await file.text(), await file.arrayBuffer(). FileReader всё ещё нужен ради onprogress и readAsDataURL</li></ul><pre>const file = input.files[0];\nconst reader = new FileReader();\nreader.onload = () => {\n  img.src = reader.result; // data: URL для предпросмотра\n};\nreader.readAsDataURL(file);</pre><p>URL.createObjectURL(blob) - создаёт временный blob:-URL, который ССЫЛАЕТСЯ на объект в памяти. Его можно подставить в img.src, video.src, href ссылки:</p><ul><li>Преимущество перед data: URL (base64): не кодирует данные в строку, ссылается напрямую - быстрее и экономнее по памяти для крупных файлов и предпросмотра</li><li>КРИТИЧНО: такой URL держит объект в памяти, пока его явно не освободят. После использования вызывают URL.revokeObjectURL(url) - иначе УТЕЧКА ПАМЯТИ (объект не соберётся сборщиком мусора, пока живёт URL)</li></ul><p>Типовой приём - скачивание сгенерированного файла из JS: создать Blob → получить URL через createObjectURL → создать ссылку с атрибутом download → программно кликнуть → освободить URL:</p><pre>const blob = new Blob([csv], { type: "text/csv" });\nconst url = URL.createObjectURL(blob);\nconst a = document.createElement("a");\na.href = url;\na.download = "data.csv";\na.click();\nURL.revokeObjectURL(url); // обязательно освободить</pre><p>Загрузка файла НА сервер: input.files / dataTransfer.files → собрать в FormData (append файла) → отправить через fetch (Content-Type для multipart НЕ ставить вручную - см. вопрос про формы и FormData). Прогресс ВЫГРУЗКИ (сколько отправлено) показывают через XMLHttpRequest.upload.onprogress - fetch исторически этого не умел (см. вопрос про XHR).</p><p>Связь с остальным: Blob и ArrayBuffer всплывают в fetch (response.blob() / arrayBuffer() - см. fetch), в IndexedDB (умеет хранить Blob - см. подтему про хранение), в structuredClone и postMessage. Низкоуровневая работа с бинарными данными (ArrayBuffer, TypedArray, DataView) разобрана в базовом банке (коллекции). Получение файлов из формы и из drag-and-drop - в соответствующих вопросах подтемы про события.</p>',
    order: 9,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_browser_events_010',
    topicId: 'topic_browser_events',
    question:
      'Что такое асинхронный Clipboard API (navigator.clipboard)? Чем отличается от событий copy/paste?',
    answer:
      '<p>Есть ДВА разных способа работать с буфером обмена, и их важно не путать:</p><ul><li>События буфера (cut / copy / paste) - ПЕРЕХВАТ действий пользователя. Срабатывают, когда пользователь сам копирует/вставляет, дают доступ к event.clipboardData и позволяют подменить копируемое или прочитать вставляемое (разобраны в вопросе про виды событий)</li><li>Асинхронный Clipboard API (navigator.clipboard) - ПРОГРАММНОЕ чтение/запись буфера из кода, без события и без действия пользователя в моменте. Это современный промис-ориентированный API</li></ul><p>Методы navigator.clipboard (все возвращают промис):</p><ul><li>writeText(text) - записать строку в буфер. Самый частый сценарий - кнопка «Скопировать»</li><li>readText() - прочитать текст из буфера</li><li>write(items) / read() - работа с ПРОИЗВОЛЬНЫМИ данными (картинки, HTML, несколько форматов сразу) через объекты ClipboardItem. Например read() может вернуть вставленный скриншот (image/png), а write - положить и текст, и картинку одновременно</li></ul><pre>// кнопка «копировать»\nawait navigator.clipboard.writeText("текст");\n\n// вставка картинки из буфера\nconst items = await navigator.clipboard.read();\nfor (const item of items) {\n  if (item.types.includes("image/png")) {\n    const blob = await item.getType("image/png");\n    // показать/загрузить blob (см. вопрос про File/Blob)\n  }\n}</pre><p>Ограничения безопасности (ключевое отличие от событий) - буфер обмена приватен, поэтому доступ строго ограничен:</p><ul><li>Только в безопасном контексте (HTTPS или localhost)</li><li>Часто требуется «жест пользователя» (transient activation) - вызывать в обработчике клика, а не «просто так». Иначе NotAllowedError</li><li>Документ/вкладка должны быть В ФОКУСЕ - чтение/запись из неактивной вкладки отклоняется</li><li>readText/read управляются разрешениями (Permissions API, clipboard-read) - браузер может спросить пользователя; запись (clipboard-write) обычно разрешена свободнее. Поведение различается между браузерами (Firefox чтение ограничивает сильнее)</li></ul><p>Замена легаси: раньше копирование делали через document.execCommand("copy") в связке с временным выделением - это УСТАРЕВШИЙ, синхронный и капризный способ. navigator.clipboard.writeText - современная замена.</p><p>Итог: события cut/copy/paste - чтобы вмешаться в действие пользователя; navigator.clipboard - чтобы прочитать/записать буфер программно (с поправкой на разрешения и фокус). Работа с полученными из буфера Blob/файлами - в вопросе про File/Blob/FileReader.</p>',
    order: 10,
    createdAt: NOW,
    updatedAt: NOW,
  },
  // JavaScript: Сеть и HTTP
  {
    id: 'q_browser_network_001',
    topicId: 'topic_browser_network',
    question: 'Что такое HTTP? Методы, коды состояния, заголовки, кеширование',
    answer:
      '<p>HTTP (HyperText Transfer Protocol) - текстовый протокол прикладного уровня для обмена данными между клиентом и сервером по схеме «запрос-ответ». Работает поверх TCP (а в HTTP/3 - поверх QUIC на UDP). Браузер шлёт HTTP-запрос, сервер возвращает HTTP-ответ.</p><p>Ключевое свойство - HTTP не хранит состояние (stateless): каждый запрос самодостаточен, сервер по умолчанию не помнит предыдущие. Состояние (сессия, авторизация) добавляют поверх - через cookie, токены в заголовках и т.п.</p><p>Структура запроса:</p><ul><li>Стартовая строка: метод + путь (URL) + версия HTTP</li><li>Заголовки (headers) - метаданные (тип тела, авторизация, куки и др.)</li><li>Пустая строка, затем необязательное тело (body) - данные запроса</li></ul><p>Структура ответа:</p><ul><li>Статусная строка: версия + код состояния + пояснение</li><li>Заголовки</li><li>Тело ответа</li></ul><p>Методы HTTP и их семантика. Важно знать два свойства методов:</p><ul><li>Безопасный (safe) - не меняет данные на сервере (только чтение)</li><li>Идемпотентный (idempotent) - повторный одинаковый запрос даёт тот же результат на сервере (можно безопасно повторить при сбое сети)</li></ul><p>Методы:</p><ul><li>GET - получить данные. Safe и идемпотентный. Тела обычно нет</li><li>POST - создать/отправить данные. НЕ safe и НЕ идемпотентный (повтор создаст дубль - отсюда «повторная отправка формы»)</li><li>PUT - полностью заменить ресурс. Идемпотентный (повтор приводит к тому же состоянию)</li><li>PATCH - частично обновить. НЕ гарантированно идемпотентный</li><li>DELETE - удалить. Идемпотентный</li><li>HEAD - как GET, но только заголовки без тела (проверить наличие/размер)</li><li>OPTIONS - узнать допустимые методы; используется в CORS-предзапросе (см. вопрос про CORS)</li></ul><p>Коды состояния по классам (первая цифра - класс):</p><ul><li>1xx - информационные (100 Continue, 101 Switching Protocols - например апгрейд до WebSocket)</li><li>2xx - успех: 200 OK, 201 Created (создан ресурс), 204 No Content (успех без тела)</li><li>3xx - перенаправления: 301 Moved Permanently (постоянный редирект), 302/307 (временный), 304 Not Modified (ресурс не изменился - см. кеширование)</li><li>4xx - ошибка КЛИЕНТА: 400 Bad Request, 401 Unauthorized (не аутентифицирован), 403 Forbidden (нет прав), 404 Not Found, 405 Method Not Allowed, 409 Conflict, 422 Unprocessable Entity (ошибка валидации), 429 Too Many Requests (лимит запросов)</li><li>5xx - ошибка СЕРВЕРА: 500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable, 504 Gateway Timeout</li></ul><p>Тонкость 401 vs 403: 401 - «кто ты?» (не аутентифицирован, нужен вход), 403 - «я знаю кто ты, но тебе нельзя» (нет прав).</p><p>Важные заголовки:</p><ul><li>Content-Type - тип тела (application/json, multipart/form-data, text/html). Accept - какие типы клиент готов принять</li><li>Authorization - данные авторизации (например Bearer-токен). Cookie / Set-Cookie - куки</li><li>Content-Length, Content-Encoding (gzip/br - сжатие)</li><li>CORS-заголовки (Origin, Access-Control-Allow-Origin и др.) - см. отдельный вопрос про CORS</li><li>Кеширующие: Cache-Control, ETag, Last-Modified</li></ul><p>Кеширование HTTP - механизм не запрашивать заново то, что не изменилось:</p><ul><li>Cache-Control - главный заголовок политики: max-age=3600 (сколько секунд ответ свежий), no-cache (можно кешировать, но перед использованием проверять актуальность), no-store (не кешировать вообще), private/public</li><li>Условные запросы (валидация): сервер присылает ETag (хеш-отпечаток версии ресурса) или Last-Modified. При следующем запросе браузер шлёт If-None-Match (с ETag) или If-Modified-Since. Если ресурс не изменился - сервер отвечает 304 Not Modified БЕЗ тела, и браузер берёт ресурс из кеша. Это экономит трафик</li><li>Различают свежесть (freshness, по max-age - ответ берётся из кеша без запроса) и валидацию (по ETag - запрос идёт, но тело не передаётся при 304)</li></ul><p>Версии протокола (влияют на производительность):</p><ul><li>HTTP/1.1 - одно соединение обрабатывает запросы по очереди (есть head-of-line blocking); браузер открывает несколько соединений на домен</li><li>HTTP/2 - мультиплексирование: много запросов параллельно в одном соединении, сжатие заголовков, server push (устарел)</li><li>HTTP/3 - поверх QUIC (UDP): быстрее устанавливает соединение, устойчивее к потере пакетов</li></ul><p>Как клиент работает с HTTP из браузера (fetch, XMLHttpRequest), ограничения кросс-доменных запросов (CORS), разбор URL - в соседних вопросах подтемы. Полный путь запроса с DNS/TCP/TLS - в вопросе про жизненный цикл навигации.</p>',
    order: 1,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_browser_network_002',
    topicId: 'topic_browser_network',
    question: 'Что такое fetch()? Как обрабатывать ответ и ошибки?',
    answer:
      '<p>fetch() - современный метод для сетевых запросов, возвращающий промис. Принимает URL и необязательный объект настроек. Заменил громоздкий XMLHttpRequest промис-ориентированным API.</p><p>Получение ответа идёт в ДВА этапа:</p><ol><li>Промис fetch разрешается объектом Response, как только пришли ЗАГОЛОВКИ ответа (тело ещё не загружено). Уже доступны response.ok, status, headers</li><li>Тело читают отдельным вызовом метода (тоже промис), выбирая формат:<ul><li>json() - распарсить как JSON</li><li>text() - как строку</li><li>blob() - как Blob (картинки, файлы)</li><li>arrayBuffer() - как бинарный ArrayBuffer</li><li>formData() - как FormData</li></ul></li></ol><pre>const response = await fetch(url);\nif (!response.ok) throw new Error(`HTTP ${response.status}`);\nconst data = await response.json();</pre><p>КРИТИЧНЫЙ нюанс (главный подвох fetch): промис fetch НЕ отклоняется на HTTP-ошибках. Коды 404, 500 и любые 4xx/5xx считаются УСПЕШНЫМ выполнением запроса - response.ok будет false, но reject НЕ произойдёт. Промис отклоняется (catch) только при СЕТЕВОЙ ошибке: нет соединения, DNS, обрыв, блокировка CORS, отмена. Поэтому статус всегда проверяют вручную:</p><ul><li>response.ok - true, если статус в диапазоне 200-299</li><li>response.status / statusText - код и пояснение</li><li>Без этой проверки await response.json() на странице ошибки «успешно» распарсит тело ошибки или упадёт уже на парсинге - и причина будет неочевидна</li></ul><p>Объект Response (полезные поля): ok, status, statusText, headers (объект Headers - response.headers.get("content-type")), url, redirected (был ли редирект), type.</p><p>Тело можно прочитать только ОДИН раз: после json()/text() поток вычитан, повторный вызов бросит ошибку. response.bodyUsed показывает, прочитано ли тело. Если нужно прочитать дважды (например и распарсить, и залогировать) - делают копию response.clone() ДО чтения.</p><p>Объект настроек (второй аргумент):</p><ul><li>method - HTTP-метод (по умолчанию GET)</li><li>headers - заголовки (объект или экземпляр Headers)</li><li>body - тело запроса (для POST/PUT/PATCH)</li><li>credentials - отправлять ли куки/авторизацию: "omit" (никогда), "same-origin" (по умолчанию - только свой домен), "include" (в том числе на кросс-доменные - требует настроек CORS, см. вопрос про CORS)</li><li>mode - "cors" / "same-origin" / "no-cors" (режим кросс-доменности)</li><li>cache - политика кеширования ("no-store", "reload", "force-cache" и др.)</li><li>redirect - "follow" / "error" / "manual"</li><li>signal - AbortSignal для отмены (см. ниже)</li><li>keepalive - запрос переживёт выгрузку страницы (для аналитики при уходе - см. sendBeacon)</li></ul><p>Отправка данных - три частых формата тела:</p><ul><li>JSON: body: JSON.stringify(obj) и ВРУЧНУЮ задать headers: { "Content-Type": "application/json" }</li><li>FormData: body: formData - Content-Type НЕ ставить, браузер сам выставит multipart/form-data с boundary (см. вопрос про формы)</li><li>URLSearchParams: body: new URLSearchParams({...}) - отправит как application/x-www-form-urlencoded</li></ul><p>Отмена и таймаут (fetch сам по себе не имеет таймаута):</p><ul><li>Отмена через AbortController: передать controller.signal в signal, вызвать controller.abort() - промис отклонится ошибкой с name "AbortError" (см. AbortController в базовом банке)</li><li>Таймаут одной строкой: signal: AbortSignal.timeout(5000) - автоматически прервёт запрос через 5 секунд</li></ul><p>Потоковое чтение - response.body это ReadableStream. Можно читать тело по частям (через reader.read() или for await...of), не дожидаясь всего ответа - так реализуют индикатор прогресса загрузки или обработку больших/потоковых ответов на лету.</p><p>Сравнение с XMLHttpRequest, кросс-доменные ограничения (CORS) и низкоуровневые сетевые события - в соседних вопросах. HTTP-методы, коды и заголовки - в вопросе про HTTP.</p>',
    order: 2,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_browser_network_003',
    topicId: 'topic_browser_network',
    question: 'Что такое XMLHttpRequest? Чем отличается от fetch?',
    answer:
      '<p>XMLHttpRequest (XHR) - встроенный объект для HTTP-запросов из JS без перезагрузки страницы. Это ПРЕДШЕСТВЕННИК fetch: исторически именно XHR сделал возможным AJAX. В новом коде используют fetch, но XHR важно знать - он встречается в легаси, в сторонних библиотеках и решает пару задач, где долго был единственным вариантом (прогресс выгрузки).</p><p>Базовый цикл работы (событийный, на колбэках, без промисов):</p><ol><li>Создать: const xhr = new XMLHttpRequest()</li><li>Настроить: xhr.open(method, url, async, user, password) - этот вызов НЕ шлёт запрос, только конфигурирует</li><li>Опционально задать заголовки (xhr.setRequestHeader), responseType, timeout</li><li>Отправить: xhr.send(body)</li><li>Слушать события: onload (успех), onerror (сеть), onprogress и т.д.</li></ol><pre>const xhr = new XMLHttpRequest();\nxhr.open("GET", "/api/data");\nxhr.responseType = "json";\nxhr.onload = () => {\n  if (xhr.status >= 200 && xhr.status < 300) {\n    console.log(xhr.response); // уже распарсенный JSON\n  }\n};\nxhr.onerror = () => { /* сетевая ошибка */ };\nxhr.send();</pre><p>Состояния readyState (xhr.readyState) - 5 значений по ходу запроса:</p><ul><li>0 UNSENT - объект создан, open ещё не вызван</li><li>1 OPENED - вызван open</li><li>2 HEADERS_RECEIVED - пришли заголовки ответа</li><li>3 LOADING - тело загружается</li><li>4 DONE - запрос полностью завершён</li><li>Смену состояний ловит onreadystatechange (исторический способ; сейчас удобнее onload/onerror)</li></ul><p>События XHR:</p><ul><li>load - запрос завершён (получен ответ, даже если статус 404/500 - как и в fetch, это «успех транспорта»; статус проверяют через xhr.status)</li><li>error - сетевая ошибка; abort - запрос отменён; timeout - истёк таймаут; loadend - завершение любым исходом</li><li>progress - прогресс ЗАГРУЗКИ (скачивания) с полями loaded/total</li></ul><p>Главная фишка XHR - прогресс ВЫГРУЗКИ. У объекта есть отдельный xhr.upload со своими событиями (xhr.upload.onprogress), позволяющий отслеживать, сколько данных ОТПРАВЛЕНО на сервер - то есть рисовать прогресс-бар загрузки файла. Именно этого fetch долго не умел вовсе, поэтому загрузку файлов с прогрессом часто до сих пор делают на XHR.</p><p>Полезные свойства:</p><ul><li>xhr.status / statusText - код ответа; xhr.response - тело (тип зависит от responseType); xhr.responseText - тело как строка</li><li>xhr.responseType - желаемый формат ответа: "json" (автопарсинг), "blob", "arraybuffer", "text", "document". Удобно: не нужно парсить вручную</li><li>xhr.timeout + ontimeout - встроенный таймаут (которого у fetch «из коробки» нет)</li><li>xhr.withCredentials = true - отправлять куки/авторизацию в кросс-доменных запросах (аналог credentials: "include" у fetch, см. CORS)</li><li>xhr.abort() - отменить запрос</li></ul><p>Синхронный режим - xhr.open(method, url, false): send блокирует основной поток до получения ответа. Считается УСТАРЕВШИМ и вредным (замораживает интерфейс), браузеры показывают предупреждение. Реальные запросы делают асинхронно.</p><p>fetch против XHR - честное сравнение:</p><ul><li>fetch лучше: промисы (чистый async/await вместо колбэков и readyState), композиция, потоковое чтение тела через ReadableStream, интеграция с AbortController, аккуратный API. Это выбор по умолчанию</li><li>XHR исторически выигрывал в одном: прогресс ВЫГРУЗКИ (upload.onprogress) и встроенный timeout. Сейчас прогресс выгрузки появляется и в fetch (через стримы), но менее удобно</li><li>Общее: оба НЕ считают HTTP-ошибку (4xx/5xx) провалом запроса - статус проверяют вручную; оба подчиняются CORS</li></ul><p>Вывод: новый код - на fetch; XHR держат в голове для легаси, простого прогресса загрузки файлов и поддержки очень старых окружений. HTTP-методы и коды - в вопросе про HTTP, отмена через AbortController - в базовом банке.</p>',
    order: 3,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_browser_network_004',
    topicId: 'topic_browser_network',
    question: 'Что такое CORS? Как работают простые запросы и предзапрос (preflight)?',
    answer:
      '<p>Чтобы понять CORS, нужно начать с того, что он ослабляет - с Same-Origin Policy (SOP, политика одного источника). По умолчанию браузер запрещает скрипту читать ответы запросов на ДРУГОЙ источник (origin) - это базовая защита от кражи данных между сайтами.</p><p>Origin (источник) - это комбинация СХЕМА + ХОСТ + ПОРТ. Они должны совпадать ПОЛНОСТЬЮ. Например для https://site.com:443 другим источником будет http://site.com (другая схема), https://api.site.com (другой хост-поддомен), https://site.com:8080 (другой порт).</p><p>CORS (Cross-Origin Resource Sharing) - механизм, которым СЕРВЕР разрешает определённым чужим источникам доступ к своим ресурсам, через специальные заголовки. То есть CORS не запрещает, а наоборот - контролируемо РАЗРЕШАЕТ кросс-доменный доступ.</p><p>Критично понимать: CORS - защита на стороне БРАУЗЕРА, а не сервера. Запрос обычно реально УХОДИT на сервер и там ВЫПОЛНЯЕТСЯ, но если в ответе нет разрешающих заголовков, браузер блокирует доступ скрипта к ответу и кидает ошибку в консоль. Поэтому: CORS не защищает сервер от не-браузерных клиентов (curl, серверы игнорируют CORS) и не заменяет защиту от CSRF.</p><p>Два сценария - простой запрос и предзапрос.</p><p>Простой (simple) запрос - не требует предварительной проверки. Чтобы запрос считался простым, должны выполняться ВСЕ условия:</p><ul><li>Метод - только GET, POST или HEAD</li><li>Заголовки - только из «безопасного» списка (Accept, Accept-Language, Content-Language, Content-Type с ограничениями)</li><li>Content-Type - только text/plain, multipart/form-data или application/x-www-form-urlencoded</li></ul><p>Как идёт простой запрос: браузер добавляет заголовок Origin с источником страницы. Сервер, если согласен, возвращает Access-Control-Allow-Origin с разрешённым источником (или *). Если он совпадает с Origin (или стоит *) - браузер отдаёт ответ скрипту, иначе блокирует.</p><p>Важный практический вывод: отправка JSON (Content-Type: application/json) НЕ является простым запросом - она триггерит предзапрос. Это частый сюрприз при работе с API.</p><p>Предзапрос (preflight) - для «непростых» запросов (другой метод вроде PUT/DELETE/PATCH, кастомные заголовки, Content-Type: application/json). Браузер СНАЧАЛА автоматически шлёт пробный запрос методом OPTIONS:</p><ul><li>Origin - источник</li><li>Access-Control-Request-Method - какой метод будет в основном запросе</li><li>Access-Control-Request-Headers - какие нестандартные заголовки будут</li></ul><p>Сервер должен ответить (статус 2xx) разрешающими заголовками:</p><ul><li>Access-Control-Allow-Origin - разрешённый источник</li><li>Access-Control-Allow-Methods - разрешённые методы</li><li>Access-Control-Allow-Headers - разрешённые заголовки</li><li>Access-Control-Max-Age - на сколько секунд закешировать результат предзапроса, чтобы не слать OPTIONS перед каждым запросом</li></ul><p>Если предзапрос одобрен - браузер шлёт основной запрос (как простой). Если нет - основной запрос вообще не отправляется.</p><p>Запросы с учётными данными (credentials) - отдельная и строгая ветка. Если нужно слать куки/авторизацию в кросс-доменном запросе (fetch с credentials: "include" или XHR withCredentials = true):</p><ul><li>Сервер обязан вернуть Access-Control-Allow-Credentials: true</li><li>И при этом Access-Control-Allow-Origin НЕ может быть звёздочкой * - должен быть КОНКРЕТНЫЙ источник. Сочетание * + credentials запрещено - классический подвох, из-за которого «куки не отправляются»</li><li>Куки дополнительно подчиняются своему атрибуту SameSite (см. вопрос про cookie)</li></ul><p>Что видно в ответе: по умолчанию скрипту доступны лишь некоторые «безопасные» заголовки ответа. Чтобы открыть доступ к своим заголовкам, сервер указывает их в Access-Control-Expose-Headers.</p><p>Режим no-cors (fetch mode: "no-cors") - позволяет отправить кросс-доменный запрос без CORS, но ответ становится «непрозрачным» (opaque): прочитать его из JS нельзя (статус 0, тело недоступно). Годится разве что для fire-and-forget или кеширования в Service Worker.</p><p>Связь с остальным: HTTP-методы, коды и заголовки - в вопросе про HTTP; настройки fetch (mode, credentials) - в вопросе про fetch; withCredentials - в вопросе про XHR.</p>',
    order: 4,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_browser_network_005',
    topicId: 'topic_browser_network',
    question: 'Что такое объект URL и URLSearchParams? Как кодируются URL?',
    answer:
      '<p>Встроенный класс URL - удобный интерфейс для разбора и сборки адресов вместо ручной работы со строками. Объект URL можно передавать прямо в fetch вместо строки.</p><pre>const url = new URL("https://site.com:8080/path?id=5#section");</pre><p>Компоненты URL (свойства объекта, все кроме origin доступны и для ЧТЕНИЯ, и для ЗАПИСИ):</p><ul><li>href - полный адрес целиком</li><li>origin - схема + хост + порт (только чтение), тот самый origin из CORS</li><li>protocol - схема с двоеточием ("https:")</li><li>host - хост С портом ("site.com:8080"); hostname - хост БЕЗ порта ("site.com"); port - порт ("8080")</li><li>pathname - путь ("/path")</li><li>search - строка параметров с "?" ("?id=5")</li><li>hash - якорь с "#" ("#section")</li><li>username / password - для адресов с авторизацией в URL</li></ul><p>Конструктор и относительные адреса:</p><ul><li>new URL(invalid) БРОСАЕТ TypeError на невалидном адресе (можно проверять валидность через try/catch или URL.canParse)</li><li>Второй аргумент base разрешает ОТНОСИТЕЛЬНЫЙ URL относительно базового: new URL("/api/users", "https://site.com") даст "https://site.com/api/users". Часто пишут new URL(path, location.origin) - удобно собирать абсолютные адреса</li></ul><p>Работа с параметрами - url.searchParams (объект URLSearchParams):</p><ul><li>get(name) - первое значение; getAll(name) - ВСЕ значения (параметры могут повторяться: ?tag=a&tag=b)</li><li>set(name, value) - задать (заменив все одноимённые); append(name, value) - добавить ещё одно</li><li>has(name), delete(name), sort()</li><li>Итерируется: for (const [key, value] of url.searchParams)</li><li>toString() возвращает корректно ЗАКОДИРОВАННУЮ строку параметров - менять параметры через searchParams безопаснее, чем клеить строку руками</li></ul><p>URLSearchParams можно использовать и отдельно от URL: создать из строки ("a=1&b=2"), из объекта ({a:1,b:2}) или массива пар, и передать как тело fetch - тогда запрос уйдёт в формате application/x-www-form-urlencoded (см. вопрос про fetch).</p><p>Кодирование URL. В адресах разрешён ограниченный набор символов (стандарт RFC 3986). Запрещённые (пробелы, кириллица, спецсимволы) должны быть закодированы процентами (%XX, percent-encoding). Объекты URL и URLSearchParams делают это АВТОМАТИЧЕСКИ, поэтому ручное кодирование нужно реже - но понимать его обязательно.</p><p>Две функции ручного кодирования различаются ОХВАТОМ символов:</p><ul><li>encodeURIComponent(str) - кодирует АГРЕССИВНО, включая структурные символы URL: & = ? / # пробел и т.д. Применяют к ОТДЕЛЬНОМУ компоненту - значению параметра, части пути, хешу. Именно его берут, вставляя пользовательское значение в параметр: ?q=${encodeURIComponent(text)}</li><li>encodeURI(str) - кодирует ЩАДЯЩЕ: сохраняет символы, образующие СТРУКТУРУ адреса (: / ? & = #), кодирует только явно недопустимые (пробелы, кириллицу). Применяют к URL ЦЕЛИКОМ, когда нужно закодировать готовый адрес, не сломав его разделители</li><li>Обратные операции - decodeURIComponent и decodeURI</li></ul><p>Правило выбора: значение отдельного параметра/части пути - encodeURIComponent; целый собранный URL - encodeURI. Перепутать опасно: encodeURI не закодирует & и = внутри значения параметра, и оно «развалит» строку запроса.</p><p>Гик-нюансы кодирования:</p><ul><li>Пробел: encodeURIComponent кодирует его как %20, а URLSearchParams (форм-формат) - как + . При ручной сборке это источник рассинхрона; полагаться лучше на searchParams</li><li>encodeURIComponent НЕ кодирует символы ! \' ( ) * (по стандарту они «зарезервированы», но в некоторых системах их всё же нужно экранировать вручную)</li></ul><p>Связь: origin и кросс-доменность - в вопросе про CORS; location (адрес текущей страницы) и навигация - в вопросе про window/BOM.</p>',
    order: 5,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_browser_network_006',
    topicId: 'topic_browser_network',
    question: 'Что такое WebSocket?',
    answer:
      '<p>WebSocket - протокол ПОЛНОДУПЛЕКСНОЙ (full-duplex) связи между браузером и сервером через одно постоянное соединение. В отличие от модели HTTP «запрос-ответ», здесь обе стороны могут слать данные в ЛЮБОЙ момент, без новых запросов и без разрыва соединения. Применяют для real-time: чаты, уведомления, онлайн-игры, совместное редактирование, биржевые котировки.</p><p>Как устанавливается соединение - через апгрейд HTTP (важная деталь):</p><ul><li>Соединение начинается как ОБЫЧНЫЙ HTTP-запрос с заголовком Upgrade: websocket. Сервер, если согласен, отвечает статусом 101 Switching Protocols, и дальше по тому же TCP-соединению идёт уже протокол WebSocket, а не HTTP</li><li>Схемы: ws:// (незашифрованный) и wss:// (поверх TLS - «HTTPS для веб-сокетов»). В проде всегда wss</li></ul><pre>const socket = new WebSocket("wss://example.com/chat");</pre><p>После создания объекта слушают 4 события:</p><ul><li>open - соединение установлено (можно слать)</li><li>message - получены данные (event.data - строка или бинарные данные)</li><li>error - ошибка</li><li>close - соединение закрыто (event.code и event.reason - почему)</li></ul><p>Отправка - socket.send(data). Можно слать строки и БИНАРНЫЕ данные (Blob, ArrayBuffer). Для входящих бинарных данных формат задаётся через socket.binaryType ("blob" или "arraybuffer").</p><p>Состояние - socket.readyState: CONNECTING (0), OPEN (1), CLOSING (2), CLOSED (3). Закрытие - socket.close(code, reason).</p><p>Важные нюансы:</p><ul><li>Данные передаются «фреймами» (frames) - это не HTTP-сообщения, накладные расходы на каждое сообщение минимальны (нет повторной отправки заголовков, как в поллинге)</li><li>Нет АВТОПЕРЕПОДКЛЮЧЕНИЯ: если соединение оборвалось, восстанавливать нужно вручную (обычно с экспоненциальной задержкой). Это отличие от SSE, который переподключается сам</li><li>Для контроля «живости» соединения применяют ping/pong (heartbeat) - периодические служебные сообщения, чтобы вовремя обнаружить мёртвое соединение</li><li>WebSocket НЕ подчиняется CORS так же, как fetch: кросс-доменное соединение откроется, но сервер сам проверяет заголовок Origin и решает, принимать ли его - защита остаётся на сервере</li><li>При рукопожатии можно согласовать subprotocol (вторым аргументом конструктора) - прикладной протокол поверх WebSocket</li></ul><p>Сравнение с SSE и поллингом, а также когда что выбирать - в вопросе про Server-Sent Events.</p>',
    order: 6,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_browser_network_007',
    topicId: 'topic_browser_network',
    question: 'Что такое Server-Sent Events (EventSource)? Чем отличается от WebSocket?',
    answer:
      '<p>Server-Sent Events (SSE) - способ получать поток событий ОТ СЕРВЕРА через постоянное соединение, поверх ОБЫЧНОГО HTTP. Реализуется встроенным классом EventSource. Главное отличие от WebSocket - однонаправленность: данные шлёт только сервер, клиент лишь слушает.</p><pre>const es = new EventSource("/events");\nes.onmessage = (e) => console.log(e.data); // событие по умолчанию\nes.addEventListener("price", (e) => { /* именованное событие */ });</pre><p>Особенности SSE:</p><ul><li>Однонаправленность: сервер → клиент. Чтобы что-то отправить серверу, нужен отдельный обычный запрос (fetch). Для двусторонней связи берут WebSocket</li><li>Только ТЕКСТ (UTF-8) - бинарные данные передавать нельзя (в отличие от WebSocket)</li><li>Поверх обычного HTTP - не нужен особый протокол, проще проходит через прокси и файрволы, работает с обычной HTTP-инфраструктурой</li></ul><p>События: open (соединение открыто), message (пришли данные без имени - в e.data), error (ошибка/обрыв). Сервер может слать ИМЕНОВАННЫЕ события - тогда их слушают через addEventListener("имя", ...), а не onmessage.</p><p>Формат потока (text/event-stream) - сервер шлёт строки:</p><ul><li>data: - полезные данные (могут быть в несколько строк)</li><li>event: - имя события (для именованных)</li><li>id: - идентификатор события (для возобновления)</li><li>retry: - сколько мс ждать перед переподключением</li></ul><p>Ключевое преимущество - встроенное АВТОПЕРЕПОДКЛЮЧЕНИЕ. Если соединение оборвалось, EventSource сам переподключается (без кода с нашей стороны). Более того, браузер запоминает id последнего события и при переподключении шлёт его серверу в заголовке Last-Event-ID - сервер может продолжить ровно с места обрыва, не теряя события. У WebSocket переподключение пишут вручную.</p><p>Прочее: SSE подчиняется CORS; для кук в кросс-доменном соединении - new EventSource(url, { withCredentials: true }). Гик-нюанс: в HTTP/1.1 у браузера лимит ~6 соединений на домен, и долгоживущие SSE их «занимают» - при многих вкладках можно упереться в лимит; в HTTP/2 (мультиплексирование) проблема снимается.</p><p>Сравнение трёх подходов к real-time:</p><ul><li>Polling (опрос) - клиент с интервалом дёргает сервер обычными запросами. Просто, но неэффективно: лишний трафик и задержки. Long-polling - запрос «висит», пока у сервера не появятся данные, затем повторяется; компромисс без WebSocket</li><li>SSE - сервер сам шлёт поток, однонаправленно, текст, авто-reconnect, простая HTTP-инфраструктура. Идеально для лент новостей, уведомлений, прогресса, обновления котировок «только на чтение»</li><li>WebSocket - полный дуплекс, бинарные данные, минимум накладных расходов. Нужен, когда клиент тоже активно шлёт (чаты, игры, совместное редактирование)</li></ul><p>Выбор: нужен только поток от сервера - SSE (проще и переподключается сам); нужна двусторонняя/бинарная/низколатентная связь - WebSocket; ничего из этого нет и обновления редкие - достаточно обычных запросов (polling). Детали WebSocket - в соседнем вопросе.</p>',
    order: 7,
    createdAt: NOW,
    updatedAt: NOW,
  },
  // JavaScript: Хранение данных
  {
    id: 'q_browser_storage_001',
    topicId: 'topic_browser_storage',
    question: 'Что такое cookie? Какие есть атрибуты и настройки безопасности?',
    answer:
      '<p>Cookie - небольшие строковые данные (пары имя=значение), которые хранятся в браузере и ПРИВЯЗАНЫ к домену. Ключевая особенность, отличающая их от других хранилищ: cookie - часть HTTP-протокола и АВТОМАТИЧЕСКИ отправляются на сервер с каждым запросом к этому домену (в заголовке Cookie). Поэтому их главное назначение - идентификация сессии и авторизация.</p><p>Как устанавливаются:</p><ul><li>Сервером - заголовком ответа Set-Cookie</li><li>Из JS - через document.cookie (своеобразный «строковый» интерфейс: чтение возвращает все доступные куки строкой, запись document.cookie = "name=value; ..." добавляет/меняет ОДНУ куку, не затирая остальные)</li></ul><p>Основные свойства:</p><ul><li>Размер ограничен (~4 КБ на куку) и их количество на домен тоже - не для больших данных. Каждый лишний байт кук уходит в КАЖДЫЙ запрос, раздувая трафик</li><li>Время жизни: без Expires/Max-Age - сессионная кука (живёт до закрытия вкладки/браузера); с Expires (дата) или Max-Age (секунды) - постоянная (persistent), удаляется по истечении</li><li>Domain - для какого домена кука (по умолчанию текущий хост; можно расширить на поддомены). Path - для какого пути</li></ul><p>Атрибуты безопасности (критично для собеседований):</p><ul><li>HttpOnly - кука НЕдоступна из JavaScript (document.cookie её не видит). Защищает токены сессии от кражи при XSS. Поэтому серверные сессионные куки всегда ставят HttpOnly</li><li>Secure - кука передаётся только по HTTPS</li><li>SameSite - защита от CSRF, управляет отправкой куки при КРОСС-САЙТОВЫХ запросах:<ul><li>Strict - кука НЕ отправляется ни при каких переходах с других сайтов (даже по ссылке)</li><li>Lax (современное значение по умолчанию) - отправляется только при «безопасных» верхнеуровневых переходах (переход по ссылке методом GET), но не при кросс-сайтовых POST/запросах из тегов</li><li>None - отправляется всегда (кросс-сайтово), но ОБЯЗАТЕЛЬНО вместе с Secure - иначе браузер куку отклонит</li></ul></li><li>Префиксы имени __Secure- и __Host- - требуют определённых атрибутов (Secure, а __Host- ещё и привязку к хосту без Domain), усиливая защиту от подмены</li></ul><p>Cookie против web storage (важное различие):</p><ul><li>Cookie уходят на сервер с каждым запросом - localStorage/sessionStorage НЕТ (они чисто клиентские)</li><li>Cookie крошечные (~4 КБ) - web storage вместительнее (~5-10 МБ)</li><li>Для авторизации/сессии - cookie (особенно HttpOnly). Для клиентских данных, не нужных серверу, - web storage (см. отдельный вопрос)</li></ul><p>Связь: Set-Cookie и заголовки - в вопросе про HTTP; отправка кук в кросс-доменных запросах (credentials, и почему Allow-Origin не может быть * с credentials) - в вопросе про CORS; защита от кражи через XSS - в вопросе про innerHTML.</p>',
    order: 1,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_browser_storage_002',
    topicId: 'topic_browser_storage',
    question: 'Что такое localStorage и sessionStorage? Чем отличаются?',
    answer:
      '<p>localStorage и sessionStorage - объекты веб-хранилища (Web Storage) для хранения пар ключ/значение прямо в браузере, на стороне клиента. В отличие от cookie, эти данные НЕ отправляются на сервер - они нужны только клиентскому коду.</p><p>У них ОДИНАКОВЫЙ API:</p><ul><li>setItem(key, value) - сохранить; getItem(key) - получить (null, если нет)</li><li>removeItem(key) - удалить; clear() - очистить всё</li><li>key(index) - ключ по индексу; length - количество записей</li><li>Можно обращаться как к свойствам объекта (localStorage.token), но методы надёжнее (не конфликтуют с именами вроде length)</li></ul><p>Различие - в ОБЛАСТИ ЖИЗНИ (это часто формулируют неточно):</p><ul><li>localStorage - постоянный: данные переживают и перезагрузку, и перезапуск браузера, хранятся «вечно» (пока не удалят). Общий для ВСЕХ вкладок и окон одного origin</li><li>sessionStorage - в пределах ОДНОЙ вкладки: данные тоже переживают перезагрузку (reload) этой вкладки, НО удаляются при её ЗАКРЫТИИ. Другая вкладка того же сайта sessionStorage не видит - у каждой вкладки он свой</li><li>То есть оба переживают reload - разница не в этом, а в том, что localStorage постоянный и общий, а sessionStorage привязан к жизни конкретной вкладки и изолирован по вкладкам</li></ul><p>Привязка к origin: хранилище изолировано по origin (схема + хост + порт) - разные сайты и даже поддомены не видят данные друг друга (как и в SOP/CORS).</p><p>Только строки: и ключи, и значения - СТРОКИ. Объекты сохраняют через JSON: localStorage.setItem("user", JSON.stringify(obj)) и JSON.parse(getItem("user")). Подвохи: getItem несуществующего ключа вернёт null (JSON.parse(null) === null - не упадёт, но и не объект); попытка распарсить «не-JSON» бросит ошибку - парсинг оборачивают в try/catch.</p><p>Событие storage - механизм синхронизации между вкладками (ключевой нюанс):</p><ul><li>При изменении localStorage (setItem/removeItem/clear) браузер шлёт событие storage во ВСЕ ДРУГИЕ вкладки/окна того же origin - но НЕ в ту вкладку, которая внесла изменение</li><li>Это позволяет синхронизировать состояние между вкладками (например разлогинить пользователя во всех вкладках сразу). Слушают на window: window.addEventListener("storage", e => ...), у события есть key, oldValue, newValue, storageArea</li><li>sessionStorage событие storage по сути не транслирует между вкладками (он и так изолирован)</li></ul><p>Прочие особенности и ограничения:</p><ul><li>Объём - порядка 5-10 МБ на origin (намного больше cookie). Превышение бросает QuotaExceededError</li><li>API СИНХРОННЫЙ: операции блокируют основной поток. Для больших объёмов и сложных данных это минус - тогда берут IndexedDB (асинхронная)</li><li>В приватном режиме/при отключённом хранилище доступ может бросать исключение - надёжный код оборачивает работу в try/catch</li></ul><p>Когда что: localStorage - клиентские настройки, кеш, флаги (надолго). sessionStorage - временные данные одной вкладки (черновик формы, шаг визарда). Авторизация и то, что нужно серверу, - cookie (см. отдельный вопрос). Большие/структурированные данные и офлайн - IndexedDB.</p>',
    order: 2,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_browser_storage_003',
    topicId: 'topic_browser_storage',
    question: 'Что такое IndexedDB? Что такое Cache API?',
    answer:
      '<p>IndexedDB - встроенная в браузер база данных для хранения больших объёмов СТРУКТУРИРОВАННЫХ данных на стороне клиента. Это самое мощное клиентское хранилище, его берут, когда localStorage уже мал или неудобен.</p><p>Чем принципиально отличается от localStorage:</p><ul><li>АСИНХРОННАЯ (операции через события/промисы) - не блокирует основной поток, в отличие от синхронного localStorage. Подходит для тяжёлых данных</li><li>Большой объём - десятки и сотни МБ и больше (зависит от браузера и места на диске), против ~5-10 МБ у Web Storage</li><li>Хранит не только строки, а структурированные значения: объекты, массивы, даты, а также Blob и File (бинарные данные) - через алгоритм структурного клонирования. JSON-сериализация вручную не нужна</li><li>Это полноценная БД с индексами и запросами по ключам/диапазонам, а не плоский словарь</li></ul><p>Ключевые понятия:</p><ul><li>Database - база (своя на origin), у неё есть ВЕРСИЯ</li><li>Object store - хранилище объектов (аналог таблицы/коллекции). Объекты лежат по ключу (keyPath - ключ из поля объекта, либо autoIncrement - автогенерируемый)</li><li>Index - индекс по полю для поиска не только по основному ключу</li><li>Transaction - все операции идут в транзакциях (атомарность: либо всё, либо ничего)</li><li>Cursor - курсор для перебора множества записей</li></ul><p>Версионирование: при открытии указывают версию; при её повышении срабатывает событие upgradeneeded, где создают/меняют структуру (object stores, индексы) - это механизм миграций схемы.</p><p>Нюанс на практике: нативный API многословный и событийный (open → onupgradeneeded → транзакция → запрос → onsuccess), поэтому почти всегда используют обёртки - idb (тонкая промис-обёртка) или Dexie.js (более высокоуровневая). Это стандартный выбор в реальных проектах.</p><p>Где применяют: офлайн-приложения и PWA (хранить данные локально без сети), кеш больших наборов данных, хранение файлов/медиа, сложное клиентское состояние.</p><p>Cache API - отдельное хранилище, ориентированное на СЕТЕВЫЕ ответы: хранит пары Request → Response. Это основа офлайна и Service Worker:</p><ul><li>Открывают именованный кеш (caches.open("v1")), кладут ответы (cache.put / cache.add / addAll), достают по запросу (cache.match)</li><li>Главный сценарий - Service Worker перехватывает fetch-запросы и отвечает из Cache API, когда сети нет (офлайн) или для ускорения (cache-first/network-first стратегии). Так делают PWA, работающие без интернета</li><li>Отличие от IndexedDB: Cache API заточен под пары запрос-ответ (HTTP-ресурсы: HTML, CSS, картинки, API-ответы), а IndexedDB - под произвольные структурированные данные приложения. Их часто используют вместе</li></ul><p>Сводно по хранилищам: cookie - крошечные, уходят на сервер, для сессии; localStorage/sessionStorage - простые синхронные пары строк; IndexedDB - большая асинхронная БД для структурированных данных; Cache API - кеш сетевых ответов для офлайна. Сравнение cookie и Web Storage - в соответствующих вопросах, общий обзор хранилищ (data persistence) - в вопросе про архитектуру браузера.</p>',
    order: 3,
    createdAt: NOW,
    updatedAt: NOW,
  },
  // JavaScript: Браузерные API и компоненты
  {
    id: 'q_browser_api_001',
    topicId: 'topic_browser_api',
    question:
      'Какие есть наблюдатели (MutationObserver, IntersectionObserver, ResizeObserver, PerformanceObserver)?',
    answer:
      '<p>Наблюдатели (Observers) - семейство браузерных API, реализующих один паттерн: «подпишись на изменения и получай уведомления пачкой в колбэке», вместо постоянного ОПРОСА в цикле или таймере. Все они асинхронные, не блокируют основной поток, и колбэк получает МАССИВ записей об изменениях. Это эффективнее и точнее ручных проверок.</p><p>MutationObserver - следит за изменениями DOM-дерева:</p><ul><li>Создание: const observer = new MutationObserver(callback)</li><li>Запуск: observer.observe(node, config), где config - что отслеживать: childList (добавление/удаление детей), attributes (изменение атрибутов), characterData (изменение текста), subtree (следить и за всем поддеревом, а не только за самим узлом), плюс опции attributeOldValue/characterDataOldValue</li><li>observer.disconnect() - прекратить наблюдение; takeRecords() - забрать накопленные, но ещё не доставленные записи</li><li>Колбэк получает массив MutationRecord (что именно изменилось). Изменения доставляются батчем через очередь микрозадач (см. Event Loop)</li><li>Применения: реакция на изменения чужого/стороннего DOM, отслеживание вставки нужных узлов, интеграция со сторонними виджетами. Подвох: без subtree следит только за прямыми детьми указанного узла</li></ul><p>IntersectionObserver - следит за ПЕРЕСЕЧЕНИЕМ элемента с областью видимости (viewport или заданным контейнером-root):</p><ul><li>Сообщает, когда элемент входит/выходит из видимой области и насколько он виден (intersectionRatio)</li><li>Опции: root (относительно чего смотреть, по умолчанию viewport), rootMargin (расширить/сжать область - например начать подгрузку заранее), threshold (пороги видимости: 0, 0.5, 1)</li><li>Применения: ленивая загрузка изображений (lazy-load), бесконечная прокрутка (подгрузка при приближении к концу), аналитика показов, запуск анимаций при появлении</li><li>Ключевое преимущество: НЕ форсирует reflow. Раньше видимость проверяли через getBoundingClientRect в обработчике scroll - это синхронно пересчитывало раскладку на каждый пиксель прокрутки (layout thrashing). IntersectionObserver делает это эффективно и асинхронно (см. вопросы про reflow и координаты)</li></ul><p>ResizeObserver - следит за изменением РАЗМЕРОВ конкретного ЭЛЕМЕНТА (а не окна):</p><ul><li>Колбэк получает новые размеры (entry.contentRect / borderBoxSize)</li><li>Важно отличать от события resize на window - то про размер ОКНА. ResizeObserver реагирует на изменение размеров самого элемента, по любой причине (контент, соседи, layout)</li><li>Применения: адаптивные компоненты, которые подстраиваются под свою ширину независимо от окна (контейнерная адаптивность), перерисовка canvas/графиков при изменении размера контейнера. Тоже без ручного опроса и лишних reflow</li></ul><p>PerformanceObserver - подписка на записи производительности:</p><ul><li>Получает метрики: Navigation/Resource Timing (тайминги загрузки документа и ресурсов), Paint Timing (FCP), а также LCP, CLS, long tasks (длинные задачи, блокирующие поток)</li><li>Это «правильный» способ собирать Core Web Vitals в проде (часто через библиотеку web-vitals) - см. вопрос про измерение производительности</li></ul><p>Общее для всех: колбэк вызывается асинхронно с массивом записей; обязательно вызывать disconnect() (или unobserve для конкретного элемента), когда наблюдение больше не нужно - иначе утечки памяти (особенно при удалении наблюдаемых элементов в SPA). Наблюдатели - предпочтительная замена опросу в setInterval и синхронным проверкам в обработчиках scroll/resize.</p>',
    order: 1,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_browser_api_002',
    topicId: 'topic_browser_api',
    question: 'Что такое Range и Selection?',
    answer:
      '<p>Range и Selection - низкоуровневые API для работы с ДИАПАЗОНАМИ в документе и пользовательским ВЫДЕЛЕНИЕМ текста. Нужны для редакторов, подсветки, кастомной работы с выделением.</p><p>Range (диапазон) - произвольный участок DOM между двумя ГРАНИЦАМИ. Каждая граница задаётся парой (узел, смещение). Важно: диапазон может пересекать границы элементов - например начинаться в середине одного абзаца и заканчиваться в середине другого, охватывая узлы между ними.</p><ul><li>Создание: const range = document.createRange() (или берут из выделения)</li><li>Установка границ: setStart(node, offset) / setEnd(node, offset); удобные selectNode(node) (охватить узел целиком) и selectNodeContents(node) (содержимое узла); setStartBefore/setStartAfter и т.п.</li><li>Смещение (offset): для текстового узла - номер символа; для элемента - индекс дочернего узла</li></ul><p>Операции с содержимым диапазона:</p><ul><li>cloneContents() - КОПИЯ содержимого как DocumentFragment (исходник не трогается)</li><li>extractContents() - вырезать содержимое и вернуть как фрагмент (удаляется из дерева)</li><li>deleteContents() - просто удалить содержимое диапазона</li><li>surroundContents(node) - обернуть содержимое в указанный элемент (например выделить span-ом)</li><li>insertNode(node) - вставить узел в начало диапазона</li></ul><p>Selection (выделение) - то, что пользователь выделил мышью/клавиатурой (или что задано программно). Получают через window.getSelection().</p><ul><li>Связь с Range: выделение состоит из диапазонов. selection.getRangeAt(i) - получить Range выделения, rangeCount - сколько их (обычно один)</li><li>Управление: removeAllRanges() (снять выделение), addRange(range) (выделить заданный диапазон), collapse() (схлопнуть)</li><li>Свойства: anchorNode/anchorOffset (где выделение НАЧАЛОСЬ) и focusNode/focusOffset (где ЗАКОНЧИЛОСЬ - там, где курсор); направление выделения может быть любым</li><li>selection.toString() - выделенный текст строкой</li></ul><p>Типичный приём «обернуть выделенное» (например подсветка): взять range = getSelection().getRangeAt(0) и применить surroundContents или extractContents + обработка. Так делают подсветку, форматирование в редакторах, кастомные тултипы по выделению. Событие выделения - selectionchange на document.</p><p>Гик-приём - Range.createContextualFragment(htmlString). Парсит HTML-строку в DocumentFragment в КОНТЕКСТЕ узла диапазона и возвращает готовый фрагмент узлов:</p><ul><li>В отличие от insertAdjacentHTML (который сразу вставляет) и innerHTML (который заменяет содержимое), createContextualFragment ВОЗВРАЩАЕТ фрагмент - его можно доработать перед вставкой, вставить в несколько мест, переиспользовать</li><li>Это быстрый способ превратить строку HTML в узлы. Несёт тот же XSS-риск, что innerHTML (парсит сырой HTML) - для пользовательских данных нужна санитизация</li><li>Связь с DocumentFragment и методами вставки - в соответствующих вопросах про работу с DOM</li></ul><p>На практике Range/Selection встречаются нечасто и в основном в редакторах и текстовых инструментах, но это «правильный» низкоуровневый API для точной работы с диапазонами и выделением. Большинство задач вставки/изменения DOM решается более высокоуровневыми методами (см. работу с DOM).</p>',
    order: 2,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_browser_api_003',
    topicId: 'topic_browser_api',
    question: 'Что такое Intl?',
    answer:
      '<p>Intl - встроенный объект для интернационализации (i18n): форматирование чисел, дат, валют, относительного времени, сравнение и сортировка строк с учётом ЯЗЫКА и КУЛЬТУРЫ. Решает то, что нельзя захардкодить: разные разделители разрядов, форматы дат, правила сортировки и множественного числа в разных языках.</p><p>Формально Intl - часть стандарта ECMAScript (ECMA-402), а не «браузерный» API, но именно среда (браузер/Node) поставляет данные локалей. Многие методы вроде toLocaleString, localeCompare, toLocaleDateString под капотом используют Intl.</p><p>Локаль (locale) - первый и главный аргумент почти всех конструкторов. Строка-идентификатор языка по BCP 47 из частей через дефис: язык - система письма - регион. Примеры: "ru", "en-US", "zh-Hans-CN". Можно передать массив локалей (список предпочтений с фолбэком).</p><p>Основные конструкторы:</p><ul><li>Intl.NumberFormat - форматирование чисел: разделители разрядов, валюта, проценты, единицы. Опции: style ("decimal" / "currency" / "percent" / "unit"), currency ("USD"/"RUB"), minimumFractionDigits/maximumFractionDigits, notation ("compact" для "1,2 тыс."). Пример: new Intl.NumberFormat("ru", { style: "currency", currency: "RUB" }).format(1234.5)</li><li>Intl.DateTimeFormat - форматирование даты/времени по локали и часовому поясу. Опции: dateStyle/timeStyle ("short"/"long"...), либо покомпонентно (year, month, day, hour...), timeZone</li><li>Intl.Collator - корректное СРАВНЕНИЕ и сортировка строк по правилам языка (важно для не-латиницы, букв с диакритикой). Опции sensitivity, numeric (чтобы "item2" < "item10"). Используется в arr.sort(new Intl.Collator("ru").compare)</li><li>Intl.RelativeTimeFormat - относительное время: "2 дня назад", "через 3 часа". format(-2, "day")</li><li>Intl.PluralRules - выбор формы МНОЖЕСТВЕННОГО числа для локали. Критично для русского, где форм несколько (1 товар, 2 товара, 5 товаров): возвращает категорию ("one"/"few"/"many"/"other"), по которой подставляют нужное слово. В английском всего две формы, поэтому про это часто забывают</li><li>Intl.ListFormat - объединение в список ("A, B и C"); Intl.Segmenter - разбиение текста на слова/предложения/графемы по правилам языка (корректно для эмодзи и иероглифов)</li></ul><p>Важный нюанс производительности: создание форматтера (особенно DateTimeFormat) - ДОРОГАЯ операция. Если форматируешь много значений, создают экземпляр ОДИН раз и переиспользуют его .format, а не вызывают конструктор в цикле/на каждый рендер.</p><pre>const fmt = new Intl.NumberFormat("ru", { style: "currency", currency: "RUB" });\nitems.forEach(x => fmt.format(x.price)); // один форматтер на все</pre><p>Когда что: Intl - всегда, когда данные показываются пользователю в локализованном виде (цены, даты, количества). Это надёжнее и легче ручного форматирования и сторонних библиотек. Связанные toLocaleString для чисел и сравнение строк - в базовом банке (числа и строки).</p>',
    order: 3,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_browser_api_004',
    topicId: 'topic_browser_api',
    question: 'Что делает window.open? Как взаимодействуют окна и iframe (realm, postMessage)?',
    answer:
      '<p>window.open(url, name, features) открывает новое окно или вкладку и ВОЗВРАЩАЕТ ссылку на его объект window. Через эту ссылку можно управлять новым окном (если тот же origin): менять адрес, размеры, закрывать (newWin.close()).</p><ul><li>name - имя окна-цели (как target у ссылки: "_blank", "_self" или произвольное имя для переиспользования окна)</li><li>features - строка параметров (размеры, положение): "width=600,height=400". Если её передать, открывается именно ОКНО-попап, иначе обычно вкладка</li><li>opener - в открытом окне ссылка window.opener указывает на открывшее его окно</li></ul><p>Нюансы безопасности и блокировки:</p><ul><li>Блокировка попапов: open сработает только в ответ на ДЕЙСТВИЕ пользователя (клик); вызов «просто так» (в таймере, при загрузке) браузер заблокирует</li><li>Угроза через opener: окно, открытое по ссылке target="_blank", по умолчанию получало доступ к window.opener и могло подменить адрес исходной страницы (opener.location) - вектор фишинга (tabnabbing). Защита - rel="noopener" (и noreferrer) у ссылок; современные браузеры применяют noopener для target="_blank" по умолчанию</li></ul><p>iframe - встроенное в страницу окно с собственным документом:</p><ul><li>iframe.contentWindow - объект window внутри iframe; iframe.contentDocument - его document</li><li>Из родителя: window.frames (коллекция фреймов); изнутри iframe: window.parent (родитель), window.top (самое верхнее окно), window.self (само окно)</li></ul><p>Realm (отдельная среда) - важный концептуальный момент. Каждое окно, вкладка и iframe - это СВОЙ realm: собственный объект window и СОБСТВЕННЫЕ экземпляры встроенных классов (Array, Object, и т.д.). Практическое следствие - instanceof ломается между окнами: массив, созданный в iframe, НЕ пройдёт arr instanceof Array в родительском окне, потому что это разные конструкторы Array из разных realm. Для таких проверок используют Array.isArray (он работает между realm). См. вопрос про window.</p><p>Ограничение Same-Origin: получить доступ к contentWindow/contentDocument чужого iframe (другой origin) НЕЛЬЗЯ - браузер заблокирует чтение по политике одного источника. Для разных origin прямой доступ к DOM/переменным невозможен - общаются только сообщениями.</p><p>postMessage - безопасный способ общения между окнами/iframe РАЗНОГО origin:</p><ul><li>Отправка: targetWindow.postMessage(data, targetOrigin). targetOrigin - ожидаемый origin получателя ("https://site.com") или "*". Указывать конкретный origin, а не "*", - чтобы данные не утекли не туда</li><li>Приём: window.addEventListener("message", (event) => {...}). У события: event.data (данные), event.origin (откуда пришло), event.source (окно-отправитель)</li><li>КРИТИЧНО для безопасности: при приёме ОБЯЗАТЕЛЬНО проверять event.origin (доверенный ли отправитель), прежде чем использовать данные. Пропуск этой проверки - классическая уязвимость: любой сайт может слать сообщения. Отвечают через event.source.postMessage(...)</li><li>Данные сериализуются алгоритмом структурного клонирования (можно объекты, не только строки)</li></ul><p>Применения postMessage: общение с виджетами/рекламой в iframe, popup-окна OAuth-авторизации, обмен между вкладками одного приложения. Для прямого канала между контекстами есть MessageChannel с портами. Кросс-доменные ограничения и origin - в вопросе про CORS.</p>',
    order: 4,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_browser_api_005',
    topicId: 'topic_browser_api',
    question: 'Что такое веб-компоненты и Shadow DOM? Как ведут себя события на границе тени?',
    answer:
      '<p>Веб-компоненты - набор стандартов браузера для создания ПЕРЕИСПОЛЬЗУЕМЫХ пользовательских элементов с инкапсулированными разметкой, стилями и логикой, не зависящих от внешнего кода и фреймворков. Стоят на трёх технологиях: Custom Elements, Shadow DOM и template.</p><p>1. Custom Elements (пользовательские элементы) - возможность создать СВОЙ HTML-тег на основе класса. Два вида:</p><ul><li>Автономные (autonomous) - новый тег, расширяющий HTMLElement: class MyEl extends HTMLElement {}</li><li>Модифицированные (customized built-in) - расширение существующего элемента, подключается через атрибут is="...": class MyButton extends HTMLButtonElement</li></ul><p>Жизненный цикл (lifecycle callbacks) - методы класса, вызываемые браузером:</p><ul><li>connectedCallback() - элемент добавлен в документ (сюда - инициализацию, рендер, подписки)</li><li>disconnectedCallback() - удалён из документа (сюда - очистку, отписки)</li><li>adoptedCallback() - перемещён в другой документ</li><li>attributeChangedCallback(name, oldV, newV) - изменился отслеживаемый атрибут</li><li>static get observedAttributes() - массив имён атрибутов, за которыми следить (без него attributeChangedCallback не вызовется)</li></ul><p>Регистрация - customElements.define("my-element", MyEl). Имя ОБЯЗАНО содержать дефис (button-counter) - так браузер отличает пользовательские теги от стандартных. Для модифицированных: customElements.define("my-button", MyButton, { extends: "button" }).</p><p>2. Shadow DOM - инкапсуляция: у элемента появляется собственное СКРЫТОЕ теневое дерево, изолированное от основного документа.</p><ul><li>Создание: elem.attachShadow({ mode: "open" | "closed" }). При "open" теневой корень доступен снаружи как elem.shadowRoot; при "closed" - shadowRoot равен null, доступ закрыт</li><li>Изоляция DOM: элементы теневого дерева НЕ видны из обычного document.querySelector - внешний код в них не залезет случайно</li><li>Изоляция СТИЛЕЙ в обе стороны: внешние стили не протекают внутрь, внутренние не протекают наружу. Внутри работают селекторы :host (сам хост-элемент), ::slotted (спроецированный контент), а снаружи стилизовать внутренности можно только через специально открытые ::part</li><li>Слоты (slot): &lt;slot&gt; в теневом дереве - «дырки», куда проецируется обычное (light DOM) содержимое, которое разместили внутри тега. Так компонент задаёт каркас, а пользователь - контент</li></ul><p>3. template - инертная разметка-заготовка (template.content - это DocumentFragment), которую клонируют в теневое дерево компонента. Разобран отдельно в вопросе про DocumentFragment и template.</p><p>Типичная сборка компонента: в конструкторе attachShadow, клонировать в shadowRoot содержимое template, навесить обработчики; в attributeChangedCallback реагировать на изменения атрибутов.</p><p>События на границе Shadow DOM (важный гик-раздел):</p><ul><li>Ретаргетинг (retargeting): когда событие из теневого дерева выходит наружу, браузер ПОДМЕНЯЕТ event.target на сам хост-элемент компонента - чтобы внешний код не видел внутреннее устройство. Снаружи кажется, что событие произошло на компоненте, а не на его внутренней кнопке</li><li>Флаг composed - определяет, ПЕРЕСЕКАЕТ ли событие границу тени и всплывает ли во внешний документ. Большинство встроенных UI-событий (click, input, keydown) имеют composed: true и выходят наружу; некоторые - нет. Для своих событий (CustomEvent) composed по умолчанию false, поэтому, чтобы событие из компонента дошло до внешнего документа, задают { composed: true, bubbles: true } (см. вопрос про CustomEvent)</li><li>composedPath() - метод события, возвращающий ПОЛНЫЙ путь распространения, включая узлы ВНУТРИ теневых деревьев. Если нужно узнать реальный внутренний элемент, на котором произошло событие (несмотря на ретаргетинг), берут event.composedPath()[0]. Обычная фаза/всплытие разобраны в вопросе про события</li></ul><p>Зачем всё это: веб-компоненты дают фреймворконезависимые переиспользуемые элементы с настоящей инкапсуляцией (в отличие от обычных компонентов, где стили глобальны). Минусы - многословность нативного API, поэтому на практике часто берут обёртки (Lit) или используют компонентную модель фреймворков. Концептуально это «нативный» аналог компонентов React/Vue.</p>',
    order: 5,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_browser_api_006',
    topicId: 'topic_browser_api',
    question: 'Что такое Virtual DOM? Как он работает?',
    answer:
      '<p>Virtual DOM (VDOM) - это лёгкое представление интерфейса в виде обычных JS-объектов, хранящееся в памяти, которое описывает, как ДОЛЖЕН выглядеть реальный DOM. Подход популяризировал React, используется и в других библиотеках.</p><p>Мотивация - прямые операции с РЕАЛЬНЫМ DOM дороги. Изменение DOM влечёт пересчёт стилей, раскладки (reflow) и перерисовку (см. вопрос про reflow/repaint). Если на каждое изменение состояния перестраивать DOM напрямую и неэффективно, страница будет тормозить. VDOM - это слой, который старается свести изменения реального DOM к МИНИМУМУ.</p><p>Как работает (цикл согласования):</p><ol><li>При изменении состояния создаётся НОВОЕ виртуальное дерево - полное описание желаемого UI (дёшево: это просто объекты в памяти, без касания DOM)</li><li>Reconciliation (согласование): алгоритм сравнивает новое виртуальное дерево с предыдущим (diffing) и находит МИНИМАЛЬНЫЙ набор отличий - что реально изменилось</li><li>Только найденные изменения применяются (патчатся) к реальному DOM одной пачкой - меняется не всё подряд, а лишь отличающиеся узлы/атрибуты</li></ol><p>Так разработчик пишет ДЕКЛАРАТИВНО («UI должен выглядеть так для этого состояния»), а библиотека сама вычисляет, какие точечные правки внести в DOM - не нужно вручную дёргать узлы.</p><p>Ключи (key) - важная деталь для списков. Чтобы при сравнении списков понять, какие элементы добавились/удалились/переместились (а не пересоздавать всё), элементам дают стабильный уникальный key. Подвох: использовать индекс массива как key - частая ошибка: при вставке/удалении/сортировке индексы сдвигаются, и алгоритм неправильно сопоставляет элементы (теряется состояние полей, лишние перерисовки). key должен быть стабильным идентификатором данных.</p><p>Честная оговорка (важно для глубокого понимания): VDOM сам по себе НЕ «быстрее» прямого DOM. Diffing - это тоже работа, накладные расходы. Его реальная ценность - в УДОБНОЙ декларативной модели и в том, что он избавляет от ручной оптимизации обновлений в большинстве случаев. Прямые точечные манипуляции с DOM могут быть быстрее VDOM - просто их тяжелее писать и поддерживать вручную.</p><p>Подходы БЕЗ Virtual DOM существуют и набирают популярность:</p><ul><li>Svelte - компилирует компоненты в код, который точечно обновляет нужные узлы DOM напрямую, без VDOM и runtime-diffing</li><li>SolidJS и «сигналы» (fine-grained reactivity) - отслеживают зависимости на уровне отдельных значений и обновляют ровно те узлы DOM, что зависят от изменившихся данных, минуя сравнение деревьев</li><li>Это показывает, что VDOM - не единственное и не обязательно лучшее решение, а один из способов связать состояние с DOM</li></ul><p>Связь: дороговизна операций с реальным DOM (reflow/repaint) - в подтеме про рендеринг; ручные методы изменения DOM, которые VDOM выполняет за нас, - в подтеме про работу с DOM; нативная компонентная модель браузера - в вопросе про веб-компоненты.</p>',
    order: 6,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_browser_api_007',
    topicId: 'topic_browser_api',
    question: 'Что такое Web Workers и Service Workers? Чем отличаются?',
    answer:
      '<p>JavaScript в основном потоке (main thread) однопоточный: тяжёлые синхронные вычисления блокируют и обработку событий, и рендеринг - интерфейс «фризится» (см. Event Loop и голодание потока в базовом банке). Воркеры (workers) - это способ запустить JS в ОТДЕЛЬНОМ фоновом потоке, дав настоящий параллелизм (а не только конкурентность переключением задач).</p><p>Общие черты всех воркеров:</p><ul><li>Выполняются в своём потоке со своим глобальным объектом self (не window). У них НЕТ доступа к DOM, window, document, родительским переменным - они изолированы</li><li>Зато доступны: fetch, XMLHttpRequest, WebSocket, таймеры, IndexedDB, Cache API, Crypto, importScripts (подгрузка скриптов), OffscreenCanvas</li><li>Общение с основным потоком - только СООБЩЕНИЯМИ: postMessage(data) и обработчик onmessage. Память не разделяется - данные КОПИРУЮТСЯ алгоритмом структурного клонирования (тем же, что у structuredClone). Для больших бинарных данных есть transferable-объекты (ArrayBuffer, MessagePort, OffscreenCanvas): они ПЕРЕДАЮТСЯ без копирования - владение переходит воркеру, а в исходном потоке объект становится недоступным (detached)</li></ul><p>Виды обычных воркеров:</p><ul><li>Выделенный воркер (Dedicated Worker) - new Worker("worker.js"). Принадлежит ОДНОЙ странице, живёт пока жива вкладка. terminate() - убить снаружи, self.close() - изнутри. Основной инструмент для тяжёлых вычислений</li><li>Разделяемый воркер (Shared Worker) - new SharedWorker(...). ОДИН воркер на несколько вкладок/скриптов одного origin, общение через порты (worker.port). Реже используется</li></ul><pre>// основной поток\nconst worker = new Worker("calc.js");\nworker.postMessage({ data: bigArray });\nworker.onmessage = (e) => console.log(e.data); // результат из воркера\n\n// calc.js\nself.onmessage = (e) => {\n  const result = heavyCompute(e.data.data);\n  self.postMessage(result);\n};</pre><p>Применение обычных воркеров: тяжёлая обработка (изображения, парсинг больших JSON/CSV, шифрование, сжатие, вычисления), чтобы не блокировать UI. Настоящую РАЗДЕЛЯЕМУЮ память между потоками дают SharedArrayBuffer + Atomics, но после уязвимостей Spectre для них требуется «кросс-доменная изоляция» страницы через заголовки COOP/COEP.</p><p>Service Worker - особый вид воркера, это не «вычислитель», а СЕТЕВОЙ ПРОКСИ и фоновый агент между приложением и сетью:</p><ul><li>Регистрируется отдельно: navigator.serviceWorker.register("sw.js"). Работает по своей области (scope) - пути, который контролирует</li><li>Главная способность - перехват запросов: в обработчике события fetch он может ответить из кеша или сети сам. В связке с Cache API это основа ОФЛАЙНА и PWA (стратегии cache-first / network-first - см. вопрос про IndexedDB и Cache API)</li><li>Жизненный цикл: register → install (событие, тут обычно кешируют ресурсы) → activate (активация, очистка старых кешей) → дальше может «засыпать» и «просыпаться» по событиям. Методы skipWaiting() и clients.claim() ускоряют вступление в силу новой версии</li><li>Живёт НЕЗАВИСИМО от вкладок: продолжает работать в фоне даже без открытой страницы. Поэтому через него работают push-уведомления и фоновая синхронизация (Background Sync)</li><li>Только в безопасном контексте: HTTPS (или localhost) - механизм мощный, поэтому ограничен. DOM ему тоже недоступен, общение со страницами через postMessage</li></ul><p>Чем Service Worker отличается от обычного воркера:</p><ul><li>Обычный (Dedicated/Shared) - для ПАРАЛЛЕЛЬНЫХ ВЫЧИСЛЕНИЙ, привязан к странице/origin, живёт с вкладкой</li><li>Service Worker - СЕТЕВОЙ ПРОКСИ и фон: один на origin+scope, переживает вкладки, событийный (fetch, push, sync), требует HTTPS, существует ради офлайна, кеширования и фоновых задач, а не ради расчётов</li></ul><p>Связь: блокировка потока и зачем выносить работу в Worker - в вопросе про Event Loop и голодание (базовый банк); Cache API и офлайн - в подтеме про хранение; структурное клонирование при postMessage - в вопросе про structuredClone; архитектура браузера и потоки - в вопросе про устройство браузера.</p>',
    order: 7,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_browser_api_008',
    topicId: 'topic_browser_api',
    question: 'Что такое BroadcastChannel? Как организовать связь между вкладками?',
    answer:
      '<p>BroadcastChannel - API для обмена сообщениями между разными контекстами ОДНОГО origin: вкладками, окнами, iframe и воркерами. Работает по принципу именованного канала и широковещания (pub/sub): кто подключился к каналу с тем же именем, тот получает все сообщения.</p><ul><li>Создание/подключение: const channel = new BroadcastChannel("имя") - присоединиться к каналу по имени</li><li>Отправка: channel.postMessage(data) - сообщение уходит ВСЕМ другим контекстам на этом канале. Важный нюанс: отправитель НЕ получает собственное сообщение (только другие контексты)</li><li>Приём: channel.onmessage = (e) => e.data</li><li>Отключение: channel.close()</li><li>Данные передаются структурным клонированием (можно объекты, не только строки)</li></ul><pre>// вкладка A\nconst ch = new BroadcastChannel("auth");\nch.postMessage({ type: "logout" });\n\n// вкладка B (того же origin)\nconst ch = new BroadcastChannel("auth");\nch.onmessage = (e) => {\n  if (e.data.type === "logout") location.reload(); // разлогинились во всех вкладках\n};</pre><p>Место среди других механизмов связи (важно для понимания, когда что брать):</p><ul><li>Против события storage (см. localStorage/sessionStorage в подтеме про хранение): синхронизацию вкладок РАНЬШЕ делали хаком - писали в localStorage и ловили событие storage в других вкладках. BroadcastChannel - специализированная замена: шлёт НАСТОЯЩИЕ сообщения, ничего не записывая в хранилище, и не завязан на побочный эффект записи</li><li>Против postMessage между окнами (см. window.open/iframe): postMessage требует ПРЯМУЮ ссылку на целевое окно (opener, iframe.contentWindow). BroadcastChannel ссылок не требует - вещает по ИМЕНИ канала сразу всем контекстам origin</li><li>Против MessageChannel: MessageChannel - приватный канал ОДИН-К-ОДНОМУ между двумя портами; BroadcastChannel - один-ко-многим (broadcast)</li></ul><p>Ограничения и подвохи:</p><ul><li>Только один origin (схема+хост+порт) - между разными сайтами не работает (безопасность, как и везде)</li><li>Сообщения доставляются только СЕЙЧАС открытым контекстам - это не хранилище: вкладка, открытая ПОЗЖЕ, прошлых сообщений не получит. Для постоянного состояния нужны localStorage/IndexedDB</li><li>Отправитель не слышит сам себя - если нужно обновить и текущую вкладку, её обрабатывают отдельно</li></ul><p>Применения: синхронизация состояния между вкладками (выход из аккаунта во всех вкладках, смена темы, обновление корзины), оповещение других вкладок об изменении данных, координация вкладок со своим Service Worker.</p><p>Другие способы кросс-вкладочной связи и их ниши: SharedWorker (общий воркер на несколько вкладок - см. вопрос про воркеры), localStorage + событие storage (легаси-приём), Service Worker как посредник. BroadcastChannel - самый простой и прямой инструмент именно для широковещания между контекстами одного origin. Связь с postMessage/MessageChannel - в вопросе про окна и iframe; со структурным клонированием - в базовом банке.</p>',
    order: 8,
    createdAt: NOW,
    updatedAt: NOW,
  },
  // Алгоритмы (topicId: topic_algorithms) — 24 вопрос(ов)
  {
    id: 'q_algorithms_001',
    topicId: 'topic_algorithms',
    question: 'Что такое логарифм?',
    answer:
      '<p>logₐb = c — читается как логарифм b по основанию a.</p><p>Логарифм вычисляет степень, в которую возводится основание a для получения числа b.</p>',
    order: 1,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_algorithms_002',
    topicId: 'topic_algorithms',
    question: 'Что такое алгоритм?',
    answer: '<p>Это последовательность действий для выполнения какой-либо задачи.</p>',
    order: 2,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_algorithms_003',
    topicId: 'topic_algorithms',
    question: 'Как оценить эффективность алгоритма?',
    answer:
      '<p>Эффективность алгоритма оценивается по 2 критериям:</p><ul><li>По времени (количество операций) – временная сложность, измеряется в O(n)</li><li>По затраченным ресурсам (выделяемая память) – пространственная сложность, измеряется в O(n)</li></ul>',
    order: 3,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_algorithms_004',
    topicId: 'topic_algorithms',
    question: 'Что такое О-большое?',
    answer:
      '<p>О-большое описывает скорость работы алгоритма, но скорость выражается не в секундах. О-большое позволяет сравнить количество операций и указывает, насколько сильно возрастает время выполнения алгоритма с увеличением входных данных.</p>',
    order: 4,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_algorithms_005',
    topicId: 'topic_algorithms',
    question: 'Виды сложности алгоритмов?',
    answer:
      '<ul><li>O(1) - константная</li><li>O(log n) - логарифмическая</li><li>O(n) - линейная</li><li>O(n²) - квадратичная</li><li>O(n³) - кубическая</li><li>O(n!) - факториальная</li></ul>',
    order: 5,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_algorithms_006',
    topicId: 'topic_algorithms',
    question: 'Что такое массив?',
    answer:
      '<p>Массив – это набор элементов, которые хранятся в последовательных ячейках памяти, каждый элемент имеет индекс, нумерация начинается с нуля.</p><p>Виды массивов:</p><ul><li>Статический – массив с фиксированным размером. Если требуется добавить ячейку, то создаётся новый массив на одну ячейку больше и в него копируются данные из старого массива и в конец добавляется новый элемент.</li><li>Динамический – массив реализуется как обёртка над статическим, с созданием нового массива, копированием и удалением старого массива из памяти.</li></ul><p>Сложность операций над массивом:</p><ul><li>Получение элемента - O(1)</li><li>Вставка в конец - O(1) амортизированно, но O(n) в момент, когда динамический массив переполнен и происходит реаллокация с копированием в новый массив</li><li>Вставка в начало - O(n)</li><li>Удаление с начала или по индексу - O(n)</li><li>Удаление с конца - O(1)</li></ul>',
    order: 6,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_algorithms_007',
    topicId: 'topic_algorithms',
    question: 'Линейный поиск',
    answer:
      '<p>Линейный поиск – это алгоритм поиска элемента в массиве путём перебора всех элементов подряд. Не требует сортировки. Сложность O(n) – линейная.</p>',
    order: 7,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_algorithms_008',
    topicId: 'topic_algorithms',
    question: 'Бинарный поиск',
    answer:
      '<p>Бинарный поиск – это алгоритм поиска элемента в отсортированном массиве, который работает по принципу разделения интервала поиска пополам на каждом шаге. Сложность O(log n) – логарифмическая.</p>',
    order: 8,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_algorithms_009',
    topicId: 'topic_algorithms',
    question: 'Что такое рекурсия?',
    answer:
      '<p>Рекурсия – это функция, которая вызывает сама себя. Рекурсивная функция состоит из двух частей:</p><ul><li>Базовый случай - простейший случай, который можно решить напрямую (остановка рекурсии).</li><li>Рекурсивный случай – шаг, где функция вызывает себя с другим аргументом, двигаясь к базовому случаю.</li></ul><p>Для каких задач подойдёт рекурсия:</p><ul><li>Обход вложенных структур (деревья, графы)</li><li>Задачи типа «разделяй и властвуй»</li><li>Алгоритмы поиска</li><li>Обратного построения данных</li></ul>',
    order: 9,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_algorithms_010',
    topicId: 'topic_algorithms',
    question: 'Разделяй и властвуй?',
    answer:
      '<p>Разделяй и властвуй – это стратегия разработки алгоритмов, основанная на рекурсивном разбиении задачи на более мелкие подзадачи того же типа, решении каждой подзадачи независимо и последующем объединении их решений для получения итогового результата.</p>',
    order: 10,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_algorithms_011',
    topicId: 'topic_algorithms',
    question: 'Сортировка выбором',
    answer:
      '<p>Сортировка выбором – это простой и медленный алгоритм сортировки, который делит список на 2 части: отсортированную и неотсортированную, и на каждом шаге находит минимальный (или максимальный) элемент в неотсортированной части и ставит его в конец отсортированной части (при поиске минимума отсортированная часть растёт слева направо). Сложность O(n²) – квадратичная.</p>',
    order: 11,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_algorithms_012',
    topicId: 'topic_algorithms',
    question: 'Пузырьковая сортировка',
    answer:
      '<p>Пузырьковая сортировка – это простой и медленный алгоритм сортировки, который последовательно сравнивает соседние элементы списка и меняет их местами, если они находятся в неправильном порядке. Этот процесс повторяется до тех пор, пока все элементы не будут отсортированы, в результате чего элементы постепенно «всплывают» к своему правильному положению. Сложность O(n²) – квадратичная.</p>',
    order: 12,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_algorithms_013',
    topicId: 'topic_algorithms',
    question: 'Быстрая сортировка',
    answer:
      '<p>Быстрая сортировка – это алгоритм сортировки сравнением, основной принцип: выбор опорного элемента (в идеале - случайный элемент) и разделение массива так, чтобы все элементы меньше опорного оказались слева от него, а все элементы больше – справа. Затем рекурсивное применение этого подхода к подмассивам.</p><p>Сложность в среднем O(n log n), но в худшем случае (например, неудачный выбор опорного элемента на уже отсортированном массиве) деградирует до O(n²). Поэтому опорный элемент стараются выбирать случайно. Память – O(log n) на стек рекурсии.</p>',
    order: 13,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_algorithms_014',
    topicId: 'topic_algorithms',
    question: 'Связанный список',
    answer:
      '<p>Связанный список – это набор элементов (узлов), где каждый узел хранит свои данные и указатель на адрес следующего узла в памяти.</p><p>Виды списков:</p><ul><li>Однонаправленный (односвязный) - каждый элемент хранит ссылку только на следующий элемент.</li><li>Двусвязный – каждый элемент хранит ссылку на следующий элемент и на предыдущий.</li></ul><p>Сложность операций над списком:</p><ul><li>Вставка в начало/конец - O(1)</li><li>Вставка в середине - O(n) + O(1)</li><li>Удаление в начале/конце - O(1)</li><li>Удаление в середине - O(n) + O(1)</li><li>Получение в начале/конце - O(1)</li><li>Получение в середине - O(n)</li></ul>',
    order: 14,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_algorithms_015',
    topicId: 'topic_algorithms',
    question: 'Очередь',
    answer:
      '<p>Очередь – это структура данных, которая работает по принципу FIFO (First In, First Out — первым пришёл, первым ушёл).</p>',
    order: 15,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_algorithms_016',
    topicId: 'topic_algorithms',
    question: 'Стек',
    answer:
      '<p>Стек – это структура данных, работающая по принципу LIFO (Last In, First Out — последним пришёл, первым ушёл).</p><ul><li>Когда функция вызывается, контекст её вызова помещается на вершину стека</li><li>Если функция вызывает другую (или саму себя) - новый вызов кладётся поверх старого.</li><li>Когда вызов завершается, он извлекается из стека, и программа возвращается к предыдущему вызову.</li></ul>',
    order: 16,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_algorithms_017',
    topicId: 'topic_algorithms',
    question: 'Deque',
    answer:
      '<p>Deque – это структура данных, которая сочетает в себе возможности стека (LIFO) и очереди (FIFO). Элементы можно добавлять и удалять как с начала, так и с конца структуры.</p>',
    order: 17,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_algorithms_018',
    topicId: 'topic_algorithms',
    question: 'Графы',
    answer:
      '<p>Граф – это структура, состоящая из узлов и рёбер. Узлы – это любые объекты, рёбра – это связи между узлами. В ненаправленных графах рёбра не имеют направления, связи между узлами идут в обе стороны. В направленных графах связи между узлами действуют в направлении рёбер.</p>',
    order: 18,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_algorithms_019',
    topicId: 'topic_algorithms',
    question: 'Взвешенный граф',
    answer:
      '<p>Взвешенный граф – это граф, рёбрам которого присвоены числовые значения, называемые весами. Используются для поиска кратчайшего пути.</p>',
    order: 19,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_algorithms_020',
    topicId: 'topic_algorithms',
    question: 'Поиск в ширину',
    answer:
      '<p>Поиск в ширину – это алгоритм обхода графа и поиска в нём, который исследует все узлы по уровням, начиная с заданного узла.</p><ul><li>Сначала алгоритм находит узлы, в которые можно попасть из заданного узла и добавляет их в очередь.</li><li>После этого из очереди извлекается первый найденный узел, для него повторяется первый шаг.</li><li>Так происходит до самого конца графа или до тех пор пока не будет найден элемент.</li></ul>',
    order: 20,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_algorithms_021',
    topicId: 'topic_algorithms',
    question: 'Поиск в глубину',
    answer:
      '<p>Поиск в глубину – это алгоритм обхода графа и поиска в нём, который погружается максимально глубоко и исследует все узлы по одному возвращаясь назад к заданному узлу. Для хранения узлов, которые нужно обработать используется стек.</p>',
    order: 21,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_algorithms_022',
    topicId: 'topic_algorithms',
    question: 'Деревья',
    answer:
      '<p>Дерево – это тип графа, в котором отсутствует цикл. Дерево состоит из корневого узла, от которого идут дочерние узлы и листья – это узлы, не имеющие потомков.</p><p>Бинарное дерево – это дерево, в котором каждый узел имеет не более двух дочерних узлов, их называют левым и правым поддеревом. В бинарном дереве поиска (BST) дополнительно соблюдается порядок: значения в левом поддереве меньше значения узла, а в правом – больше. Основная задача бинарного дерева поиска – быстрый поиск.</p>',
    order: 22,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_algorithms_023',
    topicId: 'topic_algorithms',
    question: 'Хеш-таблицы, хеш-функции, коллизии',
    answer:
      '<p>Хеш-таблица – это структура данных, элементы которой хранятся в ней в виде пар «ключ-значение». Под капотом использует хеш-функцию и массив.</p><p>Хеш-функция – принимает ключ и возвращает число, соответствующее ключу (индекс в массиве). Хеш-функция должна свести количество коллизий к минимуму.</p><p>Коллизии – ситуация, когда для разных ключей получается одно и то же значение (индекс). Способы разрешения:</p><ul><li>Метод цепочек (chaining) – по каждому индексу хранится список, и при коллизии элементы добавляются в этот список.</li><li>Открытая адресация (open addressing) – элемент при коллизии кладётся в другую свободную ячейку самого массива по определённому правилу (например, линейное пробирование – проверяются следующие ячейки по порядку).</li></ul><p>Сложность операций (вставка, поиск, удаление): в среднем O(1), но в худшем случае (много коллизий) деградирует до O(n).</p>',
    order: 23,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_algorithms_024',
    topicId: 'topic_algorithms',
    question: 'Жадные алгоритмы',
    answer:
      '<p>Алгоритм, который на каждом шаге выбирает локально оптимальное решение в надежде, что это приведёт к глобально оптимальному решению.</p>',
    order: 24,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_algorithms_025',
    topicId: 'topic_algorithms',
    question: 'Сортировка слиянием',
    answer:
      '<p>Сортировка слиянием – это алгоритм сортировки, основанный на стратегии «разделяй и властвуй»: массив рекурсивно делится пополам, пока не останутся части из одного элемента, после чего эти части попарно сливаются обратно в отсортированном порядке. Сложность O(n log n) – линейно-логарифмическая.</p>',
    order: 25,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_algorithms_026',
    topicId: 'topic_algorithms',
    question: 'Какие бывают случаи сложности и обозначения (O, Ω, Θ)?',
    answer:
      '<p>Сложность алгоритма зависит от входных данных, поэтому различают случаи:</p><ul><li>Лучший случай – самые «удачные» данные (например, искомый элемент сразу первый).</li><li>Средний случай – усреднённое поведение на типичных данных.</li><li>Худший случай – самые «неудачные» данные. На практике оценивают чаще всего именно его, так как он даёт гарантию сверху.</li></ul><p>Математические обозначения (асимптотические границы):</p><ul><li>O (О-большое) – верхняя граница (не медленнее, чем…). Используется чаще всего.</li><li>Ω (омега) – нижняя граница (не быстрее, чем…).</li><li>Θ (тета) – точная граница: когда верхняя и нижняя совпадают.</li></ul><p>В разговорной практике обычно говорят «сложность O(...)», подразумевая худший случай, хотя формально O – это просто верхняя оценка.</p>',
    order: 26,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_algorithms_027',
    topicId: 'topic_algorithms',
    question: 'Что такое стабильность сортировки?',
    answer:
      '<p>Сортировка называется стабильной (устойчивой), если она сохраняет относительный порядок элементов с одинаковыми ключами. То есть если два элемента равны по ключу сортировки, после сортировки они останутся в том же порядке, в каком были изначально.</p><p>Зачем это нужно: при сортировке по нескольким критериям. Например, отсортировав список людей сначала по имени, а затем стабильной сортировкой по возрасту, мы получим людей, упорядоченных по возрасту, а внутри одного возраста – по имени (порядок от первой сортировки сохранится).</p><p>Стабильные: сортировка слиянием, пузырьковая, вставками. Нестабильные (в базовой реализации): быстрая сортировка, сортировка выбором. Нестабильную сортировку можно сделать стабильной, добавив в ключ сравнения исходный индекс элемента.</p>',
    order: 27,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_algorithms_028',
    topicId: 'topic_algorithms',
    question: 'Что значит сортировка «на месте» (in-place)?',
    answer:
      '<p>Сортировка «на месте» (in-place) – это сортировка, которая не требует существенной дополнительной памяти и переставляет элементы внутри самого массива. Дополнительная память при этом O(1) или O(log n) (на стек рекурсии), но не пропорциональна размеру массива.</p><p>Противоположность – сортировка, которой нужен отдельный массив размером с исходный, то есть дополнительная память O(n).</p><p>На месте: пузырьковая, выбором, вставками, быстрая (O(log n) на рекурсию). Не на месте: сортировка слиянием – ей нужен дополнительный массив O(n) для слияния. Это классический компромисс: слияние стабильно и гарантирует O(n log n), но платит памятью; быстрая сортировка экономит память, но нестабильна и имеет худший случай O(n²).</p>',
    order: 28,
    createdAt: NOW,
    updatedAt: NOW,
  },
  // CSS: Основы
  {
    id: 'q_css_fundamentals_001',
    topicId: 'topic_css_fundamentals',
    question: 'Что такое каскад в CSS и в каком порядке разрешаются конфликты правил?',
    answer:
      '<p>Каскад (cascade) - алгоритм, по которому браузер выбирает, какое значение свойства применить к элементу, когда на него претендует несколько конфликтующих объявлений. Специфичность - лишь один из этапов каскада, а не весь каскад (частое заблуждение).</p><p>Порядок разрешения конфликта, от высшего приоритета к низшему:</p><ol><li>Происхождение и важность (origin + importance). Источники стилей: браузерные (user-agent), пользовательские, авторские. Полный порядок важности от слабого к сильному: обычные UA → обычные пользовательские → обычные авторские → !important авторские → !important пользовательские → !important UA. Пользовательский !important специально бьёт авторский !important - чтобы настройки доступности могли перебить стили сайта</li><li>Каскадные слои (@layer) - внутри одного происхождения задают явный порядок приоритета</li><li>Специфичность - сравнивается только при равной важности и слое</li><li>Порядок в коде (source order) - при равной специфичности побеждает объявление, идущее позже</li></ol><p>Важно: «последнее правило выигрывает» работает ТОЛЬКО при равной специфичности, потому что порядок проверяется в последнюю очередь. Частая ошибка: «написал правило ниже, а оно не применилось» - выше стоящая специфичность уже решила конфликт.</p><p>Наследование в этот алгоритм НЕ входит: оно срабатывает лишь когда у элемента нет ни одного объявления свойства, и тогда наследуемое свойство берётся от родителя. Каскад - про разрешение прямых конфликтов, наследование - запасной механизм при их отсутствии.</p>',
    order: 1,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_css_fundamentals_002',
    topicId: 'topic_css_fundamentals',
    question: 'Как считается специфичность селектора?',
    answer:
      '<p>Специфичность - «вес» селектора, по которому каскад сравнивает конфликтующие правила одного уровня важности. Считается тремя группами, записываемыми тройкой (A, B, C):</p><ul><li>A - количество ID-селекторов (#header)</li><li>B - количество классов, атрибутов и псевдоклассов (.btn, [type="text"], :hover, :first-child)</li><li>C - количество тегов и псевдоэлементов (div, a, ::before)</li></ul><p>Сравнение лексикографическое, как версии: сначала A, при равенстве B, затем C. КЛЮЧЕВОЕ: это не проценты и не сумма по основанию 10 - группы не переносятся друг в друга. Один ID (1,0,0) сильнее любого количества классов: даже (0,100,0) проигрывает (1,0,0), потому что группа A старше группы B. Это классическая ловушка на собеседовании.</p><p>Примеры: div → (0,0,1); .btn → (0,1,0); #header → (1,0,0); ul li a → (0,0,3); .nav .item a → (0,2,1); #main .list li → (1,1,1); a:hover → (0,1,1).</p><p>Особые случаи:</p><ul><li>Инлайновый стиль (style="...") сильнее любых селекторов - как старшая группа (1,0,0,0)</li><li>!important вне специфичности - работает на уровне важности каскада; перебивается только другим !important с большей специфичностью</li><li>Универсальный селектор * и комбинаторы (&gt;, +, ~, пробел) специфичности не добавляют - (0,0,0)</li><li>:where() всегда имеет специфичность ноль (для легко перебиваемых стилей), а :is() и :not() берут специфичность самого весомого аргумента внутри</li></ul><p>Практика: высокая специфичность усложняет переопределение и поддержку. Поэтому предпочитают «лёгкие» селекторы (классы вместо ID, плоские вместо длинных цепочек) - отсюда методологии вроде BEM.</p>',
    order: 2,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_css_fundamentals_003',
    topicId: 'topic_css_fundamentals',
    question: 'Что такое наследование в CSS? Какие свойства наследуются, а какие нет?',
    answer:
      '<p>Наследование - механизм, при котором элемент без собственного значения свойства берёт его от родителя. Это не про конфликт правил (это каскад), а про заполнение «пустот»: если color не задан, элемент возьмёт его у родителя.</p><p>Логика (важнее списка): наследуются свойства текста и типографики - чтобы задать их один раз на контейнере. НЕ наследуются свойства бокса и раскладки - унаследовать border или margin на всех потомков было бы катастрофой.</p><ul><li>Наследуются: color, font и font-*, line-height, letter-spacing, text-align, text-indent, white-space, list-style, visibility, cursor, word-break</li><li>Не наследуются: margin, padding, border, width/height, background, display, position, top/left, float, overflow, z-index, flex, grid</li></ul><p>Глобальные ключевые слова управления (применимы к любому свойству):</p><ul><li>inherit - принудительно взять значение родителя (даже для ненаследуемого)</li><li>initial - сбросить к начальному значению по спецификации (к дефолту самого свойства, не к родительскому)</li><li>unset - для наследуемого свойства работает как inherit, для ненаследуемого как initial</li><li>revert - откат к значению браузерного стиля (UA), отменяя авторские</li></ul><p>Тонкость: наследуется ВЫЧИСЛЕННОЕ (computed) значение, а не исходный текст. Классика - line-height. При line-height: 1.5 (без единиц) наследуется множитель 1.5, и каждый потомок умножает его на свой font-size. При line-height: 150% или 30px наследуется вычисленное значение в пикселях родителя, и потомок с другим шрифтом получит неверную высоту строки. Поэтому line-height задают без единиц - прямой вывод из механики наследования.</p>',
    order: 3,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_css_fundamentals_004',
    topicId: 'topic_css_fundamentals',
    question: 'Как работает !important и почему это антипаттерн?',
    answer:
      '<p>!important - флаг у объявления (color: red !important), поднимающий его на отдельный, более высокий уровень важности в каскаде. Ключевое: !important НЕ увеличивает специфичность - он действует на более раннем этапе каскада (важность), который стоит выше специфичности. Поэтому обычное объявление с любой, даже огромной специфичностью проигрывает любому !important.</p><p>Между собой important-объявления сравниваются уже по специфичности, а при равной - по порядку в коде. То есть внутри «клуба important» правила прежние, но весь клуб выше обычных объявлений.</p><p>Полный порядок важности: обычные UA → обычные пользовательские → обычные авторские → important авторские → important пользовательские → important UA. Среди !important пользователь и браузер выше автора - ради доступности (стили пользователя с особыми потребностями должны мочь перебить сайт).</p><p>Почему антипаттерн:</p><ul><li>Ломает нормальный каскад - выдёргивает правило из предсказуемой системы специфичности и порядка</li><li>Порождает гонку вооружений: перебить !important можно только другим !important с большей специфичностью, и стили превращаются в кашу</li><li>Убивает переопределяемость: компонент со стилями на !important нельзя кастомизировать снаружи без ещё одного !important</li></ul><p>Когда оправдан: utility-классы, которые по замыслу всегда побеждают (.hidden { display: none !important }); перебивание сторонних или инлайновых стилей, которые не контролируешь; пользовательские стили доступности. Точечно - да, рутинно - нет.</p><p>Современная альтернатива управления приоритетом без important - каскадные слои @layer: задают явный порядок главенства стилей без раздувания специфичности.</p>',
    order: 4,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_css_fundamentals_005',
    topicId: 'topic_css_fundamentals',
    question: 'Какие бывают виды селекторов и комбинаторов?',
    answer:
      '<p>Селекторы выбирают элементы для стилизации. Группы:</p><p>Простые селекторы:</p><ul><li>Тег (type): div, p - по имени элемента</li><li>Класс: .btn</li><li>ID: #header (высокая специфичность, для стилей лучше избегать)</li><li>Универсальный: * (специфичность 0)</li><li>Атрибут: [type], [type="text"], с операторами [href^="https"] (начинается с), [href$=".pdf"] (заканчивается), [class*="btn"] (содержит подстроку), [lang|="en"] (равно или начинается с en-), [class~="btn"] (одно из слов списка)</li></ul><p>Комбинаторы (связывают по положению в дереве, специфичности не добавляют):</p><ul><li>Потомок (пробел): .nav a - на любой глубине</li><li>Прямой потомок (&gt;): .nav &gt; li - только непосредственные дети</li><li>Соседний следующий (+): h2 + p - ближайший p сразу за h2</li><li>Последующие соседи (~): h2 ~ p - все p после h2 у одного родителя</li></ul><p>Псевдоклассы (состояние/позиция, одно двоеточие): :hover, :focus, :active, :checked, :disabled, :first-child, :last-child, :nth-child(n), :not(), :is(), :where(), :has() - подробно в отдельных вопросах.</p><p>Псевдоэлементы (стилизуют часть элемента, два двоеточия): ::before, ::after (генерируют контент через content), ::first-line, ::first-letter, ::selection, ::placeholder, ::marker. Различие: два двоеточия у псевдоэлементов, одно у псевдоклассов (старые псевдоэлементы допускают одно для совместимости).</p><p>Группировка запятой: h1, h2, h3 - каждый селектор списка оценивается независимо по специфичности.</p><p>Производительность (гик-нюанс): браузер читает селекторы справа налево. Для .nav ul li a он сначала находит все a, затем фильтрует вверх по цепочке. Поэтому самый правый селектор должен быть конкретным, а длинные цепочки медленнее.</p>',
    order: 5,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_css_fundamentals_006',
    topicId: 'topic_css_fundamentals',
    question: 'Как работают :is(), :where() и :not() и какова их специфичность?',
    answer:
      '<p>Функциональные псевдоклассы, принимающие список селекторов. Группируют запись, но с разной логикой специфичности (частая ловушка).</p><p>:is(sel1, sel2, ...) - совпадает, если элемент подходит хотя бы под один селектор списка. Сокращение: .article :is(h1, h2, h3) вместо перечисления. Специфичность :is() = специфичность самого весомого аргумента внутри. :is(#id, .class, div) возьмёт вес #id (1,0,0), даже если элемент подошёл по div - может неожиданно поднять специфичность.</p><p>:where(...) - то же поведение, но специфичность ВСЕГДА ноль (0,0,0), что бы ни было внутри. Для стилей, которые должны легко перебиваться (базовые стили библиотек). :where(#a, #b) p имеет вес только от p.</p><p>Выбор: нужен обычный вес - :is(); нужно легко перебить - :where().</p><p>:not(sel) - совпадает, если элемент НЕ подходит под селектор: input:not([disabled]). Специфичность - как у самого весомого аргумента внутри (сам :not веса не добавляет, но содержимое да: :not(#id) даёт (1,0,0)). Принимает список: :not(.a, .b) - не .a и не .b. Смысловая ловушка: div :not(.a) - это «потомок, не являющийся .a», а не «не потомок .a».</p><p>Гик-нюанс: :is() и :where() - forgiving: невалидный селектор в списке не убивает всё правило, остальные работают (в отличие от обычного списка через запятую, где одна ошибка ломает всё).</p>',
    order: 7,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_css_fundamentals_007',
    topicId: 'topic_css_fundamentals',
    question: 'Единицы измерения CSS: px, em, rem, %, vh/vw, ch — когда что?',
    answer:
      '<p>Единицы делятся на абсолютные (фиксированные) и относительные (зависят от чего-то). Ключ - понимать, относительно ЧЕГО.</p><p>Абсолютные:</p><ul><li>px - CSS-пиксель (на retina не равен физическому). Фиксированный. Хорош для немасштабируемого (бордеры, тени). Минус: не реагирует на пользовательскую настройку размера шрифта - плохо для доступности при font-size</li></ul><p>Относительные шрифтовые:</p><ul><li>em - относительно font-size текущего элемента (а для самого font-size - относительно родителя). Ловушка: вложенное умножение - 1.5em внутри 1.5em накапливается (20 → 30 → 45px). Полезно для отступов, масштабируемых со шрифтом компонента</li><li>rem - относительно font-size корня &lt;html&gt; (обычно 16px). НЕ накапливается, предсказуемо. Стандарт для типографики и отступов: меняешь font-size на html - масштабируется всё, уважает настройку доступности</li></ul><p>Относительные к контейнеру/экрану:</p><ul><li>% - относительно ЧЕГО зависит от свойства: width/left - от ширины родителя; height - от высоты родителя (родителю нужна заданная высота); padding/margin - ВСЕГДА от ширины родителя (даже вертикальные - padding-top: 50% от ширины, так делают квадраты); font-size - от шрифта родителя</li><li>vw/vh - 1% ширины/высоты viewport. Мобильная ловушка: 100vh включает область под адресной строкой и «прыгает» - для этого dvh/svh/lvh</li><li>vmin/vmax - 1% меньшей/большей стороны viewport</li></ul><p>Специальные:</p><ul><li>ch - ширина символа «0» шрифта. max-width: 65ch ограничивает строку ~65 символами для читаемости</li><li>fr - доля свободного места в Grid (только там)</li></ul><p>Выбор: rem - шрифты и отступы (доступность + предсказуемость); em - зависимость от локального шрифта; px - немасштабируемое; %/vw/vh - раскладка относительно родителя/экрана; ch - ширина текстовых колонок.</p>',
    order: 8,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_css_fundamentals_008',
    topicId: 'topic_css_fundamentals',
    question: 'Что делают calc(), clamp(), min(), max()?',
    answer:
      '<p>CSS-функции для вычислений прямо в стилях, без препроцессоров и JS. Умеют смешивать разные единицы - в этом их сила.</p><p>calc(выражение) - арифметика (+, -, *, /). Главное - смешивание единиц: width: calc(100% - 40px), height: calc(100vh - 60px). Ловушки: вокруг + и - ОБЯЗАТЕЛЬНЫ пробелы (calc(100%-40px) не работает); можно вкладывать и использовать var(); * и / требуют хотя бы один операнд-число.</p><p>min(a, b, ...) - наименьшее из значений. Парадокс: задаёт МАКСИМАЛЬНУЮ границу («не больше чем»). width: min(100%, 600px) - не шире 600px, но ужимается на узких экранах. Фактически адаптивный max-width.</p><p>max(a, b, ...) - наибольшее, задаёт МИНИМАЛЬНУЮ границу («не меньше чем»). font-size: max(16px, 1vw) - не мельче 16px, растёт на больших экранах.</p><p>clamp(min, preferred, max) - «зажим»: берёт preferred, не выходя за min и max. Эквивалент max(min, min(preferred, max)). font-size: clamp(1rem, 2.5vw, 2rem) - основа fluid typography: текст плавно масштабируется по ширине экрана без медиазапросов. Часто заменяет целые наборы брейкпоинтов.</p><p>Все четыре вкладываются друг в друга и принимают var() - декларативная адаптивность без JS. Значения пересчитываются в реальном времени при изменении вьюпорта/родителя, а не разово.</p>',
    order: 9,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_css_fundamentals_09',
    topicId: 'topic_css_fundamentals',
    question:
      'Что такое CSS-переменные (custom properties)? Чем отличаются от переменных препроцессора?',
    answer:
      '<p>CSS-переменные (правильно - custom properties) - свойства с префиксом --, читаемые через var(): :root { --main-color: #333 } и color: var(--main-color). Второй аргумент var(--x, 10px) - запасное значение, если переменная не определена.</p><p>Отличия от переменных препроцессора (Sass $color) и почему они мощнее:</p><ul><li>Живут в рантайме, а не только при сборке. Sass-переменная существует лишь на этапе компиляции - в браузер уезжает уже подставленное значение, никаких $ там нет. CSS-переменная существует в браузере: видна в DevTools, меняется на лету</li><li>Каскадируются и наследуются - это обычные свойства. Заданная на элементе, действует на него и потомков, переопределяется глубже: .card { --pad: 8px } и .card.large { --pad: 24px }. Препроцессорная переменная не знает про DOM и каскад</li><li>Меняются из JavaScript: element.style.setProperty("--main-color", "blue") и getComputedStyle(el).getPropertyValue("--gap"). Кастомные свойства доступны ТОЛЬКО через setProperty/getPropertyValue (не через camelCase el.style.--x), так как -- не переводится в camelCase</li><li>Динамическая подстановка: работают с медиазапросами, :hover, calc(var(--x) * 2), реагируют на изменения. Sass так не может - значение застыло при сборке</li></ul><p>Нюансы: значение - строка-токен, подставляемая как есть (var() можно использовать для части значения: margin: var(--gap) 0); регистрозависимы (--Color ≠ --color); невалидное значение даёт initial/наследованное (типизация и дефолт - через @property).</p><p>Итог: CSS-переменные - рантаймовые каскадируемые кастомные свойства, доступные в DevTools и из JS; препроцессорные - подстановка на этапе сборки. Часто используются вместе: Sass для сборочной логики, CSS-переменные для рантайм-темизации.</p>',
    order: 10,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_css_fundamentals_010',
    topicId: 'topic_css_fundamentals',
    question: 'Что такое каскадные слои (@layer)?',
    answer:
      '<p>Каскадные слои (cascade layers) - механизм явного управления приоритетом групп стилей внутри одного происхождения, добавляющий в каскад отдельный этап. Порядок разрешения конфликта: важность → слои → специфичность → порядок. Слои стоят ВЫШЕ специфичности: объявление из более приоритетного слоя победит даже при меньшей специфичности.</p><p>Объявляются через @layer, и порядок объявления задаёт приоритет - позже объявленный слой сильнее: @layer reset, base, components, utilities; (utilities главнее всех). Наполняются: @layer base { a { color: blue } } и @layer components { .link { color: green } }.</p><p>Ключевые свойства:</p><ul><li>Слой бьёт специфичность - это делает @layer заменой !important: «слой утилит всегда главнее» без раздувания специфичности</li><li>Стили ВНЕ слоёв сильнее любых слоёв (считаются как высший слой) - подвох при смешивании слоевых и неслоевых стилей</li><li>Порядок задаётся один раз (@layer reset, base, ...;), наполнять можно потом в любом порядке и по кускам; повторный @layer base { ... } дописывает в существующий слой</li><li>Вложенные слои (@layer framework.base) - для изоляции иерархии библиотек</li><li>!important инвертирует порядок слоёв: среди important-объявлений приоритет слоёв переворачивается (как важность вообще инвертирует приоритеты)</li></ul><p>Зачем: убирает войны специфичности и !important в больших проектах, давая явную иерархию (сброс < база < компоненты < утилиты). Особенно полезно со сторонними библиотеками: оборачиваешь их в низкоприоритетный слой - и свои стили перебивают их без !important.</p>',
    order: 10,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_css_fundamentals_011',
    topicId: 'topic_css_fundamentals',
    question: 'Псевдоклассы: :nth-child vs :nth-of-type, формула an+b, состояния',
    answer:
      '<p>Псевдоклассы (одно двоеточие) выбирают элементы по состоянию или позиции в дереве, без классов в разметке.</p><p>Состояния:</p><ul><li>:hover, :focus, :active. Для ссылок важен порядок LVHA (:link, :visited, :hover, :active)</li><li>:focus-visible - фокус, когда уместно показать обводку (клавиатура, не мышь)</li><li>:focus-within - фокус на элементе ИЛИ любом его потомке</li><li>Формы: :checked, :disabled, :enabled, :required, :valid, :invalid, :read-only, :placeholder-shown</li></ul><p>Структурные:</p><ul><li>:first-child / :last-child / :only-child</li><li>:nth-child(n) / :nth-last-child(n) - n-й ребёнок с начала/конца</li><li>:first-of-type / :nth-of-type(n) / :only-of-type - то же среди элементов своего тега</li><li>:empty - без детей и текста</li></ul><p>Главный подвох - :nth-child vs :nth-of-type (среди кого считается позиция):</p><ul><li>:nth-child(2) - второй ребёнок родителя среди ВСЕХ детей любых тегов, и он должен быть нужного тега</li><li>:nth-of-type(2) - второй элемент ЭТОГО тега, игнорируя чужие теги</li></ul><p>Пример: при &lt;h2&gt; + двух &lt;p&gt; селектор p:nth-child(2) выберет ПЕРВЫЙ абзац (p стоит вторым среди всех детей), а p:nth-child(1) - ничего (первый ребёнок h2). А p:nth-of-type(1) выберет первый абзац. Правило: смешанные теги - nth-of-type; nth-child - когда дети однотипны.</p><p>Формула an+b в :nth-child(): n пробегает 0,1,2... 2n → чётные (алиас even); 2n+1 → нечётные (odd); 3n+1 → 1,4,7; :nth-child(3) - ровно третий; -n+3 - первые три; n+4 - начиная с четвёртого. Современное: :nth-child(2n of .visible) - каждый второй среди отфильтрованных селектором.</p>',
    order: 11,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_css_fundamentals_012',
    topicId: 'topic_css_fundamentals',
    question: 'Углублённо: initial, inherit, unset, revert (и revert-layer)',
    answer:
      '<p>Глобальные ключевые слова, применимые к любому свойству. Чтобы понять различия, нужны три источника значения: (1) начальное значение по спецификации - дефолт свойства из стандарта, НЕ учитывает браузер (для display это inline); (2) стили браузера (user-agent) - что применяет сам браузер (&lt;div&gt; получает display: block); (3) значение родителя - для наследования.</p><ul><li>inherit - взять значение от родителя принудительно, даже для ненаследуемого свойства (border: inherit)</li><li>initial - сброс к начальному значению по СПЕЦИФИКАЦИИ (источник 1). Подвох: display: initial для &lt;div&gt; даёт inline (дефолт свойства), а НЕ block, потому что block - это стиль браузера, который initial игнорирует</li><li>unset - умный сброс: для наследуемого свойства как inherit, для ненаследуемого как initial. «Будто свойству ничего не задавали»</li><li>revert - откат к стилям БРАУЗЕРА (источник 2), отменяя авторские. display: revert для &lt;div&gt; вернёт block (браузерный дефолт), в отличие от initial (inline)</li></ul><p>Сводно для display у &lt;div&gt; с авторским flex: inherit → как у родителя; initial → inline (дефолт спеки, сюрприз); unset → inline (display не наследуется → как initial); revert → block (браузерный дефолт, обычно то, что нужно).</p><p>revert-layer - откат к значению из предыдущего каскадного слоя (связь с @layer), а не полностью к браузерному; нужен внутри слоёв.</p><p>Вывод: чтобы убрать авторский стиль и вернуть нормальный вид - почти всегда revert, а не initial (тот даёт неожиданные голые дефолты). unset - универсальный сброс «как будто не трогал».</p>',
    order: 12,
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 'q_css_fundamentals_013',
    topicId: 'topic_css_fundamentals',
    question: 'Как браузер обрабатывает невалидный CSS? Устойчивость парсера, fallback, @supports',
    answer:
      '<p>CSS устойчив к ошибкам (fault-tolerant): встретив непонятное, браузер не падает и не выкидывает файл, а молча пропускает и продолжает. На этом строятся приёмы совместимости.</p><p>Как игнорируется невалидное:</p><ul><li>Непонятное свойство - пропускается только оно, остальные в блоке работают (colr выкинут, color и width применяются)</li><li>Непонятное значение у известного свойства - объявление отбрасывается, свойство сохраняет прежнее значение (width: bananas игнорируется)</li><li>Невалидный селектор - в списке через запятую одна ошибка убивает ВСЁ правило; это чинят forgiving-псевдоклассы :is()/:where()</li><li>Неизвестное @-правило пропускается целиком</li></ul><p>Fallback через дублирование - следствие устойчивости. Пишут свойство дважды: сначала запасное, потом современное; не понявший второе оставит первое, понявший перезапишет по порядку каскада. Пример: background: #333; затем background: color-mix(...). Классика - color: #333; color: var(--c).</p><p>@supports (feature queries) - явная проверка поддержки: @supports (display: grid) { ... }, @supports not (backdrop-filter: blur(4px)) { запасной вариант }. Комбинируется and/or/not, проверяет селекторы: @supports selector(:has(a)). В отличие от дублирования даёт явное ветвление «если поддерживается - так, иначе - эдак».</p><p>Вендорные префиксы (-webkit-, -moz-) - историческое проявление той же устойчивости (неизвестный префикс пропускался); сейчас проставляются автопрефиксером.</p><p>Связь: это CSS-аналог того, как HTML-парсер чинит кривую разметку - обе спецификации предпочитают показать что-то, а не упасть.</p>',
    order: 13,
    createdAt: NOW,
    updatedAt: NOW,
  },
];
