import { Mail, MapPin, Phone } from 'lucide-react';
import Reveal from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';

const ContactUs = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-white min-h-screen pt-[72px]">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Executive Header */}
        <section className="bg-[#1a1a2e] py-32 px-8 relative overflow-hidden rounded-[2.5rem] mt-8">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#ff7e54]/5 -skew-x-12 translate-x-32" />
          <div className="relative z-10 text-center">
            <Reveal>
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="h-px w-12 bg-[#ff7e54]" />
                <span className="text-[11px] font-black text-[#ff7e54] uppercase tracking-[0.5em]">{t('contact.tag')}</span>
                <div className="h-px w-12 bg-[#ff7e54]" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="text-5xl md:text-8xl font-headline font-black text-white max-w-5xl mx-auto leading-[1.1] tracking-tight uppercase">
                {t('contact.title')}
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-white/60 text-xl max-w-2xl mx-auto font-body mt-10 leading-relaxed italic">
                {t('contact.sub')}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Content Section - Asymmetric Layout */}
        <section className="py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
            {/* Left Column: Direct Channels */}
            <div className="lg:col-span-4 space-y-16 max-w-md">
              <Reveal>
                <div className="space-y-6">
                  <h2 className="text-4xl font-headline font-black text-[#1a1a2e] uppercase tracking-tight flex items-center gap-6">
                    <span className="text-[#ff7e54]">Direct</span>
                    {t('contact.chambers')}
                  </h2>
                  <div className="h-[2px] w-24 bg-[#ff7e54]" />
                </div>
              </Reveal>

              <div className="space-y-12">
                <Reveal delay={50}>
                  <div className="group flex gap-8 items-start">
                    <div className="w-16 h-16 bg-[#f8f9fa] text-[#ff7e54] rounded-[1.5rem] flex justify-center items-center shrink-0 border border-[#1a1a2e]/5 group-hover:bg-[#ff7e54] group-hover:text-white transition-all duration-500">
                      <MapPin size={28} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-[10px] font-black text-[#ff7e54] uppercase tracking-[0.4em]">{t('contact.office')}</h4>
                      <p className="text-xl text-[#1a1a2e]/80 leading-relaxed font-headline font-medium">{t('contact.address')}</p>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={100}>
                  <div className="group flex gap-8 items-start">
                    <div className="w-16 h-16 bg-[#f8f9fa] text-[#ff7e54] rounded-[1.5rem] flex justify-center items-center shrink-0 border border-[#1a1a2e]/5 group-hover:bg-[#ff7e54] group-hover:text-white transition-all duration-500">
                      <Mail size={28} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-[10px] font-black text-[#ff7e54] uppercase tracking-[0.4em]">{t('contact.email_title')}</h4>
                      <p className="text-xl text-[#1a1a2e]/80 leading-relaxed font-headline font-medium group-hover:text-[#ff7e54] transition-colors cursor-pointer">
                        office@sanjeevsingh.in
                      </p>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={150}>
                  <div className="group flex gap-8 items-start">
                    <div className="w-16 h-16 bg-[#f8f9fa] text-[#ff7e54] rounded-[1.5rem] flex justify-center items-center shrink-0 border border-[#1a1a2e]/5 group-hover:bg-[#ff7e54] group-hover:text-white transition-all duration-500">
                      <Phone size={28} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-[10px] font-black text-[#ff7e54] uppercase tracking-[0.4em]">{t('contact.phone_title')}</h4>
                      <a href="tel:+919431125166" className="text-2xl text-[#1a1a2e] leading-relaxed font-headline font-black group-hover:text-[#ff7e54] transition-colors">
                        +91 94311 25166
                      </a>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Visual Map Integration */}
              <Reveal delay={200}>
                <div className="space-y-8 pt-8">
                  <div className="flex items-center gap-4">
                    <div className="h-px flex-grow bg-[#1a1a2e]/5" />
                    <span className="text-[10px] font-black text-[#1a1a2e]/40 uppercase tracking-[0.4em]">{t('contact.map')}</span>
                  </div>
                  <div className="h-[350px] rounded-[2.5rem] overflow-hidden editorial-shadow border border-[#1a1a2e]/5 relative group">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.06994270119!2d86.46153931139891!3d23.81611177853649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bd007e446ce9%3A0x42fd6c53a777a6cf!2sSINGH%20MANSION!5e0!3m2!1sen!2sin!4v1775368729592!5m2!1sen!2sin"
                      width="100%" height="100%"
                      className="border-0 grayscale contrast-125 brightness-95 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                      allowFullScreen={true} loading="lazy"
                      title="Location Map"
                    />
                    <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/5 rounded-[2.5rem]" />
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Premium Form */}
            <div className="lg:col-span-8">
              <Reveal delay={100}>
                <div className="bg-[#f8f9fa] p-12 md:p-20 rounded-[3rem] editorial-shadow border border-[#1a1a2e]/5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 saffron-gradient rounded-full opacity-[0.03] blur-3xl -translate-y-32 translate-x-32" />
                  
                  <div className="space-y-4 mb-16 relative z-10">
                    <h2 className="text-4xl font-headline font-black text-[#1a1a2e] uppercase tracking-tight">{t('contact.form_title')}</h2>
                    <div className="h-1 w-20 bg-[#ff7e54]" />
                  </div>

                  <form className="space-y-10 relative z-10" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-4">
                        <label className="text-[10px] font-black text-[#ff7e54] uppercase tracking-[0.4em] ml-2">{t('contact.name')}</label>
                        <input className="w-full bg-white px-8 py-5 rounded-[1.25rem] border border-[#1a1a2e]/5 focus:border-[#ff7e54] focus:ring-4 focus:ring-[#ff7e54]/5 outline-none transition-all font-body text-lg" placeholder={t('contact.name_ph')} type="text" />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] font-black text-[#ff7e54] uppercase tracking-[0.4em] ml-2">{t('contact.email')}</label>
                        <input className="w-full bg-white px-8 py-5 rounded-[1.25rem] border border-[#1a1a2e]/5 focus:border-[#ff7e54] focus:ring-4 focus:ring-[#ff7e54]/5 outline-none transition-all font-body text-lg" placeholder={t('contact.email_ph')} type="email" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-black text-[#ff7e54] uppercase tracking-[0.4em] ml-2">{t('contact.subject')}</label>
                      <input className="w-full bg-white px-8 py-5 rounded-[1.25rem] border border-[#1a1a2e]/5 focus:border-[#ff7e54] focus:ring-4 focus:ring-[#ff7e54]/5 outline-none transition-all font-body text-lg" placeholder={t('contact.subject_ph')} type="text" />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-black text-[#ff7e54] uppercase tracking-[0.4em] ml-2">{t('contact.message')}</label>
                      <textarea className="w-full bg-white px-8 py-6 rounded-[1.5rem] border border-[#1a1a2e]/5 focus:border-[#ff7e54] focus:ring-4 focus:ring-[#ff7e54]/5 outline-none transition-all resize-none font-body text-lg" placeholder={t('contact.message_ph')} rows={6} />
                    </div>
                    <button className="w-full py-6 saffron-gradient text-white rounded-[1.25rem] font-black text-xs uppercase tracking-[0.4em] shadow-2xl shadow-orange-500/20 hover:scale-[1.02] active:scale-95 transition-all">
                      {t('contact.submit')}
                    </button>
                  </form>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
