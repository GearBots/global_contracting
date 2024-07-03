'use client'
import Link from 'next/link';

export default function Header(){
    return (
        <header className = "navbar bg-base-100">
            <div className = "navbar-start px-4">Actual Logo here </div>

            <div className = "navbar-end">
                <div className="px-4">
                    <Link href = "/about">About</Link>
                </div>
                <div className="px-4">
                    <Link href = "/services">Services</Link>
                </div>
                <div className="px-4">
                    <Link href = "/blog">Contact</Link>
                </div>
            </div>
        </header>
    )
}