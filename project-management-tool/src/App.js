import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SocketProvider } from './utils/socketContext';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import Profile from './pages/Profile/Profile';
import Messages from './pages/Messages/Messages';
import ActivityFeed from './components/ActivityFeed/ActivityFeed';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <SocketProvider>
      <div className={`app-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true
          }}
        >
          <Navbar />
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="theme-toggle"
          >
            {darkMode ? '🌞 Light' : '🌙 Dark'}
          </button>
          
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/project/:id" element={<ProjectPage />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/messages" element={<Messages />} />
            </Routes>
          </main>
          
          <ActivityFeed />
        </BrowserRouter>
      </div>
    </SocketProvider>
  );
}

export default App;