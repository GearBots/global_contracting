'use client'

import React, { useState } from 'react';
import ContactForm from './ContactForm';

export default function Contact() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const services = [
        { title: 'Phone Number', description: '121-121-1212' },
        { title: 'Email', description: 'globalcontractingllc@yahoo.com' },
    ];

    return (
        <section className="bg-gray-900 text-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-gray-700 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="mb-4">{service.description}</p>
                            <button 
                                onClick={() => setIsModalOpen(true)} 
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Reach Out
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <ContactForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}