import React from 'react';
import { Icons } from '../constants';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      category: "I. Strategie & Analyse",
      items: [
        {
          name: "Strategische Consultatie",
          desc: "Een grondige inventarisatie van uw informatiebehoeften en de huidige volwassenheid van uw data-infrastructuur.",
          result: "Operationele Roadmap"
        },
        {
          name: "Deep-Dive Procesanalyse",
          desc: "On-site analyse van bedrijfsprocessen om knelpunten in de informatievoorziening te identificeren.",
          result: "KPI-Definitie Document"
        }
      ]
    },
    {
      category: "II. Engineering & Ontwikkeling",
      items: [
        {
          name: "Power BI Implementatie",
          desc: "Ontwikkeling van geavanceerde visuele rapportages die naadloos integreren met uw ERP en MS-omgeving.",
          result: "Executive Dashboard"
        },
        {
          name: "Data Warehouse Architectuur",
          desc: "Het consolideren van diverse bronnen naar een enkelvoudige 'Single Source of Truth' via Azure.",
          result: "Gecentraliseerde Databron"
        }
      ]
    },
    {
      category: "III. Governance & Continuïteit",
      items: [
        {
          name: "Support & Optimalisatie",
          desc: "Periodieke evaluatie en technisch onderhoud om de relevantie van uw inzichten te garanderen.",
          result: "Continu Verbeterproces"
        }
      ]
    }
  ];

  return (
    <div className="animate-in fade-in duration-1000">
      <section className="py-32 border-b border-white/5">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-bold mb-10 tracking-tight uppercase">Onze Methodiek</h1>
            <p className="text-xl text-slate-400 font-light leading-relaxed">
              Wij hanteren een gestructureerde aanpak die gericht is op het leveren van tastbare zakelijke waarde. Onze expertise ligt op het snijvlak van Business IT en strategische bedrijfsvoering.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="space-y-40">
            {serviceCategories.map((cat, i) => (
              <div key={i}>
                <div className="flex items-center gap-10 mb-20">
                  <h2 className="text-3xl font-bold uppercase tracking-[0.3em] whitespace-nowrap">{cat.category}</h2>
                  <div className="h-px w-full bg-white/10"></div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-1">
                  {cat.items.map((item, j) => (
                    <div key={j} className="sharp-card p-16 flex flex-col justify-between hover:border-bridgeview-amber/40 transition-all">
                      <div>
                        <h3 className="text-2xl font-bold mb-8 uppercase tracking-widest">{item.name}</h3>
                        <p className="text-slate-400 font-light mb-12 leading-relaxed">{item.desc}</p>
                      </div>
                      <div className="pt-8 border-t border-white/5">
                        <div className="flex items-center gap-4">
                          <Icons.Check />
                          <span className="text-[12px] uppercase tracking-widest font-bold text-bridgeview-amber">Output: {item.result}</span>
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

      <section className="py-24 bg-black/40">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center opacity-40">
            {['Azure Data Factory', 'Power BI', 'SQL Server', 'Microsoft 365'].map(tech => (
              <span key={tech} className="text-sm font-bold uppercase tracking-[0.4em]">{tech}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;