
import React from 'react';
import { Icons } from '../constants';

const Sectors: React.FC = () => {
  const branches = [
    { name: "Vastgoed", icon: <Icons.Strategy /> },
    { name: "Finance", icon: <Icons.Data /> },
    { name: "Zorg", icon: <Icons.Check /> },
    { name: "Productie", icon: <Icons.Data /> },
    { name: "E-commerce", icon: <Icons.Strategy /> },
    { name: "Verduurzaming", icon: <Icons.Check /> },
    { name: "Horeca", icon: <Icons.Strategy /> },
    { name: "Investeringen", icon: <Icons.Data /> },
    { name: "Self Storage", icon: <Icons.Check /> },
    { name: "Solar", icon: <Icons.Data /> },
    { name: "Logistiek", icon: <Icons.Strategy /> },
    { name: "Onderwijs", icon: <Icons.Check /> },
    { name: "Franchise", icon: <Icons.Data /> },
    { name: "Gas & Oil", icon: <Icons.Strategy /> }
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
            {branches.map((branch, index) => (
              <div 
                key={index}
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

            {/* Extra CTA-like card to fill grid or invite contact */}
            <div className="sharp-card p-8 bg-bridgeview-amber/5 border-dashed border-bridgeview-amber/20 flex flex-col justify-center items-center text-center">
              <p className="text-[10px] uppercase tracking-widest font-bold text-bridgeview-amber mb-2">Uw branche?</p>
              <p className="text-[11px] text-slate-500 font-light">Wij ontwikkelen sectorspecifieke benchmarks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sector Solutions Focus */}
      <section className="py-24 bg-black/20 border-t border-white/5">
        <div className="container mx-auto px-8">
           <div className="text-center mb-16">
             <h2 className="text-2xl font-bold uppercase tracking-[0.3em] mb-4 text-white">Specifieke Business Case Oplossingen</h2>
             <div className="w-12 h-1 bg-bridgeview-amber mx-auto"></div>
           </div>

           <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Vastgoed", desc: "Asset Management Dashboards voor realtime inzicht in leegstand, huurinkomsten en onderhoudsplanning." },
                { title: "Zorg", desc: "Capaciteits Dashboards voor het optimaliseren van bedbezetting en het verlagen van de personeelsdruk." },
                { title: "Solar & Energy", desc: "Yield Dashboards voor het monitoren van opbrengst, ROI en CO2-reductie op portfolioniveau." }
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
