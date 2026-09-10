import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Nav } from "../components/cronos/Nav";
import { Footer } from "../components/cronos/Footer";
import { Section, PageHero, fadeUp } from "../components/cronos/shared";
import { projects } from "../components/cronos/data";

export const Route = createFileRoute("/ecossistema")({
  head: () => ({
    meta: [
      { title: "Ecossistema — Cronos Marketing & Design" },
      { name: "description", content: "Conheça as marcas e produtos digitais construídos sob a infraestrutura Cronos." },
      { property: "og:title", content: "Ecossistema — Cronos" },
      { property: "og:description", content: "Marcas, e-commerces e SaaS construídos pela Cronos." },
    ],
  }),
  component: EcosystemPage,
});

function EcosystemPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Nav />
      <PageHero
        eyebrow="Portfólio"
        title={<>Nosso <span className="bg-gradient-to-br from-white to-primary/80 bg-clip-text text-transparent">Ecossistema</span>.</>}
        description="Marcas e produtos digitais construídos sob a infraestrutura Cronos — de e-commerces automatizados a plataformas SaaS proprietárias."
      />

      <Section>
        <div className="space-y-24">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="group relative overflow-hidden rounded-3xl border border-white/[0.06]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <div className="absolute inset-0 grayscale transition-all duration-700 group-hover:grayscale-0">
                    <div className="h-full w-full" style={{ background: p.gradient }} />
                    <div className="absolute inset-0 grid-pattern opacity-30" />
                    <div className="absolute inset-0 grid place-items-center">
                      <p.icon className="h-32 w-32 text-white/90 transition-transform duration-700 group-hover:scale-110" strokeWidth={1} />
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-0 ring-primary/0 transition-all duration-500 group-hover:ring-1 group-hover:ring-primary/60" />
              </div>

              <div>
                <div className="inline-flex rounded-full glass-card px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white/80">
                  {p.tag}
                </div>
                <h2 className="text-display mt-5 text-4xl font-bold text-white sm:text-5xl">{p.name}</h2>
                <p className="mt-4 text-base text-white/70">{p.desc}</p>
                <p className="mt-3 text-base text-white/60">{p.long}</p>
                <Link
                  to="/contato"
                  className="group mt-8 inline-flex items-center gap-2 rounded-full glass-card px-5 py-3 text-xs font-semibold text-white transition hover:border-primary/60"
                >
                  Quero algo assim
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
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
          <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
          <h2 className="text-display relative mx-auto max-w-3xl text-4xl font-extrabold text-white sm:text-5xl">
            A próxima marca do ecossistema pode ser a sua.
          </h2>
          <Link
            to="/contato"
            className="group relative mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:red-glow hover:scale-[1.03]"
          >
            Construir com a Cronos
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </Section>

      <Footer />
    </main>
  );
}
