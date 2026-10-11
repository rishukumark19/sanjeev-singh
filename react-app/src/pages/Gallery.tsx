import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Grid2X2, 
  RectangleVertical, 
  Radio, 
  MapPin, 
  Calendar, 
  ArrowLeft, 
  Sparkles,
  Maximize2
} from 'lucide-react';
import Reveal from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';

interface GalleryItem {
  id: string;
  image: string;
  titleEn: string;
  titleHi: string;
  category: 'all' | 'outreach' | 'welfare' | 'mansion' | 'leadership';
  categoryLabelEn: string;
  categoryLabelHi: string;
  dateEn: string;
  dateHi: string;
  locationEn: string;
  locationHi: string;
  descEn: string;
  descHi: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    image: `${import.meta.env.BASE_URL}images/carousel_1.jpg`,
    titleEn: 'Mass Citizen Assembly in Jharia',
    titleHi: 'झरिया में विशाल जनसमूह संवाद',
    category: 'outreach',
    categoryLabelEn: 'Public Outreach',
    categoryLabelHi: 'जनसंवाद',
    dateEn: 'Public Assembly',
    dateHi: 'जनसंवाद यात्रा',
    locationEn: 'Jharia Constituency, Dhanbad',
    locationHi: 'झरिया विधानसभा, धनबाद',
    descEn: 'Addressing thousands of local residents, coal workers, and community members on regional priorities, employment, and safety.',
    descHi: 'स्थानीय नागरिकों, कोयला श्रमिकों और क्षेत्रवासियों से सीधा संवाद कर रोजगार, सुरक्षा व जनसमस्याओं के समाधान की रूपरेखा रखी।'
  },
  {
    id: '2',
    image: `${import.meta.env.BASE_URL}images/carousel_2.jpg`,
    titleEn: 'Field Inspection of Rural Roads',
    titleHi: 'ग्रामीण सड़कों का स्थलीय निरीक्षण',
    category: 'welfare',
    categoryLabelEn: 'Development',
    categoryLabelHi: 'विकास कार्य',
    dateEn: 'Infrastructure Mission',
    dateHi: 'बुनियादी ढांचा',
    locationEn: 'Dhanbad Rural Sector',
    locationHi: 'धनबाद ग्रामीण क्षेत्र',
    descEn: 'On-site technical review of all-weather paved road connectivity connecting remote colliery villages to main state highways.',
    descHi: 'दूरदराज के कोलियरी गांवों को मुख्य राजमार्गों से जोड़ने वाली पक्की सड़कों का गुणवत्ता एवं प्रगति निरीक्षण।'
  },
  {
    id: '3',
    image: `${import.meta.env.BASE_URL}images/carousel_3.jpg`,
    titleEn: 'Worker Welfare & Solidarity Rally',
    titleHi: 'श्रमिक अधिकार एवं कल्याण महासम्मेलन',
    category: 'outreach',
    categoryLabelEn: 'Worker Welfare',
    categoryLabelHi: 'श्रमिक कल्याण',
    dateEn: 'Labor Movement',
    dateHi: 'मजदूर अधिकार',
    locationEn: 'Colliery Belt, Dhanbad',
    locationHi: 'कोयलांचल, धनबाद',
    descEn: 'Standing united with BCCL mineworkers through Janta Mazdoor Sangh to advocate for workplace safety and fair compensation.',
    descHi: 'जनता मजदूर संघ के माध्यम से खनन कर्मियों के सम्मान, स्वास्थ्य सुरक्षा और उचित अधिकारों के लिए निरंतर संघर्ष।'
  },
  {
    id: '4',
    image: `${import.meta.env.BASE_URL}images/singh-mansion.jpg`,
    titleEn: 'Historic Singh Mansion Secretariat',
    titleHi: 'ऐतिहासिक सिंह मेंशन सचिवालय',
    category: 'mansion',
    categoryLabelEn: 'Singh Mansion',
    categoryLabelHi: 'सिंह मेंशन',
    dateEn: 'Decades of Trust',
    dateHi: 'लोकसेवा की विरासत',
    locationEn: 'Dhanbad, Jharkhand',
    locationHi: 'धनबाद, झारखंड',
    descEn: 'The generational epicenter of grassroots politics and public grievance redressal where thousands arrive daily for support.',
    descHi: 'दशकों से कोयलांचल की जनसेवा और श्रमिक आंदोलन का मुख्य केंद्र, जहां प्रतिदिन सैकड़ों नागरिक अपनी समस्याओं के समाधान हेतु पहुंचते हैं।'
  },
  {
    id: '5',
    image: `${import.meta.env.BASE_URL}images/sanjeev-portrait.jpg`,
    titleEn: 'Sanjeev Singh Official Portrait',
    titleHi: 'संजीव सिंह - जननायक परिचय',
    category: 'leadership',
    categoryLabelEn: 'Leadership',
    categoryLabelHi: 'नेतृत्व',
    dateEn: 'Public Representative',
    dateHi: 'पूर्व विधायक',
    locationEn: 'Dhanbad, Jharkhand',
    locationHi: 'धनबाद, झारखंड',
    descEn: 'Dedicated political leader and former MLA of Jharia, committed to transparent public service and worker welfare.',
    descHi: 'झरिया के पूर्व विधायक एवं समर्पित जननेता, जिनकी राजनीति का मूल उद्देश्य क्षेत्र का सर्वांगीण विकास है।'
  },
  {
    id: '6',
    image: `${import.meta.env.BASE_URL}images/location_3.jpg`,
    titleEn: 'Civic Grievance Redressal Hearing',
    titleHi: 'प्रत्यक्ष नागरिक जनसुनवाई सत्र',
    category: 'outreach',
    categoryLabelEn: 'Public Outreach',
    categoryLabelHi: 'जनसंवाद',
    dateEn: 'Open Secretariat',
    dateHi: 'खुली जनसुनवाई',
    locationEn: 'Jharia Town Center',
    locationHi: 'झरिया नगर केंद्र',
    descEn: 'Interactive listening sessions with market vendors, neighborhood elders, and women self-help groups.',
    descHi: 'व्यापारियों, महिलाओं और स्थानीय युवाओं के साथ खुली बातचीत कर नागरिक सुविधाओं की स्थिति का आकलन।'
  },
  {
    id: '7',
    image: `${import.meta.env.BASE_URL}images/location_1.jpg`,
    titleEn: 'Bridge & Road Connectivity Dedication',
    titleHi: 'पुल एवं संपर्क पथ का लोकार्पण',
    category: 'welfare',
    categoryLabelEn: 'Development',
    categoryLabelHi: 'विकास कार्य',
    dateEn: 'Public Dedication',
    dateHi: 'लोकार्पण समारोह',
    locationEn: 'Suburban Jharia',
    locationHi: 'झरिया उपनगरीय क्षेत्र',
    descEn: 'Inauguration of vital connectivity arteries reducing commute times for schoolchildren and daily wage laborers.',
    descHi: 'स्कूली बच्चों और दैनिक मजदूरों के आवागमन को सुगम बनाने वाली महत्वपूर्ण सड़क परियोजनाओं का लोकार्पण।'
  },
  {
    id: '8',
    image: `${import.meta.env.BASE_URL}images/location_2.jpg`,
    titleEn: 'Clean Water & Sanitation Drive',
    titleHi: 'पेयजल एवं स्वच्छता अभियान',
    category: 'welfare',
    categoryLabelEn: 'Development',
    categoryLabelHi: 'विकास कार्य',
    dateEn: 'Civic Mission',
    dateHi: 'नागरिक सेवा',
    locationEn: 'Dhanbad Urban Wards',
    locationHi: 'धनबाद शहरी वार्ड',
    descEn: 'Installation of high-capacity clean drinking water storage facilities in densely populated miner residential colonies.',
    descHi: 'घनी आबादी वाली श्रमिक कॉलोनियों में शुद्ध पेयजल टंकी और जलापूर्ति नेटवर्क का विस्तार।'
  },
  {
    id: '9',
    image: `${import.meta.env.BASE_URL}images/gallery_1.jpg`,
    titleEn: 'Community Elders & Youth Conference',
    titleHi: 'वरिष्ठ नागरिक एवं युवा सम्मेलन',
    category: 'outreach',
    categoryLabelEn: 'Public Outreach',
    categoryLabelHi: 'जनसंवाद',
    dateEn: 'Community Dialogue',
    dateHi: 'सामुदायिक संवाद',
    locationEn: 'Dhanbad District',
    locationHi: 'धनबाद जिला',
    descEn: 'Consulting community elders on long-standing local demands while mentoring regional youth leaders.',
    descHi: 'क्षेत्र के प्रबुद्ध नागरिकों और युवाओं के साथ विचार-विमर्श कर नए जनहितकारी कार्यक्रमों की रूपरेखा तैयार की।'
  },
  {
    id: '10',
    image: `${import.meta.env.BASE_URL}images/gallery_2.jpg`,
    titleEn: 'Janta Mazdoor Sangh Annual Convention',
    titleHi: 'जनता मजदूर संघ वार्षिक महाधिवेशन',
    category: 'welfare',
    categoryLabelEn: 'Worker Welfare',
    categoryLabelHi: 'श्रमिक कल्याण',
    dateEn: 'Union Convention',
    dateHi: 'वार्षिक अधिवेशन',
    locationEn: 'Colliery Headquarters',
    locationHi: 'कोलियरी मुख्यालय',
    descEn: 'Presiding over union resolutions demanding enhanced healthcare benefits and pension guarantees for miners.',
    descHi: 'कोयला खनिकों के लिए व्यापक स्वास्थ्य बीमा और पेंशन सुरक्षा की मांग को लेकर प्रस्ताव पारित किए गए।'
  },
  {
    id: '11',
    image: `${import.meta.env.BASE_URL}images/gallery_3.jpg`,
    titleEn: 'Youth Sports & Athletic Kit Distribution',
    titleHi: 'युवा खेल प्रोत्साहन एवं किट वितरण',
    category: 'outreach',
    categoryLabelEn: 'Public Outreach',
    categoryLabelHi: 'जनसंवाद',
    dateEn: 'Youth Initiative',
    dateHi: 'युवा प्रोत्साहन',
    locationEn: 'Dhanbad Sports Arena',
    locationHi: 'धनबाद खेल मैदान',
    descEn: 'Fostering athletic excellence and encouraging district sports talent through sports kits and facilities.',
    descHi: 'धनबाद के प्रतिभाशाली युवाओं को खेल उपकरण वितरित कर राज्य और राष्ट्रीय स्तर पर आगे बढ़ने हेतु प्रेरित किया।'
  },
  {
    id: '12',
    image: `${import.meta.env.BASE_URL}images/sanjeev-hero.jpg`,
    titleEn: 'Walking Alongside the People of Jharia',
    titleHi: 'जनता के साथ, जनता के बीच',
    category: 'leadership',
    categoryLabelEn: 'Leadership',
    categoryLabelHi: 'नेतृत्व',
    dateEn: 'Field Walking Tour',
    dateHi: 'पदयात्रा',
    locationEn: 'Jharia Main Market',
    locationHi: 'झरिया मुख्य बाजार',
    descEn: 'Everyday foot marches through residential areas to personally observe civic conditions and listen to families.',
    descHi: 'मोहल्लों और गलियों में पैदल भ्रमण कर जनता की रोजमर्रा की समस्याओं का प्रत्यक्ष जायजा लेते हुए।'
  }
];

