import { Link } from 'react-router-dom';
import Navbar from '@/scenes/navbar';
import Footer from '@/scenes/footer';
import { SelectedPage } from '@/shared/types';

const PrivacyPolicy = () => {
  return (
    <div className='app'>
      <Navbar
        isTopOfPage={true}
        selectedPage={SelectedPage.Home}
        setSelectedPage={() => {}}
      />
      <div className="mx-auto w-5/6 py-20">
        {/* <h1 className="text-3xl font-bold">Privacy Policy</h1> */}
        <div className=" min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy for JBigDeal Gym</h1>
        <p className="text-gray-700">Effective Date: 25/02/2025</p>
        
        <section className="mt-4">
          <h2 className="text-xl font-semibold">1. Introduction</h2>
          <p className="text-gray-700">Welcome to JBigDeal Gym. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website, sign up for our services, or interact with us in any way.</p>
        </section>
        
        <section className="mt-4">
          <h2 className="text-xl font-semibold">2. Information We Collect</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Personal Information:</strong> Name, email address, phone number, etc.</li>
            <li><strong>Account Information:</strong> Login credentials and preferences.</li>
            <li><strong>Health and Fitness Data:</strong> Fitness goals and progress.</li>
            <li><strong>Device and Usage Data:</strong> IP address, browser type, and usage patterns.</li>
            <li><strong>Payment Information:</strong> Billing details processed securely.</li>
          </ul>
        </section>
        
        <section className="mt-4">
          <h2 className="text-xl font-semibold">3. How We Use Your Information</h2>
          <p className="text-gray-700">We use your information to provide and manage gym memberships, communicate updates, improve our services, ensure security, and comply with legal obligations.</p>
        </section>
        
        <section className="mt-4">
          <h2 className="text-xl font-semibold">4. Contact Us</h2>
          <p className="text-gray-700">If you have any questions, please contact us at:</p>
          <p className="text-gray-700 font-semibold">JBigDeal Gym</p>
          <p className="text-gray-700">Arabinda Para, Falakata - 735211</p>
          <p className="text-gray-700">Email: <strong>jay@jbigdeal.org </strong></p>
          <p className="text-gray-700">Phone: <strong>+91 96796 56747</strong></p>
        </section>
      </div>
    </div>
        <Link to="/" className="text-primary-500 underline mt-4 inline-block">
          Back to Home
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;