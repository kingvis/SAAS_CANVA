import React from 'react';

export default function AnimatedBackground() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden w-full h-full"
      style={{ width: '100vw', height: '100vh' }}
    >
      {/* Top Left Blob */}
      <svg
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] animate-blob-morph1 opacity-60"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: 'blur(32px)' }}
      >
        <defs>
          <linearGradient id="blob1" x1="0" y1="0" x2="600" y2="600" gradientUnits="userSpaceOnUse">
            <stop stopColor="#43a4ff" />
            <stop offset="0.5" stopColor="#ffe5b4" />
            <stop offset="1" stopColor="#fff" />
          </linearGradient>
        </defs>
        <path fill="url(#blob1)" d="M300,60Q370,120,420,200Q470,280,400,350Q330,420,230,400Q130,380,120,280Q110,180,200,120Q290,60,300,60Z" />
      </svg>
      {/* Bottom Right Blob */}
      <svg
        className="absolute bottom-[-15%] right-[-10%] w-[600px] h-[600px] animate-blob-morph2 opacity-50"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: 'blur(40px)' }}
      >
        <defs>
          <linearGradient id="blob2" x1="0" y1="0" x2="600" y2="600" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffe5b4" />
            <stop offset="0.5" stopColor="#43a4ff" />
            <stop offset="1" stopColor="#fff" />
          </linearGradient>
        </defs>
        <path fill="url(#blob2)" d="M300,100Q400,150,450,250Q500,350,400,400Q300,450,200,400Q100,350,150,250Q200,150,300,100Z" />
      </svg>
      {/* Optional: Center Left Blob */}
      <svg
        className="absolute top-[40%] left-[-8%] w-[350px] h-[350px] animate-blob-morph3 opacity-40"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: 'blur(24px)' }}
      >
        <defs>
          <linearGradient id="blob3" x1="0" y1="0" x2="600" y2="600" gradientUnits="userSpaceOnUse">
            <stop stopColor="#43a4ff" />
            <stop offset="0.7" stopColor="#ffe5b4" />
          </linearGradient>
        </defs>
        <path fill="url(#blob3)" d="M300,120Q350,200,400,300Q450,400,350,450Q250,500,200,400Q150,300,200,200Q250,100,300,120Z" />
      </svg>
    </div>
  );
} 