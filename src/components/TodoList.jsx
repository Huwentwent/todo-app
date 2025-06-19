import React from 'react';
import TodoItem from './TodoItems';

export default function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul className="todo-list">
      {todos.map(t => (
        <TodoItem
          key={t.id}
          todo={t}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}