import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Search,
  CodeXml,
  ChartLine,
  Sparkles,
  Globe,
  Rocket,
} from "lucide-react";

import { Nav } from "../components/cronos/Nav";
import { Footer } from "../components/cronos/Footer";
import { Section, SectionHeader, PageHero, fadeUp } from "../components/cronos/shared";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Cronos Marketing & Design" },
      { name: "description", content: "As frentes que operam por trás dos planos Cronos: marca, presença digital e performance." },
      { property: "og:title", content: "Serviços — Cronos" },
      { property: "og:description", content: "A infraestrutura completa por trás do seu crescimento." },
    ],
  }),
  component: ServicesPage,
});

const pillars = [
  {
    icon: Sparkles,
    title: "Marca & Conteúdo",
    subtitle: "A cara da sua marca, feita para se destacar.",
    features: [
      "Design de posts premium para feed",
      "Legendas estratégicas com copywriting",
      "Rebranding visual completo do perfil",
      "Bio otimizada + Destaques personalizados",
      "Adaptação da logo para redes sociais",
    ],
    note: "Incluso nos planos Essential, Presence e Scale",
  },
  {
    icon: Globe,
    title: "Presença Digital",
    subtitle: "Apareça no Google. Converta no site.",
    features: [
      "Landing Page de alta conversão",
      "Google Meu Negócio (criação + otimização)",
      "Link na Bio profissional",
      "SEO básico on-page",
      "Hospedagem inclusa",
    ],
    note: "Incluso nos planos Presence e Scale",
  },
  {
    icon: Rocket,
    title: "Performance & Escala",
    subtitle: "Tráfego pago + conteúdo diário = máquina de vendas.",
    features: [
      "Gestão de Tráfego Pago (Meta Ads / Google Ads)",
      "6 posts por semana no feed",
      "Roteiro de Stories diários",
      "Landing Page dedicada ao tráfego",
      "Relatório semanal + reunião mensal",
    ],
    note: "Incluso no plano Scale",
  },
];

const processSteps = [
  { icon: Search, title: "Diagnóstico", desc: "Analisamos sua marca, concorrência e objetivos para montar o plano ideal." },
  { icon: CodeXml, title: "Execução", desc: "Começamos a entregar na primeira semana. Posts, landing page, setup — tudo no ritmo certo." },
  { icon: ChartLine, title: "Otimização", desc: "Relatórios, ajustes e estratégia contínua para escalar os resultados mês a mês." },
];

function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Nav />
      <PageHero
        eyebrow="Serviços"
        title={<>A infraestrutura completa <span className="bg-gradient-to-br from-white to-primary/80 bg-clip-text text-transparent">por trás do seu crescimento</span>.</>}
        description="Cada plano Cronos combina as disciplinas certas para o seu momento. Conheça as frentes que operam por trás dos bastidores."
      />

      <div className="relative mx-auto -mt-4 flex max-w-7xl justify-center px-6">
        <a
          href="/#planos"
          className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:red-glow hover:scale-[1.03]"
        >
          Ver Planos e Preços
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col rounded-2xl border border-white/[0.06] glass-card p-8"
            >
              <div className="mb-5 inline-grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/30">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="text-display text-2xl font-bold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-white/60">{p.subtitle}</p>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-white/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                    {f}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-white/5 pt-4 text-xs text-white/50">{p.note}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Como funciona"
          title="Um processo em 3 etapas. Do diagnóstico à escala."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {processSteps.map((s, i) => (
            <motion.div
              key={s.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ delay: i * 0.08 }}
              className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6"
            >
              <div className="text-display text-xs uppercase tracking-widest text-primary">Etapa 0{i + 1}</div>
              <div className="mt-4 inline-grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/30">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="text-display mt-4 text-lg font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-white/60">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/20 via-black to-black p-12 text-center sm:p-20"
        >
          <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
          <h2 className="text-display relative mx-auto max-w-3xl text-4xl font-extrabold text-white sm:text-5xl">
            Pronto para destravar o próximo nível da sua marca?
          </h2>
          <a
            href="/#planos"
            className="group relative mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:red-glow hover:scale-[1.03]"
          >
            Ver Planos e Preços
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <p className="relative mt-4 text-xs text-white/50">Sem fidelidade · Cancele quando quiser</p>
        </motion.div>
      </Section>

      <Footer />
    </main>
  );
}
