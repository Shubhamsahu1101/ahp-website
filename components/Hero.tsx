import Image from 'next/image'
import star_image from '../public/star.svg'
import product_main_image from '../public/ahp_main_image.png'
import Button from './Button'
import maps_svg from '../public/maps.svg'
import call_svg from '../public/call.svg'

const Hero = () => {
  return (
    <section className="max-container padding-container">
      <div className='flex flex-col-reverse gap-20 pb-16 md:gap-28 lg:py-20 xl:flex-row'>

        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 text-center">

          <h1 className="bold-52 lg:bold-88">Apple Hygiene Products</h1>
          <p className="regular-16 mt-4 text-gray-30 xl:max-w-[520px]">
            Cleaning products manufacturer in Pune.
          </p>
          <p className="regular-16 mt-4 text-gray-30 xl:max-w-[520px]">
            Bulk orders accepted.
          </p>

          <div className="my-8 flex flex-wrap gap-5 items-center justify-center">
            <div className="flex items-center gap-2">
              {Array(5).fill(1).map((_, index) => (
                <Image src={star_image} key={index} alt="star" width={24} height={24} />
              ))}
            </div>

            <p className="bold-16 lg:bold-20 text-blue-70">
              1000+
              <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
            </p>
          </div>

        </div>
        <div>
          <Image src={product_main_image} alt='main_products' height={700} width={700} className='mx-auto' />
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-min gap-4 rounded-3xl bg-green-90 px-8 py-6 mx-auto">

        <div className="flex flex-col">
          <p className="regular-16 text-gray-20 mb-2 ml-2">Contact Us</p>
          <Button type="button" title="8329976101" icon={call_svg} variant="btn_white" link='https://www.google.com/maps/place/Apple+Hygiene+Products/@18.6817894,73.8183844,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2b796862fc471:0xae96b1817cff6f66!8m2!3d18.6817894!4d73.8209593!16s%2Fg%2F11mvzv7qyn?entry=ttu' />
        </div>

        <div className="flex flex-col">
          <p className="regular-16 text-gray-20 mb-2 ml-2">Visit Us</p>
          <Button type="button" title="Google Maps" icon={maps_svg} variant="btn_white" link='https://www.google.com/maps/place/Apple+Hygiene+Products/@18.6817894,73.8183844,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2b796862fc471:0xae96b1817cff6f66!8m2!3d18.6817894!4d73.8209593!16s%2Fg%2F11mvzv7qyn?entry=ttu' />
        </div>

      </div>
    </section>
  )
}

export default Hero