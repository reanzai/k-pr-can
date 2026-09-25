import { Sparkles, ArrowRight } from 'lucide-react';

interface SloganBannerProps {
  onOpenDemo: (campaignName?: string) => void;
}

export default function SloganBanner({ onOpenDemo }: SloganBannerProps) {
  return (
    <>
      {/* SECTION 1: Emblem Slogan Section */}
      <section className="py-16 bg-white border-b border-slate-100 text-center relative overflow-hidden">
        {/* Subtle decorative dot accents */}
        <div className="absolute top-10 left-1/4 w-1.5 h-1.5 bg-brand-blue/30 rounded-full" />
        <div className="absolute bottom-10 right-1/4 w-2 h-2 bg-brand-accent/40 rounded-full" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* Centered Bridge Emblem SVG Logo directly represented */}
          <div className="inline-flex items-center justify-center p-4 rounded-3xl bg-blue-50/70 text-brand-navy mb-5 shadow-sm hover:scale-105 transition-transform duration-300">
            <svg fill="none" height="64" viewBox="0 0 48 48" width="64" xmlns="http://www.w3.org/2000/svg">
              <rect fill="#0f2537" height="48" rx="12" width="48"></rect>
              {/* Outer glowing bridge arch representing e-Dönüşüm */}
              <path d="M10 34C10 23 18 15 24 15C30 15 38 23 38 34" stroke="#0066cc" strokeLinecap="round" strokeWidth="4"></path>
              {/* Inner glowing bridge arch representing corporate ERP */}
              <path d="M16 34C16 26 20 20 24 20C28 20 32 26 32 34" stroke="#38bdf8" strokeLinecap="round" strokeWidth="2.5" opacity="0.9"></path>
              {/* Central connecting star node */}
              <circle cx="24" cy="14" fill="#f59e0b" r="3"></circle>
              {/* Left & Right bridge foundations */}
              <circle cx="16" cy="34" fill="#ffffff" r="2"></circle>
              <circle cx="32" cy="34" fill="#ffffff" r="2"></circle>
              <line opacity="0.5" stroke="#ffffff" strokeDasharray="1.5 1.5" strokeWidth="1" x1="24" x2="24" y1="17" y2="34"></line>
            </svg>
          </div>

          {/* Slogan */}
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-[0.25em] sm:tracking-[0.4em] text-brand-blue uppercase font-display select-none">
            g e l e c e k &nbsp; s e n i n l e
          </h2>
          
          <p className="text-slate-500 mt-3 text-xs sm:text-sm max-w-md mx-auto font-medium">
            KÖPRÜ SOFT Kurumsal Yazılım Çözümleri ile işletmenizin geleceğe uzanan dijital köprüsünü kurun.
          </p>

          <div className="mt-6">
            <button 
              onClick={() => onOpenDemo("Hemen Tanış Slogan Teklifi")}
              className="inline-flex items-center gap-1.5 px-8 py-3 rounded-full bg-brand-blue hover:bg-brand-blue-hover text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <span>Hemen Tanış</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 2: Abstract Tech Wave Mesh Banner */}
      <section className="relative py-20 sm:py-24 text-center text-white overflow-hidden bg-gradient-to-tr from-[#0a1b29] via-[#0d2a45] to-[#0052a3] shadow-inner">
        {/* Technical abstract grid background pattern overlays */}
        <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
        
        {/* Soft cyan lighting glow orb */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-brand-accent/25 rounded-full blur-3xl mx-auto pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          
          {/* Lowercase Tracked Pill badge */}
          <div className="inline-flex items-center px-6 py-2 rounded-full bg-slate-950/80 border border-brand-accent/30 shadow-xl backdrop-blur-sm transition-all hover:scale-105">
            <span className="text-brand-accent font-display font-bold text-base sm:text-lg tracking-[0.2em] lowercase">
              gelecek seninle
            </span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight max-w-2xl mx-auto text-white leading-tight font-display">
            KöprüCloud ile Kesintisiz, Yüksek Performanslı İş Süreçleri
          </h3>
          
          <p className="text-blue-100/80 text-xs sm:text-base max-w-xl mx-auto leading-relaxed font-medium">
            Finans, muhasebe, tedarik zinciri ve üretim hatlarınızı uçtan uca tek platformda buluşturan yeni nesil kurumsal entegrasyon omurgası.
          </p>

        </div>
      </section>
    </>
  );
}
