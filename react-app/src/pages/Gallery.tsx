import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Grid2X2, 
  RectangleVertical, 
  ExternalLink,
  Calendar, 
  ArrowLeft, 
  Sparkles,
  Maximize2,
  RefreshCw
} from 'lucide-react';
import Reveal from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';

export interface FacebookPhotoItem {
  id: string;
  url: string;
  title: string;
  content_text: string;
  image: string;
  date_published: string;
  author: string;
}

// Initial fallback posts from official Facebook feed for instantaneous render
const initialFacebookPhotos: FacebookPhotoItem[] = [
  {
    id: 'fb-1',
    url: 'https://m.facebook.com/permalink.php?id=100069661650642&story_fbid=pfbid0pV3AEQk5sZ8d4UbNKBmdi4N37KfKgpMx8bzochTajsJQnwKXo7rLdJrky5rhftKil',
    title: 'झारखंड के माननीय मुख्यमंत्री श्री हेमंत सोरेन जी की पूज्य माताजी एवं दिशोम गुरु स्व: शिबू सोरेन जी की धर्मपत्नी स्व: रूपी सोरेन जी के निधन के पश्चात आज उनके पैतृक गांव नेमरा पहुँचकर भावभीनी श्रद्धांजलि अर्पित की।',
    content_text: 'झारखंड के माननीय मुख्यमंत्री श्री हेमंत सोरेन जी की पूज्य माताजी एवं दिशोम गुरु स्व: शिबू सोरेन जी की धर्मपत्नी स्व: रूपी सोरेन जी के निधन के पश्चात आज उनके पैतृक गांव नेमरा पहुँचकर उन्हें भावभीनी श्रद्धांजलि अर्पित किया। इस दुःखद घड़ी में माननीय मुख्यमंत्री श्री हेमंत सोरेन जी से मुलाकात कर अपनी गहरी शोक संवेदनाएँ व्यक्त कीं। ईश्वर से प्रार्थना है कि दिवंगत पुण्यात्मा को अपने श्रीचरणों में स्थान दें तथा शोकाकुल परिवार को इस अपार दुःख को सहन करने की शक्ति प्रदान करें। विनम्र श्रद्धांजलि। ॐ शांति।',
    image: `${import.meta.env.BASE_URL}images/real/fb_1.jpg`,
    date_published: '2026-10-10T16:52:54.000Z',
    author: 'Sanjeev Singh'
  },
  {
    id: 'fb-2',
    url: 'https://m.facebook.com/permalink.php?id=100069661650642&story_fbid=pfbid02VfNXNrEYnETn32pgyswMmpQ76ZYS5JFy5s75gPeynFt14WPB5UKCvGekzzp8iFSpl',
    title: 'चिरकुंडा निवासी वरिष्ठ भाजपा नेता सह जनता श्रमिक संघ के केंद्रीय सचिव श्री भूपेंद्र सिंह जी के पूज्य पिता स्वर्गीय वीरेंद्र सिंह जी के ब्रह्मभोज में श्रद्धांजलि।',
    content_text: 'चिरकुंडा निवासी वरिष्ठ भाजपा नेता सह जनता श्रमिक संघ के केंद्रीय सचिव श्री भूपेंद्र सिंह जी के पूज्य पिता एवं झारखंड आंदोलन के सक्रिय योद्धा, वरिष्ठ मजदूर नेता स्वर्गीय वीरेंद्र सिंह जी के ब्रह्मभोज में उनके आवास पर उपस्थित होकर श्रद्धांजलि अर्पित की तथा शोकाकुल परिजनों से मिलकर अपनी संवेदनाएँ व्यक्त कीं। झारखंड आंदोलन एवं मजदूर हितों के लिए उनका योगदान सदैव स्मरणीय रहेगा। ॐ शांति।',
    image: `${import.meta.env.BASE_URL}images/real/fb_2.jpg`,
    date_published: '2026-10-09T15:16:53.000Z',
    author: 'Sanjeev Singh'
  },
  {
    id: 'fb-3',
    url: 'https://m.facebook.com/permalink.php?id=100069661650642&story_fbid=pfbid0k6aTRiw16WuyAM6VHGJySqMSeFwmfP7nE2q5RfivBcMGgnPP5BjCcmDNxUfz6wLil',
    title: 'लोक जनशक्ति पार्टी के पूर्व केंद्रीय मंत्री, स्व: रामविलास पासवान जी की 6वीं पुण्यतिथि पर सादर नमन एवं भावभीनी श्रद्धांजलि।',
    content_text: 'लोक जनशक्ति पार्टी (रामविलास) के पूर्व केंद्रीय मंत्री, स्व: रामविलास पासवान जी की 6वीं पुण्यतिथि पर उन्हें सादर नमन एवं भावभीनी श्रद्धांजलि। स्व: रामविलास पासवान जी ने अपना पूरा जीवन सामाजिक न्याय, गरीबों, शोषितों एवं वंचितों के अधिकारों और उनके उत्थान के लिए समर्पित किया। जनसेवा और समाज के कमजोर वर्गों के प्रति उनकी प्रतिबद्धता सदैव प्रेरणादायी रहेगी। विनम्र श्रद्धांजलि।',
    image: `${import.meta.env.BASE_URL}images/real/fb_3.jpg`,
    date_published: '2026-10-08T14:46:55.000Z',
    author: 'Sanjeev Singh'
  },
  {
    id: 'fb-4',
    url: 'https://m.facebook.com/permalink.php?id=100069661650642&story_fbid=pfbid02bAV1w3a1UX8yZSUyPJ8cEMpeLMKAHNK75bor7AKmM5WLkzeWA1qtd131pSeUDapul',
    title: 'Singh Mansion स्थित आवास पर धनबाद की देवतुल्य जनता से आत्मीय मुलाकात।',
    content_text: 'Singh Mansion स्थित आवास पर धनबाद की देवतुल्य जनता से आत्मीय मुलाकात। जनता का स्नेह और विश्वास ही हमारी सबसे बड़ी शक्ति है। प्रतिदिन की भांति क्षेत्रवासियों की समस्याएं सुनीं और उनके समाधान हेतु संबंधित अधिकारियों को निर्देशित किया।',
    image: `${import.meta.env.BASE_URL}images/real/fb_4.jpg`,
    date_published: '2026-10-08T09:31:59.000Z',
    author: 'Sanjeev Singh'
  },
  {
    id: 'fb-5',
    url: 'https://m.facebook.com/permalink.php?id=100069661650642&story_fbid=pfbid0yFxPo8tYZQys9ykbBfEXDuPK1vHZ7je2obzEhDw8WggfTtXfErhavzujLVG8z1scl',
    title: 'वरिष्ठ पत्रकार श्री अमित कुमार सिन्हा जी के सड़क दुर्घटना में घायल होने पर क्लिनिक पहुंचकर स्वास्थ्य की जानकारी ली।',
    content_text: 'खबर मंत्र के वरिष्ठ पत्रकार श्री अमित कुमार सिन्हा जी के सड़क दुर्घटना में घायल होने की सूचना मिलने पर राज क्लिनिक पहुंचकर उनके स्वास्थ्य की जानकारी ली। वे शीघ्र स्वस्थ होकर पूर्ण रूप से स्वस्थ जीवन की ओर लौटें। मेरी शुभकामनाएं एवं प्रार्थनाएं उनके साथ हैं।',
    image: `${import.meta.env.BASE_URL}images/real/fb_5.jpg`,
    date_published: '2026-10-08T03:22:14.000Z',
    author: 'Sanjeev Singh'
  },
  {
    id: 'fb-6',
    url: 'https://m.facebook.com/permalink.php?id=100069661650642&story_fbid=pfbid0AGWR685rKsx4SV8CczGfHppuUxLiuxqUKc4DZHj7FFWnhu9QmpFjsNXsMPJpRa7ml',
    title: 'Singh Mansion स्थित आवास पर धनबाद वासियों से भेंटवार्ता एवं जनसमस्या समाधान।',
    content_text: 'Singh Mansion स्थित आवास पर धनबाद की देवतुल्य जनता से आत्मीय मुलाकात। जनता का स्नेह और विश्वास ही हमारी सबसे बड़ी शक्ति है। कोयलांचल के विभिन्न अंचलों से आए प्रतिनिधिमंडलों से संवाद कर विकास कार्यों की समीक्षा की।',
    image: `${import.meta.env.BASE_URL}images/real/fb_6.jpg`,
    date_published: '2026-10-07T16:39:14.000Z',
    author: 'Sanjeev Singh'
  },
  {
    id: 'fb-7',
    url: 'https://m.facebook.com/permalink.php?id=100069661650642&story_fbid=pfbid02fNZsdY86hsScFMg3qinrpPcwKwrahi5Gq81Mph5hmAcKrM3CEyMTepwgDMUjbVpil',
    title: 'धनबाद समाहरणालय में आयोजित DISHA (जिला विकास समन्वय एवं निगरानी समिति) की समीक्षा बैठक।',
    content_text: 'धनबाद समाहरणालय में आयोजित DISHA (जिला विकास समन्वय एवं निगरानी समिति) की बैठक में शामिल होकर जिले में संचालित विभिन्न केंद्रीय योजनाओं एवं विकास कार्यों की प्रगति की समीक्षा की। बैठक में विकास योजनाओं के प्रभावी क्रियान्वयन, लंबित कार्यों में तेजी लाने तथा आमजनों तक सरकारी योजनाओं का लाभ समय पर पहुंचाने को लेकर महत्वपूर्ण विषयों पर चर्चा हुई।',
    image: `${import.meta.env.BASE_URL}images/real/fb_7.jpg`,
    date_published: '2026-10-07T16:00:53.000Z',
    author: 'Sanjeev Singh'
  },
  {
    id: 'fb-8',
    url: 'https://m.facebook.com/permalink.php?id=100069661650642&story_fbid=pfbid088t6KU5saA7YR7UJLsmAQXpyRNuC7y24HdGLnCWE2bcpLtukoZ2ZCXLuUTGPwBiMl',
    title: 'मनईटांड़ में आयोजित पारिवारिक एवं शुभ मांगलिक समारोह में सहभागिता व आशीर्वाद।',
    content_text: 'मनईटांड़ निवासी श्री सागर गुप्ता जी की नन्ही सुपुत्री के प्रथम जन्मदिन के अवसर पर यमुना बैंक्वेट हॉल में आयोजित समारोह में सम्मिलित होकर बिटिया रानी को ढेरों प्यार और आशीर्वाद दिया। ईश्वर से प्रार्थना है कि बिटिया सदैव खुशियों और स्वस्थ मुस्कान से संपन्न रहे।',
    image: `${import.meta.env.BASE_URL}images/real/fb_8.jpg`,
    date_published: '2026-10-07T04:29:56.000Z',
    author: 'Sanjeev Singh'
  },
  {
    id: 'fb-9',
    url: 'https://m.facebook.com/permalink.php?id=100069661650642&story_fbid=pfbid022KXkoSSzFGtr4YWd7NUJTK7W9FkaHD8S74J5kocMmVJqBCY25GLkR9XPSJRw5aa9l',
    title: 'राष्ट्रीय अल्प बचत अभिकर्ता संघ, धनबाद इकाई द्वारा आयोजित सम्मेलन में भागीदारी।',
    content_text: 'आज राष्ट्रीय अल्प बचत अभिकर्ता संघ, भारत की जिला इकाई धनबाद द्वारा आयोजित कार्यक्रम में सम्मिलित होने का अवसर प्राप्त हुआ। इस दौरान संघ के अभिकर्ता साथियों ने अल्प बचत योजनाओं पर मिलने वाले कमीशन सहित अपनी विभिन्न समस्याओं एवं मांगों से अवगत कराया। उनकी समस्याओं को गंभीरता से सुना और संबंधित विभाग तक इन विषयों को पहुंचाकर समाधान का प्रयास करूँगा।',
    image: `${import.meta.env.BASE_URL}images/real/fb_9.jpg`,
    date_published: '2026-10-02T13:02:07.000Z',
    author: 'Sanjeev Singh'
  },
  {
    id: 'fb-10',
    url: 'https://m.facebook.com/permalink.php?id=100069661650642&story_fbid=pfbid02L1zkM5Zc9r9im2X9ybwZoh3HPGSZJAbzsaNLdACYeUqswW4UZME3b2CwUZasmU5jl',
    title: 'धनबाद नगर निगम कार्यालय परिसर में सफाई कर्मियों के बीच वस्त्र वितरण एवं सम्मान समारोह।',
    content_text: 'आज धनबाद नगर निगम कार्यालय परिसर में आयोजित कार्यक्रम में नगर निगम के सफाई कर्मियों के बीच वस्त्र वितरण कर उनका सम्मान किया। हमारे सफाई कर्मी दिन-रात पूरी निष्ठा और समर्पण के साथ धनबाद शहर को स्वच्छ, सुंदर एवं स्वस्थ बनाए रखने में महत्वपूर्ण भूमिका निभाते हैं। वास्तव में, ये हमारे ‘स्वच्छता योद्धा’ हैं, जिनके अथक परिश्रम से हमारा शहर स्वच्छ रहता है।',
    image: `${import.meta.env.BASE_URL}images/real/fb_10.jpg`,
    date_published: '2026-10-02T09:28:20.000Z',
    author: 'Sanjeev Singh'
  }
];

