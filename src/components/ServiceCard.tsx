import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  items: string[];
  featured?: boolean;
}

export function ServiceCard({ icon: Icon, title, items, featured = false }: ServiceCardProps) {
  return (
    <div 
      className={`p-12 rounded-3xl border-2 transition-all duration-500 hover:scale-[1.02] relative overflow-hidden group ${
        featured
          ? 'bg-gradient-to-br from-[#800080] to-[#600060] border-[#800080] shadow-[0_0_60px_rgba(128,0,128,0.5)]'
          : 'border-[#800080]/20 hover:border-[#800080] hover:shadow-[0_0_40px_rgba(128,0,128,0.2)]'
      }`}
      style={{ background: featured ? undefined : 'rgb(var(--color-bg-light-alt))' }}
    >
      {/* Purple glow effect on hover for non-featured cards */}
      {!featured && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#800080] rounded-full blur-[100px] opacity-25"></div>
        </div>
      )}

      <div className="relative z-10">
        <div className="mb-8">
          <Icon 
            className={featured ? 'text-white' : 'text-[#800080]'}
            size={60} 
            strokeWidth={1.5}
          />
        </div>
        <h3 
          className={`mb-8 ${featured ? 'text-white' : ''}`}
          style={!featured ? { color: 'rgb(var(--color-text-light-bg))' } : undefined}
        >
          {title}
        </h3>
        <ul className="space-y-5">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <span 
                className={`mr-4 mt-1.5 text-base ${featured ? 'text-white' : 'text-[#800080]'}`}
              >
                ●
              </span>
              <span 
                className={`text-base leading-relaxed ${
                  featured ? 'text-white/95' : ''
                }`}
                style={!featured ? { color: 'rgb(var(--color-text-light-bg-secondary))' } : undefined}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}