import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './assets/ThemeContext';
import HomePage from './pages/HomePage';
import Loader from './component/Loader';
import { useState, useEffect } from 'react';
import { UserProvider } from './assets/UserContext';
import GettingStarted from './pages/GettingStarted';
import Footer from './component/Footer';
import Navbar from './component/NavBar';
import TermsOfService from './component/TermsOfService';
import PrivacyPolicy from './component/PrivacyPolicy';
import AboutUsPage from './pages/AboutUsPage';


function App() {
  const [loading, setLoading] = useState(true);

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Simulate data fetching delay
    }, 1000); // Change this duration as needed

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <UserProvider>
      <ThemeProvider>
        <Router>
          {loading ? ( // Show loader while loading
            <div className="loader-container fixed inset-0 flex items-center justify-center bg-white z-50">
              <Loader />
            </div>
          ) : (
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/gettingstarted" element={<GettingStarted />} />
                <Route path="/About" element={<AboutUsPage />} />
              </Routes>
              
              <Footer />
            </>
          )}
        </Router>
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;
