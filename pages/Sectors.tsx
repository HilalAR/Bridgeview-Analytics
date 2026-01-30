import React from 'react';
import { Icons } from '../constants';

const Sectors: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000 line-grid">
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center mb-32">
            <h1 className="text-6xl font-bold mb-8 uppercase tracking-tight">Focussectoren</h1>
            <p className="text-xl text-slate-400 font-light">
              Onze expertise is gespecialiseerd in sectoren waar complexe logistiek en datagedreven commercie samenkomen.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-1">
            {/* Logistiek */}
            <div className="sharp-card p-20 border-t-4 border-t-bridgeview-amber">
              <h2 className="text-3xl font-bold mb-10 uppercase tracking-widest">Handel & Logistiek</h2>
              <div className="space-y-12">
                <p className="text-slate-400 font-light leading-relaxed">
                  In de logistieke sector zijn marges vaak flinterdun. Wij bieden de instrumenten om grip te krijgen op transportkosten, voorraadoptimalisatie en orderverwerking.
                </p>
                <div className="space-y-6">
                  {[
                    "Analyse van transportefficiëntie en overhead",
                    "Voorspellend voorraadbeheer (Inventory Optimization)",
                    "Realtime monitoring van operationele KPI's"
                  ].map((line, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <Icons.Check />
                      <span className="text-[13px] uppercase tracking-widest font-semibold text-slate-300">{line}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* E-commerce */}
            <div className="sharp-card p-20 border-t-4 border-t-white/10">
              <h2 className="text-3xl font-bold mb-10 uppercase tracking-widest">E-commerce</h2>
              <div className="space-y-12">
                <p className="text-slate-400 font-light leading-relaxed">
                  Data is het fundament van elke succesvolle online operatie. Wij helpen u bij het kwantificeren van marketing ROI, klantwaarde en conversie-optimalisatie.
                </p>
                <div className="space-y-6">
                  {[
                    "Attributie-analyse van marketingkanalen",
                    "Customer Lifetime Value (LTV) modellering",
                    "Inzicht in retourstromen en winstgevendheid"
                  ].map((line, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <Icons.Check />
                      <span className="text-[13px] uppercase tracking-widest font-semibold text-slate-300">{line}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sectors;