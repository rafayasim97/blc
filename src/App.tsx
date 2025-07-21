import React, { useState, ReactNode } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicePage'; 
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { ContactPage } from './pages/ContactPage';
import { blogPosts } from './data/blogPosts';
import { servicesData } from './data/services';
import { visaInfoData } from './data/visaInfo';
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
        { name: 'About Us' },
        { 
            name: 'Our Services',
            megaMenu: servicesData.map(service => ({
              title: service.category,
              links: service.subServices.map(sub => ({ name: sub.title }))
            }))
        },
        { name: 'Legal Updates' },
        { name: 'Contact' },
    ];

    const renderPage = (): ReactNode => {
        if (selectedPostId && currentPage === 'BlogPost') {
            const post = blogPosts.find(p => p.id === selectedPostId);
            return <BlogPostPage post={post} navigateTo={navigateTo} />;
        }
        
        // Find the service by matching the currentPage title with an ID in visaInfoData
        const serviceInfo = visaInfoData.find(info => info.id === currentPage || info.title === currentPage);

        if (serviceInfo) {
            return <ServiceDetailPage serviceId={serviceInfo.id} navigateTo={navigateTo} />;
        }

        switch (currentPage) {
            case 'Home':
                return <HomePage navigateTo={navigateTo} />;
            case 'About Us':
                return <AboutPage />;
            case 'Our Services':
            case 'Personal Immigration':
            case 'Business Immigration':
                return <ServicesPage navigateTo={navigateTo} />;
            case 'Legal Updates':
                return <BlogPage viewPost={viewPost} />;
            case 'Contact':
                return <ContactPage />;
            default:
                return <HomePage navigateTo={navigateTo} />;
        }
    };

    return (
        <div className="bg-brand-light min-h-screen font-sans">
            <Header navLinks={navLinks} currentPage={currentPage} navigateTo={navigateTo} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <main className="pt-20">
                {renderPage()}
            </main>
            <Footer navigateTo={navigateTo} />
        </div>
    );
}

export default App;