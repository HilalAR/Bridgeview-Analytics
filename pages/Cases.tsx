
import React from 'react';
import { Icons } from '../constants';

const Cases: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      <section className="py-24">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mb-20">
            <h1 className="text-4xl lg:text-5xl font-bold mb-8 uppercase tracking-tight">Projecten</h1>
            <p className="text-lg text-slate-400 font-light leading-relaxed">
              Analytische precisie leidt tot meetbare resultaten. Onderstaande case illustreert onze methodologie in een complexe handelsomgeving.
            </p>
          </div>

          {/* Business Case Study */}
          <div className="sharp-card overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 lg:p-16 border-r border-white/5">
                <div className="inline-block px-3 py-1.5 border border-bridgeview-amber text-bridgeview-amber text-[9px] font-bold uppercase tracking-[0.2em] mb-10">
                  Case: Textielimporteur
                </div>
                <h2 className="text-3xl font-bold mb-10 uppercase tracking-tight leading-tight">Margebeheersing via Realtime Data</h2>
                
                <div className="space-y-10">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.3em] text-bridgeview-amber font-bold mb-3">De Casus</h4>
                    <p className="text-slate-400 font-light leading-relaxed text-sm">
                      De cliënt kampte met onvoldoende inzicht in de 'landed-cost' per productgroep door volatiele logistieke tarieven en valuta-effecten. De bestaande Excel-rapportages waren tijdrovend en foutgevoelig.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.3em] text-bridgeview-amber font-bold mb-3">De Interventie</h4>
                    <p className="text-slate-400 font-light leading-relaxed text-sm">
                      BridgeView heeft een geautomatiseerd Power BI ecosysteem geïmplementeerd. Realtime data-extractie biedt nu direct inzicht in de netto-marge per order.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-1 pt-6">
                    <div className="sharp-card p-8 bg-white/5">
                      <p className="text-3xl font-bold text-white mb-1">15u</p>
                      <p className="text-[9px] uppercase tracking-widest text-slate-500 font-bold">Wekelijkse Besparing</p>
                    </div>
                    <div className="sharp-card p-8 bg-white/5">
                      <p className="text-3xl font-bold text-white mb-1">12%</p>
                      <p className="text-[9px] uppercase tracking-widest text-slate-500 font-bold">Marginale Groei</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-black/40 flex flex-col items-center justify-center p-16 relative">
                <div className="absolute inset-0 line-grid opacity-20"></div>
                <div className="w-full max-w-xs space-y-8 relative z-10">
                   <div className="h-48 border-l border-b border-white/20 flex items-end justify-between px-4 pb-4 gap-4">
                      <div className="w-full bg-bridgeview-amber/20 h-2/5 border border-bridgeview-amber/40"></div>
                      <div className="w-full bg-bridgeview-amber/40 h-4/5 border border-bridgeview-amber/60"></div>
                      <div className="w-full bg-bridgeview-amber/30 h-3/5 border border-bridgeview-amber/50"></div>
                      <div className="w-full bg-bridgeview-amber h-full border border-bridgeview-amber"></div>
                   </div>
                   <div className="space-y-3">
                      <div className="h-1.5 w-full bg-white/5"></div>
                      <div className="h-1.5 w-2/3 bg-white/5"></div>
                   </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-24 text-center max-w-2xl mx-auto">
             <p className="text-base text-slate-300 font-light italic leading-relaxed mb-6 uppercase tracking-wide">
               "De transitie naar een datagedreven sturing heeft de strategische snelheid van onze directie aanzienlijk verhoogd."
             </p>
             <div className="w-8 h-px bg-bridgeview-amber mx-auto mb-5"></div>
             <p className="text-[11px] font-bold uppercase tracking-[0.3em]">Algemeen Directeur | Logistieke Groep</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cases;
