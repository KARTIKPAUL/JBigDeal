import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from '@/scenes/navbar';
import Home from '@/scenes/home';
import Benefits from './scenes/benefits/index';
import { useState, useEffect } from 'react';
import { SelectedPage } from '@/shared/types';
import OurClasses from './scenes/ourClasses';
import ContactUs from './scenes/ContactUs';
import Footer from '@/scenes/footer';
import PrivacyPolicy from './scenes/Privacy/PrivacyPolicy';
import TermsConditions from './scenes/Terms/TermsConditions';
import Faqs from './scenes/Faqs/Faqs';
import AboutUs from './scenes/About/AboutUs';


function MainPage() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className='app bg-gray-20'>
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;