import { Check, Zap } from "lucide-react";
import { TiltCard } from "./TiltCard";

const tiers = [
  {
    name: "Pelajar",
    price: "Rp 10.000",
    description: "Cocok untuk tugas sekolah atau landing page sederhana.",
    features: ["1 Halaman Statis", "Template Dasar", "Revisi 1x", "Pengerjaan Cepat"],
    color: "from-blue-400 to-cyan-300",
  },
  {
    name: "UMKM",
    price: "Rp 300.000",
    description: "Solusi tepat untuk bisnis kecil yang ingin online.",
    features: ["Hingga 3 Halaman", "Desain Responsif", "SEO Dasar", "Revisi 3x", "Integrasi WhatsApp"],
    color: "from-purple-400 to-pink-300",
  },
  {
    name: "Bisnis",
    price: "Rp 500.000",
    description: "Website profesional untuk meningkatkan kredibilitas.",
    features: ["Hingga 5 Halaman", "Desain Custom", "SEO Lanjutan", "Form Kontak", "Hosting Gratis 1 Bulan"],
    color: "from-orange-400 to-red-300",
  },
  {
    name: "Sultan 3D",
    price: "Rp 1.000.000",
    description: "Website dengan animasi 3D interaktif yang memukau.",
    features: ["Animasi 3D Custom", "Desain Eksklusif", "Fitur Lengkap", "Prioritas Support", "Domain .com Gratis"],
    color: "from-emerald-400 to-green-300",
    popular: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
            Pilih Paket Website Anda
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Harga mulai dari 10rb perak! Kualitas terjamin dengan sentuhan animasi modern.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tiers.map((tier) => (
            <div key={tier.name} className="relative group perspective-1000">
              <TiltCard className="h-full">
                <div className={`h-full relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden group-hover:border-white/20 transition-colors`}>
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tier.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {tier.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                      POPULAR
                    </div>
                  )}

                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold text-white mb-2">{tier.name}</h3>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${tier.color}`}>
                        {tier.price}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-6 h-10">{tier.description}</p>

                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-gray-300">
                          <Check className={`w-4 h-4 mt-0.5 text-${tier.color.split('-')[1]}-400 shrink-0`} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={`https://wa.me/6282277930100?text=Halo%20FadelWeb,%20saya%20tertarik%20dengan%20paket%20${tier.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full block text-center py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 active:scale-95 bg-gradient-to-r ${tier.color} text-black shadow-lg shadow-${tier.color.split('-')[1]}-500/20`}
                    >
                      Pesan Sekarang
                    </a>
                  </div>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
