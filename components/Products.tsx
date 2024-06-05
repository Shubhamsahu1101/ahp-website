import React from 'react'
import Image from 'next/image'
import product_greendw_1kg from '../public/product_greendw_1kg.png'
import product_orangehw_1kg from '../public/product_orangehw_1kg.png'
import product_pinkhw_1kg from '../public/product_pinkhw_1kg.png'
import product_whitefc_1l from '../public/product_whitefc_1l.png'

const Products = () => {

    return (
        <section className="py-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center">
                Our Products
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full py-10 lg:py-20 px-10'>

                <div className='h-[500px] w-[300px] bg-slate-100 rounded-xl items-center justify-evenly flex-col shadow-md mx-auto'>
                    <Image src={product_greendw_1kg} alt='dishwash' height={400} width={250} className='mx-auto' />
                    <div className='mx-8 my-8 text-center'>
                        <h1 className='text-xl font-bold'>DishWash Gel</h1>
                        <p className='text-lg'>1kg | 5kg | Bulk</p>
                    </div>
                </div>

                <div className='h-[500px] w-[300px] bg-slate-100 rounded-xl items-center justify-evenly flex-col shadow-md mx-auto'>
                    <Image src={product_orangehw_1kg} alt='dishwash' height={400} width={250} className='mx-auto' />
                    <div className='mx-8 my-8 text-center'>
                        <h1 className='text-xl font-bold'>Sandal Wash Gel</h1>
                        <p className='text-lg'>1kg | 5kg | Bulk</p>
                    </div>
                </div>

                <div className='h-[500px] w-[300px] bg-slate-100 rounded-xl items-center justify-evenly flex-col shadow-md mx-auto'>
                    <Image src={product_pinkhw_1kg} alt='dishwash' height={400} width={250} className='mx-auto' />
                    <div className='mx-8 my-8 text-center'>
                        <h1 className='text-xl font-bold'>Rose Wash Gel</h1>
                        <p className='text-lg'>1kg | 5kg | Bulk</p>
                    </div>
                </div>


                <div className='h-[500px] w-[300px] bg-slate-100 rounded-xl items-center justify-evenly flex-col shadow-md mx-auto'>
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

export default Products