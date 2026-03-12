import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages Import
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy'; // Ensure path is correct
import TermsAndConditions from './pages/TermsAndConditions';
import ContactPage from './pages/ContactPage';
import CommunityPage from './compontents/community/CommunityPage';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main Home Route */}
        <Route path="/" element={<Home />} />
        {/* community page */}
        <Route path="/community" element={<CommunityPage />} />
        
        {/* Contact Route */}
        <Route path="/contact" element={<ContactPage />} />

        {/* Privacy Policy Route */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        
        {/* Catch all - Redirect to Home or 404 */}
        <Route path="*" element={<Home />} />

        
      </Routes>
    </Router>
  );
};

export default App;