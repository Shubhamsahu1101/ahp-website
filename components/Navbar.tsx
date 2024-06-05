import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import apple_logo from '../public/apple_logo.png'

const navbar = () => {
  return (
    <nav className='flexBetween max-container padding-container relative z-30 py-5'>
        <Link href={'/'}>
            <Image src={apple_logo} alt='logo' width={74} height={29} />
        </Link>
        <ul className='hidden h-full gap-16 lg:flex'>
            <p className='regular-18 text-gray-50 flex-center cursor-pointer font-bold'>
                Home
            </p>
            <p className='regular-18 text-gray-50 flex-center cursor-pointer font-bold'>
                Products
            </p>
            <p className='regular-18 text-gray-50 flex-center cursor-pointer font-bold'>
                Location
            </p>
            <p className='regular-18 text-gray-50 flex-center cursor-pointer font-bold'>
                Contact Us
            </p>
        </ul>
    </nav>
  )
}

export default navbar