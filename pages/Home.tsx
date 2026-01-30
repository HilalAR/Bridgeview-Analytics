
import React from 'react';
import { Page } from '../types';
import { Icons } from '../constants';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="animate-in fade-in duration-1000 line-grid">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-bridgeview-amber/5 to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-4 mb-10">
              <div className="w-12 h-px bg-bridgeview-amber"></div>
              <span className="text-[12px] uppercase tracking-[0.5em] text-bridgeview-amber font-bold">
                Strategic Intelligence Partner
              </span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-light leading-[1.1] mb-12 tracking-tight">
              Strategische <br /> Besluitvorming via <br />
              <span className="font-bold text-bridgeview-amber">Data-Analyse.</span>
            </h1>
            
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mb-16 font-light">
              BridgeView Analytics adviseert MKB+ ondernemingen in de logistiek en e-commerce bij het optimaliseren van bedrijfsprocessen. Wij transformeren complexe datastromen naar meetbare winstgevendheid en operationele controle.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8">
              <button 
                onClick={() => onNavigate(Page.Contact)}
                className="px-12 py-5 bg-bridgeview-amber text-bridgeview-dark font-bold text-[13px] uppercase tracking-widest hover:bg-white transition-all shadow-2xl"
              >
                Strategisch Consult Aanvragen
              </button>
              <button 
                onClick={() => onNavigate(Page.Services)}
                className="px-12 py-5 border border-white/20 text-white font-bold text-[13px] uppercase tracking-widest hover:bg-white/10 transition-all"
              >
                Methodologie Bekijken
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Focus / Problems */}
      <section className="py-32 bg-black/30 border-y border-white/5">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div>
              <h2 className="text-4xl font-bold mb-12 leading-tight tracking-tight uppercase">
                Operationele <br /> <span className="text-bridgeview-amber">Knelpunten</span>
              </h2>
              <div className="space-y-12">
                {[
                  {
                    title: "Fragmentatie van Informatie",
                    desc: "Besluitvorming op basis van gefragmenteerde bronnen leidt tot strategische onzekerheid."
                  },
                  {
                    title: "Incompleet Marge-inzicht",
                    desc: "Gebrek aan realtime inzicht in logistieke kosten per eenheid beperkt uw winstpotentieel."
                  },
                  {
                    title: "Administratieve Overhead",
                    desc: "Handmatige dataverwerking in Excel resulteert in vertraagde rapportages en menselijke fouten."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="text-bridgeview-amber font-bold text-xl pt-1">0{i + 1}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 uppercase tracking-wider">{item.title}</h3>
                      <p className="text-slate-400 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="sharp-card p-12 lg:p-16 border-l-4 border-l-bridgeview-amber">
              <h3 className="text-2xl font-bold mb-10 uppercase tracking-widest">Onze Filosofie</h3>
              <p className="text-lg text-slate-300 leading-relaxed mb-12 font-light italic">
                "Data-analyse is geen technologisch doel op zich, maar een instrument voor de Directie en het Management om met absolute zekerheid te kunnen sturen."
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Icons.Check />
                  <span className="text-sm uppercase tracking-widest font-semibold">Integratie met MS Azure & Power BI</span>
                </div>
                <div className="flex items-center gap-4">
                  <Icons.Check />
                  <span className="text-sm uppercase tracking-widest font-semibold">AVG-Compliant Dataverwerking</span>
                </div>
                <div className="flex items-center gap-4">
                  <Icons.Check />
                  <span className="text-sm uppercase tracking-widest font-semibold">Gegarandeerde Gebruikersadoptie</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise grid */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-bold uppercase tracking-[0.2em] mb-6">Expertisegebieden</h2>
            <div className="w-24 h-1 bg-bridgeview-amber mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-1">
            {[
              { title: "Data Architectuur", desc: "Robuuste fundamenten voor schaalbare analyses binnen het Microsoft-ecosysteem." },
              { title: "Proces Automatisering", desc: "Eliminatie van redundante handelingen voor maximale operationele efficiëntie." },
              { title: "Strategisch Dashboarding", desc: "Visuele vertaling van complexe KPI's naar actiegerichte sturingsinformatie." }
            ].map((item, i) => (
              <div key={i} className="sharp-card p-16 hover:bg-white/5 transition-all">
                <div className="mb-10 text-bridgeview-amber">
                  <Icons.Data />
                </div>
                <h3 className="text-xl font-bold mb-6 uppercase tracking-widest">{item.title}</h3>
                <p className="text-slate-400 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Updated to match the dark theme and line-grid background of previous sections */}
      <section className="py-32 border-t border-white/5">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-12 tracking-tight">
            Optimaliseer Uw Bedrijfsvoering.
          </h2>
          <button 
            onClick={() => onNavigate(Page.Contact)}
            className="px-16 py-6 bg-bridgeview-amber text-bridgeview-dark font-bold text-[14px] uppercase tracking-[0.3em] hover:bg-white transition-all shadow-xl"
          >
            Spreken met een Consultant
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
