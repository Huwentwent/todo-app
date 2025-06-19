import React from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import TodoForm from './components/TodoForm';
import FilterTabs from './components/FilterTabs';
import TodoList from './components/TodoList';
import './App.css';

const FILTER_FUNCS = {
  All:      () => true,
  Active:   t => !t.done,
  Completed: t => t.done
};

function App() {
  const [todos, setTodos]     = useLocalStorage('todos', []);
  const [filter, setFilter]   = useLocalStorage('filter', 'All');

  const addTodo = text =>
    setTodos([...todos, { id: Date.now(), text, done: false }]);

  const toggleTodo = id =>
    setTodos(todos.map(t =>
      t.id === id ? { ...t, done: !t.done } : t
    ));

  const deleteTodo = id =>
    setTodos(todos.filter(t => t.id !== id));

  const visible = todos.filter(FILTER_FUNCS[filter]);

  return (
    <div className="container">
      <h1>React Todo List</h1>
      <TodoForm onAdd={addTodo} />
      <FilterTabs filter={filter} onChange={setFilter} />
      <TodoList todos={visible} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
}

export default App;