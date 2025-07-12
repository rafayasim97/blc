import React, { useState, ReactNode } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { ContactPage } from './pages/ContactPage';
import { blogPosts } from './data/blogPosts';
import { NavLink } from './types';

function App() {
    const [currentPage, setCurrentPage] = useState<string>('Home');
    const [selectedPostId, setSelectedPostId] = useState<number | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const navigateTo = (page: string): void => {
        setCurrentPage(page);
        setSelectedPostId(null);
        setIsMenuOpen(false);
        window.scrollTo(0, 0);
    };

    const viewPost = (postId: number): void => {
        setSelectedPostId(postId);
        setCurrentPage('BlogPost');
        window.scrollTo(0, 0);
    }

    const navLinks: NavLink[] = [
        { name: 'Home' },
        { 
            name: 'Personal Immigration',
            megaMenu: [
                {
                    title: 'Partner & Family Visas',
                    links: [
                        { name: 'Spouse Visa' },
                        { name: 'Fiancé(e) Visa' },
                        { name: 'Unmarried Partner Visa' },
                        { name: 'Parent of a British Child' },
                    ]
                },
                {
                    title: 'Work Visas',
                    links: [
                        { name: 'Skilled Worker Visa' },
                        { name: 'Global Talent Visa' },
                        { name: 'High Potential Individual' },
                    ]
                },
                 {
                    title: 'Other Visas',
                    links: [
                        { name: 'Visitor Visa' },
                        { name: 'Student Visa' },
                        { name: 'Settlement / ILR' },
                        { name: 'British Citizenship' },
                    ]
                }
            ]
        },
        { 
            name: 'Business Immigration',
            megaMenu: [
                {
                    title: 'Sponsor Licenses',
                    links: [
                        { name: 'Sponsor License Application' },
                        { name: 'Sponsor License Renewal' },
                        { name: 'Compliance & Audits' },
                    ]
                },
                {
                    title: 'Business Visas',
                    links: [
                        { name: 'Innovator Founder Visa' },
                        { name: 'Scale-up Worker Visa' },
                        { name: 'Global Business Mobility' },
                    ]
                }
            ]
        },
        { name: 'About Us' },
        { name: 'Legal Updates' },
        { name: 'Contact' },
    ];

    const renderPage = (): ReactNode => {
        if (selectedPostId && currentPage === 'BlogPost') {
            const post = blogPosts.find(p => p.id === selectedPostId);
            return <BlogPostPage post={post} navigateTo={navigateTo} />;
        }

        // Create a list of all pages that should render the ServicesPage
        const servicePages = [
            'Personal Immigration', 
            'Business Immigration', 
            ...navLinks.flatMap(l => l.megaMenu?.flatMap(c => c.links.map(sl => sl.name)) ?? [])
        ];

        if (servicePages.includes(currentPage)) {
            return <ServicesPage navigateTo={navigateTo} />;
        }

        switch (currentPage) {
            case 'Home':
                return <HomePage navigateTo={navigateTo} />;
            case 'About Us':
                return <AboutPage />;
            case 'Legal Updates':
                return <BlogPage viewPost={viewPost} />;
            case 'Contact':
                return <ContactPage />;
            default:
                // If no match, default to home page
                return <HomePage navigateTo={navigateTo} />;
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen font-sans text-gray-700">
            <Header navLinks={navLinks} currentPage={currentPage} navigateTo={navigateTo} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <main className="pt-20">
                {renderPage()}
            </main>
            <Footer navigateTo={navigateTo} />
        </div>
    );
}

export default App;
