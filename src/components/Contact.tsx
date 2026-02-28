import { CreditCard, MessageCircle, Phone } from "lucide-react";
import { TiltCard } from "./TiltCard";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-black/50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black -z-10" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            Hubungi Kami & Pembayaran
          </h2>
          <p className="text-lg text-gray-400">
            Siap mewujudkan website impian Anda? Kontak kami sekarang!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <TiltCard className="h-full">
            <div className="h-full bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-white/10 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-green-500/20 rounded-lg">
                  <MessageCircle className="w-8 h-8 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">WhatsApp</h3>
                  <p className="text-gray-400 text-sm">Respon Cepat 24/7</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-300">
                  Silakan hubungi kami untuk konsultasi gratis atau pemesanan paket website.
                </p>
                <a 
                  href="https://wa.me/6282277930100" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-green-600 hover:bg-green-500 text-white rounded-lg font-medium transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Chat 0822-7793-0100
                </a>
              </div>
            </div>
          </TiltCard>

          {/* Payment Info */}
          <TiltCard className="h-full">
            <div className="h-full bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-white/10 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <CreditCard className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Pembayaran</h3>
                  <p className="text-gray-400 text-sm">Metode Transfer</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                  <p className="text-sm text-gray-400 mb-1">Bank / E-Wallet</p>
                  <p className="text-2xl font-bold text-blue-400">DANA</p>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                  <p className="text-sm text-gray-400 mb-1">Nomor Rekening</p>
                  <div className="flex items-center justify-between">
                    <p className="text-xl font-mono text-white tracking-wider">0822-7793-0100</p>
                    <button 
                      onClick={() => navigator.clipboard.writeText("082277930100")}
                      className="text-xs text-blue-400 hover:text-blue-300 underline cursor-pointer"
                    >
                      Salin
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">a.n. FadelWeb</p>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
