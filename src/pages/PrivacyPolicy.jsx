import React, { useEffect } from 'react';
import Navbar from '../compontents/Navbar';
import Footer from '../compontents/Footer';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <section className="bg-white pt-20 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-[#E31C5D] font-bold text-sm uppercase tracking-wider mb-2 block">
              Legal
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Privacy Policy – OuterCircle
            </h1>
            <p className="text-gray-500 text-lg">
              Last Updated: January 28, 2026
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-gray-700 leading-relaxed text-lg">

            <p>
              OuterCircle (“we”, “our”, “us”) operates the OuterCircle mobile application and the website
              https://outercircleapp.com (together, the “Services”).
            </p>

            <p>
              This Privacy Policy explains how we collect, use, disclose, and protect your information when
              you use our Services. By accessing or using OuterCircle, you agree to this Privacy Policy. If
              you do not agree, please do not use the Services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">1. Scope</h2>
            <p>
              This Privacy Policy applies to the OuterCircle mobile application, website, and related
              services. The website currently provides general information and download links for the app.
              Core functionality operates inside the mobile application.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">2. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-gray-900">a) Information You Provide</h3>
            <p>When you register or use OuterCircle, we may collect:</p>
            <ul className="list-disc pl-8 space-y-2">
              <li>Name</li>
              <li>Email address or phone number</li>
              <li>Profile photo</li>
              <li>City or general location</li>
              <li>Interests and preferences</li>
              <li>Communities or events you create or join</li>
              <li>Messages or content shared within the app</li>
            </ul>
            <p>
              You may choose not to provide certain information, but this may limit some features.
            </p>

            <h3 className="text-xl font-semibold text-gray-900">b) Automatically Collected Information</h3>
            <p>When you use the Services, we may automatically collect:</p>
            <ul className="list-disc pl-8 space-y-2">
              <li>Device type, operating system, app version</li>
              <li>Anonymous usage statistics</li>
              <li>IP address</li>
              <li>App performance logs and crash reports</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900">c) Location Information</h3>
            <p>
              OuterCircle uses general location data (such as city or approximate area) to show nearby
              communities and events.
            </p>
            <p>
              We do not collect or store precise real-time GPS tracking in the background. You may disable
              location access in your device settings, though this may affect discovery features.
            </p>

            <h3 className="text-xl font-semibold text-gray-900">d) Financial Information</h3>
            <p>
              OuterCircle currently does not collect, process, or store credit card details, bank account
              information, or payment transaction data. If paid features are introduced in the future, this
              policy will be updated before any financial data is collected.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">3. How We Use Information</h2>
            <ul className="list-disc pl-8 space-y-2">
              <li>Create and manage user accounts</li>
              <li>Enable community and event discovery</li>
              <li>Display relevant nearby content</li>
              <li>Maintain and improve app performance</li>
              <li>Provide customer support</li>
              <li>Prevent fraud and misuse</li>
              <li>Send essential service-related notifications</li>
              <li>Send promotional or marketing communications (you may opt out)</li>
            </ul>
            <p>We do not sell personal data to third parties.</p>

            <h2 className="text-2xl font-bold text-gray-900">
              4. Data Sharing with Third-Party Service Providers
            </h2>
            <p>
              OuterCircle uses trusted third-party service providers to operate and improve the Services.
              These providers may process limited personal data on our behalf under confidentiality and
              data protection obligations.
            </p>
            <p>Service providers may include, but are not limited to:</p>
            <ul className="list-disc pl-8 space-y-2">
              <li>Cloud hosting and database services (e.g., Firebase or similar)</li>
              <li>Analytics and performance monitoring tools</li>
              <li>Push notification and messaging services</li>
              <li>Mapping and location services (e.g., Google Maps or similar)</li>
              <li>Authentication and security services</li>
            </ul>
            <p>
              These third parties are authorized to use your information only as necessary to provide
              services to OuterCircle and may not use your data for their own marketing purposes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">5. Legal and Safety Disclosures</h2>
            <p>We may disclose personal information if required by law, regulation, legal process, or governmental request, or when disclosure is necessary to:</p>
            <ul className="list-disc pl-8 space-y-2">
              <li>Comply with legal obligations</li>
              <li>Protect the rights, safety, or property of OuterCircle, users, or the public</li>
              <li>Prevent fraud, security breaches, or technical issues</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900">6. Data Retention</h2>
            <p>
              We retain personal data only as long as necessary to provide the Services, comply with legal
              obligations, resolve disputes, and enforce agreements. You may request deletion of your
              account and data at any time.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">7. Data Security</h2>
            <p>
              We implement reasonable technical and organizational measures to protect your data.
              However, no digital system is completely secure, and absolute security cannot be guaranteed.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">8. Your Rights</h2>
            <ul className="list-disc pl-8 space-y-2">
              <li>Access or update your personal information</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent for optional data collection</li>
              <li>Opt out of promotional communications</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900">9. Cookies (Website Only)</h2>
            <p>
              Our website may use minimal cookies or analytics tools to understand traffic and improve
              performance. You can disable cookies through your browser settings.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">10. Children’s Privacy</h2>
            <p>
              OuterCircle is not intended for children under the age of 13. We do not knowingly collect
              personal information from children.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">11. Third-Party Links</h2>
            <p>
              Our Services may contain links to third-party platforms. We are not responsible for their
              privacy practices.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">12. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted with a revised
              “Last Updated” date. Continued use of the Services means you accept the updated policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">13. Contact</h2>
            <p>For privacy-related questions or data requests, contact:</p>
            <p>
              <strong>OuterCircle</strong><br />
              Website: https://outercircleapp.com<br />
              Email: outercircle.in@gmail.com
            </p>

          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
