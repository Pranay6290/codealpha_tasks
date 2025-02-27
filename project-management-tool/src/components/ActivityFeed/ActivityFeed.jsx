import { useEffect, useState } from 'react';
import { useSocket } from '../../utils/socketContext';
import { FiClock, FiMessageSquare, FiUserPlus } from 'react-icons/fi';

export default function ActivityFeed() {
  const [activities, setActivities] = useState([]);
  const socket = useSocket();

  useEffect(() => {
    if (!socket) return;

    const handler = (activity) => {
      setActivities(prev => [activity, ...prev.slice(0, 9)]);
    };

    socket.on('activity-update', handler);
    return () => socket.off('activity-update', handler);
  }, [socket]);

  const getIcon = (type) => {
    switch(type) {
      case 'comment': return <FiMessageSquare />;
      case 'task': return <FiClock />;
      case 'member': return <FiUserPlus />;
      default: return <FiClock />;
    }
  };

  return (
    <div className="activity-feed">
      <h3>Recent Activity</h3>
      {activities.map((activity, index) => (
        <div key={index} className="activity-item">
          <div className="activity-icon">
            {getIcon(activity.type)}
          </div>
          <div className="activity-content">
            <strong>{activity.user}</strong> {activity.text}
            <small>{new Date(activity.timestamp).toLocaleTimeString()}</small>
          </div>
        </div>
      ))}
    </div>
  );
}