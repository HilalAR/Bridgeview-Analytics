
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="animate-in fade-in duration-1000 line-grid">
      <section className="py-24">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-8 uppercase tracking-tight">Direct <br /><span className="text-bridgeview-amber">Contact.</span></h1>
              <p className="text-lg text-slate-400 font-light mb-12 leading-relaxed">
                Wij nodigen u uit voor een vrijblijvend consult om de mogelijkheden voor uw organisatie te bespreken.
              </p>
              
              <div className="space-y-10">
                <div className="group">
                  <p className="text-[9px] uppercase tracking-[0.4em] text-bridgeview-amber font-bold mb-3">Correspondentie</p>
                  <p className="text-xl font-light hover:text-bridgeview-amber transition-all underline underline-offset-8 decoration-white/10">info@bridgeview-analytics.nl</p>
                </div>
                <div className="group">
                  <p className="text-[9px] uppercase tracking-[0.4em] text-bridgeview-amber font-bold mb-3">Direct Contact</p>
                  <p className="text-xl font-light">+31 (0) 6 123 456 78</p>
                </div>
              </div>

              <div className="mt-16 p-8 border border-white/5 bg-white/5">
                <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500 leading-relaxed">
                  BridgeView Analytics werkt uitsluitend op basis van officiële verwerkersovereenkomsten conform de geldende AVG-richtlijnen.
                </p>
              </div>
            </div>
            
            <div className="sharp-card p-10 lg:p-12">
              {submitted ? (
                <div className="text-center py-20 animate-in zoom-in-95">
                  <h3 className="text-2xl font-bold mb-4 uppercase tracking-widest">Verzonden</h3>
                  <p className="text-slate-400 font-light text-sm">Uw aanvraag is succesvol ontvangen. Wij nemen binnen 24 uur contact op.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-10 text-[11px] uppercase tracking-widest font-bold text-bridgeview-amber border-b border-bridgeview-amber pb-1"
                  >
                    Nieuwe Aanvraag
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Voornaam</label>
                      <input required className="w-full bg-white/5 border-b border-white/20 px-0 py-2 focus:border-bridgeview-amber outline-none transition-all text-sm font-light" type="text" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Achternaam</label>
                      <input required className="w-full bg-white/5 border-b border-white/20 px-0 py-2 focus:border-bridgeview-amber outline-none transition-all text-sm font-light" type="text" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Bedrijfsnaam</label>
                    <input className="w-full bg-white/5 border-b border-white/20 px-0 py-2 focus:border-bridgeview-amber outline-none transition-all text-sm font-light" type="text" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400">E-mailadres</label>
                    <input required className="w-full bg-white/5 border-b border-white/20 px-0 py-2 focus:border-bridgeview-amber outline-none transition-all text-sm font-light" type="email" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Toelichting Uitdaging</label>
                    <textarea rows={3} className="w-full bg-white/5 border-b border-white/20 px-0 py-2 focus:border-bridgeview-amber outline-none transition-all resize-none text-sm font-light"></textarea>
                  </div>
                  <button className="w-full py-5 bg-bridgeview-amber text-bridgeview-dark font-black text-[12px] uppercase tracking-[0.3em] hover:bg-white transition-all">
                    Verzend Aanvraag
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
