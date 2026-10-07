import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';

const PressReleases = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-white min-h-screen pt-[72px]">
      {/* Editorial Header */}
      <section className="bg-[#1a1a2e] py-32 px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#ff7e54]/5 -skew-x-12 translate-x-32" />
        <div className="max-w-[1400px] mx-auto relative z-10 text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-12 bg-[#ff7e54]" />
              <span className="text-[11px] font-black text-[#ff7e54] uppercase tracking-[0.5em]">{t('press.tag')}</span>
              <div className="h-px w-12 bg-[#ff7e54]" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-5xl md:text-8xl font-headline font-black text-white max-w-5xl mx-auto leading-[1.1] tracking-tight uppercase">
              {t('press.title1')} <br />
              <span className="text-[#ff7e54]">{t('press.title2')}</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-white/60 text-xl max-w-2xl mx-auto font-body mt-10 leading-relaxed italic">
              {t('press.sub')}
            </p>
          </Reveal>
        </div>
      </section>

      {/* News Feed - Digital Archive Layout */}
      <section className="py-32 px-8">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="bg-[#f8f9fa] rounded-[3rem] p-12 md:p-20 editorial-shadow relative overflow-hidden">
              <div className="flex flex-col md:flex-row items-center justify-between mb-16 pb-12 border-b border-[#1a1a2e]/5 gap-12">
                <div className="flex items-center gap-8">
                  <div className="w-20 h-20 bg-[#1877F2] rounded-[1.5rem] flex items-center justify-center text-white shadow-2xl shadow-blue-500/20 transform -rotate-6">
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-headline font-black text-[#1a1a2e] uppercase tracking-tight">{t('press.timeline')}</h3>
                    <p className="text-[10px] font-black text-[#ff7e54] uppercase tracking-[0.4em] mt-2">{t('press.powered')}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-8 py-3 bg-[#1a1a2e] text-white rounded-full">
                  <span className="w-2 h-2 bg-[#ff7e54] rounded-full animate-pulse shadow-[0_0_10px_#ff7e54]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em]">{t('press.stream')}</span>
                </div>
              </div>

              <div className="rounded-[2.5rem] overflow-hidden bg-white min-h-[900px] w-full border border-[#1a1a2e]/5 shadow-inner relative group">
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100069661650642&tabs=timeline&width=800&height=1000&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                  width="100%" height="1000"
                  style={{ border: 'none', overflow: 'hidden' }}
                  scrolling="no" frameBorder="0" allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Official FB Feed"
                  className="w-full h-[1000px] grayscale brightness-105 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                />
                <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/5 rounded-[2.5rem]" />
              </div>

              <Reveal delay={100}>
                <div className="mt-20 text-center">
                  <a
                    href="https://www.facebook.com/profile.php?id=100069661650642"
                    target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-8 group"
                  >
                    <div className="w-20 h-20 rounded-full bg-[#1a1a2e] flex items-center justify-center text-white group-hover:bg-[#ff7e54] transition-colors shadow-2xl">
                      <span className="material-symbols-outlined text-3xl">open_in_new</span>
                    </div>
                    <div className="text-left space-y-1">
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#ff7e54]">Visit Digital Hub</span>
                      <p className="text-xl font-headline font-black text-[#1a1a2e] uppercase tracking-wider">{t('press.archive')}</p>
                    </div>
                  </a>
                </div>
              </Reveal>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-32 text-center">
              <Link to="/" className="inline-flex items-center gap-4 text-[#1a1a2e] group">
                <div className="w-12 h-12 rounded-full border-2 border-[#1a1a2e]/10 flex items-center justify-center group-hover:border-[#ff7e54] group-hover:text-[#ff7e54] transition-all">
                  <span className="material-symbols-outlined">west</span>
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">{t('press.back')}</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default PressReleases;
