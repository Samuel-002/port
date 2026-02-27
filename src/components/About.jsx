import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const skills = [
        "Penetration Testing", "Red Teaming", "Web Exploitation",
        "React.js", "Node.js", "Python", "Docker", "AWS"
    ];

    return (
        <section id="about" className="py-20 relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <motion.h2
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, damping: 10 }}
                    className="text-4xl font-orbitron font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-emerald-700"
                >
                    About Me
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="relative group cursor-pointer"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan to-electric-pink rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative aspect-square rounded-[2rem] overflow-hidden border border-white/10 glass">
                            <img
                                src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=1000&auto=format&fit=crop"
                                alt="Dark Anime Forest"
                                className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050605] via-transparent to-transparent"></div>
                        </div>
                    </motion.div>

                    <div className="space-y-6">
                        <p className="text-gray-300 text-lg leading-relaxed">
                            I am a dedicated cybersecurity enthusiast and full-stack developer with a passion for finding critical vulnerabilities in web applications and network infrastructure.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            When I'm not hunting for bugs or participating in CTFs, I'm building secure-by-design applications that prioritize user safety without compromising on performance. My unique perspective as both an attacker and a defender allows me to create robust software architectures.
                        </p>

                        <div className="pt-6">
                            <h3 className="text-xl font-orbitron mb-4 text-white">Core Expertise</h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 rounded-md glass border-white/5 text-sm font-medium text-yellow-100 hover:text-neon-cyan hover:border-yellow-600 hover:glow-cyan transition-all cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section >
    );
};

export default About;
