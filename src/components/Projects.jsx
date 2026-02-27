import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Activity } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Zero-Day Exploit Framework",
            description: "A custom framework for discovering, analyzing, and exploiting unknown vulnerabilities in IoT devices using automated fuzzing and symbolic execution.",
            image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop",
            tags: ["Python", "C", "Reverse Engineering", "IoT"],
            github: "https://github.com",
            demo: "https://demo.com"
        },
        {
            id: 2,
            title: "ShadowNet Defense Platform",
            description: "Enterprise-grade threat intelligence dashboard that aggregates global attack data in real-time, providing predictive analytics for blue teams.",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop",
            tags: ["React", "Node.js", "GraphQL", "ElasticSearch"],
            github: "https://github.com",
            demo: "https://demo.com"
        },
        {
            id: 3,
            title: "CryptoWallet Auditor",
            description: "Automated smart contract auditing tool that detects common reentrancy attacks, integer overflows, and logic flaws in Solidity code.",
            image: "https://images.unsplash.com/photo-1639762681485-074b7f4ec651?w=800&auto=format&fit=crop",
            tags: ["Solidity", "Rust", "Web3.js", "Security"],
            github: "https://github.com",
            demo: "https://demo.com"
        }
    ];

    return (
        <section id="projects" className="py-20 relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
                className="text-4xl font-orbitron font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-emerald-700"
            >
                Operation Log
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, idx) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05, y: -10 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.2 }}
                        className="glass-card group flex flex-col overflow-hidden hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] relative border-white/5"
                    >
                        <div className="relative h-48 overflow-hidden border-b border-white/5">
                            <div className="absolute inset-0 bg-[#1b251d]/60 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 font-poppins"
                            />
                            <div className="absolute top-4 right-4 z-20">
                                <Activity className="text-neon-cyan animate-pulse" size={20} />
                            </div>
                        </div>

                        <div className="p-6 flex-grow flex flex-col text-left">
                            <h3 className="text-xl font-orbitron font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 text-sm mb-6 flex-grow">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded text-cyan-200">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center pt-4 border-t border-white/10">
                                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                                    <Github size={18} />
                                    <span className="text-sm font-medium">Source</span>
                                </a>
                                <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center space-x-2 text-neon-cyan hover:text-white transition-colors hover:glow-cyan px-3 py-1 rounded bg-neon-cyan/10">
                                    <ExternalLink size={18} />
                                    <span className="text-sm font-medium">Live Demo</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
