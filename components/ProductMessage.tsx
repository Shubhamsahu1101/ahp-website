// components/ProductMessage.tsx
import Image from 'next/image';
import React from 'react';
import car_washing from '../public/car_washing.jpeg';
import dish_washing from '../public/dish_washing.jpeg';

const ProductMessage = () => {
  return (
    <section className="px-8 bg-slate-100 py-10 lg:py-20">
      <div className="py-16 max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800">Complete Range Of Products</h2>
          <p className="mt-4 text-lg text-gray-600">
            We offer a complete range of cleaning products, for homes, restaurants, hotels, car washing centers, housekeeping services and more.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center py-10 lg:py-20">
          <div className="relative max-w-[500px] max-h-[500px] mx-auto">
            <Image
              src={dish_washing}
              alt="Woman Washing Utensils"
              className="w-full h-auto shadow-lg rounded-3xl"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-3xl ">
              <p className="text-white text-lg font-bold">From Inside</p>
            </div>
          </div>
          <div className="relative max-w-[500px] max-h-[500px] mx-auto">
            <Image
              src={car_washing}
              alt="Woman Washing Car"
              className="w-full h-auto shadow-lg rounded-3xl"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-3xl ">
              <p className="text-white text-lg font-bold">To Outside</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Apple Hygiene?</h3>
          <p className="text-gray-600">
            Our products are Lab Tested to provide superior cleaning power, ensuring a sparkling clean finish every time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductMessage;
