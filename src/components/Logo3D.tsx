import { motion } from "motion/react";

export function Logo3D({ size = 40, className = "" }: { size?: number; className?: string }) {
  const half = size / 2;
  
  return (
    <div style={{ width: size, height: size }} className={`relative [perspective:800px] ${className}`}>
      <motion.div
        className="w-full h-full relative [transform-style:preserve-3d]"
        animate={{ rotateY: 360, rotateX: [0, 360] }}
        transition={{ 
          rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
          rotateX: { duration: 12, repeat: Infinity, ease: "linear" }
        }}
      >
        {/* Front - F */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-500 border border-white/20 flex items-center justify-center text-white font-black select-none shadow-[0_0_15px_rgba(59,130,246,0.5)]" 
          style={{ transform: `translateZ(${half}px)`, fontSize: size * 0.5 }}
        >
          F
        </div>
        
        {/* Back - W */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-500 border border-white/20 flex items-center justify-center text-white font-black select-none shadow-[0_0_15px_rgba(168,85,247,0.5)]" 
          style={{ transform: `rotateY(180deg) translateZ(${half}px)`, fontSize: size * 0.5 }}
        >
          W
        </div>
        
        {/* Right */}
        <div 
          className="absolute inset-0 bg-cyan-500/90 border border-white/20" 
          style={{ transform: `rotateY(90deg) translateZ(${half}px)` }} 
        />
        
        {/* Left */}
        <div 
          className="absolute inset-0 bg-indigo-500/90 border border-white/20" 
          style={{ transform: `rotateY(-90deg) translateZ(${half}px)` }} 
        />
        
        {/* Top */}
        <div 
          className="absolute inset-0 bg-sky-500/90 border border-white/20" 
          style={{ transform: `rotateX(90deg) translateZ(${half}px)` }} 
        />
        
        {/* Bottom */}
        <div 
          className="absolute inset-0 bg-violet-500/90 border border-white/20" 
          style={{ transform: `rotateX(-90deg) translateZ(${half}px)` }} 
        />
      </motion.div>
    </div>
  );
}
