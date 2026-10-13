import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Phone, Home, User, Image, Mail, Globe, X, ChevronRight } from 'lucide-react';
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
    { label: t('nav.home'), to: '/', icon: Home },
    { label: t('nav.about'), to: '/about', icon: User },
    { label: t('nav.gallery'), to: '/gallery', icon: Image },
    { label: t('nav.contact'), to: '/contact', icon: Mail },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled ? 'nav-scrolled' : 'nav-top'
      }`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? 'h-[54px] md:h-[60px]' : 'h-[60px] md:h-[72px]'
          }`}>

            {/* Brand */}
            <NavLink to="/" className="flex items-center group relative z-10 py-1 sm:py-2 shrink-0">
              <span className={`font-headline font-black tracking-wider sm:tracking-[0.14em] md:tracking-[0.18em] lg:tracking-[0.2em] transition-all duration-300 uppercase text-white whitespace-nowrap ${
                scrolled 
                  ? 'text-[15px] sm:text-lg md:text-xl lg:text-2xl' 
                  : 'text-base sm:text-xl md:text-2xl lg:text-[26px]'
              }`}>
                {lang === 'hi' ? 'संजीव सिंह' : 'SANJEEV SINGH'}
              </span>
            </NavLink>

            {/* Tablet & Desktop Nav (md: 768px and up) */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 relative z-10">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) => {
                    const base = `relative px-2.5 lg:px-4 py-1.5 lg:py-2 text-[10.5px] lg:text-[11.5px] font-bold tracking-[0.06em] lg:tracking-[0.12em] uppercase transition-all duration-300 rounded-lg overflow-hidden group/link whitespace-nowrap`;
                    if (isActive) return `${base} text-white bg-white/20 shadow-sm`;
                    return `${base} text-white/95 hover:text-white hover:bg-white/10`;
                  }}
                >
                  {({ isActive }) => (
                    <>
                      <span className="relative z-10">{link.label}</span>
                      <span className={`absolute bottom-0 left-0 h-[2.5px] transition-all duration-300 ${
                         isActive ? 'w-full' : 'w-0 group-hover/link:w-full'
                      } bg-white`} />
                    </>
                  )}
                </NavLink>
              ))}

              {/* Divider */}
              <div className="w-px h-4 lg:h-5 mx-1 lg:mx-2 transition-colors duration-500 bg-white/25" />

              {/* Language Toggle */}
              <button
                onClick={toggleLang}
                className="px-2.5 lg:px-3 py-1.5 text-[10.5px] lg:text-[11px] font-bold tracking-wider uppercase rounded-md border transition-all duration-300 border-white/35 text-white hover:bg-white/15 hover:border-white/70 shrink-0 flex items-center gap-1"
                aria-label="Toggle language"
              >
                <Globe size={11} className="opacity-80" />
                <span>{lang === 'en' ? 'हिन्दी' : 'ENG'}</span>
              </button>

              {/* CTA */}
              <a
                href="tel:+919431125166"
                className="ml-1 lg:ml-2 flex items-center gap-1.5 lg:gap-2 px-3 lg:px-4.5 py-1.5 lg:py-2 text-[10.5px] lg:text-[11px] font-bold tracking-[0.06em] uppercase rounded-md transition-all duration-300 shadow-md bg-white text-[#ff7e54] hover:bg-gray-50 shadow-black/10 hover:shadow-lg border-b-2 border-transparent hover:border-[#138808] shrink-0"
              >
                <Phone size={11} className="lg:w-3 lg:h-3" strokeWidth={2.5} />
                <span className="hidden xl:inline">+91 94311 25166</span>
                <span className="xl:hidden">{t('nav.call')}</span>
              </a>
            </nav>

            {/* Mobile Only: Language + Hamburger (< md) */}
            <div className="flex items-center gap-1.5 sm:gap-2 md:hidden relative z-10 shrink-0">
              <button
                onClick={toggleLang}
                className="px-2 py-1 text-[10px] font-bold tracking-wider uppercase rounded border border-white/30 text-white hover:bg-white/10 transition-all flex items-center justify-center min-w-[34px] h-[32px]"
                aria-label="Toggle language"
              >
                {lang === 'en' ? 'हिन्दी' : 'ENG'}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-8 h-8 sm:w-9 sm:h-9 flex flex-col items-center justify-center gap-[4.5px] rounded-lg transition-colors duration-300 text-white hover:bg-white/10"
                aria-label="Toggle navigation"
              >
                <span className={`block w-4 sm:w-5 h-[1.75px] rounded-full transition-all duration-300 origin-center ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-[6.25px] bg-white' : 'bg-white'
                }`} />
                <span className={`block w-3 sm:w-3.5 h-[1.75px] rounded-full transition-all duration-200 ml-auto ${
                  isMobileMenuOpen ? 'opacity-0 scale-0' : 'bg-white'
                }`} />
                <span className={`block w-4 sm:w-5 h-[1.75px] rounded-full transition-all duration-300 origin-center ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-[6.25px] bg-white' : 'bg-white'
                }`} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Mega Menu Drawer (< md) */}
      <div className={`fixed inset-0 z-[100] md:hidden transition-all duration-500 ${
        isMobileMenuOpen ? 'visible' : 'invisible pointer-events-none'
      }`}>
        {/* Backdrop */}
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className={`absolute inset-0 bg-[#0a0e1a]/60 backdrop-blur-md transition-opacity duration-500 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {/* Drawer Content */}
        <div className={`absolute top-0 right-0 w-[86vw] max-w-[350px] sm:max-w-[380px] h-full bg-white flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] border-l-4 border-[#ff7e54] shadow-2xl ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Mobile Header */}
          <div className="flex items-center justify-between px-6 h-[64px] border-b border-gray-100 shrink-0 bg-gray-50/50">
            <span className="font-headline font-black text-xs uppercase tracking-[0.2em] text-[#ff7e54]">
              {t('nav.menu')}
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>

          {/* Links - Larger Typography & Touch-Friendly Rows */}
          <nav className="flex-1 overflow-y-auto py-3 divide-y divide-gray-100/70">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-6 py-4 transition-all duration-200 border-l-4 ${
                      isActive
                        ? 'text-[#ff7e54] bg-orange-50/80 border-l-[#ff7e54] font-bold'
                        : 'text-gray-700 hover:text-[#1a1a2e] hover:bg-gray-50 border-l-transparent font-medium'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <div className="flex items-center gap-4 min-w-0">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform ${
                          isActive 
                            ? 'bg-gradient-to-br from-[#ff7e54] to-[#e56233] text-white shadow-md shadow-orange-500/25 scale-105' 
                            : 'bg-gray-100 text-gray-500'
                        }`}>
                          <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                        </div>
                        <span className="text-[17px] sm:text-[18px] font-headline tracking-wide truncate">
                          {link.label}
                        </span>
                      </div>
                      <ChevronRight size={18} className={`shrink-0 transition-transform ${
                        isActive ? 'text-[#ff7e54] translate-x-0.5' : 'text-gray-300'
                      }`} />
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Mobile Bottom Section with Generous Actions */}
          <div className="px-6 py-5 border-t border-gray-100 shrink-0 space-y-3 bg-gray-50/70">
            <button
              onClick={toggleLang}
              className="flex items-center justify-center gap-2.5 w-full py-3.5 border-2 border-gray-200/90 bg-white text-gray-800 font-bold text-[13px] tracking-wide rounded-xl hover:border-[#ff7e54] hover:text-[#ff7e54] transition-all shadow-sm active:scale-[0.99]"
            >
              <Globe size={16} className="text-[#ff7e54]" />
              <span>{lang === 'en' ? 'हिन्दी में देखें (Switch to Hindi)' : 'View in English'}</span>
            </button>
            <a
              href="tel:+919431125166"
              className="flex items-center justify-center gap-2.5 w-full py-3.5 bg-gradient-to-r from-[#ff7e54] to-[#e56233] text-white font-bold text-[14px] tracking-wide rounded-xl shadow-lg shadow-orange-500/25 active:scale-[0.99] transition-all"
            >
              <Phone size={16} strokeWidth={2.5} />
              <span>+91 94311 25166</span>
            </a>
            <p className="text-center text-[10px] text-gray-400 pt-0.5 tracking-widest uppercase font-semibold">
              {t('nav.location')}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
