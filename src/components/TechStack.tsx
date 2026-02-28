import { motion } from "motion/react";

const technologies = [
  {
    name: "Gemini AI",
    logo: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <path d="M16 3L19.13 9.87L22.25 3L19.13 9.87L16 3Z" fill="url(#gemini-gradient)" />
        <path d="M4.5 6.5L9.5 16.5L4.5 26.5L-0.5 16.5L4.5 6.5Z" fill="url(#gemini-gradient)" transform="scale(0.5) translate(24, 24)" />
        <path d="M12 22C12 16.4772 16.4772 12 22 12C16.4772 12 12 7.52285 12 2C12 7.52285 7.52285 12 2 12C7.52285 12 12 16.4772 12 22Z" fill="url(#gemini-gradient)" />
        <defs>
          <linearGradient id="gemini-gradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4E75F6" />
            <stop offset="1" stopColor="#E35868" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "Claude",
    logo: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#D97757"/>
        <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="#D97757"/>
      </svg>
    ),
  },
  {
    name: "Kimi AI",
    logo: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <circle cx="12" cy="12" r="10" fill="#000000" stroke="white" strokeWidth="1.5"/>
        <path d="M7 12h10M12 7v10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "ChatGPT",
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#10A37F]">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.98 4.18a5.985 5.985 0 0 0-3.96 5.295 6.046 6.046 0 0 0 .515 4.911 5.985 5.985 0 0 0 5.812 3.164 6.046 6.046 0 0 0 6.51 2.9 6.065 6.065 0 0 0 4.976-4.181 5.985 5.985 0 0 0 3.96-5.295 6.046 6.046 0 0 0-.511-4.154zm-9.018 8.249a4.008 4.008 0 0 1-2.75-1.095l.875-1.516a2.26 2.26 0 0 0 1.875.748c.957 0 1.734-.778 1.734-1.734 0-.957-.777-1.734-1.734-1.734H11.5V11h1.766c1.922 0 3.484 1.563 3.484 3.484 0 1.922-1.562 3.485-3.485 3.586z" />
      </svg>
    ),
  },
  {
    name: "DeepSeek",
    logo: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#4D6BFE]">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "GitHub",
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405 1.02 0 2.04.135 3 .405 2.28-1.56 3.285-1.23 3.285-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "Vercel",
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
        <path d="M24 22.525H0l12-21.05 12 21.05z" />
      </svg>
    ),
  },
  {
    name: "Netlify",
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#00C7B7]">
        <path d="M6.49 19.09h-2.9a.42.42 0 0 1-.42-.42V16.2a.42.42 0 0 1 .42-.42h2.9a.42.42 0 0 1 .42.42v2.47a.42.42 0 0 1-.42.42zm0-6.17h-2.9a.42.42 0 0 1-.42-.42v-2.47a.42.42 0 0 1 .42-.42h2.9a.42.42 0 0 1 .42.42v2.47a.42.42 0 0 1-.42.42zm6.17 6.17H9.76a.42.42 0 0 1-.42-.42V6.33a.42.42 0 0 1 .42-.42h2.9a.42.42 0 0 1 .42.42v12.34a.42.42 0 0 1-.42.42zm6.17 0h-2.9a.42.42 0 0 1-.42-.42v-6.17a.42.42 0 0 1 .42-.42h2.9a.42.42 0 0 1 .42.42v6.17a.42.42 0 0 1-.42.42z" />
      </svg>
    ),
  },
  {
    name: "Firebase",
    logo: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path d="M3.89 15.672L6.255 2.825c.108-.596.885-.736 1.192-.214l2.766 4.718-6.323 8.343z" fill="#FFC107"/>
        <path d="M13.657 7.022L10.63 2.05c-.26-.426-.86-.432-1.127-.012L6.797 6.904l6.86 6.86 6.86-6.86-6.86.118z" fill="#FFA000"/>
        <path d="M13.666 7.03L6.8 13.76l-2.91 2.91c-.56.56-.16 1.52.63 1.52h15.96c.79 0 1.19-.96.63-1.52l-7.444-9.64z" fill="#FFCA28"/>
      </svg>
    ),
  },
  {
    name: "React",
    logo: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#61DAFB]">
        <circle cx="12" cy="12" r="2" fill="currentColor"/>
        <g stroke="currentColor" strokeWidth="1.5">
          <ellipse cx="12" cy="12" rx="10" ry="4"/>
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>
        </g>
      </svg>
    ),
  },
  {
    name: "Tailwind",
    logo: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#38B2AC]">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: "Vite",
    logo: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
        <path d="M2.572 11.455l.23-2.126 9.176-1.583 9.451 1.583.23 2.126L12 23.5 2.572 11.455z" fill="#FFC61E"/>
        <path d="M12 23.5l9.659-12.045-.23-2.126-9.429 1.583V23.5z" fill="#F7D336"/>
        <path d="M1.66 2.643L2.802 12.8 12 23.5V10.95L1.66 2.643z" fill="#BD34FE"/>
        <path d="M22.34 2.643L21.198 12.8 12 23.5V10.95L22.34 2.643z" fill="#646CFF"/>
      </svg>
    ),
  },
];

export function TechStack() {
  return (
    <section className="py-12 bg-black border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <p className="text-center text-gray-500 text-sm font-medium uppercase tracking-wider">
          Didukung oleh AI & Teknologi Terbaik
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-black to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-black to-transparent" />
        
        <div className="flex animate-marquee whitespace-nowrap">
          {[...technologies, ...technologies, ...technologies].map((tech, index) => (
            <div key={index} className="flex items-center gap-3 mx-8 md:mx-12 opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-default">
              {tech.logo}
              <span className="text-lg font-semibold text-white hidden md:block">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
