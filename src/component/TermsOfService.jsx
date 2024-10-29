import { useTheme } from '../assets/ThemeContext';

const TermsOfService = () => {
    const { isDarkMode } = useTheme(); // Get the dark mode state

    return (
        <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} min-h-screen text-gray-900 dark:text-gray-200 p-6`}>
            <div className="max-w-3xl mx-auto">

                {/* Page Content */}
                <h1 className={`text-4xl font-bold mb-6 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>Terms of Service</h1>
                <h2 className={`text-lg font-semibold mb-4 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>Pvt Ltd Web Solutions</h2>
                <h3 className={`text-md font-medium mb-4 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>United Kingdom & India</h3>

                <section className="mb-8">
                    <h2 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>1. Acceptance of Terms</h2>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                        By accessing or using our services, you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our services.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>2. Modifications to Terms</h2>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                        We may revise these terms from time to time. The latest version will be available on our website, and it is your responsibility to check for updates.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>3. User Responsibilities</h2>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                        Users are responsible for providing accurate information and maintaining the confidentiality of their accounts. Any unauthorized use of our services may result in termination of access.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>4. Services Provided</h2>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                        Our services include web development, design, digital marketing, and other related services. We reserve the right to modify or discontinue any service without notice.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>5. Limitation of Liability</h2>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                        We are not liable for any indirect, incidental, or consequential damages arising from the use of our services or inability to use them.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>6. Governing Law</h2>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                        These terms are governed by the laws of the United Kingdom and India. Any disputes will be resolved in the competent courts of the respective countries.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>7. Privacy Policy</h2>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                        Your privacy is important to us. Please review our Privacy Policy, which explains how we collect, use, and disclose information about you.
                    </p>
                </section>

                <div className="text-center mt-10">
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        © {new Date().getFullYear()} Pvt Ltd Web Solutions. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
