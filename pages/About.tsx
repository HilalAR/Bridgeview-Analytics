
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      <section className="py-24">
        <div className="container mx-auto px-8">
          <div className="flex flex-col gap-16">
            <div className="max-w-4xl">
              <div className="inline-block h-1 w-16 bg-bridgeview-amber mb-8"></div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-8 tracking-tight uppercase text-white">De Organisatie</h1>
              <p className="text-lg text-slate-400 font-light leading-relaxed mb-8">
                BridgeView Analytics is opgericht vanuit de visie dat technische expertise en bedrijfskundig inzicht onlosmakelijk verbonden moeten zijn. 
              </p>
              <p className="text-base text-slate-300 font-light leading-relaxed mb-10">
                Wij zijn een jong, ambitieus team dat altijd proactief meedenkt over de toekomst van uw organisatie. Onze passie ligt in het vereenvoudigen van complexe vraagstukken door de inzet van slimme technologie. Wij geloven dat een goede data-architectuur niet alleen vandaag moet werken, maar moet meegroeien met uw ambities van morgen. Als gedreven partner trekken wij samen met u op en streven we altijd naar de meest efficiënte oplossing voor uw unieke situatie.
              </p>
            </div>
            
            {/* Directie Profielen - Nu met 3 personen */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
              {/* Hilal Rahman */}
              <div className="flex flex-col">
                <div className="relative aspect-[3/4] overflow-hidden group bg-slate-900">
                  <div className="absolute inset-0 flex items-center justify-center bg-white/5">
                    <svg className="w-12 h-12 text-white/10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <img 
                    src="https://lh3.googleusercontent.com/d/1wzFo5K7yUCLuKNUcAa0X-z3F-wO5Hx7x" 
                    alt="Hilal Rahman" 
                    className="relative z-10 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100"
                    loading="eager"
                  />
                </div>
                <div className="pt-6 border-b border-bridgeview-amber/30 pb-3">
                  <h3 className="text-xl font-bold uppercase tracking-widest mb-1 text-white">Hilal Rahman</h3>
                  <p className="text-bridgeview-amber text-[9px] uppercase tracking-[0.3em] font-black">BI Developer</p>
                </div>
                <p className="mt-3 text-[11px] text-slate-500 font-light leading-relaxed">
                  Gespecialiseerd in het transformeren van ruwe data naar geavanceerde sturingsinstrumenten die complexe operaties vertalen naar directe visuele inzichten.
                </p>
              </div>

              {/* Hamza Alsayedali */}
              <div className="flex flex-col">
                <div className="relative aspect-[3/4] overflow-hidden group bg-slate-900">
                  <div className="absolute inset-0 flex items-center justify-center bg-white/5">
                    <svg className="w-12 h-12 text-white/10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <img 
                    src="https://lh3.googleusercontent.com/d/1dR67EBTCtcEnjcuGEoivBbF7hfNlSo98" 
                    alt="Hamza Alsayedali" 
                    className="relative z-10 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100"
                    loading="eager"
                  />
                </div>
                <div className="pt-6 border-b border-bridgeview-amber/30 pb-3">
                  <h3 className="text-xl font-bold uppercase tracking-widest mb-1 text-white">Hamza Alsayedali</h3>
                  <p className="text-bridgeview-amber text-[9px] uppercase tracking-[0.3em] font-black">Data Engineer</p>
                </div>
                <p className="mt-3 text-[11px] text-slate-500 font-light leading-relaxed">
                  Gespecialiseerd in het ontwerpen van toekomstbestendige datastructuren die versnipperde bronnen verenigen tot een betrouwbaar fundament for accurate KPI-rapportages.
                </p>
              </div>

              {/* Derde Persoon - Gytha Baha */}
              <div className="flex flex-col">
                <div className="relative aspect-[3/4] overflow-hidden group bg-slate-900">
                  <div className="absolute inset-0 flex items-center justify-center bg-white/5">
                    <svg className="w-12 h-12 text-white/10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <img 
                    src="https://lh3.googleusercontent.com/d/1uKu0Y22yAc2W2OksZ0YQyI7EogT3aA4g" 
                    alt="Gytha Baha" 
                    className="relative z-10 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100"
                    loading="lazy"
                  />
                </div>
                <div className="pt-6 border-b border-bridgeview-amber/30 pb-3">
                  <h3 className="text-xl font-bold uppercase tracking-widest mb-1 text-white">Gytha Baha</h3>
                  <p className="text-bridgeview-amber text-[9px] uppercase tracking-[0.3em] font-black">IT Consultant</p>
                </div>
                <p className="mt-3 text-[11px] text-slate-500 font-light leading-relaxed">
                  Gespecialiseerd in het vertalen van complexe bedrijfsprocessen naar schaalbare IT-architecturen en het identificeren van strategische groeikansen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black/20 border-y border-white/5 line-grid">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold uppercase tracking-[0.3em] mb-4 text-white">Kernwaarden</h2>
            <div className="w-12 h-1 bg-bridgeview-amber mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-1">
            {[
              { title: "Integriteit", desc: "Wij adviseren u uitsluitend op basis van feitelijke noodzaak en strategisch belang voor uw marktpositie." },
              { title: "Data-Governance", desc: "Strikte naleving van de AVG-wetgeving en maximale beveiliging via Azure Enterprise standaarden." },
              { title: "Resultaatfocus", desc: "Elke implementatie wordt getoetst aan de vooraf gedefinieerde ROI en operationele doelstellingen." }
            ].map((v, i) => (
              <div key={i} className="sharp-card p-10 hover:bg-white/5 transition-all">
                <h4 className="font-bold mb-5 uppercase tracking-widest text-bridgeview-amber text-sm">{v.title}</h4>
                <p className="text-[13px] text-slate-400 font-light leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
