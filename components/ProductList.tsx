import React from 'react'
import Button from './Button'
import call_svg from '../public/call.svg'


const ProductList = () => {

    return (
        <section className="bg-slate-200">
            <div className='py-16 lg:mx-10'>
                <div className='grid grid-cols-1 lg:grid-cols-3 w-full py-10 lg:py-20 justify-evenly gap-8 xl:gap-12 px-8'>
                    <div className='w-full rounded-3xl flexCenter flex-col mx-auto bg-gray-700 p-4 border-gray-900 border-t-[1px] border-l-[1px] border-r-[6px] border-b-[6px]'>
                        <h2 className="text-3xl font-extrabold text-white sm:text-4xl text-center py-4 pt-8">
                            Why Choose Us?
                        </h2>
                        <p className="text-xl text-gray-200 text-center">
                            Quality at Wholesale Price.
                        </p>
                        <p className="text-xl text-gray-200 text-center py-4">
                            Complete Range of Cleaning Products.
                        </p>
                        <div className="lg:flex flex-col sm:flex-row max-w-[250px] gap-4 rounded-3xl bg-gray-600 px-8 py-6 my-4 pb-8 lg:my-12 lg:mx-auto border-gray-900 border-t-[1px] border-l-[1px] border-r-[3px] border-b-[3px]">
                            <div className="flex flex-col">
                                <p className="regular-16 text-gray-200 mb-2 ml-2">Call Now?</p>
                                <Button type="button" title="8329976101" icon={call_svg} variant="btn_white" link='tel:8329976101' />
                            </div>
                        </div>
                    </div>

                    <div className='h-[450] w-full rounded-3xl flexBetween flex-col mx-auto bg-white border-gray-900 border-t-[1px] border-l-[1px] border-r-[6px] border-b-[6px]'>
                        <div className='mx-8 my-8 text-center flex flex-col gap-2 sm:gap-4'>
                            <h1 className='text-2xl sm:text-3xl font-bold text-gray-800'>General Cleaning</h1>

                            <p className='text-2xl sm:text-3xl text-gray-30'>Dish Wash</p>
                            <p className='text-2xl sm:text-3xl text-gray-30'>Hand Wash</p>
                            <p className='text-2xl sm:text-3xl text-gray-30'>Phenyl</p>
                            <p className='text-2xl sm:text-3xl text-gray-30'>Glass Cleaner</p>
                            <p className='text-2xl sm:text-3xl text-gray-30'>Sanitizer</p>
                            <p className='text-2xl sm:text-3xl text-gray-30'>Toiler Cleaner</p>
                            <p className='text-2xl sm:text-3xl text-gray-30'>Micro Fiber Cloth</p>
                        </div>
                    </div>

                    <div className='h-[450] w-full rounded-3xl flexBetween flex-col mx-auto bg-white border-gray-900 border-t-[1px] border-l-[1px] border-r-[6px] border-b-[6px]'>
                        <div className='mx-8 my-8 text-center flex flex-col gap-2 sm:gap-4'>
                            <h1 className='text-2xl sm:text-3xl font-bold text-gray-800'>Car Cleaning</h1>

                            <p className='text-2xl sm:text-3xl text-gray-30'>Car Wash</p>
                            <p className='text-2xl sm:text-3xl text-gray-30'>Tyre Polish</p>
                            <p className='text-2xl sm:text-3xl text-gray-30'>Dashboard Polish</p>
                            <p className='text-2xl sm:text-3xl text-gray-30'>Car Perfumes</p>
                            <p className='text-2xl sm:text-3xl text-gray-30'>Glass Cleaner</p>
                            <p className='text-2xl sm:text-3xl text-gray-30'>Footmat</p>
                            <p className='text-2xl sm:text-3xl text-gray-30'>Polish Sponge</p>
                            <p className='text-2xl sm:text-3xl text-gray-30'>Micro Fiber Cloth</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ProductList