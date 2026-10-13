import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const { t } = useLanguage();

  const minSwipeDistance = 50;

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
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }
    if (isRightSwipe) {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }
  };

  const slides = [
    { image: `${import.meta.env.BASE_URL}images/real/fb_railcoach.jpg`, titleKey: 'home.slide1.title', subKey: 'home.slide1.sub', pos: 'center 25%' },
    { image: `${import.meta.env.BASE_URL}images/real/fb_katras.jpg`, titleKey: 'home.slide2.title', subKey: 'home.slide2.sub', pos: 'center 20%' },
    { image: `${import.meta.env.BASE_URL}images/real/fb_10.jpg`, titleKey: 'home.slide3.title', subKey: 'home.slide3.sub', pos: 'center 25%' },
    { image: `${import.meta.env.BASE_URL}images/real/fb_4.jpg`, titleKey: 'home.slide4.title', subKey: 'home.slide4.sub', pos: 'center 20%' },
    { image: `${import.meta.env.BASE_URL}images/real/fb_8.jpg`, titleKey: 'home.slide5.title', subKey: 'home.slide5.sub', pos: 'center 25%' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section 
      className="relative w-full h-[100dvh] md:h-[calc(100dvh-74px)] lg:h-[calc(100dvh-82px)] min-h-[480px] overflow-hidden bg-[#0a0e1a]"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Left Edge Light Soft Blur */}
      <div 
        className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-20 md:w-36 lg:w-52 z-[3] backdrop-blur-[6px] bg-gradient-to-r from-white/15 via-white/5 to-transparent"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
          maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)'
        }}
      />

      {/* Right Edge Light Soft Blur */}
      <div 
        className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-20 md:w-36 lg:w-52 z-[3] backdrop-blur-[6px] bg-gradient-to-l from-white/15 via-white/5 to-transparent"
        style={{
          WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
          maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)'
        }}
      />

      <div className="absolute inset-0 flex transition-transform duration-[1000ms] ease-in-out" style={{ transform: `translateX(-${(currentSlide * 100) / slides.length}%)`, width: `${slides.length * 100}%` }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative h-full w-full flex-shrink-0"
            style={{ width: `${100 / slides.length}%` }}
          >
            <div className="absolute inset-0 bg-[#0a0e1a]/40 z-[1]" />
            <img 
              alt={t(slide.titleKey)} 
              className="w-full h-full object-cover" 
              style={{ objectPosition: slide.pos || 'center 25%' }}
              src={slide.image} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-transparent to-[#0a0e1a]/20 z-[2]" />
            
            <div className="absolute inset-0 flex items-end pb-12 sm:pb-14 md:pb-16 lg:pb-16 xl:pb-20 z-[4]">
              <div className="max-w-[1400px] mx-auto px-4 md:px-8 w-full">
                <div className="max-w-5xl text-left">
                  <div className={`h-[2px] bg-[#ff7e54] mb-3 md:mb-4 transition-all duration-1000 delay-300 ${
                    index === currentSlide ? 'w-16 md:w-20 opacity-100' : 'w-0 opacity-0'
                  }`} />
                  <h3 className={`text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-headline font-black text-white leading-[1.1] mb-2 sm:mb-3 md:mb-4 drop-shadow-2xl transform transition-all duration-1000 delay-500 ease-out tracking-tight ${
                    index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}>
                    {t(slide.titleKey)}
                  </h3>
                  <p className={`text-sm sm:text-base md:text-lg text-white/85 font-body font-normal max-w-3xl transform transition-all duration-1000 delay-700 ease-out tracking-wide leading-relaxed line-clamp-2 sm:line-clamp-none ${
                    index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}>
                    {t(slide.subKey)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel UI */}
      <div className="absolute bottom-6 md:bottom-8 left-0 w-full z-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-end">
          <div className="flex gap-2.5 sm:gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentSlide(index);
                }}
                className="p-1.5 cursor-pointer relative z-30 group"
                aria-label={`Go to slide ${index + 1}`}
              >
                <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-[#ff7e54] scale-125' : 'bg-white/40 group-hover:bg-white/70'
                }`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
