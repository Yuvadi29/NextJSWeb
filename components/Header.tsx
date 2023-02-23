import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import codingAddabrand from '../public/Logo.png';


const Header = () => {
    return (
        <header className='flex items-center justify-between space-between font-bold px-10 py-5 '>
            <div className='flex items-center space-x-2'>
                <Link href="/">
                    <Image
                        src={codingAddabrand}
                        width={50}
                        className="rounded-full"
                        height={50}
                        alt="logo"
                    />
                </Link>
                <h1>Coding Adda</h1>
            </div>

            <div>
                <Link
                    href='/ndaysnalgo'
                    className='px-5 py-3 text-sm md:text-base bg-gray-900 text-[#fff] flex items-center rounded-full text-center'
                >
                    Get Started with Your #NDaysNAlgorithms Now!!
                </Link>
            </div>
        </header>
    )
}

export default Header;