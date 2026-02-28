import { motion } from "motion/react";
import { ArrowRight, Code, Cpu, Globe } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]" />
      <div className="absolute right-0 bottom-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400 opacity-20 blur-[100px]" />

      <div className="container mx-auto px-4 z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-blue-400 mb-6 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Jasa Pembuatan Website Termurah
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            Bikin Web <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">
              Mulai 10 Ribu!
            </span>
          </h1>
          
          <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
            FadelWeb.id hadir untuk membantu Anda memiliki website impian dengan harga yang sangat terjangkau. Dari landing page sederhana hingga website bisnis profesional dengan animasi 3D.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#pricing"
              className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2 group"
            >
              Lihat Paket
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/6282277930100"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              Hubungi Kami
            </a>
          </div>
        </motion.div>

        <div className="relative hidden lg:block h-[500px]">
          {/* 3D Floating Elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-2xl z-10"
          >
            <Globe className="w-32 h-32 text-blue-400 opacity-80" />
          </motion.div>

          <motion.div
            animate={{
              y: [0, 30, 0],
              x: [0, -10, 0],
              rotate: [0, -10, 10, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-full border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-2xl z-20"
          >
            <Cpu className="w-24 h-24 text-pink-400 opacity-80" />
          </motion.div>

          <motion.div
            animate={{
              y: [0, -15, 0],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-xl border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-2xl z-30 rotate-12"
          >
            <Code className="w-20 h-20 text-emerald-400 opacity-80" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
