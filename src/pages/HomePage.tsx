import React from 'react';
import { ServiceCard } from '../components/ServiceCard';
import { BriefcaseIcon, UsersIcon, HomeIcon, ArrowRightIcon } from '../components/Icons';

interface HomePageProps {
    navigateTo: (page: string) => void;
}

export function HomePage({ navigateTo }: HomePageProps) {
    return (
        <div>
            <section className="bg-cover bg-center h-[60vh] md:h-[80vh]" style={{ backgroundImage: "url('https://placehold.co/1920x1080/e0f2fe/0c4a6e?text=Your+Gateway+to+the+UK')" }}>
                <div className="bg-black bg-opacity-50 h-full flex items-center">
                    <div className="container mx-auto px-6 text-center text-white">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">Expert UK Immigration & Visa Advice</h1>
                        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">Navigating the complexities of UK immigration law with clarity, professionalism, and success.</p>
                        <button onClick={() => navigateTo('Contact')} className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105">
                            Book a Consultation
                        </button>
                    </div>
                </div>
            </section>
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Trusted Partner in Immigration</h2>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-10">
                        At Berkshire Law Chambers, we provide bespoke legal solutions for individuals, families, and businesses. Our dedicated team of specialists is committed to providing clear, comprehensive advice to guide you through every step of your immigration journey.
                    </p>
                    <button onClick={() => navigateTo('About')} className="text-sky-600 hover:text-sky-700 font-semibold text-lg">
                        Learn More About Us <ArrowRightIcon className="inline w-5 h-5" />
                    </button>
                </div>
            </section>
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Core Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ServiceCard
                            icon={<BriefcaseIcon className="w-12 h-12 text-sky-600 mb-4" />}
                            title="Skilled Worker & Business Visas"
                            description="Assisting UK businesses with sponsor licenses and guiding skilled professionals through the application process."
                        />
                        <ServiceCard
                            icon={<UsersIcon className="w-12 h-12 text-sky-600 mb-4" />}
                            title="Family & Partner Visas"
                            description="Reuniting families by navigating spouse, partner, parent, and child visa applications with compassion and expertise."
                        />
                        <ServiceCard
                            icon={<HomeIcon className="w-12 h-12 text-sky-600 mb-4" />}
                            title="Settlement & Citizenship"
                            description="Guiding you on your final step to permanent residency (ILR) and British Citizenship."
                        />
                    </div>
                    <div className="text-center mt-12">
                        <button onClick={() => navigateTo('Services')} className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
                            View All Services
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
