'use client'
import React from 'react';


export default function Landing() {
  return (
    <div>
      <section className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-32">
          <h1 className="text-5xl font-bold mb-4">Building Your Future</h1>
          <p className="text-xl mb-8">
            Quality Construction Services for Your Dream Projects
          </p>
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold">
            Get a Quote
          </button>
          <button className="bg-gray-500 text-black px-6 py-3 rounded-md font-semibold">
            About Us
          </button>
        </div>
      </section>
    </div>
  );
}
