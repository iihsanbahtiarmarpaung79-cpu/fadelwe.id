import { motion, AnimatePresence } from "motion/react";
import { Building2, ShoppingCart, Rocket, Code, Server, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const services = [
  {
    title: "Website Company Profile",
    category: "Company Profile",
    description: "Cocok untuk UMKM, jasa profesional, kontraktor, klinik, dll.",
    icon: <Building2 className="w-10 h-10 text-blue-400" />,
    features: [
      "Halaman Beranda, Tentang Kami, Layanan, Kontak",
      "Formulir kontak langsung ke WhatsApp",
      "Integrasi Google Maps",
      "Desain responsif (mobile-friendly)",
      "Optimasi dasar SEO",
      "Dashboard untuk edit konten sendiri"
    ]
  },
  {
    title: "Website Toko Online",
    category: "E-Commerce",
    description: "Untuk jual produk fisik maupun digital.",
    icon: <ShoppingCart className="w-10 h-10 text-green-400" />,
    features: [
      "Keranjang belanja & checkout",
      "Pembayaran otomatis (transfer bank / payment gateway)",
      "Ongkir otomatis",
      "Manajemen stok",
      "Notifikasi pesanan via email/WhatsApp",
      "Laporan penjualan"
    ]
  },
  {
    title: "Landing Page Promosi",
    category: "Landing Page",
    description: "Untuk iklan Facebook/Instagram/Google Ads.",
    icon: <Rocket className="w-10 h-10 text-purple-400" />,
    features: [
      "Desain fokus konversi",
      "Tombol WhatsApp cepat",
      "Form lead capture",
      "Integrasi pixel iklan",
      "Loading cepat"
    ]
  },
  {
    title: "Website Custom",
    category: "Custom",
    description: "Untuk kebutuhan khusus seperti sistem booking, portal berita, dll.",
    icon: <Code className="w-10 h-10 text-orange-400" />,
    features: [
      "Sistem booking",
      "Website sekolah",
      "Portal berita",
      "Sistem membership",
      "Aplikasi berbasis web"
    ]
  },
  {
    title: "Fitur Teknis Tambahan",
    category: "Custom",
    description: "Fasilitas teknis yang menjamin performa website.",
    icon: <Server className="w-10 h-10 text-red-400" />,
    features: [
      "Domain & hosting",
      "SSL (https)",
      "Email bisnis (nama@perusahaan.com)",
      "Backup berkala",
      "Maintenance",
      "Training penggunaan"
    ]
  }
];

const categories = ["All", "Company Profile", "E-Commerce", "Landing Page", "Custom"];

export function Services() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredServices = activeFilter === "All" 
    ? services 
    : services.filter(service => service.category === activeFilter);

  return (
    <section id="services" className="py-24 bg-black relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Layanan & Fitur <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Unggulan</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg mb-12"
          >
            Solusi lengkap untuk kebutuhan digital Anda, mulai dari company profile hingga sistem web yang kompleks.
          </motion.p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeFilter === category
                    ? "bg-blue-600 text-white border-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.5)]"
                    : "bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                layout
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-all group"
              >
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="mb-6 p-4 bg-black/50 rounded-xl w-fit border border-white/5"
                >
                  {service.icon}
                </motion.div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{service.title}</h3>
                <p className="text-gray-400 mb-6 text-sm h-10">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      initial={{ opacity: 0.8, x: 0 }}
                      whileHover={{ opacity: 1, x: 5 }}
                      className="flex items-start gap-3 text-gray-300 text-sm"
                    >
                      <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
