
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboards from './pages/Dashboards';
import Sectors from './pages/Sectors';
import About from './pages/About';
import Cases from './pages/Cases';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home: return <Home onNavigate={setCurrentPage} />;
      case Page.Dashboards: return <Dashboards onNavigate={setCurrentPage} />;
      case Page.Sectors: return <Sectors onNavigate={setCurrentPage} />;
      case Page.About: return <About />;
      case Page.Cases: return <Cases />;
      case Page.Contact: return <Contact />;
      default: return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen constellation-bg flex flex-col">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow pt-20">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;
