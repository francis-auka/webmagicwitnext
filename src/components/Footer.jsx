import React from 'react';

const Footer = () => {
    return (
        <footer className="py-20 bg-magic-dark border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <img src="/logo.png" alt="WebMagicWithNext Logo" className="w-32 h-auto mb-2" />
                        <div className="text-3xl font-bold tracking-tighter text-white">
                            WebMagic<span className="text-magic-purple">WithNext</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center md:justify-start gap-8 text-gray-400">
                        <a href="https://github.com/francis-auka" target="_blank" rel="noopener noreferrer" className="hover:text-magic-purple transition-colors">GitHub</a>
                        <a href="https://www.linkedin.com/in/francis-auka/" target="_blank" rel="noopener noreferrer" className="hover:text-magic-purple transition-colors">LinkedIn</a>
                        <a href="mailto:francisauka7@gmail.com" className="hover:text-magic-purple transition-colors">Gmail</a>
                        <a href="https://wa.me/254795544180" target="_blank" rel="noopener noreferrer" className="hover:text-magic-purple transition-colors">WhatsApp</a>
                    </div>

                    <div className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} WebMagicWithNext. All rights reserved.
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-white/5 text-center">
                    <p className="text-gray-600 text-xs uppercase tracking-[0.5em] mb-4">
                        Speed &bull; Elegance &bull; Modernity &bull; Hype
                    </p>
                    <p className="text-gray-500 text-sm">
                        Contact: +254795544180 | Francis Auka
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
