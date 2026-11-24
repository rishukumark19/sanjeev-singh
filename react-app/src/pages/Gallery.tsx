import { useState, useCallback, useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  MapPin, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import Reveal from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';

export interface PhotoArchiveItem {
  id: string;
  image: string;
  category: 'all' | 'field' | 'labor' | 'civic' | 'community';
  titleEn: string;
  titleHi: string;
  descEn: string;
  descHi: string;
  date: string;
  locationEn: string;
  locationHi: string;
}

const officialPhotoArchive: PhotoArchiveItem[] = [
  {
    id: 'photo-office-1',
    image: `${import.meta.env.BASE_URL}images/real/fb_dhanbad_office.jpg`,
    category: 'civic',
    titleEn: 'Public Greeting & Civic Consultations at Municipal Corporation Office',
    titleHi: 'धनबाद नगर निगम कार्यालय में जनसंवाद व अभिनंदन',
    descEn: 'Sanjeev Singh greeting citizens, community delegations, and municipal representatives with folded hands at Dhanbad Municipal Corporation, discussing city civic amenities and welfare priorities.',
    descHi: 'धनबाद नगर निगम कार्यालय परिसर में महापौर कक्ष में क्षेत्र के नागरिकों, समाजसेवियों एवं अधिकारियों से आत्मीय भेंट कर शहर की मूलभूत नागरिक सुविधाओं व जनसमस्याओं के निवारण पर विस्तृत विचार-विमर्श किया।',
    date: 'Oct 2026',
    locationEn: 'Mayor Office, Dhanbad Municipal Corporation',
    locationHi: 'महापौर कार्यालय, धनबाद नगर निगम'
  },
  {
    id: 'photo-council-1',
    image: `${import.meta.env.BASE_URL}images/real/fb_dhanbad_council_meeting.jpg`,
    category: 'civic',
    titleEn: 'Administrative Review & Citizen Deliberations at Mayor Office, Dhanbad',
    titleHi: 'धनबाद नगर निगम महापौर कक्ष में प्रशासनिक समीक्षा व नागरिक संवाद',
    descEn: 'Chairing a comprehensive review meeting with civic delegates, officials, and regional representatives at Dhanbad Municipal Corporation to address public grievances and expedite civic welfare projects.',
    descHi: 'धनबाद नगर निगम के महापौर कक्ष में क्षेत्र के प्रबुद्ध नागरिकों, जनप्रतिनिधियों एवं अधिकारियों के साथ बैठक कर विकास योजनाओं की समीक्षा की और जनसमस्याओं के त्वरित समाधान हेतु दिशा-निर्देश दिए।',
    date: 'Aug 2026',
    locationEn: 'Mayor Chamber, Dhanbad Municipal Corporation',
    locationHi: 'महापौर कक्ष, धनबाद नगर निगम'
  },
  {
    id: 'photo-ram-1',
    image: `${import.meta.env.BASE_URL}images/real/fb_ram_mandir_darshan.jpg`,
    category: 'community',
    titleEn: 'Sacred Ram Mandir Portrait Presentation by Devotees & Supporters',
    titleHi: 'श्रद्धालुओं व नागरिकों द्वारा प्रभु श्री राम की पावन छवि भेंट व सम्मान',
    descEn: 'Constituents and community members warmly honoring Sanjeev Singh with an auspicious saffron angavastram and presenting a sacred framed portrait of Prabhu Shri Ram at Singh Mansion courtyard.',
    descHi: 'सिंह मेंशन परिसर में क्षेत्र के प्रबुद्ध नागरिकों एवं रामभक्तों द्वारा पारंपरिक अंगवस्त्र पहनाकर तथा मर्यादा पुरुषोत्तम प्रभु श्री राम की पावन छवि भेंट कर आत्मीय सम्मान व्यक्त किया गया।',
    date: 'Oct 2026',
    locationEn: 'Singh Mansion, Dhanbad',
    locationHi: 'सिंह मेंशन, धनबाद'
  },
  {
    id: 'photo-soren-1',
    image: `${import.meta.env.BASE_URL}images/real/fb_hemant_soren_meeting.jpg`,
    category: 'civic',
    titleEn: 'High-Level Meeting with Hon’ble Chief Minister Hemant Soren',
    titleHi: 'माननीय मुख्यमंत्री श्री हेमंत सोरेन जी से आत्मीय भेंट व संवाद',
    descEn: 'Sanjeev Singh and Smt. Ragini Singh in consultation with Hon’ble Chief Minister of Jharkhand Hemant Soren, discussing regional development, coal belt worker rights, and public welfare.',
    descHi: 'माननीय मुख्यमंत्री श्री हेमंत सोरेन जी से श्रीमती रागिनी सिंह जी के साथ शिष्टाचार भेंट कर कोयलांचल के जनहित, नागरिक कल्याण और विकास प्राथमिकताओं पर विस्तृत विमर्श किया।',
    date: 'Sep 2026',
    locationEn: 'Nemra, Ramgarh',
    locationHi: 'नेमरा, रामगढ़'
  },
  {
    id: 'photo-diwali-1',
    image: `${import.meta.env.BASE_URL}images/real/fb_diwali_greeting.jpg`,
    category: 'community',
    titleEn: 'Diwali Festivities & Auspicious Lamp Lighting with Smt. Ragini Singh',
    titleHi: 'दीपावली महापर्व पर श्रीमती रागिनी सिंह जी के साथ दीप प्रज्वलन',
    descEn: 'Sanjeev Singh and prominent leader Smt. Ragini Singh lighting the festive Deepam on the auspicious occasion of Diwali, extending warm wishes for prosperity, good health, and peace to all families of Dhanbad and Jharia.',
    descHi: 'प्रकाश के पावन महापर्व दीपावली पर श्रीमती रागिनी सिंह जी के साथ पारंपरिक दीप प्रज्वलित कर कोयलांचल एवं सम्पूर्ण झरिया-धनबाद वासियों के सुख, शांति, उत्तम स्वास्थ्य और समृद्धि की मंगलकामना की।',
    date: 'Nov 2026',
    locationEn: 'Singh Mansion, Dhanbad',
    locationHi: 'सिंह मेंशन, धनबाद'
  },
  {
    id: 'photo-1',
    image: `${import.meta.env.BASE_URL}images/real/fb_4.jpg`,
    category: 'field',
    titleEn: 'Citizen Grievance Resolution & Public Dialogue',
    titleHi: 'जनसंवाद एवं नागरिक समस्याओं का समाधान',
    descEn: 'Meeting hundreds of constituents and coal belt workers in Dhanbad. Listening attentively to local grievances and directing concerned officials for swift administrative redressal.',
    descHi: 'धनबाद में आम नागरिकों व कामगारों से मिलकर प्रतिदिन की भांति क्षेत्रवासियों की समस्याएं सुनीं और उनके समाधान हेतु संबंधित अधिकारियों को आवश्यक दिशा-निर्देश दिए।',
    date: '08 Oct 2026',
    locationEn: 'Dhanbad, Jharkhand',
    locationHi: 'धनबाद, झारखंड'
  },
  {
    id: 'photo-2',
    image: `${import.meta.env.BASE_URL}images/real/fb_10.jpg`,
    category: 'civic',
    titleEn: 'Cloth Distribution & Honor for Municipal Sanitation Workers',
    titleHi: 'धनबाद नगर निगम के स्वच्छता कर्मियों का सम्मान व वस्त्र वितरण',
    descEn: 'Felicitation and distribution of clothes to sanitation warriors at Dhanbad Municipal Corporation, recognizing their tireless round-the-clock commitment to public cleanliness and health.',
    descHi: 'धनबाद नगर निगम कार्यालय परिसर में सफाई कर्मियों के बीच वस्त्र वितरण कर उनका सम्मान किया। दिन-रात निष्ठापूर्वक शहर को स्वच्छ रखने वाले हमारे स्वच्छता योद्धा समाज के सच्चे रक्षक हैं।',
    date: '02 Oct 2026',
    locationEn: 'Municipal Corporation, Dhanbad',
    locationHi: 'नगर निगम परिसर, धनबाद'
  },
  {
    id: 'photo-3',
    image: `${import.meta.env.BASE_URL}images/real/fb_7.jpg`,
    category: 'civic',
    titleEn: 'District Development Coordination (DISHA) Review Meeting',
    titleHi: 'धनबाद समाहरणालय में आयोजित DISHA समीक्षा बैठक',
    descEn: 'Participating in the high-level DISHA committee meeting at Dhanbad Collectorate to review progress on central public welfare initiatives, pipeline projects, and expedited civic development.',
    descHi: 'धनबाद समाहरणालय में आयोजित जिला विकास समन्वय एवं निगरानी समिति (DISHA) की समीक्षा बैठक में भाग लेकर जिले में संचालित केंद्रीय योजनाओं व विकास कार्यों की गहन समीक्षा की।',
    date: '07 Oct 2026',
    locationEn: 'Collectorate, Dhanbad',
    locationHi: 'समाहरणालय, धनबाद'
  },
  {
    id: 'photo-4',
    image: `${import.meta.env.BASE_URL}images/real/fb_1.jpg`,
    category: 'community',
    titleEn: 'State Condolence Homage with Hon’ble CM Hemant Soren',
    titleHi: 'माननीय मुख्यमंत्री श्री हेमंत सोरेन जी से भेंट व शोक संवेदना',
    descEn: 'Offering solemn tributes and deep condolences at ancestral village Nemra following the demise of Late Roopi Soren ji, wife of Dishom Guru Shibu Soren and mother of CM Hemant Soren.',
    descHi: 'दिशोम गुरु स्व. शिबू सोरेन जी की धर्मपत्नी व माननीय मुख्यमंत्री श्री हेमंत सोरेन जी की पूज्य माताजी स्व. रूपी सोरेन जी के निधन पर उनके पैतृक गांव नेमरा पहुँचकर भावभीनी श्रद्धांजलि अर्पित की।',
    date: '10 Oct 2026',
    locationEn: 'Nemra, Ramgarh',
    locationHi: 'नेमरा, रामगढ़'
  },
  {
    id: 'photo-5',
    image: `${import.meta.env.BASE_URL}images/real/fb_foodadda.jpg`,
    category: 'community',
    titleEn: 'Inauguration of Youth Entrepreneurship Enterprise in Dhanbad',
    titleHi: 'धनबाद में स्थानीय युवाओं के स्वरोजगार प्रतिष्ठान का उद्घाटन',
    descEn: 'Inaugurating local youth enterprise initiative to promote self-employment, youth entrepreneurship, and community business spirit in the heart of Dhanbad.',
    descHi: 'धनबाद के स्थानीय उत्साही युवाओं द्वारा स्थापित नए व्यावसायिक प्रतिष्ठान का उद्घाटन कर उन्हें उज्ज्वल भविष्य हेतु शुभकामनाएं दीं। युवाओं का स्वावलंबन क्षेत्र की उन्नति का आधार है।',
    date: '28 Sep 2026',
    locationEn: 'Dhanbad City',
    locationHi: 'धनबाद नगर'
  },
  {
    id: 'photo-6',
    image: `${import.meta.env.BASE_URL}images/real/fb_9.jpg`,
    category: 'labor',
    titleEn: 'National Small Savings Agents Union District Convention',
    titleHi: 'राष्ट्रीय अल्प बचत अभिकर्ता संघ धनबाद सम्मेलन में भागीदारी',
    descEn: 'Addressing the district conference of Small Savings Agents Union, discussing their commissions, operational challenges, and pledging ongoing support to raise their demands with authorities.',
    descHi: 'राष्ट्रीय अल्प बचत अभिकर्ता संघ की धनबाद जिला इकाई द्वारा आयोजित सम्मेलन में सम्मिलित होकर साथियों की समस्याओं व कमीशन संबंधी मांगों को सुना और समाधान का पूर्ण भरोसा दिया।',
    date: '02 Oct 2026',
    locationEn: 'Union Hall, Dhanbad',
    locationHi: 'यूनियन भवन, धनबाद'
  },
  {
    id: 'photo-7',
    image: `${import.meta.env.BASE_URL}images/real/fb_katras.jpg`,
    category: 'field',
    titleEn: 'Mass Outreach and Field Interaction Across Katras Coal Belt',
    titleHi: 'कतरास व कोयलांचल क्षेत्र में जनसंपर्क व जनसंवाद',
    descEn: 'Direct grassroots interaction with mining families, laborers, and regional representatives across the Katras coal belt to discuss civic needs and village connectivity.',
    descHi: 'कतरास व आसपास के कोयलांचल क्षेत्रों में देवतुल्य जनता एवं कामगार साथियों से मिलकर क्षेत्र की समस्याओं, सड़क निर्माण और स्वच्छ जलापूर्ति के विषयों पर विस्तृत चर्चा की।',
    date: '25 Sep 2026',
    locationEn: 'Katras, Dhanbad',
    locationHi: 'कतरास, धनबाद'
  },
  {
    id: 'photo-8',
    image: `${import.meta.env.BASE_URL}images/real/fb_railcoach.jpg`,
    category: 'civic',
    titleEn: 'Civic Project & Rail Coach Landmark Inauguration',
    titleHi: 'रेल कोच नागरिक परियोजना का उद्घाटन समारोह',
    descEn: 'Inauguration of modern civic landmark and passenger convenience amenity in Dhanbad, bringing progressive infrastructure to the coal capital.',
    descHi: 'धनबाद में अभिनव रेल कोच नागरिक परियोजना का फीता काटकर उद्घाटन किया। क्षेत्र के सौंदर्य व नागरिक सुविधाओं के संवर्धन के लिए यह महत्वपूर्ण कदम है।',
    date: '20 Sep 2026',
    locationEn: 'Dhanbad Junction Area',
    locationHi: 'धनबाद स्टेशन परिसर'
  },
  {
    id: 'photo-9',
    image: `${import.meta.env.BASE_URL}images/real/fb_6.jpg`,
    category: 'field',
    titleEn: 'Delegation Meetings & Grassroots Review in Dhanbad',
    titleHi: 'विभिन्न क्षेत्रों से आए प्रतिनिधिमंडलों से सीधा संवाद',
    descEn: 'Consultation with worker delegations, youth sports clubs, and neighborhood committees in Dhanbad, addressing developmental proposals.',
    descHi: 'कोयलांचल के विभिन्न अंचलों से आए प्रतिनिधिमंडलों से संवाद कर स्थानीय आवश्यकताओं और विकास कार्यों की प्रगति की समीक्षा की।',
    date: '07 Oct 2026',
    locationEn: 'Dhanbad, Jharkhand',
    locationHi: 'धनबाद, झारखंड'
  },
  {
    id: 'photo-10',
    image: `${import.meta.env.BASE_URL}images/real/fb_2.jpg`,
    category: 'labor',
    titleEn: 'Memorial Homage to Veteran Labor Leader Late Virendra Singh',
    titleHi: 'वरिष्ठ मजदूर नेता स्व. वीरेंद्र सिंह जी के ब्रह्मभोज में श्रद्धांजलि',
    descEn: 'Paying heartfelt respects at Chirkunda at the memorial observance for veteran trade union leader and Jharkhand movement fighter Late Virendra Singh ji.',
    descHi: 'चिरकुंडा में जनता श्रमिक संघ के केंद्रीय सचिव श्री भूपेंद्र सिंह जी के पूज्य पिता, वरिष्ठ मजदूर नेता स्व. वीरेंद्र सिंह जी के ब्रह्मभोज में उपस्थित होकर श्रद्धांजलि अर्पित की।',
    date: '09 Oct 2026',
    locationEn: 'Chirkunda, Dhanbad',
    locationHi: 'चिरकुंडा, धनबाद'
  },
  {
    id: 'photo-11',
    image: `${import.meta.env.BASE_URL}images/real/fb_8.jpg`,
    category: 'community',
    titleEn: 'Family & Auspicious Community Occasion in Manaitand',
    titleHi: 'मनईटांड़ में आयोजित मांगलिक पारिवारिक समारोह में आशीर्वाद',
    descEn: 'Attending community family gathering at Yamuna Banquet Hall, Manaitand to bless young children and share in regional families’ milestones.',
    descHi: 'मनईटांड़ में श्री सागर गुप्ता जी की सुपुत्री के प्रथम जन्मदिन समारोह में सम्मिलित होकर बिटिया को स्नेह और मंगलमय जीवन का आशीर्वाद दिया।',
    date: '07 Oct 2026',
    locationEn: 'Manaitand, Dhanbad',
    locationHi: 'मनईटांड़, धनबाद'
  },
  {
    id: 'photo-12',
    image: `${import.meta.env.BASE_URL}images/real/fb_5.jpg`,
    category: 'community',
    titleEn: 'Inquiring Health of Injured Senior Journalist Amit Sinha',
    titleHi: 'सड़क दुर्घटना में घायल वरिष्ठ पत्रकार अमित सिन्हा जी का कुशलक्षेम',
    descEn: 'Visiting Raj Clinic to inquire about the medical treatment and recovery of Khabar Mantra senior journalist Amit Kumar Sinha following a road mishap.',
    descHi: 'सड़क दुर्घटना में घायल वरिष्ठ पत्रकार श्री अमित कुमार सिन्हा जी की जानकारी मिलने पर क्लिनिक पहुंचकर उनके स्वास्थ्य व उपचार की जानकारी ली तथा शीघ्र स्वास्थ्य लाभ की कामना की।',
    date: '08 Oct 2026',
    locationEn: 'Raj Clinic, Dhanbad',
    locationHi: 'राज क्लिनिक, धनबाद'
  },
  {
    id: 'photo-13',
    image: `${import.meta.env.BASE_URL}images/real/fb_11.jpg`,
    category: 'field',
    titleEn: 'Mass Rally and Public Dialogue in Jharia Constituency',
    titleHi: 'झरिया विधानसभा क्षेत्र में विशाल जनसभा व जनसंवाद',
    descEn: 'Engaging with thousands of citizens and supporters across Jharia, emphasizing equitable civic amenities, employment safety, and clean water.',
    descHi: 'झरिया की देवतुल्य जनता के बीच पहुंचकर जनसमस्याओं पर संवाद किया और क्षेत्र के सर्वांगीण विकास के प्रति अपनी निरंतर प्रतिबद्धता दोहराई।',
    date: '15 Sep 2026',
    locationEn: 'Jharia, Dhanbad',
    locationHi: 'झरिया, धनबाद'
  },
  {
    id: 'photo-14',
    image: `${import.meta.env.BASE_URL}images/real/fb_12.jpg`,
    category: 'civic',
    titleEn: 'Ground Inspection of Ongoing Rural Road Works',
    titleHi: 'ग्रामीण संपर्क पथ व विकास कार्यों का स्थलीय निरीक्षण',
    descEn: 'On-site technical and quality review of ongoing concrete road laying connecting remote habitations in Jharia with arterial highways.',
    descHi: 'झरिया के ग्रामीण क्षेत्रों को मुख्य मार्ग से जोड़ने वाले निर्माणाधीन संपर्क पथों का स्थलीय निरीक्षण कर गुणवत्ता व समयबद्धता के निर्देश दिए।',
    date: '10 Sep 2026',
    locationEn: 'Rural Jharia',
    locationHi: 'ग्रामीण झरिया'
  },
  {
    id: 'photo-15',
    image: `${import.meta.env.BASE_URL}images/real/fb_townhall.jpg`,
    category: 'labor',
    titleEn: 'Townhall Convention with Coal Workers & Representatives',
    titleHi: 'कोयला कामगारों व प्रतिनिधियों के साथ टाउनहॉल महाधिवेशन',
    descEn: 'Addressing key delegates of Janta Mazdoor Sangh regarding BCCL welfare agreements, medical coverage, and safety provisions in underground mines.',
    descHi: 'जनता मजदूर संघ के प्रतिनिधियों के साथ महाधिवेशन में बीसीसीएल कर्मियों के वेतन समझौते, चिकित्सा सुविधाओं और सुरक्षा प्रावधानों पर गहन विचार-विमर्श।',
    date: '05 Sep 2026',
    locationEn: 'Town Hall, Dhanbad',
    locationHi: 'टाउन हॉल, धनबाद'
  },
  {
    id: 'photo-16',
    image: `${import.meta.env.BASE_URL}images/real/fb_3.jpg`,
    category: 'community',
    titleEn: 'Tribute to Former Union Minister Late Ram Vilas Paswan',
    titleHi: 'पूर्व केंद्रीय मंत्री स्व. रामविलास पासवान जी की पुण्यतिथि पर नमन',
    descEn: 'Paying reverent homage on the death anniversary of visionary social justice advocate and former Union Minister Late Ram Vilas Paswan ji.',
    descHi: 'सामाजिक न्याय, वंचितों और शोषितों के उत्थान के लिए आजीवन समर्पित रहे पूर्व केंद्रीय मंत्री स्व. रामविलास पासवान जी की पुण्यतिथि पर सादर नमन।',
    date: '08 Oct 2026',
    locationEn: 'Dhanbad',
    locationHi: 'धनबाद'
  },
  {
    id: 'photo-17',
    image: `${import.meta.env.BASE_URL}images/real/sanjeev_portrait_hd.jpg`,
    category: 'field',
    titleEn: 'Official Portrait — Sanjeev Singh, Former MLA',
    titleHi: 'आधिकारिक छवि — संजीव सिंह, पूर्व विधायक झरिया',
    descEn: 'An official photograph of Sanjeev Singh, Former MLA Jharia and Leader of Janta Mazdoor Sangh, dedicated to public solidarity in Dhanbad.',
    descHi: 'पूर्व विधायक झरिया एवं जनता मजदूर संघ के नेता संजीव सिंह की आधिकारिक छवि — धनबाद के जनसेवा आंदोलन के अग्रणी नेतृत्वकर्ता।',
    date: '2026',
    locationEn: 'Dhanbad, Jharkhand',
    locationHi: 'धनबाद, झारखंड'
  }
];

const Gallery = () => {
  const { lang } = useLanguage();
  const isHi = lang === 'hi';

  const [activeCategory, setActiveCategory] = useState<'all' | 'field' | 'labor' | 'civic' | 'community'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { key: 'all', label: isHi ? 'सभी तस्वीरें' : 'All Photos' },
    { key: 'field', label: isHi ? 'जनसंवाद व क्षेत्र भ्रमण' : 'Field & Outreach' },
    { key: 'labor', label: isHi ? 'मजदूर कल्याण व संगठन' : 'Labor & Union' },
    { key: 'civic', label: isHi ? 'नागरिक विकास व समीक्षा' : 'Civic & Infrastructure' },
    { key: 'community', label: isHi ? 'सामाजिक सहभागिता' : 'Community Solidarity' }
  ];

  const filteredPhotos = activeCategory === 'all'
    ? officialPhotoArchive
    : officialPhotoArchive.filter(p => p.category === activeCategory);

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
      setLightboxIndex((prev) => (prev! + 1) % filteredPhotos.length);
    }
  }, [lightboxIndex, filteredPhotos.length]);

  const prevImage = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! === 0 ? filteredPhotos.length - 1 : prev! - 1));
    }
  }, [lightboxIndex, filteredPhotos.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  return (
    <div className="bg-[#f8f9fa] min-h-screen pt-[74px] md:pt-[82px] pb-16 sm:pb-24">
      {/* Editorial Header Banner (Warm #ff7e54 Saffron & White) */}
      <section className="bg-gradient-to-r from-[#ff7e54] via-[#f46b3f] to-[#ff7e54] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 relative overflow-hidden shadow-md">
        <div className="max-w-[1440px] mx-auto text-center relative z-10 space-y-4">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 border border-white text-white backdrop-blur-md">
              <Sparkles size={14} className="text-white" />
              <span className="text-[11px] font-black uppercase tracking-widest">
                {isHi ? 'आधिकारिक फोटो संग्रह' : 'Official Media Archive'}
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-headline font-black text-white tracking-tight leading-tight drop-shadow-sm">
              {isHi ? 'जनसेवा व क्षेत्र भ्रमण की झलकियां' : 'Photo Gallery & Field Chronicles'}
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p className="text-sm sm:text-base md:text-lg text-amber-100 font-bold max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
              {isHi
                ? 'धनबाद और झरिया के विकास, खनिकों के अधिकारों और आम जनता के साथ निरंतर संवाद के ऐतिहासिक पल।'
                : 'A curated visual record of public dialogues, labor union advocacy, and civic initiatives across Dhanbad and Jharia.'}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Filter & Grid Container */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 mt-8 sm:mt-12">
        {/* Category Filters */}
        <Reveal>
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 gap-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key as any)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all whitespace-nowrap shrink-0 shadow-sm ${
                  activeCategory === cat.key
                    ? 'bg-gradient-to-r from-[#ff7e54] to-[#e56233] text-white shadow-orange-500/20 scale-105'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Counter Info */}
        <div className="flex items-center justify-between text-xs text-slate-500 my-4 sm:my-6 font-semibold px-1">
          <span>{isHi ? `कुल ${filteredPhotos.length} तस्वीरें उपलब्ध` : `Showing ${filteredPhotos.length} photographs`}</span>
          <span className="text-amber-600 font-bold">{isHi ? 'उच्च गुणवत्ता संग्रह' : 'High Resolution Archive'}</span>
        </div>

        {/* Photo Grid (Responsive across mobile 1-col, tablet 2-col, desktop 3/4-col) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {filteredPhotos.map((photo, index) => (
            <Reveal key={photo.id} delay={index * 40}>
              <div 
                onClick={() => openLightbox(index)}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col h-full"
              >
                {/* Image Container with Zoom */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                  <img 
                    src={photo.image} 
                    alt={isHi ? photo.titleHi : photo.titleEn} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-300" />
                  
                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/40 backdrop-blur-[2px]">
                    <div className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                      <Maximize2 size={20} className="text-[#ff7e54]" />
                    </div>
                  </div>

                  {/* Location & Date Badge */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[10px] text-white font-bold pointer-events-none">
                    <span className="bg-slate-900/80 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10 flex items-center gap-1">
                      <MapPin size={10} className="text-amber-400" />
                      <span className="truncate max-w-[120px]">{isHi ? photo.locationHi : photo.locationEn}</span>
                    </span>
                    <span className="bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full">
                      {photo.date}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-2">
                  <h3 className="font-headline font-bold text-sm sm:text-base text-slate-900 leading-snug group-hover:text-[#ff7e54] transition-colors line-clamp-2">
                    {isHi ? photo.titleHi : photo.titleEn}
                  </h3>
                  <p className="text-xs text-slate-500 font-body line-clamp-2 leading-relaxed">
                    {isHi ? photo.descHi : photo.descEn}
                  </p>
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-[#ff7e54]">
                    <span>{isHi ? 'बड़ा करके देखें' : 'Click to Expand'}</span>
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredPhotos[lightboxIndex] && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center bg-slate-950/95 backdrop-blur-md animate-in fade-in duration-200">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[160] w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all"
            aria-label="Close image viewer"
          >
            <X size={22} />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-2 sm:left-6 z-[160] w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-2 sm:right-6 z-[160] w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all"
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>

          {/* Lightbox Content Container */}
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="max-w-5xl w-full max-h-[92vh] flex flex-col items-center px-4 overflow-y-auto no-scrollbar"
          >
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-black max-h-[68vh] flex items-center justify-center">
              <img 
                src={filteredPhotos[lightboxIndex].image} 
                alt={isHi ? filteredPhotos[lightboxIndex].titleHi : filteredPhotos[lightboxIndex].titleEn} 
                className="max-h-[68vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Caption Card */}
            <div className="w-full bg-slate-900/90 border border-white/10 rounded-2xl p-4 sm:p-6 text-white mt-4 space-y-2 backdrop-blur-md text-left">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-amber-400 font-bold uppercase tracking-wider">
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} />
                  {isHi ? filteredPhotos[lightboxIndex].locationHi : filteredPhotos[lightboxIndex].locationEn}
                </span>
                <span className="text-slate-400">
                  {filteredPhotos[lightboxIndex].date} · {lightboxIndex + 1} / {filteredPhotos.length}
                </span>
              </div>
              <h2 className="text-base sm:text-xl font-headline font-bold text-white">
                {isHi ? filteredPhotos[lightboxIndex].titleHi : filteredPhotos[lightboxIndex].titleEn}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-body leading-relaxed">
                {isHi ? filteredPhotos[lightboxIndex].descHi : filteredPhotos[lightboxIndex].descEn}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
