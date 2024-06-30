import React from 'react';

interface AppLayoutProps {
    children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
            <header className="bg-white shadow-md">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        <h1 className="text-3xl font-extrabold text-primary-600">社内文書チャットボット</h1>
                        <nav>
                            <ul className="flex space-x-4">
                                <li><a href="#" className="text-neutral-600 hover:text-primary-600 transition duration-200">Home</a></li>
                                <li><a href="#" className="text-neutral-600 hover:text-primary-600 transition duration-200">About</a></li>
                                <li><a href="#" className="text-neutral-600 hover:text-primary-600 transition duration-200">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {children}
            </main>
        </div>
    );
};

export default AppLayout;
