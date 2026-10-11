import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, FileText, Mail, MapPin, ArrowLeft, CheckCircle, Globe } from 'lucide-react';
import Reveal from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';

const PrivacyPolicy = () => {
  const { lang } = useLanguage();
  const isHi = lang === 'hi';
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#f8f9fa] min-h-screen pt-[72px] pb-24 font-body text-[#1a1a2e]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="pt-6 pb-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-headline font-bold text-gray-500 hover:text-[#ff7e54] uppercase tracking-wider transition-colors"
          >
            <ArrowLeft size={16} />
            {isHi ? 'मुख्य पृष्ठ पर वापस जाएं' : 'Back to Home'}
          </Link>
        </div>

        {/* Hero Header */}
        <section className="bg-[#1a1a2e] text-white py-14 md:py-20 px-6 md:px-12 relative overflow-hidden rounded-[2.5rem] shadow-2xl mb-12">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#ff7e54]/10 -skew-x-12 translate-x-16 pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#ff7e54] text-xs font-headline font-black uppercase tracking-widest mb-6">
                <Shield size={14} />
                {isHi ? 'आधिकारिक गोपनीयता नीति' : 'Official Privacy Policy'}
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="text-3xl md:text-6xl font-headline font-black leading-tight uppercase tracking-tight">
                {isHi ? 'गोपनीयता नीति' : 'Privacy Policy'}
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="text-white/70 text-base md:text-lg font-body mt-4 leading-relaxed">
                {isHi
                  ? `संजीव सिंह (पूर्व विधायक - झरिया) के आधिकारिक वेब पोर्टल पर आपका स्वागत है। हम आपकी व्यक्तिगत जानकारी की सुरक्षा और पारदर्शिता के प्रति पूर्णतः प्रतिबद्ध हैं।`
                  : `Welcome to the official public portal of Sanjeev Singh (Former MLA - Jharia). We are committed to safeguarding citizen privacy and maintaining the highest standards of data transparency.`}
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex flex-wrap items-center gap-4 mt-6 text-xs text-white/50 font-medium">
                <span>{isHi ? `अंतिम अद्यतन: वर्ष ${currentYear}` : `Last Updated: ${currentYear}`}</span>
                <span>•</span>
                <span>{isHi ? 'लागू क्षेत्र: भारत एवं वैश्विक' : 'Jurisdiction: India'}</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Policy Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Content Articles */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* 1. Introduction */}
            <Reveal>
              <div className="bg-white p-6 md:p-10 rounded-[2rem] border border-gray-150 shadow-sm space-y-4">
                <div className="flex items-center gap-3 text-[#ff7e54]">
                  <Globe size={22} />
                  <h2 className="text-xl md:text-2xl font-headline font-bold text-[#1a1a2e]">
                    {isHi ? '१. प्रस्तावना एवं उद्देश्य' : '1. Overview & Purpose'}
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {isHi
                    ? 'यह आधिकारिक वेबसाइट संजीव सिंह जी के जनसेवा कार्यों, झरिया एवं धनबाद के विकास पहलों, प्रेस वक्तव्यों, और जनता मजदूर संघ के माध्यम से श्रमिक कल्याण की गतिविधियों की प्रामाणिक जानकारी साझा करने हेतु संचालित है। यह नीति बताती है कि जब आप इस पोर्टल पर आते हैं या हमसे संपर्क करते हैं, तो आपकी जानकारी का किस प्रकार संरक्षण किया जाता है।'
                    : 'This official website is maintained to share authentic information regarding the public service, infrastructure initiatives, community welfare, and legislative contributions of Sanjeev Singh, as well as worker welfare activities associated with Janta Mazdoor Sangh. This policy outlines how personal details and browsing information are protected when you visit this portal.'}
                </p>
              </div>
            </Reveal>

            {/* 2. Information Collected */}
            <Reveal delay={50}>
              <div className="bg-white p-6 md:p-10 rounded-[2rem] border border-gray-150 shadow-sm space-y-6">
                <div className="flex items-center gap-3 text-[#ff7e54]">
                  <FileText size={22} />
                  <h2 className="text-xl md:text-2xl font-headline font-bold text-[#1a1a2e]">
                    {isHi ? '२. हम कौन-सी जानकारी एकत्र करते हैं' : '2. Information We Collect'}
                  </h2>
                </div>
                <div className="space-y-4 text-sm md:text-base text-gray-600">
                  <div className="p-4 bg-[#f8f9fa] rounded-xl border border-gray-100">
                    <h3 className="font-headline font-bold text-[#1a1a2e] mb-1">
                      {isHi ? 'क. स्वेच्छा से दी गई संपर्क जानकारी' : 'A. Information Provided Voluntarily'}
                    </h3>
                    <p className="leading-relaxed">
                      {isHi
                        ? 'जब आप "हमसे जुड़ें" अथवा "संपर्क करें" फॉर्म भरते हैं, तो हम आपका नाम, ईमेल पता, मोबाइल नंबर, क्षेत्र/स्थान, और आपका संदेश एकत्र करते हैं।'
                        : 'When you fill out the contact or citizen communication forms, we collect details you submit voluntarily, including your name, email address, phone number, constituency/locality, and message contents.'}
                    </p>
                  </div>

                  <div className="p-4 bg-[#f8f9fa] rounded-xl border border-gray-100">
                    <h3 className="font-headline font-bold text-[#1a1a2e] mb-1">
                      {isHi ? 'ख. तकनीकी एवं ब्राउज़िंग डेटा' : 'B. Technical & Browsing Data'}
                    </h3>
                    <p className="leading-relaxed">
                      {isHi
                        ? 'साइट के सुचारू संचालन हेतु ब्राउज़र का प्रकार, ऑपरेटिंग सिस्टम, पृष्ठ दृश्य और सामान्य भौगोलिक क्षेत्र संबंधी अनाम (Anonymized) आंकड़े एकत्र होते हैं।'
                        : 'To maintain platform performance, security, and accessibility, standard anonymized metrics like device type, operating system, pages viewed, and general geographic region are automatically processed.'}
                    </p>
                  </div>

                  <div className="p-4 bg-[#f8f9fa] rounded-xl border border-gray-100">
                    <h3 className="font-headline font-bold text-[#1a1a2e] mb-1">
                      {isHi ? 'ग. सोशल मीडिया व बाहरी प्लगइन्स' : 'C. Embedded Social Media Plugins'}
                    </h3>
                    <p className="leading-relaxed">
                      {isHi
                        ? 'फेसबुक पेज टाइमलाइन, एक्स (ट्विटर), और गूगल मैप्स जैसे प्लगइन संबंधित कंपनियों की अपनी नीतियों के तहत संचालित होते हैं।'
                        : 'Third-party social widgets (such as the Facebook Page plugin, X embeds, and Google Maps) operate directly under their respective platform privacy terms.'}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* 3. Use of Information */}
            <Reveal delay={100}>
              <div className="bg-white p-6 md:p-10 rounded-[2rem] border border-gray-150 shadow-sm space-y-4">
                <div className="flex items-center gap-3 text-[#ff7e54]">
                  <Eye size={22} />
                  <h2 className="text-xl md:text-2xl font-headline font-bold text-[#1a1a2e]">
                    {isHi ? '३. जानकारी का उपयोग' : '3. How We Use Your Information'}
                  </h2>
                </div>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {isHi
                    ? 'एकत्र की गई जानकारी का उपयोग केवल निम्नलिखित कार्यों के लिए किया जाता है:'
                    : 'Information gathered through this website is strictly utilized for legitimate public engagement and service purposes:'}
                </p>
                <ul className="space-y-2.5 text-sm md:text-base text-gray-600">
                  {[
                    isHi
                      ? 'नागरिकों की समस्याओं, ज्ञापनों और सुझावों का यथोचित निवारण करना।'
                      : 'Responding to citizen petitions, community grievances, and public welfare inquiries.',
                    isHi
                      ? 'झरिया व धनबाद क्षेत्र के विकास एवं सामाजिक कार्यक्रमों की सूचना साझा करना।'
                      : 'Sharing official updates regarding developmental and social initiatives across Jharia and Dhanbad.',
                    isHi
                      ? 'वेबसाइट की तकनीकी सुरक्षा बनाए रखना तथा अनधिकृत गतिविधियों को रोकना।'
                      : 'Maintaining digital security, preventing malicious spam, and optimizing portal performance.',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle size={18} className="text-green-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* 4. Non-disclosure & Confidentiality */}
            <Reveal delay={150}>
              <div className="bg-white p-6 md:p-10 rounded-[2rem] border border-gray-150 shadow-sm space-y-4">
                <div className="flex items-center gap-3 text-[#ff7e54]">
                  <Lock size={22} />
                  <h2 className="text-xl md:text-2xl font-headline font-bold text-[#1a1a2e]">
                    {isHi ? '४. गोपनीयता की गारंटी एवं गैर-व्यावसायिक नीति' : '4. Data Protection & Non-Commercial Commitment'}
                  </h2>
                </div>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {isHi
                    ? 'हम किसी भी व्यावसायिक विज्ञापनदाता या डेटा ब्रोकर को नागरिकों का व्यक्तिगत डेटा कभी नहीं बेचते, किराए पर नहीं देते और न ही साझा करते हैं। संपर्क विवरण केवल अधिकृत कार्यालय प्रतिनिधियों द्वारा जनसमस्या समाधान के लिए ही देखा जा सकता है।'
                    : 'We do not sell, rent, monetize, or disclose your personal data to commercial advertisers or third-party marketing brokers. Citizen details are restricted strictly to authorized office representatives for public service and grievance coordination.'}
                </p>
              </div>
            </Reveal>

            {/* 5. Cookies Policy */}
            <Reveal delay={200}>
              <div className="bg-white p-6 md:p-10 rounded-[2rem] border border-gray-150 shadow-sm space-y-4">
                <div className="flex items-center gap-3 text-[#ff7e54]">
                  <Shield size={22} />
                  <h2 className="text-xl md:text-2xl font-headline font-bold text-[#1a1a2e]">
                    {isHi ? '५. कुकीज़ नीति' : '5. Cookies & Local Storage'}
                  </h2>
                </div>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {isHi
                    ? 'यह पोर्टल केवल भाषा चयन (हिंदी/अंग्रेजी) जैसी आवश्यक प्राथमिकताओं को याद रखने के लिए सुरक्षित स्थानीय भंडारण का उपयोग करता है। आप अपने ब्राउज़र की सेटिंग्स में जाकर किसी भी समय कुकीज़ को अक्षम कर सकते हैं।'
                    : 'This portal uses minimal essential session data solely to retain user interface preferences (such as Hindi/English language choice) and ensure site security. You can adjust your browser preferences at any time to restrict or delete cookies.'}
                </p>
              </div>
            </Reveal>

            {/* 6. Jurisdiction & Law */}
            <Reveal delay={250}>
              <div className="bg-white p-6 md:p-10 rounded-[2rem] border border-gray-150 shadow-sm space-y-4">
                <div className="flex items-center gap-3 text-[#ff7e54]">
                  <FileText size={22} />
                  <h2 className="text-xl md:text-2xl font-headline font-bold text-[#1a1a2e]">
                    {isHi ? '६. कानूनी अधिकार एवं भारतीय सूचना प्रौद्योगिकी अधिनियम' : '6. Legal Compliance under Indian Law'}
                  </h2>
                </div>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {isHi
                    ? 'यह नीति भारतीय सूचना प्रौद्योगिकी अधिनियम, २००० (Information Technology Act, 2000) तथा डिजिटल व्यक्तिगत डेटा संरक्षण कानून के अंतर्गत संचालित है।'
                    : 'This Privacy Policy is framed and enforced in accordance with applicable laws of the Republic of India, including the Information Technology Act, 2000 and the Digital Personal Data Protection Act.'}
                </p>
              </div>
            </Reveal>

          </div>

          {/* Right Sidebar: Contact & Office Summary */}
          <div className="lg:col-span-4 space-y-6">
            <Reveal delay={100}>
              <div className="bg-[#1a1a2e] text-white p-6 md:p-8 rounded-[2rem] shadow-xl space-y-6">
                <div>
                  <span className="text-[10px] font-black text-[#ff7e54] uppercase tracking-widest">
                    {isHi ? 'कार्यालय संपर्क' : 'Official Secretariat'}
                  </span>
                  <h3 className="text-xl font-headline font-bold mt-1">
                    {isHi ? 'सिंह मेंशन कार्यालय' : 'Office of Sanjeev Singh'}
                  </h3>
                </div>

                <div className="space-y-4 text-xs text-white/80">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-[#ff7e54] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">{isHi ? 'पता' : 'Address'}</p>
                      <p className="text-white/70 mt-0.5">Singh Mansion, Dhanbad, Jharkhand - 826001, India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail size={18} className="text-[#ff7e54] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">{isHi ? 'ईमेल' : 'Email'}</p>
                      <a href="mailto:office@sanjeevsingh.in" className="text-[#ff7e54] hover:underline">
                        office@sanjeevsingh.in
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 text-xs text-white/60">
                  {isHi
                    ? 'यदि आपके पास इस नीति या अपने व्यक्तिगत डेटा के संबंध में कोई प्रश्न है, तो सीधे हमारे कार्यालय से संपर्क करें।'
                    : 'If you have questions regarding this privacy statement or wish to update any submitted details, reach out to our office directly.'}
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="bg-white p-6 rounded-[2rem] border border-gray-150 space-y-3">
                <h4 className="font-headline font-bold text-sm text-[#1a1a2e]">
                  {isHi ? 'संबंधित दस्तावेज़' : 'Related Documents'}
                </h4>
                <ul className="space-y-2 text-xs">
                  <li>
                    <Link to="/terms" className="text-[#ff7e54] hover:underline flex items-center gap-1.5 font-semibold">
                      <span>{isHi ? 'सेवा की शर्तें (Terms of Service)' : 'Terms of Service'}</span>
                      <span>→</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-gray-600 hover:text-[#ff7e54] flex items-center gap-1.5">
                      <span>{isHi ? 'संपर्क एवं जनसुनवाई' : 'Citizen Contact Chambers'}</span>
                      <span>→</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>

        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;
