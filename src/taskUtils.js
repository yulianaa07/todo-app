// Бізнес-логіка TaskFlow

// Додавання задачі
function addTask(tasks, text, tag) {
  if (!text || text.trim() === '') return tasks;
  return [...tasks, { id: Date.now(), text: text.trim(), tag, done: false }];
}

// Видалення задачі
function deleteTask(tasks, id) {
  return tasks.filter(t => t.id !== id);
}

// Позначення задачі виконаною
function toggleTask(tasks, id) {
  return tasks.map(t => t.id === id ? { ...t, done: !t.done } : t);
}

// Фільтрація задач
function filterTasks(tasks, filter) {
  if (filter === 'active') return tasks.filter(t => !t.done);
  if (filter === 'done') return tasks.filter(t => t.done);
  return tasks;
}

function countDone(tasks) {
  return tasks.filter(t => t.done).length;
}

module.exports = { addTask, deleteTask, toggleTask, filterTasks, countDone };