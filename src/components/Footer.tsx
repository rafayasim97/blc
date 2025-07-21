import React from 'react';
import { WhatsAppIcon, FacebookIcon, InstagramIcon } from './Icons'; // Import social media icons

interface FooterProps {
    navigateTo: (page: string) => void;
}

export function Footer({ navigateTo }: FooterProps) {
    return (
        <footer className="bg-brand-blue text-gray-300">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Berkshire Law <span className="text-brand-gold">Chambers</span></h3>
                        <p className="text-gray-400">Your trusted partner for all UK immigration matters.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <ul>
                            <li className="mb-2"><button type="button" onClick={() => navigateTo('Home')} className="hover:text-brand-gold transition text-left">Home</button></li>
                            <li className="mb-2"><button type="button" onClick={() => navigateTo('About Us')} className="hover:text-brand-gold transition text-left">About Us</button></li>
                            <li className="mb-2"><button type="button" onClick={() => navigateTo('Our Services')} className="hover:text-brand-gold transition text-left">Our Services</button></li>
                            <li className="mb-2"><button type="button" onClick={() => navigateTo('Legal Updates')} className="hover:text-brand-gold transition text-left">Legal Updates</button></li>
                            <li className="mb-2"><button type="button" onClick={() => navigateTo('Contact')} className="hover:text-brand-gold transition text-left">Contact</button></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
                        <p className="text-gray-400 text-sm">
                            Berkshire Law Chambers is authorised and regulated by the Solicitors Regulation Authority (SRA No. 123456). This website is for informational purposes only and does not constitute legal advice.
                        </p>
                    </div>
                     <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://wa.me/+447810447971" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold transition">
                                <WhatsAppIcon className="w-6 h-6" />
                            </a>
                            <a href="https://facebook.com/Berkshirelawchamber" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold transition">
                                <FacebookIcon className="w-6 h-6" />
                            </a>
                            <a href="https://instagram.com/YOURINSTAGRAMHANDLE" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold transition">
                                <InstagramIcon className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Berkshire Law Chambers. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}