import React from 'react';
import { NavLink } from 'react-router-dom';
import { Star, Home } from 'lucide-react';
import { clsx } from 'clsx';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen font-sans text-white">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 p-4 flex justify-between items-center max-w-7xl mx-auto w-full">
                <div className="text-xl font-bold tracking-wider opacity-90">
                    POGODYNKA
                </div>
                <div className="flex gap-4">
                    <NavLink
                        to="/"
                        className={({ isActive }) => clsx(
                            "p-3 rounded-full transition-all duration-300 hover:bg-white/20 border border-transparent",
                            isActive && "bg-white/20 backdrop-blur-md border-white/30 shadow-md"
                        )}
                    >
                        <Home className="w-6 h-6" />
                    </NavLink>
                    <NavLink
                        to="/favorites"
                        className={({ isActive }) => clsx(
                            "p-3 rounded-full transition-all duration-300 hover:bg-white/20 border border-transparent",
                            isActive && "bg-white/20 backdrop-blur-md border-white/30 shadow-md"
                        )}
                    >
                        <Star className="w-6 h-6" />
                    </NavLink>
                </div>
            </nav>

            {/* Main Content */}
            <main className="pt-24 px-4 pb-12 w-full max-w-5xl mx-auto">
                {children}
            </main>
        </div>
    );
};

export default Layout;
