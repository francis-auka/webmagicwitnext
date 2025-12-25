import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-magic-dark">
            {/* Background Gradient Orbs */}
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-magic-purple opacity-20 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-magic-orange opacity-10 blur-[100px] rounded-full"></div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <div className="space-y-8">
                    <div className="space-y-2">
                        <p className="text-magic-purple font-medium tracking-widest uppercase text-sm animate-fade-in">
                            No glitches. Just flow.
                        </p>
                        <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight glow-text">
                            Ready to Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-magic-purple to-magic-orange">Hype?</span>
                        </h1>
                    </div>

                    <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
                        Stop settling for slow, outdated websites. We use cutting-edge Next.js technology and sleek, intuitive design to turn your vision into a digital asset that performs flawlessly and scales infinitely.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-gradient-to-r from-magic-purple to-magic-pink text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-[0_0_20px_rgba(176,38,255,0.5)] transform hover:-translate-y-1">
                            START YOUR PROJECT NOW &rarr;
                        </button>
                    </div>
                </div>

                <div className="relative hidden md:block">
                    <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800"
                            alt="Tech Visualization"
                            className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-magic-dark via-transparent to-transparent"></div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-magic-orange rounded-full blur-2xl opacity-50"></div>
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-magic-purple rounded-full blur-3xl opacity-50"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
