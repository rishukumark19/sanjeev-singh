import { useEffect } from 'react';
import Reveal from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';

const Gallery = () => {
  const { t } = useLanguage();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://widget.rss.app/v1/imageboard.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-white min-h-screen pt-[72px]">
      <section className="bg-[#1a1a2e] py-32 px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#ff7e54]/5 -skew-x-12 translate-x-32" />
        <div className="max-w-[1400px] mx-auto relative z-10 text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-12 bg-[#ff7e54]" />
              <span className="text-[11px] font-black text-[#ff7e54] uppercase tracking-[0.5em]">{t('photos.tag')}</span>
              <div className="h-px w-12 bg-[#ff7e54]" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-5xl md:text-8xl font-headline font-black text-white max-w-5xl mx-auto leading-[1.1] tracking-tight uppercase">
              {t('photos.title1')} <br />
              <span className="text-[#ff7e54]">{t('photos.title2')}</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-32 px-8 max-w-[1600px] mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-20 pb-12 border-b border-[#1a1a2e]/5">
            <div className="space-y-2">
              <h2 className="text-4xl font-headline font-black text-[#1a1a2e] uppercase tracking-tight">{t('photos.feed')}</h2>
              <div className="h-1 w-20 bg-[#ff7e54]" />
            </div>
          </div>
        </Reveal>

        <div className="max-w-[1400px] mx-auto w-full">
          <Reveal delay={200}>
            <div className="bg-[#f8f9fa] rounded-[2.5rem] editorial-shadow p-8 border border-transparent hover:border-[#ff7e54]/10 transition-all duration-700 w-full min-h-[600px] flex flex-col justify-center overflow-hidden">
              <div dangerouslySetInnerHTML={{ __html: '<rssapp-imageboard id="rgfWKAD7q2Ap8Gei"></rssapp-imageboard>' }} />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
