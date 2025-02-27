import React, { useState, useEffect } from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './Dashboard.css';

export default function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [newProjectName, setNewProjectName] = useState('');

  // Mock data for now
  useEffect(() => {
    const mockProjects = [
      {
        id: 1,
        name: 'Website Redesign',
        tasks: [{ id: 1, title: 'Create wireframes' }],
        members: ['John Doe', 'Jane Smith'],
      },
      {
        id: 2,
        name: 'Mobile App Development',
        tasks: [{ id: 1, title: 'Design UI' }],
        members: ['Alice', 'Bob'],
      },
    ];
    setProjects(mockProjects);
  }, []);

  const handleCreateProject = () => {
    if (newProjectName.trim()) {
      const newProject = {
        id: Date.now(),
        name: newProjectName,
        tasks: [],
        members: [],
      };
      setProjects([...projects, newProject]);
      setNewProjectName('');
    }
  };

  return (
    <div className="dashboard">
      <h2>Your Projects</h2>
      <div className="project-creation">
        <input
          type="text"
          placeholder="New project name"
          value={newProjectName}
          onChange={(e) => setNewProjectName(e.target.value)}
        />
        <button onClick={handleCreateProject}>Create Project</button>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}