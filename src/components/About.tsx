import { MapPin, User } from "lucide-react";
import { TiltCard } from "./TiltCard";

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 -z-20" />
      <div className="absolute right-0 top-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-emerald-500/10 blur-[100px]" />
      <div className="absolute left-0 bottom-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            Tentang Kami
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Mengenal lebih dekat sosok di balik FadelWeb.id
          </p>
        </div>

        <div className="flex justify-center">
          <TiltCard className="w-full max-w-2xl">
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden">
              {/* Decorative gradient line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Avatar / Icon */}
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                      <User className="w-16 h-16 text-gray-300" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 bg-green-500 rounded-full border-4 border-black flex items-center justify-center">
                    <div className="w-full h-full rounded-full animate-pulse bg-green-400 opacity-75 absolute" />
                  </div>
                </div>

                {/* Info */}
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    FADEL AQRAM MARPAUNG
                  </h3>
                  <p className="text-blue-400 font-medium mb-4">
                    Founder & Lead Developer
                  </p>
                  
                  <div className="space-y-3">
                    <p className="text-gray-300 leading-relaxed">
                      Kami berkomitmen untuk menyediakan layanan pembuatan website berkualitas tinggi dengan harga yang terjangkau bagi semua kalangan, mulai dari pelajar hingga pemilik bisnis.
                    </p>
                    
                    <div className="flex items-start justify-center md:justify-start gap-2 text-gray-400 mt-4 bg-white/5 p-4 rounded-lg border border-white/5">
                      <MapPin className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                      <span className="text-sm">
                        Sitiris-tiris, Dusun 1, Tapanuli Tengah (Tapteng),<br />
                        Sumatera Utara, Indonesia
                      </span>
                    </div>

                    <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-6">
                      <a 
                        href="https://www.youtube.com/@fadelcliper"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 text-red-400 hover:bg-red-600 hover:text-white transition-all border border-red-600/20"
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="24" 
                          height="24" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          className="w-4 h-4"
                        >
                          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                          <path d="m10 15 5-3-5-3z" />
                        </svg>
                        <span className="text-sm font-medium">YouTube</span>
                      </a>
                      
                      <a 
                        href="https://www.tiktok.com/@fadelcliper"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-600/10 text-pink-400 hover:bg-pink-600 hover:text-white transition-all border border-pink-600/20"
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="24" 
                          height="24" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          className="w-4 h-4"
                        >
                          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                        </svg>
                        <span className="text-sm font-medium">TikTok</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
