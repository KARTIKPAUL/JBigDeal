import React from "react";
import { Link } from 'react-router-dom';
import Navbar from '@/scenes/navbar';
import Footer from '@/scenes/footer';
import { SelectedPage } from '@/shared/types';


const AboutUs: React.FC = () => {
  return (
    <div className='app'>
      <Navbar
        isTopOfPage={true}
        selectedPage={SelectedPage.Home}
        setSelectedPage={() => {}}
      />
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center py-12 px-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl font-bold mb-6 text-yellow-400">About JBigDeal Fitness Gym</h1>
        <p className="text-lg mb-4">
          Welcome to <span className="font-semibold">JBigDeal Fitness Gym</span>, where we are committed to helping you achieve your fitness goals! Whether you are a beginner or an experienced athlete, our state-of-the-art facility and expert trainers are here to support you every step of the way.
        </p>
        <p className="text-lg mb-4">
          Our gym is equipped with the latest fitness equipment, a variety of group classes, and personalized training programs to cater to your unique needs. We believe in building a strong, motivated community where everyone feels empowered to become the best version of themselves.
        </p>
        <p className="text-lg mb-4">
          Join us today and take the first step towards a healthier and stronger you. Let's make fitness a lifestyle together!
        </p>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
