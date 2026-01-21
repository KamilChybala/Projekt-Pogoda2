import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const GlassPanel = ({ children, className, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={twMerge(
                'bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-6 shadow-lg text-white transition-all duration-300',
                className
            )}
        >
            {children}
        </div>
    );
};

export default GlassPanel;
