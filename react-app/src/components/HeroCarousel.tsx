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
    { image: `${import.meta.env.BASE_URL}images/real/fb_9.jpg`, titleKey: 'home.slide1.title', subKey: 'home.slide1.sub', pos: 'center 20%' },
    { image: `${import.meta.env.BASE_URL}images/real/fb_7.jpg`, titleKey: 'home.slide2.title', subKey: 'home.slide2.sub', pos: 'center 35%' },
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
      className="relative w-full h-[600px] md:h-[750px] lg:h-[850px] overflow-hidden bg-[#0a0e1a]"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
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
              style={{ objectPosition: slide.pos || 'center' }}
              src={slide.image} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-transparent to-[#0a0e1a]/20 z-[2]" />
            
            <div className="absolute inset-0 flex items-end pb-24 z-[3]">
              <div className="max-w-[1400px] mx-auto px-4 md:px-6 w-full">
                <div className="max-w-4xl text-left">
                  <div className={`h-[1px] bg-[#ff7e54] mb-8 transition-all duration-1000 delay-300 ${
                    index === currentSlide ? 'w-24 opacity-100' : 'w-0 opacity-0'
                  }`} />
                  <h3 className={`text-3xl md:text-5xl lg:text-6xl font-headline font-black text-white leading-[1.05] mb-8 drop-shadow-2xl transform transition-all duration-1000 delay-500 ease-out tracking-tight ${
                    index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  }`}>
                    {t(slide.titleKey)}
                  </h3>
                  <p className={`text-lg md:text-xl text-white/80 font-body font-light max-w-2xl transform transition-all duration-1000 delay-700 ease-out tracking-wide leading-relaxed ${
                    index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
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
      <div className="absolute bottom-12 left-0 w-full z-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-end">
          <div className="flex gap-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentSlide(index);
                }}
                className="p-2 cursor-pointer relative z-30 group"
                aria-label={`Go to slide ${index + 1}`}
              >
                <div className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-[#ff7e54] scale-125' : 'bg-white/30 group-hover:bg-white/60'
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
