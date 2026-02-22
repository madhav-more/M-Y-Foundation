import React from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from '../assets/logo.jpeg';

const Footer = () => {
    const currentYear = 2026;

    return (
        <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand & Mission */}
                    <div className="col-span-1 md:col-span-2 space-y-6">
                        <NavLink to="/" className="flex items-center space-x-3">
                            <img src={logo} alt="M & Y Logo" className="h-10 w-auto rounded-lg" />
                            <div className="flex flex-col">
                                <span className="text-xl font-bold text-slate-900 dark:text-white leading-none">M & Y</span>
                                <span className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold mt-0.5">Foundation</span>
                            </div>
                        </NavLink>
                        <p className="text-slate-600 dark:text-slate-400 max-w-sm text-sm leading-relaxed">
                            M & Y Foundation is a Section 8 Company registered under the Companies Act, 2013, working as a not-for-profit organization with fully charitable objectives.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="p-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500 transition-all duration-300"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white">Quick Links</h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About Us', path: '/about' },
                                { name: 'Our Services', path: '/services' },
                                { name: 'Join Now', path: '/join' },
                                { name: 'Donate Now', path: '/donate' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <NavLink
                                        to={link.path}
                                        className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white">Contact Info</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-sm text-slate-600 dark:text-slate-400">
                                <MapPin size={18} className="text-blue-600 shrink-0 mt-1" />
                                <div className="space-y-1">
                                    <p>M & Y Foundation, Ramgiri Nagar,</p>
                                    <p>Ring Road Latur, 413531</p>
                                </div>
                            </li>
                            <li className="flex items-start space-x-3 text-sm text-slate-600 dark:text-slate-400">
                                <MapPin size={18} className="text-blue-600 shrink-0 mt-1" />
                                <div className="space-y-1">
                                    <p>Kohinoor Sapphire 2, Tower-F,</p>
                                    <p>Tathawade, Pune - 411033</p>
                                </div>
                            </li>
                            <li className="flex items-center space-x-3 text-sm text-slate-600 dark:text-slate-400">
                                <Phone size={18} className="text-blue-600 shrink-0" />
                                <div className="space-x-2">
                                    <a href="tel:+918007794159" className="hover:text-blue-600 transition-colors">(+91) 8007794159</a>
                                    <span>/</span>
                                    <a href="tel:+9175175227050" className="hover:text-blue-600 transition-colors">(+91) 75175227050</a>
                                </div>
                            </li>
                            <li className="flex items-center space-x-3 text-sm text-slate-600 dark:text-slate-400">
                                <Mail size={18} className="text-blue-600 shrink-0" />
                                <a href="mailto:info@mandyfoundation.org" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    info@mandyfoundation.org
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-sm text-slate-500 dark:text-slate-500">
                        Copyright © {currentYear} All Rights Reserved by M & Y Foundation
                    </p>
                    <div className="flex space-x-6 text-sm text-slate-500 dark:text-slate-500">
                        <NavLink to="/donate" className="text-blue-600 hover:text-blue-700 font-bold">
                            Donate Now
                        </NavLink>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