const Gallery = () => {
  const { lang, t } = useLanguage();
  const isHi = lang === 'hi';

  const [activeCategory, setActiveCategory] = useState<'all' | 'outreach' | 'welfare' | 'mansion' | 'leadership' | 'live'>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'cards'>('grid');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Load RSS imageboard script for the live feed tab
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://widget.rss.app/v1/imageboard.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const filteredItems = activeCategory === 'all' || activeCategory === 'live'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = '';
  }, []);

  const nextImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! + 1) % filteredItems.length);
    }
  }, [lightboxIndex, filteredItems.length]);

  const prevImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
    }
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, nextImage, prevImage, closeLightbox]);

  return (
    <div className="bg-[#f8f9fa] min-h-screen pt-[72px] pb-20 font-body text-[#1a1a2e]">
      
      {/* Top Breadcrumb Header for Phone & Desktop */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 pt-4 sm:pt-6 pb-2">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-headline font-bold text-gray-500 hover:text-[#ff7e54] uppercase tracking-wider transition-colors"
        >
          <ArrowLeft size={16} />
          {isHi ? 'मुख्य पृष्ठ पर वापस जाएं' : 'Back to Home'}
        </Link>
      </div>

      {/* Modern Compact Executive Header (Optimized for Mobile) */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 mb-6 sm:mb-10">
        <div className="bg-[#1a1a2e] text-white py-10 sm:py-16 md:py-20 px-5 sm:px-8 md:px-12 relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#ff7e54]/10 -skew-x-12 translate-x-16 pointer-events-none" />
          <div className="relative z-10 max-w-4xl text-center mx-auto space-y-3 sm:space-y-4">
            <Reveal>
              <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#ff7e54] text-[10px] sm:text-xs font-headline font-black uppercase tracking-widest">
                <Sparkles size={13} className="shrink-0" />
                <span>{t('photos.tag')}</span>
              </div>
            </Reveal>
            <Reveal delay={50}>
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-headline font-black leading-[1.1] uppercase tracking-tight text-white">
                {t('photos.title1')}{' '}
                <span className="text-[#ff7e54]">{t('photos.title2')}</span>
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-white/70 text-xs sm:text-base md:text-lg max-w-2xl mx-auto font-body leading-relaxed">
                {isHi
                  ? 'जनसेवा, विकास योजनाओं, और श्रमिक आंदोलनों के ऐतिहासिक पलों का प्रामाणिक छायाचित्र संग्रह।'
                  : 'A curated visual archive capturing grassroots public outreach, infrastructure milestones, and community leadership.'}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mobile-First Controls Bar (Filters & View Mode) */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 mb-6 sm:mb-10">
        <div className="bg-white p-3 sm:p-4 rounded-2xl sm:rounded-3xl border border-gray-150 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-3">
          
          {/* Scrollable Filter Pills on Mobile */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-1 w-full md:w-auto -mx-1 px-1">
            {[
              { id: 'all', labelEn: 'All Photos', labelHi: 'सभी तस्वीरें', count: galleryItems.length },
              { id: 'outreach', labelEn: 'Public Visits', labelHi: 'जनसंवाद', count: 5 },
              { id: 'welfare', labelEn: 'Development', labelHi: 'विकास कार्य', count: 4 },
              { id: 'mansion', labelEn: 'Singh Mansion', labelHi: 'सिंह मेंशन', count: 1 },
              { id: 'leadership', labelEn: 'Leadership', labelHi: 'नेतृत्व', count: 2 },
              { id: 'live', labelEn: 'Live Social Stream', labelHi: 'लाइव फीड', isLive: true }
            ].map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id as any)}
                  className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-headline font-bold uppercase tracking-wider shrink-0 transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#ff7e54] text-white shadow-md shadow-orange-500/25 scale-[1.02]'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {tab.isLive && (
                    <span className="relative flex h-2 w-2 mr-0.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                    </span>
                  )}
                  <span>{isHi ? tab.labelHi : tab.labelEn}</span>
                  {tab.count !== undefined && (
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isActive ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* View Toggle on Mobile & Tablet */}
          <div className="flex items-center justify-between md:justify-end gap-3 pt-2 md:pt-0 border-t md:border-t-0 border-gray-100">
            <span className="text-xs text-gray-400 font-medium md:hidden">
              {isHi ? `${filteredItems.length} तस्वीरें` : `${filteredItems.length} moments`}
            </span>
            <div className="flex items-center bg-gray-100 p-1 rounded-xl gap-1 shrink-0 ml-auto md:ml-0">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg text-xs flex items-center gap-1 font-bold transition-colors ${
                  viewMode === 'grid' ? 'bg-white text-[#ff7e54] shadow-sm' : 'text-gray-500 hover:text-gray-900'
                }`}
                title="Grid View (2-Col Mobile)"
              >
                <Grid2X2 size={16} />
                <span className="hidden sm:inline text-xs">{isHi ? 'ग्रिड' : 'Grid'}</span>
              </button>
              <button
                onClick={() => setViewMode('cards')}
                className={`p-1.5 rounded-lg text-xs flex items-center gap-1 font-bold transition-colors ${
                  viewMode === 'cards' ? 'bg-white text-[#ff7e54] shadow-sm' : 'text-gray-500 hover:text-gray-900'
                }`}
                title="Cards View (Story Layout)"
              >
                <RectangleVertical size={16} />
                <span className="hidden sm:inline text-xs">{isHi ? 'कार्ड्स' : 'Cards'}</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Main Gallery Display */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* If Live Feed Tab is active */}
        {activeCategory === 'live' ? (
          <div className="space-y-6">
            <div className="bg-white p-4 sm:p-6 rounded-[2rem] border border-gray-150 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center shrink-0 border border-green-200">
                  <Radio size={20} className="animate-pulse" />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-base text-[#1a1a2e]">
                    {isHi ? 'फेसबुक लाइव सोशल न्यूज़रूम' : 'Live Social Media Stream'}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {isHi ? 'फेसबुक पेज से सीधे प्रसारित रियल-टाइम तस्वीरें और पोस्ट' : 'Real-time updates streamed directly from official public channels'}
                  </p>
                </div>
              </div>
              <a
                href="https://www.facebook.com/profile.php?id=100069661650642"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-[#1877F2] text-white text-xs font-headline font-bold uppercase tracking-wider hover:opacity-90 transition-opacity shrink-0"
              >
                {isHi ? 'फेसबुक पर खोलें' : 'Open Facebook Page'}
              </a>
            </div>

            <div className="bg-white rounded-[2rem] editorial-shadow p-3 sm:p-6 border border-gray-150 overflow-hidden min-h-[500px]">
              <div dangerouslySetInnerHTML={{ __html: '<rssapp-imageboard id="rgfWKAD7q2Ap8Gei"></rssapp-imageboard>' }} />
            </div>
          </div>
        ) : (
          /* Curated High-Speed Mobile & Desktop Grid */
          <div>
            {/* View Mode: 2-Column Responsive Grid (Default on Phone) */}
            {viewMode === 'grid' && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                {filteredItems.map((item, index) => (
                  <Reveal key={item.id} delay={(index % 4) * 40}>
                    <div
                      onClick={() => openLightbox(index)}
                      className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-150/80 shadow-sm hover:shadow-xl hover:border-[#ff7e54]/30 transition-all duration-300 cursor-pointer flex flex-col"
                    >
                      {/* Photo Thumbnail */}
                      <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                        <img
                          src={item.image}
                          alt={isHi ? item.titleHi : item.titleEn}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                        
                        {/* Gradient Scrim for Readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                        {/* Category Pill Tag */}
                        <div className="absolute top-2.5 left-2.5 z-10">
                          <span className="px-2 py-0.5 rounded-md bg-black/50 backdrop-blur-md text-[9px] sm:text-[10px] font-headline font-black text-white/90 uppercase tracking-wider border border-white/10">
                            {isHi ? item.categoryLabelHi : item.categoryLabelEn}
                          </span>
                        </div>

                        {/* Tap to Expand Button Overlay */}
                        <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white/80 group-hover:bg-[#ff7e54] group-hover:text-white transition-colors">
                          <Maximize2 size={13} />
                        </div>

                        {/* Bottom Overlay Title on Phone */}
                        <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 text-white z-10 space-y-1">
                          <h4 className="font-headline font-bold text-xs sm:text-sm line-clamp-2 leading-snug drop-shadow-sm group-hover:text-[#ff7e54] transition-colors">
                            {isHi ? item.titleHi : item.titleEn}
                          </h4>
                          <div className="flex items-center gap-1 text-[9px] sm:text-[10px] text-white/70 line-clamp-1">
                            <MapPin size={10} className="shrink-0 text-[#ff7e54]" />
                            <span className="truncate">{isHi ? item.locationHi : item.locationEn}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            )}

            {/* View Mode: Story Cards (1-Column on Phone, 2-Col on Desktop) */}
            {viewMode === 'cards' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {filteredItems.map((item, index) => (
                  <Reveal key={item.id} delay={(index % 2) * 50}>
                    <div
                      onClick={() => openLightbox(index)}
                      className="bg-white rounded-3xl overflow-hidden border border-gray-150 shadow-sm hover:shadow-xl hover:border-[#ff7e54]/30 transition-all duration-300 cursor-pointer group flex flex-col"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                        <img
                          src={item.image}
                          alt={isHi ? item.titleHi : item.titleEn}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-headline font-bold text-white uppercase tracking-wider">
                            {isHi ? item.categoryLabelHi : item.categoryLabelEn}
                          </span>
                        </div>
                        <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-[#ff7e54] text-white text-[10px] font-headline font-black uppercase tracking-wider flex items-center gap-1 shadow-md">
                          <Maximize2 size={12} />
                          <span>{isHi ? 'बड़ा देखें' : 'View Full'}</span>
                        </div>
                      </div>

                      <div className="p-5 sm:p-6 space-y-3 flex-grow flex flex-col justify-between">
                        <div className="space-y-2">
                          <h3 className="font-headline font-extrabold text-base sm:text-xl text-[#1a1a2e] group-hover:text-[#ff7e54] transition-colors leading-snug">
                            {isHi ? item.titleHi : item.titleEn}
                          </h3>
                          <p className="text-gray-600 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                            {isHi ? item.descHi : item.descEn}
                          </p>
                        </div>
                        <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <MapPin size={13} className="text-[#ff7e54]" />
                            <span>{isHi ? item.locationHi : item.locationEn}</span>
                          </span>
                          <span className="flex items-center gap-1 text-[11px] font-medium">
                            <Calendar size={13} className="text-gray-400" />
                            <span>{isHi ? item.dateHi : item.dateEn}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        )}

      </section>

      {/* Live Feed Teaser at Bottom of Gallery (When in Photo Mode) */}
      {activeCategory !== 'live' && (
        <section className="max-w-[1400px] mx-auto px-4 md:px-8 mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-[#1a1a2e] to-[#252542] text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-white/5">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-[10px] font-black text-[#ff7e54] uppercase tracking-widest">
                {isHi ? 'ताज़ा अपडेट्स' : 'Social Newsroom'}
              </span>
              <h3 className="text-lg sm:text-2xl font-headline font-bold">
                {isHi ? 'क्या आप लाइव फेसबुक पोस्ट देखना चाहते हैं?' : 'Want to view live Facebook updates & press statements?'}
              </h3>
              <p className="text-xs sm:text-sm text-white/60">
                {isHi ? 'हमारी सोशल मीडिया स्ट्रीम पर सीधे स्विच करें।' : 'Switch to our real-time social timeline feed with a single tap.'}
              </p>
            </div>
            <button
              onClick={() => {
                setActiveCategory('live');
                window.scrollTo({ top: 300, behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-xl bg-[#ff7e54] text-white text-xs sm:text-sm font-headline font-bold uppercase tracking-wider hover:bg-[#e56233] transition-colors shrink-0 shadow-lg shadow-orange-500/25 flex items-center gap-2"
            >
              <Radio size={16} className="animate-pulse" />
              <span>{isHi ? 'लाइव सोशल स्ट्रीम देखें' : 'View Live Social Feed'}</span>
            </button>
          </div>
        </section>
      )}

      {/* Interactive Mobile & Desktop Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6 animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          {/* Top Control Bar */}
          <div 
            className="flex items-center justify-between text-white pb-3 border-b border-white/10 shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="px-2.5 py-1 rounded-md bg-[#ff7e54] text-white text-[10px] font-headline font-black uppercase tracking-wider">
                {isHi ? filteredItems[lightboxIndex].categoryLabelHi : filteredItems[lightboxIndex].categoryLabelEn}
              </span>
              <span className="text-xs text-white/70 font-mono">
                {lightboxIndex + 1} / {filteredItems.length}
              </span>
            </div>

            <button
              onClick={closeLightbox}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              title="Close (Esc)"
            >
              <X size={20} />
            </button>
          </div>

          {/* Central Main Image with Navigation Buttons */}
          <div 
            className="relative flex-grow flex items-center justify-center my-3 max-h-[75vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Button */}
            <button
              onClick={prevImage}
              className="absolute left-1 sm:left-4 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#ff7e54] text-white flex items-center justify-center backdrop-blur-md transition-colors"
              title="Previous Photo"
            >
              <ChevronLeft size={24} />
            </button>

            {/* High-Res Image */}
            <img
              src={filteredItems[lightboxIndex].image}
              alt={isHi ? filteredItems[lightboxIndex].titleHi : filteredItems[lightboxIndex].titleEn}
              className="max-h-full max-w-full object-contain rounded-xl sm:rounded-2xl shadow-2xl transition-all select-none"
            />

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-1 sm:right-4 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#ff7e54] text-white flex items-center justify-center backdrop-blur-md transition-colors"
              title="Next Photo"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Bottom Caption & Location Box */}
          <div 
            className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 text-white max-w-3xl mx-auto w-full space-y-1.5 shrink-0 border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-headline font-bold text-sm sm:text-lg text-white">
              {isHi ? filteredItems[lightboxIndex].titleHi : filteredItems[lightboxIndex].titleEn}
            </h3>
            <p className="text-white/80 text-xs sm:text-sm line-clamp-2">
              {isHi ? filteredItems[lightboxIndex].descHi : filteredItems[lightboxIndex].descEn}
            </p>
            <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[11px] text-white/60">
              <span className="flex items-center gap-1.5">
                <MapPin size={12} className="text-[#ff7e54]" />
                <span>{isHi ? filteredItems[lightboxIndex].locationHi : filteredItems[lightboxIndex].locationEn}</span>
              </span>
              <span className="hidden sm:inline">
                {isHi ? 'कीबोर्ड: ← / → तीर कुंजियों से बदलें' : 'Use ← / → arrow keys to navigate'}
              </span>
            </div>
          </div>

        </div>
      )}

    </div>
  );
};

export default Gallery;
