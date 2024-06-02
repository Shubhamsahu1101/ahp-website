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
            <Link href={'/'} key={'home'} className='regular-16 text-gray-50 flex-center cursor-pointer hover:font-bold'>
                Home
            </Link>
            <Link href={'/'} key={'services'} className='regular-16 text-gray-50 flex-center cursor-pointer hover:font-bold'>
                Services
            </Link>
            <Link href={'/'} key={'pricing'} className='regular-16 text-gray-50 flex-center cursor-pointer hover:font-bold'>
                Pricing
            </Link>
            <Link href={'/'} key={'contact_us'} className='regular-16 text-gray-50 flex-center cursor-pointer hover:font-bold'>
                Contact Us
            </Link>
        </ul>
        <Image src={'/menu.svg'} alt='menu' height={32} width={32} className='inline-block cursor-pointer lg:hidden'>

        </Image>
    </nav>
  )
}

export default navbar