import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        emailjs.sendForm(
            'service_kca8i2o',
            'template_ou6dnr8',
            form.current,
            'VIi8vF2UlJUMHpXYD'
        )
            .then((result) => {
                setMessage({ type: 'success', text: 'Message sent successfully! We\'ll get back to you soon.' });
                form.current.reset();
            }, (error) => {
                setMessage({ type: 'error', text: 'Something went wrong. Please try again or contact us via WhatsApp.' });
            })
            .finally(() => {
                setIsSending(false);
                setTimeout(() => setMessage({ type: '', text: '' }), 5000);
            });
    };

    return (
        <section id="contact" className="py-32 bg-magic-dark relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-magic-orange opacity-5 blur-[150px] rounded-full"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 glow-text">
                        Let's Start Your <span className="text-magic-purple">Project.</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Ready to build something amazing? Reach out via the form below or connect directly on WhatsApp.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-16">
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-white">Contact Info</h3>
                            <p className="text-gray-400">
                                Feel free to reach out for collaborations or just a friendly hello.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 group">
                                <div className="w-12 h-12 rounded-xl bg-magic-deep border border-white/10 flex items-center justify-center text-magic-purple group-hover:bg-magic-purple group-hover:text-white transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 uppercase tracking-widest">Email</p>
                                    <a href="mailto:francisauka7@gmail.com" className="text-lg text-white hover:text-magic-purple transition-colors">francisauka7@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 group">
                                <div className="w-12 h-12 rounded-xl bg-magic-deep border border-white/10 flex items-center justify-center text-magic-orange group-hover:bg-magic-orange group-hover:text-white transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 uppercase tracking-widest">WhatsApp / Call</p>
                                    <a href="https://wa.me/254795544180" target="_blank" rel="noopener noreferrer" className="text-lg text-white hover:text-magic-orange transition-colors">+254 795 544 180 (Francis Auka)</a>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 rounded-3xl bg-gradient-to-br from-magic-purple/10 to-transparent border border-white/5">
                            <h4 className="text-xl font-bold text-white mb-4">Why work with us?</h4>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-center space-x-2">
                                    <span className="text-magic-purple">✔</span>
                                    <span>Fast & Scalable Next.js Solutions</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="text-magic-purple">✔</span>
                                    <span>Modern, High-Performance Design</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="text-magic-purple">✔</span>
                                    <span>Transparent & Hands-On Collaboration</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-magic-purple/5 blur-3xl -z-10"></div>
                        <form ref={form} onSubmit={sendEmail} className="space-y-6 p-8 rounded-3xl bg-magic-deep border border-white/10 shadow-2xl">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">Your Name</label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        required
                                        className="w-full bg-magic-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-magic-purple transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">Email Address</label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        required
                                        className="w-full bg-magic-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-magic-purple transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    required
                                    className="w-full bg-magic-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-magic-purple transition-colors"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="5"
                                    className="w-full bg-magic-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-magic-purple transition-colors resize-none"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSending}
                                className={`w-full py-4 rounded-xl font-bold text-lg transition-all transform hover:-translate-y-1 ${isSending
                                        ? 'bg-gray-600 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-magic-purple to-magic-pink text-white hover:shadow-[0_0_20px_rgba(176,38,255,0.5)]'
                                    }`}
                            >
                                {isSending ? 'Sending...' : 'Send Message'}
                            </button>

                            {message.text && (
                                <div className={`p-4 rounded-xl text-center font-medium ${message.type === 'success' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
                                    }`}>
                                    {message.text}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
