
import React from 'react';
import { Testimonial } from '../data/testimonials';

const StarRating = ({ rating }: { rating: number }) => {
    return (
        <div className="flex text-yellow-400">
            {[...Array(5)].map((_, index) => (
                <svg
                    key={index}
                    className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.368-2.448a1 1 0 00-1.176 0l-3.368 2.448c-.784.57-1.838-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.051 9.392c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
                </svg>
            ))}
        </div>
    );
};


export function TestimonialCard({ name, role, title, text, rating, imageUrl }: Testimonial) {
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col h-full">
            <div className="flex-grow">
                <div className="flex items-center mb-4">
                    <img src={imageUrl} alt={name} className="w-14 h-14 rounded-full mr-4 object-cover" />
                    <div>
                        <h3 className="font-bold text-lg text-secondary">{name}</h3>
                        <p className="text-sm text-gray-500">{role}</p>
                    </div>
                </div>
                <h4 className="font-semibold text-xl text-primary-800 mb-2">"{title}"</h4>
                <p className="text-gray-600 mb-4">
                    {text}
                </p>
            </div>
            <div className="mt-auto">
                 <StarRating rating={rating} />
            </div>
        </div>
    );
}