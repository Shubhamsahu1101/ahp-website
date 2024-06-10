import React from 'react'
import Image from 'next/image'
import dw_1kg from '../public/dw_1kg.png'
import hw_1kg from '../public/hw_1kg.png'
import fc_1kg from '../public/fc_1kg.png'

const ProductCards = () => {

    return (
        <section className="bg-slate-100">
            <div className='py-16 lg:mx-10'>
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center">
                    Top Products
                </h2>
                <p className="regular-18 mt-4 text-gray-30 text-center">
                    At wholesale price for bulk buyers.
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full py-10 lg:py-20 justify-evenly gap-8 xl:gap-12 px-8'>

                    <div className='w-[250px] sm:w-full rounded-3xl flexCenter flex-col shadow-md mx-auto bg-white p-4'>

                        <Image src={dw_1kg} alt='dishwash' height={400} width={320} className='mx-auto mt-8' />

                        <div className='mx-8 my-4 sm:my-8 text-center'>
                            <h1 className='text-xl sm:text-2xl font-bold'>Dish Wash</h1>
                            <p className='text-md sm:text-lg'>1kg | 5kg | Bulk</p>
                        </div>
                    </div>

                    <div className='w-[250px] sm:w-full rounded-3xl flexCenter flex-col shadow-md mx-auto bg-white p-4'>

                        <Image src={hw_1kg} alt='dishwash' height={400} width={320} className='mx-auto mt-8' />

                        <div className='mx-8 my-4 sm:my-8 text-center'>
                            <h1 className='text-xl sm:text-2xl font-bold'>Hand Wash</h1>
                            <p className='text-md sm:text-lg'>1kg | 5kg | Bulk</p>
                        </div>
                    </div>

                    <div className='w-[250px] sm:w-full rounded-3xl flexCenter flex-col shadow-md mx-auto bg-white p-4'>

                        <Image src={fc_1kg} alt='dishwash' height={400} width={320} className='mx-auto mt-8' />

                        <div className='mx-8 my-4 sm:my-8 text-center'>
                            <h1 className='text-xl sm:text-2xl font-bold'>Floor Cleaners</h1>
                            <p className='text-md sm:text-lg'>1kg | 5kg | Bulk</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ProductCards