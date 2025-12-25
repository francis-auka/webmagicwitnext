import React from 'react';

const Pricing = () => {
    const packages = [
        {
            name: 'Starter Website',
            price: 'KSh 25,000 – 40,000',
            description: 'For small businesses, portfolios, or personal projects',
            features: [
                'Up to 5 pages',
                'Custom UX/UI, responsive',
                'Optional simple CMS (lightweight)',
                '1 month basic support',
                'Payment integration: Not included'
            ],
            gradient: 'from-magic-blue to-magic-purple',
            cta: 'Get Started'
        },
        {
            name: 'Content-Heavy / CMS',
            price: 'KSh 50,000 – 80,000',
            description: 'For blogs, agencies, creators, or companies with lots of content',
            features: [
                '5–15 pages',
                'Custom UX/UI, modern aesthetics',
                'Headless CMS (Sanity, Strapi, etc.)',
                'Optional Mpesa/Paybill integration',
                '1–3 months basic support'
            ],
            gradient: 'from-magic-purple to-magic-pink',
            cta: 'Choose Plan',
            popular: true
        },
        {
            name: 'Web App / Custom Dev',
            price: 'KSh 100,000+',
            description: 'For portals, SaaS MVPs, or interactive apps',
            features: [
                'Fully custom pages / features',
                'Advanced UX/UI with animations',
                'Optional headless CMS',
                'Subscriptions, paywalls, etc.',
                '3–6 months post-launch support'
            ],
            gradient: 'from-magic-pink to-magic-orange',
            cta: 'Contact Us'
        }
    ];

    const addOns = [
        { name: 'Extra revisions', price: 'KSh 5,000–10,000 per round' },
        { name: 'Extended maintenance', price: 'KSh 5,000–10,000 per month' },
        { name: 'Speed optimization & SEO', price: 'KSh 10,000–20,000' }
    ];

    return (
        <section id="pricing" className="py-32 bg-magic-dark relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-magic-blue opacity-5 blur-[150px] rounded-full -translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 glow-text">
                        Transparent <span className="text-magic-blue">Pricing.</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Fair value for small businesses and startups. Exact pricing will be provided after discussion.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {packages.map((pkg, index) => (
                        <div key={index} className={`relative group p-[1px] rounded-3xl bg-gradient-to-br ${pkg.gradient} ${pkg.popular ? 'scale-105 z-10 shadow-[0_0_30px_rgba(176,38,255,0.2)]' : 'opacity-90 hover:opacity-100'} transition-all duration-500`}>
                            <div className="relative bg-magic-deep p-8 rounded-[23px] h-full flex flex-col">
                                {pkg.popular && (
                                    <div className="absolute top-0 right-8 -translate-y-1/2 bg-gradient-to-r from-magic-purple to-magic-pink text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                                <p className="text-gray-400 text-sm mb-6 h-10">{pkg.description}</p>
                                <div className="text-3xl font-bold text-white mb-8">
                                    <span className="text-lg font-medium text-gray-500 mr-1">Starts at</span>
                                    {pkg.price}
                                </div>

                                <ul className="space-y-4 mb-10 flex-grow">
                                    {pkg.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-start space-x-3 text-gray-300 text-sm">
                                            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${pkg.gradient}`}>✔</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="#contact"
                                    className={`block text-center py-4 rounded-xl font-bold transition-all transform hover:-translate-y-1 ${pkg.popular
                                            ? 'bg-gradient-to-r from-magic-purple to-magic-pink text-white shadow-[0_0_20px_rgba(176,38,255,0.3)]'
                                            : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                                        }`}
                                >
                                    {pkg.cta}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="p-8 rounded-3xl bg-magic-deep border border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-8 text-center">Optional Add-Ons</h3>
                        <div className="grid gap-4">
                            {addOns.map((addon, index) => (
                                <div key={index} className="flex justify-between items-center p-4 rounded-xl bg-magic-dark border border-white/5 hover:border-magic-purple/30 transition-colors">
                                    <span className="text-gray-300 font-medium">{addon.name}</span>
                                    <span className="text-magic-orange font-bold">{addon.price}</span>
                                </div>
                            ))}
                        </div>
                        <p className="mt-8 text-center text-gray-500 text-sm italic">
                            * Prices are indicative. Exact pricing will be provided after discussion.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
