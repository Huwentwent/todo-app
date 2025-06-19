import React from 'react';

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={`todo-item ${todo.done ? 'done' : ''}`}>
      <span className="text" onClick={() => onToggle(todo.id)}>
        {todo.text}
      </span>
      <button
        className="delete-button"
        onClick={() => onDelete(todo.id)}
        aria-label="Delete todo"
      >
        ×
      </button>
    </li>
  );
}