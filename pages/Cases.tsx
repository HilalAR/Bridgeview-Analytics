
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
        <div className="container mx-auto px-8">
          <div className="space-y-32">
            {/* Case 1: Gasunie */}
            <div className="sharp-card overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="p-12 lg:p-16 border-r border-white/5 bg-white/[0.01]">
                  <div className="inline-block px-3 py-1.5 border border-bridgeview-amber text-bridgeview-amber text-[9px] font-bold uppercase tracking-[0.2em] mb-10">
                    Klant: Gasunie
                  </div>
                  <h2 className="text-3xl font-bold mb-10 uppercase tracking-tight leading-tight text-white">Monitoring Energietransitie & Klimaatdoelen</h2>
                  
                  <div className="space-y-10">
                    <div>
                      <h4 className="text-[10px] uppercase tracking-[0.3em] text-bridgeview-amber font-bold mb-3">De Casus</h4>
                      <p className="text-slate-400 font-light leading-relaxed text-sm">
                        De energietransitie is een van de grootste uitdagingen van deze tijd. Gasunie had behoefte aan een krachtig instrument om de voortgang van de nationale klimaatdoelstellingen nauwkeurig te monitoren. De uitdaging lag in het combineren van complexe datastromen over elektriciteitsproductie uit diverse energiebronnen (gebaseerd op NED-data) en deze af te zetten tegen de langetermijnambities van de overheid. Het doel was niet alleen om het verleden te laten zien, maar vooral om inzicht te bieden in de verwachte koers richting de toekomst.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-[0.3em] text-bridgeview-amber font-bold mb-3">De Interventie</h4>
                      <div className="grid gap-6">
                        <div className="space-y-2">
                          <p className="text-white text-xs font-bold uppercase tracking-widest">1. Real-time Productiemonitoring</p>
                          <p className="text-slate-500 font-light text-xs leading-relaxed">Het inzichtelijk maken van de actuele elektriciteitsproductie per energiebron, waarbij de groei van duurzame bronnen afgezet wordt tegen de afname van fossiele brandstoffen.</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-white text-xs font-bold uppercase tracking-widest">2. Emissie-analyse</p>
                          <p className="text-slate-500 font-light text-xs leading-relaxed">De integratie van CO2-emissiedata om de directe impact van de huidige energiemix op het klimaat te kwantificeren.</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-white text-xs font-bold uppercase tracking-widest">3. Predictieve Monitoring</p>
                          <p className="text-slate-500 font-light text-xs leading-relaxed">De ontwikkeling van modellen die op basis van huidige trends voorspellen in hoeverre de gestelde overheidsdoelen voor de komende decennia haalbaar zijn.</p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-8 border-t border-white/10">
                      <p className="text-slate-300 font-light italic leading-relaxed text-sm mb-4">
                        "Dankzij dit project zijn complexe klimaatdoelen vertaald naar een glashelder dashboard. Het vermogen om realistische voorspellingen te doen, geeft ons de regie die nodig is voor de transitie naar 2030."
                      </p>
                      <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-bridgeview-amber">
                        — Gasunie
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-black/40 flex flex-col items-center justify-center relative min-h-[500px] p-8 lg:p-12">
                  <div className="absolute inset-0 line-grid opacity-20"></div>
                  <div className="relative z-10 w-full flex items-center justify-center mb-10">
                    <div className="relative group w-full">
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
                <div className="bg-black/40 flex flex-col items-center justify-center relative min-h-[500px] p-8 lg:p-12 order-2 lg:order-1">
                  <div className="absolute inset-0 line-grid opacity-20"></div>
                  <div className="relative z-10 w-full h-full flex items-center justify-center mb-10">
                    <div className="relative group w-full aspect-[4/3] bg-slate-900/40 overflow-hidden border border-white/10 shadow-2xl">
                       <img 
                        src="https://i.imgur.com/L1JjhSS.png" 
                        alt="Digital Twin Visualisatie LOKET" 
                        className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="flex flex-col items-center">
                           <div className="w-12 h-12 border-2 border-bridgeview-amber border-t-transparent rounded-full animate-spin mb-4"></div>
                           <p className="text-[9px] uppercase tracking-[0.4em] font-bold text-white shadow-sm">Digital Twin Active</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative z-10 text-center">
                    <p className="text-[11px] uppercase tracking-[0.4em] text-bridgeview-amber font-bold mb-2">Focus</p>
                    <h3 className="text-sm font-light text-white uppercase tracking-widest leading-relaxed">Digital Twins & <br /> Stedelijke Bereikbaarheid</h3>
                  </div>
                </div>

                <div className="p-12 lg:p-16 border-l border-white/5 order-1 lg:order-2 bg-white/[0.01]">
                  <div className="inline-block px-3 py-1.5 border border-bridgeview-amber text-bridgeview-amber text-[9px] font-bold uppercase tracking-[0.2em] mb-10">
                    Klant: LOKET (Logistieke Ketenregie)
                  </div>
                  <h2 className="text-3xl font-bold mb-10 uppercase tracking-tight leading-tight text-white">LOKET – Digitale Regie op Binnenstedelijke Bouwlogistiek</h2>
                  
                  <div className="space-y-10">
                    <div>
                      <h4 className="text-[10px] uppercase tracking-[0.3em] text-bridgeview-amber font-bold mb-3">De Casus</h4>
                      <p className="text-slate-400 font-light leading-relaxed text-sm">
                        Bouwen in een drukke binnenstad brengt enorme logistieke uitdagingen met zich mee: beperkte ruimte, strikte venstertijden en de noodzaak om overlast voor de omgeving te minimaliseren. Voor het project LOKET lag de uitdaging in het slimmer organiseren van de volledige bouwlogistieke keten. Er was een gebrek aan centraal overzicht, waardoor ritten niet optimaal gebundeld werden en wachttijden op de bouwplaats opliepen. De vraag was hoe data ingezet kon worden om de regie terug te krijgen en de druk op de stad te verlagen.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-[0.3em] text-bridgeview-amber font-bold mb-3">De Interventie</h4>
                      <div className="grid gap-6">
                        <div className="space-y-2">
                          <p className="text-white text-xs font-bold uppercase tracking-widest">1. Digital Twin Ontwikkeling</p>
                          <p className="text-slate-500 font-light text-xs leading-relaxed">Het creëren van een digitale replica van de logistieke stromen om knelpunten te simuleren en te voorspellen.</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-white text-xs font-bold uppercase tracking-widest">2. Bundeling & Optimalisatie</p>
                          <p className="text-slate-500 font-light text-xs leading-relaxed">Algoritmes die zendingen combineren om het aantal vrachtwagenbewegingen in de binnenstad met 30% te reduceren.</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-white text-xs font-bold uppercase tracking-widest">3. Real-time Planning</p>
                          <p className="text-slate-500 font-light text-xs leading-relaxed">Een dynamisch dashboard voor planners dat direct reageert op vertragingen of wijzigingen in de bouwplanning.</p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-8 border-t border-white/10">
                      <p className="text-slate-300 font-light italic leading-relaxed text-sm mb-4">
                        "Door de inzet van de Digital Twin hebben we niet alleen de overlast beperkt, maar ook een enorme rust in de keten gecreëerd. Data is hier de drijvende kracht achter duurzame stedelijke ontwikkeling."
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
                <div className="p-12 lg:p-16 border-r border-white/5 bg-white/[0.01]">
                  <div className="inline-block px-3 py-1.5 border border-bridgeview-amber text-bridgeview-amber text-[9px] font-bold uppercase tracking-[0.2em] mb-10">
                    Klant: Nationaal Park Utrechtse Heuvelrug
                  </div>
                  <h2 className="text-3xl font-bold mb-10 uppercase tracking-tight leading-tight text-white">Publieksbetrokkenheid & Biodiversiteit in Kaart</h2>
                  
                  <div className="space-y-10">
                    <div>
                      <h4 className="text-[10px] uppercase tracking-[0.3em] text-bridgeview-amber font-bold mb-3">De Casus</h4>
                      <p className="text-slate-400 font-light leading-relaxed text-sm">
                        Het Nationaal Park Utrechtse Heuvelrug beschikt over een schat aan ecologische informatie, maar deze bleef vaak onzichtbaar voor de bezoekers en omwonenden. Er was een sterke behoefte om mensen actiever te betrekken bij de natuur en hen bewust te maken van de staat van het park. De uitdaging was om complexe data over biodiversiteit en milieu niet alleen inzichtelijk te maken voor experts, maar juist ook toegankelijk en inspirerend te maken voor het grote publiek. Het doel was om bezoekers meer betrokken te laten raken en hen te transformeren tot actieve ambassadeurs van de Heuvelrug.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-[0.3em] text-bridgeview-amber font-bold mb-3">De Interventie</h4>
                      <p className="text-slate-400 font-light leading-relaxed text-sm mb-6">
                        Wij hebben een interactief dataplatform ontwikkeld dat fungeert als een digitaal venster op de natuur van het park. Door data tastbaar te maken, hebben we de verbinding tussen mens en natuur versterkt. Onze aanpak omvatte:
                      </p>
                      <div className="grid gap-6">
                        <div className="space-y-2">
                          <p className="text-white text-xs font-bold uppercase tracking-widest">1. Citizen Science & Trendanalyse</p>
                          <p className="text-slate-500 font-light text-xs leading-relaxed">Het ontsluiten van tienduizenden waarnemingen van vogels en planten door bezoekers. Door deze data te visualiseren over de periode 2021-2024, worden de langetermijneffecten van het natuurbeheer direct inzichtelijk.</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-white text-xs font-bold uppercase tracking-widest">2. Inzoomen op Biodiversiteit & Rode Lijst</p>
                          <p className="text-slate-500 font-light text-xs leading-relaxed">Een geavanceerde functie waarmee gebruikers diepgaand kunnen inzoomen op specifieke diersoorten. Hierbij worden waarnemingen van bedreigde soorten op de Rode Lijst gemarkeerd, waardoor de noodzaak voor natuurbescherming zichtbaar wordt gemaakt.</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-white text-xs font-bold uppercase tracking-widest">3. Geografische Interactie op de Kaart</p>
                          <p className="text-slate-500 font-light text-xs leading-relaxed">De integratie van een interactieve kaart die exact laat zien waar specifieke soorten in het park zijn gespot. Dit vergroot de lokale betrokkenheid en maakt de biodiversiteit op de Heuvelrug tastbaar voor elke bezoeker.</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-white text-xs font-bold uppercase tracking-widest">4. Betrokkenheidsmonitoring & KPI's</p>
                          <p className="text-slate-500 font-light text-xs leading-relaxed">Het dashboard meet specifiek de "Betrokkenheid van bezoekers per jaar" en zet deze af tegen de gestelde organisatiedoelen. Hierdoor wordt de maatschappelijke impact van het park kwantificeerbaar en stuurbaar.</p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-8 border-t border-white/10">
                      <p className="text-slate-300 font-light italic leading-relaxed text-sm mb-4">
                        "Door data tastbaar en interactief te maken, transformeren we bezoekers van passieve toehoorders naar actieve ambassadeurs van onze natuur."
                      </p>
                      <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-bridgeview-amber">
                        — NPUH Management
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-black/40 flex flex-col items-center justify-center relative min-h-[500px] p-8 lg:p-12">
                  <div className="absolute inset-0 line-grid opacity-20"></div>
                  <div className="relative z-10 w-full flex items-center justify-center mb-10">
                    <div className="relative group w-full">
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
