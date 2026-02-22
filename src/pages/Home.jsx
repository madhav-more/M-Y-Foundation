import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BookOpen, Target, Users, Lightbulb, Building2, GraduationCap, Quote } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Button from '../components/Button';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';

// Import local background images
import home1 from '../assets/home1.jpg';
import home2 from '../assets/home2.jpg';
import home3 from '../assets/home3.jpg';
import home4 from '../assets/home3.jpg';

const carouselImages = [home1, home2, home3, home4];

const Home = () => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <PageTransition>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Carousel */}
                <div className="absolute inset-0 z-0">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 2 }}
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] scale-105"
                            style={{ backgroundImage: `url(${carouselImages[currentSlide]})` }}
                        />
                    </AnimatePresence>
                    {/* Multi-layered Overlay for Depth */}
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/20"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-transparent"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-4xl"
                    >
                        <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/20 backdrop-blur-md mb-6">
                            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                            <span className="text-xs font-bold text-blue-300 uppercase tracking-[0.2em]">Established 2015</span>
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="text-5xl md:text-8xl font-black text-white leading-[0.95] tracking-tighter mb-8 italic">
                            IGNITING <br />
                            <span className="text-blue-500 not-italic">POTENTIAL.</span> <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">ENABLING PROGRESS.</span>
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-300 max-w-2xl font-medium leading-relaxed mb-10 border-l-4 border-blue-600 pl-6">
                            M & Y Foundation is committed to <span className="text-white">bridging the gap</span> between education and employment across the heart of India.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-wrap gap-6">
                            <Button onClick={() => navigate('/donate')} className="text-lg px-10 py-5 bg-blue-600 hover:bg-blue-700 border-none shadow-2xl shadow-blue-900/50">
                                Start Your Contribution
                            </Button>
                            <button onClick={() => navigate('/about')} className="flex items-center space-x-3 text-white font-bold group">
                                <span className="border-b-2 border-transparent group-hover:border-blue-500 transition-all py-1">Discover Our Journey</span>
                                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Impact Bar */}
                <div className="absolute bottom-0 left-0 right-0 z-20 bg-white/5 backdrop-blur-3xl border-t border-white/10 py-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { label: "Students Empowered", value: "50,000+" },
                                { label: "Rural Colleges", value: "200+" },
                                { label: "Seminars Conducted", value: "1,200+" },
                                { label: "Years of Impact", value: "9+" }
                            ].map((stat, i) => (
                                <div key={i} className="text-center md:text-left">
                                    <div className="text-2xl md:text-3xl font-black text-white">{stat.value}</div>
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section - Architectural Typography */}
            <section className="py-32 bg-white dark:bg-slate-950 overflow-hidden relative">
                <div className="absolute top-0 right-0 text-[20vw] font-black text-slate-50 dark:text-slate-900/50 select-none leading-none -translate-y-1/2 translate-x-1/4">
                    ABOUT
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-12 gap-16 items-start">
                        <div className="lg:col-span-5 space-y-8">
                            <span className="text-blue-600 font-black tracking-[0.3em] uppercase text-sm block">Building the Framework</span>
                            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight">
                                Empowering India's <br />
                                <span className="text-blue-600">Untapped</span> Talent.
                            </h2>
                            <div className="w-20 h-2 bg-blue-600"></div>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="space-y-8 text-xl text-slate-600 dark:text-slate-300 leading-[1.8] font-medium">
                                <p className="first-letter:text-7xl first-letter:font-black first-letter:text-blue-600 first-letter:mr-3 first-letter:float-left">
                                    M & Y Foundation is a dedicated organization committed to empowering students and professionals across India. We work extensively in rural and semi-urban areas to bridge the gap between education and employment.
                                </p>
                                <p>
                                    Through free training programs, seminars, and career guidance initiatives, we strive to create opportunities for growth and development. Our efforts extend beyond students—we also support sick industries and organizations by providing management and employee development programs, fostering resilience and progress.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section - The Bento Grid */}
            <section className="py-32 bg-slate-50 dark:bg-slate-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-20">
                        <h2 className="text-blue-600 font-extrabold tracking-widest uppercase text-sm mb-4">The Mission</h2>
                        <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">Igniting Potential. <br /> Enabling Progress.</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[600px]">
                        {/* Box 1 */}
                        <Card className="md:col-span-2 md:row-span-1 bg-gradient-to-br from-blue-600 to-indigo-700 text-white border-none p-10 flex flex-col justify-between group">
                            <BookOpen className="w-12 h-12 text-blue-200" />
                            <div>
                                <h4 className="text-2xl font-black mb-4">Educational Upliftment</h4>
                                <p className="text-blue-100 leading-relaxed font-medium">
                                    Offering free training and seminars in rural colleges to enhance essential knowledge and professional skills.
                                </p>
                            </div>
                        </Card>

                        {/* Box 2 */}
                        <Card className="md:col-span-1 md:row-span-2 bg-white dark:bg-slate-800 p-10 flex flex-col justify-start">
                            <Target className="w-12 h-12 text-blue-600 mb-8" />
                            <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-6">Career Launchpad</h4>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                Providing career guidance and Training & Placement (T&P) programs to prepare students for the demands of the competitive job market.
                            </p>
                        </Card>

                        {/* Box 3 */}
                        <Card className="md:col-span-1 md:row-span-1 bg-slate-900 text-white p-10 flex flex-col justify-center items-center text-center">
                            <Building2 className="w-10 h-10 text-blue-400 mb-4" />
                            <h4 className="text-xl font-bold">Industrial Resilience</h4>
                            <p className="text-sm text-slate-400 mt-2">Strengthening organizations through management and workforce development.</p>
                        </Card>

                        {/* Box 4 */}
                        <Card className="md:col-span-2 md:row-span-1 border-2 border-dashed border-slate-300 dark:border-slate-700 p-10 flex items-center justify-between">
                            <div className="max-w-[70%]">
                                <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Sustainable Vision</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-lg">Working toward holistic nationwide growth and economic empowerment.</p>
                            </div>
                            <div className="hidden sm:block w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                                <Users size={40} />
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Belief Section - High impact typography center */}
            <section className="py-40 bg-white dark:bg-slate-950 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500 rounded-full blur-[120px]"></div>
                </div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <Quote size={60} className="mx-auto mb-10 text-blue-600 opacity-50" />
                    <h2 className="text-blue-600 font-black tracking-widest uppercase text-sm mb-12">Our Core Belief</h2>
                    <p className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-[1.15] tracking-tight">
                        "We believe <span className="text-blue-600">knowledge</span> opens doors, <span className="bg-blue-100 dark:bg-blue-900/50 px-2 italic">skills</span> create opportunities, and <span className="underline decoration-blue-600 decoration-8 underline-offset-[12px]">guidance</span> accelerates progress."
                    </p>
                    <div className="mt-16 max-w-2xl mx-auto">
                        <p className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                            With clear vision and community partnerships, India’s youth and industries can shape an upright, bright future—where growth is accessible, ethical, and sustainable for all.
                        </p>
                    </div>
                </div>
            </section>

            {/* Legal Status - The "Fine Print" but made beautiful */}
            <section className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-slate-950 rounded-[40px] p-12 shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-shrink-0">
                            <div className="w-24 h-24 rounded-3xl bg-blue-600 flex items-center justify-center text-white font-black text-4xl shadow-xl shadow-blue-500/20">
                                M&Y
                            </div>
                        </div>
                        <div className="flex-grow text-center md:text-left">
                            <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tight">Legal Identity & Roots</h4>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-4xl">
                                M & Y Foundation is a <span className="font-black text-slate-900 dark:text-white underline decoration-blue-500 underline-offset-4">Section 8 Company</span> registered under the Companies Act, 2013, working as a not-for-profit organization with fully charitable objectives. Established in 2015, the Foundation has been dedicated to empowering students and professionals across India.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </PageTransition>
    );
};

export default Home;