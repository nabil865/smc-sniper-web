import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { useStore } from '../../store';

const MainLayout: React.FC = ({ children }) => {
    const { state } = useStore();

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Header />
                <main className="p-4">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default MainLayout;