import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


export default function Navbar() {
  const navLinks = [
    { title: 'What We Do', href: '/about' },
    { title: 'Services', href: '/services' },
    { title: 'Projects', href: '/projects' },
    { title: 'Contact', href: '/contact' },
  ];

  return (
    <nav className='flex justify-between items-center max-container padding-container relative z-30 py-5'>
      <Link href='/'>
        <Image src='/xx-lager.svg' width={60} height={60} alt='logo' />
      </Link>

      <ul className='hidden lg:flex items-center space-x-7'>
        {navLinks.map(({ title, href }) => (
          <li key={title}>
            <Link href={href} className='regular-16 text-grey-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
