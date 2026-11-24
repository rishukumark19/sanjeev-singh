import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const { lang, t } = useLanguage();

  const minSwipeDistance = 50;

  const slides = [
    { 
      image: `${import.meta.env.BASE_URL}images/real/fb_dhanbad_office.jpg`, 
      titleKey: 'home.slide3.title', 
      subKey: 'home.slide3.sub', 
      tag: lang === 'hi' ? 'नागरिक सेवा व जनसंवाद' : 'Civic Dedication & Service',
      pos: 'center 25%' 
    },
    { 
      image: `${import.meta.env.BASE_URL}images/real/fb_ram_mandir_darshan.jpg`, 
      titleKey: 'home.slide2.title', 
      subKey: 'home.slide2.sub', 
      tag: lang === 'hi' ? 'जनता की अटूट आस्था व विश्वास' : 'Faith & Public Solidarity',
      pos: 'center 20%' 
    },
    { 
      image: `${import.meta.env.BASE_URL}images/real/fb_hemant_soren_meeting.jpg`, 
      titleKey: 'home.slide5.title', 
      subKey: 'home.slide5.sub', 
      tag: lang === 'hi' ? 'राज्य संवाद व जनसमर्पण' : 'State Leadership & Dialogue',
      pos: 'center 25%' 
    },
    { 
      image: `${import.meta.env.BASE_URL}images/real/fb_dhanbad_council_meeting.jpg`, 
      titleKey: 'home.slide4.title', 
      subKey: 'home.slide4.sub', 
      tag: lang === 'hi' ? 'प्रशासनिक समीक्षा व सुशासन' : 'Civic Review & Governance',
      pos: 'center 25%' 
    },
    { 
      image: `${import.meta.env.BASE_URL}images/real/fb_railcoach.jpg`, 
      titleKey: 'home.slide1.title', 
      subKey: 'home.slide1.sub', 
      tag: lang === 'hi' ? 'श्रम शक्ति व सम्मान' : 'Labor Dignity & Rights',
      pos: 'center 25%' 
    },
    { 
      image: `${import.meta.env.BASE_URL}images/real/fb_katras.jpg`, 
      titleKey: 'home.slide4.title', 
      subKey: 'home.slide4.sub', 
      tag: lang === 'hi' ? 'जनता की अटूट आवाज़' : 'Voice of Dhanbad',
      pos: 'center 20%' 
    },
    { 
      image: `${import.meta.env.BASE_URL}images/real/fb_10.jpg`, 
      titleKey: 'home.slide5.title', 
      subKey: 'home.slide5.sub', 
      tag: lang === 'hi' ? 'स्वच्छता योद्धा सम्मान' : 'Civic Dedication',
      pos: 'center 25%' 
    },
  ];

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    } else if (distance < -minSwipeDistance) {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [slides.length, isPaused]);

  return (
    <section 
      className="relative w-full h-[88vh] min-h-[560px] max-h-[860px] overflow-hidden bg-[#fff7ed] select-none"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Slides with Crossfade */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Image with subtle slow zoom when active - Bright natural photos */}
            <img 
              alt={t(slide.titleKey)} 
              className={`w-full h-full object-cover transition-transform duration-[7000ms] ease-out brightness-105 contrast-[1.02] ${
                isActive ? 'scale-105' : 'scale-100'
              }`}
              style={{ objectPosition: slide.pos }}
              src={slide.image} 
            />

            {/* Warm Saffron & Soft Light Vignette (NO dark dimming) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

            {/* Slide Content */}
            <div className="absolute inset-0 flex items-end pb-16 sm:pb-20 md:pb-24 z-20">
              <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 w-full">
                <div className="max-w-3xl text-left">
                  {/* Badge */}
                  <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ff7e54] text-white shadow-md mb-3 sm:mb-4 transition-all duration-700 ${
                    isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-white opacity-90" />
                    <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider">
                      {slide.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h1 className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-headline font-black text-white leading-[1.12] mb-3 sm:mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] tracking-tight transition-all duration-700 delay-150 ${
                    isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}>
                    {t(slide.titleKey)}
                  </h1>

                  {/* Subtitle */}
                  <p className={`text-sm sm:text-base md:text-lg text-white font-body font-medium max-w-2xl leading-relaxed mb-6 sm:mb-8 drop-shadow-[0_1px_5px_rgba(0,0,0,0.6)] transition-all duration-700 delay-300 ${
                    isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}>
                    {t(slide.subKey)}
                  </p>

                  {/* Action CTAs */}
                  <div className={`flex flex-wrap items-center gap-3 sm:gap-4 transition-all duration-700 delay-500 ${
                    isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}>
                    <Link
                      to="/about"
                      className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-gradient-to-r from-[#ff7e54] to-[#e65100] hover:from-[#ff9933] hover:to-[#ff7e54] text-white font-headline font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-orange-500/30 hover:scale-105 active:scale-95 transition-all"
                    >
                      <span>{lang === 'hi' ? 'जीवनी व परिचय' : 'View Biography'}</span>
                      <ArrowRight size={16} />
                    </Link>
                    <Link
                      to="/gallery"
                      className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-white/90 hover:bg-white text-slate-900 font-headline font-black text-xs sm:text-sm uppercase tracking-wider shadow-md transition-all hover:scale-105"
                    >
                      <span>{lang === 'hi' ? 'फोटो गैलरी' : 'Photo Gallery'}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Prev / Next Navigation Arrows (Hidden on small mobile, visible on tablet & desktop) */}
      <div className="hidden sm:flex absolute right-6 md:right-10 bottom-8 z-30 items-center gap-2">
        <button
          onClick={prevSlide}
          className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all hover:scale-105 active:scale-95"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all hover:scale-105 active:scale-95"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Slide Indicators / Dots */}
      <div className="absolute bottom-6 sm:bottom-8 left-4 sm:left-6 md:left-8 z-30 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide 
                ? 'w-7 sm:w-9 h-2 bg-gradient-to-r from-amber-400 to-[#ff7e54]' 
                : 'w-2 h-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
