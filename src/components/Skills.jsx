import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Search, Code, Terminal } from 'lucide-react';

const Skills = () => {
    const categoryVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (custom) => ({
            opacity: 1,
            y: 0,
            transition: { delay: custom * 0.2, duration: 0.5 }
        })
    };

    const categories = [
        {
            id: 1,
            title: "Web Security",
            icon: <Shield className="w-8 h-8 text-neon-cyan" />,
            color: "from-cyan-500/20 to-blue-500/5",
            borderColor: "group-hover:border-neon-cyan",
            textColor: "text-neon-cyan",
            skills: [
                { name: "OWASP Top 10", level: 90 },
                { name: "Burp Suite Pro", level: 85 },
                { name: "API Testing", level: 80 }
            ]
        },
        {
            id: 2,
            title: "Recon & OSINT",
            icon: <Search className="w-8 h-8 text-purple-400" />,
            color: "from-purple-500/20 to-pink-500/5",
            borderColor: "group-hover:border-purple-400",
            textColor: "text-purple-400",
            skills: [
                { name: "Subdomain Enumeration", level: 95 },
                { name: "Asset Discovery", level: 85 },
                { name: "Information Gathering", level: 90 }
            ]
        },
        {
            id: 3,
            title: "Programming",
            icon: <Code className="w-8 h-8 text-electric-pink" />,
            color: "from-pink-500/20 to-red-500/5",
            borderColor: "group-hover:border-electric-pink",
            textColor: "text-electric-pink",
            skills: [
                { name: "Python", level: 90 },
                { name: "JavaScript/React", level: 85 },
                { name: "Bash Scripting", level: 75 }
            ]
        },
        {
            id: 4,
            title: "Tools & Infra",
            icon: <Terminal className="w-8 h-8 text-green-400" />,
            color: "from-green-500/20 to-emerald-500/5",
            borderColor: "group-hover:border-green-400",
            textColor: "text-green-400",
            skills: [
                { name: "Nmap/Masscan", level: 85 },
                { name: "Metasploit", level: 70 },
                { name: "Docker/K8s", level: 80 }
            ]
        }
    ];

    return (
        <section id="skills" className="py-20 relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
                className="text-4xl font-orbitron font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-green"
            >
                Technical Arsenal
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
                {categories.map((cat, idx) => (
                    <motion.div
                        key={cat.id}
                        custom={idx}
                        initial="hidden"
                        whileInView="visible"
                        whileHover={{ scale: 1.03 }}
                        viewport={{ once: true }}
                        variants={categoryVariants}
                        className={`group glass-card p-8 bg-gradient-to-br ${cat.color} ${cat.borderColor} relative overflow-hidden`}
                    >
                        <div className="flex items-center space-x-4 mb-8 relative z-10">
                            <div className={`p-3 rounded-lg bg-[#050605]/80 shadow-[0_0_15px_rgba(0,0,0,0.5)]`}>
                                {cat.icon}
                            </div>
                            <h3 className={`text-2xl font-orbitron font-semibold ${cat.textColor}`}>
                                {cat.title}
                            </h3>
                        </div>

                        <div className="space-y-6 relative z-10">
                            {cat.skills.map((skill, sIdx) => (
                                <div key={sIdx}>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                                        <span className="text-sm font-medium text-gray-500">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-black/50 rounded-full h-2">
                                        <motion.div
                                            className={`h-2 rounded-full bg-gradient-to-r ${cat.textColor === 'text-neon-cyan' ? 'from-cyan-500 to-blue-500' : cat.textColor === 'text-purple-400' ? 'from-purple-500 to-fuchsia-500' : cat.textColor === 'text-electric-pink' ? 'from-pink-500 to-rose-500' : 'from-green-500 to-emerald-500'}`}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                            viewport={{ once: true }}
                                        ></motion.div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 group-hover:bg-white/10 transition-colors"></div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
