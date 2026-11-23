import { useState } from 'react';
import { Play, X, MapPin, Video as VideoIcon } from 'lucide-react';
import Reveal from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';

export interface VideoItem {
  id: string;
  img: string;
  titleEn: string;
  titleHi: string;
  descEn: string;
  descHi: string;
  date: string;
  locationEn: string;
  locationHi: string;
  youtubeId?: string;
}

const videosList: VideoItem[] = [
  {
    id: 'vid-1',
    img: `${import.meta.env.BASE_URL}images/real/fb_katras.jpg`,
    titleEn: 'Public Address and Mass Outreach across Katras Coal Belt',
    titleHi: 'कतरास व कोयलांचल क्षेत्र में विशाल जनसभा को ओजस्वी संबोधन',
    descEn: 'Addressing thousands of workers and families, highlighting the generational commitment to Dhanbad’s infrastructure and fair miner treatment.',
    descHi: 'कोयलांचल की जनता को संबोधित करते हुए झरिया के सर्वांगीण विकास एवं कामगारों के सम्मान व सुरक्षा की प्रतिबद्धता दोहराई।',
    date: 'Sep 2026',
    locationEn: 'Katras, Dhanbad',
    locationHi: 'कतरास, धनबाद'
  },
  {
    id: 'vid-2',
    img: `${import.meta.env.BASE_URL}images/real/fb_townhall.jpg`,
    titleEn: 'Keynote Speech at Janta Mazdoor Sangh Delegates Convention',
    titleHi: 'जनता मजदूर संघ महाधिवेशन में खनिकों के अधिकारों पर मुख्य वक्तव्य',
    descEn: 'Articulating BCCL worker wage parity, occupational safety nets, and social health security policies.',
    descHi: 'बीसीसीएल कर्मियों के वेतन समझौते, चिकित्सा सुविधाओं व खान सुरक्षा मानकों को लेकर संघ प्रतिनिधियों से सीधा संवाद।',
    date: 'Oct 2026',
    locationEn: 'Town Hall, Dhanbad',
    locationHi: 'टाउन हॉल, धनबाद'
  },
  {
    id: 'vid-3',
    img: `${import.meta.env.BASE_URL}images/real/fb_railcoach.jpg`,
    titleEn: 'Inauguration Address at Rail Coach Civic Amenity Project',
    titleHi: 'रेल कोच नागरिक परियोजना के उद्घाटन समारोह में संबोधन',
    descEn: 'Highlighting public utilities, city modernization, and progressive tourism amenities for Dhanbad citizens.',
    descHi: 'धनबाद नगर के आधुनिकीकरण एवं जनसुविधाओं के विस्तार पर विस्तृत विचार रखे।',
    date: 'Sep 2026',
    locationEn: 'Dhanbad Station',
    locationHi: 'धनबाद स्टेशन'
  },
  {
    id: 'vid-4',
    img: `${import.meta.env.BASE_URL}images/real/fb_10.jpg`,
    titleEn: 'Speech Honoring Municipal Sanitation Staff as Frontline Heroes',
    titleHi: 'स्वच्छता कर्मियों के सम्मान समारोह में प्रेरक संबोधन',
    descEn: 'Expressing gratitude to the tireless municipal sanitation workers who ensure Dhanbad remains healthy and pristine.',
    descHi: 'धनबाद को स्वच्छ व सुंदर बनाने वाले हमारे स्वच्छता योद्धाओं के प्रति कृतज्ञता ज्ञापन।',
    date: 'Oct 2026',
    locationEn: 'Municipal Corp, Dhanbad',
    locationHi: 'नगर निगम, धनबाद'
  },
  {
    id: 'vid-5',
    img: `${import.meta.env.BASE_URL}images/real/fb_7.jpg`,
    titleEn: 'Administrative Review Keynote at District DISHA Meeting',
    titleHi: 'धनबाद समाहरणालय में दिशा (DISHA) बैठक में विचार',
    descEn: 'Reviewing pipeline infrastructure, central grant utilization, and accelerated public grievance redressal.',
    descHi: 'केंद्रीय योजनाओं के पारदर्शी क्रियान्वयन एवं लंबित विकास कार्यों में तेजी लाने पर बल दिया।',
    date: 'Oct 2026',
    locationEn: 'Collectorate, Dhanbad',
    locationHi: 'समाहरणालय, धनबाद'
  },
  {
    id: 'vid-6',
    img: `${import.meta.env.BASE_URL}images/real/fb_foodadda.jpg`,
    titleEn: 'Motivational Address on Youth Self-Employment & Growth',
    titleHi: 'युवा स्वावलंबन व स्वरोजगार पर युवाओं को मार्गदर्शन',
    descEn: 'Guiding local youth to take up entrepreneurial ventures, technical skills, and sports development in the district.',
    descHi: 'युवाओं को आत्मनिर्भर बनने और स्वरोजगार के नए अवसर सृजित करने हेतु प्रेरित किया।',
    date: 'Sep 2026',
    locationEn: 'Dhanbad City',
    locationHi: 'धनबाद नगर'
  }
];

