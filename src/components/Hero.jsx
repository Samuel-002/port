import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <div id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold font-orbitron mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-yellow-200 to-neon-green">
                            SAMUVEL K
                        </span>
                    </h1>
                    <h2 className="text-xl md:text-3xl font-medium mb-6 text-gray-300">
                        Offensive Security Researcher | Bug Bounty Hunter | Full Stack Developer
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-400 mb-10 text-lg leading-relaxed">
                        Uncovering vulnerabilities before they are exploited. Passionate about building secure, resilient applications and breaking into complex systems to make them safer.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
                        <Link to="projects" smooth={true} duration={500}>
                            <button className="px-8 py-3 rounded-full bg-transparent border-2 border-neon-cyan text-neon-cyan font-semibold hover:bg-neon-cyan hover:text-black transition-all glow-cyan hover-glow-cyan transform hover:scale-105 cursor-pointer">
                                View Projects
                            </button>
                        </Link>
                        <Link to="contact" smooth={true} duration={500}>
                            <button className="px-8 py-3 rounded-full bg-transparent border-2 border-electric-pink text-electric-pink font-semibold hover:bg-electric-pink hover:text-white transition-all glow-pink transform hover:scale-105 cursor-pointer">
                                Contact Me
                            </button>
                        </Link>
                    </div>

                    <div className="flex justify-center space-x-6">
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white hover:glow-cyan transition-colors p-2 rounded-full hover:bg-white/5">
                            <Github size={28} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-neon-cyan transition-colors p-2 rounded-full hover:bg-white/5">
                            <Linkedin size={28} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-white/5">
                            <Twitter size={28} />
                        </a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer text-gray-400 hover:text-neon-cyan"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <Link to="about" smooth={true} duration={500}>
                    <ChevronDown size={32} />
                </Link>
            </motion.div>
        </div>
    );
};

export default Hero;
