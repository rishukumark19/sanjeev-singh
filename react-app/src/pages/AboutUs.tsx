import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';

const AboutUs = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-white min-h-screen pt-24 md:pt-32 pb-24 md:pb-32 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/3 h-[600px] bg-[#ff7e54]/5 -skew-x-12 translate-x-32 -z-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#ff7e54]/5 rounded-full blur-3xl -z-10" />

      {/* Hero Header Section */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 mb-12 md:mb-16">
        <Reveal>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-10 bg-[#ff7e54]" />
            <span className="text-[11px] font-black text-[#ff7e54] uppercase tracking-[0.4em]">
              {t('about.tag')}
            </span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-headline font-black text-[#1a1a2e] tracking-tight leading-tight mb-4">
            {t('about.heading')}
          </h1>
        </Reveal>

        <Reveal delay={150}>
          <p className="text-base sm:text-lg md:text-xl text-[#ff7e54] font-headline font-semibold max-w-3xl leading-relaxed">
            {t('about.heading_sub')}
          </p>
        </Reveal>
      </section>

      {/* Main Grid: Sticky Profile & Full Story */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Portrait & Quick Facts (Sticky on Desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-8">
            <Reveal delay={100}>
              <div className="relative group max-w-md mx-auto lg:max-w-none">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10 border-4 border-white bg-slate-100">
                  <img 
                    alt="Sanjeev Singh Official Portrait" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                    src={`${import.meta.env.BASE_URL}images/sanjeev-portrait.jpg`} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/60 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#ff9933]">{t('about.tag')}</p>
                    <h3 className="text-2xl font-headline font-black">Sanjeev Singh</h3>
                    <p className="text-xs text-white/80">Former MLA · Jharia | Trade Union Leader</p>
                  </div>
                </div>
                <div className="absolute -inset-4 border-2 border-[#ff7e54]/15 rounded-[2rem] -z-10 translate-x-3 translate-y-3" />
                <div className="absolute -bottom-8 -right-8 w-48 h-48 saffron-gradient rounded-full -z-10 opacity-15 blur-2xl" />
              </div>
            </Reveal>

            {/* Quick Facts Card */}
            <Reveal delay={200}>
              <div className="bg-[#f8f9fa] border border-gray-200/80 rounded-2xl p-6 md:p-8 space-y-5 shadow-sm max-w-md mx-auto lg:max-w-none">
                <h4 className="text-base font-headline font-black text-[#1a1a2e] uppercase tracking-wider border-b border-gray-200 pb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#ff7e54] text-xl">badge</span>
                  {t('about.profile_title')}
                </h4>
                
                <div className="space-y-4 text-sm font-body">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1 border-b border-gray-200/50 pb-3">
                    <span className="text-gray-500 font-semibold">{t('about.dob_label')}</span>
                    <span className="text-[#1a1a2e] font-bold sm:text-right">{t('about.dob_val')}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1 border-b border-gray-200/50 pb-3">
                    <span className="text-gray-500 font-semibold">{t('about.parents_label')}</span>
                    <span className="text-[#1a1a2e] font-bold sm:text-right">{t('about.parents_val')}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1 border-b border-gray-200/50 pb-3">
                    <span className="text-gray-500 font-semibold">{t('about.residence_label')}</span>
                    <span className="text-[#1a1a2e] font-bold sm:text-right">{t('about.residence_val')}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1 border-b border-gray-200/50 pb-3">
                    <span className="text-gray-500 font-semibold">{t('about.constituency_label')}</span>
                    <span className="text-[#1a1a2e] font-bold sm:text-right">{t('about.constituency_val')}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <span className="text-gray-500 font-semibold">{t('about.union_label')}</span>
                    <span className="text-[#ff7e54] font-bold sm:text-right">{t('about.union_val')}</span>
                  </div>
                </div>

                {/* Social Connect Icons */}
                <div className="pt-4 border-t border-gray-200 flex items-center justify-center gap-5 text-[#ff7e54]">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white rounded-full shadow-sm hover:bg-[#ff7e54] hover:text-white transition-all hover:scale-110" aria-label="Facebook">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                    </svg>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white rounded-full shadow-sm hover:bg-[#ff7e54] hover:text-white transition-all hover:scale-110" aria-label="Twitter">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white rounded-full shadow-sm hover:bg-[#ff7e54] hover:text-white transition-all hover:scale-110" aria-label="Instagram">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white rounded-full shadow-sm hover:bg-[#ff7e54] hover:text-white transition-all hover:scale-110" aria-label="YouTube">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.525 3.545 12 3.545 12 3.545s-7.525 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.027 0 12 0 12s0 3.973.502 5.837a3.003 3.003 0 002.11 2.11C4.475 20.455 12 20.455 12 20.455s7.525 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.973 24 12 24 12s0-3.973-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Full Narrative Biography */}
          <div className="lg:col-span-7 space-y-12 md:space-y-16">
            
            {/* Section 01: Origins and Early Life */}
            <div className="space-y-6">
              <Reveal>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-black text-white bg-[#ff7e54] px-2.5 py-0.5 rounded-full">01</span>
                    <h2 className="text-2xl sm:text-3xl font-headline font-black text-[#1a1a2e] uppercase tracking-wide">
                      {t('about.origins.title')}
                    </h2>
                  </div>
                  <div className="h-[2px] w-20 bg-[#ff7e54]" />
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="space-y-5 text-gray-700 font-body text-base sm:text-lg leading-relaxed">
                  <p>
                    {t('about.origins.p1')}
                  </p>
                  <p>
                    {t('about.origins.p2')}
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Inspirational Quote Card */}
            <Reveal delay={150}>
              <div className="relative overflow-hidden bg-gradient-to-br from-[#1a1a2e] to-[#252542] rounded-3xl p-8 md:p-10 text-white shadow-xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff7e54]/10 rounded-full blur-2xl" />
                <span className="material-symbols-outlined text-5xl md:text-6xl text-[#ff7e54] opacity-80 mb-4 block">format_quote</span>
                <blockquote className="text-lg sm:text-xl md:text-2xl font-headline font-medium leading-relaxed italic text-white/95 mb-4">
                  {t('about.quote')}
                </blockquote>
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="h-0.5 w-8 bg-[#ff7e54]" />
                  <p className="text-xs font-headline font-bold uppercase tracking-widest text-[#ff7e54]">Sanjeev Singh · Jharia</p>
                </div>
              </div>
            </Reveal>

            {/* Section 02: Political Career & Union Leadership */}
            <div className="space-y-6">
              <Reveal>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-black text-white bg-[#ff7e54] px-2.5 py-0.5 rounded-full">02</span>
                    <h2 className="text-2xl sm:text-3xl font-headline font-black text-[#1a1a2e] uppercase tracking-wide">
                      {t('about.career.title')}
                    </h2>
                  </div>
                  <div className="h-[2px] w-20 bg-[#ff7e54]" />
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="space-y-5 text-gray-700 font-body text-base sm:text-lg leading-relaxed">
                  <p>
                    {t('about.career.p1')}
                  </p>
                  <p>
                    {t('about.career.p2')}
                  </p>
                  <p>
                    {t('about.career.p3')}
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Section 03: Continuing the Legacy */}
            <div className="space-y-6">
              <Reveal>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-black text-white bg-[#ff7e54] px-2.5 py-0.5 rounded-full">03</span>
                    <h2 className="text-2xl sm:text-3xl font-headline font-black text-[#1a1a2e] uppercase tracking-wide">
                      {t('about.legacy.title')}
                    </h2>
                  </div>
                  <div className="h-[2px] w-20 bg-[#ff7e54]" />
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="space-y-5 text-gray-700 font-body text-base sm:text-lg leading-relaxed">
                  <p>
                    {t('about.legacy.p1')}
                  </p>
                  <p>
                    {t('about.legacy.p2')}
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Action CTA */}
            <Reveal delay={150}>
              <div className="pt-6 border-t border-gray-200">
                <Link 
                  to="/gallery"
                  className="px-8 py-3.5 bg-[#ff7e54] hover:bg-[#e56233] text-white rounded-full font-headline font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-lg shadow-orange-500/20 hover:scale-105 inline-flex items-center gap-2"
                >
                  <span>{t('about.cta')}</span>
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </Link>
              </div>
            </Reveal>

          </div>
        </div>
      </div>

      {/* Vertical Navigation Tab (Listen, Act, Share style) */}
      <div className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 flex-col z-50">
        <div className="flex flex-col bg-[#ff7e54] text-white rounded-l-xl overflow-hidden shadow-lg border-y border-l border-white/20">
          <button className="py-5 px-3 flex flex-col items-center hover:bg-[#e56233] transition-colors border-b border-white/10 group" aria-label="Listen">
            <span className="text-[10px] font-black uppercase tracking-widest [writing-mode:vertical-lr] rotate-180 mb-2">LISTEN</span>
            <span className="material-symbols-outlined text-sm group-hover:scale-110 transition-transform">volume_up</span>
          </button>
          <button className="py-5 px-3 flex flex-col items-center hover:bg-[#e56233] transition-colors border-b border-white/10 group" aria-label="Act">
            <span className="text-[10px] font-black uppercase tracking-widest [writing-mode:vertical-lr] rotate-180 mb-2">ACT</span>
            <span className="material-symbols-outlined text-sm group-hover:scale-110 transition-transform">touch_app</span>
          </button>
          <button className="py-5 px-3 flex flex-col items-center hover:bg-[#e56233] transition-colors group" aria-label="Share">
            <span className="text-[10px] font-black uppercase tracking-widest [writing-mode:vertical-lr] rotate-180 mb-2">SHARE</span>
            <span className="material-symbols-outlined text-sm group-hover:scale-110 transition-transform">share</span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Tab (Listen, Act, Share) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-[#ff7e54] text-white flex justify-around items-center shadow-[0_-4px_10px_rgba(0,0,0,0.1)] border-t border-white/20 pb-safe">
        <button className="flex-1 py-3 flex flex-col items-center justify-center hover:bg-[#e56233] transition-colors border-r border-white/10 group">
          <span className="material-symbols-outlined text-lg mb-1 group-hover:scale-110 transition-transform">volume_up</span>
          <span className="text-[10px] font-black uppercase tracking-widest">LISTEN</span>
        </button>
        <button className="flex-1 py-3 flex flex-col items-center justify-center hover:bg-[#e56233] transition-colors border-r border-white/10 group">
          <span className="material-symbols-outlined text-lg mb-1 group-hover:scale-110 transition-transform">touch_app</span>
          <span className="text-[10px] font-black uppercase tracking-widest">ACT</span>
        </button>
        <button className="flex-1 py-3 flex flex-col items-center justify-center hover:bg-[#e56233] transition-colors group">
          <span className="material-symbols-outlined text-lg mb-1 group-hover:scale-110 transition-transform">share</span>
          <span className="text-[10px] font-black uppercase tracking-widest">SHARE</span>
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
