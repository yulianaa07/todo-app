const { addTask, deleteTask, toggleTask, filterTasks, countDone } = require('../taskUtils');

// Тести для addTask
test('додає нову задачу до списку', () => {
  const tasks = [];
  const result = addTask(tasks, 'Нова задача', 'work');
  expect(result).toHaveLength(1);
  expect(result[0].text).toBe('Нова задача');
});

test('не додає задачу з порожнім текстом', () => {
  const tasks = [];
  const result = addTask(tasks, '', 'work');
  expect(result).toHaveLength(0);
});

test('не додає задачу з пробілами', () => {
  const tasks = [];
  const result = addTask(tasks, '   ', 'work');
  expect(result).toHaveLength(0);
});

// Тести для deleteTask
test('видаляє задачу за id', () => {
  const tasks = [{ id: 1, text: 'Задача', tag: 'work', done: false }];
  const result = deleteTask(tasks, 1);
  expect(result).toHaveLength(0);
});

test('не видаляє задачу з неіснуючим id', () => {
  const tasks = [{ id: 1, text: 'Задача', tag: 'work', done: false }];
  const result = deleteTask(tasks, 99);
  expect(result).toHaveLength(1);
});

// Тести для toggleTask
test('позначає задачу як виконану', () => {
  const tasks = [{ id: 1, text: 'Задача', tag: 'work', done: false }];
  const result = toggleTask(tasks, 1);
  expect(result[0].done).toBe(true);
});

// Тести для filterTasks
test('фільтр "active" повертає лише невиконані задачі', () => {
  const tasks = [
    { id: 1, text: 'Задача 1', done: false },
    { id: 2, text: 'Задача 2', done: true }
  ];
  const result = filterTasks(tasks, 'active');
  expect(result).toHaveLength(1);
});

test('фільтр "done" повертає лише виконані задачі', () => {
  const tasks = [
    { id: 1, text: 'Задача 1', done: false },
    { id: 2, text: 'Задача 2', done: true }
  ];
  const result = filterTasks(tasks, 'done');
  expect(result).toHaveLength(1);
});

// Тест для countDone
test('рахує кількість виконаних задач', () => {
  const tasks = [
    { id: 1, done: true },
    { id: 2, done: false },
    { id: 3, done: true }
  ];
  expect(countDone(tasks)).toBe(2);
});