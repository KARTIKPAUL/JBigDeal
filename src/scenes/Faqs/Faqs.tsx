import Navbar from '@/scenes/navbar';
import Footer from '@/scenes/footer';
import { SelectedPage } from '@/shared/types';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const Faqs: React.FC = () => {
  const faqData: FaqItem[] = [
    {
      question: "What are your opening hours?",
      answer: "We are open from 10 AM to 10 PM every day.",
    },
    {
      question: "Do you offer home delivery?",
      answer: "Yes, we offer home delivery within a 5km radius of our restaurant.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, credit/debit cards, and digital wallets like Google Pay and PhonePe.",
    },
    {
      question: "Do you have vegetarian options?",
      answer: "Yes, we have a variety of vegetarian dishes available on our menu.",
    },
    {
      question: "Can I make a reservation?",
      answer: "Yes, you can call us or use our online reservation system to book a table.",
    },
  ];

  // State to handle active dropdown
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Toggle the dropdown
  const toggleDropdown = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='app'>
      <Navbar isTopOfPage={true} selectedPage={SelectedPage.Home} setSelectedPage={() => {}} />
      <div className="pb-8 bg-customBlue1">
        <h1 className="text-orange-500 text-center text-xl font-bold py-5">Frequently Asked Questions!</h1>
        <div className="max-w-6xl mx-auto space-y-6 px-4 lg:px-8 bg-white py-8 rounded-xl">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300"
            >
              <div
                onClick={() => toggleDropdown(index)}
                className="cursor-pointer p-6 flex justify-between items-center group"
              >
                <h3 className="text-lg lg:text-xl font-bold text-gray-800 group-hover:text-[#E35A1E] transition duration-300">
                  {faq.question}
                </h3>
                <span className="text-blue-600">
                  {activeIndex === index ? (
                    <FaChevronUp className="text-lg transform group-hover:scale-125 transition duration-300" />
                  ) : (
                    <FaChevronDown className="text-lg transform group-hover:scale-125 transition duration-300" />
                  )}
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-700 ${
                  activeIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 text-gray-800 border-t border-gray-200 bg-blue-50 animate-fadeIn">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faqs;
