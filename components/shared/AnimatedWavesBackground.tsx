import React from 'react';

export default function AnimatedWavesBackground() {
  return (
    <div className="fixed inset-0 -z-20 pointer-events-none w-full h-full">
      {/* Top Wave */}
      <svg className="absolute top-0 left-0 w-full h-[180px] animate-wave-move" viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="url(#topwave)" fillOpacity="1" d="M0,80 C360,180 1080,0 1440,100 L1440,0 L0,0 Z" />
        <defs>
          <linearGradient id="topwave" x1="0" y1="0" x2="1440" y2="180" gradientUnits="userSpaceOnUse">
            <stop stopColor="#a18cd1" />
            <stop offset="1" stopColor="#fbc2eb" />
          </linearGradient>
        </defs>
      </svg>
      {/* Bottom Wave */}
      <svg className="absolute bottom-0 left-0 w-full h-[180px] animate-wave-move-reverse" viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="url(#bottomwave)" fillOpacity="1" d="M0,100 C360,0 1080,180 1440,80 L1440,180 L0,180 Z" />
        <defs>
          <linearGradient id="bottomwave" x1="0" y1="0" x2="1440" y2="180" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fbc2eb" />
            <stop offset="1" stopColor="#a1c4fd" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
} 