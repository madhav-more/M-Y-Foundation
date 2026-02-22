import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hoverEffect = true }) => {
    return (
        <motion.div
            whileHover={hoverEffect ? { y: -5, transition: { duration: 0.2 } } : {}}
            className={`
        relative overflow-hidden
        bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl
        border border-slate-200/50 dark:border-slate-800/50
        rounded-3xl p-8 shadow-sm hover:shadow-xl
        transition-shadow duration-300
        ${className}
      `}
        >
            {/* Subtle light effect top edge */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent"></div>

            {children}
        </motion.div>
    );
};

export default Card;
