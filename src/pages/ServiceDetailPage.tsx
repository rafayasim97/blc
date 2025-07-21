import React from 'react';
import { BriefcaseIcon, UsersIcon } from '../components/Icons';
import { visaInfoData, VisaInfo } from '../data/visaInfo'; // Import from visaInfo.ts
import { servicesData, ServiceCategory, ServiceDetails as IServiceDetails } from '../data/services';

interface ServiceDetailPageProps {
    serviceId: string;
    navigateTo: (page: string) => void;
}

const getIconForService = (serviceTitle: string): React.ReactNode => {
    const category = servicesData.find((cat: ServiceCategory) => 
        cat.subServices.some((sub: IServiceDetails) => sub.title === serviceTitle)
    )?.category;
    
    return category === 'Personal Immigration'
        ? <UsersIcon className="w-12 h-12 text-brand-gold mr-6" /> 
        : <BriefcaseIcon className="w-12 h-12 text-brand-gold mr-6" />;
};

export function ServiceDetailPage({ serviceId, navigateTo }: ServiceDetailPageProps) {
    const serviceInfo = visaInfoData.find((info: VisaInfo) => info.id === serviceId);

    if (!serviceInfo) {
        return (
            <div className="py-20 text-center">
                <h1 className="text-2xl text-brand-blue">Service Not Found</h1>
                <p className="text-gray-600 mt-2">The details for this service could not be located.</p>
                <button onClick={() => navigateTo('Our Services')} className="text-brand-gold hover:underline mt-4">
                    &larr; Back to Our Services
                </button>
            </div>
        );
    }

    return (
        <div className="py-20 bg-brand-light">
            <div className="container mx-auto px-6 max-w-4xl">
                <button 
                    onClick={() => navigateTo('Our Services')} 
                    className="text-brand-gold hover:underline font-semibold mb-8 inline-block"
                >
                    &larr; Back to Our Services
                </button>
                <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
                    <div className="flex items-start mb-6">
                        <div className="flex-shrink-0 pt-1">{getIconForService(serviceInfo.title)}</div>
                        <div>
                            <h1 className="text-3xl md:text-4xl">{serviceInfo.title}</h1>
                            <p className="text-lg text-gray-500 mt-1">{serviceInfo.description}</p>
                        </div>
                    </div>

                    <div className="prose prose-lg max-w-none text-gray-700">
                        <h3 className="text-2xl text-brand-blue border-b border-gray-200 pb-2 mb-4">Eligibility Requirements</h3>
                        <ul className="list-disc list-outside pl-5 space-y-2 mb-6">
                            {serviceInfo.eligibility.map((point: string, index: number) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>

                        <h3 className="text-2xl text-brand-blue border-b border-gray-200 pb-2 mb-4">Application Process</h3>
                        <p>{serviceInfo.applicationProcess}</p>

                        {serviceInfo.familyMembers && (
                            <>
                                <h3 className="text-2xl text-brand-blue border-b border-gray-200 pb-2 mb-4 mt-6">Family Members</h3>
                                <p>{serviceInfo.familyMembers}</p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}