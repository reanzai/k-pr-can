import { STATISTICS_DATA } from '../types';
import * as Icons from 'lucide-react';

export default function Stats() {
  return (
    <section id="kurumsal" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Custom Modern Typography Accent */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-widest text-brand-navy uppercase font-display">
            K Ö P R Ü &nbsp; S O F T &nbsp; F A R K I
          </h2>
          <div className="w-16 h-1 bg-brand-blue mx-auto rounded-full"></div>
          <p className="text-slate-500 text-sm max-w-md mx-auto">
            Türkiye'nin kurumsal dönüşüm liderinin gurur veren güncel rakamları ve sektörel etki alanı.
          </p>
        </div>

        {/* 12-Stat Matrix representing the image reference */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 max-w-5xl mx-auto">
          {STATISTICS_DATA.map((item) => {
            // Dynamically resolve the lucide-react icon component
            const IconComponent = (Icons as any)[item.iconName] || Icons.HelpCircle;

            return (
              <div 
                key={item.id} 
                className="flex flex-col items-center text-center group cursor-default"
              >
                {/* Visual Icon Badge Frame */}
                <div className="w-16 h-16 rounded-2xl bg-brand-navy hover:bg-brand-blue text-white flex items-center justify-center text-2xl mb-4 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3">
                  <IconComponent className="w-7 h-7 text-brand-accent group-hover:text-white transition-colors duration-300" />
                </div>
                
                {/* Numeric Metric */}
                <span className="text-3xl font-extrabold text-slate-900 tracking-tight font-display transition-colors duration-300 group-hover:text-brand-blue">
                  {item.value}
                </span>
                
                {/* Detailed Label */}
                <p className="text-xs font-bold text-slate-500 mt-1 uppercase tracking-wide">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
