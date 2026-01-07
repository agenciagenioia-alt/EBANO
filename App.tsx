
import React from 'react';

// --- Componentes Atómicos ---

const MenuItem: React.FC<{ name: string; price: string; description?: string }> = ({ name, price, description }) => (
  <div className="mb-7 group">
    <div className="flex items-baseline justify-between gap-2">
      <h4 className="text-white font-bold text-sm md:text-[15px] tracking-[0.12em] uppercase">
        {name}
      </h4>
      <div className="flex-grow border-b border-white/10 mb-1 mx-2"></div>
      <span className="font-serif text-[#D4AF37] text-lg font-bold italic tracking-tighter">
        {price}
      </span>
    </div>
    {description && (
      <p className="text-white/40 text-[10px] md:text-[11px] leading-relaxed mt-1 uppercase tracking-[0.2em] font-light italic max-w-lg">
        {description}
      </p>
    )}
  </div>
);

const SectionDivider: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="mb-12">
    <div className="flex items-center gap-4 mb-2">
      <div className="h-[2px] w-10 bg-[#D4AF37]"></div>
      <h3 className="text-[#D4AF37] font-serif text-3xl md:text-4xl tracking-[0.15em] uppercase">
        {title}
      </h3>
    </div>
    <p className="text-white/30 text-[9px] md:text-[10px] uppercase tracking-[0.5em] font-semibold pl-14 italic">
      {subtitle}
    </p>
  </div>
);

