import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-slate-950 text-white w-full pt-16 pb-8 font-body">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        <div className="md:col-span-4 space-y-6">
          <h2 className="text-3xl font-headline font-extrabold text-white">{t('footer.name')}</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            {t('footer.desc')}
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-slate-400">
              <span className="material-symbols-outlined text-primary-container">location_on</span>
              <span className="text-sm">{t('footer.office')}</span>
            </div>
            <div className="flex items-center gap-3 text-slate-400">
              <span className="material-symbols-outlined text-primary-container">mail</span>
              <span className="text-sm">office@sanjeevsingh.in</span>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2 space-y-6">
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary-container">{t('footer.quick_links')}</h4>
          <ul className="space-y-3">
            <li><Link className="text-slate-400 hover:text-white transition-colors text-sm" to="/about">{t('footer.bio')}</Link></li>
            <li><Link className="text-slate-400 hover:text-white transition-colors text-sm" to="/gallery">{t('nav.gallery')}</Link></li>
            <li><Link className="text-slate-400 hover:text-white transition-colors text-sm" to="/contact">{t('footer.contact')}</Link></li>
          </ul>
        </div>
        
        <div className="md:col-span-6 bg-white/5 p-8 rounded-3xl border border-white/10">
          <h4 className="text-xl font-headline font-bold mb-6">{t('footer.connect')}</h4>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="px-4 py-3 bg-slate-900 border-none rounded-xl focus:ring-2 focus:ring-primary-container text-white placeholder:text-slate-500 w-full outline-none" placeholder={t('footer.name_ph')} type="text" />
              <input className="px-4 py-3 bg-slate-900 border-none rounded-xl focus:ring-2 focus:ring-primary-container text-white placeholder:text-slate-500 w-full outline-none" placeholder={t('footer.email_ph')} type="email" />
            </div>
            <textarea className="w-full px-4 py-3 bg-slate-900 border-none rounded-xl focus:ring-2 focus:ring-primary-container text-white placeholder:text-slate-500 outline-none" placeholder={t('footer.message_ph')} rows={3}></textarea>
            <button className="w-full py-4 bg-primary-container text-on-primary-container font-bold rounded-xl hover:opacity-90 transition-opacity">
              {t('footer.send')}
            </button>
          </form>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/10 pt-8 text-slate-400 text-sm">
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="text-slate-500 font-medium">{t('footer.dev_by')}</p>
          <p>© {new Date().getFullYear()} CrossTech. {t('footer.rights')}</p>
        </div>
        <div className="flex gap-6 sm:gap-8">
          <Link className="hover:text-white transition-colors" to="/privacy">{t('footer.privacy')}</Link>
          <Link className="hover:text-white transition-colors" to="/terms">{t('footer.terms')}</Link>
          <Link className="hover:text-white transition-colors" to="/press-kit">{t('footer.press_kit')}</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
