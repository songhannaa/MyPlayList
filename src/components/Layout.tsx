import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: ReactNode; 
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <div style={{ display: 'flex' }}>
      <Sidebar /> 
      <main style={{ marginLeft: '250px', padding: '20px', flex: 1 }}>
        {children} 
      </main>
    </div>
    </div>
  );
};

export default Layout;
