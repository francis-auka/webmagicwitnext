import React from 'react';

const TechTrust = () => {
    const techs = ['Next.js', 'React', 'Node.js', 'Tailwind CSS', 'Sanity CMS', 'MongoDB'];

    return (
        <section className="py-20 bg-magic-dark border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <p className="text-gray-500 text-sm font-medium mb-10 tracking-widest uppercase">
                    Tech Stack
                </p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {techs.map((tech) => (
                        <span key={tech} className="text-2xl md:text-3xl font-bold text-white hover:text-magic-purple cursor-default transition-colors">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechTrust;
