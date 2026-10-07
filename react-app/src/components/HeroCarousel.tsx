import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

  const slides = [
    { image: `${import.meta.env.BASE_URL}images/carousel_1.jpg`, titleKey: 'home.slide1.title', subKey: 'home.slide1.sub' },
    { image: `${import.meta.env.BASE_URL}images/carousel_2.jpg`, titleKey: 'home.slide2.title', subKey: 'home.slide2.sub' },
    { image: `${import.meta.env.BASE_URL}images/carousel_3.jpg`, titleKey: 'home.slide3.title', subKey: 'home.slide3.sub' },
    { image: `${import.meta.env.BASE_URL}images/location_3.jpg`, titleKey: 'home.slide4.title', subKey: 'home.slide4.sub' },
    { image: `${import.meta.env.BASE_URL}images/singh-mansion.jpg`, titleKey: 'home.slide5.title', subKey: 'home.slide5.sub' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[600px] md:h-[750px] lg:h-[850px] overflow-hidden bg-[#0a0e1a]">
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
              style={{ objectPosition: index === 1 || index === 2 ? 'center 15%' : 'center' }}
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
        <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-end">
          <div className="flex gap-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentSlide(index);
                }}
                className={`w-3.5 h-3.5 rounded-full transition-all duration-300 cursor-pointer relative z-30 ${
                  index === currentSlide ? 'bg-[#ff7e54] scale-125' : 'bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
