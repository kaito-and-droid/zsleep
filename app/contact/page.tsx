'use client';

import { Moon, Mail, User, MessageSquare, ArrowLeft, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');
        setErrorMessage('');

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                // Reset success message after 5 seconds
                setTimeout(() => setSubmitStatus('idle'), 5000);
            } else {
                const error = await response.json();
                setSubmitStatus('error');
                setErrorMessage(error.message || 'Failed to send email. Please try again.');
            }
        } catch (error) {
            setSubmitStatus('error');
            setErrorMessage('An error occurred. Please try again later.');
            console.error('Error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
            {/* Navigation */}
            <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-2">
                            <Moon className="h-8 w-8 text-blue-400" />
                            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">ZSleep</span>
                        </div>
                        <a href="/" className="flex items-center gap-2 hover:text-blue-400 transition">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Home
                        </a>
                    </div>
                </div>
            </nav>

            {/* Header */}
            <div className="pt-32 pb-16 px-4 bg-gradient-to-b from-blue-900/50 to-transparent">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 mb-6">
                        <Mail className="h-8 w-8 text-blue-400" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">Get in Touch</h1>
                    <p className="text-lg text-gray-300">Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                </div>
            </div>

            {/* Contact Content */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold mb-8 text-blue-300">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="bg-gradient-to-br from-blue-800/20 to-cyan-800/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all">
                                    <div className="flex items-start gap-4">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 border border-blue-400/30 flex-shrink-0">
                                            <Mail className="h-6 w-6 text-blue-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white mb-1">Email</h3>
                                            <p className="text-gray-300">kaitoteam@proton.me</p>
                                            <p className="text-sm text-gray-400 mt-2">We typically respond within 24-48 hours</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-blue-800/20 to-cyan-800/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all">
                                    <div className="flex items-start gap-4">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 border border-blue-400/30 flex-shrink-0">
                                            <MessageSquare className="h-6 w-6 text-blue-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white mb-1">Support Topics</h3>
                                            <p className="text-gray-300 text-sm">Feature requests, bug reports, account issues, and general inquiries</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-blue-800/20 to-cyan-800/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all">
                                    <div className="flex items-start gap-4">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 border border-blue-400/30 flex-shrink-0">
                                            <Moon className="h-6 w-6 text-blue-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white mb-1">About ZSleep</h3>
                                            <p className="text-gray-300 text-sm">Powered by KaiTeam. Helping you sleep better every night.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <h2 className="text-3xl font-bold mb-8 text-blue-300">Send us a Message</h2>

                        {submitStatus === 'success' && (
                            <div className="bg-green-900/30 border border-green-500/50 rounded-2xl p-6 mb-6 flex items-start gap-4">
                                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-green-300 mb-1">Message Sent!</h3>
                                    <p className="text-green-200 text-sm">Thank you for reaching out. We'll get back to you soon.</p>
                                </div>
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="bg-red-900/30 border border-red-500/50 rounded-2xl p-6 mb-6 flex items-start gap-4">
                                <div className="h-6 w-6 rounded-full bg-red-500/30 flex items-center justify-center text-red-300 text-lg font-bold flex-shrink-0">!</div>
                                <div>
                                    <h3 className="font-semibold text-red-300 mb-1">Error</h3>
                                    <p className="text-red-200 text-sm">{errorMessage}</p>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                                    Full Name
                                </label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-400 pointer-events-none" />
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your name"
                                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 pl-12 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all"
                                    />
                                </div>
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-400 pointer-events-none" />
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your.email@example.com"
                                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 pl-12 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all"
                                    />
                                </div>
                            </div>

                            {/* Subject Field */}
                            <div>
                                <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-2">
                                    Subject
                                </label>
                                <div className="relative">
                                    <MessageSquare className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-400 pointer-events-none" />
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        placeholder="How can we help?"
                                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 pl-12 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all"
                                    />
                                </div>
                            </div>

                            {/* Message Field */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Tell us more about your inquiry..."
                                    rows={6}
                                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 disabled:from-blue-500/50 disabled:to-cyan-500/50 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2 disabled:cursor-not-allowed"
                            >
                                <Send className="h-5 w-5" />
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-black/40 py-12 px-4 mt-16 border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
                        <div className="flex items-center space-x-2">
                            <Moon className="h-6 w-6 text-blue-400" />
                            <span className="text-xl font-bold">ZSleep</span>
                        </div>
                        <div className="flex justify-center gap-8 flex-wrap">
                            <a href="/" className="text-gray-400 hover:text-white transition">
                                Home
                            </a>
                            <a href="/privacy" className="text-gray-400 hover:text-white transition">
                                Privacy Policy
                            </a>
                            <a href="/terms" className="text-gray-400 hover:text-white transition">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                    <p className="text-center text-gray-400">© 2025 ZSleep. All rights reserved. | Crafted by KaiTeam</p>
                </div>
            </footer>
        </div>
    );
}
