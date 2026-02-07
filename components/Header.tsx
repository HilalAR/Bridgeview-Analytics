
import React, { useState } from 'react';
import { Page } from '../types';
import { LOGO, COLORS } from '../constants';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Overzicht', value: Page.Home },
    { name: 'Oplossingen', value: Page.Dashboards },
    { name: 'Sectoren', value: Page.Sectors },
    { name: 'Organisatie', value: Page.About },
    { name: 'Resultaten', value: Page.Cases },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bridgeview-dark border-b border-white/5">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <button 
          onClick={() => onNavigate(Page.Home)}
          className="flex items-center gap-3 hover:opacity-90 transition-all"
        >
          <div className="flex-shrink-0 scale-90">
            {LOGO}
          </div>
          <div className="flex items-center gap-1 font-semibold text-xl tracking-tight">
            <div className="relative pb-1">
              <span style={{ color: COLORS.accent }}>BridgeView</span>
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20"></div>
            </div>
            <span style={{ color: COLORS.secondary }}>Analytics</span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => onNavigate(item.value)}
              className={`text-[12px] uppercase tracking-widest font-semibold transition-all hover:text-bridgeview-amber ${
                currentPage === item.value ? 'text-bridgeview-amber' : 'text-slate-400'
              }`}
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => onNavigate(Page.Contact)}
            className="border border-bridgeview-amber text-bridgeview-amber px-6 py-2.5 rounded-none text-[11px] uppercase tracking-widest font-bold hover:bg-bridgeview-amber hover:text-bridgeview-dark transition-all"
          >
            Consultatie
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-bridgeview-dark border-b border-white/10 px-8 py-8 flex flex-col gap-6">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => {
                onNavigate(item.value);
                setIsMenuOpen(false);
              }}
              className="text-xs uppercase tracking-widest font-bold text-left"
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => {
              onNavigate(Page.Contact);
              setIsMenuOpen(false);
            }}
            className="border border-bridgeview-amber text-bridgeview-amber px-6 py-4 text-center text-[10px] uppercase tracking-widest font-bold"
          >
            Consultatie Aanvragen
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