const BrandQuote: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="py-20 text-center">
    <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent mx-auto mb-8"></div>
    <p className="font-serif italic text-[#D4AF37] text-xl md:text-2xl px-8 max-w-2xl mx-auto leading-relaxed opacity-90">
      {children}
    </p>
    <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent mx-auto mt-8"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="pdf-canvas">
      {/* Utilidad para Guardar PDF */}
      <div className="no-print fixed top-8 right-8 z-50">
        <button 
          onClick={() => window.print()}
          className="bg-[#D4AF37] text-[#0a0a0a] px-8 py-3 rounded-sm font-bold uppercase text-[11px] tracking-[0.2em] hover:bg-white transition-all shadow-2xl flex items-center gap-3"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
          DESCARGAR CARTA PDF
        </button>
      </div>

      <div className="container mx-auto max-w-5xl px-8 md:px-12 py-20 md:py-28">
        
        {/* LOGO TIPOGRÁFICO DE ALTA GAMA */}
        <header className="text-center mb-32 relative">
          <div className="mb-14 inline-block">
            <div className="flex flex-col items-center">
              <span className="text-[10px] tracking-[1em] text-white/40 uppercase mb-8 font-medium">Cocina de Origen</span>
              <div className="flex flex-col border-y border-[#D4AF37]/20 py-8 px-12">
                <h1 className="text-5xl md:text-8xl font-serif font-bold tracking-[-0.05em] leading-none text-white uppercase">
                  MIRADOR
                </h1>
                <h2 className="text-4xl md:text-6xl font-serif italic text-[#D4AF37] font-light tracking-[0.4em] leading-none mt-2 uppercase">
                  ÉBANO
                </h2>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6 mt-8">
            <div className="h-[1px] w-12 bg-white/10"></div>
            <p className="text-[#D4AF37] text-xs md:text-sm tracking-[0.6em] font-bold uppercase italic">
              MAESTRÍA EN BRASAS & SABORES DE ORIGEN
            </p>
            <div className="h-[1px] w-12 bg-white/10"></div>
          </div>
        </header>

        {/* SECCIÓN 1: ENTRADAS */}
        <section className="mb-24">
          <SectionDivider title="Entradas" subtitle="El comienzo de una gran experiencia" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20">
            <MenuItem name="Empanadas Ébano x5" price="$23.000" description="Masa de maíz artesanal, acompañadas con nuestra salsa de la casa." />
            <MenuItem name="Arepitas con Guiso" price="$16.000" description="De puro maíz peto con guiso criollo cocinado a fuego lento." />
            <MenuItem name="Tostones Gratinados" price="$22.000" description="Plátano verde crocante cubierto de abundante queso fundido." />
          </div>
        </section>

        <BrandQuote>
          "Sabor que nace en el campo y se eleva en el Mirador de la Perla del Otún."
        </BrandQuote>

        {/* SECCIÓN 2: MENÚ EJECUTIVO */}
        <section className="mb-24 bg-white/[0.03] p-12 rounded-sm border-l border-[#D4AF37]/50">
          <SectionDivider title="Almuerzos Ejecutivos" subtitle="Elegancia diaria • Lunes a Viernes" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-2">
            <MenuItem name="Carne a la Plancha" price="$24.000" />
            <MenuItem name="Chuleta de Pollo" price="$24.000" />
            <MenuItem name="Chuleta de Cerdo" price="$24.000" />
            <MenuItem name="Chuleta de Pescado" price="$24.000" />
            <MenuItem name="Mojarra Frita" price="$26.000" description="Perfectamente dorada con acompañamiento tradicional." />
            <MenuItem name="Trucha al Gusto" price="$27.000" description="Frita o a la plancha, lo mejor de nuestra región." />
            <MenuItem name="Sierra Seleccionada" price="$27.000" />
          </div>
        </section>

        {/* SECCIÓN 3: PARA TARDEAR */}
        <section className="mb-24">
          <SectionDivider title="Para Tardear" subtitle="Compañía ideal para nuestro atardecer" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20">
            <MenuItem name="Chorizo con Arepa Tela" price="$28.000" description="Cebolla, tomate y un toque de limón fresco." />
            <MenuItem name="Arepa con Carne Desmechada" price="$26.000" description="Con ensalada de la casa y yuquita frita." />
            <MenuItem name="Papas Ébano" price="$30.000" description="Nuestra receta especial, crocantes y bien sazonadas." />
            <MenuItem name="Hamburguesa Artesanal" price="$24.000" description="Carne premium res, queso y pan brioche artesanal." />
            <MenuItem name="Artesanal Doble" price="$30.000" />
            <MenuItem name="Chuzo Desgranado" price="$28.000" description="Pollo o Cerdo sobre cama de papitas y salsas." />
            <MenuItem name="Chuzo Desgranado Mixto" price="$34.000" />
            <MenuItem name="Chicharrón Ébano" price="$36.000" description="Crocante y jugoso, con el sello parrillero de la casa." />
          </div>
        </section>

        {/* SECCIÓN 4 & 5: ASADOS Y PICADAS */}
        <section className="mb-24">
          <SectionDivider title="Asados & Parrilla" subtitle="Cortes de autor al carbón" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20">
            <MenuItem name="Churrasco al Gusto" price="$46.000" description="Corte tierno con el término perfecto de nuestra parrilla." />
            <MenuItem name="Punta de Anca" price="$48.000" description="Sabor robusto y jugosidad inigualable." />
            <MenuItem name="Costillas San Luis" price="$49.000" description="Tiernas y bañadas en nuestra reducción de brasas." />
            <MenuItem name="Solomito de Cerdo" price="$45.000" />
            <MenuItem name="Solomito de Res" price="$48.000" />
            <MenuItem name="Parrillada Ébano" price="$52.000" description="150gr Res, 150gr Pollo, 150gr Cerdo, Chorizo y guarniciones." />
            <MenuItem name="Picada Especial x 2" price="$80.000" description="Res, cerdo, pollo, chorizo, chicharrón, costilla y acompañantes." />
            <MenuItem name="Picada Familiar" price="$160.000" />
          </div>
        </section>

        {/* SECCIÓN 6: MAR */}
        <section className="mb-24">
          <SectionDivider title="Del Mar" subtitle="Frescura absoluta en la montaña" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20">
            <MenuItem name="Salmón a la Plancha" price="$50.000" />
            <MenuItem name="Trucha a la Plancha" price="$46.000" />
            <MenuItem name="Mojarra Frita Imperial" price="$46.000" />
            <MenuItem name="Cazuela de Camarón" price="$40.000" />
            <MenuItem name="Cazuela de Mariscos" price="$50.000" description="Receta especial con los mejores frutos del mar." />
            <MenuItem name="Arroz con Camarones" price="$40.000" />
            <MenuItem name="Arroz Marinero" price="$50.000" />
          </div>
        </section>

        <div className="page-break"></div>

        {/* SECCIÓN 7: BEBIDAS */}
        <section className="mb-24">
          <SectionDivider title="Bebidas & Postres" subtitle="El final perfecto para su visita" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <h5 className="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] font-bold mb-8 border-b border-white/10 pb-2 italic">Refrescantes</h5>
              <MenuItem name="Sodas de Autor" price="$16.000" />
              <MenuItem name="Frappé Selección" price="$14.000" />
              <MenuItem name="Limonadas" price="$16.000" />
              <MenuItem name="Jugos Naturales" price="$14.000" />
            </div>
            <div>
              <h5 className="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] font-bold mb-8 border-b border-white/10 pb-2">Barista</h5>
              <MenuItem name="Tinto de Origen" price="$4.000" />
              <MenuItem name="Capuchino" price="$10.000" />
              <MenuItem name="Té Chai" price="$12.000" />
            </div>
            <div>
              <h5 className="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] font-bold mb-8 border-b border-white/10 pb-2">Dulzura</h5>
              <MenuItem name="Torta de la Casa" price="$14.000" />
              <MenuItem name="Copa de Helado" price="$16.000" />
            </div>
          </div>
        </section>

        {/* PIE DE PÁGINA FINAL */}
        <footer className="border-t border-white/10 pt-20 text-center">
          <div className="mb-16">
            <p className="text-[#D4AF37] font-serif italic text-2xl mb-10 tracking-wide">Gracias por elegir Mirador Ébano</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-24">
              <div className="text-center">
                <span className="text-white/20 text-[9px] uppercase tracking-[0.4em] mb-3 block font-bold">Ubicación</span>
                <p className="text-white text-base font-medium tracking-widest uppercase">Avenida Cuba, Pereira</p>
              </div>
              <div className="text-center">
                <span className="text-white/20 text-[9px] uppercase tracking-[0.4em] mb-3 block font-bold">Reservas</span>
                <span className="text-white text-lg font-bold tracking-[0.2em]">310 482 7580</span>
              </div>
            </div>
          </div>

          {/* Bloque de Ubicación solicitado (SIN LINK) */}
          <div className="max-w-2xl mx-auto mb-20 px-6">
            <div className="py-10 border-y border-[#D4AF37]/20">
              <p className="text-[#D4AF37] text-[10px] uppercase tracking-[0.6em] mb-4 font-bold">Nuestra Ubicación</p>
              <p className="text-white/70 text-sm md:text-base font-medium tracking-[0.1em] leading-relaxed uppercase">
                LA UBICACIÓN EXACTA EN GOOGLE MAPS SE ENCUENTRA DISPONIBLE EN EL LINK DE NUESTRA BIOGRAFÍA.
              </p>
            </div>
          </div>

          {/* Bloque de Redes (SÓLO TEXTO PARA PDF) */}
          <div className="flex flex-col items-center gap-6">
             <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                <div className="flex flex-col items-center">
                  <span className="text-white/20 text-[8px] uppercase tracking-widest mb-1">Instagram</span>
                  <span className="text-white/50 text-[11px] uppercase tracking-[0.4em] font-bold tracking-[0.2em]">@miradorebanopereira</span>
                </div>
                <div className="hidden md:block w-[1px] h-8 bg-white/10"></div>
                <div className="flex flex-col items-center">
                  <span className="text-white/20 text-[8px] uppercase tracking-widest mb-1">Sitio Web</span>
                  <span className="text-white/50 text-[11px] uppercase tracking-[0.4em] font-bold tracking-[0.2em]">www.miradorebanopereira.com</span>
                </div>
             </div>
             <span className="text-white/10 text-[8px] uppercase tracking-[1em] mt-12 font-medium italic">Mirador Ébano • Pereira • 2026</span>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default App;
