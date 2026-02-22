import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Landmark, ShieldCheck, IndianRupee, ArrowRight, HelpingHand } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Card from '../components/Card';
import Button from '../components/Button';

const Donate = () => {
    const benefits = [
        {
            title: "For Organizations (CSR)",
            points: [
                "Support education and skill development",
                "Eligible for tax benefits under Section 80G & 12A",
                "Visible social impact for your brand"
            ],
            icon: Landmark
        },
        {
            title: "For Individuals",
            points: [
                "Help students and professionals grow",
                "Eligible for tax exemption",
                "Empower the future generation of India"
            ],
            icon: Heart
        }
    ];

    return (
        <PageTransition>
            {/* Hero Section */}
            <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-3xl flex items-center justify-center mb-8"
                    >
                        <HelpingHand size={40} />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6"
                    >
                        Together <span className="text-blue-600">We Progress</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl"
                    >
                        Empowering you, your organization, and India’s youth. Your support helps bring knowledge and opportunity to those who need it most.
                    </motion.p>
                </div>
            </section>

            {/* Impact Message */}
            <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold dark:text-white">Why Your Support Matters</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                M & Y Foundation empowers students and professionals through free training, career guidance, and development programs, especially in rural areas.
                            </p>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                Every contribution helps bridge the gap between education and employment, creating a resilient and productive workforce for India.
                            </p>
                            <div className="grid grid-cols-2 gap-6 pt-4">
                                <div className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                                    <div className="text-3xl font-bold text-blue-600 mb-1">100%</div>
                                    <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Free Training</div>
                                </div>
                                <div className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
                                    <div className="text-3xl font-bold text-blue-600 mb-1">Rural</div>
                                    <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Focus Areas</div>
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-6">
                            {benefits.map((benefit, idx) => (
                                <Card key={idx} className="flex flex-col md:flex-row gap-6 items-start">
                                    <div className="p-4 bg-blue-600/10 rounded-2xl text-blue-600 shrink-0">
                                        <benefit.icon size={28} />
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-bold dark:text-white">{benefit.title}</h3>
                                        <ul className="space-y-2">
                                            {benefit.points.map((point, pIdx) => (
                                                <li key={pIdx} className="flex items-center space-x-2 text-slate-600 dark:text-slate-400">
                                                    <ArrowRight size={14} className="text-blue-500" />
                                                    <span className="text-sm font-medium">{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Donation Details */}
            <section className="py-24 bg-white dark:bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-slate-900 rounded-[48px] p-8 md:p-20 relative overflow-hidden text-center text-white">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-indigo-600/20 pointer-events-none"></div>

                        <div className="relative z-10 space-y-12">
                            <div className="space-y-4">
                                <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">How to Donate</h2>
                                <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full"></div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                                <div className="p-8 bg-white/5 backdrop-blur-xl rounded-[40px] border border-white/10 space-y-6">
                                    <div className="w-16 h-16 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mx-auto">
                                        <IndianRupee size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold">Domestic Contributions</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        We currently accept contributions in Indian Rupees (INR) from Indian bank accounts and corporations.
                                    </p>
                                    <Button className="w-full bg-white text-slate-900 hover:bg-slate-100 border-none">Donate Now (INR)</Button>
                                </div>

                                <div className="p-8 bg-white/5 backdrop-blur-xl rounded-[40px] border border-white/10 space-y-6 opacity-80">
                                    <div className="w-16 h-16 bg-slate-500/20 text-slate-400 rounded-2xl flex items-center justify-center mx-auto">
                                        <ShieldCheck size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold">International Donors</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        Our Foreign Contribution Regulation Act (FCRA) application is in process. Please check back soon.
                                    </p>
                                    <div className="py-2 px-4 bg-slate-800/50 rounded-xl text-xs font-bold text-slate-500 uppercase tracking-widest">FCRA Pending</div>
                                </div>
                            </div>

                            <p className="text-slate-500 text-sm italic">
                                All donations are eligible for tax exemption under prevailing laws in India.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </PageTransition>
    );
};

export default Donate;
