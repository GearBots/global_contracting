'use client'
import React from 'react';


export default function Landing() {
  return (
    <div>
      <section className="bg-gray-900 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto px-4 py-16">

          <div className="space-y-6">
            <h1 className='text-5xl md:text-6xl font-bold leading-tight'>Global Contracting</h1>
            <p className='text-lg md:text-xl text-gray-300'>Our team of experts can help you with any project.</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Contact Us!</button>
          </div>
          <div>
            <div className='w-[30rem] h-[35rem] overflow-hidden rounded-t-[15rem] border-8 border-solid border-gray-500'>
              <img className='w-full h-full object-cover scale-110 transform hover:scale-125 transition-transform duration-300' src='stock-appartment.svg' alt='logo' />
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
