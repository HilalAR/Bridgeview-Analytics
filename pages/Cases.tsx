
import React from 'react';
import { Icons } from '../constants';

const Cases: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl">
            <div className="inline-block h-1 w-16 bg-bridgeview-amber mb-8"></div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-8 uppercase tracking-tight text-white">Projecten & Resultaten</h1>
            <p className="text-lg text-slate-400 font-light leading-relaxed">
              In onze projecten laten we zien hoe data in de praktijk waarde toevoegt door complexe situaties inzichtelijk te maken. Voor Gasunie monitoren we de voortgang van klimaatdoelen en elektriciteitsproductie via voorspellende modellen, terwijl we voor het Nationaal Park Utrechtse Heuvelrug versnipperde natuurdata toegankelijk hebben gemaakt voor stakeholders. In het project LOKET hebben we logistieke ketenregie geoptimaliseerd met een Digital Twin, wat heeft geleid tot minder ritten en meer rust in de planning. Wij zijn trots op deze resultaten en hopen uw project binnenkort ook aan dit overzicht toe te mogen voegen.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="space-y-16 sm:space-y-32">
            
            {/* Case 1: Gasunie */}
            <div className="sharp-card overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 sm:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-white/5 bg-white/[0.01]">
                  <div className="inline-block px-3 py-1.5 border border-bridgeview-amber text-bridgeview-amber text-[9px] font-bold uppercase tracking-[0.2em] mb-10">
                    Klant: Gasunie
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-10 uppercase tracking-tight leading-tight text-white">Monitoring Energietransitie & Klimaatdoelen</h2>
                  
                  <div className="space-y-10">
                    <div>
                      <h4 className="text-[10px] uppercase tracking-[0.3em] text-bridgeview-amber font-bold mb-3">De Casus</h4>
                      <p className="text-slate-400 font-light leading-relaxed text-sm">
                        De energietransitie is een van de grootste uitdagingen van deze tijd. Gasunie had behoefte aan een krachtig instrument om de voortgang van de nationale klimaatdoelstellingen nauwkeurig te monitoren. De uitdaging lag in het combineren van complexe datastromen over elektriciteitsproductie uit diverse energiebronnen en deze af te zetten tegen de langetermijnambities van de overheid.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-[0.3em] text-bridgeview-amber font-bold mb-3">De Interventie</h4>
                      <div className="grid gap-6">
                        <div className="space-y-2">
                          <p className="text-white text-xs font-bold uppercase tracking-widest">1. Real-time Productiemonitoring</p>
                          <p className="text-slate-500 font-light text-xs leading-relaxed">Het inzichtelijk maken van de actuele elektriciteitsproductie per energiebron.</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-white text-xs font-bold uppercase tracking-widest">2. Emissie-analyse</p>
                          <p className="text-slate-500 font-light text-xs leading-relaxed">De integratie van CO2-emissiedata om de directe impact van de energiemix te kwantificeren.</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-white text-xs font-bold uppercase tracking-widest">3. Predictieve Monitoring</p>
                          <p className="text-slate-500 font-light text-xs leading-relaxed">Modellen die op basis van huidige trends de haalbaarheid van overheidsdoelen voorspellen.</p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-8 border-t border-white/10">
                      <p className="text-slate-300 font-light italic leading-relaxed text-sm mb-4">
                        "Dankzij dit project zijn complexe klimaatdoelen vertaald naar een glashelder dashboard."
                      </p>
                      <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-bridgeview-amber">
                        — Gasunie
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-black/40 flex flex-col items-center justify-center relative min-h-[400px] lg:min-h-[500px] p-8 lg:p-12">
                  <div className="absolute inset-0 line-grid opacity-20"></div>
                  <div className="relative z-10 w-full flex items-center justify-center mb-10">
                    <div className="relative group w-full max-w-lg">
                      <div className="absolute -inset-1 bg-gradient-to-r from-bridgeview-amber/20 to-transparent blur opacity-25"></div>
                      <img 
                        src="https://i.imgur.com/sQtmm5x.png" 
                        alt="Energietransitie Dashboard Gasunie" 
                        className="relative border border-white/10 shadow-2xl transition-all duration-700 w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                  <div className="relative z-10 text-center">
                    <p className="text-[11px] uppercase tracking-[0.4em] text-bridgeview-amber font-bold mb-2">Focus</p>
                    <h3 className="text-sm font-light text-white uppercase tracking-widest leading-relaxed">Energietransitie & <br /> Voorspellende Analyses</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Case 2: LOKET */}
            <div className="sharp-card overflow-hidden">
              <div className="grid lg:grid-cols-2">
                {/* Image on left for Desktop, Second for Mobile */}
                <div className="bg-black/40 flex flex-col items-center justify-center relative min-h-[400px] lg:min-h-[500px] p-8 lg:p-12 order-2 lg:order-1">
                  <div className="absolute inset-0 line-grid opacity-20"></div>
                  <div className="relative z-10 w-full flex items-center justify-center mb-10">
                    <div className="relative group w-full max-w-lg">
                      <div className="absolute -inset-1 bg-gradient-to-r from-bridgeview-amber/20 to-transparent blur opacity-25"></div>
                       <img 
                        src="https://i.imgur.com/L1JjhSS.png" 
                        alt="Digital Twin Visualisatie LOKET" 
                        className="relative border border-white/10 shadow-2xl transition-all duration-700 w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                  <div className="relative z-10 text-center">
                    <p className="text-[11px] uppercase tracking-[0.4em] text-bridgeview-amber font-bold mb-2">Focus</p>
                    <h3 className="text-sm font-light text-white uppercase tracking-widest leading-relaxed">Digital Twins & <br /> Stedelijke Bereikbaarheid</h3>
                  </div>
                </div>

                <div className="p-8 sm:p-12 lg:p-16 border-b lg:border-b-0 lg:border-l border-white/5 order-1 lg:order-2 bg-white/[0.01]">
                  <div className="inline-block px-3 py-1.5 border border-bridgeview-amber text-bridgeview-amber text-[9px] font-bold uppercase tracking-[0.2em] mb-10">
                    Klant: LOKET (Logistieke Ketenregie)
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-10 uppercase tracking-tight leading-tight text-white">Digitale Regie op Binnenstedelijke Bouwlogistiek</h2>
                  
                  <div className="space-y-10">
                    <div>
                      <h4 className="text-[10px] uppercase tracking-[0.3em] text-bridgeview-amber font-bold mb-3">De Casus</h4>
                      <p className="text-slate-400 font-light leading-relaxed text-sm">
                        Bouwen in een drukke binnenstad brengt logistieke uitdagingen met zich mee. Voor LOKET lag de uitdaging in het slimmer organiseren van de volledige bouwlogistieke keten om overlast te minimaliseren en ritten te bundelen.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-[0.3em] text-bridgeview-amber font-bold mb-3">De Interventie</h4>
                      <div className="grid gap-6">
                        <div className="space-y-2">
                          <p className="text-white text-xs font-bold uppercase tracking-widest">1. Digital Twin Ontwikkeling</p>
                          <p className="text-slate-500 font-light text-xs leading-relaxed">Het creëren van een digitale replica van logistieke stromen voor simulatie.</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-white text-xs font-bold uppercase tracking-widest">2. Bundeling & Optimalisatie</p>
                          <p className="text-slate-500 font-light text-xs leading-relaxed">Algoritmes die zendingen combineren om het aantal bewegingen met 30% te reduceren.</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-white text-xs font-bold uppercase tracking-widest">3. Real-time Planning</p>
                          <p className="text-slate-500 font-light text-xs leading-relaxed">Dynamisch dashboard dat direct reageert op wijzigingen in de bouwplanning.</p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-8 border-t border-white/10">
                      <p className="text-slate-300 font-light italic leading-relaxed text-sm mb-4">
                        "Data is hier de drijvende kracht achter duurzame stedelijke ontwikkeling."
                      </p>
                      <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-bridgeview-amber">
                        — LOKET Projectteam
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case 3: Nationaal Park Utrechtse Heuvelrug */}
            <div className="sharp-card overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 sm:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-white/5 bg-white/[0.01]">
                  <div className="inline-block px-3 py-1.5 border border-bridgeview-amber text-bridgeview-amber text-[9px] font-bold uppercase tracking-[0.2em] mb-10">
                    Klant: Nationaal Park Utrechtse Heuvelrug
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-10 uppercase tracking-tight leading-tight text-white">Publieksbetrokkenheid & Biodiversiteit in Kaart</h2>
                  
                  <div className="space-y-10">
                    <div>
                      <h4 className="text-[10px] uppercase tracking-[0.3em] text-bridgeview-amber font-bold mb-3">De Casus</h4>
                      <p className="text-slate-400 font-light leading-relaxed text-sm">
                        Er was behoefte om bezoekers actiever te betrekken bij de natuur en hen bewust te maken van de staat van het park door ecologische data inzichtelijk en inspirerend te maken voor het grote publiek.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-[0.3em] text-bridgeview-amber font-bold mb-3">De Interventie</h4>
                      <div className="grid gap-6">
                        <div className="space-y-2">
                          <p className="text-white text-xs font-bold uppercase tracking-widest">1. Citizen Science & Trends</p>
                          <p className="text-slate-500 font-light text-xs leading-relaxed">Het ontsluiten van duizenden waarnemingen om langetermijneffecten inzichtelijk te maken.</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-white text-xs font-bold uppercase tracking-widest">2. Biodiversiteit Mapping</p>
                          <p className="text-slate-500 font-light text-xs leading-relaxed">Geavanceerde functies om in te zoomen op specifieke (bedreigde) diersoorten.</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-white text-xs font-bold uppercase tracking-widest">3. Betrokkenheidsmonitoring</p>
                          <p className="text-slate-500 font-light text-xs leading-relaxed">Meten van maatschappelijke impact en betrokkenheid afgezet tegen organisatiedoelen.</p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-8 border-t border-white/10">
                      <p className="text-slate-300 font-light italic leading-relaxed text-sm mb-4">
                        "Door data tastbaar te maken, transformeren we bezoekers tot actieve ambassadeurs."
                      </p>
                      <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-bridgeview-amber">
                        — NPUH Management
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-black/40 flex flex-col items-center justify-center relative min-h-[400px] lg:min-h-[500px] p-8 lg:p-12">
                  <div className="absolute inset-0 line-grid opacity-20"></div>
                  <div className="relative z-10 w-full flex items-center justify-center mb-10">
                    <div className="relative group w-full max-w-lg">
                      <div className="absolute -inset-1 bg-gradient-to-r from-bridgeview-amber/20 to-transparent blur opacity-25"></div>
                      <img 
                        src="https://lh3.googleusercontent.com/d/1KEdKf_fSwhVZIBLVCjqCzNpvO4d5GFf7" 
                        alt="Natuurbeheer Dashboard Utrechtse Heuvelrug" 
                        className="relative border border-white/10 shadow-2xl transition-all duration-700 w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                  <div className="relative z-10 text-center">
                    <p className="text-[11px] uppercase tracking-[0.4em] text-bridgeview-amber font-bold mb-2">Focus</p>
                    <h3 className="text-sm font-light text-white uppercase tracking-widest leading-relaxed">Citizen Science & <br /> Biodiversiteit Mapping</h3>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Cases;
