"use client";
import { useState } from "react";
import Image from "next/image";
import { Hand } from "lucide-react";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className="relative w-full max-w-[520px] aspect-[4/5] rounded-[1rem] overflow-hidden select-none group ">
      {/* Underlying 'Before' Image */}
      <div className="absolute inset-0">
        <Image src="/before.png" alt="Before Wall Transformation" fill className="object-cover" priority />
        <div className="absolute top-5 left-5 bg-black/60 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-medium border border-white/20">
          Before
        </div>
      </div>

      {/* Overlaying 'After' Image, clipped from left according to sliderPosition */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none" 
        style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
      >
        <Image src="/after.png" alt="After Wall Transformation" fill className="object-cover" priority />
        <div className="absolute top-5 right-5 bg-black/60 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-medium border border-white/20">
          After
        </div>
      </div>

      {/* The invisible slider input */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={(e) => setSliderPosition(Number(e.target.value))}
        className="absolute inset-0 z-20 w-full h-full opacity-0 cursor-col-resize touch-pan-y"
      />

      {/* The visible custom slider thumb overlay line and dot */}
      <div 
        className="absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none transition-transform duration-75"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-200 pointer-events-auto">
          <Hand className="w-5 h-5 text-gray-700" />
        </div>
      </div>
    </div>
  );
}
