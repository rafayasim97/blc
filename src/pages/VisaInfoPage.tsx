import React from 'react';
import { VisaInfo } from '../data/visaInfo';

interface VisaInfoPageProps {
    visa: VisaInfo;
    navigateTo: (page: string) => void;
}

export function VisaInfoPage({ visa, navigateTo }: VisaInfoPageProps) {
    if (!visa) {
        return (
            <div className="py-20 text-center">
                <p>Visa information not found.</p>
                <button onClick={() => navigateTo('Services')} className="text-sky-600 hover:text-sky-700 mt-4">Back to Services</button>
            </div>
        );
    }

    return (
        <div className="py-20 bg-white">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">{visa.title}</h1>
                <p className="text-lg text-gray-600 mb-8">{visa.description}</p>

                <div className="prose lg:prose-xl max-w-none text-gray-700 space-y-6">
                    <h2 className="text-2xl font-semibold text-gray-800">Eligibility Requirements</h2>
                    <ul className="list-disc list-inside space-y-2">
                        {visa.eligibility.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    <h2 className="text-2xl font-semibold text-gray-800 mt-10">Application Process</h2>
                    <p>{visa.applicationProcess}</p>

                    {visa.familyMembers && (
                        <>
                            <h2 className="text-2xl font-semibold text-gray-800 mt-10">Family Members</h2>
                            <p>{visa.familyMembers}</p>
                        </>
                    )}
                </div>

                <div className="mt-12 bg-sky-50 p-8 rounded-lg text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Need Assistance?</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
                        The immigration rules are complex and subject to change. For tailored advice on your specific circumstances, please get in touch with our expert team.
                    </p>
                    <button
                        onClick={() => navigateTo('Contact')}
                        className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105"
                    >
                        Contact Us for a Consultation
                    </button>
                </div>
            </div>
        </div>
    );
}