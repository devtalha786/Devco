import React from 'react';
import { SideBar } from './SideBar';
import Header from './Header';

const MainLayout = ({ children }) => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh',overflow:'hidden' }}>
    {/* Sidebar */}
    <div style={{ flex: '0 0 20%', borderRight: '0.97px solid #23263E' }}>
      <SideBar />
    </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <Header />

        {/* Children */}
        <div className="" style={{ maxWidth: '100%', overflow: 'none' }}>
          <div
            
            // style={{ paddingLeft: '20px', paddingRight: '20px', overflow: 'hidden' }}
          >
            <div
              className=""
              style={{ maxHeight: 'calc(100vh - 70px)', overflowY: 'scroll' }}
            >
            <div style={{ padding: '10px 30px' }}>{children}</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
