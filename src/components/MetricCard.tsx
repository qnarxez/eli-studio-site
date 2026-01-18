interface MetricCardProps {
  value: string;
  label: string;
}

export function MetricCard({ value, label }: MetricCardProps) {
  return (
    <div 
      className="text-center p-8 rounded-2xl border-2 border-[#800080]/40 hover:border-[#800080] hover:shadow-[0_0_40px_rgba(128,0,128,0.4)] transition-all duration-300 group"
      style={{ background: 'rgb(var(--color-bg-dark-alt))' }}
    >
      <div className="text-[#800080] text-5xl font-black mb-3 group-hover:scale-110 transition-transform duration-300">
        {value}
      </div>
      <div 
        className="text-sm uppercase tracking-wider"
        style={{ color: 'rgb(var(--color-text-dark-bg-muted))' }}
      >
        {label}
      </div>
    </div>
  );
}