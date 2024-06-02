import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const navbar = () => {
  return (
    <nav className='flexBetween max-container padding-container relative z-30 py-5'>
        <Link href={'/'}>
            <Image src={'/apple_logo.png'} alt='logo' width={74} height={29} />
        </Link>
        <ul className='hidden h-full gap-16 lg:flex'>
            <Link href={'/'} key={'home'} className='regular-18 text-gray-50 flex-center cursor-pointer font-bold hover:text-black'>
                Home
            </Link>
            <Link href={'/'} key={'location'} className='regular-18 text-gray-50 flex-center cursor-pointer font-bold hover:text-black'>
                Location
            </Link>
            <a href={'/'} key={'contact_us'} className='regular-18 text-gray-50 flex-center cursor-pointer font-bold hover:text-black'>
                Contact Us
            </a>
        </ul>
    </nav>
  )
}

export default navbar