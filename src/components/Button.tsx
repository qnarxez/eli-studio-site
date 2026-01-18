interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'large';
  onClick?: () => void;
}

export function Button({ children, variant = 'primary', size = 'default', onClick }: ButtonProps) {
  const baseStyles = 'px-8 py-4 rounded-full transition-all duration-300 cursor-pointer border-2 font-bold uppercase tracking-wider';
  
  const variants = {
    primary: 'bg-[#800080] border-[#800080] text-white hover:bg-[#600060] hover:shadow-[0_0_30px_rgba(128,0,128,0.6)] hover:scale-105',
    secondary: 'bg-transparent border-[#800080] text-[#800080] hover:bg-[#800080] hover:text-white hover:shadow-[0_0_30px_rgba(128,0,128,0.6)]'
  };

  const sizes = {
    default: 'text-sm',
    large: 'text-base px-12 py-6'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}