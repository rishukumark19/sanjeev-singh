import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';

const Videos = () => {
  const { t } = useLanguage();

  const videos = [
    { img: `${import.meta.env.BASE_URL}images/location_1.jpg`, titleKey: 'videos.v1', dateKey: 'videos.v1_date' },
    { img: `${import.meta.env.BASE_URL}images/gallery_2.jpg`, titleKey: 'videos.v2', dateKey: 'videos.v2_date' },
    { img: `${import.meta.env.BASE_URL}images/carousel_2.jpg`, titleKey: 'videos.v3', dateKey: 'videos.v3_date' },
  ];

  return (
    <div className="bg-white min-h-screen pt-[72px]">
      {/* Cinematic Header */}
      <section className="bg-[#1a1a2e] py-32 px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#ff7e54]/5 -skew-x-12 translate-x-32" />
        <div className="max-w-[1400px] mx-auto relative z-10 text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-12 bg-[#ff7e54]" />
              <span className="text-[11px] font-black text-[#ff7e54] uppercase tracking-[0.5em]">{t('videos.tag')}</span>
              <div className="h-px w-12 bg-[#ff7e54]" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-5xl md:text-8xl font-headline font-black text-white max-w-5xl mx-auto leading-[1.1] tracking-tight uppercase">
              {t('videos.title')}
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-white/60 text-xl max-w-2xl mx-auto font-body mt-10 leading-relaxed italic">
              {t('videos.sub')}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Video Gallery - Cinematic Archive */}
      <section className="py-32 px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {videos.map((vid, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="group space-y-6">
                <div className="relative aspect-video rounded-[2rem] overflow-hidden editorial-shadow group-hover:shadow-2xl transition-all duration-700">
                  <img 
                    alt={t(vid.titleKey)} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100" 
                    src={vid.img} 
                  />
                  <div className="absolute inset-0 bg-[#1a1a2e]/20 group-hover:bg-transparent transition-colors duration-700" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-700 shadow-2xl">
                      <span className="material-symbols-outlined text-4xl fill-1">play_arrow</span>
                    </div>
                  </div>
                  <div className="absolute top-6 right-6">
                    <div className="px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
                      <p className="text-[10px] font-black text-white uppercase tracking-[0.2em]">{t(vid.dateKey)}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3 px-2">
                  <h4 className="text-2xl font-headline font-black text-[#1a1a2e] uppercase tracking-tight leading-snug group-hover:text-[#ff7e54] transition-colors">
                    {t(vid.titleKey)}
                  </h4>
                  <div className="h-0.5 w-12 bg-[#ff7e54]/20 group-hover:w-full transition-all duration-700" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <div className="mt-32 text-center pt-20 border-t border-[#1a1a2e]/5">
            <Link to="/" className="inline-flex items-center gap-8 group">
              <div className="w-20 h-20 rounded-full saffron-gradient flex items-center justify-center text-white shadow-2xl shadow-orange-500/30 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">home</span>
              </div>
              <div className="text-left space-y-1">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#ff7e54]">Return to Main</span>
                <p className="text-xl font-headline font-black text-[#1a1a2e] uppercase tracking-wider">{t('videos.back')}</p>
              </div>
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default Videos;
