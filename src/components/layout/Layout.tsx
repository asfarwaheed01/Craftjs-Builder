import React, { ReactNode } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className="min-h-screen">
            <div className='navbar'>
                <Navbar />
                <Header />
            </div>
            <div className="flex h-full">
                <div className='sidebar'>
                    <Sidebar />
                </div>
                <div className="relative flex flex-1 min-h-[100vh] flex-col ml-16 mt-24 overflow-y-auto">
                    <main>
                        <div className="mx-auto max-w-screen-2xl px-2 py-4">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default DefaultLayout;

