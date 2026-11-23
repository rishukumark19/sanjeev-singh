import { Link } from 'react-router-dom';
import { Landmark, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Logo from './Logo';

const Footer = () => {
  const { lang, t } = useLanguage();
  const isHi = lang === 'hi';
  
  return (
    <footer className="bg-gradient-to-b from-[#fff7ed] via-white to-[#fff1e6] text-slate-800 w-full pt-16 pb-8 font-body border-t-4 border-[#ff7e54]">
      {/* Tricolor Accent Ribbon */}
      <div className="h-[3px] w-full tricolor-stripe mb-12 -mt-16" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
        {/* Brand Column */}
        <div className="lg:col-span-5 space-y-5">
          <div className="flex items-center gap-3.5">
            <Logo size="lg" showBadge />
            <div>
              <h2 className="text-2xl sm:text-3xl font-headline font-black text-slate-900 uppercase tracking-wider leading-none">
                {isHi ? 'संजीव सिंह' : 'SANJEEV SINGH'}
              </h2>
              <p className="text-xs text-[#ff7e54] font-black tracking-widest uppercase mt-1 flex items-center gap-1.5">
                <span>{isHi ? 'पूर्व विधायक · झरिया विधानसभा' : 'Former MLA · Jharia'}</span>
                <span>•</span>
                <span className="text-emerald-700">{isHi ? 'झरिया · धनबाद' : 'Jharia · Dhanbad'}</span>
              </p>
            </div>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed max-w-md font-normal">
            {isHi 
              ? 'कोयलांचल के कामगारों, युवाओं एवं समस्त क्षेत्रवासियों के अधिकारों, मान-सम्मान और सर्वांगीण विकास के लिए अनवरत समर्पित लोकसेवा।'
              : 'Steadfast public service, upholding the dignity of coal belt workers and championing comprehensive development across Dhanbad.'}
          </p>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-orange-50 border border-[#ff7e54]/30 text-[#ff7e54] text-xs font-bold shadow-sm">
            <Landmark size={14} className="text-[#ff7e54]" />
            <span>{isHi ? 'जनता मजदूर संघ (संबद्ध) | झरिया विधानसभा' : 'Janta Mazdoor Sangh | Jharia Constituency'}</span>
          </div>
        </div>
        
        {/* Quick Links Column */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#ff7e54] border-b border-orange-200 pb-2.5">
            {t('footer.quick_links')}
          </h4>
          <ul className="space-y-2.5">
            <li>
              <Link className="text-slate-700 hover:text-[#ff7e54] font-medium transition-colors text-sm flex items-center gap-2 group" to="/">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff7e54] opacity-60 group-hover:opacity-100" />
                <span>{t('nav.home')}</span>
              </Link>
            </li>
            <li>
              <Link className="text-slate-700 hover:text-[#ff7e54] font-medium transition-colors text-sm flex items-center gap-2 group" to="/about">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff7e54] opacity-60 group-hover:opacity-100" />
                <span>{t('footer.bio')}</span>
              </Link>
            </li>
            <li>
              <Link className="text-slate-700 hover:text-[#ff7e54] font-medium transition-colors text-sm flex items-center gap-2 group" to="/gallery">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff7e54] opacity-60 group-hover:opacity-100" />
                <span>{t('nav.gallery')}</span>
              </Link>
            </li>
            <li>
              <Link className="text-slate-700 hover:text-[#ff7e54] font-medium transition-colors text-sm flex items-center gap-2 group" to="/press">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff7e54] opacity-60 group-hover:opacity-100" />
                <span>{isHi ? 'समाचार व विज्ञप्ति' : 'Press & Bulletins'}</span>
              </Link>
            </li>
            <li>
              <Link className="text-slate-700 hover:text-[#ff7e54] font-medium transition-colors text-sm flex items-center gap-2 group" to="/videos">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff7e54] opacity-60 group-hover:opacity-100" />
                <span>{isHi ? 'वीडियो' : 'Videos'}</span>
              </Link>
            </li>
          </ul>
        </div>
        
        {/* Public Leadership Card (Warm Saffron & White) */}
        <div className="lg:col-span-4 bg-white p-6 sm:p-7 rounded-2xl border-2 border-orange-200 shadow-xl relative overflow-hidden">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-9 h-9 rounded-xl bg-orange-100 text-[#ff7e54] flex items-center justify-center">
              <Landmark size={20} />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#ff7e54] font-black block">
                {isHi ? 'जनप्रतिनिधित्व' : 'Public Leadership'}
              </span>
              <h4 className="text-base font-headline font-black text-slate-900 leading-tight">
                {isHi ? 'केंद्रीय कार्यालय · धनबाद' : 'Central Secretariat · Dhanbad'}
              </h4>
            </div>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed mb-5 font-normal">
            {isHi
              ? 'स्व. सूर्यदेव सिंह जी के काल से लेकर आज तक, कोयलांचल में मजदूर सम्मान, जनसंवाद और क्षेत्रीय नेतृत्व का अटूट केंद्र।'
              : 'A historic center of labor solidarity, citizen guidance, and regional development across the coal belt for generations.'}
          </p>

          <Link
            to="/about"
            className="inline-flex items-center justify-between w-full py-2.5 px-4 bg-gradient-to-r from-[#ff7e54] to-[#e65100] hover:from-[#ff9933] hover:to-[#ff7e54] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all group"
          >
            <span>{isHi ? 'संजीव सिंह का परिचय व दृष्टिकोण' : 'Explore Leadership & Profile'}</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-center items-center border-t border-orange-200 pt-6 text-slate-500 text-xs">
        <p>Managed by <a href="https://crosstech.in" target="_blank" rel="noopener noreferrer" className="text-[#ff7e54] font-bold hover:underline">crosstech.in</a></p>
      </div>
    </footer>
  );
};

export default Footer;
