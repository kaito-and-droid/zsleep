'use client';

import { Smartphone, Shield, ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
            {/* Navigation */}
            <nav className="bg-black/50 backdrop-blur-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-2">
                            <Smartphone className="h-8 w-8 text-purple-400" />
                            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">ZSleep</span>
                        </div>
                        <a href="/" className="flex items-center gap-2 hover:text-purple-400 transition">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Home
                        </a>
                    </div>
                </div>
            </nav>

            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <Shield className="h-16 w-16 mx-auto mb-4 text-white" />
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
                    <p className="text-lg text-purple-100">Last updated: October 26, 2025</p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 space-y-8">

                    <section>
                        <h2 className="text-3xl font-bold mb-4 text-purple-300">1. Introduction</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Welcome to ZSleep. We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our mobile application and services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-4 text-purple-300">2. Information We Collect</h2>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">2.1 Information You Provide</h3>
                                <p className="leading-relaxed">
                                    We collect information you provide directly to us, including your name, email address, phone number, profile information, and any other information you choose to provide when creating an account or using our services.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">2.2 Automatically Collected Information</h3>
                                <p className="leading-relaxed">
                                    When you use our app, we automatically collect certain information about your device, including device type, operating system, unique device identifiers, IP address, mobile network information, and usage data such as app features accessed and time spent in the app.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">2.3 Location Information</h3>
                                <p className="leading-relaxed">
                                    With your permission, we may collect and process information about your actual location using GPS, wireless networks, and cell tower information to provide location-based services.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-4 text-purple-300">3. How We Use Your Information</h2>
                        <p className="text-gray-300 leading-relaxed mb-3">We use the information we collect to:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li>Provide, maintain, and improve our services</li>
                            <li>Process transactions and send related information</li>
                            <li>Send you technical notices, updates, and support messages</li>
                            <li>Respond to your comments and questions</li>
                            <li>Personalize and improve your experience</li>
                            <li>Monitor and analyze trends, usage, and activities</li>
                            <li>Detect, prevent, and address technical issues and fraudulent activity</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-4 text-purple-300">4. Information Sharing</h2>
                        <div className="space-y-4 text-gray-300">
                            <p className="leading-relaxed">
                                We do not sell your personal information. We may share your information in the following circumstances:
                            </p>
                            <ul className="list-disc list-inside space-y-2">
                                <li>With service providers who perform services on our behalf</li>
                                <li>With your consent or at your direction</li>
                                <li>To comply with legal obligations or respond to lawful requests</li>
                                <li>To protect the rights and safety of our users and others</li>
                                <li>In connection with a merger, sale, or acquisition of our business</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-4 text-purple-300">5. Data Security</h2>
                        <p className="text-gray-300 leading-relaxed">
                            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption of data in transit and at rest, regular security assessments, and strict access controls.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-4 text-purple-300">6. Data Retention</h2>
                        <p className="text-gray-300 leading-relaxed">
                            We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. When we no longer need your information, we will securely delete or anonymize it.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-4 text-purple-300">7. Your Rights</h2>
                        <p className="text-gray-300 leading-relaxed mb-3">You have the right to:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            <li>Access and receive a copy of your personal data</li>
                            <li>Correct inaccurate or incomplete data</li>
                            <li>Request deletion of your data</li>
                            <li>Object to or restrict processing of your data</li>
                            <li>Data portability</li>
                            <li>Withdraw consent at any time</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-4 text-purple-300">8. Children's Privacy</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-4 text-purple-300">9. International Data Transfers</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this privacy policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-4 text-purple-300">10. Changes to This Policy</h2>
                        <p className="text-gray-300 leading-relaxed">
                            We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-4 text-purple-300">11. Contact Us</h2>
                        <div className="text-gray-300 leading-relaxed space-y-2">
                            <p>If you have any questions about this Privacy Policy, please contact us:</p>
                            <p>Email: kaiteam@proton.me</p>
                            <p>Address: 192.168.1.1</p>
                        </div>
                    </section>

                </div>
            </div>

            {/* Footer */}
            <footer className="bg-black/40 py-8 px-4 mt-12">
                <div className="max-w-7xl mx-auto text-center text-gray-400">
                    <p>© 2025 KaiTeam. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}