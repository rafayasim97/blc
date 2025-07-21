import React, { useState } from 'react';
import { FormState } from '../types';
import { PhoneIcon, MailIcon, MapPinIcon } from '../components/Icons';

export function ContactPage() {
    const [formState, setFormState] = useState<FormState>({ name: '', email: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = e.target;
        setFormState(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        console.log('Form submitted:', formState);
        setIsSubmitted(true);
    };

    return (
        <div className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl font-bold text-center text-secondary mb-4">Get In Touch</h1>
                <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-16">
                    We are here to help. Contact us for a confidential consultation about your immigration matter.
                </p>
                <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-2xl font-bold text-secondary mb-6">Send us a Message</h2>
                            {isSubmitted ? (
                                <div className="bg-primary-100 border-l-4 border-primary-500 text-primary-700 p-4 rounded-md" role="alert">
                                    <p className="font-bold">Thank You!</p>
                                    <p>Your message has been sent. We will get back to you shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name</label>
                                        <input type="text" id="name" name="name" value={formState.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" required />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
                                        <input type="email" id="email" name="email" value={formState.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" required />
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                                        <textarea id="message" name="message" rows={5} value={formState.message} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" required></textarea>
                                    </div>
                                    <button type="submit" className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                                        Submit Inquiry
                                    </button>
                                </form>
                            )}
                        </div>
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-secondary mb-4">Contact Information</h2>
                                <div className="flex items-center space-x-4 text-lg text-gray-600 mb-4">
                                    <PhoneIcon className="w-6 h-6 text-primary-600" />
                                    <span>0781 044 7971</span>
                                </div>
                                <div className="flex items-center space-x-4 text-lg text-gray-600 mb-4">
                                    <MailIcon className="w-6 h-6 text-primary-600" />
                                    <span>info@blclegal.co.uk</span>
                                </div>
                                <div className="flex items-start space-x-4 text-lg text-gray-600">
                                    <MapPinIcon className="w-6 h-6 text-primary-600 mt-1 flex-shrink-0" />
                                    <span>Unit 8, Westpoint, 328 Bath Road, Hounslow, London TW4 7HW</span>
                                </div>
                            </div>
                             <div>
                                <h2 className="text-2xl font-bold text-secondary mb-4">Office Hours</h2>
                                <p className="text-lg text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                                <p className="text-lg text-gray-600">Saturday - Sunday: Closed</p>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}