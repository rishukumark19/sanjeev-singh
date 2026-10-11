import { Link } from 'react-router-dom';
import { Scale, FileCheck, AlertCircle, ShieldAlert, Award, Mail, ArrowLeft, CheckCircle2 } from 'lucide-react';
import Reveal from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';

const TermsConditions = () => {
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
                <Scale size={14} />
                {isHi ? 'आधिकारिक नियम एवं शर्तें' : 'Official Terms of Service'}
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="text-3xl md:text-6xl font-headline font-black leading-tight uppercase tracking-tight">
                {isHi ? 'नियम एवं शर्तें' : 'Terms & Conditions'}
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="text-white/70 text-base md:text-lg font-body mt-4 leading-relaxed">
                {isHi
                  ? `संजीव सिंह जी के आधिकारिक वेब पोर्टल का उपयोग करने से पहले कृपया इन सेवा शर्तों को ध्यानपूर्वक पढ़ें।`
                  : `Please read these terms and conditions carefully before utilizing or referencing materials on the official web portal of Sanjeev Singh.`}
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex flex-wrap items-center gap-4 mt-6 text-xs text-white/50 font-medium">
                <span>{isHi ? `अंतिम अद्यतन: वर्ष ${currentYear}` : `Last Updated: ${currentYear}`}</span>
                <span>•</span>
                <span>{isHi ? 'सक्षम न्यायालय: धनबाद, झारखंड' : 'Jurisdiction: Dhanbad, Jharkhand, India'}</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Main Terms Articles */}
          <div className="lg:col-span-8 space-y-8">

            {/* 1. Acceptance */}
            <Reveal>
              <div className="bg-white p-6 md:p-10 rounded-[2rem] border border-gray-150 shadow-sm space-y-4">
                <div className="flex items-center gap-3 text-[#ff7e54]">
                  <FileCheck size={22} />
                  <h2 className="text-xl md:text-2xl font-headline font-bold text-[#1a1a2e]">
                    {isHi ? '१. शर्तों की स्वीकृति' : '1. Acceptance of Terms'}
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {isHi
                    ? 'इस वेबसाइट (sanjeevsingh.in) का अवलोकन अथवा उपयोग करके आप इन नियमों और शर्तों का पूर्णतः पालन करने के लिए बाध्य हैं। यदि आप इन शर्तों से असहमत हैं, तो कृपया पोर्टल का उपयोग न करें।'
                    : 'By accessing, browsing, or utilizing the services provided on this official website, you acknowledge that you have read, understood, and agreed to be legally bound by these Terms and Conditions. If you do not accept these terms, you should refrain from using this website.'}
                </p>
              </div>
            </Reveal>

            {/* 2. Nature of Platform */}
            <Reveal delay={50}>
              <div className="bg-white p-6 md:p-10 rounded-[2rem] border border-gray-150 shadow-sm space-y-4">
                <div className="flex items-center gap-3 text-[#ff7e54]">
                  <Award size={22} />
                  <h2 className="text-xl md:text-2xl font-headline font-bold text-[#1a1a2e]">
                    {isHi ? '२. मंच की प्रकृति एवं जनसेवा उद्देश्य' : '2. Purpose of the Platform'}
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {isHi
                    ? 'यह पोर्टल एक गैर-व्यावसायिक जनसंपर्क मंच है, जिसका उद्देश्य पूर्व विधायक संजीव सिंह के सामाजिक कार्यों, विधानसभा क्षेत्र झरिया के विकास-कार्यों, प्रेस विज्ञप्तियों, तथा जनता मजदूर संघ के श्रमिक-हितैषी कार्यक्रमों की प्रामाणिक जानकारी आम जनता व मीडिया तक पहुँचाना है।'
                    : 'This website is a non-commercial, public information portal established to provide verified information regarding former MLA Sanjeev Singh’s legislative initiatives, public welfare programs, constituency development in Jharia, and labor welfare through the Janta Mazdoor Sangh.'}
                </p>
              </div>
            </Reveal>

            {/* 3. Intellectual Property */}
            <Reveal delay={100}>
              <div className="bg-white p-6 md:p-10 rounded-[2rem] border border-gray-150 shadow-sm space-y-4">
                <div className="flex items-center gap-3 text-[#ff7e54]">
                  <ShieldAlert size={22} />
                  <h2 className="text-xl md:text-2xl font-headline font-bold text-[#1a1a2e]">
                    {isHi ? '३. बौद्धिक संपदा एवं मीडिया उपयोग' : '3. Intellectual Property & Media Use'}
                  </h2>
                </div>
                <div className="space-y-3 text-sm md:text-base text-gray-600">
                  <p className="leading-relaxed">
                    {isHi
                      ? 'इस पोर्टल पर उपलब्ध फोटोग्राफ, वीडियो, लोगो, आधिकारिक भाषण व लिखित आलेख "संजीव सिंह कार्यालय" की बौद्धिक संपदा हैं या विधिवत अनुमति प्राप्त हैं।'
                      : 'All official photographs, audio-visual content, speeches, press releases, logos, and narrative biographies published on this portal are the intellectual property of the Office of Sanjeev Singh or used under authorized license.'}
                  </p>
                  <div className="p-4 bg-[#f8f9fa] rounded-xl border border-gray-100 space-y-2">
                    <p className="font-semibold text-[#1a1a2e]">
                      {isHi ? 'उचित उपयोग (Fair Use):' : 'Fair Use Permitted:'}
                    </p>
                    <p className="leading-relaxed text-xs md:text-sm">
                      {isHi
                        ? 'समाचार रिपोर्टिंग, शैक्षणिक अध्ययन, अथवा सकारात्मक जन-जागरूकता हेतु उचित संदर्भ (credit) देकर सामग्री का उपयोग किया जा सकता है। सामग्री का भ्रामक संपादन, मानहानिकारक उपयोग, या व्यावसायिक विपणन सख्त वर्जित है।'
                        : 'Authentic news reporting, scholarly analysis, or educational citations with clear attribution ("Office of Sanjeev Singh") are permitted. Unauthorized commercial sale, misleading modification, or defamatory usage is strictly prohibited.'}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* 4. User Conduct */}
            <Reveal delay={150}>
              <div className="bg-white p-6 md:p-10 rounded-[2rem] border border-gray-150 shadow-sm space-y-4">
                <div className="flex items-center gap-3 text-[#ff7e54]">
                  <AlertCircle size={22} />
                  <h2 className="text-xl md:text-2xl font-headline font-bold text-[#1a1a2e]">
                    {isHi ? '४. नागरिक आचरण एवं फॉर्म का उपयोग' : '4. User Conduct & Form Submissions'}
                  </h2>
                </div>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {isHi
                    ? 'संपर्क अथवा जनसुनवाई फॉर्म का उपयोग करते समय नागरिक निम्नलिखित आचरण का पालन करेंगे:'
                    : 'When interacting with public communication channels or submitting contact queries, users agree to adhere to the following standards:'}
                </p>
                <ul className="space-y-2.5 text-sm md:text-base text-gray-600">
                  {[
                    isHi
                      ? 'किसी भी प्रकार की अपमानजनक, सांप्रदायिक, अथवा गैर-कानूनी भाषा का प्रयोग न करें।'
                      : 'Refrain from submitting abusive, defamatory, harassing, or unlawful language.',
                    isHi
                      ? 'स्पैम, फर्जी पहचान, अथवा वायरस/मैलवेयरयुक्त सामग्री न भेजें।'
                      : 'Do not transmit unsolicited commercial spam, fraudulent impersonations, or harmful scripts.',
                    isHi
                      ? 'वेबसाइट के सर्वर अथवा सुरक्षा प्रणाली के साथ कोई अनधिकृत छेड़छाड़ न करें।'
                      : 'Do not attempt to compromise server infrastructure, bypass access controls, or engage in malicious scraping.',
                  ].map((rule, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 size={18} className="text-[#ff7e54] mt-0.5 shrink-0" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* 5. Disclaimer */}
            <Reveal delay={200}>
              <div className="bg-white p-6 md:p-10 rounded-[2rem] border border-gray-150 shadow-sm space-y-4">
                <div className="flex items-center gap-3 text-[#ff7e54]">
                  <Scale size={22} />
                  <h2 className="text-xl md:text-2xl font-headline font-bold text-[#1a1a2e]">
                    {isHi ? '५. सूचना की सटीकता एवं अस्वीकरण' : '5. Accuracy of Information & Disclaimers'}
                  </h2>
                </div>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {isHi
                    ? 'वेबसाइट पर प्रकाशित सभी सूचनाएं सद्भावपूर्वक जनहित में दी गई हैं। हम सूचनाओं को अद्यतन रखने का पूर्ण प्रयास करते हैं, तथापि बाहरी संदर्भों या तकनीकी त्रुटियों के लिए पूर्व सूचना के बिना सामग्री में संशोधन का अधिकार सुरक्षित रखते हैं।'
                    : 'While every effort is made to maintain verified and timely information, all content is published in good faith for informational purposes. The administrative office reserves the right to modify, amend, or update portal content without prior notice.'}
                </p>
              </div>
            </Reveal>

            {/* 6. Jurisdiction */}
            <Reveal delay={250}>
              <div className="bg-white p-6 md:p-10 rounded-[2rem] border border-gray-150 shadow-sm space-y-4">
                <div className="flex items-center gap-3 text-[#ff7e54]">
                  <Scale size={22} />
                  <h2 className="text-xl md:text-2xl font-headline font-bold text-[#1a1a2e]">
                    {isHi ? '६. लागू कानून एवं न्यायिक क्षेत्राधिकार' : '6. Governing Law & Jurisdiction'}
                  </h2>
                </div>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {isHi
                    ? 'ये नियम भारत के विधि-विधानों के अनुसार शासित एवं व्याख्यायित किए जाएंगे। इस वेबसाइट से उत्पन्न किसी भी विवाद का निपटारा केवल धनबाद, झारखंड के सक्षम न्यायालयों के क्षेत्राधिकार में होगा।'
                    : 'These terms are governed by and construed in accordance with the laws of the Republic of India. Any legal dispute or claim arising from the use of this portal shall be subject to the exclusive jurisdiction of the competent courts of Dhanbad, Jharkhand, India.'}
                </p>
              </div>
            </Reveal>

          </div>

          {/* Right Sidebar: Office & Legal Contact */}
          <div className="lg:col-span-4 space-y-6">
            <Reveal delay={100}>
              <div className="bg-[#1a1a2e] text-white p-6 md:p-8 rounded-[2rem] shadow-xl space-y-6">
                <div>
                  <span className="text-[10px] font-black text-[#ff7e54] uppercase tracking-widest">
                    {isHi ? 'विधिक एवं प्रशासनिक संपर्क' : 'Administrative Chambers'}
                  </span>
                  <h3 className="text-xl font-headline font-bold mt-1">
                    {isHi ? 'कार्यालय संजीव सिंह' : 'Office of Sanjeev Singh'}
                  </h3>
                </div>

                <div className="space-y-4 text-xs text-white/80">
                  <div className="flex items-start gap-3">
                    <Mail size={18} className="text-[#ff7e54] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">{isHi ? 'ईमेल' : 'Official Email'}</p>
                      <a href="mailto:office@sanjeevsingh.in" className="text-[#ff7e54] hover:underline">
                        office@sanjeevsingh.in
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-white">{isHi ? 'स्थान' : 'Secretariat Location'}</p>
                    <p className="text-white/70 mt-0.5">Singh Mansion, Dhanbad, Jharkhand - 826001</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 text-xs text-white/60">
                  {isHi
                    ? 'नियम व शर्तों से संबंधित किसी भी स्पष्टीकरण के लिए हमारे कार्यालय से संपर्क करें।'
                    : 'For any legal clarifications or authorized media inquiries, please connect with the secretariat.'}
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="bg-white p-6 rounded-[2rem] border border-gray-150 space-y-3">
                <h4 className="font-headline font-bold text-sm text-[#1a1a2e]">
                  {isHi ? 'अन्य नीतियां' : 'Other Policies'}
                </h4>
                <ul className="space-y-2 text-xs">
                  <li>
                    <Link to="/privacy" className="text-[#ff7e54] hover:underline flex items-center gap-1.5 font-semibold">
                      <span>{isHi ? 'गोपनीयता नीति (Privacy Policy)' : 'Privacy Policy'}</span>
                      <span>→</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-gray-600 hover:text-[#ff7e54] flex items-center gap-1.5">
                      <span>{isHi ? 'नागरिक संवाद' : 'Public Inquiries'}</span>
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

export default TermsConditions;
