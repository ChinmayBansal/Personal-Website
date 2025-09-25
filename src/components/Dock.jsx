import { useState, useRef, useEffect } from 'react';
import { VscHome, VscDeviceCamera, VscFile } from 'react-icons/vsc';
import './Dock.css';

const DockItem = ({ icon, label, isActive, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className={`dock-item ${isActive ? 'active' : ''}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="dock-item-icon">
        {icon}
      </div>
      <span className="dock-item-label">{label}</span>
    </div>
  );
};

const Dock = ({ activeSection, setActiveSection }) => {

  const dockItems = [
    {
      id: 'about',
      icon: <VscHome size={18} />,
      label: 'About Me'
    },
    {
      id: 'photos',
      icon: <VscDeviceCamera size={18} />,
      label: 'Photos'
    },
    {
      id: 'resume',
      icon: <VscFile size={18} />,
      label: 'Resume'
    }
  ];

  return (
    <nav className="dock-container">
      <div className="dock">
        {dockItems.map((item) => (
          <DockItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            isActive={activeSection === item.id}
            onClick={() => setActiveSection(item.id)}
            onMouseEnter={() => {}}
            onMouseLeave={() => {}}
          />
        ))}
      </div>
    </nav>
  );
};

export default Dock;