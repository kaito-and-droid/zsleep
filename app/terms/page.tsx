'use client';

import { Moon, FileText, ArrowLeft } from 'lucide-react';

export default function TermsOfService() {
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
                        <FileText className="h-8 w-8 text-blue-400" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">Terms of Service</h1>
                    <p className="text-lg text-gray-300">Last updated: November 14, 2025</p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="space-y-8">

                    <section className="bg-gradient-to-br from-blue-800/20 to-cyan-800/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all">
                        <h2 className="text-3xl font-bold mb-4 text-blue-300">1. Agreement to Terms</h2>
                        <p className="text-gray-300 leading-relaxed">
                            By downloading, installing, and using the ZSleep application (the "App"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the App. We may modify these terms at any time, and such modifications become effective upon posting to the App.
                        </p>
                    </section>

                    <section className="bg-gradient-to-br from-blue-800/20 to-cyan-800/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all">
                        <h2 className="text-3xl font-bold mb-4 text-blue-300">2. Eligibility</h2>
                        <p className="text-gray-300 leading-relaxed">
                            You must be at least 13 years old to use ZSleep. If you are under 18, you represent that you have obtained parental or guardian consent to use the App. By using ZSleep, you warrant that you are old enough to form a binding contract with us.
                        </p>
                    </section>

                    <section className="bg-gradient-to-br from-blue-800/20 to-cyan-800/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all">
                        <h2 className="text-3xl font-bold mb-6 text-blue-300">3. License and Usage Rights</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-500/30 text-xs text-blue-300">3.1</span>
                                    Grant of License
                                </h3>
                                <p className="text-gray-300 leading-relaxed ml-8">
                                    Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, and revocable license to download and use ZSleep on your personal mobile device for personal, non-commercial purposes only.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-500/30 text-xs text-blue-300">3.2</span>
                                    Prohibited Uses
                                </h3>
                                <p className="text-gray-300 leading-relaxed ml-8 mb-3">
                                    You agree not to:
                                </p>
                                <ul className="space-y-2 text-gray-300 ml-12">
                                    <li className="flex items-start gap-3">
                                        <span className="text-blue-400 mt-1">→</span>
                                        <span>Reverse engineer, decompile, or attempt to derive the source code of ZSleep</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-blue-400 mt-1">→</span>
                                        <span>Use the App for any unlawful purposes or in violation of any laws</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-blue-400 mt-1">→</span>
                                        <span>Violate the rights of others, including intellectual property rights</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-blue-400 mt-1">→</span>
                                        <span>Attempt to gain unauthorized access to the App or its systems</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-blue-400 mt-1">→</span>
                                        <span>Transmit viruses or malicious code</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-blue-400 mt-1">→</span>
                                        <span>Share your account credentials with others</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="bg-gradient-to-br from-blue-800/20 to-cyan-800/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all">
                        <h2 className="text-3xl font-bold mb-4 text-blue-300">4. User Accounts</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            When you create a ZSleep account, you are responsible for:
                        </p>
                        <ul className="space-y-2 text-gray-300 ml-4">
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">→</span>
                                <span>Providing accurate, complete, and current information</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">→</span>
                                <span>Maintaining the confidentiality of your password and account</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">→</span>
                                <span>All activities that occur under your account</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">→</span>
                                <span>Notifying us immediately of any unauthorized use of your account</span>
                            </li>
                        </ul>
                    </section>

                    <section className="bg-gradient-to-br from-blue-800/20 to-cyan-800/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all">
                        <h2 className="text-3xl font-bold mb-4 text-blue-300">5. Subscription and Payments</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            If you purchase a premium subscription through ZSleep:
                        </p>
                        <ul className="space-y-2 text-gray-300 ml-4">
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">→</span>
                                <span>Payment is processed through RevenueCat and your device's app store</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">→</span>
                                <span>Your subscription will automatically renew at the end of each billing period</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">→</span>
                                <span>You can cancel your subscription at any time through your device settings</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">→</span>
                                <span>Refunds are subject to app store policies</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">→</span>
                                <span>We reserve the right to change prices with 30 days' notice</span>
                            </li>
                        </ul>
                    </section>

                    <section className="bg-gradient-to-br from-blue-800/20 to-cyan-800/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all">
                        <h2 className="text-3xl font-bold mb-4 text-blue-300">6. Intellectual Property Rights</h2>
                        <p className="text-gray-300 leading-relaxed">
                            All content in ZSleep, including text, graphics, logos, images, audio, and software, is the exclusive property of KaiTeam or its content providers. Your use of the App does not grant you ownership rights to any content. The ZSleep name and logo are trademarks of KaiTeam and may not be used without permission.
                        </p>
                    </section>

                    <section className="bg-gradient-to-br from-blue-800/20 to-cyan-800/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all">
                        <h2 className="text-3xl font-bold mb-4 text-blue-300">7. Medical Disclaimer</h2>
                        <p className="text-gray-300 leading-relaxed">
                            ZSleep is designed for tracking and improving sleep quality. It is not a medical device and is not intended to diagnose, treat, cure, or prevent any disease. The meditation and sleep tracking features are for informational purposes only. Always consult with a healthcare provider regarding sleep disorders or health concerns.
                        </p>
                    </section>

                    <section className="bg-gradient-to-br from-blue-800/20 to-cyan-800/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all">
                        <h2 className="text-3xl font-bold mb-4 text-blue-300">8. Limitation of Liability</h2>
                        <p className="text-gray-300 leading-relaxed mb-3">
                            To the maximum extent permitted by law:
                        </p>
                        <ul className="space-y-2 text-gray-300 ml-4">
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">→</span>
                                <span>ZSleep is provided "as-is" without warranties of any kind</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">→</span>
                                <span>We are not liable for indirect, incidental, or consequential damages</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">→</span>
                                <span>Our total liability shall not exceed the amount you paid for ZSleep</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">→</span>
                                <span>We are not responsible for data loss or unauthorized access to your account</span>
                            </li>
                        </ul>
                    </section>

                    <section className="bg-gradient-to-br from-blue-800/20 to-cyan-800/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all">
                        <h2 className="text-3xl font-bold mb-4 text-blue-300">9. Disclaimer of Warranties</h2>
                        <p className="text-gray-300 leading-relaxed">
                            ZSLEEP IS PROVIDED ON AN "AS-IS" AND "AS-AVAILABLE" BASIS. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, OR VIRUS-FREE.
                        </p>
                    </section>

                    <section className="bg-gradient-to-br from-blue-800/20 to-cyan-800/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all">
                        <h2 className="text-3xl font-bold mb-4 text-blue-300">10. Indemnification</h2>
                        <p className="text-gray-300 leading-relaxed">
                            You agree to indemnify and hold harmless KaiTeam and its officers, directors, employees, and agents from any claims, damages, or costs arising from your use of ZSleep or violation of these Terms.
                        </p>
                    </section>

                    <section className="bg-gradient-to-br from-blue-800/20 to-cyan-800/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all">
                        <h2 className="text-3xl font-bold mb-4 text-blue-300">11. Termination</h2>
                        <p className="text-gray-300 leading-relaxed">
                            We may terminate or suspend your account and access to ZSleep immediately, without prior notice or liability, if you violate any provision of these Terms or engage in conduct that we believe is harmful to the App or other users.
                        </p>
                    </section>

                    <section className="bg-gradient-to-br from-blue-800/20 to-cyan-800/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all">
                        <h2 className="text-3xl font-bold mb-4 text-blue-300">12. Governing Law</h2>
                        <p className="text-gray-300 leading-relaxed">
                            These Terms are governed by and construed in accordance with the laws of the jurisdiction where KaiTeam is located, without regard to its conflict of law provisions. Any legal action or proceeding shall be brought exclusively in the courts located in that jurisdiction.
                        </p>
                    </section>

                    <section className="bg-gradient-to-br from-blue-800/20 to-cyan-800/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all">
                        <h2 className="text-3xl font-bold mb-4 text-blue-300">13. Severability</h2>
                        <p className="text-gray-300 leading-relaxed">
                            If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full effect, and the invalid provision shall be modified to the minimum extent necessary to make it valid.
                        </p>
                    </section>

                    <section className="bg-gradient-to-br from-blue-800/20 to-cyan-800/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all">
                        <h2 className="text-3xl font-bold mb-4 text-blue-300">14. Entire Agreement</h2>
                        <p className="text-gray-300 leading-relaxed">
                            These Terms constitute the entire agreement between you and KaiTeam regarding ZSleep and supersede all prior agreements and understandings. If there is any conflict between these Terms and any other document, these Terms shall prevail.
                        </p>
                    </section>

                    <section className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 border border-blue-400/30">
                        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                        <p className="text-blue-100 leading-relaxed mb-4">
                            If you have questions about these Terms of Service:
                        </p>
                        <div className="space-y-2 text-blue-100">
                            <p className="flex items-center gap-2">
                                <span className="text-lg">✉</span>
                                <span><strong>Email:</strong> legal@zsleep.app</span>
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
                            <a href="/privacy" className="text-gray-400 hover:text-white transition">
                                Privacy Policy
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
