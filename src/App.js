import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import AboutUsE from "./components/AboutUsE";
import OurServices from "./components/OurServices";
import ScrollToTop from "./components/ScrollToTop"; // Import ScrollToTop

const App = () => {
    return (
        <Router>
            <ScrollToTop /> {/* Add ScrollToTop here */}
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<>
                        <HeroSection />
                        <AboutUs />
                        <Services />
                        <WhyChooseUs />
                        <ContactForm />
                    </>} />
                    <Route path="/ourServices" element={<>
                        <OurServices />
                        <ContactForm />
                    </>} />
                    <Route path="/about" element={<>
                        <AboutUsE />
                        <ContactForm />
                    </>} />
                    <Route path="/contact" element={<ContactForm />} />
                    <Route path="/why-choose-us" element={<WhyChooseUs />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
