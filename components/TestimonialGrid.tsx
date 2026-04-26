"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Instagram, Dribbble, Figma, Youtube, Compass, X } from "lucide-react";

export default function TestimonialGrid() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far the container has scrolled through the viewport
      const visibleHeight = windowHeight + rect.height;
      const scrolled = windowHeight - rect.top;
      
      let progress = scrolled / visibleHeight;
      // Clamp between 0 and 1 strictly
      progress = Math.max(0, Math.min(1, progress));
      
      // -1 to 1 normalized range where 0 is when the section is exactly in middle of screen
      setScrollProgress((progress - 0.5) * 2);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initialize
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const testimonialsLeft = [
    {
      name: "Orchardgreen Homes", title: "Customer", img: "11",
      content: "Mithila Wallpaper is the best wallpaper shop in Mithapur, Patna. Yahan par latest designer wallpapers, 3D wallpapers aur premium quality options available hain. Staff bahut cooperative hai aur proper guidance dete hain. Price...",
      icon: X
    },
    {
      name: "Anamika Raj", title: "Customer", img: "21",
      content: "Best rate with best quality of work",
      icon: Compass
    },
    {
      name: "Pranjali Narayan", title: "Customer", img: "25",
      content: "Great work! Will recommend this shop for wallpaper.",
      icon: Instagram
    }
  ];

  const testimonialsMiddle = [
    {
      name: "SUMUKH MISHRA GAMING", title: "Customer", img: "22",
      content: "Very good work And nature is also kind and gentle Price is also affordable",
      icon: Youtube
    },
    {
      name: "Nitish Kumar", title: "Customer", img: "24",
      content: "I'm deeply attached with shop because my home interior design make this shop. I'm fully satisfied this works",
      icon: Dribbble
    },
    {
      name: "Sneha Kumari", title: "Customer", img: "35",
      content: "Have a very nice experience....staff are very friendly nature and work with full dedication ..... Finally an awesome.....",
      icon: Instagram
    }
  ];

  const testimonialsRight = [
    {
      name: "Md Salahuddin", title: "Customer", img: "38",
      content: "wallpaper work done in my house is very nice and i full finishing completely satisfied",
      icon: Figma
    },
    {
      name: "Prakash Kumar", title: "Customer", img: "41",
      content: "Honest and polite owner best service and product",
      icon: X
    },
    {
      name: "Sharma Creations", title: "Customer", img: "45",
      content: "Excellent collection, Reasonable Price & very good service. Must try.",
      icon: Dribbble
    }
  ];

  // We explicitly define relative movement bounds (so it never overlaps text).
  const leftTransform = scrollProgress * 30; // Subtle downward shift on scroll up
  const middleTransform = scrollProgress * -70; // Noticeable upward shift on scroll up
  const rightTransform = scrollProgress * 25; // Subtle downward shift on scroll up

  return (
    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full max-w-[75rem] mx-auto py-15 relative">
      
      {/* Left Column */}
      <div className="flex flex-col gap-3">
        {testimonialsLeft.map((t, i) => (
          <TestimonialCard key={`left-${i}`} {...t} />
        ))}
      </div>

      {/* Middle Column */}
      <div className="flex flex-col gap-3">
        {testimonialsMiddle.map((t, i) => (
          <TestimonialCard key={`middle-${i}`} {...t} />
        ))}
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-3">
        {testimonialsRight.map((t, i) => (
          <TestimonialCard key={`right-${i}`} {...t} />
        ))}
      </div>
      
    </div>
  );
}

function TestimonialCard({ name, title, img, content, icon: Icon }: any) {
  return (
    <div className="relative bg-[#ffc58b] text-[#111] rounded-xl p-4 shadow-[6px_6px_0px_0px_#8f7e5c] flex flex-col items-center text-center">
      <div className="flex flex-row items-center text-left justify-start w-full gap-3 mb-5">
        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 shadow-md">
          <Image src={`https://i.pravatar.cc/150?u=${img}`} alt={name} fill className="object-cover" />
        </div>
        <div>
          <h4 className="font-medium text-[17px] text-[#111] leading-snug">{name}</h4>
          <p className="text-[13px] text-gray-600 font-medium uppercase tracking-wider">{title}</p>
        </div>
      </div>
      <p className="text-[15px] leading-relaxed text-[#222] font-light max-w-[280px]">
        "{content}"
      </p>
      <Icon className="absolute top-6 right-6 w-5 h-5 text-black/20" strokeWidth={1.5} />
    </div>
  );
}
