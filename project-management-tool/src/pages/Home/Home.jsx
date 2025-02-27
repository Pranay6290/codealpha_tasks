// src/pages/Home/Home.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Home.css';

const features = [
  {
    title: "Real-time Collaboration",
    icon: "🤝",
    description: "Work together with your team in real-time on projects and tasks"
  },
  {
    title: "Task Management",
    icon: "✅",
    description: "Create, assign, and track tasks with intuitive drag-and-drop"
  },
  {
    title: "Progress Tracking",
    icon: "📈",
    description: "Visualize project progress with interactive charts and timelines"
  }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('tasks');

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h1>Transform Your Project Management</h1>
          <p className="hero-subtitle">Collaborate, organize, and succeed with our all-in-one project management solution</p>
          <div className="cta-buttons">
            <Link to="/dashboard" className="cta-primary">Get Started</Link>
            <Link to="/demo" className="cta-secondary">Watch Demo</Link>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="demo-section">
        <h2>See It in Action</h2>
        <div className="demo-tabs">
          <button 
            className={`tab ${activeTab === 'tasks' ? 'active' : ''}`}
            onClick={() => setActiveTab('tasks')}
          >
            Tasks
          </button>
          <button 
            className={`tab ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            Projects
          </button>
          <button 
            className={`tab ${activeTab === 'activity' ? 'active' : ''}`}
            onClick={() => setActiveTab('activity')}
          >
            Activity
          </button>
        </div>
        
        <div className="demo-content">
          {activeTab === 'tasks' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="task-preview"
            >
              <div className="task-item">
                <span>✓</span>
                <p>Design homepage layout</p>
                <div className="task-meta">
                  <span>Due: Tomorrow</span>
                  <span>Assignee: Sarah</span>
                </div>
              </div>
              {/* Add more mock tasks */}
            </motion.div>
          )}
          
          {/* Add content for other tabs */}
        </div>
      </section>

      {/* Footer */}
      <footer className="main-footer">
        <p>© 2024 ProjectFlow. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy</Link>
        </div>
      </footer>
    </div>
  );
}