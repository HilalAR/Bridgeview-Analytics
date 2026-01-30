
import React from 'react';
import { Page } from '../types';
import { LOGO, COLORS } from '../constants';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-black/30 py-32 border-t border-white/5 line-grid">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-24">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-4 mb-10">
              {LOGO}
              <div className="flex items-center gap-1 font-semibold text-xl tracking-tight">
                <span style={{ color: COLORS.accent }}>BridgeView</span>
                <span style={{ color: COLORS.secondary }}>Analytics</span>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed font-light">
              Strategische advisering en implementatie van data-oplossingen voor MKB+ organisaties.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-10 text-white uppercase tracking-[0.2em] text-[11px]">Navigatie</h4>
            <ul className="space-y-6 text-[12px] uppercase tracking-widest font-semibold text-slate-500">
              <li><button onClick={() => onNavigate(Page.Home)} className="hover:text-bridgeview-amber transition-all">Overzicht</button></li>
              <li><button onClick={() => onNavigate(Page.Services)} className="hover:text-bridgeview-amber transition-all">Expertise</button></li>
              <li><button onClick={() => onNavigate(Page.Sectors)} className="hover:text-bridgeview-amber transition-all">Sectoren</button></li>
              <li><button onClick={() => onNavigate(Page.Cases)} className="hover:text-bridgeview-amber transition-all">Resultaten</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-10 text-white uppercase tracking-[0.2em] text-[11px]">Contact</h4>
            <ul className="space-y-6 text-[12px] uppercase tracking-widest font-semibold text-slate-500">
              <li>info@bridgeview-analytics.nl</li>
              <li>+31 (0) 6 123 456 78</li>
              <li>Amsterdam / Utrecht</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-10 text-white uppercase tracking-[0.2em] text-[11px]">Governance</h4>
            <ul className="space-y-6 text-[12px] uppercase tracking-widest font-semibold text-slate-500">
              <li>AVG-Compliance</li>
              <li>Privacybeleid</li>
              <li>Algemene Voorwaarden</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] uppercase tracking-[0.3em] text-slate-600 font-bold">
            © {new Date().getFullYear()} BridgeView Analytics. Alle rechten voorbehouden.
          </p>
          <p className="text-[10px] uppercase tracking-[0.3em] text-slate-700 italic font-bold">
            "Strategisch Inzicht door Data-Analyse."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
