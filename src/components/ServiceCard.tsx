import React, { ReactNode } from 'react';

interface ServiceCardProps {
    icon: ReactNode;
    title: string;
    description: string;
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition duration-300">
            <div className="flex justify-center">{icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}
