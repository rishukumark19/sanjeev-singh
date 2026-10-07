import { useState } from 'react';
import Reveal from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';

const AboutUs = () => {
  const { t, lang } = useLanguage();
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-white min-h-screen pt-24 pb-20 flex flex-col justify-center relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#ff7e54]/5 -skew-x-12 translate-x-32 -z-10" />
      
      <div className="max-w-[1400px] mx-auto px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-8">
            <Reveal>
              <h1 className="text-4xl md:text-5xl font-headline font-black text-[#ff7e54] leading-tight">
                {lang === 'hi' ? 'संजीव सिंह : एक परिचय' : 'Sanjeev Singh : An Introduction'}
              </h1>
            </Reveal>

            <Reveal delay={100}>
              <div className="space-y-6 text-gray-700 font-body text-base md:text-lg leading-relaxed max-w-3xl">
                <p className="first-letter:text-5xl first-letter:font-black first-letter:text-[#ff7e54] first-letter:mr-2 first-letter:float-left">
                  {t('about.origins.p1')}
                </p>
                <p>
                  {t('about.origins.p2')}
                </p>
                <p>
                  {t('about.origins.p3')}
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="pt-4">
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="inline-block px-8 py-3.5 border-2 border-[#ff7e54] text-[#ff7e54] hover:bg-[#ff7e54] hover:text-white rounded-full font-headline font-bold text-sm tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-orange-500/10"
                >
                  {showMore 
                    ? (lang === 'hi' ? 'कम दिखाएं' : 'SHOW LESS') 
                    : (lang === 'hi' ? 'और पढ़ें' : 'READ MORE')}
                </button>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Circular Portrait & Socials */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-8">
            <Reveal delay={150}>
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl relative z-10">
                <img 
                  alt="Sanjeev Singh Portrait" 
                  className="w-full h-full object-cover" 
                  src={`${import.meta.env.BASE_URL}images/sanjeev-portrait.jpg`} 
                />
              </div>
            </Reveal>

            {/* Social Icons under the portrait */}
            <Reveal delay={250}>
              <div className="flex items-center gap-6 text-[#ff7e54]">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.525 3.545 12 3.545 12 3.545s-7.525 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.027 0 12 0 12s0 3.973.502 5.837a3.003 3.003 0 002.11 2.11C4.475 20.455 12 20.455 12 20.455s7.525 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.973 24 12 24 12s0-3.973-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </Reveal>
          </div>

        </div>

        {/* Minimal Dropdown Content Area */}
        <div className={`transition-all duration-700 ease-in-out overflow-hidden max-w-4xl ${
          showMore ? 'max-h-[1000px] opacity-100 mt-16 pt-8 border-t border-gray-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-700 font-body text-base leading-relaxed">
            <div className="space-y-6">
              <h3 className="font-headline font-black text-xl text-[#1a1a2e] uppercase tracking-wider">
                {lang === 'hi' ? 'प्रारंभिक जीवन एवं शिक्षा' : 'Early Life & Education'}
              </h3>
              <p>
                {lang === 'hi' 
                  ? 'संजीव सिंह का जन्म 5 फरवरी 1986 को सिंदरी (धनबाद), झारखंड में हुआ था। वह झारखंड के पूर्व विधायक स्वर्गीय सूर्यदेव सिंह और कुंती सिंह के पुत्र हैं। उन्होंने वर्ष 2000 में उत्तर प्रदेश के जमालपुर बलिया से माध्यमिक शिक्षा पूरी की।'
                  : 'Sanjeev Singh was born on 5 February 1986 in Sindri (Dhanbad), Jharkhand. He is the son of late Suryadeo Singh and Kunti Singh. He completed his secondary education from Jamalpur Balbia in the year 2000.'}
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="font-headline font-black text-xl text-[#1a1a2e] uppercase tracking-wider">
                {lang === 'hi' ? 'राजनीतिक एवं सामाजिक यात्रा' : 'Political & Social Journey'}
              </h3>
              <p>
                {lang === 'hi'
                  ? 'उन्होंने भारतीय जनता पार्टी के सदस्य के रूप में 2014 के झारखंड विधानसभा चुनाव में झरिया विधानसभा क्षेत्र से चुनाव लड़ा और 33,692 वोटों के अंतर से जीत हासिल की। वह धनबाद में कोयला खनिकों के हितों का प्रतिनिधित्व करने वाले प्रमुख संगठन जनता मजदूर संघ के नेता भी हैं।'
                  : 'He contested the 2014 Jharkhand Assembly election from Jharia constituency representing the Bharatiya Janata Party, winning by a margin of 33,692 votes. He also leads the Janta Mazdoor Sangh, a prominent trade union representing coal miners in the Dhanbad region.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Navigation Tab (Listen, Act, Share style) */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 flex flex-col z-50">
        <div className="flex flex-col bg-[#ff7e54] text-white rounded-l-xl overflow-hidden shadow-lg border-y border-l border-white/20">
          <button className="py-5 px-3 flex flex-col items-center hover:bg-[#e56233] transition-colors border-b border-white/10 group">
            <span className="text-[10px] font-black uppercase tracking-widest [writing-mode:vertical-lr] rotate-180 mb-2">LISTEN</span>
            <span className="material-symbols-outlined text-sm group-hover:scale-110 transition-transform">volume_up</span>
          </button>
          <button className="py-5 px-3 flex flex-col items-center hover:bg-[#e56233] transition-colors border-b border-white/10 group">
            <span className="text-[10px] font-black uppercase tracking-widest [writing-mode:vertical-lr] rotate-180 mb-2">ACT</span>
            <span className="material-symbols-outlined text-sm group-hover:scale-110 transition-transform">touch_app</span>
          </button>
          <button className="py-5 px-3 flex flex-col items-center hover:bg-[#e56233] transition-colors group">
            <span className="text-[10px] font-black uppercase tracking-widest [writing-mode:vertical-lr] rotate-180 mb-2">SHARE</span>
            <span className="material-symbols-outlined text-sm group-hover:scale-110 transition-transform">share</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
