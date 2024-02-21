import React from 'react';
import { SideBar } from './SideBar';
import Header from './Header';

const MainLayout = ({ children }) => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', overflow: 'hidden' }}>
      {/* Sidebar */}
      <div style={{  borderRight: '0.97px solid #23263E', overflowY: 'auto' }}>
        <SideBar />
      </div>

      {/* Main Content */}
      <div className="flex-1" style={{ overflowY: 'auto' }}>
        {/* Header */}
        <Header />

        {/* Children */}
        <div clas style={{ padding: '10px 30px', maxHeight: 'calc(98vh - 100px)', overflowY: 'auto' }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
