"use client"
import Link from 'next/link';
import { useState } from 'react';

const navItems = [
    { label: 'صفحه اصلی', href: '/' },
    { label: 'فروشگاه', href: '/shop/1' },
    { label: 'بلاگ', href: '/blog' },
    { label: 'سبد خرید', href: '/cart' },
    { label: 'ادمین', href: '/admin' }
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            {/* Main Navigation */}
            <div className="bg-black/5 w-full h-12 flex flex-row-reverse justify-between items-center px-5 md:px-10">
                {/* Brand Name */}
                <span className="text-2xl md:text-3xl font-bold select-none">آجر شاپ</span>

                {/* Hamburger Menu for Mobile */}
                <button
                    className="md:hidden block text-gray-700 focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle Menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>

                {/* Navigation Links */}
                <div className={`flex-col md:flex md:flex-row-reverse justify-between items-center gap-3 md:gap-5 ${menuOpen ? 'flex' : 'hidden'} md:flex`}>
                    {navItems.map((item) => (
                        <Link key={item.label} href={item.href} aria-label={item.label} className="text-sm md:text-base hover:text-gray-600">{item.label}
                        </Link>
                    ))}
                </div>
            </div>

            {/* User Authentication Links */}
            <div dir="rtl" className="bg-black/5 w-full h-8 flex flex-row justify-end items-center px-5 md:px-10 gap-1 md:gap-3 text-xs md:text-sm">
                <Link href="/auth/login" className="hover:text-gray-600">ورود
                </Link>
                /
                <Link href="/auth/register" className="hover:text-gray-600">ثبت نام
                </Link>
                |
                <Link href="/auth/logout" className="hover:text-gray-600">خروج
                </Link>
            </div>
        </>
    );
}
