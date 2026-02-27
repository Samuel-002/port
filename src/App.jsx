import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
    return (
        <div className="min-h-screen bg-deep-purple text-white relative flex flex-col font-poppins scroll-smooth">
            {/* Global Cinematic Dark Anime Forest Background */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#0a0e0a]">
                {/* Base Forest Color */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1b251d] to-[#020302]"></div>

                {/* Distant Trees Silhouette (CSS gradients) */}
                <div className="absolute bottom-0 w-full h-[60%] opacity-40 mix-blend-multiply"
                    style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent 0%, transparent 2%, #0a0e0a 2%, #0a0e0a 4%, transparent 4%, transparent 10%, #050805 10%, #050805 15%)' }}>
                </div>

                {/* Foreground Trees Silhouette */}
                <div className="absolute bottom-0 w-full h-[80%] opacity-90 mix-blend-multiply"
                    style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent 0%, transparent 5%, #020302 5%, #020302 12%, transparent 12%, transparent 25%, #000 25%, #000 35%)' }}>
                </div>

                {/* Volumetric Sun Rays (Top Right) */}
                <div className="absolute top-[-20%] right-[-20%] w-[150vw] h-[150vh] origin-top-right animate-ray bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.15)_0%,transparent_60%)] mix-blend-screen"
                    style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}>
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,rgba(255,223,115,0.05)_0%,rgba(255,223,115,0.05)_2%,transparent_2%,transparent_5%)]"></div>
                </div>

                {/* Animated Mist / Fog */}
                <div className="absolute bottom-0 left-[0vw] w-[200vw] h-[40vh] bg-[radial-gradient(ellipse_at_center,rgba(44,62,46,0.25)_0%,transparent_70%)] blur-[40px] animate-fog"></div>
                <div className="absolute bottom-[10vh] left-[0vw] w-[200vw] h-[30vh] bg-[radial-gradient(ellipse_at_center,rgba(60,80,60,0.15)_0%,transparent_70%)] blur-[50px] animate-fog-slow"></div>

                {/* Floating Particles */}
                <div className="absolute left-[20%] w-2 h-2 rounded-full bg-neon-cyan/40 shadow-[0_0_10px_#d4af37] animate-float-particle [animation-delay:0s]"></div>
                <div className="absolute left-[50%] w-3 h-3 rounded-full bg-neon-cyan/30 shadow-[0_0_10px_#d4af37] animate-float-particle [animation-delay:3s]"></div>
                <div className="absolute left-[80%] w-1.5 h-1.5 rounded-full bg-neon-cyan/50 shadow-[0_0_10px_#d4af37] animate-float-particle [animation-delay:7s]"></div>

                {/* Dark Vignette Overlay for Depth */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.85)_100%)] mix-blend-multiply"></div>

                {/* Sepia tone overlay */}
                <div className="absolute inset-0 bg-[#3b2f2f] mix-blend-color opacity-30"></div>

                {/* Film Grain Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
                    style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}>
                </div>
            </div>

            <Navbar />

            <main className="relative z-10 flex flex-col flex-grow">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <div className="pb-24">
                    <Contact />
                </div>
            </main>

            <footer className="relative z-10 border-t border-white/5 bg-[#050515] py-8 text-center text-gray-500 font-mono text-sm">
                <p>&copy; {new Date().getFullYear()} Samuvel K. Validating inputs. Securing nodes.</p>
                <p className="mt-2 text-xs opacity-50">Built with React, Vite & Tailwind CSS</p>
            </footer>
        </div>
    );
}

export default App;
