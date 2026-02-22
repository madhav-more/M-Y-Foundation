import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, BookOpen, Send, CheckCircle2 } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Card from '../components/Card';
import Button from '../components/Button';

const JoinNow = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <PageTransition>
            <section className="py-24 bg-white dark:bg-slate-950 min-h-[80vh] flex items-center">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left side info */}
                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="space-y-6"
                            >
                                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
                                    Start Your <span className="text-blue-600">Journey</span> With Us
                                </h1>
                                <p className="text-lg text-slate-600 dark:text-slate-400">
                                    Whether you're a student seeking guidance or a professional looking to contribute, M & Y Foundation is the perfect platform for growth.
                                </p>
                            </motion.div>

                            <div className="space-y-4">
                                {[
                                    "Access to free training modules",
                                    "Expert-led career mentorship",
                                    "Industry networking opportunities",
                                    "Skill certification programs"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
                                        <CheckCircle2 size={20} className="text-green-500" />
                                        <span className="font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="p-8 bg-blue-50 dark:bg-blue-900/10 rounded-3xl border border-blue-100 dark:border-blue-800">
                                <div className="font-bold text-blue-600 dark:text-blue-400 mb-2 uppercase tracking-widest text-xs">Join our community</div>
                                <div className="text-2xl font-extrabold text-slate-900 dark:text-white">Over 50,000+ members already joined!</div>
                            </div>
                        </div>

                        {/* Right side form */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Card className="p-8 md:p-10 shadow-2xl relative overflow-hidden">
                                {submitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-12 space-y-6"
                                    >
                                        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 text-green-600 rounded-full flex items-center justify-center mx-auto">
                                            <CheckCircle2 size={48} />
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-2xl font-bold dark:text-white">Registration Successful!</h3>
                                            <p className="text-slate-600 dark:text-slate-400">Our team will contact you within 24-48 hours.</p>
                                        </div>
                                        <Button onClick={() => setSubmitted(false)} type="secondary">Register Another</Button>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="space-y-2 text-center mb-8">
                                            <h3 className="text-2xl font-bold dark:text-white">Enrollment Form</h3>
                                            <p className="text-sm text-slate-500 dark:text-slate-400">Fill in your details to get started.</p>
                                        </div>

                                        <div className="space-y-4">
                                            {/* Full Name */}
                                            <div className="relative">
                                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 px-1">Full Name</label>
                                                <div className="relative">
                                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                                    <input
                                                        required
                                                        type="text"
                                                        placeholder="John Doe"
                                                        className="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-blue-500/50 outline-none transition-all dark:text-white"
                                                    />
                                                </div>
                                            </div>

                                            {/* Email */}
                                            <div className="relative">
                                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 px-1">Email Address</label>
                                                <div className="relative">
                                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                                    <input
                                                        required
                                                        type="email"
                                                        placeholder="john@example.com"
                                                        className="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-blue-500/50 outline-none transition-all dark:text-white"
                                                    />
                                                </div>
                                            </div>

                                            {/* Phone */}
                                            <div className="relative">
                                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 px-1">Phone Number</label>
                                                <div className="relative">
                                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                                    <input
                                                        required
                                                        type="tel"
                                                        placeholder="+91 00000 00000"
                                                        className="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-blue-500/50 outline-none transition-all dark:text-white"
                                                    />
                                                </div>
                                            </div>

                                            {/* Interest */}
                                            <div className="relative">
                                                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 px-1">Interested In</label>
                                                <div className="relative">
                                                    <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                                    <select className="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-blue-500/50 outline-none transition-all dark:text-white appearance-none">
                                                        <option>Student Training Program</option>
                                                        <option>Career Guidance Session</option>
                                                        <option>Industrial Development</option>
                                                        <option>Volunteering</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <Button className="w-full" icon={Send}>Submit Enrollment</Button>
                                    </form>
                                )}
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>
        </PageTransition>
    );
};

export default JoinNow;
