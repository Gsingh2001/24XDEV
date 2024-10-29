import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from '../../24xdev-1/src/component/Footer';
import NavBar from '../../24xdev-1/src/component/NavBar';
import { ThemeProvider } from './assets/ThemeContext';
import HomePage from './pages/HomePage';
import Loader from './component/Loader';
import { useState, useEffect } from 'react';
import Step1 from './component/forms/step1';
import { UserProvider } from './assets/UserContext';
import GettingStarted from './pages/GettingStarted';
import Step2 from './component/forms/step2';
import Step3 from './component/forms/step3';
import Step4 from './component/forms/step4';
import Step5 from './component/forms/step5';


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
              <NavBar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/gettingstarted" element={<GettingStarted />} >
                <Route path="1" element={<Step1 />} />
                <Route path="2" element={<Step2 />} />
                <Route path="3" element={<Step3 />} />
                <Route path="4" element={<Step4 />} />
                <Route path="5" element={<Step5 />} />
                
                </Route>
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
