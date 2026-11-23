import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Gallery from './pages/Gallery';
import PressReleases from './pages/PressReleases';
import Videos from './pages/Videos';
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
            <Route path="press" element={<PressReleases />} />
            <Route path="updates" element={<PressReleases />} />
            <Route path="news" element={<PressReleases />} />
            <Route path="videos" element={<Videos />} />
            {/* Any legacy contact URLs gracefully redirect to Home */}
            <Route path="contact" element={<Navigate to="/" replace />} />
            <Route path="contact-us" element={<Navigate to="/" replace />} />
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
