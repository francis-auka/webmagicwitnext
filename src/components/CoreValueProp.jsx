import React from 'react';

const CoreValueProp = () => {
    return (
        <section className="py-32 bg-magic-dark relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-magic-purple opacity-5 blur-[150px] rounded-full"></div>

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                    Make the Web Work for You.<br />
                    <span className="text-magic-orange">Perform faster.</span> <span className="text-magic-purple">Convert smarter.</span> <span className="text-magic-blue">Grow bigger.</span>
                </h2>
                <p className="text-xl text-gray-400 leading-relaxed">
                    Our mission is simple: we combine technical expertise, creative design, and strategic thinking to deliver websites that look amazing, perform flawlessly, and scale with your business.
                </p>
            </div>
        </section>
    );
};

export default CoreValueProp;
