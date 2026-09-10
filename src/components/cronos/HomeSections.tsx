import { motion } from "framer-motion";
import { Check, Zap, Clock, TrendingDown, ShieldCheck, Unlock, HeartHandshake, ArrowRight } from "lucide-react";
import { Footer } from "./Footer";
import { Section, SectionHeader, fadeUp } from "./shared";

const painPoints = [
  { icon: TrendingDown, title: "Site que não converte", desc: "Tráfego entrando, mas vendas paradas. Design genérico, copy fraca, performance ruim." },
  { icon: Clock, title: "Operação travada na sua mão", desc: "Você é o gargalo. Tudo depende de você responder, aprovar, executar — não dá pra escalar." },
  { icon: Zap, title: "Tecnologia atrasada no mercado", desc: "Concorrente já tem IA, automação e SaaS próprio. Você ainda manda planilha por WhatsApp." },
];

function PainPoints() {
  return (
    <Section id="como-funciona">
      <SectionHeader
        eyebrow="Por que marcas travam"
        title="Você reconhece algum desses cenários?"
        description="A maioria das marcas trava no mesmo ponto. A boa notícia: tudo isso tem solução — e ela não é caótica."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {painPoints.map((p, i) => (
          <motion.div
            key={p.title}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ delay: i * 0.08 }}
            className="flex gap-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6"
          >
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/30">
              <p.icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-display text-lg font-bold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-white/65">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <a href="#planos" className="group inline-flex items-center gap-2 text-sm font-semibold text-primary">
          A Cronos resolve tudo isso
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </Section>
  );
}

const testimonials = [
  { quote: "A Cronos virou minha área de tecnologia. Saí do operacional e voltei a pensar no negócio.", name: "Lucas M.", role: "Fundador, marca de moda" },
  { quote: "O time entrega rápido e com nível de design absurdo. É outro patamar.", name: "Renata C.", role: "CEO, SaaS de saúde" },
  { quote: "Automação salvou minha operação. Hoje rodo com metade da equipe.", name: "Diego R.", role: "Diretor, e-commerce" },
];

function Testimonials() {
  return (
    <Section>
      <SectionHeader eyebrow="Clientes" title="Quem confia na infraestrutura Cronos." />
      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ delay: i * 0.08 }}
            className="flex flex-col gap-3 rounded-xl glass-card p-5"
          >
            <p className="text-sm leading-relaxed text-white/85">"{t.quote}"</p>
            <div className="flex items-center gap-2 border-t border-white/5 pt-3 text-xs">
              <span className="font-semibold text-white">{t.name}</span>
              <span className="text-white/40">·</span>
              <span className="text-white/50">{t.role}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

const plans = [
  {
    name: "Essential",
    price: "R$ 499",
    tagline: "Sua marca, finalmente do jeito certo.",
    featured: false,
    features: [
      "2 posts por semana no feed com design premium",
      "Legenda estratégica (copywriting)",
      "Rebranding visual do perfil",
      "Adaptação da logo para redes sociais",
      "Bio otimizada + Destaques personalizados",
      "Relatório mensal de desempenho",
    ],
    cta: "Começar com Essential",
    href: "#",
    note: null as string | null,
  },
  {
    name: "Presence",
    price: "R$ 997",
    tagline: "Apareça no Google. Converta no site. Cresça no Instagram.",
    featured: true,
    features: [
      "Tudo do plano Essential",
      "Landing Page de alta conversão (inclusa)",
      "Google Meu Negócio (criação + otimização)",
      "Link na Bio profissional (Linktree)",
      "SEO básico on-page",
      "3 posts por semana no feed com design premium",
      "Hospedagem da Landing Page inclusa",
    ],
    cta: "Escolher Presence",
    href: "#",
    note: null as string | null,
  },
  {
    name: "Scale",
    price: "R$ 1.997",
    tagline: "A máquina de vendas completa, ligada no automático.",
    featured: false,
    features: [
      "Tudo do plano Presence",
      "5 posts por semana no feed com design premium",
      "Roteiro de Stories diários",
      "Gestão de Tráfego Pago (Meta Ads / Google Ads)",
      "Landing Page de vendas dedicada ao tráfego",
      "Relatório semanal + reunião mensal de estratégia",
    ],
    cta: "Quero o Scale",
    href: "#",
    note: "* Verba de anúncios paga pelo cliente (mín. R$ 500/mês)",
  },
];

const WHATSAPP_NUMBER = "5521964639999";

function whatsappLink(plan: { name: string; price: string }) {
  const text = `Olá! Vim pelo site da Cronos e quero contratar o plano ${plan.name} (${plan.price}/mês). Pode me passar os próximos passos?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

const inlineGuarantees = [
  { icon: ShieldCheck, text: "Entrega garantida no prazo" },
  { icon: Unlock, text: "Sem fidelidade (Cancele quando quiser)" },
  { icon: HeartHandshake, text: "Time dedicado, não terceirizado" },
];

function Pricing() {
  return (
    <Section id="planos">
      <SectionHeader
        eyebrow="Investimento"
        title="Escolha o plano que vai transformar sua marca."
        description="Transparência total. Sem surpresas e sem fidelidade. Cancele quando quiser."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((p, i) => (
          <motion.div
            key={p.name}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ delay: i * 0.1 }}
            className={
              p.featured
                ? "relative flex flex-col rounded-2xl border border-primary bg-gradient-to-b from-primary/10 to-transparent p-8 shadow-[0_0_60px_-15px_hsl(var(--primary)/0.5)] md:-translate-y-2"
                : "relative flex flex-col rounded-2xl border border-white/[0.06] glass-card p-8"
            }
          >
            {p.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white shadow-lg">
                ⭐ Mais Vendido
              </div>
            )}
            <h3 className="text-display text-2xl font-bold text-white">{p.name}</h3>
            <p className="mt-2 text-sm text-white/60">{p.tagline}</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-display text-4xl font-extrabold text-white">{p.price}</span>
              <span className="text-sm text-white/50">/mês</span>
            </div>
            {p.note && <p className="mt-2 text-xs text-white/50">{p.note}</p>}
            <ul className="mt-6 space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-white/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={whatsappLink(p)}
              target="_blank"
              rel="noopener noreferrer"
              className={
                p.featured
                  ? "group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:red-glow hover:scale-[1.03]"
                  : "mt-8 inline-flex items-center justify-center gap-2 rounded-full glass-card px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/5"
              }
            >
              {p.cta}
            </a>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-8">
        {inlineGuarantees.map((g) => (
          <div key={g.text} className="flex items-center gap-2 text-sm text-white/75">
            <g.icon className="h-4 w-4 text-primary" />
            {g.text}
          </div>
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-white/50">
        Contrato mensal flexível · Sem multas ou taxas ocultas · Resposta em até 24h
      </p>
    </Section>
  );
}

const faqs = [
  { q: "Em quanto tempo vejo os primeiros resultados?", a: "Nos primeiros 30 dias você já recebe toda a fundação (rebrand, landing page ou setup completo, dependendo do plano). Resultados de tráfego e vendas começam a aparecer entre 60 e 90 dias." },
  { q: "Os planos possuem algum tipo de fidelidade?", a: "Não! O nosso maior diferencial é o contrato sem fidelidade. Confiamos tanto na nossa entrega que você fica livre para cancelar a assinatura a qualquer momento, sem taxas ocultas ou multas rescisórias. Você fica com a gente pelo resultado, não por obrigação jurídica." },
  { q: "A verba de anúncios está inclusa no plano Scale?", a: "Não. O valor do plano cobre a gestão estratégica e criativa das campanhas. A verba de anúncios é paga diretamente ao Meta/Google pelo cliente. Recomendamos um mínimo de R$ 500/mês." },
  { q: "Vocês atendem fora de Teresópolis / RJ?", a: "Sim. Atendemos 100% remoto, em todo o Brasil. Toda a comunicação é por WhatsApp, Google Meet e ferramentas de gestão." },
  { q: "Posso trocar de plano depois?", a: "Pode. Upgrade ou downgrade a qualquer momento, com ajuste no próximo ciclo de cobrança." },
];

function FAQ() {
  return (
    <Section>
      <SectionHeader eyebrow="Dúvidas" title="Perguntas frequentes." />
      <div className="mx-auto max-w-3xl divide-y divide-white/5 rounded-2xl border border-white/5 bg-white/[0.02]">
        {faqs.map((f) => (
          <details key={f.q} className="group p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-white">
              {f.q}
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/10 text-primary transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm text-white/65">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

export default function HomeSections() {
  return (
    <>
      <PainPoints />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}
