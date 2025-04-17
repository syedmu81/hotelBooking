import { FaEnvelope, FaPhone, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full px-4 py-12 mt-10 bg-purple-800 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center lg:text-left">
        {/* Branding/Logo Section */}
        <div className="flex flex-col items-center lg:items-start">
 <h1 className='text-xl text-white font-bold'>Hot-Bookings</h1>
          <p className="text-sm sm:text-base text-blue-200">
            Your perfect stay, just a click away!
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mb-4">
            Contact Us
          </h3>
          <p className="flex items-center justify-center lg:justify-start text-sm sm:text-base text-white mb-2">
            <FaEnvelope className="mr-2 text-blue-400" />
            <a
              href="mailto:hot-bookings@hotb.com"
              className="text-blue-300 hover:text-blue-100 transition-colors underline"
              aria-label="Email hot-bookings@hotb.com"
            >
              hot-bookings@hotb.com
            </a>
          </p>
          <p className="flex items-center justify-center lg:justify-start text-sm sm:text-base text-white">
            <FaPhone className="mr-2 text-blue-400" />
            <a
              href="tel:+18334412222"
              className="text-blue-300 hover:text-blue-100 transition-colors underline"
              aria-label="Call +1-833-441-2222"
            >
              +1-833-441-2222
            </a>
          </p>
        </div>

        {/* Social & Partners Section */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mb-4">
            Connect With Us
          </h3>
          <div className="flex justify-center lg:justify-start space-x-4 mb-4">
            <a
              href="https://twitter.com"
              className="text-blue-300 hover:text-blue-100 transition-transform transform hover:scale-110"
              aria-label="Follow us on Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              className="text-blue-300 hover:text-blue-100 transition-transform transform hover:scale-110"
              aria-label="Follow us on Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://facebook.com"
              className="text-blue-300 hover:text-blue-100 transition-transform transform hover:scale-110"
              aria-label="Follow us on Facebook"
            >
              <FaFacebook size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 pt-8 border-t border-blue-700/50 text-center">
        <p className="text-sm sm:text-base text-blue-200">
          Copyright © 2004–2025 Hot-Bookings. All rights reserved.
        </p>
        <p className="text-sm sm:text-base text-blue-200">
            Partnered with: Taj Ventures, Marriott International, Hilton Hotels, and more
          </p>
      </div>
    </footer>
  );
};

export default Footer;