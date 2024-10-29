import { useTheme } from '../assets/ThemeContext';

const PrivacyPolicy = () => {
  const { isDarkMode } = useTheme(); // Get the dark mode state

  return (
    <div className={`min-h-screen p-6 ${isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-900'}`}>
      <div className="max-w-3xl mx-auto">
        {/* Page Content */}
        <h1 className={`text-4xl font-bold mb-6 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>Privacy Policy</h1>
        <h2 className={`text-lg font-semibold mb-4 text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>24xdev.uk Web Solutions</h2>

        <section className="mb-8">
          <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>1. Introduction</h3>
          <p className={`text-gray-700 ${isDarkMode ? 'dark:text-gray-300' : 'text-gray-800'}`}>
            This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website, 24xdev.uk. 
            Your privacy is important to us, and we are committed to safeguarding your data.
          </p>
        </section>

        <section className="mb-8">
          <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>2. Information We Collect</h3>
          <p className={`text-gray-700 ${isDarkMode ? 'dark:text-gray-300' : 'text-gray-800'}`}>
            We may collect personal information such as your name, email address, and contact number when you use our services or contact us.
            Additionally, we may collect usage data automatically when you visit our website, including your IP address, browser type, and operating system.
          </p>
        </section>

        <section className="mb-8">
          <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>3. How We Use Your Information</h3>
          <p className={`text-gray-700 ${isDarkMode ? 'dark:text-gray-300' : 'text-gray-800'}`}>
            We use your information to provide and improve our services, communicate with you, and respond to your inquiries. 
            We may also use your data for marketing purposes, but you can opt out of receiving marketing communications at any time.
          </p>
        </section>

        <section className="mb-8">
          <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>4. Data Security</h3>
          <p className={`text-gray-700 ${isDarkMode ? 'dark:text-gray-300' : 'text-gray-800'}`}>
            We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. 
            However, please remember that no method of transmission over the Internet or method of electronic storage is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>5. Third-Party Services</h3>
          <p className={`text-gray-700 ${isDarkMode ? 'dark:text-gray-300' : 'text-gray-800'}`}>
            We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, 
            except to provide our services or as required by law. 
            Our website may contain links to third-party sites, and we are not responsible for their content or privacy practices.
          </p>
        </section>

        <section className="mb-8">
          <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>6. Changes to This Privacy Policy</h3>
          <p className={`text-gray-700 ${isDarkMode ? 'dark:text-gray-300' : 'text-gray-800'}`}>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page. 
            Your continued use of our services after any changes indicates your acceptance of the new Privacy Policy.
          </p>
        </section>

        <section className="mb-8">
          <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>7. Contact Us</h3>
          <p className={`text-gray-700 ${isDarkMode ? 'dark:text-gray-300' : 'text-gray-800'}`}>
            If you have any questions or concerns about this Privacy Policy, please contact us at: 
            <strong> info@24xdev.uk</strong>
          </p>
        </section>

        <div className="text-center mt-10">
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            © {new Date().getFullYear()} 24xdev.uk Web Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
