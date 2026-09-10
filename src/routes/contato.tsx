import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { Nav } from "../components/cronos/Nav";
import { Footer } from "../components/cronos/Footer";
import { Section, PageHero, fadeUp } from "../components/cronos/shared";
import { ContactForm } from "../components/cronos/ContactForm";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Cronos Marketing & Design" },
      { name: "description", content: "Vamos conversar sobre o seu projeto. Respondemos em até 24 horas." },
      { property: "og:title", content: "Contato — Cronos" },
      { property: "og:description", content: "Entre em contato com a Cronos Marketing & Design." },
    ],
  }),
  component: ContactPage,
});

const infos = [
  { icon: Mail, label: "E-mail", value: "contato@cronosmkt.com" },
  { icon: MessageCircle, label: "WhatsApp", value: "(21) 96463-9999" },
  { icon: MapPin, label: "Sede", value: "Teresópolis / RJ" },
  { icon: Clock, label: "Resposta", value: "Em até 24h úteis" },
];

function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Nav />
      <PageHero
        eyebrow="Contato"
        title={<>Pronto para <span className="bg-gradient-to-br from-white to-primary/80 bg-clip-text text-transparent">escalar</span>?</>}
        description="Conte-nos sobre o seu projeto. Respondemos em até 24 horas com uma proposta inicial."
      />

      <Section className="!pt-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="space-y-4"
          >
            {infos.map((i) => (
              <div key={i.label} className="flex items-center gap-4 rounded-2xl glass-card p-5">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/30">
                  <i.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-white/50">{i.label}</p>
                  <p className="truncate text-sm font-medium text-white">{i.value}</p>
                </div>
              </div>
            ))}

            <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/15 to-transparent p-6">
              <p className="text-display text-lg font-bold text-white">
                Quer um diagnóstico gratuito?
              </p>
              <p className="mt-2 text-sm text-white/70">
                Marcamos uma call de 30 minutos para entender seu cenário e indicar o melhor caminho — sem compromisso.
              </p>
            </div>
          </motion.div>

          <ContactForm />
        </div>
      </Section>

      <Footer />
    </main>
  );
}
