import React from 'react';
import Navbar from '../compontents/Navbar';
import Contact from '../compontents/Contact';
import Footer from '../compontents/Footer';

const ContactPage = () => {
    return (
        <div className="font-sans text-gray-900 bg-white">
            <Navbar />
            <div className="pt-16">
                <Contact />
            </div>
            <Footer />
        </div>
    );
};

export default ContactPage;
