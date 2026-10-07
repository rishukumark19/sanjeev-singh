import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';

const PhotoGallery = () => {
  const { t } = useLanguage();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.setAttribute('data-use-service-core', '');
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-white min-h-screen pt-[72px]">
      {/* Exhibition Header */}
      <section className="bg-[#1a1a2e] py-32 px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#ff7e54]/5 -skew-x-12 translate-x-32" />
        <div className="max-w-[1400px] mx-auto relative z-10 text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-12 bg-[#ff7e54]" />
              <span className="text-[11px] font-black text-[#ff7e54] uppercase tracking-[0.5em]">{t('gallery.tag')}</span>
              <div className="h-px w-12 bg-[#ff7e54]" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-5xl md:text-8xl font-headline font-black text-white max-w-5xl mx-auto leading-[1.1] tracking-tight uppercase">
              {t('gallery.title1')} <br />
              <span className="text-[#ff7e54]">{t('gallery.title2')}</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-white/60 text-xl max-w-2xl mx-auto font-body mt-10 leading-relaxed italic">
              {t('gallery.sub')}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Gallery Exhibition Grid */}
      <section className="py-32 px-8 max-w-[1600px] mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-20 pb-12 border-b border-[#1a1a2e]/5">
            <div className="space-y-2">
              <h2 className="text-4xl font-headline font-black text-[#1a1a2e] uppercase tracking-tight">{t('gallery.feed')}</h2>
              <div className="h-1 w-20 bg-[#ff7e54]" />
            </div>
            <div className="flex items-center gap-4 px-8 py-3 bg-[#f8f9fa] rounded-full border border-[#1a1a2e]/5">
              <span className="w-2 h-2 bg-[#ff7e54] rounded-full animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#1a1a2e]/60">{t('gallery.stream')}</span>
            </div>
          </div>
        </Reveal>

        <div className="max-w-[1400px] mx-auto w-full">
          <Reveal delay={200}>
            {/* Elfsight Facebook Feed Widget Container */}
            <div className="bg-[#f8f9fa] rounded-[2.5rem] editorial-shadow p-8 border border-transparent hover:border-[#ff7e54]/10 transition-all duration-700 w-full min-h-[600px] flex flex-col justify-center">
              
              {/* Note: The user needs to replace 'YOUR_ELFSIGHT_WIDGET_ID' with their actual free widget ID from elfsight.com */}
              <div className="elfsight-app-YOUR_ELFSIGHT_WIDGET_ID" data-elfsight-app-lazy></div>
              
              <div className="mt-8 text-center bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl max-w-3xl mx-auto">
                <span className="material-symbols-outlined text-4xl text-[#ff7e54] mb-4">settings_applications</span>
                <h3 className="text-2xl font-black text-[#1a1a2e] mb-4 uppercase tracking-wide font-headline">Dynamic Grid Setup Required</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-6 font-body">
                  Facebook prevents custom websites from automatically generating grids of recent posts. To enable a beautiful, self-updating grid here, you'll need to use a specialized widget.
                </p>
                <div className="text-left bg-[#f8f9fa] p-6 rounded-2xl mb-6">
                  <ol className="list-decimal pl-5 space-y-3 text-slate-700">
                    <li>Create a free account and widget at <a href="https://elfsight.com/facebook-feed-widget/" target="_blank" rel="noopener noreferrer" className="text-[#ff7e54] font-bold hover:underline">Elfsight Facebook Feed</a>.</li>
                    <li>Connect your Facebook page and select a Grid template.</li>
                    <li>Copy your unique <strong>Widget ID</strong> from their provided code.</li>
                    <li>Open <code>src/pages/PhotoGallery.tsx</code> and replace <code>YOUR_ELFSIGHT_WIDGET_ID</code> on line 77 with your ID.</li>
                  </ol>
                </div>
              </div>

            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="mt-32 text-center pt-20 border-t border-[#1a1a2e]/5">
            <Link to="/" className="inline-flex items-center gap-8 group">
              <div className="w-20 h-20 rounded-full saffron-gradient flex items-center justify-center text-white shadow-2xl shadow-orange-500/30 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">home</span>
              </div>
              <div className="text-left space-y-1">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#ff7e54]">Return to Main</span>
                <p className="text-xl font-headline font-black text-[#1a1a2e] uppercase tracking-wider">{t('gallery.home')}</p>
              </div>
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default PhotoGallery;
