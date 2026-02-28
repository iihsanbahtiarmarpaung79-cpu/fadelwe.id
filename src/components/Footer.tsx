import { Github, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-white mb-2">FadelWeb.id</h3>
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} FadelWeb.id. All rights reserved.
          </p>
        </div>
        
        <div className="flex gap-6 items-center">
          <a 
            href="https://www.youtube.com/@fadelcliper" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-500 transition-colors flex items-center gap-2"
          >
            <Youtube className="w-6 h-6" />
            <span className="hidden md:inline text-sm font-medium">Fadel Cliper</span>
          </a>
          <a 
            href="https://www.tiktok.com/@fadelcliper" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 transition-colors flex items-center gap-2"
          >
            {/* Custom TikTok Icon since it might not be in all Lucide versions */}
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-6 h-6"
            >
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
            </svg>
            <span className="hidden md:inline text-sm font-medium">Fadel Cliper</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
