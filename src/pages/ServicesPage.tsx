import React from 'react';
import { Service } from '../types';
import { BriefcaseIcon } from '../components/Icons';

export function ServicesPage() {
    const servicesList: Service[] = [
        { title: "Skilled Worker Visa", description: "For individuals who have a job offer in the UK from an approved employer. We assist both applicants and sponsors." },
        { title: "Spouse & Partner Visas", description: "Helping partners and spouses of British citizens or settled persons to join them in the UK." },
        { title: "Global Talent Visa", description: "For leaders or potential leaders in academia, research, arts and culture, or digital technology." },
        { title: "Student Visas", description: "Guidance for prospective students on securing a visa to study at a UK educational institution." },
        { title: "Indefinite Leave to Remain (ILR)", description: "Assisting eligible individuals in applying for settlement, the first step towards British citizenship." },
        { title: "British Citizenship", description: "Expert advice on naturalisation and registration applications to become a British citizen." },
        { title: "Business Immigration", description: "Comprehensive solutions for entrepreneurs and businesses, including Innovator Founder and sponsor licensing." },
        { title: "Appeals & Judicial Reviews", description: "Robust representation for clients challenging Home Office decisions at the tribunal or higher courts." },
    ];

    return (
        <div className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Our Immigration Services</h1>
                <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-16">
                    We offer a complete range of UK immigration services. Our experts are equipped to handle cases of any complexity with precision and care.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {servicesList.map(service => (
                        <div key={service.title} className="bg-white p-8 rounded-lg shadow-lg flex items-start space-x-6">
                            <div className="flex-shrink-0">
                                <BriefcaseIcon className="w-10 h-10 text-sky-600" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
