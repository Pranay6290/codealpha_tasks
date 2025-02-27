import { Link } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h3>Projects</h3>
      <Link to="/create-project" className="new-project-btn">
        + New Project
      </Link>
      <div className="project-list">
        {/* Projects will be dynamically populated */}
      </div>
    </div>
  );
}