import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Briefcase, Target, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Card from '../components/Card';

const About = () => {
    const initiatives = [
        { icon: GraduationCap, title: "Free Training Programs", desc: "Equipping students with essential skills for the modern workforce." },
        { icon: Users, title: "Seminars", desc: "Expert-led sessions in rural colleges to bridge information gaps." },
        { icon: Briefcase, title: "Career Guidance", desc: "Transitioning from academic life to professional excellence." },
    ];

    const missionPoints = [
        "Offering free training and seminars in rural colleges to enhance knowledge and skills",
        "Providing career guidance and Training & Placement (T&P) programs",
        "Strengthening organizations through management and workforce development",
        "Working toward holistic nationwide growth and economic empowerment"
    ];

    const beliefs = [
        { title: "Knowledge", text: "Knowledge opens doors", color: "blue" },
        { title: "Skills", text: "Skills create opportunities", color: "indigo" },
        { title: "Guidance", text: "Guidance accelerates progress", color: "violet" },
    ];

    return (
        <PageTransition>
            {/* Hero Section */}
            <section className="relative py-24 bg-white dark:bg-slate-950 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8"
                        >
                            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">
                                M & Y Foundation: <span className="text-blue-600">Empowering India</span>
                            </h1>
                            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                                M & Y Foundation is a dedicated organization committed to empowering students and professionals across India. We work extensively in rural and semi-urban areas to bridge the gap between education and employment.
                            </p>
                            <div className="space-y-4">
                                <p className="text-lg text-slate-600 dark:text-slate-400">
                                    Beyond students, we also support sick industries and organizations by offering:
                                </p>
                                <ul className="grid sm:grid-cols-2 gap-4">
                                    <li className="flex items-center space-x-3 p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                                        <ShieldCheck className="text-blue-600 shrink-0" size={24} />
                                        <span className="font-semibold text-slate-700 dark:text-slate-200">Management Development</span>
                                    </li>
                                    <li className="flex items-center space-x-3 p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                                        <Heart className="text-blue-600 shrink-0" size={24} />
                                        <span className="font-semibold text-slate-700 dark:text-slate-200">Skill Development</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
                                    alt="Team Collaboration"
                                    className="w-full h-auto"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Initiatives */}
            <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold dark:text-white mb-4">Our Initiatives</h2>
                        <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {initiatives.map((item, idx) => (
                            <Card key={idx} className="text-center">
                                <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold dark:text-white mb-3">{item.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Mission */}
            <section className="py-24 bg-white dark:bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-slate-900 rounded-[48px] overflow-hidden relative p-8 md:p-20 text-white">
                        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
                            <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500 rounded-full blur-[100px]"></div>
                            <div className="absolute bottom-10 right-20 w-64 h-64 bg-indigo-500 rounded-full blur-[100px]"></div>
                        </div>

                        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="flex items-center space-x-2 text-blue-400 font-bold uppercase tracking-widest text-sm">
                                    <Target size={20} />
                                    <span>Our Mission</span>
                                </div>
                                <h2 className="text-4xl font-extrabold tracking-tight">Driving Holistic Nationwide Growth</h2>
                                <p className="text-lg text-slate-400">
                                    We aim to create meaningful opportunities for growth and development through strategic education and industrial support.
                                </p>
                            </div>
                            <div className="space-y-6">
                                {missionPoints.map((point, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-start space-x-4 p-6 bg-white/5 rounded-3xl border border-white/10"
                                    >
                                        <div className="mt-1 p-1 bg-blue-500/20 text-blue-400 rounded-lg">
                                            <ArrowRight size={18} />
                                        </div>
                                        <span className="text-slate-200 font-medium leading-relaxed">{point}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Belief */}
            <section className="py-24 bg-white dark:bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold dark:text-white mb-12 uppercase tracking-widest text-blue-600">Our Belief</h2>
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {beliefs.map((belief, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.05 }}
                                className={`p-10 rounded-[40px] border-2 border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 group transition-all duration-300`}
                            >
                                <div className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">{belief.title}</div>
                                <div className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">{belief.text}</div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="max-w-4xl mx-auto p-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[40px] text-white shadow-2xl">
                        <p className="text-2xl md:text-3xl font-bold leading-relaxed">
                            "With strong partnerships, India’s youth and industries can build a future that is accessible, ethical, and sustainable for all."
                        </p>
                    </div>
                </div>
            </section>
        </PageTransition>
    );
};

export default About;
