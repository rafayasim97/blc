import React from 'react';
import { BriefcaseIcon, UsersIcon } from '../components/Icons';
import { servicesData } from '../data/services';

function ServiceIcon({ iconName }: { iconName: string }) {
    if (iconName === 'UsersIcon') {
        return <UsersIcon className="w-12 h-12 text-brand-gold" />;
    }
    if (iconName === 'BriefcaseIcon') {
        return <BriefcaseIcon className="w-12 h-12 text-brand-gold" />;
    }
    return null;
}

interface ServicesPageProps {
    navigateTo: (page: string) => void;
}

export function ServicesPage({ navigateTo }: ServicesPageProps) {
    return (
        <div className="py-20 bg-brand-light">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl text-center mb-4">Our Immigration Services</h1>
                <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-16">
                    We offer a complete range of UK immigration services. Below is an overview of our main practice areas. Click on any service to learn more.
                </p>

                <div className="space-y-16">
                    {servicesData.map(service => (
                        <div key={service.category} className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
                            <div className="flex flex-col md:flex-row items-center text-center md:text-left md:space-x-8 mb-8">
                                <div className="flex-shrink-0 mb-4 md:mb-0">
                                    <ServiceIcon iconName={service.icon} />
                                </div>
                                <div>
                                    <h2 className="text-3xl mb-2">{service.category}</h2>
                                    <p className="text-lg text-gray-600">{service.description}</p>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {service.subServices.map(sub => (
                                    <div 
                                        key={sub.title} 
                                        onClick={() => navigateTo(sub.title)} 
                                        className="bg-brand-light border border-gray-200 p-6 rounded-lg cursor-pointer transition hover:shadow-xl hover:bg-brand-gold hover:text-white group"
                                    >
                                        <h3 className="font-bold text-xl text-brand-blue mb-2 group-hover:text-white">{sub.title}</h3>
                                        <p className="text-gray-600 group-hover:text-gray-200">{sub.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}