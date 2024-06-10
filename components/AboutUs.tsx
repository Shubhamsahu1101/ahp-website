// components/AboutUs.tsx

import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            We are dedicated to providing the best service and creating amazing products for our customers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <img 
              src="/images/about-us.jpg" 
              alt="About Us" 
              className="w-full h-auto rounded-lg shadow-lg" 
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              Our mission is to innovate and provide advanced, quality products and solutions, along with the industry’s leading customer service and support, all at affordable prices.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              Our vision is to be a global leader in providing cutting-edge solutions that empower businesses and individuals to achieve their full potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
