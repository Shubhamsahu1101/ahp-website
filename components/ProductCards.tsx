import React from 'react'
import Image from 'next/image'
import product_greendw_1kg from '../public/product_greendw_1kg.png'
import product_orangehw_1kg from '../public/product_orangehw_1kg.png'
import product_pinkhw_1kg from '../public/product_pinkhw_1kg.png'
import product_whitefc_1l from '../public/product_whitefc_1l.png'

const ProductCards = () => {

    return (
        <section className="py-16 lg:mx-10">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center">
                Featured Products
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 w-full pt-10 lg:pt-20 justify-evenly gap-8 xl:gap-0'>

                <div className='h-[480px] w-[300px] rounded-xl items-center justify-evenly flex-col shadow-md mx-auto'>
                    <Image src={product_greendw_1kg} alt='dishwash' height={400} width={250} className='mx-auto' />
                    <div className='mx-8 my-8 text-center'>
                        <h1 className='text-xl font-bold'>DishWash Gel</h1>
                        <p className='text-lg'>1kg | 5kg | Bulk</p>
                    </div>
                </div>

                <div className='h-[480px] w-[300px] rounded-xl items-center justify-evenly flex-col shadow-md mx-auto'>
                    <Image src={product_orangehw_1kg} alt='dishwash' height={400} width={250} className='mx-auto' />
                    <div className='mx-8 my-8 text-center'>
                        <h1 className='text-xl font-bold'>Sandal Wash Gel</h1>
                        <p className='text-lg'>1kg | 5kg | Bulk</p>
                    </div>
                </div>

                <div className='h-[480px] w-[300px] rounded-xl items-center justify-evenly flex-col shadow-md mx-auto'>
                    <Image src={product_pinkhw_1kg} alt='dishwash' height={400} width={250} className='mx-auto' />
                    <div className='mx-8 my-8 text-center'>
                        <h1 className='text-xl font-bold'>Rose Wash Gel</h1>
                        <p className='text-lg'>1kg | 5kg | Bulk</p>
                    </div>
                </div>


                <div className='h-[480px] w-[300px] rounded-xl items-center justify-evenly flex-col shadow-md mx-auto'>
                    <Image src={product_whitefc_1l} alt='dishwash' height={400} width={250} className='mx-auto' />
                    <div className='mx-8 my-8 text-center'>
                        <h1 className='text-xl font-bold'>Floor Cleaner</h1>
                        <p className='text-lg'>1kg | 5kg | Bulk</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ProductCards