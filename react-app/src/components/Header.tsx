import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, User, Image, Newspaper, Globe, X, ChevronRight, Video as VideoIcon, Landmark } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Logo from './Logo';

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
    { label: lang === 'hi' ? 'समाचार व विज्ञप्ति' : 'Press & News', to: '/press', icon: Newspaper },
    { label: lang === 'hi' ? 'वीडियो' : 'Videos', to: '/videos', icon: VideoIcon },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'nav-scrolled' : 'nav-top'
      }`}>
        {/* Tricolor Accent Line on top edge (Amit Shah / Narendra Modi style) */}
        <div className="h-[3px] w-full tricolor-stripe" />

        <div className="max-w-[1440px] mx-auto px-3 sm:px-6 md:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? 'h-[60px] md:h-[66px]' : 'h-[68px] md:h-[78px]'
          }`}>

            {/* Brand Identity with Lotus Crest & Subtitle */}
            <NavLink to="/" className="flex items-center gap-2.5 sm:gap-3.5 group relative z-10 py-1 shrink-0">
              <Logo size={scrolled ? 'sm' : 'md'} showBadge className="transition-transform duration-300 group-hover:scale-105 shrink-0" />
              <div className="flex flex-col">
                <span className={`font-headline font-black tracking-wider sm:tracking-[0.14em] md:tracking-[0.16em] transition-all duration-300 uppercase text-white whitespace-nowrap leading-tight ${
                  scrolled 
                    ? 'text-sm sm:text-base md:text-lg lg:text-xl' 
                    : 'text-base sm:text-lg md:text-xl lg:text-2xl'
                }`}>
                  {lang === 'hi' ? 'संजीव सिंह' : 'SANJEEV SINGH'}
                </span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-[9.5px] sm:text-[11px] font-bold text-white/95 uppercase tracking-widest leading-none">
                    {lang === 'hi' ? 'पूर्व विधायक · झरिया (धनबाद)' : 'Former MLA · Jharia (Dhanbad)'}
                  </span>
                </div>
              </div>
            </NavLink>

            {/* Tablet & Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 relative z-10">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) => {
                    const base = `relative px-3 lg:px-4 py-1.5 lg:py-2 text-[11px] lg:text-[12.5px] font-bold tracking-[0.06em] lg:tracking-[0.08em] uppercase transition-all duration-200 rounded-md overflow-hidden group/link whitespace-nowrap`;
                    if (isActive) return `${base} text-white bg-black/20 shadow-inner font-black`;
                    return `${base} text-white/90 hover:text-white hover:bg-white/15`;
                  }}
                >
                  {({ isActive }) => (
                    <>
                      <span className="relative z-10">{link.label}</span>
                      <span className={`absolute bottom-0 left-0 h-[2.5px] transition-all duration-300 ${
                         isActive ? 'w-full bg-white' : 'w-0 group-hover/link:w-full bg-white/70'
                      }`} />
                    </>
                  )}
                </NavLink>
              ))}

              {/* Divider */}
              <div className="w-px h-5 mx-1.5 lg:mx-2.5 bg-white/30" />

              {/* Location Badge */}
              <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-black/15 border border-white/30 text-white text-[11px] font-bold tracking-wider uppercase">
                <Landmark size={13} className="text-amber-200" />
                <span>{lang === 'hi' ? 'झरिया · धनबाद' : 'Jharia · Dhanbad'}</span>
              </div>

              {/* Language Switcher */}
              <button
                onClick={toggleLang}
                className="ml-1 px-3 py-1.5 text-[11px] font-bold tracking-wider uppercase rounded-md border transition-all duration-200 border-white/40 text-white hover:bg-white/20 shrink-0 flex items-center gap-1.5"
                aria-label="Toggle language"
              >
                <Globe size={13} className="text-white" />
                <span>{lang === 'en' ? 'हिन्दी' : 'ENG'}</span>
              </button>
            </nav>

            {/* Mobile Only: Language + Hamburger (< md) */}
            <div className="flex items-center gap-2 md:hidden relative z-10 shrink-0">
              <button
                onClick={toggleLang}
                className="px-2.5 py-1 text-[10.5px] font-bold tracking-wider uppercase rounded border border-white/40 text-white hover:bg-white/20 transition-all flex items-center justify-center min-w-[36px] h-[32px]"
                aria-label="Toggle language"
              >
                {lang === 'en' ? 'हिन्दी' : 'ENG'}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-9 h-9 flex flex-col items-center justify-center gap-[4.5px] rounded-lg transition-colors duration-200 text-white hover:bg-white/20"
                aria-label="Toggle navigation"
              >
                <span className={`block w-5 h-[2px] rounded-full transition-all duration-300 origin-center ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-[6.5px] bg-white' : 'bg-white'
                }`} />
                <span className={`block w-4 h-[2px] rounded-full transition-all duration-200 ml-auto ${
                  isMobileMenuOpen ? 'opacity-0 scale-0' : 'bg-white'
                }`} />
                <span className={`block w-5 h-[2px] rounded-full transition-all duration-300 origin-center ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-[6.5px] bg-white' : 'bg-white'
                }`} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu (< md) */}
      <div className={`fixed inset-0 z-[100] md:hidden transition-all duration-500 ${
        isMobileMenuOpen ? 'visible' : 'invisible pointer-events-none'
      }`}>
        {/* Backdrop */}
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className={`absolute inset-0 bg-[#060c18]/80 backdrop-blur-md transition-opacity duration-500 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {/* Drawer Content */}
        <div className={`absolute top-0 right-0 w-[86vw] max-w-[340px] h-full bg-[#fdfbf7] text-slate-900 flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] border-l-4 border-[#ff7e54] shadow-2xl ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Mobile Header with Logo */}
          <div className="flex items-center justify-between px-5 h-[76px] border-b border-slate-200 shrink-0 bg-gradient-to-r from-[#ff7e54] to-[#f46b3f] text-white">
            <div className="flex items-center gap-2.5">
              <Logo size="sm" showBadge />
              <div>
                <span className="font-headline font-black text-xs uppercase tracking-[0.14em] block text-white">
                  {lang === 'hi' ? 'संजीव सिंह' : 'SANJEEV SINGH'}
                </span>
                <span className="text-[9.5px] text-amber-100 font-bold block">
                  {lang === 'hi' ? 'पूर्व विधायक · झरिया' : 'Former MLA · Jharia'}
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/20 hover:bg-white/30 text-white transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 overflow-y-auto py-3 divide-y divide-slate-100">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-5 py-3.5 transition-all duration-200 border-l-4 ${
                      isActive
                        ? 'text-[#ff7e54] bg-orange-50 border-l-[#ff7e54] font-black'
                        : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50 border-l-transparent font-medium'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform ${
                          isActive 
                            ? 'bg-gradient-to-br from-[#ff7e54] to-[#e65100] text-white shadow-md shadow-orange-500/25 scale-105' 
                            : 'bg-slate-100 text-slate-600'
                        }`}>
                          <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                        </div>
                        <span className="text-[15px] font-headline tracking-wide truncate">
                          {link.label}
                        </span>
                      </div>
                      <ChevronRight size={16} className={`shrink-0 transition-transform ${
                        isActive ? 'text-[#ff7e54] translate-x-0.5' : 'text-slate-400'
                      }`} />
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Mobile Bottom */}
          <div className="px-5 py-5 border-t border-slate-200 shrink-0 space-y-3 bg-white">
            <button
              onClick={toggleLang}
              className="flex items-center justify-center gap-2 w-full py-2.5 border border-slate-300 bg-slate-50 text-slate-800 font-bold text-xs tracking-wider uppercase rounded-xl hover:bg-orange-50 hover:text-[#ff7e54] hover:border-[#ff7e54] transition-all"
            >
              <Globe size={14} className="text-[#ff7e54]" />
              <span>{lang === 'en' ? 'हिन्दी में देखें (Switch to Hindi)' : 'View in English'}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
