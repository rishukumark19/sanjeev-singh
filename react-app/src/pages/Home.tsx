import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { Award, Users, Megaphone, CheckCircle2 } from 'lucide-react';
import Reveal from '../components/Reveal';
import HeroCarousel from '../components/HeroCarousel';
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
  const { t } = useLanguage();

  const fbContainerRef = useRef<HTMLDivElement>(null);
  const [fbWidth, setFbWidth] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const w = window.innerWidth;
      // On mobile viewports (<640px), account for page & card padding (~48px total padding)
      const calculated = w < 640 ? Math.floor(w - 48) : 340;
      return Math.min(500, Math.max(180, calculated));
    }
    return 340;
  });

  useEffect(() => {
    const updateWidth = () => {
      if (fbContainerRef.current) {
        const clientWidth = Math.floor(fbContainerRef.current.clientWidth);
        if (clientWidth > 0) {
          // Facebook plugin requires width between 180 and 500
          const clamped = Math.min(500, Math.max(180, clientWidth));
          setFbWidth(clamped);
        }
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Load RSS.app ticker script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://widget.rss.app/v1/ticker.js";
    script.async = true;
    document.body.appendChild(script);
    
    const carouselScript = document.createElement('script');
    carouselScript.src = "https://widget.rss.app/v1/carousel.js";
    carouselScript.async = true;
    document.body.appendChild(carouselScript);

    return () => { 
      if (document.body.contains(script)) document.body.removeChild(script); 
      if (document.body.contains(carouselScript)) document.body.removeChild(carouselScript); 
    };
  }, []);

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Breaking News Ticker (Hidden on Mobile View) */}
      <section className="hidden md:flex bg-[#1a1a2e] border-y border-[#ff7e54]/30 relative z-30 shadow-2xl overflow-hidden items-center">
        <div className="w-full mx-auto h-[64px] md:h-[72px] lg:h-[80px] relative mobile-ticker-zoom flex items-center">
          <div 
            dangerouslySetInnerHTML={{ __html: '<rssapp-ticker id="rgfWKAD7q2Ap8Gei"></rssapp-ticker>' }} 
            className="absolute inset-y-0 w-full flex items-center transition-all" 
          />
        </div>
      </section>

      {/* About Section - Editorial Layout */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-14 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f8f9fa] -z-10" />
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 xl:gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
              <Reveal>
                <div className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[380px]">
                  <div className="absolute -inset-3 border-2 border-[#ff7e54]/15 rounded-2xl -z-10 translate-x-5 translate-y-5" />
                  <div className="rounded-2xl overflow-hidden editorial-shadow">
                    <img 
                      src={`${import.meta.env.BASE_URL}images/real/fb_4.jpg`} 
                      alt="Sanjeev Singh at Singh Mansion" 
                      className="w-full aspect-[4/5] max-h-[340px] sm:max-h-[380px] lg:max-h-[410px] object-cover" 
                      style={{ objectPosition: '42% 20%' }}
                    />
                  </div>
                  <div className="absolute bottom-6 -right-6 w-36 h-36 saffron-gradient rounded-2xl -z-10 opacity-20 blur-xl" />
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7 space-y-4 sm:space-y-5 lg:space-y-6 order-1 lg:order-2">
              <Reveal delay={50}>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="h-px w-6 sm:w-10 bg-[#ff7e54]" />
                    <span className="text-[10px] sm:text-[11px] font-black text-[#ff7e54] uppercase tracking-[0.3em] sm:tracking-[0.4em]">
                      {t('home.about.tag')}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.6rem] font-headline font-black text-[#1a1a2e] leading-[1.18]">
                    {t('home.about.title1')}<span className="text-[#ff7e54]">{t('home.about.title2')}</span>
                  </h2>
                </div>
              </Reveal>

              <Reveal delay={150}>
                <div className="space-y-2.5 sm:space-y-3.5">
                  <p className="text-sm sm:text-base lg:text-lg text-[#1a1a2e]/90 font-medium leading-relaxed font-headline">
                    {t('home.about.p1')}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-2xl font-body">
                    {t('home.about.p2')}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={300}>
                <Link 
                  to="/about" 
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-[#ff7e54] to-[#e56233] text-white shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
                >
                  <span className="text-xs sm:text-sm font-headline font-bold uppercase tracking-wider">
                    {t('home.about.cta')}
                  </span>
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <span className="material-symbols-outlined text-xs">east</span>
                  </div>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Stats - Executive Metrics Grid */}
      <section className="bg-[#f1f3f5] py-6 sm:py-8 md:py-10 relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black/10 to-transparent" />
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6 items-stretch">
            {[
              { val: 'home.stats.years', label: 'home.stats.years_label', icon: Award, isText: false },
              { val: 'home.stats.lives', label: 'home.stats.lives_label', icon: Users, isText: false },
              { val: 'home.stats.voice', label: 'home.stats.voice_label', icon: Megaphone, isText: true },
              { val: 'home.stats.initiatives', label: 'home.stats.initiatives_label', icon: CheckCircle2, isText: false }
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <Reveal key={i} delay={i * 80}>
                  <div className="h-full bg-white rounded-2xl p-3.5 sm:p-5 border border-gray-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-lg hover:border-[#ff7e54]/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                    {/* Top indicator & icon */}
                    <div className="flex items-center mb-2 sm:mb-3">
                      <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl bg-orange-50 text-[#ff7e54] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                    </div>

                    {/* Metric Value with fixed vertical container for uniform row alignment */}
                    <div className="min-h-[38px] sm:min-h-[48px] flex items-center my-1">
                      <h3
                        className={`font-headline font-black text-[#ff7e54] tracking-tight transition-colors ${
                          stat.isText
                            ? 'text-sm sm:text-xl lg:text-2xl leading-tight'
                            : 'text-xl sm:text-3xl lg:text-4xl leading-none'
                        }`}
                      >
                        {t(stat.val)}
                      </h3>
                    </div>

                    {/* Progress / Accent Divider */}
                    <div className="h-[2px] w-5 sm:w-7 bg-[#ff7e54]/25 group-hover:w-full transition-all duration-500 my-1.5 sm:my-2" />

                    {/* Metric Label with fixed min-height for uniform baseline */}
                    <p className="min-h-[24px] sm:min-h-[28px] flex items-start text-[10px] sm:text-[11px] font-black text-gray-500 uppercase tracking-wider sm:tracking-[0.14em] leading-snug">
                      {t(stat.label)}
                    </p>

                    {/* Subtle corner hover accent glow */}
                    <div className="absolute -bottom-6 -right-6 w-14 h-14 bg-[#ff7e54]/5 rounded-full blur-xl group-hover:bg-[#ff7e54]/15 transition-all pointer-events-none" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Legacy - High Contrast Section */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-14 bg-[#f8f9fa] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 xl:gap-12 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1 space-y-4 sm:space-y-5 md:space-y-6">
            <Reveal delay={50}>
              <div className="space-y-2 sm:space-y-3">
                <span className="text-[10px] sm:text-[11px] font-black text-[#ff7e54] uppercase tracking-[0.3em] sm:tracking-[0.4em]">
                  {t('home.legacy.tag')}
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-headline font-black text-[#1a1a2e] leading-tight">
                  {t('home.legacy.title')}
                </h2>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <p className="text-xs sm:text-sm md:text-base text-[#1a1a2e]/80 leading-relaxed font-body max-w-xl">
                {t('home.legacy.p')}
              </p>
            </Reveal>
            <Reveal delay={200}>
              <Link 
                to="/about" 
                className="inline-flex items-center gap-2.5 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full border-2 border-[#1a1a2e] text-[#1a1a2e] hover:bg-[#1a1a2e] hover:text-white transition-all duration-300 group shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="text-xs sm:text-sm font-headline font-bold uppercase tracking-wider">
                  {t('home.legacy.cta')}
                </span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1.5 transition-transform text-[#ff7e54]">
                  east
                </span>
              </Link>
            </Reveal>
          </div>
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <Reveal>
              <div className="relative group w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[380px]">
                <div className="aspect-[4/5] max-h-[340px] sm:max-h-[380px] lg:max-h-[410px] rounded-2xl overflow-hidden shadow-xl relative">
                  <img 
                    alt="Sanjeev Singh engaging with citizens at Singh Mansion" 
                    className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-1000" 
                    style={{ objectPosition: '40% 25%' }}
                    src={`${import.meta.env.BASE_URL}images/real/fb_6.jpg`} 
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-2xl" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Latest Updates - Carousel Section (Hidden on Mobile) */}
      <section className="hidden md:block py-8 sm:py-10 md:py-12 bg-[#f8f9fa] relative overflow-hidden border-t border-black/5">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          <div className="mb-5 sm:mb-6 text-center space-y-2">
            <Reveal>
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-8 bg-[#ff7e54]" />
                <span className="text-[10px] sm:text-[11px] font-black text-[#ff7e54] uppercase tracking-[0.3em] sm:tracking-[0.4em]">
                  {t('gallery.tag')}
                </span>
                <div className="h-px w-8 bg-[#ff7e54]" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline font-black text-[#1a1a2e]">
                {t('gallery.title1')} <span className="text-[#ff7e54]">{t('gallery.title2')}</span>
              </h2>
            </Reveal>
          </div>
          
          <Reveal delay={200}>
            <div className="w-full bg-white rounded-2xl p-3 sm:p-5 editorial-shadow border border-black/5">
              <div dangerouslySetInnerHTML={{ __html: '<rssapp-carousel id="rgfWKAD7q2Ap8Gei"></rssapp-carousel>' }} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Media Hub - Social Walls */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-14 bg-[#f4f6fa] px-4 md:px-8 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 mb-5 sm:mb-7">
            <div className="space-y-2">
              <Reveal delay={50}>
                <span className="text-[10px] sm:text-[11px] font-black text-[#ff7e54] uppercase tracking-[0.3em] sm:tracking-[0.4em]">
                  {t('home.social.tag')}
                </span>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-headline font-black text-[#1a1a2e]">
                  {t('home.social.title')}
                </h2>
              </Reveal>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 w-full max-w-full min-w-0 items-stretch">
            {/* Facebook Wall */}
            <Reveal delay={50} className="w-full max-w-full min-w-0">
              <div className="bg-white rounded-2xl flex flex-col group h-full border-2 border-[#1877F2]/25 shadow-lg hover:shadow-xl hover:shadow-[#1877F2]/20 transition-all duration-500 overflow-hidden w-full max-w-full min-w-0">
                {/* Branded Facebook Card Top Header */}
                <div className="p-3 sm:p-3.5 flex justify-between items-center bg-gradient-to-r from-[#1877F2] to-[#0c5dc5] text-white">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/20 shadow-sm shrink-0">
                      <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-headline font-black text-xs sm:text-sm text-white uppercase tracking-wider truncate">{t('home.social.fb_name')}</h4>
                      <p className="text-[9px] sm:text-[10px] font-bold text-white/80 uppercase tracking-wider truncate">{t('home.social.fb_sub')}</p>
                    </div>
                  </div>
                  <span className="flex items-center gap-1.5 text-[10px] font-bold text-white bg-white/20 px-2 py-0.5 rounded-full border border-white/20 backdrop-blur-sm shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    Live Feed
                  </span>
                </div>

                {/* Feed iframe container */}
                <div 
                  ref={fbContainerRef}
                  className="flex-grow bg-white p-2 flex justify-center items-center h-[340px] sm:h-[380px] md:h-[400px] lg:h-[420px] w-full max-w-full min-w-0"
                >
                  <iframe
                    key={fbWidth}
                    src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100069661650642&tabs=timeline&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&width=${fbWidth}&appId`}
                    width={fbWidth}
                    height="100%"
                    style={{ border: 'none', width: '100%', maxWidth: `${fbWidth}px`, minWidth: '0' }}
                    scrolling="yes" 
                    frameBorder="0" 
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    title="Facebook Feed"
                    className="w-full h-full block rounded-xl"
                  />
                </div>

                {/* Card Footer */}
                <div className="p-3 bg-blue-50/70 border-t border-blue-100 flex items-center justify-between gap-2 text-xs text-gray-600 font-semibold px-3.5 shrink-0">
                  <span className="flex items-center gap-1.5 text-[#1877F2] text-[10px] sm:text-[11px] shrink-0 whitespace-nowrap font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1877F2] shrink-0" />
                    Official Facebook Page
                  </span>
                  <a
                    href="https://www.facebook.com/profile.php?id=100069661650642"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1877F2] hover:underline flex items-center gap-1 text-[10px] sm:text-[11px] shrink-0 whitespace-nowrap font-bold"
                  >
                    Open Page <span className="material-symbols-outlined text-xs">open_in_new</span>
                  </a>
                </div>
              </div>
            </Reveal>

            {/* X Card */}
            <Reveal delay={100} className="w-full max-w-full min-w-0">
              <div className="bg-black p-5 sm:p-6 md:p-7 rounded-2xl flex flex-col justify-between group h-full border border-white/5 shadow-xl">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-xl flex items-center justify-center text-white border border-white/10 shrink-0">
                      <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-headline font-black text-xs sm:text-sm text-white uppercase tracking-wider break-words">{t('home.social.x_name')}</h4>
                      <p className="text-[9px] sm:text-[10px] font-black text-white/50 uppercase tracking-widest break-all">@sanjeev_singh_jh</p>
                    </div>
                  </div>
                  <p className="text-base sm:text-lg lg:text-xl text-white font-headline leading-snug">
                    {t('home.social.x_post')}
                  </p>
                </div>
                <a 
                  href="https://x.com/sanjeev_singh_jh" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="mt-6 py-3 sm:py-3.5 bg-white text-black hover:bg-gray-150 rounded-xl font-black text-[11px] sm:text-xs uppercase tracking-[0.2em] text-center transition-all shadow-md shadow-white/5"
                >
                  {t('home.social.x_cta')}
                </a>
              </div>
            </Reveal>

            {/* Instagram Card */}
            <Reveal delay={150} className="w-full max-w-full min-w-0">
              <div className="bg-white rounded-2xl overflow-hidden flex flex-col group h-full border-2 border-pink-500/25 shadow-lg hover:shadow-xl hover:shadow-pink-500/20 transition-all duration-500">
                <div className="relative h-[190px] sm:h-[210px] lg:h-[230px] overflow-hidden shrink-0">
                  <img 
                    src={`${import.meta.env.BASE_URL}images/real/fb_10.jpg`} 
                    alt="Social feed - Sanjeev Singh" 
                    className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-1000" 
                    style={{ objectPosition: 'center 20%' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#ff7e54]/80 via-transparent to-transparent opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-5">
                    <p className="text-white font-body text-xs sm:text-sm font-semibold tracking-wide translate-y-0 lg:translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      {t('home.social.ig_hover')}
                    </p>
                  </div>
                </div>
                <div className="p-4 sm:p-5 flex flex-col gap-3 flex-grow bg-white justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-tr from-[#FFB800] via-[#FF007A] to-[#7600EC] rounded-xl flex items-center justify-center text-white shadow-sm shadow-pink-500/25 shrink-0">
                        <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-headline font-black text-xs sm:text-sm text-[#1a1a2e] uppercase tracking-wider break-words">{t('home.social.ig_name')}</h4>
                        <p className="text-[9px] sm:text-[10px] font-black text-[#ff7e54] uppercase tracking-widest break-all">{t('home.social.ig_sub')}</p>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 font-body leading-relaxed line-clamp-3">
                      {t('home.social.ig_post')}
                    </p>
                  </div>
                </div>
                {/* Card Footer */}
                <div className="p-3 bg-gradient-to-r from-pink-50/70 via-orange-50/40 to-purple-50/70 border-t border-pink-100 flex items-center justify-between gap-2 text-xs text-gray-600 font-semibold px-3.5 shrink-0">
                  <span className="flex items-center gap-1.5 text-[#E1306C] text-[10px] sm:text-[11px] shrink-0 whitespace-nowrap font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E1306C] shrink-0" />
                    Official Instagram
                  </span>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E1306C] hover:underline flex items-center gap-1 text-[10px] sm:text-[11px] shrink-0 whitespace-nowrap font-bold"
                  >
                    Open Profile <span className="material-symbols-outlined text-xs">open_in_new</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map Section - Simplified */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-14 bg-[#f8f9fa] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#ff7e54]/5 -skew-x-12 translate-x-32" />
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            <div className="lg:col-span-4 space-y-4 sm:space-y-6">
              <div className="space-y-2 sm:space-y-3">
                <span className="text-[10px] sm:text-[11px] font-black text-[#ff7e54] uppercase tracking-[0.3em] sm:tracking-[0.4em]">
                  {t('home.map.tag')}
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-headline font-black text-[#1a1a2e]">
                  {t('home.map.title1')}<br />
                  <span className="text-[#ff7e54]">{t('home.map.title2')}</span>
                </h2>
              </div>
              <p className="text-gray-600 font-body text-xs sm:text-sm md:text-base leading-relaxed">
                {t('home.map.address')}
              </p>
            </div>
            <div className="lg:col-span-8">
              <Reveal>
                <div className="h-[240px] sm:h-[280px] md:h-[320px] lg:h-[350px] rounded-2xl overflow-hidden editorial-shadow border border-gray-150 group">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.06994270119!2d86.46153931139891!3d23.81611177853649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bd007e446ce9%3A0x42fd6c53a777a6cf!2sSINGH%20MANSION!5e0!3m2!1sen!2sin!4v1775368729592!5m2!1sen!2sin"
                    width="100%" height="100%"
                    className="border-0 brightness-95 contrast-125 grayscale hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
                    allowFullScreen={true} loading="lazy"
                    title="Location"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
