import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';

const PhotoGallery = () => {
  const { t } = useLanguage();

  const photoPostUrls = [
    "https://www.facebook.com/photo.php?fbid=1257038389961538",
    "https://www.facebook.com/photo.php?fbid=1257038249961552",
    "https://www.facebook.com/photo.php?fbid=1257038213294889",
    "https://www.facebook.com/photo.php?fbid=1256773663321344",
    "https://www.facebook.com/photo.php?fbid=1256773423321368",
    "https://www.facebook.com/photo.php?fbid=1256773376654706",
    "https://www.facebook.com/photo.php?fbid=1256773359988041",
    "https://www.facebook.com/photo.php?fbid=1256771819988195",
    "https://www.facebook.com/photo.php?fbid=1256771786654865",
    "https://www.facebook.com/photo.php?fbid=1256771643321546",
    "https://www.facebook.com/photo.php?fbid=1256771449988232",
    "https://www.facebook.com/photo.php?fbid=1256437840021593",
    "https://www.facebook.com/photo.php?fbid=1256437673354943",
    "https://www.facebook.com/photo.php?fbid=1256437610021616",
    "https://www.facebook.com/photo.php?fbid=1256437363354974"
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {photoPostUrls.map((url, index) => (
            <Reveal key={index} delay={Math.min(index * 100, 400)}>
              <div className="group space-y-8">
                <div className="bg-[#f8f9fa] rounded-[2.5rem] overflow-hidden editorial-shadow p-6 transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl border border-transparent hover:border-[#ff7e54]/10">
                  <div className="w-full min-h-[500px] relative rounded-[2rem] overflow-hidden bg-white group-hover:brightness-110 transition-all duration-700">
                    <iframe
                      src={`https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(url)}&show_text=false&width=auto`}
                      width="100%" height="100%"
                      style={{ border: 'none', overflow: 'hidden', minHeight: '500px' }}
                      scrolling="no" frameBorder="0" allowFullScreen={true}
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      title={`Photo Post ${index}`}
                      className="w-full h-[500px] grayscale brightness-105 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <div className="h-px flex-grow bg-[#ff7e54]/20" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#ff7e54]">Archival Media</span>
                  <div className="h-px flex-grow bg-[#ff7e54]/20" />
                </div>
              </div>
            </Reveal>
          ))}
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
