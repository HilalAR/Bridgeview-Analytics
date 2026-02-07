
import React, { useState } from 'react';
import { Icons } from '../constants';
import { Page } from '../types';

interface DashboardsProps {
  onNavigate: (page: Page) => void;
}

const Dashboards: React.FC<DashboardsProps> = ({ onNavigate }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const dashboardList = [
    {
      id: "power-bi",
      title: "Power BI Core",
      desc: "De centrale spil van uw data-ecosysteem. Wij integreren al uw bronnen tot één krachtig visueel instrument.",
      details: "Door ERP-systemen (SAP, Exact, MS Dynamics) te koppelen aan realtime cloud-data, bieden wij een fundament voor snelle en foutloze rapportage. Geen losse Excel-lijsten meer, maar één waarheid.",
      icon: <Icons.Data />
    },
    {
      id: "kpi",
      title: "KPI Performance",
      desc: "Realtime monitoring van uw meest kritieke operationele processen voor directe bijsturing.",
      details: "Inzicht in 'landed-cost', doorlooptijden in het magazijn en picking-efficiëntie. Met dit dashboard ziet u direct waar knelpunten ontstaan voordat ze uw marge aantasten.",
      icon: <Icons.Strategy />
    },
    {
      id: "management",
      title: "Strategic Management",
      desc: "Een helikopterview voor de directie, van EBITDA tot marktpenetratie and strategische mijlpalen.",
      details: "Geen technische ruis, maar actiegerichte inzichten voor strategische besluitvorming. Volg de voortgang van uw jaarplannen en financiële gezondheid in één oogopslag.",
      icon: <Icons.Strategy />
    },
    {
      id: "financial",
      title: "Financial Insights",
      desc: "Maximale grip op uw cashflow, debiteurenposities en de werkelijke netto-marges per eenheid.",
      details: "Door financiële data te koppelen aan operationele kosten (logistiek, verpakking, retour), berekenen wij uw werkelijke winstgevendheid per product of klant.",
      icon: <Icons.Data />
    },
    {
      id: "hr",
      title: "HR & Workforce",
      desc: "Inzicht in verzuim, personeelsverloop en de productiviteit per afdeling of shift.",
      details: "Optimaliseer uw personeelsbezetting op basis van historische data en voorspellingen. Verminder onnodige overhead en verhoog de betrokkenheid door meetbare prestaties.",
      icon: <Icons.Check />
    },
    {
      id: "marketing",
      title: "Marketing ROI",
      desc: "Kwantificeerbare resultaten van uw campagnes en klantacquisitiekosten (CAC) per kanaal.",
      details: "Koppel marketinguitgaven direct aan conversies en lifetime value. Zo investeert u uitsluitend in kanalen die werkelijk bijdragen aan uw groei.",
      icon: <Icons.Data />
    },
    {
      id: "sales",
      title: "Sales Funnel",
      desc: "Optimaliseer uw volledige conversieratio van lead tot order en identificeer kansen in de markt.",
      details: "Monitor de performance van uw salesteam en identificeer trends in klantgedrag. Voorspel toekomstige omzet met hogere nauwkeurigheid door data-gedreven forecasting.",
      icon: <Icons.Strategy />
    }
  ];

  const coreServices = [
    {
      id: "bi-consultant",
      title: "BI Consultant",
      desc: "Direct inzetbare expertise voor het optimaliseren van uw huidige Power BI infrastructuur.",
      details: [
        "Ervaren Power BI Consultants",
        "Direct inzetbaar voor jouw project",
        "Optimaliseren van huidige Power BI Dashboard en infrastructuur",
        "In kaart brengen van databronnen, KPI’s en indeling",
        "Maak sneller datagedreven beslissingen",
        "Alle rapportages automatiseren en dagelijks laten verversen"
      ],
      icon: <Icons.Strategy />
    },
    {
      id: "datawarehouse",
      title: "Datawarehouse",
      desc: "Alle data van uw organisatie veilig en consistent ondergebracht in één krachtig systeem.",
      details: [
        "Datawarehouse Opzetten",
        "Alle data van uw organisatie onder in één systeem",
        "Combineer data uit meerdere systemen",
        "Sneller analyseren van data binnen uw organisatie",
        "Verkrijg nieuwe inzichten die niet eerder zichtbaar waren",
        "Verbeter de kwaliteit en consistentie van uw data",
        "Ontlast operationele systemen",
        "Sneller beslissingen maken en beter geïnformeerd zijn"
      ],
      icon: <Icons.Data />
    },
    {
      id: "data-consultancy",
      title: "Data Consultancy",
      desc: "Ontdek de verborgen waarde van uw data en breng structuur aan voor maximaal inzicht.",
      details: [
        "Ontdek de waarde van uw data met Data Consultancy",
        "Leer effectiever om te gaan met uw data opslag",
        "Breng structuur aan in uw data voor meer inzicht",
        "Krijg sneller inzicht en wees concurrentie voor",
        "Leer welke tools u nodig heeft voor resultaat",
        "Maak informatie inzichtelijk wanneer u dat wilt",
        "Automatiseer handmatig werk",
        "Maak tijd vrij voor zaken die er écht toe doen"
      ],
      icon: <Icons.Check />
    }
  ];

  const governanceServices = [
    {
      id: "dpia",
      title: "DPIA (Data Protection Impact Assessment)",
      desc: "Een DPIA is wettelijk verplicht voor organisaties die op grote schaal persoonsgegevens verwerken.",
      details: [
        "Het niet uitvoeren van deze risicoanalyse bij grote dataprojecten kan leiden tot aanzienlijke boetes van de Autoriteit Persoonsgegevens.",
        "Bij ernstige tekortkomingen kan de AP het stilleggen van uw datasystemen eisen.",
        "Wij borgen 'Privacy by Design' bij de inrichting van uw nieuwe Data Warehouse of BI-omgeving."
      ],
      icon: <Icons.Check />
    },
    {
      id: "avg-compliance",
      title: "AVG / GDPR Compliance Audit",
      desc: "Voorkom juridische sancties door een volledige audit op uw huidige gegevensstromen.",
      details: [
        "Boetes voor non-compliance kunnen oplopen tot €20 miljoen of 4% van de wereldwijde jaaromzet.",
        "Wij identificeren blinde vlekken in uw data-opslag en verwerking.",
        "Elimineer het risico op datalekken voordat ze ontstaan."
      ],
      icon: <Icons.Strategy />
    },
    {
      id: "data-quality",
      title: "Data Quality & Integriteitsmeting",
      desc: "Garandeer de betrouwbaarheid van uw managementrapportages met een diepgaande kwaliteitsanalyse.",
      details: [
        "Besluitvorming op basis van vervuilde data ('Garbage in, Garbage out') leidt tot kostbare strategische missers.",
        "Wij sporen dubbele records, ontbrekende waarden en foutieve bronkoppelingen op.",
        "Zorg voor een 'Single Source of Truth' waar de gehele organisatie op durft te vertrouwen."
      ],
      icon: <Icons.Data />
    },
    {
      id: "infosec-scan",
      title: "Informatiebeveiligings-scan",
      desc: "Bescherm uw bedrijfsgeheimen en klantdata tegen ongeautoriseerde toegang en cyberrisico's.",
      details: [
        "Een datalek zorgt voor onherstelbare reputatieschade en verlies van marktvertrouwen.",
        "Toetsing van uw BI-omgeving aan de strengste kaders (ISO 27001 / NEN 7510).",
        "Beveiliging van de cloud-architectuur (Azure) en toegangsbeheer op dashboard-niveau."
      ],
      icon: <Icons.Check />
    }
  ];

  return (
    <div className="animate-in fade-in duration-1000 line-grid">
      {/* Header Section */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl">
            <div className="inline-block h-1 w-16 bg-bridgeview-amber mb-8"></div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-8 tracking-tight uppercase text-white">
              Oplossingen & Diensten
            </h1>
            <p className="text-lg text-slate-400 font-light leading-relaxed">
              Wij bieden een totaalpakket aan data-oplossingen. Van specialistische dashboards tot strategisch advies en technische infrastructuur. Wij transformeren data naar strategisch voordeel.
            </p>
          </div>
        </div>
      </section>

      {/* Dashboards Section */}
      <section className="py-24">
        <div className="container mx-auto px-8">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-2xl font-bold uppercase tracking-[0.2em] text-white">Dashboard Oplossingen</h2>
            <div className="h-px flex-grow bg-white/5"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
            {dashboardList.map((item) => (
              <div 
                key={item.id} 
                className={`sharp-card p-10 flex flex-col justify-between transition-all duration-500 bg-white/[0.02] border-white/10 hover:border-bridgeview-amber/30 hover:bg-white/[0.04] ${
                  expandedId === item.id ? 'lg:col-span-2 border-bridgeview-amber/40 shadow-2xl' : ''
                }`}
              >
                <div>
                  <div className="flex items-center gap-5 mb-8">
                    <div className="w-12 h-12 flex items-center justify-center border border-bridgeview-amber/20 bg-bridgeview-amber/5 text-bridgeview-amber group-hover:border-bridgeview-amber/40 transition-all">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold uppercase tracking-widest text-white">{item.title}</h3>
                  </div>
                  
                  <p className="text-slate-400 font-light mb-6 leading-relaxed text-sm">
                    {item.desc}
                  </p>

                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedId === item.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pt-6 border-t border-white/10 mt-6">
                      <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-bridgeview-amber mb-3">Business Waarde</h4>
                      <p className="text-slate-400 font-light leading-relaxed text-sm italic">
                        {item.details}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 mt-10 border-t border-white/5 flex justify-between items-center">
                  <button 
                    onClick={() => onNavigate(Page.Contact)}
                    className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-white/80 hover:text-bridgeview-amber transition-all group/btn"
                  >
                    <span className="w-1.5 h-1.5 bg-bridgeview-amber rounded-full animate-pulse"></span>
                    Plan een gesprek
                  </button>
                  
                  <button 
                    onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                    className="text-[11px] uppercase tracking-[0.2em] font-bold text-bridgeview-amber hover:text-white transition-all transform hover:translate-x-1"
                  >
                    {expandedId === item.id ? 'Inklappen' : 'Lees meer'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-black/20 border-y border-white/5">
        <div className="container mx-auto px-8">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-2xl font-bold uppercase tracking-[0.2em] text-white">Diensten & Expertise</h2>
            <div className="h-px flex-grow bg-white/5"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-1 mb-20">
            {coreServices.map((item) => (
              <div 
                key={item.id} 
                className={`sharp-card p-10 flex flex-col justify-between transition-all duration-500 bg-white/[0.02] border-white/10 hover:border-bridgeview-amber/30 hover:bg-white/[0.04] ${
                  expandedId === item.id ? 'md:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center gap-5 mb-8">
                    <div className="w-12 h-12 flex items-center justify-center border border-bridgeview-amber/20 bg-bridgeview-amber/5 text-bridgeview-amber">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold uppercase tracking-widest text-white">{item.title}</h3>
                  </div>
                  
                  <p className="text-slate-400 font-light mb-6 leading-relaxed text-sm">
                    {item.desc}
                  </p>

                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedId === item.id ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pt-6 border-t border-white/10 mt-6">
                      <ul className="space-y-3">
                        {item.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <Icons.Check />
                            <span className="text-slate-400 font-light text-sm leading-snug">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="pt-8 mt-10 border-t border-white/5 flex justify-between items-center">
                  <button 
                    onClick={() => onNavigate(Page.Contact)}
                    className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-white/80 hover:text-bridgeview-amber transition-all group/btn"
                  >
                    <span className="w-1.5 h-1.5 bg-bridgeview-amber rounded-full animate-pulse"></span>
                    Plan een gesprek
                  </button>
                  
                  <button 
                    onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                    className="text-[11px] uppercase tracking-[0.2em] font-bold text-bridgeview-amber hover:text-white transition-all transform hover:translate-x-1"
                  >
                    {expandedId === item.id ? 'Inklappen' : 'Lees meer'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* New Data Trust, Governance & Compliance Section */}
          <div className="mb-12">
            <h3 className="text-xl font-bold uppercase tracking-[0.1em] text-white mb-4">Data Trust, Governance & Compliance</h3>
            <p className="text-slate-400 font-light leading-relaxed max-w-4xl">
              Naast het visualiseren van inzichten, is het borgen van de veiligheid en wettelijke kaders van uw data essentieel voor de continuïteit van uw organisatie.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1">
            {governanceServices.map((item) => (
              <div 
                key={item.id} 
                className={`sharp-card p-8 flex flex-col justify-between transition-all duration-500 bg-white/[0.02] border-white/10 hover:border-bridgeview-amber/30 hover:bg-white/[0.04] ${
                  expandedId === item.id ? 'lg:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 flex items-center justify-center border border-bridgeview-amber/20 bg-bridgeview-amber/5 text-bridgeview-amber shrink-0">
                      {item.icon}
                    </div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-white leading-tight">{item.title}</h4>
                  </div>
                  
                  <p className="text-slate-400 font-light mb-4 leading-relaxed text-xs">
                    {item.desc}
                  </p>

                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedId === item.id ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pt-4 border-t border-white/10 mt-4">
                      <ul className="space-y-3">
                        {item.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Icons.Check />
                            <span className="text-slate-400 font-light text-[11px] leading-snug">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex justify-between items-center">
                  <button 
                    onClick={() => onNavigate(Page.Contact)}
                    className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-white/80 hover:text-bridgeview-amber transition-all group/btn"
                  >
                    <span className="w-1.5 h-1.5 bg-bridgeview-amber rounded-full animate-pulse"></span>
                    Plan een gesprek
                  </button>
                  <button 
                    onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                    className="text-[10px] uppercase tracking-[0.2em] font-bold text-bridgeview-amber hover:text-white transition-all transform hover:translate-x-1"
                  >
                    {expandedId === item.id ? 'Inklappen' : 'Lees meer'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Guarantees */}
      <section className="py-16 bg-black/40">
        <div className="container mx-auto px-8">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
              <div className="flex gap-6 items-start">
                 <div className="text-bridgeview-amber font-bold text-2xl opacity-50">01</div>
                 <div>
                    <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-2">Realtime Sync</h4>
                    <p className="text-xs text-slate-500 font-light">Uw dashboards zijn direct gekoppeld aan de bron.</p>
                 </div>
              </div>
              <div className="flex gap-6 items-start">
                 <div className="text-bridgeview-amber font-bold text-2xl opacity-50">02</div>
                 <div>
                    <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-2">Mobile Ready</h4>
                    <p className="text-xs text-slate-500 font-light">Inzichten op uw smartphone, tablet of desktop.</p>
                 </div>
              </div>
              <div className="flex gap-6 items-start">
                 <div className="text-bridgeview-amber font-bold text-2xl opacity-50">03</div>
                 <div>
                    <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-2">Compliance & Privacy</h4>
                    <p className="text-xs text-slate-500 font-light">Volledig ingericht volgens de AVG-richtlijnen en DPIA-standaarden.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboards;
