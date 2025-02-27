// src/pages/ProjectPage/ProjectPage.jsx
import React from 'react';
import TaskItem from '../../components/TaskItem/TaskItem';
import CommentSection from '../../components/CommentSection/CommentSection';
import './ProjectPage.css';

export default function ProjectPage() {
  const tasks = [
    { id: 1, title: 'Design Homepage', status: 'In Progress' }
  ];

  return (
    <div className="project-page">
      <h1>Project Details</h1>
      <div className="tasks-section">
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
      <CommentSection />
    </div>
  );
}