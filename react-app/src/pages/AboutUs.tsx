import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  ArrowRight,
  Landmark,
  Compass
} from 'lucide-react';
import Reveal from '../components/Reveal';
import Logo from '../components/Logo';
import { useLanguage } from '../context/LanguageContext';

const AboutUs = () => {
  const { lang, t } = useLanguage();
  const isHi = lang === 'hi';

  const milestones = [
    {
      year: '1986',
      title: isHi ? 'जन्म एवं पारिवारिक पृष्ठभूमि' : 'Birth & Family Heritage',
      desc: isHi 
        ? '5 फरवरी 1986 को सिंदरी (धनबाद) में महान मजदूर नेता, पूर्व विधायक स्व. सूर्यदेव सिंह जी एवं पूर्व विधायक श्रीमती कुंती सिंह जी के परिवार में जन्म।'
        : 'Born on 5 February 1986 in Sindri, Dhanbad into the distinguished family of legendary trade union leader Late Suryadeo Singh and Smt. Kunti Singh (former MLA).'
    },
    {
      year: '2000 - 2005',
      title: isHi ? 'शिक्षा एवं जमीनी जनसेवा की दीक्षा' : 'Education & Grassroots Solidarity',
      desc: isHi 
        ? 'जमालपुर बलिया से माध्यमिक एवं देहरादून पब्लिक स्कूल से उच्चतर माध्यमिक शिक्षा प्राप्त कर बचपन से ही कोयलांचल के कामगारों की समस्याओं को निकटता से समझा।'
        : 'Completed secondary schooling at Jamalpur Ballia and higher secondary from Dehradun Public School, gaining firsthand understanding of mining labor.'
    },
    {
      year: '2008 - 2013',
      title: isHi ? 'जनता मजदूर संघ का नेतृत्व' : 'Janta Mazdoor Sangh Leadership',
      desc: isHi 
        ? 'भारत कोकिंग कोल लिमिटेड (BCCL) के कामगारों के अधिकारों, सुरक्षित कार्यदशाओं व वेतन समानता हेतु जनता मजदूर संघ के माध्यम से सशक्त आंदोलन।'
        : 'Leading Janta Mazdoor Sangh across BCCL collieries, securing fair wage pacts, safety compliances, and medical entitlements for thousands of miners.'
    },
    {
      year: '2014',
      title: isHi ? 'झरिया से ऐतिहासिक विधानसभा विजय' : 'Landmark Victory in Jharkhand Assembly',
      desc: isHi 
        ? 'झरिया विधानसभा सीट से 33,692 मतों के ऐतिहासिक अंतर से प्रचंड विजय हासिल कर जनता की सशक्त आवाज बने।'
        : 'Elected to the Jharkhand Legislative Assembly from the Jharia constituency with a resounding historic margin of 33,692 votes.'
    },
    {
      year: '2014 - 2019',
      title: isHi ? 'सड़क, जल व नागरिक अधोसंरचना क्रांति' : 'Legislative Tenacity & Infrastructure',
      desc: isHi 
        ? 'झरिया के सुदूर ग्रामीण अंचलों तक पक्की सड़कों का संजाल, स्वच्छ पेयजल पाइपलाइन का विस्तार और स्कूलों व स्वास्थ्य केंद्रों का आधुनिकीकरण।'
        : 'Transforming Jharia through concrete rural connectivity, municipal water pipeline upgrades, and civic modernization during his legislative tenure.'
    },
    {
      year: 'वर्तमान',
      title: isHi ? 'अविरल जनसेवा व सीधा जनसंवाद' : 'Continuous Public Service & Redressal',
      desc: isHi 
        ? 'धनबाद में प्रतिदिन सैकड़ों आम नागरिकों, कामगारों व युवाओं की समस्याओं का सीधा समाधान और कोयलांचल के अधिकारों की सतत रक्षा।'
        : 'Steadfast open-door grievance redressal, resolving citizen challenges, and defending coal belt prosperity across Dhanbad.'
    }
  ];

  return (
    <div className="bg-[#fdfbf7] min-h-screen pt-[74px] md:pt-[82px] pb-16 sm:pb-24">
      {/* Hero Header Section (Warm #ff7e54 Saffron & White) */}
      <section className="bg-gradient-to-r from-[#ff7e54] via-[#f46b3f] to-[#ff7e54] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 relative overflow-hidden shadow-md">
        <div className="max-w-[1440px] mx-auto text-center relative z-10 space-y-4">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 border border-white text-white backdrop-blur-md">
              <Logo size="sm" showBadge />
              <span className="text-[11px] font-black uppercase tracking-widest">
                {isHi ? 'व्यक्तित्व एवं जनसेवा का सफर' : 'Leadership, Roots & Dedicated Public Service'}
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-headline font-black text-white tracking-tight leading-tight drop-shadow-sm">
              {isHi ? 'संजीव सिंह : एक परिचय' : 'Sanjeev Singh : An Introduction'}
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p className="text-sm sm:text-base md:text-lg text-amber-100 font-bold max-w-3xl mx-auto leading-relaxed flex items-center justify-center gap-2 flex-wrap drop-shadow-sm">
              <span>{isHi ? 'पूर्व विधायक · झरिया विधानसभा' : 'Former MLA · Jharia Constituency'}</span>
              <span>•</span>
              <span>{isHi ? 'केंद्रीय नेता · जनता मजदूर संघ' : 'Trade Union Leader · Janta Mazdoor Sangh'}</span>
              <span>•</span>
              <span className="text-white font-black flex items-center gap-1">
                <Landmark size={14} className="text-white" />
                <span>{isHi ? 'झरिया · धनबाद' : 'Jharia · Dhanbad'}</span>
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 mt-10 sm:mt-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Portrait & Quick Profile Card (Sticky on Desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
            <Reveal delay={100}>
              <div className="relative group max-w-md mx-auto lg:max-w-none">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10 border-4 border-white bg-[#091322]">
                  <img 
                    alt="Sanjeev Singh Official Portrait" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                    style={{ objectPosition: 'center 15%' }}
                    src={`${import.meta.env.BASE_URL}images/real/sanjeev_portrait_hd.jpg`} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060c18] via-transparent to-transparent opacity-85" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <Logo size="sm" showBadge />
                      <span className="text-xs font-bold uppercase tracking-widest text-amber-300 flex items-center gap-1">
                        <Landmark size={12} className="text-amber-400" />
                        <span>{isHi ? 'झरिया, धनबाद' : 'Jharia, Dhanbad'}</span>
                      </span>
                    </div>
                    <h3 className="text-2xl font-headline font-black">
                      {isHi ? 'संजीव सिंह' : 'Sanjeev Singh'}
                    </h3>
                    <p className="text-xs text-slate-300 font-medium">
                      {isHi ? 'पूर्व विधायक · झरिया | मजदूर नेता' : 'Former MLA · Jharia | Trade Union Leader'}
                    </p>
                  </div>
                </div>

                <div className="absolute -inset-3 border-2 border-amber-400/40 rounded-[2rem] -z-10 translate-x-3 translate-y-3" />
              </div>
            </Reveal>

            {/* Quick Facts Card */}
            <Reveal delay={200}>
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 space-y-4 shadow-sm max-w-md mx-auto lg:max-w-none">
                <h4 className="text-sm font-headline font-black text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-3 flex items-center gap-2">
                  <ShieldCheck size={18} className="text-[#ff7e54]" />
                  <span>{isHi ? 'संक्षिप्त परिचय व विवरण' : 'Profile & Quick Facts'}</span>
                </h4>
                
                <div className="space-y-3 text-xs sm:text-sm font-body">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1 border-b border-slate-100 pb-2.5">
                    <span className="text-slate-500 font-semibold">{t('about.dob_label')}</span>
                    <span className="text-slate-900 font-bold sm:text-right">{t('about.dob_val')}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1 border-b border-slate-100 pb-2.5">
                    <span className="text-slate-500 font-semibold">{t('about.parents_label')}</span>
                    <span className="text-slate-900 font-bold sm:text-right">{t('about.parents_val')}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1 border-b border-slate-100 pb-2.5">
                    <span className="text-slate-500 font-semibold">{t('about.residence_label')}</span>
                    <span className="text-slate-900 font-bold sm:text-right flex items-center gap-1 sm:justify-end">
                      <Landmark size={12} className="text-[#ff7e54]" />
                      <span>{t('about.residence_val')}</span>
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1 border-b border-slate-100 pb-2.5">
                    <span className="text-slate-500 font-semibold">{t('about.constituency_label')}</span>
                    <span className="text-slate-900 font-bold sm:text-right">{t('about.constituency_val')}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                    <span className="text-slate-500 font-semibold">{t('about.union_label')}</span>
                    <span className="text-[#ff7e54] font-bold sm:text-right">{t('about.union_val')}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/80 text-center">
                    <p className="text-[11px] font-bold text-amber-900 uppercase tracking-wider">
                      {isHi ? 'जनता मजदूर संघ — जनसेवा व श्रमिक सम्मान' : 'Janta Mazdoor Sangh — Labor Rights & Trust'}
                    </p>
                    <p className="text-[10px] text-amber-700 mt-0.5">
                      {isHi ? 'धनबाद, झारखंड · झरिया विधानसभा' : 'Dhanbad, Jharkhand · Jharia Constituency'}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Full Narrative Biography & Timeline */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Section 01: Origins and Early Life */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/90 shadow-sm space-y-5">
              <Reveal>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-black text-white bg-gradient-to-r from-[#ff7e54] to-[#e65100] px-3 py-1 rounded-full">01</span>
                    <h2 className="text-2xl sm:text-3xl font-headline font-black text-slate-900 uppercase tracking-wide">
                      {t('about.origins.title')}
                    </h2>
                  </div>
                  <div className="h-1 w-20 bg-[#ff7e54] rounded-full" />
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="space-y-4 text-slate-700 font-body text-sm sm:text-base leading-relaxed">
                  <p>{t('about.origins.p1')}</p>
                  <p>{t('about.origins.p2')}</p>
                </div>
              </Reveal>
            </div>

            {/* Quote Callout */}
            <Reveal delay={150}>
              <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-[#070d19] to-[#0d1728] text-white border-l-4 border-[#ff7e54] shadow-xl">
                <p className="text-base sm:text-lg md:text-xl font-headline font-semibold italic leading-relaxed text-amber-200">
                  {t('about.quote')}
                </p>
                <p className="text-xs text-slate-300 font-bold uppercase tracking-wider mt-3 flex items-center gap-2">
                  <span>— Sanjeev Singh, Former MLA (Jharia)</span>
                  <span>•</span>
                  <span className="text-amber-400">Jharia, Dhanbad</span>
                </p>
              </div>
            </Reveal>

            {/* Section 02: Political Career & Union Leadership */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/90 shadow-sm space-y-5">
              <Reveal>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-black text-white bg-gradient-to-r from-[#ff7e54] to-[#e65100] px-3 py-1 rounded-full">02</span>
                    <h2 className="text-2xl sm:text-3xl font-headline font-black text-slate-900 uppercase tracking-wide">
                      {t('about.career.title')}
                    </h2>
                  </div>
                  <div className="h-1 w-20 bg-[#ff7e54] rounded-full" />
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="space-y-4 text-slate-700 font-body text-sm sm:text-base leading-relaxed">
                  <p>{t('about.career.p1')}</p>
                  <p>{t('about.career.p2')}</p>
                  <p>{t('about.career.p3')}</p>
                </div>
              </Reveal>

              {/* Photo Showcase from Facebook */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="rounded-xl overflow-hidden aspect-video border border-slate-200 shadow-sm">
                  <img 
                    src={`${import.meta.env.BASE_URL}images/real/fb_townhall.jpg`} 
                    alt="Workers Convention" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="rounded-xl overflow-hidden aspect-video border border-slate-200 shadow-sm">
                  <img 
                    src={`${import.meta.env.BASE_URL}images/real/fb_railcoach.jpg`} 
                    alt="Civic Project Inauguration" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
            </div>

            {/* Section 03: Interactive Timeline */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/90 shadow-sm space-y-6">
              <Reveal>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-black text-white bg-gradient-to-r from-[#ff7e54] to-[#e65100] px-3 py-1 rounded-full">03</span>
                    <h2 className="text-2xl sm:text-3xl font-headline font-black text-slate-900 uppercase tracking-wide">
                      {isHi ? 'महत्वपूर्ण पड़ाव एवं यात्रा' : 'Key Milestones & Journey'}
                    </h2>
                  </div>
                  <div className="h-1 w-20 bg-[#ff7e54] rounded-full" />
                </div>
              </Reveal>

              <div className="space-y-6 pt-2 border-l-2 border-amber-400/50 ml-3 sm:ml-4 pl-4 sm:pl-6">
                {milestones.map((m, idx) => (
                  <Reveal key={idx} delay={idx * 60}>
                    <div className="relative group">
                      {/* Timeline dot */}
                      <span className="absolute -left-[25px] sm:-left-[33px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-[#ff7e54] group-hover:scale-125 transition-transform" />
                      
                      <div className="space-y-1">
                        <span className="text-xs font-black text-[#ff7e54] tracking-wider uppercase bg-orange-50 px-2.5 py-0.5 rounded border border-orange-200 inline-block">
                          {m.year}
                        </span>
                        <h4 className="text-base sm:text-lg font-headline font-bold text-slate-900 leading-snug">
                          {m.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 font-body leading-relaxed">
                          {m.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Section 04: Continuing the Legacy of Public Service */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/90 shadow-sm space-y-5">
              <Reveal>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-black text-white bg-gradient-to-r from-[#ff7e54] to-[#e65100] px-3 py-1 rounded-full">04</span>
                    <h2 className="text-2xl sm:text-3xl font-headline font-black text-slate-900 uppercase tracking-wide">
                      {t('about.legacy.title')}
                    </h2>
                  </div>
                  <div className="h-1 w-20 bg-[#ff7e54] rounded-full" />
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="space-y-4 text-slate-700 font-body text-sm sm:text-base leading-relaxed">
                  <p>{t('about.legacy.p1')}</p>
                  <p>{t('about.legacy.p2')}</p>
                </div>
              </Reveal>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#ff7e54] to-[#e65100] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow hover:scale-105 transition-all"
                >
                  <span>{isHi ? 'फोटो गैलरी देखें' : 'Explore Photo Gallery'}</span>
                  <ArrowRight size={14} />
                </Link>
                <Link
                  to="/press"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 hover:border-slate-800 text-slate-900 font-bold text-xs sm:text-sm uppercase tracking-wider transition-all"
                >
                  <Compass size={14} className="text-[#ff7e54]" />
                  <span>{isHi ? 'समाचार व विज्ञप्तियां' : 'Press & Newsroom'}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
