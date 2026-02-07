
import React, { useState } from 'react';
import { Page } from '../types';
import { Icons } from '../constants';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [expandedExpertise, setExpandedExpertise] = useState<string | null>(null);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const openDemoModal = (service: string) => {
    setSelectedService(service);
    setIsDemoModalOpen(true);
    setDemoSubmitted(false);
  };

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDemoSubmitted(true);
    // In a real app, you would send the data to a backend here
  };

  const expertiseItems = [
    {
      id: 'power-bi',
      title: 'Power BI Dashboards',
      intro: 'Ontwikkeld door de experts van BridgeView Analytics. Verliest uw organisatie kostbare tijd aan het handmatig samenstellen van rapportages uit uiteenlopende databronnen?',
      moreTitle: 'Automatisering en Betrouwbaarheid',
      moreContent: 'BridgeView Analytics biedt de definitieve oplossing. Met een op maat gemaakt Power BI Dashboard automatiseren wij deze tijdrovende processen, waardoor u direct ruimte creëert voor analyse en strategie in plaats van data-verwerking. Een Power BI Dashboard van BridgeView Analytics zorgt ervoor dat u niet langer afhankelijk bent van handmatige dataverzameling. Uw gegevens uit verschillende bronnen worden automatisch ververst en samengevoegd tot één helder overzicht. Dit minimaliseert de kans op menselijke fouten aanzienlijk en garandeert dat u beslissingen neemt op basis van een \'Single Source of Truth\'. Wij slaan de brug tussen uw ruwe data en feitelijk onderbouwde besluitvorming.',
      extra: 'Inzichten die perfect aansluiten: Met onze diepgaande ervaring ontwikkelen wij overzichtelijke Power BI dashboards die naadloos aansluiten bij de specifieke behoeften van uw organisatie. Wij zorgen ervoor dat u precies die inzichten krijgt die nodig zijn om uw rendement te verhogen en uw processen te optimaliseren.'
    },
    {
      id: 'kpi-dashboards',
      title: 'KPI Dashboards',
      intro: 'Bent u op zoek naar een partner die uw bedrijfsdoelstellingen vertaalt naar meetbaar resultaat?',
      moreTitle: 'Expertise in Datagestuurde Sturing',
      moreContent: 'BridgeView Analytics is gespecialiseerd in het ontwerpen en implementeren van hoogwaardige KPI-dashboards. Wij geloven dat data pas waarde krijgt wanneer het aanzet tot actie. Daarom bieden wij gespecialiseerde oplossingen voor elke laag van uw organisatie, variërend van strategische CFO- en Management Dashboards tot operationele inzichten via Sales, HR, Marketing en Finance Dashboards.',
      extra: 'Onze ervaren professionals slaan de brug tussen uw visie en de techniek. Wij helpen u niet alleen bij het technisch opzetten van deze dashboards, maar adviseren u ook bij het identificeren van de juiste Critical Success Factors (CSF\'s) en het ontsluiten van de benodigde data. Met een Business Intelligence Dashboard van BridgeView Analytics transformeert u complexe datastromen naar een helder kompas voor uw dagelijkse bedrijfsvoering.'
    },
    {
      id: 'bi-consultancy',
      title: 'BI Consultancy',
      intro: 'Bent u op zoek naar gespecialiseerde BI-consultants die uw organisatie kunnen ondersteunen bij complexe data-uitdagingen?',
      moreTitle: 'Flexibele Ondersteuning op Maat',
      moreContent: 'BridgeView Analytics beschikt over een team van hoogwaardige professionals die de technische diepgang en het bedrijfskundig inzicht combineren om uw projecten tot een succes te maken. Of u nu behoefte heeft aan expertise voor een specifiek kortlopend project of aan langdurige ondersteuning binnen uw team: onze consultants staan voor u klaar.',
      extra: 'Grip op Resultaat en Efficiency: Wij werken zowel remote als bij u op locatie (inhouse), naadloos geïntegreerd met uw eigen organisatie. Onze consultants zijn experts in het volledige spectrum van Business Intelligence, Data Warehouse Architectuur en Power BI Consultancy. Wij slaan de brug tussen uw huidige data-infrastructuur en de gewenste informatiebehoefte. Vertel ons meer over uw specifieke uitdaging; wij kijken graag hoe onze consultants uw organisatie direct kunnen versterken.'
    }
  ];

  return (
    <div className="animate-in fade-in duration-1000 line-grid">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center pt-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-bridgeview-amber/5 to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="w-8 h-px bg-bridgeview-amber"></div>
              <span className="text-[11px] uppercase tracking-[0.5em] text-bridgeview-amber font-bold">
                Strategic Intelligence Partner
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-light leading-[1.2] mb-10 tracking-tight uppercase text-white">
              Strategische <br /> Besluitvorming via <br />
              <span className="font-bold text-bridgeview-amber">Data-Analyse.</span>
            </h1>
            
            <p className="text-base text-slate-400 leading-relaxed max-w-2xl mb-12 font-light">
              BridgeView Analytics adviseert MKB+ ondernemingen in de logistiek en e-commerce bij het optimaliseren van bedrijfsprocessen. Wij transformeren complexe datastromen naar meetbare winstgevendheid and operationele controle.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => onNavigate(Page.Contact)}
                className="px-10 py-4 bg-bridgeview-amber text-bridgeview-dark font-bold text-[12px] uppercase tracking-widest hover:bg-white transition-all shadow-xl"
              >
                Strategisch Consult
              </button>
              <button 
                onClick={() => onNavigate(Page.Dashboards)}
                className="px-10 py-4 border border-white/20 text-white font-bold text-[12px] uppercase tracking-widest hover:bg-white/10 transition-all"
              >
                Onze Oplossingen
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Value Section */}
      <section className="py-24 bg-black/30 border-y border-white/5">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-light mb-10 leading-tight tracking-tight uppercase text-white">
                Verbind uw data met <br />
                <span className="font-bold text-bridgeview-amber">uw Strategie</span>
              </h2>
              <div className="space-y-6 text-slate-400 font-light leading-relaxed">
                <p>
                  Data Analytics creëert waardevolle inzichten uit uw data door het toepassen van Business Intelligence. Beschikt uw organisatie over grote hoeveelheden gegevens die cruciaal zijn om de juiste beslissingen te nemen, efficiënter te werken, kosten te besparen of juist meer omzet te genereren?
                </p>
                <p>
                  Verschillende softwareprogramma’s, afdelingen of dataformaten maken het helaas niet altijd gemakkelijk om alles effectief op elkaar af te stemmen. BridgeView Analytics zorgt voor de noodzakelijke koppeling, zodat u het hoogste rendement behaalt uit de data waarover u beschikt.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
              {[
                {
                  title: "Geautomatiseerde rapportages",
                  desc: "Naadloze koppeling en visualisatie van uw databronnen."
                },
                {
                  title: "Weloverwogen beslissingen",
                  desc: "Keuzes maken op basis van doelen, data en feiten."
                },
                {
                  title: "Begrijpelijke analyses",
                  desc: "Vertaling van complexe data naar heldere rapportages."
                },
                {
                  title: "Maatwerk aansluiting",
                  desc: "Analytics die exact aansluiten op de specifieke behoeften van uw organisatie."
                }
              ].map((item, i) => (
                <div key={i} className="sharp-card p-8 bg-white/5 border-white/10 hover:border-bridgeview-amber/30 transition-all">
                  <div className="mb-6 flex items-center justify-center w-10 h-10 bg-bridgeview-amber/10 border border-bridgeview-amber/20">
                    <Icons.Check />
                  </div>
                  <h3 className="text-sm font-bold mb-3 uppercase tracking-widest text-white leading-snug">{item.title}</h3>
                  <p className="text-slate-500 font-light text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Expertise Section */}
      <section className="py-24">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl lg:text-3xl font-light uppercase tracking-[0.2em] mb-4 text-white">
              Welkom bij <span className="font-bold text-bridgeview-amber">BridgeView Analytics</span>
            </h2>
            <div className="w-16 h-px bg-bridgeview-amber/40 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-1">
            {expertiseItems.map((item) => (
              <div 
                key={item.id} 
                className={`sharp-card p-10 flex flex-col justify-between transition-all duration-500 bg-white/[0.02] border-white/10 hover:border-bridgeview-amber/30 hover:bg-white/[0.04] ${
                  expandedExpertise === item.id ? 'lg:col-span-2 ring-1 ring-bridgeview-amber/20' : ''
                }`}
              >
                <div>
                  <div className="flex items-center gap-5 mb-8">
                    <div className="w-12 h-12 flex items-center justify-center border border-bridgeview-amber/20 bg-bridgeview-amber/5 text-bridgeview-amber">
                      {item.id === 'power-bi' ? <Icons.Data /> : item.id === 'kpi-dashboards' ? <Icons.Strategy /> : <Icons.Check />}
                    </div>
                    <h3 className="text-lg font-bold uppercase tracking-widest text-white leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  
                  <p className="text-slate-400 font-light mb-6 leading-relaxed text-sm">
                    {item.intro}
                  </p>

                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedExpertise === item.id ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pt-6 border-t border-white/10 mt-6 space-y-6">
                      <div>
                        <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-bridgeview-amber mb-3">
                          {item.moreTitle}
                        </h4>
                        <p className="text-slate-400 font-light leading-relaxed text-sm">
                          {item.moreContent}
                        </p>
                      </div>
                      <p className="text-slate-300 font-light italic leading-relaxed text-sm bg-white/5 p-4 border-l border-bridgeview-amber/40">
                        {item.extra}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 mt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
                  <button 
                    onClick={() => setExpandedExpertise(expandedExpertise === item.id ? null : item.id)}
                    className="text-[11px] uppercase tracking-[0.2em] font-bold text-bridgeview-amber hover:text-white transition-all group flex items-center gap-2"
                  >
                    {expandedExpertise === item.id ? 'Minder info' : 'Lees meer'}
                    <svg 
                      className={`w-4 h-4 transition-transform duration-300 ${expandedExpertise === item.id ? 'rotate-180' : ''}`} 
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <button 
                    onClick={() => openDemoModal(item.title)}
                    className="w-full sm:w-auto px-6 py-3 bg-white/5 border border-white/10 text-white font-bold text-[10px] uppercase tracking-widest hover:bg-bridgeview-amber hover:text-bridgeview-dark hover:border-bridgeview-amber transition-all"
                  >
                    Plan een demo-sessie
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Request Modal - Matches Sectors modal & adjusted positioning */}
      {isDemoModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center p-4 sm:p-8 pt-24 sm:pt-32 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-md overflow-hidden shadow-[0_0_50px_-12px_rgba(197,160,89,0.2)] max-h-[90vh] overflow-y-auto">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-bridgeview-amber sticky z-20"></div>
            
            <div className="bg-[#0B222E] border border-white/10 p-8 lg:p-12">
              <button 
                onClick={() => setIsDemoModalOpen(false)}
                className="absolute top-6 right-6 text-slate-500 hover:text-white transition-all p-2 hover:bg-white/5"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {demoSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-12 h-12 bg-bridgeview-amber/10 border border-bridgeview-amber/20 flex items-center justify-center mx-auto mb-6">
                    <Icons.Check />
                  </div>
                  <h3 className="text-xl font-bold mb-3 uppercase tracking-widest text-white">Aanvraag Ontvangen</h3>
                  <p className="text-slate-400 font-light text-xs mb-8 leading-relaxed">
                    Bedankt voor uw interesse in {selectedService}. <br />Wij nemen binnen 24 uur contact met u op voor een afspraak.
                  </p>
                  <button 
                    onClick={() => setIsDemoModalOpen(false)}
                    className="px-8 py-3.5 bg-bridgeview-amber text-bridgeview-dark font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-all shadow-lg"
                  >
                    Sluiten
                  </button>
                </div>
              ) : (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-400">
                  <h3 className="text-xl lg:text-2xl font-bold mb-2 uppercase tracking-widest text-white">Demo Sessie Plannen</h3>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-bridgeview-amber font-bold mb-8 border-b border-white/5 pb-4">Service: {selectedService}</p>
                  
                  <form onSubmit={handleDemoSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-widest font-black text-slate-400">Volledige Naam</label>
                      <input 
                        required 
                        className="w-full bg-white/[0.02] border border-white/10 px-4 py-3.5 focus:border-bridgeview-amber focus:bg-white/[0.04] outline-none transition-all text-xs font-light text-white placeholder:text-slate-600" 
                        type="text" 
                        placeholder="Uw naam"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-widest font-black text-slate-400">Zakelijk E-mailadres</label>
                      <input 
                        required 
                        className="w-full bg-white/[0.02] border border-white/10 px-4 py-3.5 focus:border-bridgeview-amber focus:bg-white/[0.04] outline-none transition-all text-xs font-light text-white placeholder:text-slate-600" 
                        type="email" 
                        placeholder="naam@bedrijf.nl"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-widest font-black text-slate-400">Telefoonnummer</label>
                      <input 
                        required 
                        className="w-full bg-white/[0.02] border border-white/10 px-4 py-3.5 focus:border-bridgeview-amber focus:bg-white/[0.04] outline-none transition-all text-xs font-light text-white placeholder:text-slate-600" 
                        type="tel" 
                        placeholder="+31 6 ..."
                      />
                    </div>
                    <div className="pt-4">
                      <button className="w-full py-4 bg-bridgeview-amber text-bridgeview-dark font-black text-[11px] uppercase tracking-[0.2em] hover:bg-white transition-all shadow-xl active:scale-[0.98]">
                        Versturen
                      </button>
                      <p className="text-[8px] text-center mt-5 text-slate-600 font-medium uppercase tracking-widest opacity-60">
                        Vertrouwelijk en veilig.
                      </p>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Final CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-light text-white mb-10 tracking-tight uppercase">
            Optimaliseer Uw <span className="font-bold text-bridgeview-amber">Bedrijfsvoering.</span>
          </h2>
          <button 
            onClick={() => onNavigate(Page.Contact)}
            className="px-12 py-5 bg-bridgeview-amber text-bridgeview-dark font-bold text-[13px] uppercase tracking-[0.3em] hover:bg-white transition-all shadow-xl"
          >
            Spreken met een Consultant
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
