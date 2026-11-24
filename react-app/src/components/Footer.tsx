import { Link } from 'react-router-dom';
import { Landmark, ArrowRight, MapPin, ExternalLink, ShieldCheck, Home, User, Image, Newspaper } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Logo from './Logo';

const Footer = () => {
  const { lang, t } = useLanguage();
  const isHi = lang === 'hi';
  
  const quickLinks = [
    { label: t('nav.home'), to: '/', icon: Home },
    { label: t('footer.bio'), to: '/about', icon: User },
    { label: t('nav.gallery'), to: '/gallery', icon: Image },
    { label: isHi ? 'समाचार व विज्ञप्ति' : 'Press & Bulletins', to: '/press', icon: Newspaper },
    { label: isHi ? 'प्राइवेसी पॉलिसी' : 'Privacy Policy', to: '/privacy', icon: ShieldCheck },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#fff7ed] via-white to-[#fff1e6] text-slate-800 w-full pt-10 sm:pt-14 md:pt-16 pb-8 font-body border-t-4 border-[#ff7e54]">
      {/* Tricolor Accent Ribbon */}
      <div className="h-[3px] w-full tricolor-stripe mb-8 sm:mb-12 -mt-10 sm:-mt-14 md:-mt-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-10 sm:mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5">
            <div className="flex items-center gap-3 sm:gap-3.5">
              <Logo size="lg" showBadge />
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-headline font-black text-slate-900 uppercase tracking-wider leading-none">
                  {isHi ? 'संजीव सिंह' : 'SANJEEV SINGH'}
                </h2>
                <p className="text-[11px] sm:text-xs text-[#ff7e54] font-black tracking-wider uppercase mt-1 flex items-center gap-1.5 flex-wrap">
                  <span>{isHi ? 'पूर्व विधायक · झरिया' : 'Former MLA · Jharia'}</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-emerald-700">{isHi ? 'धनबाद' : 'Dhanbad'}</span>
                </p>
              </div>
            </div>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-md font-normal">
              {isHi 
                ? 'कोयलांचल के कामगारों, युवाओं एवं समस्त क्षेत्रवासियों के अधिकारों, मान-सम्मान और सर्वांगीण विकास के लिए अनवरत समर्पित लोकसेवा।'
                : 'Steadfast public service, upholding the dignity of coal belt workers and championing comprehensive development across Dhanbad.'}
            </p>

            {/* Union & Constituency Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-50 border border-[#ff7e54]/30 text-[#ff7e54] text-xs font-bold shadow-xs">
                <Landmark size={13} className="text-[#ff7e54]" />
                <span>{isHi ? 'जनता मजदूर संघ (संबद्ध)' : 'Janta Mazdoor Sangh'}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold">
                <MapPin size={13} className="text-slate-500" />
                <span>{isHi ? 'सिंह मेंशन · धनबाद' : 'Singh Mansion · Dhanbad'}</span>
              </div>
            </div>

            {/* Mobile Official Facebook Connect Pill (Highly requested for quick mobile reach) */}
            <div className="pt-1 block md:hidden">
              <a
                href="https://www.facebook.com/profile.php?id=100069661650642"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-blue-50/80 hover:bg-blue-50 border border-blue-200 text-blue-700 transition-colors shadow-xs group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-xs">
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-headline font-bold text-slate-900 block leading-tight">
                      Sanjeev Singh Official
                    </span>
                    <span className="text-[10px] text-blue-600 font-semibold">
                      {isHi ? 'फेसबुक पेज से जुड़ें' : 'Connect on Facebook'}
                    </span>
                  </div>
                </div>
                <ExternalLink size={14} className="text-blue-500 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
          
          {/* Quick Links Column (2-Column Grid on Mobile for Easy Thumb Tapping, Vertical on Desktop) */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#ff7e54] border-b border-orange-200 pb-2">
              {t('footer.quick_links')}
            </h4>
            
            {/* Mobile 2-column grid, Desktop 1-column list */}
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-2 sm:gap-2.5">
              {quickLinks.map((link, idx) => {
                const IconComponent = link.icon;
                return (
                  <li key={idx}>
                    <Link 
                      to={link.to}
                      className="text-slate-700 hover:text-[#ff7e54] bg-white/70 md:bg-transparent border md:border-0 border-orange-100/80 rounded-lg p-2 md:p-0 font-medium transition-all text-xs sm:text-sm flex items-center gap-2 group hover:bg-orange-50/60 md:hover:bg-transparent"
                    >
                      <IconComponent size={14} className="text-[#ff7e54] shrink-0 opacity-75 group-hover:opacity-100 transition-opacity" />
                      <span className="truncate">{link.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          
          {/* Public Leadership Card (Warm Saffron & White) */}
          <div className="lg:col-span-4 bg-white p-5 sm:p-6 md:p-7 rounded-2xl border-2 border-orange-200 shadow-md sm:shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-2.5 sm:mb-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-orange-100 text-[#ff7e54] flex items-center justify-center shrink-0">
                  <Landmark size={18} />
                </div>
                <div>
                  <span className="text-[9.5px] sm:text-[10px] uppercase tracking-widest text-[#ff7e54] font-black block">
                    {isHi ? 'जनप्रतिनिधित्व' : 'Public Leadership'}
                  </span>
                  <h4 className="text-sm sm:text-base font-headline font-black text-slate-900 leading-tight">
                    {isHi ? 'केंद्रीय कार्यालय · धनबाद' : 'Central Secretariat · Dhanbad'}
                  </h4>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-4 sm:mb-5 font-normal">
                {isHi
                  ? 'स्व. सूर्यदेव सिंह जी के काल से लेकर आज तक, कोयलांचल में मजदूर सम्मान, जनसंवाद और क्षेत्रीय नेतृत्व का अटूट केंद्र।'
                  : 'A historic center of labor solidarity, citizen guidance, and regional development across the coal belt for generations.'}
              </p>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center justify-between w-full py-2 sm:py-2.5 px-3.5 sm:px-4 bg-gradient-to-r from-[#ff7e54] to-[#e65100] hover:from-[#ff9933] hover:to-[#ff7e54] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm transition-all group"
            >
              <span>{isHi ? 'संजीव सिंह का परिचय व दृष्टिकोण' : 'Explore Leadership & Profile'}</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
        
        {/* Bottom Bar (Mobile Friendly with Legal Links & Developer Credit) */}
        <div className="border-t border-orange-200/90 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-xs text-center sm:text-left">
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            <span className="font-medium text-slate-600">
              © {new Date().getFullYear()} {isHi ? 'संजीव सिंह' : 'Sanjeev Singh'}.
            </span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="text-[11px] sm:text-xs">
              {isHi ? 'सर्वाधिकार सुरक्षित' : 'All Rights Reserved'}
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs font-semibold text-slate-600">
            <Link to="/privacy" className="hover:text-[#ff7e54] transition-colors">
              {isHi ? 'प्राइवेसी पॉलिसी' : 'Privacy Policy'}
            </Link>
            <span className="text-slate-300">•</span>
            <Link to="/terms" className="hover:text-[#ff7e54] transition-colors">
              {isHi ? 'सेवा की शर्तें' : 'Terms of Service'}
            </Link>
            <span className="text-slate-300">•</span>
            <p>
              Managed by <a href="https://crosstech.in" target="_blank" rel="noopener noreferrer" className="text-[#ff7e54] font-bold hover:underline">crosstech.in</a>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
