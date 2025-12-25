import React from 'react';

const OurProcess = () => {
    const steps = [
        {
            title: 'Discover & Define',
            subtitle: '(The Vision)',
            description: 'We start with a deep dive into your business, audience, and goals. We define the project scope, technical requirements, and key performance indicators (KPIs) to ensure alignment.'
        },
        {
            title: 'Design & Prototype',
            subtitle: '(The Blueprint)',
            description: 'Our UX/UI team crafts modern, intuitive mockups and interactive prototypes. This ensures the design is not just beautiful but optimized for conversion and user flow.'
        },
        {
            title: 'Develop & Optimize',
            subtitle: '(The Magic)',
            description: 'Leveraging our expertise in Next.js, React, and modern backend services, we write clean, scalable code. Development is iterative, featuring continuous testing for speed and security.'
        },
        {
            title: 'Deploy & Launch',
            subtitle: '(The Hype)',
            description: 'We manage the seamless deployment of your site, ensuring a zero-downtime launch. Post-launch, we provide documentation, training, and optional maintenance plans to keep your hype building.'
        }
    ];

    return (
        <section id="process" className="py-32 bg-magic-dark relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 glow-text">
                        The Flow: From <span className="text-magic-orange">Concept</span> to <span className="text-magic-purple">Hype.</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        A streamlined approach to building high-performance digital assets.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-magic-purple via-magic-orange to-magic-purple opacity-20 -translate-y-1/2"></div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <div key={index} className="group">
                                <div className="relative mb-8">
                                    <div className="w-16 h-16 rounded-full bg-magic-deep border-2 border-magic-purple flex items-center justify-center text-2xl font-bold text-white group-hover:bg-magic-purple transition-all duration-300 shadow-[0_0_15px_rgba(176,38,255,0.3)]">
                                        {index + 1}
                                    </div>
                                    {/* Pulse effect */}
                                    <div className="absolute inset-0 w-16 h-16 rounded-full bg-magic-purple opacity-20 animate-ping group-hover:opacity-40"></div>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                                <p className="text-magic-orange text-sm font-bold mb-4 uppercase tracking-wider">{step.subtitle}</p>
                                <p className="text-gray-400 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurProcess;
