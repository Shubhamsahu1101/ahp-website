import Image from 'next/image'
import React from 'react'
import apple_logo from '../public/apple_logo.png'
import maps_svg from '../public/maps.svg'
import call_svg from '../public/call.svg'
import Button from './Button'
import Link from 'next/link'


const navbar = () => {
    return (
        <nav className='flexBetween max-container padding-container relative z-30 pt-5 pb-10'>
            <div>
                <Link href='/'>
                    <Image src={apple_logo} alt='logo' width={74} height={29} />
                </Link>
            </div>

            {/* <div className='hidden h-full gap-16 lg:flex'>
                <p className='regular-18 text-gray-50 flex-center cursor-pointer font-bold'>
                    Home
                </p>
                <p className='regular-18 text-gray-50 flex-center cursor-pointer font-bold'>
                    About
                </p>
            </div> */}

            <div className="flex flex-col sm:flex-row gap-4 rounded-3xl">

                <div className="flex flex-row">
                    {/* <p className="regular-16 text-gray-20 mb-2 ml-2">Contact Us</p> */}
                    <Button type="button" title="8329976101" icon={call_svg} variant="btn_black" link='tel:8329976101' />
                </div>

                <div className="hidden sm:flex sm:flex-row">
                    {/* <p className="regular-16 text-gray-20 mb-2 ml-2">Visit Us</p> */}
                    <Button type="button" title="Google Maps" icon={maps_svg} variant="btn_black" link='https://www.google.com/maps/place/Apple+Hygiene+Products/@18.6817894,73.8183844,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2b796862fc471:0xae96b1817cff6f66!8m2!3d18.6817894!4d73.8209593!16s%2Fg%2F11mvzv7qyn?entry=ttu' />
                </div>

            </div>
        </nav>
    )
}

export default navbar