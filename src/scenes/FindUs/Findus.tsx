import { MapPin, Phone, Mail } from "lucide-react";
import  logo  from "../../assets/image3.png";

export default function FindUs() {
  return (
    <div className="text-gold min-h-screen flex items-center justify-center p-8">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div className="text-left">
          <h3 className="text-lg uppercase tracking-wide text-orange-500 font-semibold">Contact</h3>
          <h1 className="text-5xl font-serif font-bold mt-2">Find Us</h1>
          <p className="mt-4 text-black">
            Subhaspally, Bank Road, Besides Union Bank Of India, Falakata, West Bengal
          </p>
          <div className="mt-4">
            <iframe
              className="w-full h-40 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.5481234567!2d88.3667!3d22.5726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xabcdef!2sSweety+Restaurant!5e0!3m2!1sen!2sin!4v1700000000000"
              
              loading="lazy"
            ></iframe>
          </div>
          <h2 className="mt-6 text-xl font-semibold">Opening Hours</h2>
          <p className="text-orange-500">Sun - Mon: 10:30 AM - 10:30 PM</p>
          <div className="mt-4 space-y-2">
            <p className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-xl font-bold"/>
              <span className="text-orange-500 font-semibold">070769 01686</span>
            </p>
            <p className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-xl font-bold" />
              <span className="text-orange-500 font-semibold">sweetyfkt@gmail.com</span>
            </p>
          </div>
          <button className="mt-6 px-6 py-2 bg-gold text-black font-semibold rounded-lg bg-orange-500 w-full shadow hover:bg-yellow-600">
            Visit Us
          </button>
        </div>

        {/* Right Section */}
        <div className="relative">
        <img
            src={logo}
           
            alt="Drink"
            className="rounded-lg shadow-lg"
          />
          <img
            src={logo}
           
            alt="Drink"
            className="rounded-lg shadow-lg"
          />
          
          <div className="absolute top-0 left-0 w-full h-full border-4 border-gold rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
