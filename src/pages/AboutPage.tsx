import React from 'react';
import { TeamMember } from '../types';

export function AboutPage() {
    const teamMembers: TeamMember[] = [
        { name: 'Akhtar Gondal', role: 'Solicitor', imageUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500' },
        // { name: 'James Holloway', role: 'Immigration Solicitor', imageUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500' },
        { name: 'Aisha Khan', role: 'Paralegal & Caseworker', imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500' },
    ];

    return (
        <div className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl font-bold text-center text-secondary mb-4">About Berkshire Law Chambers</h1>
                <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-16">
                    Founded on the principles of integrity, excellence, and dedication, our firm has been at the forefront of UK immigration law for over a decade. We believe in a client-centric approach, offering personalized strategies for complex immigration challenges.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img src="/assets/team.jpeg" alt="Our Office" className="rounded-lg shadow-xl" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-semibold text-secondary mb-4">Our Mission</h2>
                        <p className="text-gray-600 mb-4">
                            Our mission is to demystify the UK immigration process. We strive to provide clear, honest, and effective legal representation to help our clients achieve their personal and professional goals in the United Kingdom. We handle every case with the utmost professionalism and confidentiality.
                        </p>
                        <h2 className="text-3xl font-semibold text-secondary mb-4 mt-8">Our Values</h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                            <li><strong>Client-Focused:</strong> Your success is our priority. We listen and adapt to your unique needs.</li>
                            <li><strong>Expertise:</strong> Our team stays ahead of the curve on all legislative changes.</li>
                            <li><strong>Integrity:</strong> We operate with transparency and the highest ethical standards.</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-24">
                    <h2 className="text-3xl font-bold text-center text-secondary mb-12">Meet Our Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map(member => (
                            <div key={member.name} className="bg-gray-50 p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                                <img src={member.imageUrl} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-primary-200 object-cover" />
                                <h3 className="text-xl font-bold text-secondary">{member.name}</h3>
                                <p className="text-primary-700 font-semibold">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}