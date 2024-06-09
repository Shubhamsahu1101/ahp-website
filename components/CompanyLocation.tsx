import React from 'react'
import Button from './Button'
import Image from 'next/image'
import ahp_location1 from '../public/ahp-location1.jpeg'
import maps_svg from '../public/maps.svg'

const CompanyLocation = () => {
  return (
    <section className="pb-32">
      <div className="w-full relative flex flex-col justify-between gap-16 overflow-hidden bg-green-90 bg-pattern bg-cover bg-center bg-no-repeat px-6 py-12 text-white md:flex-row md:gap-12 md:py-24 lg:px-20 xl:max-h-[698px]">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">Company Location</h2>
          <div>
            <p className="regular-16 text-gray-10">Gat No.211, Beside WSP Cranes, Opp Bhairavnath Industrial Estate, Dehu - Moshi Rd, Chikhali, Pimpri-Chinchwad, Maharashtra 411062</p>
          </div>
          <Button type="button" title="Google Maps" icon={maps_svg} variant="btn_white" link='https://www.google.com/maps/place/Apple+Hygiene+Products/@18.6817894,73.8183844,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2b796862fc471:0xae96b1817cff6f66!8m2!3d18.6817894!4d73.8209593!16s%2Fg%2F11mvzv7qyn?entry=ttu' />
        </div>

        <Image src={ahp_location1} alt="factory-image1" width={550} height={970} className='rounded-xl mx-auto' />
      </div>
    </section>
  )
}

export default CompanyLocation