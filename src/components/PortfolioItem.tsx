import { Play } from "lucide-react";

interface PortfolioItemProps {
  image: string;
  title: string;
  type: "vertical" | "horizontal";
}

export function PortfolioItem({
  image,
  title,
  type,
}: PortfolioItemProps) {
  return (
    <div
      className="relative group cursor-pointer overflow-hidden rounded-2xl border-2 border-[#800080]/20 hover:border-[#800080] transition-all duration-500"
      style={{ background: "rgb(var(--color-bg-light-alt))" }}
    >
      <div
        className={`relative ${type === "vertical" ? "aspect-[9/16]" : "aspect-video"}`}
        style={{ background: "rgb(var(--color-bg-light))" }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          style={{ filter: "brightness(1.15) contrast(1.05)" }}
        />
        {/* Dark overlay for contrast - lightened */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-50 group-hover:opacity-70 transition-all duration-500"></div>

        {/* Purple accent overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[--color-primary] via-transparent to-transparent opacity-0 group-hover:opacity-30 transition-all duration-500"></div>

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
            <div className="w-20 h-20 rounded-full bg-[--color-primary] flex items-center justify-center shadow-[0_0_40px_rgba(128,0,128,0.8)]">
              <Play
                size={32}
                fill="white"
                className="text-white ml-1"
              />
            </div>
          </div>
        </div>

        {/* Title overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-white font-medium">{title}</p>
        </div>
      </div>
    </div>
  );
}