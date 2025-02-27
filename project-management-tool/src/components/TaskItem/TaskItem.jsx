// src/components/TaskItem/TaskItem.jsx
import React from 'react';
import './TaskItem.css';

// src/components/TaskItem/TaskItem.jsx
export default function TaskItem({ task }) {
    return (
      <div className="task-item">
        <h3>{task.title}</h3>
        <p>Status: {task.status}</p>
      </div>
    );
  }