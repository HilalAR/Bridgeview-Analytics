import React, { useState } from 'react';
import { Icons } from '../constants';

const Services: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const serviceCategories = [
    {
      category: "I. Strategie & Analyse",
      items: [
        {
          id: "strategic-consultation",
          name: "Strategische Consultatie",
          desc: "Wij vertalen uw zakelijke ambities naar een concreet en meetbaar strategisch plan. Door de kritieke succesfactoren en bijbehorende cijfers te identificeren, leggen we de basis voor data-gedreven sturing die naadloos aansluit bij uw lange-termijn visie.",
          detailedDesc: "Onze strategische consultatie begint met een grondige analyse van uw organisatiedoelstellingen en marktpositie. We identificeren de metrics die daadwerkelijk impact hebben op uw bottom-line en vertalen deze naar een implementeerbare roadmap. Door nauwe samenwerking met uw directie en management creëren we een gedeelde visie waarbij elke KPI direct gekoppeld is aan strategische bedrijfsdoelen. Dit resulteert in een operationele roadmap die fungeert als kompas voor alle toekomstige data-initiatieven, met heldere mijlpalen, verantwoordelijkheden en meetbare succescriteria.",
          result: "Operationele Roadmap"
        },
        {
          id: "deep-dive-analysis",
          name: "Deep-Dive Procesanalyse",
          desc: "Onze specialisten lopen fysiek mee met uw logistieke stromen om de werkelijke informatiebehoefte op de werkvloer te doorgronden. Dit resulteert in een gedetailleerde blauwdruk (KPI-document) die dient als fundament voor toekomstige groei en operationele schaalbaarheid.",
          detailedDesc: "Tijdens de Deep-Dive Procesanalyse immergeren onze consultants zich volledig in uw dagelijkse operaties. We observeren niet alleen processen, maar voeren uitgebreide interviews met stakeholders op alle niveaus - van warehouse operators tot directie. Deze holistische aanpak stelt ons in staat om verborgen inefficiënties en informatiekloven te identificeren die anders onopgemerkt zouden blijven. Het resulterende KPI-definitiedocument bevat niet alleen de metrics zelf, maar ook de berekeningslogica, databronnen, rapportagefrequentie en eigenaarschap per KPI. Dit document wordt de 'single source of truth' voor alle toekomstige analytics-initiatieven en zorgt voor organisatiebrede alignment.",
          result: "KPI-Definitie Document"
        }
      ]
    },
    {
      category: "II. Engineering & Ontwikkeling",
      items: [
        {
          id: "powerbi-implementation",
          name: "Power BI Implementatie",
          desc: "Ontwikkeling van dynamische sturingsinstrumenten die complexe operaties visueel inzichtelijk maken. Onze dashboards bieden volledige compatibiliteit met ERP-systemen zoals SAP, Exact en diverse E-commerce platformen voor realtime besluitvorming op elk niveau.",
          detailedDesc: "Onze Power BI implementaties gaan verder dan standaard rapportages. We ontwikkelen interactieve, role-based dashboards waarbij elke gebruikersgroep - van CEO tot teamleider - de informatie ziet die relevant is voor hun verantwoordelijkheden. Door gebruik te maken van geavanceerde DAX-formules en custom visualisaties creëren we intuïtieve interfaces die complexe data toegankelijk maken voor niet-technische gebruikers. Volledige integratie met uw bestaande IT-landschap (SAP, Exact, WMS-systemen, E-commerce platforms) garandeert real-time datavervversing. We implementeren ook row-level security om te zorgen dat gevoelige informatie alleen zichtbaar is voor geautoriseerde gebruikers, volledig AVG-compliant.",
          result: "Executive Dashboard"
        },
        {
          id: "data-warehouse",
          name: "Data Warehouse Architectuur",
          desc: "Wij koppelen versnipperde databronnen uit webshops, magazijnsystemen en financiële pakketten naar één gecentraliseerde 'Single Source of Truth' binnen de Microsoft Azure cloud. Dit elimineert data-inconsistenties en tijdrovende handmatige fouten.",
          detailedDesc: "De Data Warehouse Architectuur vormt het kloppende hart van uw analytics-ecosysteem. We ontwerpen en implementeren een schaalbare cloud-based infrastructuur op Microsoft Azure die alle relevante databronnen consolideert - van e-commerce transacties tot voorraadmutaties en financiële boekingen. Door gebruik te maken van Azure Data Factory voor ETL-processen en Azure SQL Database voor opslag, creëren we een robuust en future-proof fundament. Onze dimensionale datamodellen (star of snowflake schema's) zijn geoptimaliseerd voor query-performance en schaalbaarheid. Data-kwaliteitscontroles en validatieregels zorgen ervoor dat alleen betrouwbare informatie de warehouse bereikt. Het resultaat: één centrale, betrouwbare databron die dient als fundament voor alle rapportages en analyses.",
          result: "Gecentraliseerde Databron"
        }
      ]
    },
    {
      category: "III. Governance & Continuïteit",
      items: [
        {
          id: "support-optimization",
          name: "Support & Optimalisatie",
          desc: "Als uw externe data-partner waarborgen wij de continuïteit en betrouwbaarheid van uw informatievoorziening. Wij bieden structureel technisch onderhoud en proactieve optimalisaties, zodat uw analytics-omgeving altijd meegroeit met uw onderneming.",
          detailedDesc: "Onze langetermijn partnership gaat verder dan implementatie. We fungeren als uw dedicated data-team met continue monitoring, preventief onderhoud en proactieve optimalisaties. Door middel van maandelijkse performance reviews identificeren we verbetermogelijkheden en nieuwe use cases. We zorgen voor versie-updates, security patches en scalability optimalisaties zonder downtime. Bij wijzigingen in uw bedrijfsprocessen of IT-landschap passen we dashboards en datamodellen aan om de relevantie te waarborgen. Ons Service Level Agreement (SLA) garandeert responstijden en beschikbaarheid. Training en knowledge transfer zorgen ervoor dat uw interne teams steeds zelfstandiger worden, terwijl wij altijd beschikbaar blijven voor complexe vraagstukken. Dit partnership-model waarborgt dat uw data-infrastructuur een strategisch competitief voordeel blijft, niet een legacy-probleem.",
          result: "Continu Verbeterproces"
        }
      ]
    }
  ];

  return (
    <div className="animate-in fade-in duration-1000">
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-8 tracking-tight uppercase">Onze Methodiek</h1>
            <p className="text-lg text-slate-400 font-light leading-relaxed">
              Wij combineren diepgaande technische expertise met bedrijfskundig inzicht om tastbare zakelijke waarde te creëren. Onze aanpak overbrugt de kloof tussen rauwe data en strategische koersbepaling.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-8">
          <div className="space-y-24">
            {serviceCategories.map((cat, i) => (
              <div key={i}>
                <div className="flex items-center gap-8 mb-12">
                  <h2 className="text-2xl font-bold uppercase tracking-[0.3em] whitespace-nowrap text-white">{cat.category}</h2>
                  <div className="h-px w-full bg-white/10"></div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-1">
                  {cat.items.map((item, j) => (
                    <div 
                      key={j} 
                      className="sharp-card p-12 flex flex-col justify-between hover:border-bridgeview-amber/40 transition-all bg-white/[0.02]"
                    >
                      <div>
                        <h3 className="text-xl font-bold mb-6 uppercase tracking-widest text-white">{item.name}</h3>
                        <p className="text-slate-400 font-light mb-6 leading-relaxed text-sm">{item.desc}</p>
                        
                        {/* Expandable detailed description */}
                        <div 
                          className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            expandedCard === item.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="pt-6 border-t border-white/10 mt-6">
                            <h4 className="text-xs uppercase tracking-widest font-bold text-bridgeview-amber mb-4">Diepgaande Analyse</h4>
                            <p className="text-slate-400 font-light leading-relaxed text-sm">
                              {item.detailedDesc}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-6 border-t border-white/5 mt-10">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <Icons.Check />
                            <span className="text-[11px] uppercase tracking-widest font-bold text-bridgeview-amber">
                              Output: {item.result}
                            </span>
                          </div>
                          
                          {/* Expand/Collapse Button */}
                          <button
                            onClick={() => toggleCard(item.id)}
                            className="flex items-center gap-2 text-[11px] uppercase tracking-widest font-bold text-white/60 hover:text-bridgeview-amber transition-all group"
                            aria-label={expandedCard === item.id ? "Inklappen" : "Lees meer"}
                          >
                            <span className="hidden sm:inline">
                              {expandedCard === item.id ? "Inklappen" : "Lees meer"}
                            </span>
                            <svg 
                              className={`w-4 h-4 transition-transform duration-300 ${
                                expandedCard === item.id ? 'rotate-180' : ''
                              }`}
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-black/40 border-t border-white/5">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center opacity-40">
            {['Azure Data Factory', 'Power BI', 'SQL Server', 'Microsoft 365'].map(tech => (
              <span key={tech} className="text-[10px] font-bold uppercase tracking-[0.4em] text-white">{tech}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;