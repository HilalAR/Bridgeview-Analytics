import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="animate-in fade-in duration-1000 line-grid">
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-32">
            <div>
              <h1 className="text-6xl font-bold mb-10 uppercase tracking-tight">Direct <br /><span className="text-bridgeview-amber">Contact.</span></h1>
              <p className="text-xl text-slate-400 font-light mb-16 leading-relaxed">
                Wij nodigen u uit voor een vrijblijvend consult om de mogelijkheden voor uw organisatie te bespreken.
              </p>
              
              <div className="space-y-12">
                <div className="group">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-bridgeview-amber font-bold mb-4">Correspondentie</p>
                  <p className="text-2xl font-light hover:text-bridgeview-amber transition-all underline underline-offset-8 decoration-white/10">info@bridgeview-analytics.nl</p>
                </div>
                <div className="group">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-bridgeview-amber font-bold mb-4">Direct Contact</p>
                  <p className="text-2xl font-light">+31 (0) 6 123 456 78</p>
                </div>
              </div>

              <div className="mt-20 p-10 border border-white/5 bg-white/5">
                <p className="text-[11px] uppercase tracking-widest font-bold text-slate-500 leading-loose">
                  BridgeView Analytics werkt uitsluitend op basis van officiële verwerkersovereenkomsten conform de geldende AVG-richtlijnen.
                </p>
              </div>
            </div>
            
            <div className="sharp-card p-16">
              {submitted ? (
                <div className="text-center py-32 animate-in zoom-in-95">
                  <h3 className="text-3xl font-bold mb-6 uppercase tracking-widest">Verzonden</h3>
                  <p className="text-slate-400 font-light">Uw aanvraag is succesvol ontvangen. Een consultant zal binnen 24 uur contact met u opnemen.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-12 text-[12px] uppercase tracking-widest font-bold text-bridgeview-amber border-b border-bridgeview-amber pb-1"
                  >
                    Nieuwe Aanvraag
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid sm:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="text-[11px] uppercase tracking-widest font-bold text-slate-400">Voornaam</label>
                      <input required className="w-full bg-white/5 border-b border-white/20 px-0 py-3 focus:border-bridgeview-amber outline-none transition-all text-sm font-light" type="text" />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[11px] uppercase tracking-widest font-bold text-slate-400">Achternaam</label>
                      <input required className="w-full bg-white/5 border-b border-white/20 px-0 py-3 focus:border-bridgeview-amber outline-none transition-all text-sm font-light" type="text" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[11px] uppercase tracking-widest font-bold text-slate-400">Bedrijfsnaam</label>
                    <input className="w-full bg-white/5 border-b border-white/20 px-0 py-3 focus:border-bridgeview-amber outline-none transition-all text-sm font-light" type="text" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[11px] uppercase tracking-widest font-bold text-slate-400">E-mailadres</label>
                    <input required className="w-full bg-white/5 border-b border-white/20 px-0 py-3 focus:border-bridgeview-amber outline-none transition-all text-sm font-light" type="email" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[11px] uppercase tracking-widest font-bold text-slate-400">Toelichting Uitdaging</label>
                    <textarea rows={4} className="w-full bg-white/5 border-b border-white/20 px-0 py-3 focus:border-bridgeview-amber outline-none transition-all resize-none text-sm font-light"></textarea>
                  </div>
                  <button className="w-full py-6 bg-bridgeview-amber text-bridgeview-dark font-black text-[14px] uppercase tracking-[0.3em] hover:bg-white transition-all">
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