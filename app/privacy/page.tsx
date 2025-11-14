'use client';

import { Moon, Lock, ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
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
                        <Lock className="h-8 w-8 text-blue-400" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">Privacy Policy</h1>
                    <p className="text-lg text-gray-300">Last updated: November 14, 2025</p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="space-y-8">

                    <section className="bg-gradient-to-br from-blue-800/20 to-cyan-800/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all">
                        <h2 className="text-3xl font-bold mb-4 text-blue-300">1. Introduction</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Welcome to ZSleep. We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our mobile application and services.
                        </p>
                    </section>

                    <section className="bg-gradient-to-br from-blue-800/20 to-cyan-800/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all">
                        <h2 className="text-3xl font-bold mb-6 text-blue-300">2. Information We Collect</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-500/30 text-xs text-blue-300">2.1</span>
                                    Information You Provide
                                </h3>
                                <p className="text-gray-300 leading-relaxed ml-8">
                                    We collect information you provide directly to us, including your name, email address, phone number, profile information, and any other information you choose to provide when creating an account or using our services.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-500/30 text-xs text-blue-300">2.2</span>
                                    Sleep Data & Automatically Collected Information
                                </h3>
                                <p className="text-gray-300 leading-relaxed ml-8">
                                    When you use our app, we automatically collect your sleep data, device information including device type, operating system, unique device identifiers, IP address, and usage patterns such as app features accessed and time spent in the app.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-500/30 text-xs text-blue-300">2.3</span>
                                    Location Information
                                </h3>
                                <p className="text-gray-300 leading-relaxed ml-8">
                                    With your permission, we may collect timezone and location information to provide better sleep insights and personalized recommendations.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-gradient-to-br from-blue-800/20 to-cyan-800/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all">
                        <h2 className="text-3xl font-bold mb-4 text-blue-300">3. How We Use Your Information</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">We use the information we collect to:</p>
                        <ul className="space-y-2 text-gray-300 ml-4">
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">→</span>
                                <span>Provide, maintain, and improve our sleep tracking and meditation services</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">→</span>
                                <span>Generate personalized sleep insights and recommendations</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">→</span>
                                <span>Process subscriptions and transactions</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">→</span>
                                <span>Send technical notices and support messages</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">→</span>
                                <span>Respond to your inquiries and feedback</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">→</span>
                                <span>Monitor and improve app performance and user experience</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">→</span>
                                <span>Detect, prevent, and address technical issues</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">→</span>
                                <span>Comply with legal obligations</span>
                            </li>
                        </ul>
                    </section>

                    <section className="bg-gradient-to-br from-blue-800/20 to-cyan-800/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all">
                        <h2 className="text-3xl font-bold mb-4 text-blue-300">4. Information Sharing</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            We do not sell your personal information. We may share your information only in these circumstances:
                        </p>
                        <ul className="space-y-2 text-gray-300 ml-4">
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">→</span>
                                <span>With service providers who assist in operating our app</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">→</span>
                                <span>With your explicit consent</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">→</span>
                                <span>To comply with legal obligations or respond to lawful requests</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">→</span>
                                <span>To protect user safety and prevent fraud</span>
                            </li>
                        </ul>
                    </section>

                    <section className="bg-gradient-to-br from-blue-800/20 to-cyan-800/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all">
                        <h2 className="text-3xl font-bold mb-4 text-blue-300">5. Data Security</h2>
                        <p className="text-gray-300 leading-relaxed">
                            We implement advanced security measures to protect your sleep data. Your information is encrypted in transit and at rest, and we conduct regular security assessments to ensure your data remains safe from unauthorized access.
                        </p>
                    </section>

                    <section className="bg-gradient-to-br from-blue-800/20 to-cyan-800/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all">
                        <h2 className="text-3xl font-bold mb-4 text-blue-300">6. Data Retention</h2>
                        <p className="text-gray-300 leading-relaxed">
                            We retain your sleep data and personal information only as long as necessary to provide our services. You can delete your account and all associated data at any time through your app settings.
                        </p>
                    </section>

                    <section className="bg-gradient-to-br from-blue-800/20 to-cyan-800/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all">
                        <h2 className="text-3xl font-bold mb-4 text-blue-300">7. Your Rights</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">You have the right to:</p>
                        <ul className="space-y-2 text-gray-300 ml-4">
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">→</span>
                                <span>Access and download your sleep data</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">→</span>
                                <span>Correct inaccurate information</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">→</span>
                                <span>Request deletion of your account and data</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">→</span>
                                <span>Restrict data processing</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">→</span>
                                <span>Export your data in a portable format</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">→</span>
                                <span>Withdraw consent at any time</span>
                            </li>
                        </ul>
                    </section>

                    <section className="bg-gradient-to-br from-blue-800/20 to-cyan-800/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all">
                        <h2 className="text-3xl font-bold mb-4 text-blue-300">8. Children's Privacy</h2>
                        <p className="text-gray-300 leading-relaxed">
                            ZSleep is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. Parents or guardians who believe their child has provided information should contact us immediately.
                        </p>
                    </section>

                    <section className="bg-gradient-to-br from-blue-800/20 to-cyan-800/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all">
                        <h2 className="text-3xl font-bold mb-4 text-blue-300">9. Changes to This Policy</h2>
                        <p className="text-gray-300 leading-relaxed">
                            We may update this privacy policy periodically. We will notify you of significant changes by updating the "Last updated" date and posting the new policy on this page. We recommend reviewing this policy regularly.
                        </p>
                    </section>

                    <section className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 border border-blue-400/30">
                        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                        <p className="text-blue-100 leading-relaxed mb-4">
                            If you have any questions or concerns about our privacy practices:
                        </p>
                        <div className="space-y-2 text-blue-100">
                            <p className="flex items-center gap-2">
                                <span className="text-lg">✉</span>
                                <span><strong>Email:</strong> privacy@zsleep.app</span>
                            </p>
                            <p className="flex items-center gap-2">
                                <span className="text-lg">🌐</span>
                                <span><strong>Website:</strong> www.zsleep.app</span>
                            </p>
                        </div>
                    </section>

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
                            <a href="/terms" className="text-gray-400 hover:text-white transition">
                                Terms of Service
                            </a>
                            <a href="/contact" className="text-gray-400 hover:text-white transition">
                                Contact
                            </a>
                        </div>
                    </div>
                    <p className="text-center text-gray-400">© 2025 ZSleep. All rights reserved. | Crafted by KaiTeam</p>
                </div>
            </footer>
        </div>
    );
}