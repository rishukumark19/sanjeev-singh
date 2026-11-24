import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  MapPin, 
  ArrowRight, 
  Newspaper, 
  Search,
  X,
  Landmark
} from 'lucide-react';
import Reveal from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';

export interface PressReleaseItem {
  id: string;
  image: string;
  tagEn: string;
  tagHi: string;
  date: string;
  titleEn: string;
  titleHi: string;
  summaryEn: string;
  summaryHi: string;
  fullContentEn: string;
  fullContentHi: string;
  locationEn: string;
  locationHi: string;
}

const pressData: PressReleaseItem[] = [
  {
    id: 'pr-1',
    image: `${import.meta.env.BASE_URL}images/real/fb_7.jpg`,
    tagEn: 'District Review',
    tagHi: 'प्रशासनिक समीक्षा',
    date: '07 Oct 2026',
    locationEn: 'Dhanbad Collectorate',
    locationHi: 'धनबाद समाहरणालय',
    titleEn: 'Review of Central Infrastructure Schemes at District DISHA Meeting',
    titleHi: 'धनबाद समाहरणालय में आयोजित DISHA समीक्षा बैठक में केंद्रीय योजनाओं की समीक्षा',
    summaryEn: 'Sanjeev Singh actively participated in the District Development Coordination & Monitoring Committee (DISHA) session, advocating expedited execution of delayed public welfare projects.',
    summaryHi: 'समाहरणालय में आयोजित जिला विकास समन्वय एवं निगरानी समिति (DISHA) की बैठक में शामिल होकर विभिन्न केंद्रीय योजनाओं, सड़क व जलापूर्ति कार्यों की प्रगति की गहन समीक्षा की।',
    fullContentEn: 'At the high-level District Development Coordination and Monitoring Committee (DISHA) meeting held at the Dhanbad Collectorate, Sanjeev Singh reviewed the ground execution of key centrally sponsored initiatives. He emphasized that developmental benefits must directly reach underprivileged coal belt families without bureaucratic delays. Specific focus was placed on piped water supply, rural concrete roads, and upgraded electrical infrastructure across Jharia.',
    fullContentHi: 'धनबाद समाहरणालय में आयोजित DISHA (जिला विकास समन्वय एवं निगरानी समिति) की बैठक में शामिल होकर जिले में संचालित विभिन्न केंद्रीय योजनाओं एवं विकास कार्यों की प्रगति की समीक्षा की। बैठक में विकास योजनाओं के प्रभावी क्रियान्वयन, लंबित कार्यों में तेजी लाने तथा आमजनों तक सरकारी योजनाओं का लाभ समय पर पहुंचाने को लेकर महत्वपूर्ण विषयों पर चर्चा हुई।'
  },
  {
    id: 'pr-2',
    image: `${import.meta.env.BASE_URL}images/real/fb_10.jpg`,
    tagEn: 'Civic Welfare',
    tagHi: 'स्वच्छता योद्धा सम्मान',
    date: '02 Oct 2026',
    locationEn: 'Municipal Corporation, Dhanbad',
    locationHi: 'नगर निगम परिसर, धनबाद',
    titleEn: 'Felicitation and Dignity Support for Municipal Sanitation Workers',
    titleHi: 'धनबाद नगर निगम परिसर में सफाई कर्मियों के बीच वस्त्र वितरण व सम्मान समारोह',
    summaryEn: 'Honoring frontline municipal sanitation personnel as true civic warriors, distributing clothes and reinforcing commitment to their occupational welfare.',
    summaryHi: 'नगर निगम के सफाई कर्मियों के बीच वस्त्र वितरण कर उनका सम्मान किया। वे हमारे ‘स्वच्छता योद्धा’ हैं, जिनके अथक परिश्रम से हमारा शहर स्वच्छ रहता है।',
    fullContentEn: 'In a special civic felicitation ceremony at the Dhanbad Municipal Corporation premises, Sanjeev Singh distributed clothing and protective supplies to municipal sanitation staff. He commended their tireless day-and-night dedication in keeping Dhanbad clean, healthy, and hygienic, noting that the community must stand united in upholding their labor rights and health benefits.',
    fullContentHi: 'आज धनबाद नगर निगम कार्यालय परिसर में आयोजित कार्यक्रम में नगर निगम के सफाई कर्मियों के बीच वस्त्र वितरण कर उनका सम्मान किया। हमारे सफाई कर्मी दिन-रात पूरी निष्ठा और समर्पण के साथ धनबाद शहर को स्वच्छ, सुंदर एवं स्वस्थ बनाए रखने में महत्वपूर्ण भूमिका निभाते हैं। वास्तव में, ये हमारे ‘स्वच्छता योद्धा’ हैं, जिनके अथक परिश्रम से हमारा शहर स्वच्छ रहता है।'
  },
  {
    id: 'pr-3',
    image: `${import.meta.env.BASE_URL}images/real/fb_1.jpg`,
    tagEn: 'State Condolence',
    tagHi: 'राजकीय शोक संवेदना',
    date: '10 Oct 2026',
    locationEn: 'Nemra Village, Ramgarh',
    locationHi: 'नेमरा गांव, रामगढ़',
    titleEn: 'Solemn Condolences Offered to CM Hemant Soren at Ancestral Village Nemra',
    titleHi: 'माननीय मुख्यमंत्री श्री हेमंत सोरेन जी से मुलाकात कर पूज्य माताजी के निधन पर शोक संवेदना',
    summaryEn: 'Paying heartfelt tribute following the demise of Late Roopi Soren ji, wife of Dishom Guru Shibu Soren and mother of Chief Minister Hemant Soren.',
    summaryHi: 'दिशोम गुरु स्व. शिबू सोरेन जी की धर्मपत्नी व माननीय मुख्यमंत्री श्री हेमंत सोरेन जी की पूज्य माताजी स्व. रूपी सोरेन जी के निधन पर नेमरा पहुँचकर भावभीनी श्रद्धांजलि अर्पित की।',
    fullContentEn: 'Sanjeev Singh visited the ancestral village Nemra to pay his solemn tributes following the demise of Late Roopi Soren ji. Meeting Chief Minister Hemant Soren and family members, he expressed heartfelt condolences and prayers, reflecting upon her immense fortitude and contribution to the socio-cultural movements of Jharkhand.',
    fullContentHi: 'झारखंड के माननीय मुख्यमंत्री श्री हेमंत सोरेन जी की पूज्य माताजी एवं दिशोम गुरु स्व: शिबू सोरेन जी की धर्मपत्नी स्व: रूपी सोरेन जी के निधन के पश्चात आज उनके पैतृक गांव नेमरा पहुँचकर उन्हें भावभीनी श्रद्धांजलि अर्पित किया। इस दुःखद घड़ी में माननीय मुख्यमंत्री श्री हेमंत सोरेन जी से मुलाकात कर अपनी गहरी शोक संवेदनाएँ व्यक्त कीं। ईश्वर से प्रार्थना है कि दिवंगत पुण्यात्मा को अपने श्रीचरणों में स्थान दें।'
  },
  {
    id: 'pr-4',
    image: `${import.meta.env.BASE_URL}images/real/fb_9.jpg`,
    tagEn: 'Labor & Union',
    tagHi: 'यूनियन अधिकार',
    date: '02 Oct 2026',
    locationEn: 'Union Hall, Dhanbad',
    locationHi: 'यूनियन भवन, धनबाद',
    titleEn: 'National Small Savings Agents Union Highlights Key Demands at District Convention',
    titleHi: 'राष्ट्रीय अल्प बचत अभिकर्ता संघ सम्मेलन में अभिकर्ताओं की समस्याओं पर मंथन',
    summaryEn: 'Addressing commission rates, social safety nets, and organizational support for thousands of postal and small savings workers across Jharkhand.',
    summaryHi: 'अल्प बचत योजनाओं पर मिलने वाले कमीशन सहित अभिकर्ताओं की विभिन्न समस्याओं को गंभीरता से सुना और संबंधित विभागों तक समाधान पहुंचाने का संकल्प लिया।',
    fullContentEn: 'During the Dhanbad district conference of the National Small Savings Agents Association, Sanjeev Singh interacted with hundreds of regional agents. He listened to their ongoing concerns regarding reduced commission structures and promised to pursue their representations with state and central authorities to protect their sustainable livelihood.',
    fullContentHi: 'आज राष्ट्रीय अल्प बचत अभिकर्ता संघ, भारत की जिला इकाई धनबाद द्वारा आयोजित कार्यक्रम में सम्मिलित होने का अवसर प्राप्त हुआ। इस दौरान संघ के अभिकर्ता साथियों ने अल्प बचत योजनाओं पर मिलने वाले कमीशन सहित अपनी विभिन्न समस्याओं एवं मांगों से अवगत कराया। उनकी समस्याओं को गंभीरता से सुना और संबंधित विभाग तक इन विषयों को पहुंचाकर समाधान का प्रयास करूँगा।'
  },
  {
    id: 'pr-5',
    image: `${import.meta.env.BASE_URL}images/real/fb_foodadda.jpg`,
    tagEn: 'Youth Uplift',
    tagHi: 'युवा स्वावलंबन',
    date: '28 Sep 2026',
    locationEn: 'Dhanbad Urban Hub',
    locationHi: 'धनबाद नगर केंद्र',
    titleEn: 'Encouraging Local Youth Entrepreneurship and Self-Reliance in Dhanbad',
    titleHi: 'धनबाद में युवाओं द्वारा स्थापित स्वरोजगार केंद्र का उद्घाटन व प्रोत्साहन',
    summaryEn: 'Fostering grassroots entrepreneurial spirit among local youth to drive independent economic vitality in the coal belt.',
    summaryHi: 'स्थानीय युवाओं के उद्यम का उद्घाटन कर स्वरोजगार व आत्मनिर्भरता की सराहना की तथा युवा पीढ़ी के सर्वांगीण विकास हेतु हरसंभव सहयोग का भरोसा दिया।',
    fullContentEn: 'Inaugurating a vibrant youth business enterprise in Dhanbad, Sanjeev Singh emphasized that the future of the coal belt lies in diversifying opportunities for local youth. He pledged ongoing mentorship and support for emerging entrepreneurs and small business owners throughout the district.',
    fullContentHi: 'धनबाद के उत्साही युवाओं द्वारा स्थापित नए व्यावसायिक उद्यम का उद्घाटन कर उन्हें उज्ज्वल भविष्य की शुभकामनाएं दीं। युवाओं का स्वावलंबन और उद्यमशीलता हमारे समाज की प्रगति का मुख्य स्तंभ है।'
  },
  {
    id: 'pr-6',
    image: `${import.meta.env.BASE_URL}images/real/fb_4.jpg`,
    tagEn: 'Public Redressal',
    tagHi: 'जनसंवाद व समाधान',
    date: '08 Oct 2026',
    locationEn: 'Central Office, Dhanbad',
    locationHi: 'केंद्रीय कार्यालय, धनबाद',
    titleEn: 'Open Door Grievance Redressal and Citizen Assistance in Dhanbad',
    titleHi: 'कार्यालय में प्रतिदिन की भांति जनसमस्याओं का त्वरित प्रशासनिक निवारण',
    summaryEn: 'Hundreds of constituents from Jharia, Dhanbad, and surrounding colliery blocks visit daily to present civic and union petitions.',
    summaryHi: 'धनबाद की देवतुल्य जनता से आत्मीय मुलाकात। प्रतिदिन की भांति क्षेत्रवासियों की समस्याएं सुनीं और उनके समाधान हेतु दिशा-निर्देश दिए।',
    fullContentEn: 'Continuing a dedicated multi-generational tradition of public service, Sanjeev Singh hosted citizens, mine workers, and local committees in Dhanbad. From civic infrastructure disputes to medical emergency assistance and union welfare petitions, actionable solutions were coordinated directly with administrative and BCCL representatives.',
    fullContentHi: 'धनबाद की देवतुल्य जनता से आत्मीय मुलाकात। जनता का स्नेह और विश्वास ही हमारी सबसे बड़ी शक्ति है। प्रतिदिन की भांति क्षेत्रवासियों की समस्याएं सुनीं और उनके समाधान हेतु संबंधित अधिकारियों को निर्देशित किया।'
  }
];

