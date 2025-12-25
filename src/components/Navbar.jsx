import React from 'react';

const Navbar = () => {
    return (
        <nav className="glass-nav fixed top-0 left-0 right-0 z-50 px-6 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold tracking-tighter text-white">
                    WebMagic<span className="text-magic-purple">WithNext</span>
                </div>
                <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
                    <a href="#home" className="hover:text-magic-purple transition-colors">Home</a>
                    <a href="#about" className="hover:text-magic-purple transition-colors">About</a>
                    <a href="#process" className="hover:text-magic-purple transition-colors">Process</a>
                    <a href="#pricing" className="hover:text-magic-purple transition-colors">Pricing</a>
                    <a href="#contact" className="hover:text-magic-purple transition-colors">Contact</a>
                    <a href="https://github.com/francis-auka" target="_blank" rel="noopener noreferrer" className="hover:text-magic-purple transition-colors">GitHub</a>
                    <a href="https://www.linkedin.com/in/francis-auka/" target="_blank" rel="noopener noreferrer" className="hover:text-magic-purple transition-colors">LinkedIn</a>
                </div>
                <button className="bg-magic-purple hover:bg-magic-pink text-white px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105">
                    Get Started
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
