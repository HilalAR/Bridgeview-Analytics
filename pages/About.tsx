
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div>
              <div className="inline-block h-1 w-20 bg-bridgeview-amber mb-10"></div>
              <h1 className="text-6xl font-bold mb-10 tracking-tight uppercase text-white">De Organisatie</h1>
              <p className="text-xl text-slate-400 font-light leading-relaxed mb-10">
                BridgeView Analytics is opgericht vanuit de visie dat technische expertise en bedrijfskundig inzicht onlosmakelijk verbonden moeten zijn. 
              </p>
              <p className="text-lg text-slate-300 font-light leading-relaxed mb-12">
                Onder leiding van Hilal Rahman en Hamza Alsayedali combineert de organisatie academische diepgang in Business IT & Management met jarenlange hands-on ervaring in de logistieke sector. Wij spreken de taal van zowel de techniek als de bestuurskamer.
              </p>
              
              <div className="grid grid-cols-2 gap-1 mb-12">
                <div className="sharp-card p-10 bg-white/5 border-none">
                  <h4 className="font-bold text-bridgeview-amber text-2xl mb-2">100%</h4>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Gebruikersadoptie</p>
                </div>
                <div className="sharp-card p-10 bg-white/5 border-none">
                  <h4 className="font-bold text-bridgeview-amber text-2xl mb-2">AVG</h4>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Volledig Compliant</p>
                </div>
              </div>

              <div className="p-10 bg-white/5 border-l-4 border-bridgeview-amber">
                <p className="text-sm text-slate-400 italic font-light leading-relaxed">
                  "Onze kracht ligt in de brug tussen rauwe data en strategische koersbepaling. Wij bouwen niet alleen dashboards; wij bouwen aan de toekomst van uw onderneming."
                </p>
              </div>
            </div>
            
            {/* Directie Profielen - Horizontaal uitgelijnd */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-8">
              {/* Hilal Rahman */}
              <div className="flex flex-col">
                <div className="relative aspect-[3/4] overflow-hidden group bg-slate-900">
                  <img 
                    src="https://i.imgur.com/T6E3Br4.jpeg" 
                    alt="Hilal Rahman" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                </div>
                <div className="pt-8 border-b border-bridgeview-amber/30 pb-4">
                  <h3 className="text-2xl font-bold uppercase tracking-widest mb-1 text-white">Hilal Rahman</h3>
                  <p className="text-bridgeview-amber text-[10px] uppercase tracking-[0.3em] font-black">Algemeen Directeur</p>
                </div>
                <p className="mt-4 text-xs text-slate-500 font-light leading-relaxed">
                  Gespecialiseerd in het vertalen van complexe bedrijfsprocessen naar schaalbare IT-architecturen en strategische groei.
                </p>
              </div>

              {/* Hamza Alsayedali - sm:mt-16 verwijderd voor gelijke hoogte */}
              <div className="flex flex-col">
                <div className="relative aspect-[3/4] overflow-hidden group bg-slate-900">
                  <img 
                    src="https://i.imgur.com/7jGHjml.jpeg" 
                    alt="Hamza Alsayedali" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                </div>
                <div className="pt-8 border-b border-bridgeview-amber/30 pb-4">
                  <h3 className="text-2xl font-bold uppercase tracking-widest mb-1 text-white">Hamza Alsayedali</h3>
                  <p className="text-bridgeview-amber text-[10px] uppercase tracking-[0.3em] font-black">Technisch Directeur</p>
                </div>
                <p className="mt-4 text-xs text-slate-500 font-light leading-relaxed">
                  Expert in advanced analytics en data-mining binnen logistieke en e-commerce omgevingen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-black/20 border-y border-white/5 line-grid">
        <div className="container mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="text-3xl font-bold uppercase tracking-[0.3em] mb-6 text-white">Kernwaarden & Compliance</h2>
            <div className="w-16 h-1 bg-bridgeview-amber mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-1">
            {[
              { title: "Integriteit", desc: "Wij adviseren u uitsluitend op basis van feitelijke noodzaak en strategisch belang voor uw specifieke marktpositie." },
              { title: "Data-Governance", desc: "Strikte naleving van de AVG-wetgeving en maximale beveiliging via Microsoft Azure Enterprise standaarden." },
              { title: "Resultaatfocus", desc: "Elke implementatie wordt getoetst aan de vooraf gedefinieerde ROI and operationele doelstellingen van de directie." }
            ].map((v, i) => (
              <div key={i} className="sharp-card p-12 hover:bg-white/5 transition-all">
                <h4 className="font-bold mb-6 uppercase tracking-widest text-bridgeview-amber">{v.title}</h4>
                <p className="text-sm text-slate-400 font-light leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
