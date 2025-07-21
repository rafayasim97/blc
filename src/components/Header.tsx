import React, { Dispatch, SetStateAction, useState } from 'react';
import { NavLink } from '../types';
import { MenuIcon, XIcon } from './Icons';
import { servicesData } from '../data/services';
import { ServiceDetails } from '../types';

interface HeaderProps {
    navLinks: NavLink[];
    currentPage: string;
    navigateTo: (page: string) => void;
    isMenuOpen: boolean;
    setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export function Header({ navLinks, currentPage, navigateTo, isMenuOpen, setIsMenuOpen }: HeaderProps) {
    const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);

    const isSubLinkActive = (link: NavLink) => {
        if (!link.megaMenu) return false;
        const subLinkNames = link.megaMenu.flatMap(c => c.links.map(sl => sl.name));
        return subLinkNames.includes(currentPage);
    };

    const servicesLink = navLinks.find(link => link.name === 'Our Services');
    const isServicePageActive = servicesLink?.megaMenu?.flatMap(c => c.links).some(sl => sl.name === currentPage) || currentPage === 'Our Services';

    return (
        <header className="bg-white shadow-md fixed w-full top-0 z-50">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <div className="text-2xl font-serif font-bold text-brand-blue cursor-pointer" onClick={() => navigateTo('Home')}>
                    Berkshire Law <span className="text-brand-gold">Chambers</span>
                </div>
                
                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-2">
                    {navLinks.map(link => (
                        <div key={link.name} className="relative group">
                            {/* The padding here creates a "bridge" for the mouse */}
                            <div className="py-4 px-4">
                                <a
                                    href="#"
                                    onClick={(e) => { e.preventDefault(); navigateTo(link.name); }}
                                    className={`text-lg transition duration-300 flex items-center ${(currentPage === link.name || (link.name === 'Our Services' && isServicePageActive)) ? 'text-brand-gold' : 'text-brand-blue hover:text-brand-gold'}`}
                                >
                                    {link.name}
                                    {link.megaMenu && (
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    )}
                                </a>
                            </div>

                            {link.megaMenu && (
                                // "top-full" positions the menu right below the parent, and "mt-2" is removed to eliminate the gap
                                <div className="absolute left-1/2 -translate-x-1/2 top-full w-auto bg-brand-blue text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible z-10 p-6">
                                    <div className="flex space-x-12 min-w-max">
                                        {link.megaMenu.map(column => (
                                            <div key={column.title} className="flex-shrink-0">
                                                <h3 className="font-bold text-brand-gold mb-3 uppercase tracking-wider text-sm">{column.title}</h3>
                                                <ul className="space-y-2">
                                                    {column.links.map(subLink => (
                                                        <li key={subLink.name}>
                                                            <a
                                                                href="#"
                                                                onClick={(e) => { e.preventDefault(); navigateTo(subLink.name); }}
                                                                className={`block hover:text-brand-gold transition-colors whitespace-nowrap ${currentPage === subLink.name ? 'text-brand-gold' : 'text-gray-200'}`}
                                                            >
                                                                {subLink.name}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    <button onClick={() => navigateTo('Contact')} className="ml-6 bg-brand-gold hover:opacity-90 text-white font-bold py-2 px-6 rounded-md transition duration-300">
                        Book a Consultation
                    </button>
                </nav>
                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-blue focus:outline-none">
                        {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-200">
                    <nav className="flex flex-col">
                        {navLinks.map(link => (
                            <div key={link.name} className="w-full border-b">
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        if (!link.megaMenu) {
                                            navigateTo(link.name);
                                        } else {
                                            setOpenMobileMenu(openMobileMenu === link.name ? null : link.name);
                                        }
                                    }}
                                    className={`text-lg py-3 px-6 transition duration-300 block w-full flex justify-between items-center ${(currentPage === link.name || isSubLinkActive(link)) ? 'text-brand-gold font-semibold' : 'text-brand-blue'}`}
                                >
                                    <span>{link.name}</span>
                                    {link.megaMenu && (
                                        <svg className={`w-5 h-5 transition-transform ${openMobileMenu === link.name ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    )}
                                </a>
                                {link.megaMenu && openMobileMenu === link.name && (
                                    <div className="bg-gray-100 w-full pl-8 pb-2">
                                        {link.megaMenu.map(column => (
                                            <div key={column.title} className="py-2">
                                                <h3 className="font-semibold text-brand-blue mb-2">{column.title}</h3>
                                                {column.links.map(subLink => (
                                                    <a
                                                        key={subLink.name}
                                                        href="#"
                                                        onClick={(e) => { e.preventDefault(); navigateTo(subLink.name); }}
                                                        className={`block py-1 text-md hover:text-brand-gold ${currentPage === subLink.name ? 'text-brand-gold font-semibold' : 'text-gray-700'}`}
                                                    >
                                                        {subLink.name}
                                                    </a>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}