const Gallery = () => {
  const { lang, t } = useLanguage();
  const isHi = lang === 'hi';

  const [photos, setPhotos] = useState<FacebookPhotoItem[]>(initialFacebookPhotos);
  const [loading, setLoading] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'grid' | 'cards'>('grid');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Fetch real-time Facebook photos directly from the JSON feed with fallback
  const fetchFacebookFeed = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch('https://rss.app/feeds/v1.1/rgfWKAD7q2Ap8Gei.json');
      if (res.ok) {
        const data = await res.json();
        if (data && Array.isArray(data.items)) {
          // Filter to items that have valid images
          const validPhotos: FacebookPhotoItem[] = data.items
            .filter((item: any) => Boolean(item.image))
            .map((item: any) => ({
              id: item.id || String(Math.random()),
              url: item.url || 'https://www.facebook.com/profile.php?id=100069661650642',
              title: item.title || '',
              content_text: item.content_text || item.title || '',
              image: item.image,
              date_published: item.date_published || new Date().toISOString(),
              author: (item.authors && item.authors[0]?.name) || 'Sanjeev Singh'
            }));

          if (validPhotos.length > 0) {
            setPhotos(validPhotos);
          }
        }
      }
    } catch {
      // Gracefully fall back to pre-bundled Facebook photos
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchFacebookFeed();
  }, [fetchFacebookFeed]);

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
      setLightboxIndex((prev) => (prev! + 1) % photos.length);
    }
  }, [lightboxIndex, photos.length]);

  const prevImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! - 1 + photos.length) % photos.length);
    }
  }, [lightboxIndex, photos.length]);

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

  // Format date helper
  const formatDate = (dateString: string) => {
    try {
      const d = new Date(dateString);
      return d.toLocaleDateString(isHi ? 'hi-IN' : 'en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });
    } catch {
      return isHi ? 'हालिया पोस्ट' : 'Recent Post';
    }
  };

  return (
    <div className="bg-[#f8f9fa] min-h-screen pt-[72px] pb-24 font-body text-[#1a1a2e]">
      
      {/* Top Breadcrumb & Live Sync Status */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 pt-4 sm:pt-6 pb-2 flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-headline font-bold text-gray-500 hover:text-[#ff7e54] uppercase tracking-wider transition-colors"
        >
          <ArrowLeft size={16} />
          {isHi ? 'मुख्य पृष्ठ पर वापस जाएं' : 'Back to Home'}
        </Link>

        {/* Live Facebook Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-[#1877F2] text-[11px] font-semibold">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1877F2]" />
          </span>
          <span className="font-headline uppercase tracking-wider text-[10px]">
            {isHi ? 'फेसबुक लाइव सिंक' : 'Live Facebook Feed'}
          </span>
        </div>
      </div>

      {/* Modern Compact Executive Header (Optimized for Mobile) */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 mb-6 sm:mb-8">
        <div className="bg-[#1a1a2e] text-white py-8 sm:py-14 md:py-16 px-5 sm:px-8 md:px-12 relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1877F2]/10 -skew-x-12 translate-x-16 pointer-events-none" />
          <div className="relative z-10 max-w-4xl text-center mx-auto space-y-3">
            <Reveal>
              <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#ff7e54] text-[10px] sm:text-xs font-headline font-black uppercase tracking-widest">
                <Sparkles size={12} className="shrink-0" />
                <span>{isHi ? 'आधिकारिक फेसबुक फोटो संग्रह' : 'Official Facebook Photo Stream'}</span>
              </div>
            </Reveal>
            <Reveal delay={50}>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-headline font-black leading-[1.1] uppercase tracking-tight text-white">
                {t('photos.title1')}{' '}
                <span className="text-[#ff7e54]">{t('photos.title2')}</span>
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-white/70 text-xs sm:text-sm md:text-base max-w-2xl mx-auto font-body leading-relaxed">
                {isHi
                  ? 'संजीव सिंह जी के आधिकारिक फेसबुक पेज से सीधे प्रसारित ताज़ा छायाचित्र, जनसंवाद और कार्यक्रम।'
                  : 'Authentic photo updates streamed directly from the official Facebook page of Sanjeev Singh.'}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mobile-First Controls Bar (Count, View Mode, Refresh) */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 mb-4 sm:mb-6">
        <div className="bg-white p-3 sm:p-4 rounded-2xl sm:rounded-3xl border border-gray-150 shadow-sm flex items-center justify-between gap-3">
          
          {/* Photo Counter */}
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-blue-50 text-[#1877F2] flex items-center justify-center font-bold text-xs">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
            </span>
            <span className="text-xs sm:text-sm font-headline font-bold text-gray-700">
              {isHi ? `${photos.length} फेसबुक तस्वीरें` : `${photos.length} Facebook Photos`}
            </span>
          </div>

          {/* Right Controls: Refresh & View Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={fetchFacebookFeed}
              disabled={loading}
              className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors text-xs flex items-center gap-1 font-semibold"
              title="Refresh Facebook Photos"
            >
              <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
              <span className="hidden sm:inline text-xs">{isHi ? 'रिफ्रेश' : 'Sync'}</span>
            </button>

            {/* View Toggle on Mobile & Tablet */}
            <div className="flex items-center bg-gray-100 p-1 rounded-xl gap-1 shrink-0">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg text-xs flex items-center gap-1 font-bold transition-colors ${
                  viewMode === 'grid' ? 'bg-white text-[#ff7e54] shadow-sm' : 'text-gray-500 hover:text-gray-900'
                }`}
                title="Grid View (2-Column Mobile)"
              >
                <Grid2X2 size={15} />
                <span className="hidden sm:inline text-xs">{isHi ? 'ग्रिड' : 'Grid'}</span>
              </button>
              <button
                onClick={() => setViewMode('cards')}
                className={`p-1.5 rounded-lg text-xs flex items-center gap-1 font-bold transition-colors ${
                  viewMode === 'cards' ? 'bg-white text-[#ff7e54] shadow-sm' : 'text-gray-500 hover:text-gray-900'
                }`}
                title="Feed View (Story Cards)"
              >
                <RectangleVertical size={15} />
                <span className="hidden sm:inline text-xs">{isHi ? 'फीड' : 'Feed'}</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Main Facebook Photo Gallery */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* VIEW MODE 1: 2-Column Responsive Grid on Mobile (Default) */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {photos.map((item, index) => (
              <Reveal key={item.id} delay={(index % 4) * 35}>
                <div
                  onClick={() => openLightbox(index)}
                  className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-150/80 shadow-sm hover:shadow-xl hover:border-[#ff7e54]/30 transition-all duration-300 cursor-pointer flex flex-col"
                >
                  {/* Photo Thumbnail */}
                  <div className="relative aspect-[4/5] sm:aspect-square overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    
                    {/* Gradient Scrim for Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                    {/* Facebook Icon Tag */}
                    <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#1877F2]/90 backdrop-blur-md text-white text-[9px] font-bold shadow-sm">
                      <svg fill="currentColor" viewBox="0 0 24 24" className="w-2.5 h-2.5"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
                      <span>Facebook</span>
                    </div>

                    {/* Tap to Expand Button */}
                    <div className="absolute top-2.5 right-2.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white/90 group-hover:bg-[#ff7e54] transition-colors">
                      <Maximize2 size={12} />
                    </div>

                    {/* Bottom Caption Overlay */}
                    <div className="absolute bottom-0 inset-x-0 p-2.5 sm:p-3.5 text-white z-10 space-y-1">
                      <p className="font-headline font-semibold text-[11px] sm:text-xs line-clamp-2 leading-tight drop-shadow-sm group-hover:text-[#ff7e54] transition-colors">
                        {item.title}
                      </p>
                      <div className="flex items-center justify-between text-[9px] text-white/70">
                        <span className="flex items-center gap-1">
                          <Calendar size={10} className="text-[#ff7e54]" />
                          <span>{formatDate(item.date_published)}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {/* VIEW MODE 2: Story Cards (1-Column on Phone, 2-Col on Desktop) */}
        {viewMode === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {photos.map((item, index) => (
              <Reveal key={item.id} delay={(index % 2) * 50}>
                <div
                  className="bg-white rounded-3xl overflow-hidden border border-gray-150 shadow-sm hover:shadow-xl hover:border-[#ff7e54]/30 transition-all duration-300 flex flex-col"
                >
                  {/* Photo Banner with Click to Open Lightbox */}
                  <div 
                    onClick={() => openLightbox(index)}
                    className="relative aspect-[16/10] overflow-hidden bg-gray-100 cursor-pointer group"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 flex items-center gap-1 px-3 py-1 rounded-full bg-[#1877F2] text-white text-[10px] font-bold shadow-md">
                      <svg fill="currentColor" viewBox="0 0 24 24" className="w-3 h-3"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
                      <span>Official Facebook Post</span>
                    </div>

                    <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold flex items-center gap-1">
                      <Maximize2 size={12} />
                      <span>{isHi ? 'बड़ा देखें' : 'View Full'}</span>
                    </div>
                  </div>

                  {/* Caption & Actions */}
                  <div className="p-5 sm:p-6 space-y-4 flex-grow flex flex-col justify-between">
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span className="flex items-center gap-1 font-medium">
                          <Calendar size={13} className="text-[#ff7e54]" />
                          <span>{formatDate(item.date_published)}</span>
                        </span>
                        <span className="text-[11px] font-bold text-[#1877F2]">
                          @sanjeevsingh.in
                        </span>
                      </div>

                      <p className="text-gray-800 text-xs sm:text-sm leading-relaxed line-clamp-3">
                        {item.content_text}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                      <button
                        onClick={() => openLightbox(index)}
                        className="text-xs font-headline font-bold text-[#ff7e54] hover:underline"
                      >
                        {isHi ? 'पूरी पोस्ट और फोटो देखें →' : 'View Photo & Full Post →'}
                      </button>

                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-colors text-xs font-semibold"
                      >
                        <span>{isHi ? 'फेसबुक' : 'Facebook'}</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}

      </section>

      {/* Official Facebook Profile Footer CTA */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 mt-12 sm:mt-16">
        <div className="bg-gradient-to-r from-[#1877F2] to-[#0c59c5] text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-500/20">
          <div className="space-y-1.5 text-center sm:text-left">
            <span className="text-[10px] font-black uppercase tracking-widest text-white/80">
              {isHi ? 'फेसबुक पर जुड़ें' : 'Connect on Facebook'}
            </span>
            <h3 className="text-lg sm:text-2xl font-headline font-bold">
              {isHi ? 'संजीव सिंह के आधिकारिक फेसबुक पेज को फॉलो करें' : 'Follow Sanjeev Singh’s Official Facebook Page'}
            </h3>
            <p className="text-xs sm:text-sm text-white/80">
              {isHi ? 'प्रतिदिन की जनसेवा गतिविधियों और आधिकारिक वक्तव्यों के लिए।' : 'For daily public service updates, community rallies, and official statements.'}
            </p>
          </div>
          <a
            href="https://www.facebook.com/profile.php?id=100069661650642"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-white text-[#1877F2] hover:bg-gray-100 text-xs sm:text-sm font-headline font-bold uppercase tracking-wider transition-colors shrink-0 shadow-md flex items-center gap-2"
          >
            <span>{isHi ? 'फेसबुक पेज खोलें' : 'Open Facebook Page'}</span>
            <ExternalLink size={15} />
          </a>
        </div>
      </section>

      {/* Interactive Fullscreen Mobile & Desktop Lightbox Modal */}
      {lightboxIndex !== null && photos[lightboxIndex] && (
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
              <span className="px-2.5 py-1 rounded-md bg-[#1877F2] text-white text-[10px] font-headline font-black uppercase tracking-wider flex items-center gap-1">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-2.5 h-2.5"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
                <span>Facebook</span>
              </span>
              <span className="text-xs text-white/70 font-mono">
                {lightboxIndex + 1} / {photos.length}
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
            className="relative flex-grow flex items-center justify-center my-2 max-h-[72vh]"
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

            {/* High-Res Facebook Image */}
            <img
              src={photos[lightboxIndex].image}
              alt={photos[lightboxIndex].title}
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

          {/* Bottom Caption & Facebook Post Link */}
          <div 
            className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 sm:p-5 text-white max-w-3xl mx-auto w-full space-y-2 shrink-0 border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-white text-xs sm:text-sm line-clamp-2 sm:line-clamp-3 leading-relaxed">
              {photos[lightboxIndex].content_text}
            </p>
            
            <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs">
              <span className="flex items-center gap-1.5 text-white/70 text-[11px]">
                <Calendar size={13} className="text-[#ff7e54]" />
                <span>{formatDate(photos[lightboxIndex].date_published)}</span>
              </span>

              <a
                href={photos[lightboxIndex].url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#ff7e54] hover:underline font-semibold"
              >
                <span>{isHi ? 'फेसबुक पर पोस्ट खोलें' : 'View on Facebook'}</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>

        </div>
      )}

    </div>
  );
};

export default Gallery;
