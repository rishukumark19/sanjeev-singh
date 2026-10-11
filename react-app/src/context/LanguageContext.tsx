import { createContext, useContext, useState, type ReactNode } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be inside LanguageProvider');
  return ctx;
};

// ─────────────────────────────────────────────
// TRANSLATIONS
// ─────────────────────────────────────────────
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.videos': 'Videos',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'nav.subtitle': 'Former MLA · Jharia',
    'nav.call': 'Call',
    'nav.menu': 'Menu',
    'nav.location': 'Dhanbad · Jharkhand',

    // Home
    'home.slide1.title': 'Upholding Labor Dignity',
    'home.slide1.sub': 'Working tirelessly for the welfare of the coal belt workforce in Dhanbad.',
    'home.slide2.title': 'The Voice of the People',
    'home.slide2.sub': 'Strong leadership backed by decades of community support and public service.',
    'home.slide3.title': 'Progressive Governance',
    'home.slide3.sub': 'Spearheading robust infrastructure and direct citizen engagement.',
    'home.slide4.title': 'A New Era of Development',
    'home.slide4.sub': 'Connecting rural townships through dedicated and funded road initiatives.',
    'home.slide5.title': 'A Legacy of Trust',
    'home.slide5.sub': 'Continuing a generational commitment to the people of Jharia.',

    'home.about.tag': 'About',
    'home.about.title1': 'Sanjeev ',
    'home.about.title2': 'Singh',
    'home.about.p1': 'Sanjeev Singh is a dedicated leader and social worker from Dhanbad, Jharkhand. Coming from the prestigious "Singh Mansion," his family has a deep-rooted history of serving the public for generations.',
    'home.about.p2': 'As a former MLA of Jharia, Sanjeev Singh has been instrumental in spearheading infrastructure development, labor welfare, and community engagement. His vision is defined by transparency and direct service to every citizen of the region.',
    'home.about.cta': 'Learn More',

    'home.stats.years': '10+',
    'home.stats.years_label': 'Years of Service',
    'home.stats.lives': '1000+',
    'home.stats.lives_label': 'Lives Impacted',
    'home.stats.voice': 'Voice of Jharia',
    'home.stats.voice_label': 'Unwavering Support',
    'home.stats.initiatives': '500+',
    'home.stats.initiatives_label': 'Local Initiatives',

    'home.legacy.tag': 'Our Roots',
    'home.legacy.title': 'A Legacy of Leadership',
    'home.legacy.p': 'Born and raised in the coal belt of Jharkhand, Sanjeev Singh has spent decades understanding the heartbeat of Dhanbad. His work with the Janta Mazdoor Sangh isn\'t just about labor rights—it\'s about the dignity of the people who power our nation.',
    'home.legacy.cta': 'Read the Full Biography',

    'home.gallery.tag': 'Visual Journey',
    'home.gallery.title': 'Field Visits & Public Programs',
    'home.gallery.cta': 'View All Photos',

    'home.social.tag': 'Digital Presence',
    'home.social.title': 'Social Media Hub',
    'home.social.fb_name': 'Sanjeev Singh',
    'home.social.fb_sub': 'Live Facebook Feed',
    'home.social.x_name': 'Sanjeev Singh',
    'home.social.x_post': 'Discussed the upcoming connectivity reforms with local authority members today. A big step forward for the Jharia constituency.',
    'home.social.x_cta': 'Follow on X',
    'home.social.ig_name': 'Sanjeev Singh',
    'home.social.ig_sub': 'Official Instagram',
    'home.social.ig_post': 'Community interactions always give me the greatest strength.',
    'home.social.ig_cta': 'View on Instagram',
    'home.social.ig_hover': 'Follow for updates',

    'home.map.tag': 'Our Landmark',
    'home.map.title1': 'Visit Our ',
    'home.map.title2': 'Office',
    'home.map.address': 'Singh Mansion, Dhanbad, Jharkhand',

    // About
    'about.tag': 'Leadership & Legacy',
    'about.heading': 'Sanjeev Singh : An Introduction',
    'about.heading_sub': 'Former MLA · Jharia Constituency | Trade Union Leader · Janta Mazdoor Sangh',
    'about.title': 'A Life Dedicated to the People of Dhanbad',
    'about.profile_title': 'Profile & Quick Facts',
    'about.dob_label': 'Date of Birth',
    'about.dob_val': '5 February 1986 · Sindri (Dhanbad), Jharkhand',
    'about.parents_label': 'Parents',
    'about.parents_val': 'Late Suryadeo Singh & Smt. Kunti Singh',
    'about.residence_label': 'Residence',
    'about.residence_val': 'Singh Mansion, Dhanbad, Jharkhand',
    'about.constituency_label': 'Constituency',
    'about.constituency_val': 'Jharia, Jharkhand (MLA 2014 – 2019)',
    'about.union_label': 'Labor Union',
    'about.union_val': 'Janta Mazdoor Sangh (BCCL Workers)',
    'about.origins.title': 'Origins and Early Life',
    'about.origins.p1': 'Born on February 5, 1986, in Sindri, Dhanbad, Sanjeev Suryadeo Singh\'s life was shaped by the rhythmic pulse of industrial labor and the profound responsibilities of local leadership. He completed his secondary education from Jamalpur Ballia in the year 2000, and further pursued his higher secondary education at the prestigious Dehradun Public School.',
    'about.origins.p2': 'He originates from a family that has long been synonymous with the political and social movements in Jharkhand. As the son of the late Suryadeo Singh—a formidable trade union leader, visionary socialist, and former legislator—and Smt. Kunti Singh (former MLA), Sanjeev inherited a deep generational legacy of grassroots public service and mass empowerment.',
    'about.quote': '"The strength of Dhanbad lies not just in its coal, but in the unyielding resilience of its workers. Our mandate is to protect that resilience and ensure justice for every family."',
    'about.career.title': 'Political Career & Union Leadership',
    'about.career.p1': 'A prominent leader of the Janta Mazdoor Sangh, Sanjeev Singh has been a staunch advocate for the rights and welfare of workers across Bharat Coking Coal Limited (BCCL). His union leadership centers on securing equitable wages, occupational health safety, and guaranteed medical and social welfare benefits for thousands of miners who risk their lives daily.',
    'about.career.p2': 'His grassroots commitment propelled him to the forefront of regional state politics. Contesting the 2014 Jharkhand Legislative Assembly elections from the Jharia constituency as a nominee of the Bharatiya Janata Party (BJP), Sanjeev Singh secured a resounding victory with a decisive margin of 33,692 votes.',
    'about.career.p3': 'During his legislative tenure, he spearheaded essential development initiatives throughout Jharia—ranging from connecting remote rural habitations with concrete roadways, expanding clean drinking water pipelines, and establishing upgraded educational and civic facilities.',
    'about.legacy.title': 'Continuing the Legacy at Singh Mansion',
    'about.legacy.p1': 'Today, he continues his public service from the iconic Singh Mansion in Dhanbad, the historic epicenter of the region\'s labor solidarity and civic movements. Day after day, hundreds of workers, families, and constituents visit to seek guidance, resolve grievances, and voice their needs.',
    'about.legacy.p2': 'Through persistent community engagement, charitable outreach, and uncompromising union representation, Sanjeev Singh remains dedicated to the socio-economic empowerment of the working class and the comprehensive progress of Dhanbad.',
    'about.cta': 'Explore Photo Gallery',

    // Press
    'press.tag': 'Official Social Newsroom',
    'press.title1': 'LIVE',
    'press.title2': 'UPDATES',
    'press.sub': 'A real-time broadcast of initiatives, events, and announcements, synced directly from Sanjeev Singh\'s official Facebook desk. No manual updates required.',
    'press.timeline': 'Official Timeline',
    'press.powered': 'Powered by Facebook Live Connect',
    'press.stream': 'Direct Stream Active',
    'press.archive': 'OPEN FACEBOOK ARCHIVE',
    'press.back': 'Return to Dashboard',

    // Videos
    'videos.tag': 'Media highlights',
    'videos.title': 'Video Insights',
    'videos.sub': 'Speeches, community discussions, and media interactions showcasing Sanjeev Singh\'s leadership.',
    'videos.v1': 'Public Address at Jharia Ground',
    'videos.v1_date': 'January 2024',
    'videos.v2': 'Listening to Citizen Grievances',
    'videos.v2_date': 'December 2023',
    'videos.v3': 'Inauguration of Digital Library',
    'videos.v3_date': 'November 2023',
    'videos.back': 'Return to Home',

    // Gallery
    'gallery.tag': 'Social Feed',
    'gallery.title1': 'Latest',
    'gallery.title2': 'Updates',
    'gallery.sub': 'Latest updates and announcements directly from our official Facebook feed.',
    'gallery.feed': 'Latest Photo Feed',
    'gallery.stream': 'Direct Stream',
    'gallery.home': 'HOME DASHBOARD',
    
    // Photos
    'photos.tag': 'Image Archive',
    'photos.title1': 'Photo',
    'photos.title2': 'Gallery',
    'photos.feed': 'Visual Journey',

    // Contact
    'contact.tag': 'Get In Touch',
    'contact.title': 'Contact Sanjeev Singh',
    'contact.sub': 'Reach out to the office of Sanjeev Singh for queries, support, and public office interactions.',
    'contact.direct': 'Direct',
    'contact.chambers': 'Official Chambers',
    'contact.office': 'Main Office',
    'contact.address': 'Singh Mansion, Janta Mazdoor Sangh Office, Dhanbad, Jharkhand, India',
    'contact.email_title': 'Email Inquiries',
    'contact.phone_title': 'Public Helpline',
    'contact.map': 'Location Map',
    'contact.form_title': 'Write a Message',
    'contact.name': 'Full Name',
    'contact.name_ph': 'Your name',
    'contact.email': 'Email',
    'contact.email_ph': 'Your email address',
    'contact.subject': 'Subject',
    'contact.subject_ph': 'Subject of your message',
    'contact.message': 'Message',
    'contact.message_ph': 'How can we help you?',
    'contact.submit': 'Submit Request',

    // Footer
    'footer.name': 'Sanjeev Singh',
    'footer.desc': 'A voice for the workers, a vision for the youth, and a lifetime of service for Dhanbad. Join us in shaping the future of Jharkhand.',
    'footer.office': 'Janta Mazdoor Sangh Office, Dhanbad',
    'footer.quick_links': 'Quick Links',
    'footer.bio': 'Biography',
    'footer.initiatives': 'Initiatives',
    'footer.gallery': 'Updates',
    'footer.contact': 'Contact',
    'footer.connect': 'Connect with Us',
    'footer.name_ph': 'Your Name',
    'footer.email_ph': 'Email Address',
    'footer.message_ph': 'Your Message',
    'footer.send': 'Send Message',
    'footer.dev_by': 'Developed and Maintained by CrossTech',
    'footer.rights': 'All Rights Reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.press_kit': 'Press Kit',
  },

  hi: {
    // Nav
    'nav.home': 'होम',
    'nav.about': 'परिचय',
    'nav.videos': 'वीडियो',
    'nav.gallery': 'गैलरी',
    'nav.contact': 'संपर्क',
    'nav.subtitle': 'पूर्व विधायक · झरिया',
    'nav.call': 'कॉल',
    'nav.menu': 'मेनू',
    'nav.location': 'धनबाद · झारखंड',

    // Home
    'home.slide1.title': 'श्रम की गरिमा को बनाए रखना',
    'home.slide1.sub': 'धनबाद के कोयला पट्टी कार्यबल के कल्याण के लिए अथक प्रयास।',
    'home.slide2.title': 'जनता की आवाज़',
    'home.slide2.sub': 'दशकों के सामुदायिक समर्थन और जनसेवा द्वारा समर्थित मजबूत नेतृत्व।',
    'home.slide3.title': 'प्रगतिशील शासन',
    'home.slide3.sub': 'मजबूत बुनियादी ढांचे और सीधे नागरिक जुड़ाव की अगुवाई।',
    'home.slide4.title': 'विकास का नया युग',
    'home.slide4.sub': 'समर्पित और वित्तपोषित सड़क पहलों के माध्यम से ग्रामीण कस्बों को जोड़ना।',
    'home.slide5.title': 'विश्वास की विरासत',
    'home.slide5.sub': 'झरिया के लोगों के प्रति पीढ़ियों की प्रतिबद्धता को जारी रखना।',

    'home.about.tag': 'परिचय',
    'home.about.title1': 'संजीव ',
    'home.about.title2': 'सिंह',
    'home.about.p1': 'संजीव सिंह धनबाद, झारखंड के एक समर्पित नेता और समाजसेवी हैं। प्रतिष्ठित "सिंह मेंशन" से आने वाले उनके परिवार का पीढ़ियों से जनसेवा का गहरा इतिहास रहा है।',
    'home.about.p2': 'झरिया के पूर्व विधायक के रूप में, संजीव सिंह ने बुनियादी ढांचा विकास, श्रम कल्याण और सामुदायिक जुड़ाव में महत्वपूर्ण भूमिका निभाई है। उनकी दृष्टि पारदर्शिता और क्षेत्र के प्रत्येक नागरिक की सीधी सेवा से परिभाषित है।',
    'home.about.cta': 'और जानें',

    'home.stats.years': '१०+',
    'home.stats.years_label': 'सेवा के वर्ष',
    'home.stats.lives': '१०००+',
    'home.stats.lives_label': 'प्रभावित जीवन',
    'home.stats.voice': 'झरिया की आवाज़',
    'home.stats.voice_label': 'अटूट समर्थन',
    'home.stats.initiatives': '५००+',
    'home.stats.initiatives_label': 'स्थानीय पहल',

    'home.legacy.tag': 'हमारी जड़ें',
    'home.legacy.title': 'नेतृत्व की विरासत',
    'home.legacy.p': 'झारखंड के कोयला पट्टी में जन्मे और पले-बढ़े, संजीव सिंह ने दशकों से धनबाद की धड़कन को समझा है। जनता मज़दूर संघ के साथ उनका काम सिर्फ श्रम अधिकारों के बारे में नहीं है—यह उन लोगों की गरिमा के बारे में है जो हमारे राष्ट्र को शक्ति देते हैं।',
    'home.legacy.cta': 'पूरी जीवनी पढ़ें',

    'home.gallery.tag': 'दृश्य यात्रा',
    'home.gallery.title': 'क्षेत्र भ्रमण और सार्वजनिक कार्यक्रम',
    'home.gallery.cta': 'सभी फ़ोटो देखें',

    'home.social.tag': 'डिजिटल उपस्थिति',
    'home.social.title': 'सोशल मीडिया हब',
    'home.social.fb_name': 'संजीव सिंह',
    'home.social.fb_sub': 'लाइव फेसबुक फ़ीड',
    'home.social.x_name': 'संजीव सिंह',
    'home.social.x_post': 'आज स्थानीय प्राधिकरण सदस्यों के साथ आगामी कनेक्टिविटी सुधारों पर चर्चा की। झरिया निर्वाचन क्षेत्र के लिए एक बड़ा कदम।',
    'home.social.x_cta': 'X पर फॉलो करें',
    'home.social.ig_name': 'संजीव सिंह',
    'home.social.ig_sub': 'आधिकारिक इंस्टाग्राम',
    'home.social.ig_post': 'सामुदायिक बातचीत मुझे हमेशा सबसे बड़ी ताकत देती है।',
    'home.social.ig_cta': 'इंस्टाग्राम पर देखें',
    'home.social.ig_hover': 'अपडेट के लिए फॉलो करें',

    'home.map.tag': 'हमारा स्थान',
    'home.map.title1': 'हमारा ',
    'home.map.title2': 'कार्यालय',
    'home.map.address': 'सिंह मेंशन, धनबाद, झारखंड',

    // About
    'about.tag': 'नेतृत्व और विरासत',
    'about.heading': 'संजीव सिंह : एक परिचय',
    'about.heading_sub': 'पूर्व विधायक · झरिया विधानसभा क्षेत्र | ट्रेड यूनियन नेता · जनता मजदूर संघ',
    'about.title': 'धनबाद की जनता को समर्पित एक जीवन',
    'about.profile_title': 'संक्षिप्त परिचय एवं विवरण',
    'about.dob_label': 'जन्म तिथि',
    'about.dob_val': '5 फरवरी 1986 · सिंदरी (धनबाद), झारखंड',
    'about.parents_label': 'माता-पिता',
    'about.parents_val': 'स्व. सूर्यदेव सिंह एवं श्रीमती कुंती सिंह',
    'about.residence_label': 'निवास स्थान',
    'about.residence_val': 'सिंह मेंशन, धनबाद, झारखंड',
    'about.constituency_label': 'विधानसभा क्षेत्र',
    'about.constituency_val': 'झरिया, झारखंड (विधायक 2014 – 2019)',
    'about.union_label': 'मजदूर संगठन',
    'about.union_val': 'जनता मजदूर संघ (BCCL खनिक यूनियन)',
    'about.origins.title': 'उत्पत्ति और प्रारंभिक जीवन',
    'about.origins.p1': '5 फरवरी 1986 को सिंदरी, धनबाद में जन्मे संजीव सूर्यदेव सिंह का जीवन औद्योगिक श्रम की लयबद्ध धड़कन और स्थानीय नेतृत्व की गहन जिम्मेदारियों से आकार पाया। उन्होंने वर्ष 2000 में उत्तर प्रदेश के जमालपुर बलिया से माध्यमिक शिक्षा पूरी की, और इसके पश्चात प्रतिष्ठित देहरादून पब्लिक स्कूल से उच्चतर माध्यमिक शिक्षा प्राप्त की।',
    'about.origins.p2': 'वे एक ऐसे परिवार से आते हैं जो लंबे समय से झारखंड में राजनीतिक और सामाजिक आंदोलनों का पर्याय रहा है। दिवंगत सूर्यदेव सिंह—एक दुर्जेय ट्रेड यूनियन नेता, समाजवादी चिंतक और पूर्व विधायक—और श्रीमती कुंती सिंह (पूर्व विधायक) के पुत्र के रूप में, संजीव को जन सशक्तिकरण और जनसेवा की समृद्ध विरासत मिली।',
    'about.quote': '"धनबाद की ताकत सिर्फ उसके कोयले में नहीं, बल्कि उसके श्रमिकों के अडिग साहस में निहित है। हमारा कर्तव्य उस साहस की रक्षा करना और हर परिवार को न्याय दिलाना है।"',
    'about.career.title': 'राजनीतिक करियर और यूनियन नेतृत्व',
    'about.career.p1': 'जनता मजदूर संघ के एक प्रमुख नेता के रूप में, संजीव सिंह भारत कोकिंग कोल लिमिटेड (BCCL) के श्रमिकों के अधिकारों और हितों के कट्टर संरक्षक रहे हैं। उनका यूनियन कार्य उचित पारिश्रमिक, कार्यस्थल सुरक्षा, और अपनी जान जोखिम में डालने वाले हजारों कोयला खनिकों के लिए व्यापक स्वास्थ्य और सामाजिक सुरक्षा लाभ सुनिश्चित करने पर केंद्रित रहा है।',
    'about.career.p2': 'उनकी जमीनी सक्रियता और लोकप्रियता ने उन्हें राज्य की राजनीति के केंद्र में ला खड़ा किया। 2014 के झारखंड विधानसभा चुनाव में उन्होंने भारतीय जनता पार्टी (BJP) के उम्मीदवार के रूप में झरिया विधानसभा सीट से चुनाव लड़ा और 33,692 मतों के ऐतिहासिक अंतर से प्रचंड जीत हासिल की।',
    'about.career.p3': 'विधायक के रूप में अपने कार्यकाल के दौरान, उन्होंने झरिया क्षेत्र में बुनियादी ढांचे के विकास, दूरदराज के क्षेत्रों तक पक्की सड़कों के निर्माण, शुद्ध पेयजल आपूर्ति और आधुनिक शैक्षणिक व नागरिक सुविधाओं के विस्तार के लिए कई युगांतरकारी योजनाएं शुरू कीं।',
    'about.legacy.title': 'सिंह मेंशन से लोकसेवा की अविरल धारा',
    'about.legacy.p1': 'आज भी, वे धनबाद स्थित ऐतिहासिक सिंह मेंशन से निरंतर जनसेवा और संगठनात्मक कार्य का संचालन करते हैं, जो दशकों से कोयलांचल के श्रम और सामाजिक आंदोलन का मुख्य केंद्र रहा है। प्रतिदिन सैकड़ों खनिक, ग्रामीण और क्षेत्रवासी अपनी समस्याओं और समाधान के लिए यहां पहुंचते हैं।',
    'about.legacy.p2': 'लगातार सामुदायिक संवाद, सामाजिक कल्याण कार्य और श्रमिकों के हितों की रक्षा के माध्यम से संजीव सिंह धनबाद और झरिया के समग्र विकास व श्रमिक सम्मान के लिए समर्पित हैं।',
    'about.cta': 'फोटो गैलरी देखें',

    // Press
    'press.tag': 'आधिकारिक सोशल न्यूज़रूम',
    'press.title1': 'लाइव',
    'press.title2': 'अपडेट',
    'press.sub': 'पहल, कार्यक्रमों और घोषणाओं का रियल-टाइम प्रसारण, सीधे संजीव सिंह के आधिकारिक फेसबुक से।',
    'press.timeline': 'आधिकारिक टाइमलाइन',
    'press.powered': 'फेसबुक लाइव कनेक्ट द्वारा संचालित',
    'press.stream': 'डायरेक्ट स्ट्रीम सक्रिय',
    'press.archive': 'फेसबुक आर्काइव खोलें',
    'press.back': 'डैशबोर्ड पर वापस',

    // Videos
    'videos.tag': 'मीडिया हाइलाइट्स',
    'videos.title': 'वीडियो इनसाइट्स',
    'videos.sub': 'भाषण, सामुदायिक चर्चाएँ और मीडिया इंटरैक्शन जो संजीव सिंह के नेतृत्व को प्रदर्शित करते हैं।',
    'videos.v1': 'झरिया मैदान में जनसभा',
    'videos.v1_date': 'जनवरी 2024',
    'videos.v2': 'नागरिक शिकायतों को सुनना',
    'videos.v2_date': 'दिसंबर 2023',
    'videos.v3': 'डिजिटल लाइब्रेरी का उद्घाटन',
    'videos.v3_date': 'नवंबर 2023',
    'videos.back': 'होम पर वापस',

    // Gallery
    'gallery.tag': 'नवीनतम फ़ीड',
    'gallery.title1': 'नवीनतम',
    'gallery.title2': 'अपडेट्स',
    'gallery.sub': 'हमारे आधिकारिक फेसबुक फ़ीड से सीधे नवीनतम अपडेट और घोषणाएं।',
    'gallery.feed': 'नवीनतम फ़ोटो फ़ीड',
    'gallery.stream': 'डायरेक्ट स्ट्रीम',
    'gallery.home': 'होम डैशबोर्ड',

    // Photos
    'photos.tag': 'छवि संग्रह',
    'photos.title1': 'फोटो',
    'photos.title2': 'गैलरी',
    'photos.feed': 'दृश्य यात्रा',

    // Contact
    'contact.tag': 'संपर्क करें',
    'contact.title': 'संजीव सिंह से संपर्क करें',
    'contact.sub': 'प्रश्नों, सहायता और जनकार्यालय संवाद के लिए संजीव सिंह के कार्यालय से संपर्क करें।',
    'contact.direct': 'प्रमुख',
    'contact.chambers': 'आधिकारिक कार्यालय',
    'contact.office': 'मुख्य कार्यालय',
    'contact.address': 'सिंह मेंशन, जनता मज़दूर संघ कार्यालय, धनबाद, झारखंड, भारत',
    'contact.email_title': 'ईमेल पूछताछ',
    'contact.phone_title': 'जन हेल्पलाइन',
    'contact.map': 'स्थान का नक्शा',
    'contact.form_title': 'संदेश लिखें',
    'contact.name': 'पूरा नाम',
    'contact.name_ph': 'आपका नाम',
    'contact.email': 'ईमेल',
    'contact.email_ph': 'आपका ईमेल पता',
    'contact.subject': 'विषय',
    'contact.subject_ph': 'आपके संदेश का विषय',
    'contact.message': 'संदेश',
    'contact.message_ph': 'हम आपकी कैसे सहायता कर सकते हैं?',
    'contact.submit': 'अनुरोध भेजें',

    // Footer
    'footer.name': 'संजीव सिंह',
    'footer.desc': 'श्रमिकों के लिए एक आवाज़, युवाओं के लिए एक दृष्टि, और धनबाद के लिए जीवन भर की सेवा। झारखंड के भविष्य को आकार देने में हमारे साथ जुड़ें।',
    'footer.office': 'जनता मज़दूर संघ कार्यालय, धनबाद',
    'footer.quick_links': 'त्वरित लिंक',
    'footer.bio': 'जीवनी',
    'footer.initiatives': 'पहल',
    'footer.gallery': 'अपडेट्स',
    'footer.contact': 'संपर्क',
    'footer.connect': 'हमसे जुड़ें',
    'footer.name_ph': 'आपका नाम',
    'footer.email_ph': 'ईमेल पता',
    'footer.message_ph': 'आपका संदेश',
    'footer.send': 'संदेश भेजें',
    'footer.dev_by': 'CrossTech द्वारा विकसित एवं अनुरक्षित',
    'footer.rights': 'सर्वाधिकार सुरक्षित।',
    'footer.privacy': 'प्राइवेसी पॉलिसी',
    'footer.terms': 'सेवा की शर्तें',
    'footer.press_kit': 'प्रेस किट',
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('en');

  const toggleLang = () => setLang((prev) => (prev === 'en' ? 'hi' : 'en'));

  const t = (key: string): string => {
    return translations[lang][key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