const Videos = () => {
  const { lang } = useLanguage();
  const isHi = lang === 'hi';
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  return (
    <div className="bg-[#f8f9fa] min-h-screen pt-[74px] md:pt-[82px] pb-16 sm:pb-24">
      {/* Header (Warm #ff7e54 Saffron & White) */}
      <section className="bg-gradient-to-r from-[#ff7e54] via-[#f46b3f] to-[#ff7e54] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 relative overflow-hidden shadow-md">
        <div className="max-w-[1440px] mx-auto text-center relative z-10 space-y-4">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 border border-white text-white backdrop-blur-md">
              <VideoIcon size={14} className="text-white" />
              <span className="text-[11px] font-black uppercase tracking-widest">
                {isHi ? 'वीडियो व भाषण संग्रह' : 'Video Insights & Speeches'}
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-headline font-black text-white tracking-tight leading-tight drop-shadow-sm">
              {isHi ? 'जनसंवाद व महत्वपूर्ण संबोधन' : 'Speeches & Media Highlights'}
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p className="text-sm sm:text-base md:text-lg text-amber-100 font-bold max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
              {isHi
                ? 'संजीव सिंह के प्रमुख भाषण, जनसभाएं एवं मीडिया संवाद की वीडियो झलकियां।'
                : 'Key addresses, public townhalls, and legislative statements delivered by Sanjeev Singh.'}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Grid */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 mt-10 sm:mt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {videosList.map((vid, idx) => (
            <Reveal key={vid.id} delay={idx * 60}>
              <div 
                onClick={() => setActiveVideo(vid)}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col h-full"
              >
                {/* Thumbnail with Play Badge */}
                <div className="relative aspect-video overflow-hidden bg-slate-900">
                  <img
                    src={vid.img}
                    alt={isHi ? vid.titleHi : vid.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                  />
                  <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/10 transition-colors" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#ff7e54] to-[#e56233] text-white flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                      <Play size={22} className="ml-1 fill-white" />
                    </div>
                  </div>

                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    {vid.date}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-[#ff7e54] font-bold mb-1">
                      <MapPin size={12} />
                      <span>{isHi ? vid.locationHi : vid.locationEn}</span>
                    </div>

                    <h3 className="font-headline font-bold text-base text-slate-900 leading-snug group-hover:text-[#ff7e54] transition-colors">
                      {isHi ? vid.titleHi : vid.titleEn}
                    </h3>

                    <p className="text-xs text-slate-600 font-body line-clamp-2 mt-1.5 leading-relaxed">
                      {isHi ? vid.descHi : vid.descEn}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#ff7e54]">
                    <span>{isHi ? 'वीडियो विवरण देखें' : 'Watch Highlight'}</span>
                    <Play size={12} className="fill-current" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200 relative"
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center transition-colors"
              aria-label="Close video"
            >
              <X size={18} />
            </button>

            <div className="relative aspect-video bg-black flex items-center justify-center">
              <img
                src={activeVideo.img}
                alt={isHi ? activeVideo.titleHi : activeVideo.titleEn}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#ff7e54] text-white flex items-center justify-center shadow-xl">
                  <Play size={28} className="ml-1 fill-white" />
                </div>
                <p className="text-xs uppercase tracking-widest text-amber-300 font-bold">
                  {isHi ? 'आधिकारिक वीडियो आर्काइव' : 'Official Speech Highlight'}
                </p>
                <p className="text-sm font-semibold max-w-md">
                  {isHi ? activeVideo.titleHi : activeVideo.titleEn}
                </p>
              </div>
            </div>

            <div className="p-6 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase">
                <span>{activeVideo.date}</span>
                <span>•</span>
                <span>{isHi ? activeVideo.locationHi : activeVideo.locationEn}</span>
              </div>
              <h2 className="text-xl font-headline font-bold text-slate-900">
                {isHi ? activeVideo.titleHi : activeVideo.titleEn}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-body leading-relaxed">
                {isHi ? activeVideo.descHi : activeVideo.descEn}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Videos;
