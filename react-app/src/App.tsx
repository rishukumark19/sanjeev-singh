import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';

function App() {
  return (
    <LanguageProvider>
      <Router basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="privacy" element={<PrivacyPolicy />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<TermsConditions />} />
            <Route path="terms-and-conditions" element={<TermsConditions />} />
          </Route>
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
