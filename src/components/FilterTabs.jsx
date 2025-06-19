import React from 'react';

const FILTERS = ['All', 'Active', 'Completed'];

export default function FilterTabs({ filter, onChange }) {
  return (
    <div className="filter-tabs">
      {FILTERS.map(f => (
        <button
          key={f}
          className={`filter-button ${filter === f ? 'active' : ''}`}
          onClick={() => onChange(f)}
        >
          {f}
        </button>
      ))}
    </div>
  );
}