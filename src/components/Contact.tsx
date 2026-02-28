import { motion } from "motion/react";
import { CreditCard, Mail, MapPin, MessageCircle, Phone, Send, Copy, Check } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleCopy = () => {
    navigator.clipboard.writeText("082277930100");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo FadelWeb, saya ${formState.name} (${formState.email}).%0A%0A${formState.message}`;
    window.open(`https://wa.me/6282277930100?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Mari Mulai <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Proyek Impian Anda
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              Punya ide brilian? Diskusikan dengan kami. Kami siap membantu mewujudkan website profesional untuk bisnis Anda.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5 group">
                <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                  <MessageCircle className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">WhatsApp</h3>
                  <p className="text-gray-400 mb-2">Chat langsung untuk respon cepat</p>
                  <a href="https://wa.me/6282277930100" className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2">
                    0822-7793-0100 <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Email</h3>
                  <p className="text-gray-400 mb-2">Kirim detail project Anda</p>
                  <a href="mailto:fadelweb.id@gmail.com" className="text-purple-400 hover:text-purple-300 font-medium flex items-center gap-2">
                    fadelweb.id@gmail.com <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="p-4 rounded-2xl bg-green-500/10 border border-green-500/20 group-hover:bg-green-500/20 transition-colors">
                  <CreditCard className="w-6 h-6 text-green-400" />
                </div>
                <div className="w-full max-w-xs">
                  <h3 className="text-white font-semibold text-lg mb-1">Pembayaran</h3>
                  <p className="text-gray-400 mb-3">Transfer Bank / E-Wallet</p>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center justify-between group/card hover:border-green-500/30 transition-colors">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">DANA</p>
                      <p className="text-white font-mono text-lg tracking-wide">0822-7793-0100</p>
                    </div>
                    <button 
                      onClick={handleCopy}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors relative"
                    >
                      {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5 text-gray-400 group-hover/card:text-white" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Kirim Pesan</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">Nama Lengkap</label>
                <input 
                  type="text" 
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-gray-600"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-gray-600"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Pesan / Detail Project</label>
                <textarea 
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-gray-600 resize-none"
                  placeholder="Ceritakan tentang project website yang Anda inginkan..."
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold py-4 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25"
              >
                <Send className="w-5 h-5" />
                Kirim ke WhatsApp
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}
