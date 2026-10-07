import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggleLang, t } = useLanguage();
  const location = useLocation();

  useEffect(() => { setIsMobileMenuOpen(false); }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const links = [
    { label: t('nav.home'), to: '/' },
    { label: t('nav.about'), to: '/about' },
    { label: t('nav.gallery'), to: '/gallery' },
    { label: t('nav.contact'), to: '/contact' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled ? 'nav-scrolled' : 'nav-top'
      }`}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
          <div className={`flex items-center justify-between transition-all duration-700 ${
            scrolled ? 'h-[60px]' : 'h-[72px]'
          }`}>

            {/* Brand */}
            <NavLink to="/" className="flex items-center group relative z-10">
              <div className="flex flex-col">
                <span className={`font-headline font-black tracking-[0.2em] transition-all duration-500 leading-tight uppercase text-white text-[26px]`}>
                  {lang === 'hi' ? 'संजीव सिंह' : 'SANJEEV SINGH'}
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <div className="h-[1px] transition-all duration-500 w-6 bg-white/40" />
                  <span className="text-[10px] font-black tracking-[0.4em] uppercase transition-all duration-500 shrink-0 text-white/80">
                    {t('nav.subtitle')}
                  </span>
                  <div className="h-[1px] transition-all duration-500 w-6 bg-white/40" />
                </div>
              </div>
            </NavLink>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 relative z-10">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) => {
                    const base = `relative px-4 py-2.5 text-[11px] font-bold tracking-[0.12em] uppercase transition-all duration-500 rounded-lg overflow-hidden group/link`;
                    if (isActive) return `${base} text-white bg-white/20`;
                    return `${base} text-white hover:bg-white/10`;
                  }}
                >
                  {({ isActive }) => (
                    <>
                      <span className="relative z-10">{link.label}</span>
                      <span className={`absolute bottom-0 left-0 h-[2.5px] transition-all duration-500 ${
                         isActive ? 'w-full' : 'w-0 group-hover/link:w-full'
                      } bg-white`} />
                    </>
                  )}
                </NavLink>
              ))}

              {/* Divider */}
              <div className="w-px h-5 mx-2 transition-colors duration-500 bg-white/15" />

              {/* Language Toggle */}
              <button
                onClick={toggleLang}
                className="px-3 py-1.5 text-[11px] font-bold tracking-wider uppercase rounded-md border transition-all duration-300 border-white/30 text-white hover:bg-white/10 hover:border-white/60"
                aria-label="Toggle language"
              >
                {lang === 'en' ? 'हिन्दी' : 'ENG'}
              </button>

              {/* CTA */}
              <a
                href="tel:+919431125166"
                className="ml-2 flex items-center gap-2 px-5 py-2 text-[11px] font-bold tracking-[0.06em] uppercase rounded-md transition-all duration-300 shadow-md bg-white text-[#ff7e54] hover:bg-gray-50 shadow-black/10 hover:shadow-lg border-b-2 border-transparent hover:border-[#138808]"
              >
                <Phone size={12} strokeWidth={2.5} />
                <span className="hidden xl:inline">+91 94311 25166</span>
                <span className="xl:hidden">{t('nav.call')}</span>
              </a>
            </nav>

            {/* Mobile: Language + Hamburger */}
            <div className="flex items-center gap-2 lg:hidden relative z-10">
              <button
                onClick={toggleLang}
                className="px-2.5 py-1.5 text-[10px] font-bold tracking-wider uppercase rounded-md border transition-all duration-300 border-white/20 text-white/60"
              >
                {lang === 'en' ? 'हिं' : 'EN'}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-lg transition-colors duration-300 text-white"
                aria-label="Toggle navigation"
              >
                <span className={`block w-5 h-[1.5px] rounded-full transition-all duration-400 origin-center ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-[6.5px] bg-white' : 'bg-white'
                }`} />
                <span className={`block w-4 h-[1.5px] rounded-full transition-all duration-300 ml-auto ${
                  isMobileMenuOpen ? 'opacity-0 scale-0' : 'bg-white'
                }`} />
                <span className={`block w-5 h-[1.5px] rounded-full transition-all duration-400 origin-center ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-[6.5px] bg-white' : 'bg-white'
                }`} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div className={`fixed inset-0 z-[100] lg:hidden transition-all duration-500 ${
        isMobileMenuOpen ? 'visible' : 'invisible pointer-events-none'
      }`}>
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className={`absolute inset-0 bg-[#0a0e1a]/60 backdrop-blur-md transition-opacity duration-500 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div className={`absolute top-0 right-0 w-full max-w-[340px] h-full bg-white flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] border-l-4 border-[#ff7e54] ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Mobile header */}
          <div className="flex items-center justify-between px-6 h-[72px] border-b border-gray-100 shrink-0">
            <span className="font-headline font-extrabold text-[15px] text-[#1a1a2e] tracking-tight">{t('nav.menu')}</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-50 transition-colors"
              aria-label="Close"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line x1="2" y1="2" x2="14" y2="14" />
                <line x1="14" y1="2" x2="2" y2="14" />
              </svg>
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 overflow-y-auto py-2">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center px-6 h-[54px] text-[14px] font-semibold tracking-wide transition-all duration-200 border-l-[3px] ${
                    isActive
                      ? 'text-[#ff7e54] bg-orange-50/60 border-l-[#ff7e54]'
                      : 'text-gray-600 hover:text-[#1a1a2e] hover:bg-gray-50 border-l-transparent'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile bottom */}
          <div className="px-6 py-6 border-t border-gray-100 shrink-0 space-y-3">
            <button
              onClick={toggleLang}
              className="w-full py-3 border border-gray-200 text-gray-600 font-bold text-[13px] tracking-wide rounded-lg hover:border-[#ff7e54] hover:text-[#ff7e54] transition-all"
            >
              {lang === 'en' ? 'हिन्दी में देखें' : 'View in English'}
            </button>
            <a
              href="tel:+919431125166"
              className="flex items-center justify-center gap-2.5 w-full py-3.5 bg-gradient-to-r from-[#ff7e54] to-[#e56233] text-white font-bold text-[13px] tracking-wide rounded-lg shadow-lg shadow-orange-200/40"
            >
              <Phone size={15} strokeWidth={2.5} />
              +91 94311 25166
            </a>
            <p className="text-center text-[10px] text-gray-400 mt-1 tracking-widest uppercase font-medium">
              {t('nav.location')}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
