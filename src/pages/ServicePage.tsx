import React from 'react';
import { BriefcaseIcon, UsersIcon } from '../components/Icons';
import { servicesData } from '../data/services';

// A helper component to render the correct icon based on the string name
function ServiceIcon({ iconName }: { iconName: string }) {
    if (iconName === 'UsersIcon') {
        return <UsersIcon className="w-12 h-12 text-sky-600" />;
    }
    if (iconName === 'BriefcaseIcon') {
        return <BriefcaseIcon className="w-12 h-12 text-sky-600" />;
    }
    return null;
}

// Define the props interface for the ServicesPage component
interface ServicesPageProps {
    navigateTo: (page: string) => void;
}

export function ServicesPage({ navigateTo }: ServicesPageProps) {
    return (
        <div className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Our Immigration Services</h1>
                <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-16">
                    We offer a complete range of UK immigration services. Below is an overview of our main practice areas.
                </p>

                <div className="space-y-16">
                    {servicesData.map(service => (
                        <div key={service.category} className="bg-gray-50 p-8 md:p-12 rounded-lg shadow-lg">
                            <div className="flex flex-col md:flex-row items-center text-center md:text-left md:space-x-8 mb-8">
                                <div className="flex-shrink-0 mb-4 md:mb-0">
                                    <ServiceIcon iconName={service.icon} />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-800 mb-2">{service.category}</h2>
                                    <p className="text-lg text-gray-600">{service.description}</p>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {service.subServices.map(sub => (
                                    <div key={sub.title} className="bg-white border border-gray-200 p-6 rounded-lg">
                                        <h3 className="font-bold text-xl text-sky-700 mb-2">{sub.title}</h3>
                                        <p className="text-gray-600">{sub.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center bg-sky-700 text-white p-10 rounded-lg">
                    <h2 className="text-3xl font-bold mb-4">Have Questions About a Specific Visa?</h2>
                    <p className="text-lg text-sky-100 max-w-3xl mx-auto mb-6">
                        The UK's immigration rules are detailed and subject to change. For tailored advice on your specific circumstances and for more detail on any of our services, please get in touch with our expert team.
                    </p>
                    <button 
                        onClick={() => navigateTo('Contact')} 
                        className="bg-white text-sky-700 font-bold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105 inline-block"
                    >
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
}
