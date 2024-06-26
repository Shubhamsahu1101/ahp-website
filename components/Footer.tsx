import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import apple_logo from '../public/apple_logo.png'

const Footer = () => {
  return (
    <footer className="flexCenter py-10 lg:py-20">
      <div className="padding-container max-container flex w-full flex-col gap-12">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Image src={apple_logo} alt="logo" width={74} height={29} className='mb-4' />

          <div className='flex flex-wrap gap-10 sm:justify-evenly md:flex-1'>

            <div className="flex flex-col gap-5">
              <FooterColumn title={'Timings'}>
                <div className="flex gap-4 flex-row items-center" >
                  <p className="medium-14 whitespace-nowrap text-blue-70"> 9:30AM - 6:00PM </p>
                </div>
                <div className="flex gap-4 flex-row items-center" >
                  <p className="medium-14 whitespace-nowrap text-red-500"> Thursday Closed</p>
                </div>
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={'Contact Info'}>
                <div className="flex gap-4 flex-row items-center" >
                  <p className="whitespace-nowrap"> Phone: </p>
                  <p className="medium-14 whitespace-nowrap text-blue-70"> 8329976101</p>
                </div>
                <div className="flex gap-4 flex-row items-center" >
                  <p className="whitespace-nowrap"> Mail: </p>
                  <p className="medium-14 whitespace-nowrap text-blue-70"> applehygieneproducts@gmail.com</p>
                </div>
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