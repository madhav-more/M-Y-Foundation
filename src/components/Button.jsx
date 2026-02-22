import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, type = 'primary', className = '', icon: Icon }) => {
    const baseStyles = "px-8 py-3.5 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 active:scale-95";

    const variants = {
        primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-600/40",
        secondary: "bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500",
        ghost: "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-300",
    };

    return (
        <motion.button
            whileHover={{ y: -2 }}
            onClick={onClick}
            className={`${baseStyles} ${variants[type]} ${className}`}
        >
            <span>{children}</span>
            {Icon && <Icon size={18} />}
        </motion.button>
    );
};

export default Button;
