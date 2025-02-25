import Logo from "@/assets/bigDealLogo.png"
const Footer = () => {
  return (
    <>
    <div className="text-gray-300 bg-gray-900 flex flex-col items-center gap-8 px-8 py-12 mt-24" id="footer">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand Section */}
        <div className="flex flex-col items-start gap-6">
          <div className="flex items-center gap-4">
            <img src={Logo} alt="Logo" className="h-20 hover:scale-105 transition-transform" />
          </div>
          <p className="text-gray-400 leading-relaxed">
            Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience.
          </p>
          <div className="flex gap-5">
            <a href="https://www.facebook.com/p/Sweety-100064151675371/" className="hover:scale-110 transition-transform">
              {/* <img src={assets.facebook_icon} alt="Facebook" className="w-8 h-8 hover:opacity-80" /> */}
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              {/* <img src={assets.twitter_icon} alt="Twitter" className="w-8 h-8 hover:opacity-80" /> */}
            </a>
          </div>
          <div className="w-full space-y-3">
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter Your Email..." 
                className="flex-1 border border-gray-600 bg-gray-800 px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all" 
              />
              <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-white">Get exclusive offers and updates</p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-5">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 text-2xl font-bold pb-2">
            Company
          </h2>
          <ul className="space-y-4">
            {['Home', 'About us', 'Privacy Policy', 'Terms Conditions','Faqs'].map((item) => (
              <li key={item}>
                <a 
                  href={`/${item.toLowerCase().replace(' ', '-')}`} 
                  className="text-gray-400 hover:text-orange-400 transition-colors text-lg font-medium relative group"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col gap-5">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 text-2xl font-bold pb-2">
            Get in Touch
          </h2>
          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                📞
              </div>
              <div>
                
                <p className="text-lg text-white"> <span className="font-medium text-orange-500">Phone: </span> +91 96796 56747</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                📧
              </div>
              <div>
                
                <a href="mailto:sweetyfkt@gmail.com" className="text-lg text-white hover:text-orange-400 transition-colors"> <span className="font-medium text-orange-500">Email: </span>
                jay@jbigdeal.org
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                📍
              </div>
              <div>
                
                <p className="text-lg text-white leading-relaxed"> <span className="font-medium text-orange-500">Address: </span>
                 Arabinda Para, Falakata - 735211
                </p>
              </div>
            </li>
            <li className="mt-4">
           
              <iframe 
                src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.2212087468665!2d89.20232137542573!3d26.513009176887653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e3a500174fcd07%3A0x1c7d2120bd3b3a8a!2sJbigdeal%20Fitness%20Gym!5e0!3m2!1sen!2sin!4v1740458269749!5m2!1sen!2sin"
                className="w-full h-48 rounded-xl border-2 border-gray-700 shadow-lg hover:shadow-xl transition-shadow"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full max-w-7xl border-t border-gray-800"></div>
      
      <p className="text-center text-white text-sm">
      Copyright © 2025 JbigDeaL Fitness Gym - All Rights Reserved | A JbigDeaL® Company!. Crafted with ❤️ in India
      </p>
    </div>
    </>
  );
};

export default Footer;