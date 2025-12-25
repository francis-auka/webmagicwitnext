import React from 'react';

const KeyFeatures = () => {
    const features = [
        {
            title: 'Performance Magic',
            subtitle: '(Custom Dev)',
            description: 'Lightning-fast load times and smooth interactions that keep users engaged.',
            gradient: 'from-magic-orange to-magic-pink'
        },
        {
            title: 'Design That Delights',
            subtitle: '(UX/UI)',
            description: 'Sleek, intuitive interfaces that reflect your brand\'s unique identity.',
            gradient: 'from-magic-blue to-magic-purple'
        },
        {
            title: 'Scalable & Future-Ready',
            subtitle: '(Headless CMS)',
            description: 'Flexible content management that grows as your business expands.',
            gradient: 'from-magic-purple to-magic-pink'
        },
        {
            title: 'Hands-On Partnership',
            subtitle: '(Collaboration)',
            description: 'We work closely with you to ensure your vision is realized perfectly.',
            gradient: 'from-magic-pink to-magic-orange'
        }
    ];

    return (
        <section className="py-32 bg-magic-dark">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="group relative p-[1px] rounded-2xl bg-gradient-to-br opacity-80 hover:opacity-100 transition-all duration-500 transform hover:-translate-y-2">
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} blur-sm opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                            <div className="relative bg-magic-deep p-8 rounded-2xl h-full border border-white/5">
                                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} mb-6 flex items-center justify-center text-white font-bold`}>
                                    {index + 1}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-magic-purple text-sm font-medium mb-4 uppercase tracking-wider">{feature.subtitle}</p>
                                <p className="text-gray-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KeyFeatures;
