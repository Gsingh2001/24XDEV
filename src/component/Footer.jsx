import React from 'react';
import { useTheme } from '../assets/ThemeContext'; // Import your theme context
import { Link } from 'react-router-dom';

const Footer = () => {
  const { isDarkMode } = useTheme(); // Get the dark mode state

  return (
    <footer className={`bg-gray-900 py-8 ${isDarkMode ? 'text-white bg-gray-900' : 'bg-white text-gray-900'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-1/2 p-4">
                <FooterInfo />
                <FooterNewsletter />
              </div>
              <div className="w-full sm:w-1/2 p-4">
                <FooterLinks />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <ContactForm />
          </div>
        </div>
      </div>
      <FooterBottom />
    </footer>
  );
};

const FooterInfo = () => (
  <div>
    <h3 className="text-2xl font-bold">24XDEV</h3>
    <p>
      At 24XDEV, we provide a complete, end-to-end solution for all your website needs. From bespoke web design to seamless development, reliable hosting, efficient deployment, and round-the-clock maintenance, our goal is to ensure your digital presence is not only attractive but also highly functional and secure. Serving clients across India, the UK, and Canada, we make web solutions accessible and reliable for all.
    </p>
  </div>
);

const FooterNewsletter = () => {
  return (
    <div>
      <h4 className="font-semibold">Join Our Newsletter</h4>
      <p>Stay updated on the latest trends in website design, development, and digital solutions. Subscribe to our newsletter for insights, tips, and exclusive offers.</p>
      <form action="" method="post">
        <input type="email" name="email" placeholder="Enter your email" className="p-2 rounded-md border border-gray-300" />
        <input type="submit" value="Subscribe" className="ml-2 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" />
      </form>
    </div>
  );
};

const FooterLinks = () => (
  <div>
    <h4 className="font-semibold">Useful Links</h4>
    <ul className="list-disc pl-5">
      <li><Link to="#" className="hover:underline">Home</Link></li>
      <li><Link to="#" className="hover:underline">About Us</Link></li>
      <li><Link to="#" className="hover:underline">Services</Link></li>
      <li><Link to="/terms" className="hover:underline">Terms of Service</Link></li>
      <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
    </ul>
    <h4 className="font-semibold mt-4">Contact Us</h4>
    <p>
      24XDEV HQ <br />
      New York, NY 535022 <br />
      United States <br />
      <strong>Phone:</strong> +1 5589 55488 55 <br />
      <strong>Email:</strong> contact@24xdev.com <br />
    </p>
    <SocialLinks />
  </div>
);

const SocialLinks = () => (
  <div className="flex space-x-4 mt-4">
    <Link to="#" className="text-gray-400 hover:text-blue-500"><i className="fa fa-twitter"></i></Link>
    <Link to="#" className="text-gray-400 hover:text-blue-500"><i className="fa fa-facebook"></i></Link>
    <Link to="#" className="text-gray-400 hover:text-blue-500"><i className="fa fa-instagram"></i></Link>
    <Link to="#" className="text-gray-400 hover:text-blue-500"><i className="fa fa-linkedin"></i></Link>
  </div>
);

const ContactForm = () => (
  <div>
    <h4 className="font-semibold">Send Us a Message</h4>
    <p>Got a question? Whether you need help with a project or want to learn more about our services, feel free to reach out. We're here to assist clients from India, the UK, Canada, and beyond!</p>
    <form action="" method="post" className="space-y-4">
      <input type="text" name="name" className="w-full p-2 rounded-md border border-gray-300" placeholder="Your Name" />
      <input type="email" className="w-full p-2 rounded-md border border-gray-300" name="email" placeholder="Your Email" />
      <input type="text" className="w-full p-2 rounded-md border border-gray-300" name="subject" placeholder="Subject" />
      <textarea className="w-full p-2 rounded-md border border-gray-300" name="message" rows="5" placeholder="Message"></textarea>
      <div className="text-center">
        <button type="submit" className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Send Message</button>
      </div>
    </form>
  </div>
);

const FooterBottom = () => (
  <div className="container mx-auto text-center py-4">
    <div className="text-gray-400">
      &copy; Copyright <strong>24XDEV</strong>. All Rights Reserved
    </div>
  </div>
);

export default Footer;
