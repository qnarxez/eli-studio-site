interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  benefit: string;
}

export function ProcessStep({ number, title, description, benefit }: ProcessStepProps) {
  return (
    <div className="relative flex flex-col group">
      {/* Vertical connector line */}
      <div className="absolute left-10 top-24 bottom-0 w-0.5 bg-gradient-to-b from-[#800080] via-[#800080] to-transparent opacity-30 hidden md:block"></div>
      
      <div className="flex gap-8 items-start">
        <div className="flex-shrink-0 w-20 h-20 rounded-2xl border-2 border-[#800080] bg-gradient-to-br from-[#800080] to-[#600060] flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(128,0,128,0.6)] group-hover:scale-110 relative z-10">
          <span className="text-2xl font-black text-white">{number}</span>
        </div>
        
        <div className="flex-1 pt-2 pb-4">
          <h3 
            className="mb-4"
            style={{ color: 'rgb(var(--color-text-light-bg))' }}
          >
            {title}
          </h3>
          <p 
            className="text-base mb-4 leading-relaxed"
            style={{ color: 'rgb(var(--color-text-light-bg-secondary))' }}
          >
            {description}
          </p>
          <div className="flex items-start gap-2">
            <span className="text-[#800080] font-bold">→</span>
            <p className="text-[#800080] text-sm font-medium">{benefit}</p>
          </div>
        </div>
      </div>
    </div>
  );
}