import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Briefcase, Settings, TrendingUp, Users2, ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Card from '../components/Card';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const Services = () => {
    const navigate = useNavigate();

    const serviceCategories = [
        {
            title: "Educational Initiatives",
            services: [
                {
                    icon: GraduationCap,
                    title: "Free Training Programs",
                    desc: "Comprehensive skill-building workshops tailored for rural students to enhance their employability and technical knowledge.",
                    features: ["Skill Assessment", "Hands-on Projects", "Certification"]
                },
                {
                    icon: Users,
                    title: "Seminars & Workshops",
                    desc: "Interactive sessions led by industry experts to expose students to global trends and professional standards.",
                    features: ["Industrial Insights", "Networking", "Q&A Sessions"]
                },
                {
                    icon: Briefcase,
                    title: "Career Guidance",
                    desc: "Expert mentorship and Training & Placement (T&P) support to help students navigate their career paths effectively.",
                    features: ["Resume Building", "Mock Interviews", "Placement Support"]
                }
            ]
        },
        {
            title: "Industrial & Organizational Growth",
            services: [
                {
                    icon: Settings,
                    title: "Management Development",
                    desc: "Customized programs for organizations to enhance leadership skills and operational efficiency.",
                    features: ["Strategic Planning", "Leadership Training", "Efficiency Audit"]
                },
                {
                    icon: Users2,
                    title: "Employee Skill Development",
                    desc: "Training initiatives focused on upskilling the workforce to foster resilience and productivity.",
                    features: ["Soft Skills", "Technical Upgradation", "Team Building"]
                },
                {
                    icon: TrendingUp,
                    title: "Sustainable Progress",
                    desc: "Consultancy and support for industries to ensure ethical growth and long-term viability.",
                    features: ["Process Optimization", "Ethical Standards", "Growth Mapping"]
                }
            ]
        }
    ];

    return (
        <PageTransition>
            {/* Header */}
            <section className="py-24 bg-white dark:bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white">
                            Professional <span className="text-blue-600">Services</span>
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                            Empowering students through education and strengthening organizations through expert development programs.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Service Blocks */}
            {serviceCategories.map((category, idx) => (
                <section key={idx} className={`py-24 ${idx % 2 === 0 ? 'bg-slate-50 dark:bg-slate-900/50' : 'bg-white dark:bg-slate-950'}`}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold dark:text-white mb-12 flex items-center space-x-4">
                            <span className="w-12 h-1 bg-blue-600 rounded-full"></span>
                            <span>{category.title}</span>
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {category.services.map((service, sIdx) => (
                                <Card key={sIdx} className="flex flex-col h-full group">
                                    <div className="p-4 bg-blue-600/10 rounded-2xl w-fit text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                        <service.icon size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold dark:text-white mb-4">{service.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 mb-8 flex-grow leading-relaxed">
                                        {service.desc}
                                    </p>
                                    <ul className="space-y-3 mb-8">
                                        {service.features.map((feature, fIdx) => (
                                            <li key={fIdx} className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400 font-medium">
                                                <ArrowRight size={14} className="text-blue-600" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button
                                        type="secondary"
                                        className="w-full text-sm"
                                        onClick={() => navigate('/join')}
                                    >
                                        Enquire Now
                                    </Button>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            {/* CTA Section */}
            <section className="py-24 bg-blue-600 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
                    <h2 className="text-4xl font-extrabold">Ready to transform your future?</h2>
                    <p className="text-xl text-blue-100">
                        Join M & Y Foundation today and be part of India's growth story.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button onClick={() => navigate('/join')} className="bg-white text-blue-600 hover:bg-blue-50 border-none shadow-xl">
                            Get Started
                        </Button>
                        <Button onClick={() => navigate('/about')} className="bg-blue-700 hover:bg-blue-800 border-blue-500/30">
                            Learn More
                        </Button>
                    </div>
                </div>
            </section>
        </PageTransition>
    );
};

export default Services;
