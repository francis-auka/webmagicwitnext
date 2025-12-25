import React from 'react';

const AboutUs = () => {
    return (
        <section id="about" className="py-32 bg-magic-dark relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 leading-tight glow-text">
                            Our Stack is Our <span className="text-magic-purple">Superpower.</span>
                        </h2>
                        <div className="space-y-8 text-lg text-gray-400 leading-relaxed">
                            <p>
                                <strong className="text-white">The Philosophy:</strong> We are WebMagicWithNext. We exist to dismantle the idea that powerful websites must be slow or complex. Our philosophy is rooted in maximum speed, clean code, and elegant user experience. We don't chase trends; we set the benchmark for modern web performance.
                            </p>
                            <p>
                                <strong className="text-white">The Stack:</strong> Our name reflects our commitment: we specialize in the React/Next.js ecosystem—the best tools available for dynamic, scalable applications. This focus ensures every project we deliver is inherently fast, SEO-friendly, and built for tomorrow's internet.
                            </p>
                            <p>
                                <strong className="text-white">Our Pledge:</strong> We are not just developers; we are partners. We offer a hands-on, transparent collaboration model to ensure your digital vision is brought to life exactly as you imagined, without compromise.
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-square rounded-3xl bg-gradient-to-br from-magic-purple/20 to-magic-orange/20 border border-white/10 flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
                            <div className="relative z-10 text-center space-y-4">
                                <div className="text-8xl font-black text-white/10">MAGIC</div>
                                <div className="text-4xl font-bold text-magic-purple">NEXT.JS</div>
                                <div className="text-2xl font-medium text-magic-orange">REACT</div>
                            </div>
                        </div>
                        {/* Decorative blur */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-magic-purple/20 blur-[100px] rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