const PressReleases = () => {
  const { lang } = useLanguage();
  const isHi = lang === 'hi';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<PressReleaseItem | null>(null);

  const filteredArticles = pressData.filter((item) => {
    const q = searchQuery.toLowerCase();
    const title = (isHi ? item.titleHi : item.titleEn).toLowerCase();
    const summary = (isHi ? item.summaryHi : item.summaryEn).toLowerCase();
    const tag = (isHi ? item.tagHi : item.tagEn).toLowerCase();
    return title.includes(q) || summary.includes(q) || tag.includes(q);
  });

  return (
    <div className="bg-[#fdfbf7] min-h-screen pt-[74px] md:pt-[82px] pb-16 sm:pb-24">
      {/* Header Banner (Warm #ff7e54 Saffron & White) */}
      <section className="bg-gradient-to-r from-[#ff7e54] via-[#f46b3f] to-[#ff7e54] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 relative overflow-hidden shadow-md">
        <div className="max-w-[1440px] mx-auto text-center relative z-10 space-y-4">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 border border-white text-white backdrop-blur-md">
              <Newspaper size={14} className="text-amber-400" />
              <span className="text-[11px] font-bold uppercase tracking-widest">
                {isHi ? 'आधिकारिक प्रेस कक्ष व समाचार' : 'Official Press & Newsroom'}
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-headline font-black text-white tracking-tight leading-tight uppercase">
              {isHi ? 'प्रेस विज्ञप्तियां एवं ताज़ा वक्तव्य' : 'Press Releases & Communiqués'}
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              {isHi
                ? 'संजीव सिंह के आधिकारिक बयान, विकासात्मक पहलों की रिपोर्ट एवं जनहित घोषणाओं का प्रामाणिक स्रोत।'
                : 'Verified statements, policy announcements, and civic development briefings issued by the office of Sanjeev Singh.'}
            </p>
          </Reveal>

          {/* Search Bar */}
          <Reveal delay={200}>
            <div className="max-w-md mx-auto pt-4 relative">
              <input
                type="text"
                placeholder={isHi ? 'विज्ञप्ति या समाचार खोजें...' : 'Search press releases...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white border-2 border-orange-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#ff7e54] text-sm shadow-md font-medium"
              />
              <Search size={18} className="absolute left-3.5 top-7 text-[#ff7e54]" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 mt-10 sm:mt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredArticles.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 60}>
              <article className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={isHi ? item.titleHi : item.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#ff7e54] text-white font-bold text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow">
                    {isHi ? item.tagHi : item.tagEn}
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-[10px] font-semibold text-white bg-slate-900/80 backdrop-blur-md px-2.5 py-0.5 rounded-full">
                    <Calendar size={11} className="text-amber-400" />
                    <span>{item.date}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold mb-1.5">
                      <MapPin size={12} className="text-[#ff7e54]" />
                      <span>{isHi ? item.locationHi : item.locationEn}</span>
                    </div>

                    <h2 className="font-headline font-bold text-base sm:text-lg text-slate-900 leading-snug group-hover:text-[#ff7e54] transition-colors">
                      {isHi ? item.titleHi : item.titleEn}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 font-body line-clamp-3 mt-2 leading-relaxed">
                      {isHi ? item.summaryHi : item.summaryEn}
                    </p>
                  </div>

                  {/* Read More Trigger */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedArticle(item)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ff7e54] hover:text-[#e56233] transition-colors"
                    >
                      <span>{isHi ? 'पूरी विज्ञप्ति पढ़ें' : 'Read Full Statement'}</span>
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      Official Desk
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Media Desk Box: Official Press Secretariat */}
        <Reveal delay={200}>
          <div className="mt-16 bg-gradient-to-r from-[#fff7ed] via-white to-[#fff1e6] rounded-3xl p-6 sm:p-10 text-slate-800 shadow-xl border-2 border-orange-200 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-9 space-y-2">
              <span className="text-xs font-black text-[#ff7e54] uppercase tracking-[0.25em] flex items-center gap-1.5">
                <Landmark size={14} className="text-[#ff7e54]" />
                <span>{isHi ? 'प्रेस एवं मीडिया सेल' : 'Press & Media Cell'}</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-headline font-black text-slate-900">
                {isHi ? 'आधिकारिक समाचार, वक्तव्य व प्रेस विज्ञप्ति' : 'Official Press Statements & News Updates'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl font-normal">
                {isHi
                  ? 'धनबाद से जारी सभी आधिकारिक वक्तव्य, विकासात्मक रिपोर्ट एवं कामगार अधिकारों संबंधी घोषणाएं यहां प्रामाणिक रूप से उपलब्ध कराई जाती हैं।'
                  : 'All verified public releases, labor movement updates, and developmental reports issued by the secretariat of Sanjeev Singh.'}
              </p>
            </div>

            <div className="md:col-span-3 flex md:justify-end">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#ff7e54] hover:bg-[#e56233] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>{isHi ? 'होम पर जाएं' : 'Return Home'}</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Full Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 relative"
          >
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {/* Header info */}
            <div className="space-y-3 pr-8">
              <div className="flex items-center gap-2 text-xs font-bold text-[#ff7e54] uppercase tracking-wider">
                <span className="bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200">
                  {isHi ? selectedArticle.tagHi : selectedArticle.tagEn}
                </span>
                <span>•</span>
                <span className="text-slate-500">{selectedArticle.date}</span>
                <span>•</span>
                <span className="text-slate-500">{isHi ? selectedArticle.locationHi : selectedArticle.locationEn}</span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-headline font-black text-slate-900 leading-tight">
                {isHi ? selectedArticle.titleHi : selectedArticle.titleEn}
              </h2>
            </div>

            {/* Image */}
            <div className="my-5 rounded-2xl overflow-hidden aspect-[16/9] bg-slate-900">
              <img
                src={selectedArticle.image}
                alt={isHi ? selectedArticle.titleHi : selectedArticle.titleEn}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content text */}
            <div className="space-y-4 text-slate-700 leading-relaxed font-body text-sm sm:text-base">
              <p className="font-semibold text-slate-900 leading-relaxed">
                {isHi ? selectedArticle.summaryHi : selectedArticle.summaryEn}
              </p>
              <p>
                {isHi ? selectedArticle.fullContentHi : selectedArticle.fullContentEn}
              </p>
            </div>

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="font-bold text-[#ff7e54]">Official Press & Media Secretariat</span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-xs transition-colors"
              >
                {isHi ? 'बंद करें' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PressReleases;
