
import React, { useState } from 'react';
import { Icons } from '../constants';
import { Page } from '../types';

interface SectorDetail {
  id: string;
  name: string;
  challenge: string;
  data: string;
  return: string;
  icon: React.ReactNode;
}

interface SectorsProps {
  onNavigate: (page: Page) => void;
}

const Sectors: React.FC<SectorsProps> = ({ onNavigate }) => {
  const [selectedSector, setSelectedSector] = useState<SectorDetail | null>(null);

  const branches: SectorDetail[] = [
    { 
      id: "vastgoed",
      name: "Vastgoed", 
      challenge: "Het optimaliseren van de portefeuilleprestaties en het voldoen aan complexe ESG-standaarden.",
      data: "Huurcontracten, leegstandscijfers, facility management data, energieverbruik, taxatierapporten.",
      return: "Inzicht in netto operationele inkomsten (NOI), voorspellende leegstandsanalyses en efficiënte ESG-rapportages.",
      icon: <Icons.Strategy /> 
    },
    { 
      id: "finance",
      name: "Finance", 
      challenge: "Het verkrijgen van real-time inzicht in financiële stromen, risico's en compliance.",
      data: "Grootboekdata, debiteuren- en crediteurenadministratie, kasstromen, investeringsportefeuilles.",
      return: "Geautomatiseerde maand- en jaarrapportages, cashflowprognoses en compliance monitoring.",
      icon: <Icons.Data /> 
    },
    { 
      id: "zorg",
      name: "Zorg", 
      challenge: "Het optimaliseren van patiëntenzorg, personeelsplanning en budgetbeheer onder toenemende druk.",
      data: "Patiëntstromen (EPD), bezettingsgraden, personeelsplanning, verzuimstatistieken, medicatieverbruik.",
      return: "Efficiëntere beddenplanning, inzicht in personele inzet en kostenbeheersing per zorgafdeling.",
      icon: <Icons.Check /> 
    },
    { 
      id: "productie",
      name: "Productie", 
      challenge: "Het verhogen van de productie-efficiëntie, het minimaliseren van downtime en het optimaliseren van de supply chain.",
      data: "Machine-data (OT), ERP-productieorders, voorraadniveaus, kwaliteitscontroles, leveranciersprestaties.",
      return: "Real-time Overall Equipment Effectiveness (OEE) inzichten, voorspellend onderhoud en optimalisatie van de productiekosten.",
      icon: <Icons.Data /> 
    },
    { 
      id: "ecommerce",
      name: "E-commerce", 
      challenge: "Het maximaliseren van marketing ROI, de klantwaarde en het optimaliseren van conversies in een competitieve markt.",
      data: "Webshop data (Google Analytics/Shopify), marketing spend, klantsegmentatie, orderhistorie, retourstromen.",
      return: "Profitability per order, Customer Lifetime Value (LTV) analyses en gepersonaliseerde marketingstrategieën.",
      icon: <Icons.Strategy /> 
    },
    { 
      id: "verduurzaming",
      name: "Verduurzaming & SDG’s", 
      challenge: "Het meten, rapporteren en sturen op duurzaamheidsdoelstellingen (ESG/SDG's) en CO2-reductie.",
      data: "Energieverbruik, afvalstromen, CO2-emissies, grondstofverbruik, data uit duurzaamheidscertificaten.",
      return: "Betrouwbare ESG-rapportages, inzicht in reductiekansen en compliance met duurzaamheidseisen.",
      icon: <Icons.Check /> 
    },
    { 
      id: "horeca",
      name: "Horeca & Hotels", 
      challenge: "Het optimaliseren van bezettingsgraden, personeelsplanning en winstgevendheid per vestiging.",
      data: "Kassasystemen, reserveringsdata, personeelsroosters, inkoopfacturen, klantfeedback.",
      return: "Dynamic pricing strategieën, efficiënte personeelsplanning en optimalisatie van inkoopkosten.",
      icon: <Icons.Strategy /> 
    },
    { 
      id: "investeringen",
      name: "Investeringen", 
      challenge: "Het verkrijgen van een geconsolideerd overzicht van investeringsprestaties, risico's en compliance.",
      data: "Portefeuille-data, marktdata, financiële instrumenten, risicomodellen, transactiehistorie.",
      return: "Real-time portefeuille-analyses, risicobeheer en geautomatiseerde compliance-rapportages.",
      icon: <Icons.Data /> 
    },
    { 
      id: "self-storage",
      name: "Self Storage", 
      challenge: "Het optimaliseren van de bezettingsgraden, prijzen en operationele efficiëntie per locatie.",
      data: "Verhuurstatistieken, bezettingsgraden, klantdata, energieverbruik, marketingcampagnes.",
      return: "Dynamische prijsstrategieën, voorspellende bezettingsgraden en efficiënt beheer van faciliteiten.",
      icon: <Icons.Check /> 
    },
    { 
      id: "solar",
      name: "Solar & Energy", 
      challenge: "Het maximaliseren van opbrengst, voorspellend onderhoud en integratie met energiemarkten.",
      data: "Opbrengstdata per paneel/park, weersvoorspellingen, onderhoudshistorie, marktprijzen energie.",
      return: "Real-time monitoring, voorspellend onderhoud en optimalisatie van energiehandel.",
      icon: <Icons.Data /> 
    },
    { 
      id: "logistiek",
      name: "Logistiek & Supply Chain", 
      challenge: "Het optimaliseren van transportkosten, voorraadbeheer en de gehele supply chain efficiëntie.",
      data: "WMS-systemen, TMS-data, voorraadniveaus, orderhistorie, leveringsprestaties, brandstofverbruik.",
      return: "Route-optimalisatie, voorspellend voorraadbeheer en real-time 'cost-to-serve' analyses.",
      icon: <Icons.Strategy /> 
    },
    { 
      id: "onderwijs",
      name: "Onderwijs & Non-profit", 
      challenge: "Het meten van impact, optimaliseren van fondsenwerving en efficiënt beheren van middelen.",
      data: "Studentendata, donateurgegevens, projectfinanciering, campagneresultaten, personeelsinzet.",
      return: "Inzicht in studentenretentie, effectiviteit van fondsenwerving en impactmeting van projecten.",
      icon: <Icons.Check /> 
    },
    { 
      id: "franchise",
      name: "Franchisebedrijven", 
      challenge: "Het monitoren van prestaties per vestiging, handhaven van standaarden en schaalbare groei.",
      data: "POS-data per franchise, inkoopcijfers, personeelsroosters, marketingcampagnes lokaal/centraal.",
      return: "Benchmarking van vestigingen, optimalisatie van voorraadbeheer en inzicht in franchisenemerprestaties.",
      icon: <Icons.Data /> 
    },
    { 
      id: "oil-gas",
      name: "Gas & Oil", 
      challenge: "Het optimaliseren van exploratie, productie and distributie met oog voor veiligheid en duurzaamheid.",
      data: "Sensordata van installaties, productiedata, logistieke stromen, veiligheidsrapportages, marktprijzen.",
      return: "Optimalisatie van extractieprocessen, voorspellend onderhoud van infrastructuur en risicomanagement.",
      icon: <Icons.Strategy /> 
    }
  ];

  return (
    <div className="animate-in fade-in duration-1000 line-grid">
      {/* Intro Section */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl">
            <div className="inline-block h-1 w-16 bg-bridgeview-amber mb-8"></div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-8 tracking-tight uppercase text-white">
              Branches & Expertise
            </h1>
            <p className="text-lg text-slate-400 font-light leading-relaxed">
              Data is de universele taal van groei. Hoewel elke sector uniek is, blijven de kernvragen hetzelfde: hoe verhogen we de efficiëntie en waar liggen de onbenutte kansen? BridgeView Analytics biedt gespecialiseerde oplossingen voor uiteenlopende branches, van complexe supply chains tot strategische financiële dienstverlening.
            </p>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
            {branches.map((branch) => (
              <div 
                key={branch.id}
                onClick={() => setSelectedSector(branch)}
                className="sharp-card p-8 bg-white/[0.02] flex items-center justify-between group transition-all duration-300 hover:bg-white/[0.05] hover:border-bridgeview-amber/30 hover:shadow-[0_0_20px_rgba(197,160,89,0.05)] cursor-pointer"
              >
                <div className="flex items-center gap-6">
                  <div className="w-10 h-10 flex items-center justify-center border border-bridgeview-amber/10 bg-bridgeview-amber/5 text-bridgeview-amber transition-colors group-hover:bg-bridgeview-amber group-hover:text-bridgeview-dark">
                    {branch.icon}
                  </div>
                  <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-slate-400 group-hover:text-white transition-colors">
                    {branch.name}
                  </h3>
                </div>
                <div className="text-bridgeview-amber/20 group-hover:text-bridgeview-amber transition-all transform group-hover:translate-x-1">
                  <Icons.ArrowRight />
                </div>
              </div>
            ))}

            {/* Extra CTA-like card */}
            <div className="sharp-card p-8 bg-bridgeview-amber/5 border-dashed border-bridgeview-amber/20 flex flex-col justify-center items-center text-center">
              <p className="text-[10px] uppercase tracking-widest font-bold text-bridgeview-amber mb-2">Uw branche?</p>
              <p className="text-[11px] text-slate-500 font-light">Wij ontwikkelen sectorspecifieke benchmarks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sector Detail Modal - Enhanced opacity and z-index */}
      {selectedSector && (
        <div className="fixed inset-0 z-[9999] flex items-start justify-center p-4 sm:p-8 pt-24 sm:pt-32 bg-black/90 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-md overflow-hidden shadow-[0_0_50px_-12px_rgba(197,160,89,0.3)] max-h-[90vh] overflow-y-auto bg-[#0B222E]">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-bridgeview-amber sticky z-20"></div>
            
            <div className="bg-[#0B222E] border border-white/10 p-8 lg:p-12 opacity-100">
              <button 
                onClick={() => setSelectedSector(null)}
                className="absolute top-6 right-6 text-slate-500 hover:text-white transition-all p-2 hover:bg-white/5"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="animate-in fade-in slide-in-from-bottom-2 duration-400">
                <div className="flex items-center gap-5 mb-8">
                   <div className="w-12 h-12 flex items-center justify-center border border-bridgeview-amber/30 bg-bridgeview-amber/5 text-bridgeview-amber shrink-0">
                      {selectedSector.icon}
                   </div>
                   <h2 className="text-xl lg:text-2xl font-bold uppercase tracking-widest text-white leading-tight">
                    {selectedSector.name}
                  </h2>
                </div>

                <div className="space-y-8">
                  <div className="space-y-2">
                    <h3 className="text-[9px] uppercase tracking-[0.3em] font-black text-bridgeview-amber/70">De Uitdaging:</h3>
                    <p className="text-slate-400 font-light text-xs leading-relaxed">
                      {selectedSector.challenge}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-[9px] uppercase tracking-[0.3em] font-black text-bridgeview-amber/70">Beschikbare Data:</h3>
                    <p className="text-slate-400 font-light text-xs leading-relaxed">
                      {selectedSector.data}
                    </p>
                  </div>

                  <div className="space-y-2 border-t border-white/5 pt-8">
                    <h3 className="text-[9px] uppercase tracking-[0.3em] font-black text-bridgeview-amber">Uw Rendement:</h3>
                    <p className="text-slate-300 font-medium text-sm leading-relaxed italic">
                      {selectedSector.return}
                    </p>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-white/5 flex flex-col gap-4">
                   <button 
                    onClick={() => {
                        setSelectedSector(null);
                        onNavigate(Page.Contact);
                    }}
                    className="w-full py-4 bg-bridgeview-amber text-bridgeview-dark font-black text-[11px] uppercase tracking-[0.2em] hover:bg-white transition-all shadow-xl"
                   >
                    Consultant Spreken
                   </button>
                   <button 
                    onClick={() => setSelectedSector(null)}
                    className="w-full py-3 border border-white/10 text-white/60 font-bold text-[10px] uppercase tracking-[0.2em] hover:text-white hover:bg-white/5 transition-all"
                   >
                    Sluiten
                   </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer Visual Section */}
      <section className="py-24 bg-black/20 border-t border-white/5">
        <div className="container mx-auto px-8">
           <div className="text-center mb-16">
             <h2 className="text-2xl font-bold uppercase tracking-[0.3em] mb-4 text-white">Resultaatgerichte Data-Architectuur</h2>
             <div className="w-12 h-1 bg-bridgeview-amber mx-auto"></div>
           </div>

           <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Benchmarking", desc: "Vergelijk uw prestaties met sectorspecifieke benchmarks voor direct inzicht in uw marktpositie." },
                { title: "Dashboarding", desc: "Intuïtieve visualisaties die complexe data vertalen naar actiegerichte sturingsinformatie." },
                { title: "Data-Governance", desc: "Zorgvuldige omgang met sectorgevoelige informatie volgens de hoogste beveiligingsstandaarden." }
              ].map((item, i) => (
                <div key={i} className="p-8 border-l border-white/10">
                   <h4 className="font-bold text-bridgeview-amber uppercase tracking-widest text-sm mb-4">{item.title}</h4>
                   <p className="text-sm text-slate-400 font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default Sectors;
