import React from 'react'


const ProductList = () => {

    return (
        <section className="py-16 lg:mx-10">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center">
                All Products
            </h2>
            <p className="regular-16 mt-4 text-gray-30 text-center">
                Contact for Bulk Enquiry.
            </p>
            <div className='grid grid-cols-1 lg:grid-cols-2 w-full py-10 lg:py-20 justify-evenly gap-8 xl:gap-0'>

                <div className='h-[520px] w-[300px] sm:w-[400px] rounded-xl items-center justify-evenly flex-col shadow-md mx-auto'>
                    <div className='mx-8 my-8 text-center flex flex-col gap-4'>
                        <h1 className='text-2xl sm:text-3xl font-bold'>General Cleaning</h1>

                        <p className='text-2xl sm:text-3xl'>Dish Wash</p>
                        <p className='text-2xl sm:text-3xl'>Hand Wash</p>
                        <p className='text-2xl sm:text-3xl'>Phenyl</p>
                        <p className='text-2xl sm:text-3xl'>Glass Cleaner</p>
                        <p className='text-2xl sm:text-3xl'>Sanitizer</p>
                        <p className='text-2xl sm:text-3xl'>Toiler Cleaner</p>
                        <p className='text-2xl sm:text-3xl'>Micro Fiber Cloth</p>
                    </div>
                </div>

                <div className='h-[520px] w-[300px] sm:w-[400px] rounded-xl items-center justify-evenly flex-col shadow-md mx-auto'>
                    <div className='mx-8 my-8 text-center flex flex-col gap-4'>
                        <h1 className='text-2xl sm:text-3xl font-bold'>Car Cleaning</h1>

                        <p className='text-2xl sm:text-3xl'>Car Wash</p>
                        <p className='text-2xl sm:text-3xl'>Tyre Polish</p>
                        <p className='text-2xl sm:text-3xl'>Dashboard Polish</p>
                        <p className='text-2xl sm:text-3xl'>Car Perfumes</p>
                        <p className='text-2xl sm:text-3xl'>Glass Cleaner</p>
                        <p className='text-2xl sm:text-3xl'>Footmat</p>
                        <p className='text-2xl sm:text-3xl'>Polish Sponge</p>
                        <p className='text-2xl sm:text-3xl'>Micro Fiber Cloth</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ProductList