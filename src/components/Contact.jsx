import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Terminal } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Establishing secure connection...');

        // Simulate API call
        setTimeout(() => {
            setStatus('Message encrypted and transmitted successfully.');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus(''), 3000);
        }, 1500);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-20 relative px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-4xl font-orbitron font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-purple-500 to-electric-pink">
                    Initialize Contact
                </h2>

                <div className="glass p-8 rounded-2xl relative overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan via-purple-500 to-electric-pink"></div>

                    <div className="flex items-center space-x-3 mb-8 border-b border-white/10 pb-4">
                        <Terminal className="text-neon-cyan" size={24} />
                        <span className="font-orbitron tracking-widest text-sm text-gray-400">~/system/comm_link.sh</span>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-400 font-orbitron">IDENTIFIER</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all font-mono"
                                    placeholder="name or alias"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-400 font-orbitron">RETURN ADDRESS</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all font-mono"
                                    placeholder="secure@email.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-gray-400 font-orbitron">PAYLOAD</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-electric-pink focus:ring-1 focus:ring-electric-pink transition-all font-mono resize-none"
                                placeholder="Enter encrypted message here..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full flex items-center justify-center space-x-2 py-4 rounded-lg border border-neon-cyan/50 bg-neon-cyan/10 hover:bg-neon-cyan hover:text-black text-neon-cyan font-bold font-orbitron transition-all duration-300 glow-cyan hover-glow-cyan"
                        >
                            <span>EXECUTE TRANSMISSION</span>
                            <Send size={18} />
                        </button>

                        {status && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`text-center font-mono text-sm mt-4 ${status.includes('successfully') ? 'text-neon-cyan' : 'text-yellow-400'}`}
                            >
                                {status}
                            </motion.div>
                        )}
                    </form>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
