import React, { useState } from 'react';
import { Page } from '../types';
import { LOGO, COLORS, Icons } from '../constants';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isCookiesOpen, setIsCookiesOpen] = useState(false);
  
  return (
    <footer className="bg-[#0B222E] py-12 lg:py-16 border-t border-white/5">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-12">
          
          {/* Kolom 1: De Kern */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1 font-semibold text-lg tracking-tight">
                <span style={{ color: COLORS.accent }}>BridgeView</span>
                <span style={{ color: COLORS.secondary }}>Analytics</span>
              </div>
            </div>
            <p className="text-slate-400 text-[13px] leading-relaxed font-light mb-4">
              Bereik uw doelen sneller met onze datagedreven inzichten en een heldere strategische koers.
            </p>
            <p className="text-[9px] uppercase tracking-[0.2em] text-bridgeview-amber font-bold">
              Jouw data, vertaald naar succes.
            </p>
          </div>

          {/* Kolom 2: Navigatie */}
          <div>
            <h4 className="font-bold mb-6 text-white uppercase tracking-[0.3em] text-[10px]">Navigatie</h4>
            <ul className="space-y-3 text-[11px] uppercase tracking-widest font-semibold text-slate-500">
              <li>
                <button onClick={() => onNavigate(Page.Home)} className="hover:text-bridgeview-amber transition-all flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-px bg-bridgeview-amber transition-all"></span>
                  Overzicht
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate(Page.Dashboards)} className="hover:text-bridgeview-amber transition-all flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-px bg-bridgeview-amber transition-all"></span>
                  Oplossingen
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate(Page.Sectors)} className="hover:text-bridgeview-amber transition-all flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-px bg-bridgeview-amber transition-all"></span>
                  Sectoren
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate(Page.About)} className="hover:text-bridgeview-amber transition-all flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-px bg-bridgeview-amber transition-all"></span>
                  Organisatie
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate(Page.Cases)} className="hover:text-bridgeview-amber transition-all flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-px bg-bridgeview-amber transition-all"></span>
                  Resultaten
                </button>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Expertise */}
          <div>
            <h4 className="font-bold mb-6 text-white uppercase tracking-[0.3em] text-[10px]">Trust & Expertise</h4>
            <ul className="space-y-3 text-[11px] uppercase tracking-widest font-medium text-slate-500">
              <li className="hover:text-bridgeview-amber transition-all cursor-default">Power BI Oplossingen</li>
              <li className="hover:text-bridgeview-amber transition-all cursor-default">Datawarehouse Bouw</li>
              <li className="hover:text-bridgeview-amber transition-all cursor-default">DPIA Assessments</li>
              <li className="hover:text-bridgeview-amber transition-all cursor-default">AVG & GDPR Audits</li>
            </ul>
          </div>

          {/* Kolom 4: Contact */}
          <div className="flex flex-col">
            <h4 className="font-bold mb-6 text-white uppercase tracking-[0.3em] text-[10px]">Contact</h4>
            <ul className="space-y-3 text-[12px] font-light text-slate-400">
              <li>
                <a href="mailto:info@bridgeview-analytics.nl" className="hover:text-bridgeview-amber transition-all block font-medium">
                  info@bridgeview-analytics.nl
                </a>
              </li>
              <li>
                <a href="tel:+31612345678" className="hover:text-bridgeview-amber transition-all block font-medium">
                  +31 (0) 6 123 456 78
                </a>
              </li>
              <li className="text-[10px] uppercase tracking-widest font-bold text-slate-500 pt-1">
                Utrecht / Amsterdam
              </li>
              <li className="pt-2">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-3 px-3 py-1.5 border border-white/10 text-white text-[9px] uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-all"
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar Section */}
        <div className="pt-8 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-12 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-600">
            <p>© {currentYear} BridgeView Analytics</p>
            <div className="flex gap-6">
              <button 
                onClick={() => setIsPrivacyOpen(true)}
                className="hover:text-bridgeview-amber transition-all"
              >
                Privacybeleid
              </button>
              <button 
                onClick={() => setIsTermsOpen(true)}
                className="hover:text-bridgeview-amber transition-all"
              >
                Voorwaarden
              </button>
              <button 
                onClick={() => setIsCookiesOpen(true)}
                className="hover:text-bridgeview-amber transition-all"
              >
                Cookies
              </button>
            </div>
          </div>
          <div className="hidden lg:block"></div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 z-[9999] isolation isolate flex items-start justify-center p-4 sm:p-8 pt-24 sm:pt-32 bg-black/90 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-2xl overflow-hidden shadow-[0_0_50px_-12px_rgba(197,160,89,0.3)] max-h-[85vh] overflow-y-auto bg-[#0B222E]">
            
            <div className="bg-[#0B222E] border border-white/10 p-8 lg:p-12 text-left">
              <button 
                onClick={() => setIsPrivacyOpen(false)}
                className="absolute top-6 right-6 text-slate-500 hover:text-white transition-all p-2 hover:bg-white/5"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="animate-in fade-in slide-in-from-bottom-2 duration-400">
                <h3 className="text-xl lg:text-2xl font-bold mb-2 uppercase tracking-widest text-white">Privacybeleid BridgeView Analytics</h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-bridgeview-amber font-bold mb-8 border-b border-white/5 pb-4">Laatst bijgewerkt: 12 februari 2026</p>
                
                <div className="space-y-8 text-slate-400 font-light text-sm leading-relaxed">
                  <p>
                    Bij BridgeView Analytics hechten wij grote waarde aan de bescherming van uw privacy en de veiligheid van uw persoonsgegevens. In dit Privacybeleid leggen wij uit welke gegevens wij verzamelen, waarom wij dit doen en hoe wij hiermee omgaan.
                  </p>

                  <section className="space-y-3">
                    <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-white">1. Identiteit en Contactgegevens</h4>
                    <p>
                      BridgeView Analytics is verantwoordelijk voor de verwerking van persoonsgegevens zoals weergegeven in deze privacyverklaring.
                    </p>
                    <ul className="space-y-1">
                      <li><span className="text-bridgeview-amber font-medium">Website:</span> www.bridgeview-analytics.nl</li>
                      <li><span className="text-bridgeview-amber font-medium">E-mail:</span> info@bridgeview-analytics.nl</li>
                      <li><span className="text-bridgeview-amber font-medium">Locatie:</span> Utrecht / Amsterdam</li>
                    </ul>
                  </section>

                  <section className="space-y-3">
                    <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-white">2. Welke gegevens verzamelen wij?</h4>
                    <p>
                      Wanneer u gebruikmaakt van de contactformulieren op onze website, verzamelen wij de gegevens die u zelf invult. Dit betreft doorgaans:
                    </p>
                    <ul className="list-disc list-inside space-y-1 pl-2">
                      <li>Voor- en achternaam</li>
                      <li>E-mailadres</li>
                      <li>Telefoonnummer (indien ingevuld)</li>
                      <li>Bedrijfsnaam</li>
                      <li>Inhoud van uw bericht of vraagstelling</li>
                    </ul>
                  </section>

                  <section className="space-y-3">
                    <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-white">3. Doel van de gegevensverwerking</h4>
                    <p>
                      Wij verzamelen deze gegevens met één specifiek doel: om contact met u op te kunnen nemen. De gegevens die u via onze website verstuurt, worden verwerkt via Google Forms. Wij gebruiken deze informatie uitsluitend om te reageren op uw verzoek, bijvoorbeeld voor het inplannen van een strategisch gesprek of het beantwoorden van een consultancy-vraag.
                    </p>
                  </section>

                  <section className="space-y-3">
                    <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-white">4. Bewaartermijn</h4>
                    <p>
                      BridgeView Analytics bewaart uw persoonsgegevens niet langer dan strikt nodig is om de doelen te realiseren waarvoor uw gegevens worden verzameld. Wij hanteren een standaard bewaartermijn van 3 maanden na het laatste contactmoment. Na deze periode worden uw gegevens definitief verwijderd uit onze systemen (waaronder Google Forms).
                    </p>
                  </section>

                  <section className="space-y-3">
                    <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-white">5. Delen met derden</h4>
                    <p>
                      Wij verkopen uw gegevens niet aan derden. Wij delen uw informatie uitsluitend met partijen als dit nodig is voor de uitvoering van onze dienstverlening (zoals Google voor de formulierverwerking) of om te voldoen aan een wettelijke verplichting.
                    </p>
                  </section>

                  <section className="space-y-3">
                    <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-white">6. Uw rechten (Inzien, Aanpassen of Verwijderen)</h4>
                    <p>
                      U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of te verwijderen. Daarnaast heeft u het recht om uw eventuele toestemming voor de gegevensverwerking in te trekken.
                    </p>
                    <ul className="space-y-2">
                      <li><span className="text-white font-medium">Inzien/Wijzigen:</span> Wilt u weten welke gegevens wij van u hebben of kloppen deze niet? Stuur een verzoek naar info@bridgeview-analytics.nl.</li>
                      <li><span className="text-white font-medium">Verwijderen:</span> U kunt ons op elk gewenst moment verzoeken om uw gegevens voortijdig te wissen.</li>
                      <li><span className="text-white font-medium">Reactietijd:</span> Wij zullen zo snel mogelijk, maar uiterlijk binnen vier weken, op uw verzoek reageren.</li>
                    </ul>
                  </section>

                  <section className="space-y-3">
                    <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-white">7. Beveiliging</h4>
                    <p>
                      BridgeView Analytics neemt de bescherming van uw gegevens serieus en neemt passende technische en organisatorische maatregelen om misbruik, verlies, onbevoegde toegang en ongewenste openbaarmaking tegen te gaan.
                    </p>
                  </section>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5">
                   <button 
                    onClick={() => setIsPrivacyOpen(false)}
                    className="w-full sm:w-auto px-10 py-3.5 bg-bridgeview-amber text-bridgeview-dark font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-all shadow-lg"
                   >
                    Begrepen
                   </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Terms & Conditions Modal */}
      {isTermsOpen && (
        <div className="fixed inset-0 z-[9999] isolation isolate flex items-start justify-center p-4 sm:p-8 pt-24 sm:pt-32 bg-black/90 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-2xl overflow-hidden shadow-[0_0_50px_-12px_rgba(197,160,89,0.3)] max-h-[85vh] overflow-y-auto bg-[#0B222E]">
            
            <div className="bg-[#0B222E] border border-white/10 p-8 lg:p-12 text-left">
              <button 
                onClick={() => setIsTermsOpen(false)}
                className="absolute top-6 right-6 text-slate-500 hover:text-white transition-all p-2 hover:bg-white/5"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="animate-in fade-in slide-in-from-bottom-2 duration-400">
                <h3 className="text-xl lg:text-2xl font-bold mb-2 uppercase tracking-widest text-white">Algemene Voorwaarden BridgeView Analytics</h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-bridgeview-amber font-bold mb-8 border-b border-white/5 pb-4">Laatst bijgewerkt: 12 februari 2026</p>
                
                <div className="space-y-8 text-slate-400 font-light text-sm leading-relaxed">
                  <p>
                    Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes en overeenkomsten tussen BridgeView Analytics ("wij", "ons") en haar opdrachtgevers.
                  </p>

                  <section className="space-y-3">
                    <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-white">1. Dienstverlening</h4>
                    <p>
                      BridgeView Analytics biedt strategische advisering en de implementatie van data-oplossingen, waaronder Power BI dashboards, datawarehouse-bouw en compliance-audits. Onze diensten worden naar beste inzicht en vermogen uitgevoerd als een inspanningsverbintenis.
                    </p>
                  </section>

                  <section className="space-y-3">
                    <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-white">2. Offertes en Overeenkomsten</h4>
                    <ul className="list-disc list-inside space-y-2 pl-2">
                      <li>Al onze offertes zijn vrijblijvend, tenzij uitdrukkelijk anders is vermeld.</li>
                      <li>Een overeenkomst komt tot stand op het moment dat de opdrachtgever een offerte of opdrachtbevestiging schriftelijk (per e-mail) accepteert.</li>
                    </ul>
                  </section>

                  <section className="space-y-3">
                    <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-white">3. Tarieven en Betaling</h4>
                    <ul className="list-disc list-inside space-y-2 pl-2">
                      <li>Alle genoemde prijzen zijn exclusief BTW en andere heffingen van overheidswege.</li>
                      <li>Betaling dient te geschieden binnen 14 dagen na factuurdatum, tenzij anders overeengekomen.</li>
                      <li>Bij overschrijding van de betalingstermijn behouden wij ons het recht voor om de dienstverlening op te schorten.</li>
                    </ul>
                  </section>

                  <section className="space-y-3">
                    <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-white">4. Intellectueel Eigendom en Gebruiksrecht</h4>
                    <ul className="list-disc list-inside space-y-2 pl-2">
                      <li>BridgeView Analytics behoudt het intellectueel eigendom op alle door haar ontwikkelde methodieken, sjablonen en software-onderdelen.</li>
                      <li>De opdrachtgever verkrijgt een niet-exclusief en onbeperkt gebruiksrecht op de voor hen opgeleverde dashboards en rapportages na volledige betaling van de factuur.</li>
                    </ul>
                  </section>

                  <section className="space-y-3">
                    <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-white">5. Geheimhouding en Data</h4>
                    <ul className="list-disc list-inside space-y-2 pl-2">
                      <li>Wij verplichten ons tot volledige geheimhouding van alle vertrouwelijke informatie en bedrijfsgegevens die de opdrachtgever aan ons ter beschikking stelt.</li>
                      <li>De opdrachtgever blijft te allen tijde eigenaar van de ruwe brondata die door onze oplossingen wordt verwerkt.</li>
                    </ul>
                  </section>

                  <section className="space-y-3">
                    <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-white">6. Aansprakelijkheid</h4>
                    <ul className="list-disc list-inside space-y-2 pl-2">
                      <li>BridgeView Analytics is niet aansprakelijk voor indirecte schade, waaronder begrepen gevolgschade, gederfde winst of gemiste besparingen door het gebruik van de opgeleverde data-oplossingen.</li>
                      <li>Onze aansprakelijkheid is beperkt tot het bedrag dat voor de betreffende opdracht in rekening is gebracht.</li>
                    </ul>
                  </section>

                  <section className="space-y-3">
                    <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-white">7. Duur en Beëindiging</h4>
                    <ul className="list-disc list-inside space-y-2 pl-2">
                      <li>Overeenkomsten voor eenmalige projecten eindigen van rechtswege bij de definitieve oplevering.</li>
                      <li>Doorlopende adviestrajecten kunnen door beide partijen schriftelijk worden opgezegd met inachtneming van een opzegtermijn van één maand.</li>
                    </ul>
                  </section>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5">
                   <button 
                    onClick={() => setIsTermsOpen(false)}
                    className="w-full sm:w-auto px-10 py-3.5 bg-bridgeview-amber text-bridgeview-dark font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-all shadow-lg"
                   >
                    Begrepen
                   </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Policy Modal */}
      {isCookiesOpen && (
        <div className="fixed inset-0 z-[9999] isolation isolate flex items-start justify-center p-4 sm:p-8 pt-24 sm:pt-32 bg-black/90 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-2xl overflow-hidden shadow-[0_0_50px_-12px_rgba(197,160,89,0.3)] max-h-[85vh] overflow-y-auto bg-[#0B222E]">
            
            <div className="bg-[#0B222E] border border-white/10 p-8 lg:p-12 text-left">
              <button 
                onClick={() => setIsCookiesOpen(false)}
                className="absolute top-6 right-6 text-slate-500 hover:text-white transition-all p-2 hover:bg-white/5"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="animate-in fade-in slide-in-from-bottom-2 duration-400">
                <h3 className="text-xl lg:text-2xl font-bold mb-2 uppercase tracking-widest text-white">Cookieverklaring BridgeView Analytics</h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-bridgeview-amber font-bold mb-8 border-b border-white/5 pb-4">Laatst bijgewerkt: 12 februari 2026</p>
                
                <div className="space-y-8 text-slate-400 font-light text-sm leading-relaxed">
                  <p>
                    BridgeView Analytics maakt op deze website gebruik van cookies. Een cookie is een eenvoudig klein bestandje dat met pagina's van deze website wordt meegestuurd en door uw browser op uw harde schijf van uw computer wordt opgeslagen.
                  </p>

                  <section className="space-y-3">
                    <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-white">1. Functionele cookies</h4>
                    <p>
                      Deze cookies zijn noodzakelijk voor het technisch functioneren van de website en uw gebruiksgemak. Ze zorgen ervoor dat de website naar behoren werkt en onthouden bijvoorbeeld uw voorkeursinstellingen. Hiervoor hoeven wij geen toestemming te vragen.
                    </p>
                  </section>

                  <section className="space-y-3">
                    <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-white">2. Analytische cookies</h4>
                    <p>
                      Wij maken gebruik van analytische cookies (zoals Google Analytics) om te begrijpen hoe onze bezoekers de website gebruiken. Hiermee kunnen wij de website optimaliseren en verbeteren. Wij hebben deze cookies zo ingesteld dat:
                    </p>
                    <ul className="list-disc list-inside space-y-2 pl-2">
                      <li>Uw IP-adres wordt geanonimiseerd.</li>
                      <li>Er geen gegevens worden gedeeld met derden.</li>
                      <li>Er geen gebruik wordt gemaakt van andere Google-diensten in combinatie met de Google Analytics-cookies.</li>
                    </ul>
                  </section>

                  <section className="space-y-3">
                    <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-white">3. Google Forms & Externe content</h4>
                    <p>
                      Wanneer u een contactformulier invult via Google Forms, kan Google cookies plaatsen die noodzakelijk zijn voor het verzenden van het formulier en het voorkomen van spam (zoals reCAPTCHA). Op het gebruik van deze cookies is het privacybeleid van Google van toepassing.
                    </p>
                  </section>

                  <section className="space-y-3">
                    <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-white">4. Cookies weigeren of verwijderen</h4>
                    <p>
                      U kunt zich afmelden voor cookies door uw internetbrowser zo in te stellen dat deze geen cookies meer opslaat. Daarnaast kunt u ook alle informatie die eerder is opgeslagen via de instellingen van uw browser verwijderen.
                    </p>
                  </section>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5">
                   <button 
                    onClick={() => setIsCookiesOpen(false)}
                    className="w-full sm:w-auto px-10 py-3.5 bg-bridgeview-amber text-bridgeview-dark font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-all shadow-lg"
                   >
                    Begrepen
                   </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;