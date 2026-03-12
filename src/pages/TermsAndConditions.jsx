import React, { useEffect } from 'react';
import Navbar from '../compontents/Navbar';
import Footer from '../compontents/Footer';

const TermsAndConditions = () => {
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
              Terms and Conditions – OuterCircle
            </h1>
            <p className="text-gray-500 text-lg">
              Last Updated: January 28, 2026
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-gray-700 leading-relaxed text-lg">

            <p>
              Welcome to OuterCircle. These Terms and Conditions (“Terms”) govern your use of the
              OuterCircle mobile application and the website https://outercircleapp.com (together,
              the “Services”). By accessing or using the Services, you agree to be bound by these
              Terms. If you do not agree, please do not use the Services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">1. Eligibility</h2>
            <p>
              You must be at least 13 years old to use OuterCircle. By using the Services, you confirm
              that you meet this requirement.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">2. Account Registration</h2>
            <p>
              To access core features, you must create an account. You agree to provide accurate and
              current information and keep your login credentials secure. You are responsible for
              all activity under your account.
            </p>
            <p>
              OuterCircle reserves the right to suspend, restrict, or terminate any account that
              violates these Terms or is deemed harmful to the platform or its users.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">3. Purpose of the Services</h2>
            <p>
              OuterCircle is a platform that enables users to discover communities and events, create
              and host groups or events, and interact with other users. The website provides general
              information and download links for the mobile application.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">4. User Content</h2>
            <p>
              Users may post content including text, images, event details, and messages (“User
              Content”).
            </p>
            <ul className="list-disc pl-8 space-y-2">
              <li>Confirm you have the right to share it</li>
              <li>
                Grant OuterCircle a non-exclusive, royalty-free license to display and distribute
                this content within the Services
              </li>
              <li>
                Agree not to post illegal, harmful, abusive, misleading, or inappropriate content
              </li>
            </ul>
            <p>
              OuterCircle reserves the right to remove any content, community, event, or user account
              at its sole discretion, with or without prior notice.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">5. Platform Administration Rights</h2>
            <ul className="list-disc pl-8 space-y-2">
              <li>
                Access user accounts when reasonably necessary for support, moderation, security, or
                technical operations
              </li>
              <li>Create, edit, manage, or delete communities or events</li>
              <li>Restrict, suspend, or permanently remove any user, community, or event</li>
              <li>
                Take actions required to protect platform integrity, users, or legal compliance
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900">6. Location-Based Features</h2>
            <p>
              OuterCircle uses general location information to show nearby communities and events.
              Disabling location access may affect discovery features.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">7. Promotional Communications</h2>
            <p>
              By creating an account, you agree that OuterCircle may send service-related
              notifications, updates, and promotional or marketing communications through in-app
              notifications, email, SMS, or any contact details you provide. You may opt out of
              promotional messages at any time, but essential service communications will continue.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">8. Third-Party Services</h2>
            <p>
              OuterCircle uses third-party service providers for hosting, analytics, messaging,
              mapping, and security services. By using the Services, you acknowledge that limited data
              may be shared with these providers solely for service delivery and platform improvement
              purposes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">9. No Financial Transactions</h2>
            <p>
              Currently, OuterCircle does not offer paid features or process financial transactions.
              If paid services are introduced, updated Terms will be provided before implementation.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">10. Prohibited Activities</h2>
            <ul className="list-disc pl-8 space-y-2">
              <li>Use the platform for spam or unsolicited promotions</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Attempt unauthorized access to the Services</li>
              <li>Copy, reverse engineer, or exploit the platform</li>
              <li>Use the Services for unlawful purposes</li>
            </ul>
            <p>
              Violation may result in immediate suspension or permanent account removal.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">11. Third-Party Links</h2>
            <p>
              The Services may contain links to third-party platforms. OuterCircle is not responsible
              for third-party services or content.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">12. Service Availability</h2>
            <p>
              We aim to provide continuous access but do not guarantee uninterrupted or error-free
              operation. We may modify, suspend, or discontinue any part of the Services at any time.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">13. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, OuterCircle shall not be liable for any
              indirect, incidental, consequential, or special damages arising from your use of the
              Services. Use of the Services is at your own risk.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">14. Termination</h2>
            <p>
              You may stop using the Services at any time and request account deletion. OuterCircle
              may suspend or terminate your access at any time if you violate these Terms or if
              continued access may harm the platform or other users.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">15. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. Updated Terms will be posted with a
              revised “Last Updated” date. Continued use of the Services means you accept the updated
              Terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">16. Governing Law</h2>
            <p>
              These Terms shall be governed by and interpreted in accordance with the laws of India.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">17. Contact</h2>
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

export default TermsAndConditions;
