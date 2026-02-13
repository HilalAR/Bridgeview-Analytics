
import React, { useState } from 'react';
import { Icons } from '../constants';
import { Page } from '../types';

interface DashboardsProps {
  onNavigate: (page: Page) => void;
}

const Dashboards: React.FC<DashboardsProps> = ({ onNavigate }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  
  // States voor Dashboard Modal
  const [isDashboardModalOpen, setIsDashboardModalOpen] = useState(false);
  const [selectedDashboard, setSelectedDashboard] = useState('');
  const [dashboardFormSubmitted, setDashboardFormSubmitted] = useState(false);
  const [isDashboardSubmitting, setIsDashboardSubmitting] = useState(false);

  // States voor Core Services Modal (Diensten & Expertise)
  const [isCoreModalOpen, setIsCoreModalOpen] = useState(false);
  const [selectedCoreService, setSelectedCoreService] = useState('');
  const [coreFormSubmitted, setCoreFormSubmitted] = useState(false);
  const [isCoreSubmitting, setIsCoreSubmitting] = useState(false);

  // States voor Governance Modal
  const [isGovernanceModalOpen, setIsGovernanceModalOpen] = useState(false);
  const [selectedGovernanceService, setSelectedGovernanceService] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Dashboard Modal functies
  const openDashboardModal = (title: string) => {
    setSelectedDashboard(title);
    setIsDashboardModalOpen(true);
    setDashboardFormSubmitted(false);
    setIsDashboardSubmitting(false);
  };

  const handleDashboardSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsDashboardSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSc0bRh7olBiLLxyPPXqrPNCdi6nSFK34ws5s-BUjOmaoDU7gg/formResponse";

    const data = new URLSearchParams();
    data.append('entry.1344690569', selectedDashboard); 
    data.append('entry.2147357087', formData.get('naam') as string); 
    data.append('entry.1250109506', formData.get('email') as string); 
    data.append('entry.1077654435', formData.get('telefoon') as string); 

    try {
      await fetch(googleFormUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: data
      });
      setDashboardFormSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
      setDashboardFormSubmitted(true);
    } finally {
      setIsDashboardSubmitting(false);
    }
  };

  // Core Services Modal functies
  const openCoreModal = (title: string) => {
    setSelectedCoreService(title);
    setIsCoreModalOpen(true);
    setCoreFormSubmitted(false);
    setIsCoreSubmitting(false);
  };

  const handleCoreSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsCoreSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSc7P59PJqbAlnGfGBxGy1aA8JZ8IxzdxsN24aGYu3X2MbLp5Q/formResponse";

    const data = new URLSearchParams();
    data.append('entry.2098835058', selectedCoreService); 
    data.append('entry.345536169', formData.get('naam') as string); 
    data.append('entry.428908901', formData.get('email') as string); 
    data.append('entry.425508424', formData.get('telefoon') as string); 

    try {
      await fetch(googleFormUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: data
      });
      setCoreFormSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
      setCoreFormSubmitted(true);
    } finally {
      setIsCoreSubmitting(false);
    }
  };

  // Governance Modal functies
  const openGovernanceModal = (serviceTitle: string) => {
    setSelectedGovernanceService(serviceTitle);
    setIsGovernanceModalOpen(true);
    setFormSubmitted(false);
    setIsSubmitting(false);
  };

  const handleGovernanceSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdEgd0qw7RFSn_sM-Z99vSDR0x9E63OFZec7uYZxjWA3XHS4A/formResponse";

    const data = new URLSearchParams();
    data.append('entry.1757941444', selectedGovernanceService);
    data.append('entry.609045959', formData.get('naam') as string);
    data.append('entry.436107509', formData.get('email') as string);
    data.append('entry.74225432', formData.get('telefoon') as string);

    try {
      await fetch(googleFormUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: data
      });
      setFormSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

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
        "Wij sporen dubbele records, ontbrekende waarden and foutieve bronkoppelingen op.",
        "Zorg voor een 'Single Source of Truth' waar de gehele organisatie op durft te vertrouwen."
      ],
      icon: <Icons.Data />
    },
    {
      id: "infosec-scan",
      title: "Informatiebeveiligings-scan",
      desc: "Bescherm uw bedrijfsgeheimen en klantdata tegen ongeautoriseerde toegang en cyberrisico's.",
      details: [
        "Een datalek zorgt for onherstelbare reputatieschade en verlies van marktvertrouwen.",
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

                <div className="pt-8 mt-10 border-t border-white/5 flex flex-col gap-6">
                  <div className="flex justify-between items-center">
                    <button 
                      onClick={() => openDashboardModal(item.title)}
                      className="w-full sm:w-auto px-6 py-3 bg-white/5 border border-white/10 text-white font-bold text-[10px] uppercase tracking-widest hover:bg-bridgeview-amber hover:text-bridgeview-dark hover:border-bridgeview-amber transition-all"
                    >
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

                <div className="pt-8 mt-10 border-t border-white/5 flex flex-col gap-6">
                  <div className="flex justify-between items-center">
                    <button 
                      onClick={() => openCoreModal(item.title)}
                      className="w-full sm:w-auto px-6 py-3 bg-white/5 border border-white/10 text-white font-bold text-[10px] uppercase tracking-widest hover:bg-bridgeview-amber hover:text-bridgeview-dark hover:border-bridgeview-amber transition-all"
                    >
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
              </div>
            ))}
          </div>

          {/* Data Trust, Governance & Compliance Section */}
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

                <div className="pt-6 mt-6 border-t border-white/5 flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <button 
                      onClick={() => openGovernanceModal(item.title)}
                      className="w-full sm:w-auto px-6 py-2 bg-white/5 border border-white/10 text-white font-bold text-[9px] uppercase tracking-widest hover:bg-bridgeview-amber hover:text-bridgeview-dark hover:border-bridgeview-amber transition-all"
                    >
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Oplossingen Modal - Enhanced opacity and z-index */}
      {isDashboardModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-start justify-center p-4 sm:p-8 pt-24 sm:pt-32 bg-black/90 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-md overflow-hidden shadow-[0_0_50px_-12px_rgba(197,160,89,0.3)] max-h-[90vh] overflow-y-auto bg-[#0B222E]">
            <div className="absolute top-0 left-0 right-0 h-1 bg-bridgeview-amber sticky z-20"></div>
            
            <div className="bg-[#0B222E] border border-white/10 p-8 lg:p-12 opacity-100">
              <button 
                onClick={() => setIsDashboardModalOpen(false)}
                className="absolute top-6 right-6 text-slate-500 hover:text-white transition-all p-2 hover:bg-white/5"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {dashboardFormSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-12 h-12 bg-bridgeview-amber/10 border border-bridgeview-amber/20 flex items-center justify-center mx-auto mb-6">
                    <Icons.Check />
                  </div>
                  <h3 className="text-xl font-bold mb-3 uppercase tracking-widest text-white">Aanvraag Ontvangen</h3>
                  <p className="text-slate-400 font-light text-xs mb-8 leading-relaxed">
                    Bedankt voor uw interesse in {selectedDashboard}. <br />Wij nemen binnen 24 uur contact met u op.
                  </p>
                  <button 
                    onClick={() => setIsDashboardModalOpen(false)}
                    className="px-8 py-3.5 bg-bridgeview-amber text-bridgeview-dark font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-all shadow-lg"
                  >
                    Sluiten
                  </button>
                </div>
              ) : (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-400">
                  <h3 className="text-xl lg:text-2xl font-bold mb-2 uppercase tracking-widest text-white">Gesprek Inplannen</h3>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-bridgeview-amber font-bold mb-8 border-b border-white/5 pb-4">Oplossing: Dashboarding</p>
                  
                  <form onSubmit={handleDashboardSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-widest font-black text-slate-400">Gekozen Dashboard</label>
                      <select 
                        required
                        name="dashboard_type"
                        value={selectedDashboard}
                        onChange={(e) => setSelectedDashboard(e.target.value)}
                        className="w-full bg-white/[0.02] border border-white/10 px-4 py-3.5 focus:border-bridgeview-amber focus:bg-white/[0.04] outline-none transition-all text-xs font-light text-white appearance-none cursor-pointer"
                      >
                        {dashboardList.map(dash => (
                          <option key={dash.id} value={dash.title} className="bg-[#0B222E]">
                            {dash.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-widest font-black text-slate-400">Volledige Naam</label>
                      <input 
                        required 
                        name="naam"
                        className="w-full bg-white/[0.02] border border-white/10 px-4 py-3.5 focus:border-bridgeview-amber focus:bg-white/[0.04] outline-none transition-all text-xs font-light text-white placeholder:text-slate-600" 
                        type="text" 
                        placeholder="Uw naam"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-widest font-black text-slate-400">Zakelijk E-mailadres</label>
                      <input 
                        required 
                        name="email"
                        className="w-full bg-white/[0.02] border border-white/10 px-4 py-3.5 focus:border-bridgeview-amber focus:bg-white/[0.04] outline-none transition-all text-xs font-light text-white placeholder:text-slate-600" 
                        type="email" 
                        placeholder="naam@bedrijf.nl"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-widest font-black text-slate-400">Telefoonnummer</label>
                      <input 
                        required 
                        name="telefoon"
                        className="w-full bg-white/[0.02] border border-white/10 px-4 py-3.5 focus:border-bridgeview-amber focus:bg-white/[0.04] outline-none transition-all text-xs font-light text-white placeholder:text-slate-600" 
                        type="tel" 
                        placeholder="+31 6 ..."
                      />
                    </div>
                    <div className="pt-4">
                      <button 
                        disabled={isDashboardSubmitting}
                        className="w-full py-4 bg-bridgeview-amber text-bridgeview-dark font-black text-[11px] uppercase tracking-[0.2em] hover:bg-white transition-all shadow-xl active:scale-[0.98] disabled:opacity-50"
                      >
                        {isDashboardSubmitting ? 'Bezig met verzenden...' : 'Verzenden'}
                      </button>
                      <p className="text-[8px] text-center mt-5 text-slate-600 font-medium uppercase tracking-widest opacity-60">
                        Vrijblijvend advies op maat.
                      </p>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Core Services (Diensten & Expertise) Modal - Enhanced opacity and z-index */}
      {isCoreModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-start justify-center p-4 sm:p-8 pt-24 sm:pt-32 bg-black/90 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-md overflow-hidden shadow-[0_0_50px_-12px_rgba(197,160,89,0.3)] max-h-[90vh] overflow-y-auto bg-[#0B222E]">
            <div className="absolute top-0 left-0 right-0 h-1 bg-bridgeview-amber sticky z-20"></div>
            
            <div className="bg-[#0B222E] border border-white/10 p-8 lg:p-12 opacity-100">
              <button 
                onClick={() => setIsCoreModalOpen(false)}
                className="absolute top-6 right-6 text-slate-500 hover:text-white transition-all p-2 hover:bg-white/5"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {coreFormSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-12 h-12 bg-bridgeview-amber/10 border border-bridgeview-amber/20 flex items-center justify-center mx-auto mb-6">
                    <Icons.Check />
                  </div>
                  <h3 className="text-xl font-bold mb-3 uppercase tracking-widest text-white">Aanvraag Ontvangen</h3>
                  <p className="text-slate-400 font-light text-xs mb-8 leading-relaxed">
                    Bedankt voor uw interesse in {selectedCoreService}. <br />Wij nemen binnen 24 uur contact met u op.
                  </p>
                  <button 
                    onClick={() => setIsCoreModalOpen(false)}
                    className="px-8 py-3.5 bg-bridgeview-amber text-bridgeview-dark font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-all shadow-lg"
                  >
                    Sluiten
                  </button>
                </div>
              ) : (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-400">
                  <h3 className="text-xl lg:text-2xl font-bold mb-2 uppercase tracking-widest text-white">Dienst Aanvragen</h3>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-bridgeview-amber font-bold mb-8 border-b border-white/5 pb-4">Sectie: Diensten & Expertise</p>
                  
                  <form onSubmit={handleCoreSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-widest font-black text-slate-400">Gekozen Dienst</label>
                      <select 
                        required
                        name="service_type"
                        value={selectedCoreService}
                        onChange={(e) => setSelectedCoreService(e.target.value)}
                        className="w-full bg-white/[0.02] border border-white/10 px-4 py-3.5 focus:border-bridgeview-amber focus:bg-white/[0.04] outline-none transition-all text-xs font-light text-white appearance-none cursor-pointer"
                      >
                        {coreServices.map(service => (
                          <option key={service.id} value={service.title} className="bg-[#0B222E]">
                            {service.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-widest font-black text-slate-400">Volledige Naam</label>
                      <input 
                        required 
                        name="naam"
                        className="w-full bg-white/[0.02] border border-white/10 px-4 py-3.5 focus:border-bridgeview-amber focus:bg-white/[0.04] outline-none transition-all text-xs font-light text-white placeholder:text-slate-600" 
                        type="text" 
                        placeholder="Uw naam"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-widest font-black text-slate-400">Zakelijk E-mailadres</label>
                      <input 
                        required 
                        name="email"
                        className="w-full bg-white/[0.02] border border-white/10 px-4 py-3.5 focus:border-bridgeview-amber focus:bg-white/[0.04] outline-none transition-all text-xs font-light text-white placeholder:text-slate-600" 
                        type="email" 
                        placeholder="naam@bedrijf.nl"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-widest font-black text-slate-400">Telefoonnummer</label>
                      <input 
                        required 
                        name="telefoon"
                        className="w-full bg-white/[0.02] border border-white/10 px-4 py-3.5 focus:border-bridgeview-amber focus:bg-white/[0.04] outline-none transition-all text-xs font-light text-white placeholder:text-slate-600" 
                        type="tel" 
                        placeholder="+31 6 ..."
                      />
                    </div>
                    <div className="pt-4">
                      <button 
                        disabled={isCoreSubmitting}
                        className="w-full py-4 bg-bridgeview-amber text-bridgeview-dark font-black text-[11px] uppercase tracking-[0.2em] hover:bg-white transition-all shadow-xl active:scale-[0.98] disabled:opacity-50"
                      >
                        {isCoreSubmitting ? 'Bezig met verzenden...' : 'Verzenden'}
                      </button>
                      <p className="text-[8px] text-center mt-5 text-slate-600 font-medium uppercase tracking-widest opacity-60">
                        Expertise op maat voor uw organisatie.
                      </p>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Governance Contact Modal - Enhanced opacity and z-index */}
      {isGovernanceModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-start justify-center p-4 sm:p-8 pt-24 sm:pt-32 bg-black/90 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-md overflow-hidden shadow-[0_0_50px_-12px_rgba(197,160,89,0.3)] max-h-[90vh] overflow-y-auto bg-[#0B222E]">
            <div className="absolute top-0 left-0 right-0 h-1 bg-bridgeview-amber sticky z-20"></div>
            
            <div className="bg-[#0B222E] border border-white/10 p-8 lg:p-12 opacity-100">
              <button 
                onClick={() => setIsGovernanceModalOpen(false)}
                className="absolute top-6 right-6 text-slate-500 hover:text-white transition-all p-2 hover:bg-white/5"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-12 h-12 bg-bridgeview-amber/10 border border-bridgeview-amber/20 flex items-center justify-center mx-auto mb-6">
                    <Icons.Check />
                  </div>
                  <h3 className="text-xl font-bold mb-3 uppercase tracking-widest text-white">Aanvraag Ontvangen</h3>
                  <p className="text-slate-400 font-light text-xs mb-8 leading-relaxed">
                    Bedankt voor uw aanvraag voor de {selectedGovernanceService}. <br />Wij nemen binnen 24 uur contact met u op.
                  </p>
                  <button 
                    onClick={() => setIsGovernanceModalOpen(false)}
                    className="px-8 py-3.5 bg-bridgeview-amber text-bridgeview-dark font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-all shadow-lg"
                  >
                    Sluiten
                  </button>
                </div>
              ) : (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-400">
                  <h3 className="text-xl lg:text-2xl font-bold mb-2 uppercase tracking-widest text-white">Consult Inplannen</h3>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-bridgeview-amber font-bold mb-8 border-b border-white/5 pb-4">Focus: Governance & Compliance</p>
                  
                  <form onSubmit={handleGovernanceSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-widest font-black text-slate-400">Type Assessment / Audit</label>
                      <select 
                        required
                        name="dienst"
                        value={selectedGovernanceService}
                        onChange={(e) => setSelectedGovernanceService(e.target.value)}
                        className="w-full bg-white/[0.02] border border-white/10 px-4 py-3.5 focus:border-bridgeview-amber focus:bg-white/[0.04] outline-none transition-all text-xs font-light text-white appearance-none cursor-pointer"
                      >
                        <option value="" disabled className="bg-[#0B222E]">Selecteer een dienst</option>
                        {governanceServices.map(service => (
                          <option key={service.id} value={service.title} className="bg-[#0B222E]">
                            {service.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-widest font-black text-slate-400">Volledige Naam</label>
                      <input 
                        required 
                        name="naam"
                        className="w-full bg-white/[0.02] border border-white/10 px-4 py-3.5 focus:border-bridgeview-amber focus:bg-white/[0.04] outline-none transition-all text-xs font-light text-white placeholder:text-slate-600" 
                        type="text" 
                        placeholder="Uw naam"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-widest font-black text-slate-400">Zakelijk E-mailadres</label>
                      <input 
                        required 
                        name="email"
                        className="w-full bg-white/[0.02] border border-white/10 px-4 py-3.5 focus:border-bridgeview-amber focus:bg-white/[0.04] outline-none transition-all text-xs font-light text-white placeholder:text-slate-600" 
                        type="email" 
                        placeholder="naam@bedrijf.nl"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-widest font-black text-slate-400">Telefoonnummer</label>
                      <input 
                        required 
                        name="telefoon"
                        className="w-full bg-white/[0.02] border border-white/10 px-4 py-3.5 focus:border-bridgeview-amber focus:bg-white/[0.04] outline-none transition-all text-xs font-light text-white placeholder:text-slate-600" 
                        type="tel" 
                        placeholder="+31 6 ..."
                      />
                    </div>
                    <div className="pt-4">
                      <button 
                        disabled={isSubmitting}
                        className="w-full py-4 bg-bridgeview-amber text-bridgeview-dark font-black text-[11px] uppercase tracking-[0.2em] hover:bg-white transition-all shadow-xl active:scale-[0.98] disabled:opacity-50"
                      >
                        {isSubmitting ? 'Bezig met verzenden...' : 'Verzenden'}
                      </button>
                      <p className="text-[8px] text-center mt-5 text-slate-600 font-medium uppercase tracking-widest opacity-60">
                        Vertrouwelijk en veilig conform AVG.
                      </p>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboards;
