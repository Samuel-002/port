import React from 'react';
import { motion } from 'framer-motion';
import { Target, Flag, Award, Zap } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: "Synack Red Team Member",
            company: "Synack",
            date: "2023 - Present",
            description: "Conducting continuous penetration testing and vulnerability assessments on critical infrastructure for enterprise clients. Discovered high-severity RCE and SQLi vulnerabilities.",
            icon: <Target className="w-6 h-6 text-electric-pink" />,
            color: "border-electric-pink",
            bg: "bg-electric-pink/10"
        },
        {
            id: 2,
            role: "Top 100 Bug Bounty Hunter",
            company: "HackerOne",
            date: "2021 - Present",
            description: "Consistently ranked in the top 100 researchers globally. Awarded over $150k in bounties for identifying critical authentication bypasses and SSRF vulnerabilities in major tech companies.",
            icon: <Award className="w-6 h-6 text-yellow-400" />,
            color: "border-yellow-400",
            bg: "bg-yellow-400/10"
        },
        {
            id: 3,
            role: "1st Place - DEF CON CTF Qualifiers",
            company: "Team 0xRoot",
            date: "August 2022",
            description: "Led the web exploitation and cryptography challenges. Successfully reversed custom encryption algorithms to extract hidden flags.",
            icon: <Flag className="w-6 h-6 text-neon-cyan" />,
            color: "border-neon-cyan",
            bg: "bg-neon-cyan/10"
        },
        {
            id: 4,
            role: "Security Engineer",
            company: "TechSecure Inc.",
            date: "2019 - 2021",
            description: "Developed automated security tooling integrated into CI/CD pipelines. Reduced deployment vulnerabilities by 60% within the first year.",
            icon: <Zap className="w-6 h-6 text-purple-400" />,
            color: "border-purple-400",
            bg: "bg-purple-400/10"
        }
    ];

    return (
        <section id="experience" className="py-20 relative px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
                className="text-4xl font-orbitron font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-green"
            >
                Service Record
            </motion.h2>

            <div className="relative border-l-2 border-white/10 ml-6 md:ml-1/2">
                {experiences.map((exp, idx) => (
                    <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.02, x: 10 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.2 }}
                        className={`mb-12 relative pl-8 before:content-[''] before:absolute before:left-[-9px] before:top-1 before:w-4 before:h-4 before:bg-[#050605] before:border-2 before:${exp.color} before:rounded-full before:z-10`}
                    >
                        <div className="glass-card p-6 relative overflow-hidden group hover:shadow-[0_0_20px_rgba(44,62,46,0.2)]">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl transform translate-x-1/2 -translate-y-1/2 transition-colors duration-500 group-hover:bg-white/10"></div>

                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 relative z-10">
                                <div className="flex items-center space-x-3 mb-2 md:mb-0">
                                    <div className={`p-2 rounded-lg ${exp.bg}`}>
                                        {exp.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold font-orbitron text-white">{exp.role}</h3>
                                        <h4 className={`text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white`}>{exp.company}</h4>
                                    </div>
                                </div>
                                <div className="text-sm font-medium text-gray-500 font-orbitron bg-white/5 px-3 py-1 rounded-full border border-white/10">
                                    {exp.date}
                                </div>
                            </div>

                            <p className="text-gray-400 leading-relaxed relative z-10">
                                {exp.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
