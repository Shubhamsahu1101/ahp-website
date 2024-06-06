import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import apple_logo from '../public/apple_logo.png'

const Footer = () => {
  return (
    <footer className="flexCenter mb-12">
      <div className="padding-container max-container flex w-full flex-col gap-12">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Image src={apple_logo} alt="logo" width={74} height={29} className='mb-4' />

          <div className='flex flex-wrap gap-10 sm:justify-evenly md:flex-1'>

            <div className="flex flex-col gap-5">
              <FooterColumn title={'Timings'}>
                <Link href="/" key={'owner'} className="flex gap-4 md:flex-col lg:flex-row" >
                  <p className="medium-14 whitespace-nowrap text-blue-70"> {'9:30AM - 6:00PM'} </p>
                  <p className="medium-14 whitespace-nowrap text-red-500"> {'Thursday Closed'} </p>
                </Link>
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={'Contact Info'}>
                <Link href="/" key={'owner'} className="flex gap-4 md:flex-col lg:flex-row" >
                  <p className="whitespace-nowrap"> {'Owner'}: </p>
                  <p className="medium-14 whitespace-nowrap text-blue-70"> {'8329976101'} </p>
                </Link>
              </FooterColumn>
            </div>

          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">2017 Apple Hygiene Products | All rights reserved</p>

      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}

export default Footer