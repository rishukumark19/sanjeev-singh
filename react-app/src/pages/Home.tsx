import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  HardHat, 
  Building2, 
  HeartHandshake, 
  Sparkles,
  ExternalLink,
  Landmark,
  Compass,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Reveal from '../components/Reveal';
import HeroCarousel from '../components/HeroCarousel';
import Logo from '../components/Logo';
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
  const { lang, t } = useLanguage();
  const isHi = lang === 'hi';

  // Real announcements for the native ticker
  const announcements = [
    isHi ? 'झरिया व धनबाद: कोयलांचल के कामगारों एवं क्षेत्रवासियों के अधिकारों की अनवरत रक्षा' : 'Dhanbad & Jharia: Steadfast advocacy for the rights and welfare of coal belt workers',
    isHi ? 'झरिया विधानसभा के सर्वांगीण विकास एवं ग्रामीण सड़कों के पक्कीकरण हेतु निरंतर प्रयास जारी' : 'Committed to the holistic development & concrete road connectivity of Jharia constituency',
    isHi ? 'बीसीसीएल (BCCL) कोयला कामगारों के अधिकारों, सुरक्षा व देय लाभों की निरंतर पैरवी — जनता मजदूर संघ' : 'Advocacy for BCCL coal miners’ safety, fair wages and welfare via Janta Mazdoor Sangh',
    isHi ? 'स्व. सूर्यदेव सिंह जी के पदचिन्हों पर जनसेवा: समाज के अंतिम व्यक्ति तक विकास पहुंचाना लक्ष्य' : 'Carrying forward Late Suryadeo Singh’s vision of empowering the last citizen in society',
    isHi ? 'दिशा (DISHA) समीक्षा बैठक में धनबाद जिले की जनकल्याणकारी योजनाओं की प्रगति की समीक्षा' : 'Active review of central public welfare and infrastructure projects at District DISHA meeting'
  ];

  // Core Pillars of Public Service
  const pillars = [
    {
      icon: HardHat,
      title: isHi ? 'मजदूर अधिकार व सुरक्षा' : 'Coal Miners & Labor Welfare',
      desc: isHi 
        ? 'जनता मजदूर संघ के नेतृत्व में बीसीसीएल खनिकों के वेतन, कार्यस्थल सुरक्षा और सामाजिक सुरक्षा अधिकारों की सशक्त लड़ाई।' 
        : 'Guiding Janta Mazdoor Sangh to secure fair wages, medical protections, and occupational safety for thousands of BCCL coal miners.',
      tag: isHi ? 'श्रम कल्याण' : 'Labor Rights'
    },
    {
      icon: Building2,
      title: isHi ? 'बुनियादी ढांचा व सड़क' : 'Civic Infrastructure & Roads',
      desc: isHi 
        ? 'झरिया के सुदूर ग्रामीण क्षेत्रों को मुख्य मार्ग से जोड़ने, स्वच्छ पेयजल पाइपलाइन और नागरिक सुविधाओं का विस्तार।' 
        : 'Spearheading durable concrete roads, clean drinking water networks, and community infrastructure across Jharia.',
      tag: isHi ? 'विकास पहल' : 'Development'
    },
    {
      icon: Landmark,
      title: isHi ? 'खुला जनसंवाद व निवारण' : 'Open Public Redressal',
      desc: isHi 
        ? 'धनबाद में निरंतर आम नागरिक, युवा और कामगार अपनी समस्याओं के त्वरित समाधान व मार्गदर्शन हेतु पहुंचते हैं।' 
        : 'Dedicated citizen facilitation where workers and families connect daily for guidance, solutions, and community solidarity.',
      tag: isHi ? 'जनसुनवाई' : 'Citizen Care'
    },
    {
      icon: HeartHandshake,
      title: isHi ? 'सामाजिक सेवा व युवा उत्थान' : 'Social Solidarity & Youth Uplift',
      desc: isHi 
        ? 'युवाओं के लिए खेलकूद प्रोत्साहन, रोजगार सहायता, कन्यादान सहयोग और आपदा के समय पीड़ितों की सहायता।' 
        : 'Fostering local sports, youth entrepreneurship, emergency relief, and compassionate welfare outreach across the coal belt.',
      tag: isHi ? 'सामाजिक कार्य' : 'Community'
    }
  ];

  // Key Photo Highlights from Facebook (3-4 core official highlights)
  const photoHighlights = [
    {
      img: `${import.meta.env.BASE_URL}images/real/fb_dhanbad_council_meeting.jpg`,
      title: isHi ? 'नगर निगम महापौर कक्ष में प्रशासनिक समीक्षा बैठक' : 'Administrative Review at Mayor Office',
      subtitle: isHi ? 'अधिकारियों व नागरिकों के साथ विकास योजनाओं व जनसमस्याओं पर मंथन' : 'Chairing high-level civic review with representatives and municipal officers',
      tag: isHi ? 'सुशासन' : 'Governance',
      date: 'Aug 2026',
      pos: 'center 25%'
    },
    {
      img: `${import.meta.env.BASE_URL}images/real/fb_ram_mandir_darshan.jpg`,
      title: isHi ? 'प्रभु श्री राम की पावन छवि भेंट व अभिनंदन' : 'Sacred Ram Mandir Portrait Presentation',
      subtitle: isHi ? 'सिंह मेंशन में श्रद्धालुओं व नागरिकों द्वारा अंगवस्त्र व प्रभु राम की छवि भेंट' : 'Devotees and community members honoring Sanjeev Singh at Singh Mansion',
      tag: isHi ? 'आस्था व सम्मान' : 'Faith & Honor',
      date: 'Oct 2026',
      pos: 'center 8%'
    },
    {
      img: `${import.meta.env.BASE_URL}images/real/fb_hemant_soren_meeting.jpg`,
      title: isHi ? 'माननीय मुख्यमंत्री श्री हेमंत सोरेन जी से आत्मीय भेंट' : 'Meeting with Hon’ble CM Hemant Soren',
      subtitle: isHi ? 'श्रीमती रागिनी सिंह जी के साथ शिष्टाचार भेंट एवं जनहित विषयों पर विमर्श' : 'Consultation alongside Smt. Ragini Singh discussing public welfare',
      tag: isHi ? 'राज्य संवाद' : 'State Dialogue',
      date: 'Sep 2026',
      pos: 'center 10%'
    },
    {
      img: `${import.meta.env.BASE_URL}images/real/fb_dhanbad_office.jpg`,
      title: isHi ? 'धनबाद नगर निगम कार्यालय में जनसंवाद' : 'Civic Dialogue at Dhanbad Municipal Corporation',
      subtitle: isHi ? 'महापौर कक्ष में नागरिकों व जनसमूह का अभिवादन व समस्याओं पर चर्चा' : 'Welcoming citizens with folded hands and reviewing civic amenities',
      tag: isHi ? 'नागरिक संवाद' : 'Civic Engagement',
      date: 'Oct 2026',
      pos: 'center 25%'
    }
  ];

  // Mobile horizontal slider controls for Visual Highlights
  const highlightsScrollRef = useRef<HTMLDivElement>(null);
  const [activeHighlight, setActiveHighlight] = useState(0);

  const scrollHighlights = (direction: 'left' | 'right') => {
    if (!highlightsScrollRef.current) return;
    const cardWidth = highlightsScrollRef.current.clientWidth * 0.85;
    highlightsScrollRef.current.scrollBy({
      left: direction === 'left' ? -cardWidth : cardWidth,
      behavior: 'smooth'
    });
  };

  const handleHighlightsScroll = () => {
    if (!highlightsScrollRef.current) return;
    const { scrollLeft, clientWidth } = highlightsScrollRef.current;
    const index = Math.round(scrollLeft / (clientWidth * 0.85));
    setActiveHighlight(Math.min(Math.max(index, 0), photoHighlights.length - 1));
  };

  const scrollToHighlight = (index: number) => {
    if (!highlightsScrollRef.current) return;
    const cardWidth = highlightsScrollRef.current.clientWidth * 0.85;
    highlightsScrollRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
    setActiveHighlight(index);
  };

  return (
    <div className="animate-in fade-in duration-500 overflow-x-hidden bg-[#fdfbf7]">
      {/* 1. Hero Carousel */}
      <HeroCarousel />

      {/* 2. Official Bulletin Marquee Ticker (Mobile-Optimized & Compact) */}
      <section className="bg-gradient-to-r from-[#ff7e54] via-[#f46b3f] to-[#ff7e54] border-y border-white/20 text-white relative z-20 overflow-hidden shadow-sm">
        <div className="h-[2px] w-full tricolor-stripe" />
        <div className="max-w-[1440px] mx-auto px-2.5 sm:px-4 flex items-center h-9 sm:h-11 md:h-12">
          {/* Ticker Tag */}
          <div className="flex items-center gap-1.5 bg-white text-[#ff7e54] px-2 sm:px-3 py-0.5 sm:py-1 rounded font-headline font-black text-[10px] sm:text-xs uppercase tracking-wider shrink-0 shadow-sm mr-2 sm:mr-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff7e54] animate-pulse" />
            <span className="hidden sm:inline">{isHi ? 'ताज़ा बुलेटिन' : 'OFFICIAL BULLETIN'}</span>
            <span className="sm:hidden">{isHi ? 'बुलेटिन' : 'BULLETIN'}</span>
          </div>

          {/* Marquee Ticker Text */}
          <div className="flex-1 overflow-hidden relative">
            <div className="whitespace-nowrap flex items-center gap-6 sm:gap-10 animate-marquee">
              {[...announcements, ...announcements].map((item, idx) => (
                <div key={idx} className="inline-flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs md:text-sm text-white font-semibold">
                  <span className="text-amber-200 font-black text-[10px] sm:text-xs">★</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <Link 
            to="/press" 
            className="hidden md:flex items-center gap-1.5 text-xs text-white hover:text-amber-200 font-bold uppercase tracking-wider shrink-0 ml-4 transition-colors"
          >
            <span>{isHi ? 'सभी समाचार' : 'View All'}</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* 3. Statesman Editorial Profile */}
      <section className="py-14 sm:py-18 md:py-24 bg-white relative overflow-hidden border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 xl:gap-16 items-center">
            {/* Left: Real High-Res Portrait from Facebook */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <Reveal>
                <div className="relative w-full max-w-[340px] sm:max-w-[390px] lg:max-w-[430px]">
                  {/* Statesman Double Gold-Saffron Frame */}
                  <div className="absolute -inset-3.5 sm:-inset-4.5 border-2 border-amber-500/50 rounded-3xl -z-10 translate-x-3.5 translate-y-3.5 sm:translate-x-4 sm:translate-y-4" />
                  
                  {/* Image Card */}
                  <div className="rounded-3xl overflow-hidden shadow-2xl relative bg-[#091322] border-4 border-white group">
                    <img 
                      src={`${import.meta.env.BASE_URL}images/real/sanjeev_namaste_portrait.jpg`} 
                      alt="Sanjeev Singh Official Portrait" 
                      className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700" 
                      style={{ objectPosition: 'center 15%' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060c18] via-transparent to-transparent opacity-85" />
                    
                    {/* Badge Overlay */}
                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Logo size="sm" showBadge />
                        <span className="text-[11px] font-bold text-amber-300 uppercase tracking-widest flex items-center gap-1">
                          <Landmark size={12} className="inline text-amber-400" />
                          <span>{isHi ? 'झरिया · धनबाद' : 'Jharia · Dhanbad'}</span>
                        </span>
                      </div>
                      <h4 className="text-xl sm:text-2xl font-headline font-black leading-tight">
                        {isHi ? 'संजीव सिंह' : 'Sanjeev Singh'}
                      </h4>
                      <p className="text-xs text-slate-300 font-medium mt-0.5">
                        {isHi ? 'पूर्व विधायक, झरिया विधानसभा | नेता, जनता मजदूर संघ' : 'Former MLA, Jharia | Leader, Janta Mazdoor Sangh'}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right: Narrative Description */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <Reveal delay={50}>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-1 w-10 bg-gradient-to-r from-[#ff7e54] to-[#ff9933] rounded-full" />
                    <span className="text-xs font-black text-[#ff7e54] uppercase tracking-[0.25em]">
                      {t('home.about.tag')}
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-black text-slate-950 leading-tight">
                    {t('home.about.title1')}<span className="text-[#ff7e54]">{t('home.about.title2')}</span>
                  </h2>
                  <p className="text-sm sm:text-base font-bold text-amber-700 uppercase tracking-wider flex items-center gap-2">
                    <Compass size={16} className="text-[#ff7e54]" />
                    <span>{isHi ? 'कोयलांचल के कामगारों और झरिया की जनता के लिए समर्पित जीवन' : 'Dedicated to Coal Belt Workers & the People of Jharia'}</span>
                  </p>
                </div>
              </Reveal>

              <Reveal delay={150}>
                <div className="space-y-4 text-slate-700 leading-relaxed font-body text-sm sm:text-base">
                  <p className="text-base sm:text-lg text-slate-900 font-semibold leading-relaxed font-headline">
                    {t('home.about.p1')}
                  </p>
                  <p>
                    {t('home.about.p2')}
                  </p>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-body">
                    {isHi
                      ? 'दिवंगत सूर्यदेव सिंह जी के पदचिन्हों पर चलते हुए, संजीव सिंह ने दशकों से जनता की आवाज को मजबूती दी है। जनता मजदूर संघ के जरिए खनिकों के अधिकारों की रक्षा और क्षेत्र के बुनियादी विकास के लिए वे निरंतर तत्पर हैं।'
                      : 'Carrying forward the towering legacy of Late Suryadeo Singh, Sanjeev Singh has anchored public solidarity across Dhanbad—advocating for coal miners’ dignity and leading transformative civic infrastructure.'}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={250}>
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link 
                    to="/about" 
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#ff7e54] to-[#e65100] hover:from-[#ff8f00] hover:to-[#ff7e54] text-white font-headline font-bold text-sm uppercase tracking-wider shadow-lg shadow-orange-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <span>{t('home.about.cta')}</span>
                    <ArrowRight size={16} />
                  </Link>

                  <Link 
                    to="/gallery" 
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border-2 border-slate-300 hover:border-[#ff7e54] text-slate-800 hover:text-[#ff7e54] font-headline font-bold text-sm uppercase tracking-wider transition-all"
                  >
                    <span>{isHi ? 'फोटो गैलरी देखें' : 'View Gallery'}</span>
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Stats: Executive Key Metrics (Warm Saffron / Orange & White Cards) */}
      <section className="bg-[#fff7ed] text-slate-900 py-14 sm:py-16 relative border-y border-orange-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { val: '10+', label: isHi ? 'सेवा व संघर्ष के वर्ष' : 'Years of Public Service', icon: Award },
              { val: '50,000+', label: isHi ? 'कामगार व खनिक प्रतिनिधित्व' : 'Workers & Miners Represented', icon: Users },
              { val: '500+', label: isHi ? 'क्षेत्रीय विकास परियोजनाएं' : 'Local Civic Initiatives', icon: CheckCircle2 },
              { val: '24/7', label: isHi ? 'सदा समर्पित जनसेवा' : 'Continuous Public Service', icon: Landmark }
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <Reveal key={i} delay={i * 80}>
                  <div className="h-full bg-white rounded-2xl p-5 sm:p-6 border-2 border-orange-200/90 hover:border-[#ff7e54] transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-lg">
                    <div className="w-11 h-11 rounded-xl bg-orange-100 text-[#ff7e54] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon size={22} />
                    </div>
                    <div className="my-1">
                      <h3 className="font-headline font-black text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight leading-none group-hover:text-[#ff7e54] transition-colors">
                        {stat.val}
                      </h3>
                    </div>
                    <div className="h-1 w-10 bg-[#ff7e54] my-3 group-hover:w-full transition-all duration-500 rounded-full" />
                    <p className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Core Pillars of Public Service */}
      <section className="py-14 sm:py-18 md:py-20 bg-[#fdfbf7] relative overflow-hidden border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
            <Reveal>
              <div className="flex items-center justify-center gap-3">
                <div className="h-1 w-10 bg-[#ff7e54] rounded-full" />
                <span className="text-xs font-black text-[#ff7e54] uppercase tracking-[0.25em]">
                  {isHi ? 'सेवा के मुख्य स्तंभ' : 'Pillars of Leadership'}
                </span>
                <div className="h-1 w-10 bg-[#ff7e54] rounded-full" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-black text-slate-950 leading-tight">
                {isHi ? 'जनसेवा, श्रम सम्मान और सशक्त झरिया' : 'Dignity for Labor, Progress for Dhanbad'}
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="text-sm sm:text-base text-slate-600 font-body">
                {isHi 
                  ? 'जनता के अधिकारों की रक्षा से लेकर क्षेत्र के बुनियादी विकास तक, हमारी प्राथमिकताएं स्पष्ट हैं।'
                  : 'From grassroots labor advocacy to transformative civic infrastructure, our mission is steadfast.'}
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={idx} delay={idx * 100}>
                  <div className="h-full bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-[#ff7e54] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff7e54] to-[#e65100] text-white flex items-center justify-center shadow-md shadow-orange-500/20 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-orange-500/30 transition-all duration-300">
                          <Icon size={24} />
                        </div>
                        <span className="text-[10px] font-bold text-[#ff7e54] uppercase tracking-widest bg-orange-50 border border-orange-200/70 px-2.5 py-1 rounded-md">
                          {pillar.tag}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-headline font-bold text-slate-900 mb-2.5 leading-snug group-hover:text-[#ff7e54] transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Unified Action Banner for all Pillars */}
          <Reveal delay={200}>
            <div className="mt-10 sm:mt-12 text-center">
              <Link
                to="/about"
                className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#ff7e54] to-[#e65100] hover:from-[#ff9933] hover:to-[#ff7e54] text-white font-headline font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-orange-500/25 hover:scale-105 active:scale-95 transition-all"
              >
                <span>{isHi ? 'संजीव सिंह का संपूर्ण विज़न व जीवनी पढ़ें' : 'Read Sanjeev Singh’s Full Leadership Profile & Vision'}</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. Visual Highlights from Facebook */}
      <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-10">
            <div>
              <Reveal>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-1 w-10 bg-[#ff7e54] rounded-full" />
                  <span className="text-xs font-black text-[#ff7e54] uppercase tracking-[0.25em]">
                    {isHi ? 'दृश्य यात्रा' : 'Visual Highlights'}
                  </span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline font-black text-slate-950">
                  {isHi ? 'क्षेत्र भ्रमण व जनसंवाद की झलकियां' : 'Field Initiatives & Public Moments'}
                </h2>
              </Reveal>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-3">
              {/* Mobile Swipe Navigation Controls (Slide Left/Right) */}
              <div className="flex sm:hidden items-center gap-2">
                <button
                  onClick={() => scrollHighlights('left')}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#ff7e54] text-slate-700 hover:text-white flex items-center justify-center transition-colors border border-slate-200 shadow-sm active:scale-95"
                  aria-label="Slide left"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={() => scrollHighlights('right')}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#ff7e54] text-slate-700 hover:text-white flex items-center justify-center transition-colors border border-slate-200 shadow-sm active:scale-95"
                  aria-label="Slide right"
                >
                  <ChevronRight size={16} />
                </button>
              </div>

              <Reveal delay={150}>
                <Link 
                  to="/gallery" 
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#ff7e54] hover:text-[#e65100] uppercase tracking-wider"
                >
                  <span>{isHi ? 'पूरी फोटो गैलरी देखें' : 'View Full Gallery'}</span>
                  <ArrowRight size={16} />
                </Link>
              </Reveal>
            </div>
          </div>

          {/* Cards Container: Touch-Swipeable Horizontal Slider on Mobile (slides left to right), Grid on Tablet & Desktop */}
          <div 
            ref={highlightsScrollRef}
            onScroll={handleHighlightsScroll}
            className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory scroll-smooth no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 pb-3 sm:pb-0"
          >
            {photoHighlights.map((item, idx) => (
              <div 
                key={idx}
                className="w-[82vw] max-w-[310px] sm:w-auto sm:max-w-none shrink-0 snap-center flex flex-col"
              >
                <Link 
                  to="/gallery" 
                  className="group bg-[#fdfbf7] rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:border-[#ff7e54]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      style={{ objectPosition: item.pos || 'center center' }}
                    />
                    <div className="absolute top-2.5 left-2.5 bg-[#070d19]/85 backdrop-blur-md text-amber-300 font-bold text-[10px] px-2 py-0.5 rounded-md uppercase tracking-wider border border-white/10">
                      {item.tag}
                    </div>
                    <div className="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur-md text-white text-[10px] font-medium px-2 py-0.5 rounded-md">
                      {item.date}
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-1.5">
                    <h4 className="font-headline font-bold text-sm sm:text-base text-slate-900 leading-snug group-hover:text-[#ff7e54] transition-colors line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile Navigation Dots (Tap to slide) */}
          <div className="flex sm:hidden items-center justify-center gap-2 mt-3">
            {photoHighlights.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToHighlight(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === activeHighlight 
                    ? 'w-6 h-1.5 bg-[#ff7e54]' 
                    : 'w-1.5 h-1.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to highlight ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Statesman Quote (Warm Saffron Banner) */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#ff7e54] via-[#f46b3f] to-[#ff7e54] text-white relative overflow-hidden shadow-inner">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 relative z-10">
          <Reveal>
            <div className="w-16 h-16 mx-auto rounded-full bg-white/20 border-2 border-white flex items-center justify-center text-white shadow-xl mb-4">
              <Sparkles size={28} />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-headline font-black text-white leading-relaxed italic drop-shadow-sm">
              {isHi
                ? '"धनबाद की असली शक्ति कोयले में नहीं, बल्कि उन लाखों मेहनतकश कामगारों के पसीने में है जो हमारे राष्ट्र को ऊर्जा प्रदान करते हैं। उनकी सुरक्षा, सम्मान और न्याय ही हमारा जीवन संकल्प है।"'
                : '"The true strength of Dhanbad lies not merely in its coal, but in the unyielding resilience of the workers who power our nation. Safeguarding their dignity, rights, and prosperity is our lifetime pledge."'}
            </blockquote>
          </Reveal>
          <Reveal delay={200}>
            <div className="pt-4 flex flex-col items-center">
              <h4 className="text-xl font-headline font-black text-white uppercase tracking-wider">
                {isHi ? 'संजीव सिंह' : 'Sanjeev Singh'}
              </h4>
              <p className="text-xs text-amber-100 font-bold uppercase tracking-widest mt-1 flex items-center gap-1.5">
                <span>{isHi ? 'पूर्व विधायक, झरिया (धनबाद)' : 'Former MLA · Jharia (Dhanbad)'}</span>
                <span>•</span>
                <span className="text-white font-black">{isHi ? 'जनता मजदूर संघ' : 'Janta Mazdoor Sangh'}</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. Official Social Hub (Verified Platforms - NO external iframes) */}
      <section className="py-14 sm:py-18 bg-[#f8f9fa] relative border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <Reveal>
              <span className="text-xs font-black text-[#ff7e54] uppercase tracking-[0.25em]">
                {isHi ? 'डिजिटल संवाद' : 'Official Channels'}
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-3xl sm:text-4xl font-headline font-black text-slate-950">
                {isHi ? 'सोशल मीडिया व आधिकारिक मंच' : 'Connect on Social Media'}
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="text-xs sm:text-sm text-slate-600">
                {isHi 
                  ? 'संजीव सिंह के आधिकारिक सोशल हैंडल्स से सीधे जुड़ें और ताज़ा घोषणाओं की जानकारी पाएं।' 
                  : 'Follow the verified social platforms of Sanjeev Singh for updates and community reports.'}
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Facebook Official Card */}
            <Reveal delay={50}>
              <div className="bg-white rounded-2xl p-6 border-2 border-blue-500/20 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-md">
                        <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-headline font-bold text-slate-900 text-sm">Sanjeev Singh</h4>
                        <p className="text-[10px] text-blue-600 font-semibold">Official Facebook Page</p>
                      </div>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" title="Active Official Page" />
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {isHi
                      ? 'जनसंवाद, मजदूर अधिकार बैठकें व क्षेत्रीय विकास कार्यों के फोटो व वीडियो अपडेट्स।'
                      : 'Real-time updates, field photographs, public grievances, and official announcements directly from Dhanbad.'}
                  </p>
                </div>

                <a 
                  href="https://www.facebook.com/profile.php?id=100069661650642" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2 w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow transition-all"
                >
                  <span>{isHi ? 'फेसबुक पेज खोलें' : 'Open Facebook Page'}</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </Reveal>

            {/* X / Twitter Card */}
            <Reveal delay={100}>
              <div className="bg-white text-slate-900 rounded-2xl p-6 border-2 border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 bg-slate-900 rounded-xl flex items-center justify-center text-white">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-headline font-bold text-slate-900 text-sm">Sanjeev Singh</h4>
                        <p className="text-[10px] text-slate-500 font-semibold">Official X Desk</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {isHi
                      ? 'नीतिगत मुद्दों, कामगारों के अधिकारों और झारखंड के विकास पर त्वरित विचार व आधिकारिक वक्तव्य।'
                      : 'Timely policy statements, worker solidarity notes, and official reactions regarding Jharkhand affairs.'}
                  </p>
                </div>

                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2 w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow transition-all"
                >
                  <span>{isHi ? 'एक्स (ट्विटर) पर जुड़ें' : 'Follow on X'}</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 9. Singh Mansion Landmark & Residence Location */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <Reveal>
                <div className="flex items-center gap-3">
                  <div className="h-1 w-10 bg-[#ff7e54] rounded-full" />
                  <span className="text-xs font-black text-[#ff7e54] uppercase tracking-[0.25em]">
                    {isHi ? 'ऐतिहासिक स्थल व निवास' : 'Historic Landmark & Residence'}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-headline font-black text-slate-950 mt-2">
                  {isHi ? 'सिंह मैंशन, धनबाद' : 'Singh Mansion, Dhanbad'}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed font-body">
                  {isHi
                    ? 'स्व. सूर्यदेव सिंह जी के समय से लेकर आज तक, सिंह मैंशन कोयलांचल में मजदूर आंदोलन, जनसंवाद और सामाजिक न्याय का मुख्य केंद्र रहा है। क्षेत्र के नागरिक व कामगार अपनी समस्याओं के समाधान हेतु यहां निरंतर पहुंचते हैं।'
                    : 'The historic family residence and public center of labor solidarity, civic representation, and grassroots welfare in Dhanbad for generations.'}
                </p>
              </Reveal>

              <Reveal delay={100}>
                {/* Official Singh Mansion Photograph */}
                <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-orange-200/80 aspect-[16/9] group">
                  <img 
                    src={`${import.meta.env.BASE_URL}images/singh-mansion.jpg`} 
                    alt="Singh Mansion, Dhanbad" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between">
                    <p className="text-xs font-bold flex items-center gap-1.5">
                      <Landmark size={14} className="text-amber-400" />
                      <span>{isHi ? 'सिंह मैंशन — धनबाद' : 'Singh Mansion — Dhanbad'}</span>
                    </p>
                    <span className="text-[10px] uppercase font-bold tracking-wider bg-white/20 px-2 py-0.5 rounded backdrop-blur-sm">
                      {isHi ? 'आधिकारिक परिसर' : 'Official Residence'}
                    </span>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={150}>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#070d19] hover:bg-[#ff7e54] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
                >
                  <span>{isHi ? 'विस्तृत राजनीतिक यात्रा व परिचय पढ़ें' : 'Read Full Journey & Biography'}</span>
                  <ArrowRight size={14} />
                </Link>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={100}>
                <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-200 h-[380px] sm:h-[460px] w-full relative group">
                  <iframe
                    title="Singh Mansion Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.06994270119!2d86.46153931139891!3d23.81611177853649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bd007e446ce9%3A0x42fd6c53a777a6cf!2sSINGH%20MANSION!5e0!3m2!1sen!2sin!4v1775368729592!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="absolute top-3 left-3 bg-[#070d19]/90 text-white px-3 py-1.5 rounded-lg border border-amber-400/40 text-xs font-bold flex items-center gap-1.5 shadow pointer-events-none">
                    <Landmark size={14} className="text-amber-400" />
                    <span>{isHi ? 'सिंह मैंशन, धनबाद' : 'Singh Mansion, Dhanbad'}</span>
                  </div>
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
