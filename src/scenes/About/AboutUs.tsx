import Navbar from '@/scenes/navbar';
import Footer from '@/scenes/footer';
import { SelectedPage } from '@/shared/types';

const AboutUs = () => {
  return (
    <div className='app'>
      <Navbar
        isTopOfPage={true}
        selectedPage={SelectedPage.Home}
        setSelectedPage={() => {}}
      />
      
     <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center py-12 px-6">
       <div className="max-w-6xl w-full">
         <div className="text-center mb-16">
           <h1 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400">
             About JBigDeal Fitness Gym
           </h1>
           <p className="text-lg mb-8 max-w-2xl mx-auto">
             Welcome to your transformation journey! At JBigDeal, we're more than a gym - 
             we're a community dedicated to empowering your fitness success.
           </p>
         </div>

         {/* Mission Section */}
         <div className="bg-gray-800 rounded-2xl p-8 mb-16 text-center shadow-xl">
           <h2 className="text-3xl font-bold mb-6 text-yellow-400">Our Mission</h2>
           <p className="text-xl leading-relaxed">
             "To inspire and empower people of all fitness levels to achieve their 
             personal best through state-of-the-art facilities, expert guidance, 
             and an unbeatable community spirit."
           </p>
         </div>

         {/* Features Grid */}
         <div className="grid md:grid-cols-3 gap-8 mb-16">
           <div className="bg-gray-800 p-6 rounded-xl hover:transform hover:scale-105 transition-all">
             <div className="text-yellow-400 mb-4">
               <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
               </svg>
             </div>
             <h3 className="text-2xl font-bold mb-4">Cutting-Edge Equipment</h3>
             <p>200+ pieces of premium equipment across 10,000 sqft of training space</p>
           </div>

           <div className="bg-gray-800 p-6 rounded-xl hover:transform hover:scale-105 transition-all">
             <div className="text-yellow-400 mb-4">
               <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
               </svg>
             </div>
             <h3 className="text-2xl font-bold mb-4">Expert Trainers</h3>
             <p>15+ certified professionals with specialized coaching expertise</p>
           </div>

           <div className="bg-gray-800 p-6 rounded-xl hover:transform hover:scale-105 transition-all">
             <div className="text-yellow-400 mb-4">
               <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
               </svg>
             </div>
             <h3 className="text-2xl font-bold mb-4">50+ Weekly Classes</h3>
             <p>From HIIT to Yoga, Pilates to Boxing - something for everyone</p>
           </div>
         </div>

         {/* Success Stories */}
         <div className="mb-16">
           <h2 className="text-3xl font-bold text-center mb-8 text-yellow-400">Success Stories</h2>
           <div className="grid md:grid-cols-2 gap-6">
             <div className="bg-gray-800 p-6 rounded-xl">
               <p className="text-lg italic mb-4">"JBigDeal transformed my life! Lost 30kg in 6 months with their amazing trainers and nutritional guidance."</p>
               <p className="font-bold text-yellow-400">- Sarah Johnson</p>
             </div>
             <div className="bg-gray-800 p-6 rounded-xl">
               <p className="text-lg italic mb-4">"The energy here is unmatched! I've gained muscle and confidence I never thought possible."</p>
               <p className="font-bold text-yellow-400">- Mike Chen</p>
             </div>
           </div>
         </div>

         {/* CTA Section */}
         <div className="text-center bg-yellow-400 rounded-2xl p-8 shadow-lg">
           <h2 className="text-3xl font-bold mb-6 text-gray-900">Start Your Journey Today!</h2>
           <p className="text-gray-900 mb-8 text-lg">First week free for new members - no commitment required</p>
           <button className="bg-gray-900 text-yellow-400 px-8 py-3 rounded-lg text-lg font-bold hover:bg-gray-800 transition-colors">
             Claim Free Trial
           </button>
         </div>
       </div>
     </div>
      <Footer />
    </div>
  );
};

export default AboutUs;