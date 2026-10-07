import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Reveal from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

  const slides = [
    { image: `${import.meta.env.BASE_URL}images/carousel_1.jpg`, titleKey: 'home.slide1.title', subKey: 'home.slide1.sub' },
    { image: `${import.meta.env.BASE_URL}images/carousel_2.jpg`, titleKey: 'home.slide2.title', subKey: 'home.slide2.sub' },
    { image: `${import.meta.env.BASE_URL}images/carousel_3.jpg`, titleKey: 'home.slide3.title', subKey: 'home.slide3.sub' },
    { image: `${import.meta.env.BASE_URL}images/location_3.jpg`, titleKey: 'home.slide4.title', subKey: 'home.slide4.sub' },
    { image: `${import.meta.env.BASE_URL}images/singh-mansion.jpg`, titleKey: 'home.slide5.title', subKey: 'home.slide5.sub' },
  ];

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Carousel */}
      <section className="relative w-full h-[600px] md:h-[750px] lg:h-[850px] overflow-hidden bg-[#0a0e1a]">
        <div className="absolute inset-0 flex transition-transform duration-[1000ms] ease-in-out" style={{ transform: `translateX(-${(currentSlide * 100) / slides.length}%)`, width: `${slides.length * 100}%` }}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative h-full w-full flex-shrink-0"
              style={{ width: `${100 / slides.length}%` }}
            >
              <div className="absolute inset-0 bg-[#0a0e1a]/40 z-[1]" />
              <img 
                alt={t(slide.titleKey)} 
                className="w-full h-full object-cover" 
                style={{ objectPosition: index === 1 || index === 2 ? 'center 15%' : 'center' }}
                src={slide.image} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-transparent to-[#0a0e1a]/20 z-[2]" />
              
              <div className="absolute inset-0 flex items-end pb-24 z-[3]">
                <div className="max-w-[1400px] mx-auto px-4 md:px-6 w-full">
                  <div className="max-w-4xl text-left">
                    <div className={`h-[1px] bg-[#ff7e54] mb-8 transition-all duration-1000 delay-300 ${
                      index === currentSlide ? 'w-24 opacity-100' : 'w-0 opacity-0'
                    }`} />
                    <h3 className={`text-3xl md:text-5xl lg:text-6xl font-headline font-black text-white leading-[1.05] mb-8 drop-shadow-2xl transform transition-all duration-1000 delay-500 ease-out tracking-tight ${
                      index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                    }`}>
                      {t(slide.titleKey)}
                    </h3>
                    <p className={`text-lg md:text-xl text-white/80 font-body font-light max-w-2xl transform transition-all duration-1000 delay-700 ease-out tracking-wide leading-relaxed ${
                      index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                    }`}>
                      {t(slide.subKey)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel UI */}
        <div className="absolute bottom-12 left-0 w-full z-20">
          <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-end">
            <div className="flex gap-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCurrentSlide(index);
                  }}
                  className={`w-3.5 h-3.5 rounded-full transition-all duration-300 cursor-pointer relative z-30 ${
                    index === currentSlide ? 'bg-[#ff7e54] scale-125' : 'bg-white/30 hover:bg-white/60'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Breaking News Ticker */}
      <section className="bg-[#1a1a2e] border-y border-[#ff7e54]/20 relative z-30 shadow-xl">
        <div className="flex items-center w-full max-w-[1600px] mx-auto overflow-hidden">
          <div className="bg-[#ff7e54] text-white font-black text-xs md:text-sm uppercase tracking-[0.2em] py-4 px-6 md:px-8 shrink-0 relative z-10 editorial-shadow">
            {t('gallery.title1')} {t('gallery.title2')}
          </div>
          <div className="flex-grow bg-[#1a1a2e] relative overflow-hidden h-[52px]">
             <div dangerouslySetInnerHTML={{ __html: '<rssapp-ticker id="rgfWKAD7q2Ap8Gei"></rssapp-ticker>' }} className="absolute inset-y-0 w-full flex items-center" />
          </div>
        </div>
      </section>

      {/* About Section - Editorial Layout */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f8f9fa] -z-10" />
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="relative">
                  <div className="absolute -inset-4 border-2 border-[#ff7e54]/10 rounded-2xl -z-10 translate-x-8 translate-y-8" />
                  <div className="rounded-2xl overflow-hidden editorial-shadow">
                    <img 
                      src={`${import.meta.env.BASE_URL}images/sanjeev-portrait.jpg`} 
                      alt="Sanjeev Singh" 
                      className="w-full aspect-[4/5] object-cover" 
                    />
                  </div>
                  <div className="absolute bottom-8 -right-8 w-48 h-48 saffron-gradient rounded-2xl -z-10 opacity-20 blur-2xl" />
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7 space-y-10">
              <Reveal delay={50}>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-px w-12 bg-[#ff7e54]" />
                    <span className="text-[11px] font-black text-[#ff7e54] uppercase tracking-[0.5em]">
                      {t('home.about.tag')}
                    </span>
                  </div>
                  <h2 className="text-5xl lg:text-7xl font-headline font-black text-[#1a1a2e] leading-[1.1]">
                    {t('home.about.title1')}<br />
                    <span className="text-[#ff7e54]">{t('home.about.title2')}</span>
                  </h2>
                </div>
              </Reveal>

              <Reveal delay={150}>
                <div className="space-y-8">
                  <p className="text-2xl text-[#1a1a2e]/90 font-medium leading-relaxed font-headline">
                    {t('home.about.p1')}
                  </p>
                  <p className="text-lg text-gray-500 leading-relaxed max-w-2xl font-body">
                    {t('home.about.p2')}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={300}>
                <Link to="/about" className="inline-flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-full saffron-gradient flex items-center justify-center text-white shadow-xl shadow-orange-500/20 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">east</span>
                  </div>
                  <span className="text-sm font-black uppercase tracking-[0.2em] text-[#1a1a2e]">
                    {t('home.about.cta')}
                  </span>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Stats - Bespoke Grid */}
      <section className="bg-[#f1f3f5] py-24 relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black/5 to-transparent" />
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
            {[
              { val: 'home.stats.years', label: 'home.stats.years_label' },
              { val: 'home.stats.lives', label: 'home.stats.lives_label' },
              { val: 'home.stats.voice', label: 'home.stats.voice_label' },
              { val: 'home.stats.initiatives', label: 'home.stats.initiatives_label' }
            ].map((stat, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="space-y-2 group">
                  <h3 className="text-4xl md:text-5xl font-headline font-black text-[#ff7e54] transition-colors">
                    {t(stat.val)}
                  </h3>
                  <div className="h-[2px] w-8 bg-[#ff7e54]/30 group-hover:w-full transition-all duration-700" />
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">
                    {t(stat.label)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy - High Contrast Section */}
      <section className="py-32 bg-[#f8f9fa] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 space-y-10">
            <Reveal delay={50}>
              <div className="space-y-4">
                <span className="text-[11px] font-black text-[#ff7e54] uppercase tracking-[0.4em]">
                  {t('home.legacy.tag')}
                </span>
                <h2 className="text-5xl font-headline font-black text-[#1a1a2e]">
                  {t('home.legacy.title')}
                </h2>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <p className="text-xl text-[#1a1a2e]/70 leading-relaxed font-body">
                {t('home.legacy.p')}
              </p>
            </Reveal>
            <Reveal delay={200}>
              <Link to="/about" className="inline-flex items-center gap-4 text-[#1a1a2e] font-black group">
                <span className="text-sm uppercase tracking-[0.2em] border-b-2 border-[#ff7e54]">
                  {t('home.legacy.cta')}
                </span>
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">trending_flat</span>
              </Link>
            </Reveal>
          </div>
          <div className="order-1 lg:order-2">
            <Reveal>
              <div className="relative group">
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative">
                  <img 
                    alt="Legacy" 
                    className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000" 
                    src={`${import.meta.env.BASE_URL}images/singh-mansion.jpg`} 
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[2rem]" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Latest Updates - Carousel Section */}
      <section className="py-24 bg-[#f8f9fa] relative overflow-hidden border-t border-black/5">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          <div className="mb-12 text-center space-y-4">
            <Reveal>
              <div className="flex items-center justify-center gap-4">
                <div className="h-px w-12 bg-[#ff7e54]" />
                <span className="text-[11px] font-black text-[#ff7e54] uppercase tracking-[0.4em]">
                  {t('gallery.tag')}
                </span>
                <div className="h-px w-12 bg-[#ff7e54]" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-4xl md:text-5xl font-headline font-black text-[#1a1a2e]">
                {t('gallery.title1')} <span className="text-[#ff7e54]">{t('gallery.title2')}</span>
              </h2>
            </Reveal>
          </div>
          
          <Reveal delay={200}>
            <div className="w-full bg-white rounded-[2rem] p-4 md:p-8 editorial-shadow border border-black/5">
              <div dangerouslySetInnerHTML={{ __html: '<rssapp-carousel id="rgfWKAD7q2Ap8Gei"></rssapp-carousel>' }} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Media Hub - Social Walls */}
      <section className="py-32 bg-white px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div className="space-y-4">
              <Reveal delay={50}>
                <span className="text-[11px] font-black text-[#ff7e54] uppercase tracking-[0.4em]">
                  {t('home.social.tag')}
                </span>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="text-5xl lg:text-7xl font-headline font-black text-[#1a1a2e]">
                  {t('home.social.title')}
                </h2>
              </Reveal>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Facebook Wall */}
            <Reveal delay={50}>
              <div className="bg-white p-2 rounded-[2rem] flex flex-col group h-full border border-gray-100 shadow-2xl hover:shadow-[#1877F2]/20 transition-all duration-500">
                <div className="p-6 pb-4 flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#1877F2] to-[#0d5ac7] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#1877F2]/30 group-hover:scale-110 transition-transform duration-500">
                      <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-headline font-black text-[#1a1a2e] uppercase tracking-wider">{t('home.social.fb_name')}</h4>
                      <p className="text-[10px] font-black text-[#1877F2] uppercase tracking-widest">{t('home.social.fb_sub')}</p>
                    </div>
                  </div>
                </div>
                <div className="flex-grow rounded-[1.5rem] overflow-hidden bg-[#f0f2f5] mx-2 mb-2 relative ring-1 ring-inset ring-black/5 flex justify-center">
                  {/* Subtle Top & Bottom Fade Overlays to make the iframe blend in */}
                  <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-b from-[#f0f2f5] to-transparent z-10 pointer-events-none opacity-50" />
                  <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100069661650642&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
                    width="100%" height="500"
                    style={{ border: 'none', overflow: 'hidden', maxWidth: '340px' }}
                    scrolling="no" frameBorder="0" allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    title="Facebook Feed"
                    className="w-full h-full mix-blend-multiply"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#f0f2f5] to-transparent z-10 pointer-events-none" />
                </div>
              </div>
            </Reveal>

            {/* X Card */}
            <Reveal delay={100}>
              <div className="bg-black p-10 rounded-[2rem] flex flex-col justify-between group h-full border border-white/5 shadow-2xl">
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white border border-white/10">
                      <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-headline font-black text-white uppercase tracking-wider">{t('home.social.x_name')}</h4>
                      <p className="text-[10px] font-black text-white/50 uppercase tracking-widest">@sanjeev_singh_jh</p>
                    </div>
                  </div>
                  <p className="text-2xl text-white font-headline leading-relaxed">
                    {t('home.social.x_post')}
                  </p>
                </div>
                <a 
                  href="https://x.com/sanjeev_singh_jh" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="mt-12 py-5 bg-white text-black hover:bg-gray-150 rounded-xl font-black text-xs uppercase tracking-[0.2em] text-center transition-all shadow-xl shadow-white/5"
                >
                  {t('home.social.x_cta')}
                </a>
              </div>
            </Reveal>

            {/* Instagram Card */}
            <Reveal delay={150}>
              <div className="bg-[#f8f9fa] rounded-[2rem] overflow-hidden flex flex-col group h-full border border-transparent hover:border-[#ff7e54]/10 transition-all">
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={`${import.meta.env.BASE_URL}images/location_3.jpg`} 
                    alt="Social feed" 
                    className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-1000" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#ff7e54]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8">
                    <p className="text-white font-body text-sm font-semibold tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {t('home.social.ig_hover')}
                    </p>
                  </div>
                </div>
                <div className="p-8 flex flex-col gap-6 flex-grow">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-tr from-[#FFB800] via-[#FF007A] to-[#7600EC] rounded-xl flex items-center justify-center text-white">
                      <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-headline font-black text-[#1a1a2e] uppercase tracking-wider">{t('home.social.ig_name')}</h4>
                      <p className="text-[10px] font-black text-[#ff7e54] uppercase tracking-widest">{t('home.social.ig_sub')}</p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-600 font-body leading-relaxed flex-grow">
                    {t('home.social.ig_post')}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map Section - Simplified */}
      <section className="py-32 bg-[#f8f9fa] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#ff7e54]/5 -skew-x-12 translate-x-32" />
        <div className="max-w-[1400px] mx-auto px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-4 space-y-8">
              <div className="space-y-4">
                <span className="text-[11px] font-black text-[#ff7e54] uppercase tracking-[0.4em]">
                  {t('home.map.tag')}
                </span>
                <h2 className="text-5xl font-headline font-black text-[#1a1a2e]">
                  {t('home.map.title1')}<br />
                  <span className="text-[#ff7e54]">{t('home.map.title2')}</span>
                </h2>
              </div>
              <p className="text-gray-600 font-body text-lg leading-relaxed">
                {t('home.map.address')}
              </p>
            </div>
            <div className="lg:col-span-8">
              <Reveal>
                <div className="h-[500px] rounded-[2rem] overflow-hidden editorial-shadow border border-gray-150 group">
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
