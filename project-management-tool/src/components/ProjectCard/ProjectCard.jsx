import React, { useState } from 'react';
import './ProjectCard.css';

export default function ProjectCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`project-card ${isExpanded ? 'expanded' : ''}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <h3>{project.name}</h3>
      {isExpanded && (
        <div className="project-details">
          <p>Tasks: {project.tasks.length}</p>
          <p>Members: {project.members.join(', ')}</p>
        </div>
      )}
    </div>
  );
}