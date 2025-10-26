'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Download, Star, Users, Zap, Shield, Smartphone, ChevronRight } from 'lucide-react';

export default function MobileAppLanding() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
            {/* Navigation */}
            <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/50 backdrop-blur-lg' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-2">
                            <Smartphone className="h-8 w-8 text-purple-400" />
                            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">ZSleep</span>
                        </div>

                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#features" className="hover:text-purple-400 transition">Features</a>
                            <a href="#testimonials" className="hover:text-purple-400 transition">Reviews</a>
                            <a href="#pricing" className="hover:text-purple-400 transition">Pricing</a>
                            <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                                Download Now
                            </button>
                        </div>

                        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            {mobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <div className="md:hidden bg-black/90 backdrop-blur-lg">
                        <div className="px-4 py-4 space-y-3">
                            <a href="#features" className="block hover:text-purple-400 transition">Features</a>
                            <a href="#testimonials" className="block hover:text-purple-400 transition">Reviews</a>
                            <a href="#pricing" className="block hover:text-purple-400 transition">Pricing</a>
                            <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full">
                                Download Now
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8 animate-fade-in">
                            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                                Your Perfect
                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Mobile </span>
                                Companion
                            </h1>
                            <p className="text-xl text-gray-300">
                                Experience the future of mobile productivity. Download now and join over 1 million happy users worldwide.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2">
                                    <Download className="h-5 w-5" />
                                    Download for iOS
                                </button>
                                <button className="bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all border border-white/20">
                                    Download for Android
                                </button>
                            </div>
                            <div className="flex items-center gap-8 pt-4">
                                <div className="flex items-center gap-2">
                                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                                    <span className="text-sm">4.9/5 Rating</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users className="h-5 w-5 text-purple-400" />
                                    <span className="text-sm">1M+ Users</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20"></div>
                            <div className="relative bg-gradient-to-br from-purple-800/30 to-pink-800/30 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-4 h-96 flex items-center justify-center">
                                    <Smartphone className="h-48 w-48 text-purple-400/50" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 px-4 bg-black/20">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Powerful Features</h2>
                        <p className="text-xl text-gray-300">Everything you need in one beautiful app</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Zap, title: "Lightning Fast", desc: "Optimized performance for seamless experience" },
                            { icon: Shield, title: "Secure & Private", desc: "Your data is protected with end-to-end encryption" },
                            { icon: Users, title: "Collaborative", desc: "Work together with your team in real-time" }
                        ].map((feature, i) => (
                            <div key={i} className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all hover:scale-105">
                                <feature.icon className="h-12 w-12 text-purple-400 mb-4" />
                                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-gray-300">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Loved by Users</h2>
                        <p className="text-xl text-gray-300">See what our community has to say</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Sarah Johnson", role: "Product Designer", text: "This app has transformed how I work. Absolutely incredible!" },
                            { name: "Mike Chen", role: "Developer", text: "Best mobile app I've used. Clean, fast, and intuitive." },
                            { name: "Emma Davis", role: "Entrepreneur", text: "Can't imagine my workflow without it anymore. 5 stars!" }
                        ].map((review, i) => (
                            <div key={i} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, j) => (
                                        <Star key={j} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-gray-300 mb-4">&#34;{review.text}&#34;</p>
                                <div>
                                    <p className="font-semibold">{review.name}</p>
                                    <p className="text-sm text-gray-400">{review.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
                    <p className="text-xl mb-8 text-purple-100">Join millions of users and transform your mobile experience today</p>
                    <button className="bg-white text-purple-600 px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2 mx-auto">
                        Download Now
                        <ChevronRight className="h-5 w-5" />
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black/40 py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-center gap-8 mb-4">
                        <a href="/privacy" className="text-gray-400 hover:text-white transition">
                            Privacy Policy
                        </a>
                    </div>
                    <p className="text-center text-gray-400">© 2025 KaiTeam. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}