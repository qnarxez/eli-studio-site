import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div 
      className="p-8 rounded-2xl border-2 border-[#800080]/20 hover:border-[#800080] transition-all duration-300 hover:shadow-[0_0_40px_rgba(128,0,128,0.2)] group relative overflow-hidden"
      style={{ background: 'rgb(var(--color-bg-dark-alt))' }}
    >
      {/* Purple accent bar */}
      <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-gradient-to-b from-[#800080] to-[#600060] transition-all duration-500"></div>
      
      <Icon 
        className="text-[#800080] mb-6 group-hover:scale-110 transition-transform duration-300" 
        size={48} 
        strokeWidth={1.5} 
      />
      <h3 
        className="mb-3"
        style={{ color: 'rgb(var(--color-text-dark-bg))' }}
      >
        {title}
      </h3>
      <p 
        className="text-base leading-relaxed"
        style={{ color: 'rgb(var(--color-text-dark-bg-secondary))' }}
      >
        {description}
      </p>
    </div>
  );
}