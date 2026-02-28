import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Code, Cpu, Globe, Layers, Zap, Box } from "lucide-react";

const features = [
  {
    icon: <Box className="w-8 h-8 text-blue-400" />,
    title: "3D Objects",
    description: "Objek 3D interaktif yang dapat diputar dan dimanipulasi.",
  },
  {
    icon: <Layers className="w-8 h-8 text-purple-400" />,
    title: "Parallax Effects",
    description: "Efek kedalaman yang memukau saat pengguna menggulir halaman.",
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    title: "High Performance",
    description: "Animasi mulus 60fps yang dioptimalkan untuk semua perangkat.",
  },
];

export function Showcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section className="py-24 relative overflow-hidden bg-black">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Next-Level <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">3D Experience</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Kami menghadirkan pengalaman web yang imersif dengan teknologi 3D terkini.
              Bukan sekadar website biasa, tapi sebuah karya seni digital.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center" ref={containerRef}>
          {/* 3D Cube Scene */}
          <div className="h-[400px] flex items-center justify-center [perspective:1000px]">
            <motion.div
              style={{ rotateY: rotate, rotateX: rotate }}
              className="relative w-48 h-48 [transform-style:preserve-3d]"
            >
              {/* Front */}
              <div className="absolute inset-0 bg-blue-500/20 border border-blue-400/50 backdrop-blur-md flex items-center justify-center [transform:translateZ(6rem)]">
                <Code className="w-16 h-16 text-blue-400" />
              </div>
              {/* Back */}
              <div className="absolute inset-0 bg-purple-500/20 border border-purple-400/50 backdrop-blur-md flex items-center justify-center [transform:rotateY(180deg)_translateZ(6rem)]">
                <Cpu className="w-16 h-16 text-purple-400" />
              </div>
              {/* Right */}
              <div className="absolute inset-0 bg-green-500/20 border border-green-400/50 backdrop-blur-md flex items-center justify-center [transform:rotateY(90deg)_translateZ(6rem)]">
                <Globe className="w-16 h-16 text-green-400" />
              </div>
              {/* Left */}
              <div className="absolute inset-0 bg-red-500/20 border border-red-400/50 backdrop-blur-md flex items-center justify-center [transform:rotateY(-90deg)_translateZ(6rem)]">
                <Zap className="w-16 h-16 text-red-400" />
              </div>
              {/* Top */}
              <div className="absolute inset-0 bg-yellow-500/20 border border-yellow-400/50 backdrop-blur-md flex items-center justify-center [transform:rotateX(90deg)_translateZ(6rem)]">
                <Box className="w-16 h-16 text-yellow-400" />
              </div>
              {/* Bottom */}
              <div className="absolute inset-0 bg-cyan-500/20 border border-cyan-400/50 backdrop-blur-md flex items-center justify-center [transform:rotateX(-90deg)_translateZ(6rem)]">
                <Layers className="w-16 h-16 text-cyan-400" />
              </div>
            </motion.div>
          </div>

          {/* Features List */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <div className="shrink-0 p-3 rounded-xl bg-black/50 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
