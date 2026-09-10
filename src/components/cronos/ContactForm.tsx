import { motion } from "framer-motion";
import { Send, ChevronDown } from "lucide-react";
import { useState, type FormEvent } from "react";
import { fadeUp } from "./shared";
import { services, extraServices } from "./data";

const serviceOptions = [...services, ...extraServices].map((s) => s.title);


export function ContactForm() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <motion.form
      onSubmit={onSubmit}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className="space-y-4 rounded-2xl glass-card p-6 sm:p-8"
    >
      <div>
        <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/60">Nome</label>
        <input
          required
          type="text"
          className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
          placeholder="Seu nome completo"
        />
      </div>
      <div>
        <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/60">WhatsApp</label>
        <input
          required
          type="tel"
          className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
          placeholder="(21) 96463-9999"
        />
      </div>
      <div>
        <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/60">Serviço de interesse</label>
        <div className="relative">
          <select
            required
            defaultValue=""
            className="w-full appearance-none rounded-lg border border-white/10 bg-black/40 px-4 py-3 pr-10 text-sm text-white outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
          >
            <option value="" disabled className="bg-black">Selecione um serviço</option>
            {serviceOptions.map((s) => (
              <option key={s} value={s} className="bg-black">{s}</option>
            ))}
            <option value="outro" className="bg-black">Outro / não sei ainda</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
        </div>
      </div>
      <div>
        <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/60">Mensagem</label>
        <textarea
          required
          rows={4}
          className="w-full resize-none rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
          placeholder="Conte sobre o seu projeto..."
        />
      </div>
      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:red-glow hover:scale-[1.01] active:scale-[0.98]"
      >
        {sent ? "Mensagem enviada ✓" : (
          <>
            Enviar Mensagem
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>
    </motion.form>
  );
}
