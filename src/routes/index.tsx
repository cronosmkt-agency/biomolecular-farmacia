import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Sparkles, ShieldCheck, HeartHandshake, CheckCircle2, Clock, MapPin,
  Phone, MessageCircle, ChevronDown, Star, ArrowRight, Menu, X, Send,
  FileText, Truck, Award, Check, Leaf, FlaskConical, Stethoscope
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: ClientLandingPage,
});

export default function ClientLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  // Form State
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Fórmulas Médicas & Alopatia");
  const [deliveryType, setDeliveryType] = useState("Entrega Delivery em Teresópolis");
  const [neighborhood, setNeighborhood] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [notes, setNotes] = useState("");

  const phone = "5521999458177";
  const phoneDisplay = "(21) 99945-8177";
  const phoneLandline = "(21) 2742-9145";
  const address = "Av. José Joaquim de Araújo Regadas, 143 - Várzea, Teresópolis - RJ, 25953-040";
  const hours = "Segunda a Sexta: 08:30 às 18:30 | Sábados: 08:30 às 13:00";

  const defaultWhatsAppLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Olá! Acessei o site da BioMolecular Farmácia de Manipulação e gostaria de solicitar um orçamento para minha receita."
  )}`;

  const receitaWhatsAppLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Olá! Gostaria de enviar a foto da minha receita médica para orçamento e prazo de entrega na BioMolecular."
  )}`;

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      `*Solicitação de Orçamento — BioMolecular Farmácia de Manipulação*`,
      ``,
      `*Cliente:* ${name.trim()}`,
      `*Categoria da Fórmula:* ${category}`,
      `*Forma de Recebimento:* ${deliveryType}`,
      neighborhood.trim() ? `*Bairro / Endereço:* ${neighborhood.trim()}` : null,
      doctorName.trim() ? `*Médico Prescritor:* ${doctorName.trim()}` : null,
      notes.trim() ? `*Observações:* ${notes.trim()}` : null,
      ``,
      `_Enviei pelo site oficial da BioMolecular (Várzea, Teresópolis)_`
    ].filter(Boolean).join("\n");

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const specialties = [
    {
      title: "Fórmulas Médicas & Alopatia",
      desc: "Manipulação de cápsulas, sachês efervescentes, soluções orais e sublinguais dosadas no miligrama prescrito pelo seu médico, cardiologista ou clínico.",
      tag: "Prescrição Médica",
      badge: "Dosagem Exata"
    },
    {
      title: "Dermatologia & Dermocosméticos de Alta Performance",
      desc: "Séruns anti-idade com ácido hialurônico de múltiplos pesos, vitamina C pura estabilizada, despigmentantes, clareadores e filtros solares hipoalergênicos.",
      tag: "Skincare Avançado",
      badge: "Toque Seco & Puro"
    },
    {
      title: "Nutrologia & Suplementação Esportiva",
      desc: "Creatina micronizada pura, pool de aminoácidos essenciais, compostos antioxidantes, termogênicos controlados e fórmulas para modulação metabólica.",
      tag: "Performance & Saúde",
      badge: "Zero Aditivos"
    },
    {
      title: "Fitoterapia & Modulação do Estresse",
      desc: "Extratos botânicos padronizados para controle de ansiedade, suporte à qualidade do sono, melatonina e fitoterápicos para imunidade e vitalidade.",
      tag: "Saúde Integrativa",
      badge: "100% Botânico"
    },
    {
      title: "Manipulação Veterinária Palatável (Pet)",
      desc: "Biscoitos medicamentosos nos sabores carne e frango, pastas orais e xaropes flavorizados que facilitam a dosagem para cães e gatos sem sofrimento.",
      tag: "Linha Pet",
      badge: "Fácil de Administrar"
    },
    {
      title: "Saúde Digestiva & Longevidade Celular",
      desc: "Enzimas digestivas, probióticos liofilizados sob medida, coenzima Q10 de alta absorção e compostos para saúde mitocondrial e longevidade sustentável.",
      tag: "Longevidade",
      badge: "Alta Absorção"
    }
  ];

  const testimonials = [
    {
      name: "Celso Oliveira Aires Sequeira",
      role: "Local Guide · 13 avaliações · 12 fotos",
      text: "Sempre foi ótima mas não acho que mereçam nota 5.... E sim nota 10.",
      ownerReply: "Olá Celso! Muito obrigado pelo seu feedback. Aqui na BioMolecular trabalhamos diariamente para que nossos processos entreguem sempre a máxima qualidade e pontualidade!"
    },
    {
      name: "Eliane Medeiros",
      role: "Cliente Frequente · 2 avaliações",
      text: "Todas às vezes que preciso, sou muito bem atendida, tanto na loja física, como pelo WhatsApp. Rapidez no atendimento e na entrega. Todos atenciosos e prestativos. Obrigada!",
      ownerReply: "Olá Eliane! Muito obrigado pelo seu carinho e confiança em nossa equipe ao longo de todos esses anos."
    },
    {
      name: "Destaque dos Clientes",
      role: "Consenso das 139 Avaliações no Google",
      text: "Ótimo atendimento, bons preços e medicamentos seguros. Produtos sempre entregues corretamente com bom resultado no tratamento! Presteza, prazos cumpridos e qualidade na matéria-prima.",
      ownerReply: null
    }
  ];

  const faqItems = [
    {
      q: "Como faço para enviar minha receita médica pelo WhatsApp?",
      a: "Basta tirar uma foto nítida da sua prescrição pelo celular e enviar para o nosso WhatsApp oficial (21) 99945-8177. Nossos farmacêuticos conferem a fórmula, calculam o valor e retornam com as opções de pagamento e prazo de entrega em poucos minutos."
    },
    {
      q: "A BioMolecular aceita receitas digitais com QR Code e assinatura digital?",
      a: "Sim! Aceitamos receitas médicas digitais emitidas pelas principais plataformas de telemedicina e consultórios do Brasil (Memed, Conselho Federal de Medicina, prescrições em PDF com QR Code ou token de validação)."
    },
    {
      q: "Quanto tempo demora para a fórmula manipulada ficar pronta?",
      a: "A maioria das formulações fica pronta em 24 a 48 horas úteis, dependendo da complexidade do medicamento e dos testes laboratoriais. Caso precise de urgência médica, informe nossa equipe no WhatsApp para priorização."
    },
    {
      q: "Como funciona a entrega delivery em Teresópolis?",
      a: "Possuímos serviço de entrega expressa em domicílio em todos os bairros de Teresópolis (Várzea, Alto, Agriões, Barra, Comary, São Pedro, Albuquerque, etc.). Você também pode optar por retirar rapidamente no balcão da nossa loja no Parque Regadas."
    },
    {
      q: "Qual é a garantia de qualidade das matérias-primas utilizadas?",
      a: "Possuímos mais de 35 anos de atuação contínua com controle de qualidade rigoroso. Todos os insumos farmacêuticos vêm acompanhados de Laudo de Análise do fabricante e passam por conferência física, química e de pesagem analítica por nossos farmacêuticos responsáveis."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8faf9] text-[#0f231c] selection:bg-emerald-800/20 selection:text-emerald-950 pb-20 md:pb-0">
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="border-b border-emerald-900/10 bg-emerald-950 px-4 py-2 text-center text-xs font-semibold text-emerald-200">
        <span className="inline-flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5 text-amber-400" />
          <span>Tradição Magistral: Há mais de 35 anos cuidando da sua saúde em Teresópolis</span>
          <span className="hidden sm:inline">· Parque Regadas, 143</span>
        </span>
      </div>

      {/* 2. NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-emerald-900/10 bg-white/95 backdrop-blur-md shadow-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          <a href="#" className="flex items-center gap-3 min-w-0">
            <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-900 border border-emerald-700/50 text-amber-400 font-extrabold text-base sm:text-xl shadow-md shadow-emerald-950/20">
              BM
            </div>
            <div className="min-w-0">
              <span className="block text-base font-bold tracking-tight text-emerald-950 sm:text-2xl truncate">
                BioMolecular
              </span>
              <span className="block text-[10px] sm:text-xs font-semibold tracking-wider text-emerald-700 uppercase truncate">
                Farmácia de Manipulação · Desde 1989
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-7 md:flex">
            <a href="#como-funciona" className="text-sm font-medium text-slate-700 transition hover:text-emerald-800">
              Como Enviar Receita
            </a>
            <a href="#especialidades" className="text-sm font-medium text-slate-700 transition hover:text-emerald-800">
              Especialidades
            </a>
            <a href="#qualidade" className="text-sm font-medium text-slate-700 transition hover:text-emerald-800">
              Rigor Farmacêutico
            </a>
            <a href="#sobre" className="text-sm font-medium text-slate-700 transition hover:text-emerald-800">
              Nossa História
            </a>
            <a href="#avaliacoes" className="text-sm font-medium text-slate-700 transition hover:text-emerald-800">
              Avaliações 4.9
            </a>
            <a href="#faq" className="text-sm font-medium text-slate-700 transition hover:text-emerald-800">
              Dúvidas
            </a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#orcamento"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-800 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-900/20 transition-all hover:bg-emerald-700 active:scale-95"
            >
              <Send className="h-4 w-4 text-amber-300" />
              Orçar Receita no WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-900/15 text-emerald-950 active:bg-emerald-50 md:hidden"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="border-b border-emerald-900/10 bg-white px-4 py-4 sm:px-6 sm:py-5 md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-2">
              <a
                href="#como-funciona"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-800 active:bg-emerald-50"
              >
                <FileText className="h-4 w-4 text-emerald-700" />
                Como Enviar Receita em 3 Passos
              </a>
              <a
                href="#especialidades"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-800 active:bg-emerald-50"
              >
                <FlaskConical className="h-4 w-4 text-emerald-700" />
                Especialidades Magistrais
              </a>
              <a
                href="#qualidade"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-800 active:bg-emerald-50"
              >
                <ShieldCheck className="h-4 w-4 text-emerald-700" />
                Controle de Qualidade & Pureza
              </a>
              <a
                href="#sobre"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-800 active:bg-emerald-50"
              >
                <MapPin className="h-4 w-4 text-emerald-700" />
                A Loja no Parque Regadas
              </a>
              <a
                href="#avaliacoes"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-800 active:bg-emerald-50"
              >
                <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                Avaliações Google Maps (4.9 Estrelas)
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-800 active:bg-emerald-50"
              >
                <Clock className="h-4 w-4 text-emerald-700" />
                Perguntas Frequentes
              </a>

              <div className="pt-2 border-t border-slate-100">
                <a
                  href={receitaWhatsAppLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-800 py-3 text-sm font-bold text-white shadow-md active:scale-98"
                >
                  <MessageCircle className="h-4 w-4 text-amber-300" />
                  Enviar Receita pelo WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION */}
      <section className="relative overflow-hidden py-10 sm:py-16 md:py-24 bg-gradient-to-b from-[#eef7f3]/70 via-[#f8faf9] to-[#f8faf9]">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Text Left */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-800/20 bg-emerald-900/10 px-3.5 py-1 text-[11px] sm:text-xs font-bold text-emerald-900">
                <span className="flex h-2 w-2 rounded-full bg-emerald-600 animate-pulse"></span>
                <span>Farmácia Magistral de Referência em Teresópolis</span>
              </div>

              <h1 className="mt-4 sm:mt-6 text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-emerald-950 leading-[1.2]">
                A sua receita médica manipulada com{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-emerald-700 to-amber-600">
                  máxima pureza, precisão e mais de 35 anos de tradição.
                </span>
              </h1>

              <p className="mt-4 sm:mt-6 text-sm sm:text-lg leading-relaxed text-slate-700 sm:text-xl">
                Cuidamos do seu tratamento com rigor de laboratório, matéria-prima certificada e atendimento acolhedor no Parque Regadas. Envie uma foto da prescrição e receba seu orçamento ágil com entrega em domicílio.
              </p>

              {/* CTAs */}
              <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#orcamento"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-emerald-800 to-emerald-700 px-6 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-white shadow-xl shadow-emerald-950/20 transition-all hover:bg-emerald-900 active:scale-95"
                >
                  <Send className="h-5 w-5 text-amber-300 shrink-0" />
                  <span>Enviar Foto da Receita no WhatsApp</span>
                </a>
                <a
                  href="#especialidades"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border border-emerald-900/15 bg-white px-6 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-emerald-900 shadow-xs transition-all hover:bg-emerald-50 active:scale-98"
                >
                  <span>Ver Especialidades</span>
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </a>
              </div>

              {/* Social Proof Pill */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center gap-3 border-t border-emerald-900/10 pt-5">
                <div className="flex gap-1 text-amber-500 shrink-0">
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-amber-400 text-amber-400" />
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-amber-400 text-amber-400" />
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-amber-400 text-amber-400" />
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-amber-400 text-amber-400" />
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-emerald-950">
                    ⭐ 4,9 Estrelas no Google Maps (139 avaliações de médicos e clientes)
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-600">
                    Confiança transmitida de geração em geração na Região Serrana
                  </p>
                </div>
              </div>
            </div>

            {/* Reassurance Card Right */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl sm:rounded-3xl border border-emerald-900/15 bg-white p-5 sm:p-8 shadow-xl shadow-emerald-950/5 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-emerald-900/10 pb-4 sm:pb-5">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-emerald-900 text-amber-400 font-extrabold text-sm sm:text-base">
                      BM
                    </div>
                    <div>
                      <span className="block text-sm sm:text-base font-bold text-emerald-950">
                        BioMolecular Farmácia
                      </span>
                      <span className="block text-[11px] sm:text-xs text-slate-500">
                        Parque Regadas, 143 · Várzea
                      </span>
                    </div>
                  </div>
                  <span className="inline-block rounded-full bg-amber-100 border border-amber-300 px-2.5 py-1 text-[10px] sm:text-xs font-bold text-amber-900">
                    +35 Anos
                  </span>
                </div>

                <div className="space-y-3.5 sm:space-y-4 py-5 sm:py-6">
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-emerald-700" />
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <strong className="text-emerald-950">Laudo em 100% dos Ativos:</strong> Matérias-primas puras com certificado de análise laboratorial.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-emerald-700" />
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <strong className="text-emerald-950">Farmacêuticos em Tempo Integral:</strong> Acompanhamento técnico em todas as etapas de manipulação.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-emerald-700" />
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <strong className="text-emerald-950">Balanças Analíticas de Alta Precisão:</strong> Dosagens seguras exatamente como prescrito na receita.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-emerald-700" />
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <strong className="text-emerald-950">Entrega Delivery em Teresópolis:</strong> Receba com comodidade no trabalho ou em casa.
                    </p>
                  </div>
                </div>

                <div className="rounded-xl sm:rounded-2xl border border-emerald-900/10 bg-emerald-50/70 p-3.5 sm:p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] sm:text-xs font-semibold text-emerald-800">Orçamentos no WhatsApp</p>
                      <p className="text-xs sm:text-sm font-extrabold text-emerald-950">{phoneDisplay}</p>
                    </div>
                    <a
                      href={receitaWhatsAppLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-800 px-3.5 py-2 text-xs font-bold text-white hover:bg-emerald-700 active:scale-95"
                    >
                      <MessageCircle className="h-3.5 w-3.5 text-amber-300" />
                      Enviar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STATS BAR */}
      <section className="border-y border-emerald-900/10 bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-4">
            <div className="rounded-2xl border border-emerald-900/10 bg-[#f8faf9] p-4 text-center">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-emerald-950">+35 Anos</span>
              <span className="mt-1 block text-xs sm:text-sm font-medium text-slate-600">Tradição em Teresópolis</span>
            </div>
            <div className="rounded-2xl border border-emerald-900/10 bg-[#f8faf9] p-4 text-center">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-amber-600">4,9 ★</span>
              <span className="mt-1 block text-xs sm:text-sm font-medium text-slate-600">139 Avaliações Google</span>
            </div>
            <div className="rounded-2xl border border-emerald-900/10 bg-[#f8faf9] p-4 text-center">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-emerald-950">100%</span>
              <span className="mt-1 block text-xs sm:text-sm font-medium text-slate-600">Ativos com Laudo de Pureza</span>
            </div>
            <div className="rounded-2xl border border-emerald-900/10 bg-[#f8faf9] p-4 text-center">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-emerald-800">Delivery</span>
              <span className="mt-1 block text-xs sm:text-sm font-medium text-slate-600">Entrega em Toda a Cidade</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SEÇÃO DIDÁTICA: ENVIE SUA RECEITA EM 3 PASSOS */}
      <section id="como-funciona" className="py-14 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="rounded-2xl sm:rounded-3xl border border-emerald-900/15 bg-gradient-to-br from-emerald-950 via-emerald-900 to-[#022c22] p-5 sm:p-10 md:p-14 text-white shadow-2xl relative overflow-hidden">
            <div className="max-w-3xl">
              <span className="inline-block rounded-full bg-emerald-800/80 border border-emerald-700/50 px-3 py-1 sm:px-4 sm:py-1 text-[11px] sm:text-xs font-bold text-amber-300 uppercase tracking-wider">
                Praticidade no seu Dia a Dia
              </span>
              <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
                Como Funciona o Orçamento em 3 Passos Simples
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-emerald-100">
                Você não precisa enfrentar filas nem esperar no balcão da farmácia. Envie sua receita de onde estiver:
              </p>
            </div>

            <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-emerald-800/60 bg-emerald-900/40 p-5 sm:p-6 backdrop-blur-xs">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-amber-400 text-emerald-950 font-black text-lg sm:text-xl">
                  1
                </div>
                <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-bold text-white">Fotografe a Receita</h3>
                <p className="mt-2 text-xs sm:text-sm text-emerald-200 leading-relaxed">
                  Tire uma foto nítida da sua prescrição médica, odontológica, nutricional ou veterinária pelo celular.
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-800/60 bg-emerald-900/40 p-5 sm:p-6 backdrop-blur-xs">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-amber-400 text-emerald-950 font-black text-lg sm:text-xl">
                  2
                </div>
                <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-bold text-white">Análise Farmacêutica Ágil</h3>
                <p className="mt-2 text-xs sm:text-sm text-emerald-200 leading-relaxed">
                  Nossos farmacêuticos conferem as dosagens, calculam o valor e geram seu código de orçamento no WhatsApp.
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-800/60 bg-emerald-900/40 p-5 sm:p-6 backdrop-blur-xs">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-amber-400 text-emerald-950 font-black text-lg sm:text-xl">
                  3
                </div>
                <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-bold text-white">Manipulação & Entrega</h3>
                <p className="mt-2 text-xs sm:text-sm text-emerald-200 leading-relaxed">
                  Manipulamos no prazo rigoroso e entregamos na sua casa ou deixamos pronto para retirada no Parque Regadas.
                </p>
              </div>
            </div>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 sm:gap-6 border-t border-emerald-800 pt-6 sm:pt-8">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-amber-400 shrink-0" />
                <p className="text-xs sm:text-sm text-emerald-200">
                  <strong className="text-white">Retorno Rápido:</strong> Atendimento de segunda a sábado por farmacêuticos.
                </p>
              </div>
              <a
                href="#orcamento"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl sm:rounded-full bg-amber-400 px-6 py-3.5 text-sm font-bold text-emerald-950 shadow-lg hover:bg-amber-300 active:scale-95 transition"
              >
                <span>Enviar Minha Receita Agora</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ESPECIALIDADES MAGISTRAIS */}
      <section id="especialidades" className="border-t border-emerald-900/10 bg-white py-14 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <span className="text-[11px] sm:text-xs font-bold tracking-widest text-emerald-800 uppercase">
              Linhas de Atuação Magistral
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-emerald-950">
              Especialidades BioMolecular em Teresópolis
            </h2>
            <p className="mt-3 text-xs sm:text-base text-slate-600 max-w-2xl mx-auto">
              Cada fórmula é produzida sob medida com rigor farmacêutico para atender exatamente às necessidades do seu organismo:
            </p>
          </div>

          <div className="mt-8 sm:mt-14 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {specialties.map((srv, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-emerald-900/10 bg-[#f8faf9] p-5 sm:p-7 shadow-sm hover:shadow-md hover:border-emerald-700/30 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-block rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] sm:text-xs font-bold text-emerald-900">
                      {srv.tag}
                    </span>
                    <span className="text-[11px] sm:text-xs font-bold text-amber-700">{srv.badge}</span>
                  </div>
                  <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-bold text-emerald-950">{srv.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">{srv.desc}</p>
                </div>
                <div className="mt-5 sm:mt-6 pt-4 border-t border-emerald-900/10">
                  <a
                    href={`https://wa.me/${phone}?text=${encodeURIComponent(
                      `Olá! Gostaria de um orçamento para a especialidade: ${srv.title} na BioMolecular.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-800/20 bg-emerald-50 py-2.5 px-4 text-xs sm:text-sm font-semibold text-emerald-900 hover:bg-emerald-100 transition active:scale-98"
                  >
                    <span>Consultar Valores & Prazos</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. RIGOR FARMACÊUTICO & DIFERENCIAIS */}
      <section id="qualidade" className="py-14 sm:py-20 md:py-28 bg-[#f3f7f5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <span className="text-[11px] sm:text-xs font-bold tracking-widest text-emerald-800 uppercase">
              Por que Confiar na BioMolecular
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-emerald-950">
              O Rigor que Garante a Eficácia do Seu Tratamento
            </h2>
          </div>

          <div className="mt-8 sm:mt-14 grid gap-4 sm:gap-8 md:grid-cols-3">
            <div className="rounded-2xl sm:rounded-3xl border border-emerald-900/10 bg-white p-5 sm:p-8 shadow-sm">
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-900">
                <FlaskConical className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-bold text-emerald-950">Controle de Qualidade em Laboratório</h3>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
                Insumos adquiridos de distribuidores qualificados com certificado de análise físico-química e microbiológica individual.
              </p>
            </div>

            <div className="rounded-2xl sm:rounded-3xl border border-emerald-900/10 bg-white p-5 sm:p-8 shadow-sm">
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-900">
                <Award className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-bold text-emerald-950">+35 Anos de Tradição Serrana</h3>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
                Uma história sólida construída com médicos, nutricionistas e famílias de Teresópolis, valorizando ética e precisão absoluta.
              </p>
            </div>

            <div className="rounded-2xl sm:rounded-3xl border border-emerald-900/10 bg-white p-5 sm:p-8 shadow-sm">
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-900">
                <Truck className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-bold text-emerald-950">Delivery Pontual & Seguro</h3>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
                Medicamentos acondicionados com temperatura e embalagens protegidas contra luminosidade entregues direto no seu endereço.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SOBRE O ESPAÇO NO PARQUE REGADAS */}
      <section id="sobre" className="border-t border-emerald-900/10 bg-white py-14 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <div className="rounded-2xl sm:rounded-3xl border border-emerald-900/10 bg-gradient-to-br from-emerald-50 to-white p-6 sm:p-10 text-center shadow-md">
                <div className="mx-auto flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl sm:rounded-3xl bg-emerald-900 text-amber-400 font-black text-2xl sm:text-3xl shadow-lg">
                  BM
                </div>
                <h4 className="mt-4 sm:mt-5 text-xl sm:text-2xl font-bold text-emerald-950">BioMolecular Farmácia de Manipulação</h4>
                <p className="mt-1 text-[11px] sm:text-xs font-semibold tracking-wider text-emerald-700 uppercase">
                  Av. José Joaquim de Araújo Regadas, 143 · Parque Regadas, Teresópolis
                </p>

                <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-left">
                  <div className="rounded-xl sm:rounded-2xl border border-emerald-900/10 bg-white p-3.5 sm:p-4">
                    <p className="text-[10px] sm:text-xs font-medium text-slate-500">Endereço Físico</p>
                    <p className="mt-1 text-xs sm:text-sm font-bold text-emerald-950 leading-snug">{address}</p>
                  </div>
                  <div className="rounded-xl sm:rounded-2xl border border-emerald-900/10 bg-white p-3.5 sm:p-4">
                    <p className="text-[10px] sm:text-xs font-medium text-slate-500">Horários de Atendimento</p>
                    <p className="mt-1 text-xs sm:text-sm font-bold text-emerald-950 leading-snug">{hours}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <span className="text-[11px] sm:text-xs font-bold tracking-widest text-emerald-800 uppercase">
                Mais de Três Décadas de Dedicação
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-emerald-950 leading-tight">
                A história de uma farmácia feita para cuidar das pessoas de verdade
              </h2>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed text-slate-700">
                Situada no ponto de maior referência do centro da cidade — o tradicional <strong>Parque Regadas</strong> —, a BioMolecular construiu sua reputação com base em dois pilares inegociáveis: <strong>precisão técnica absoluta e respeito à vida</strong>.
              </p>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-slate-700">
                Nossos farmacêuticos e técnicos de laboratório acompanham a evolução da medicina integrativa, dermocosmética e ortomolecular para que cada paciente receba uma fórmula pura, estável e segura.
              </p>

              <div className="mt-6 sm:mt-8 flex items-center gap-3">
                <MapPin className="h-5 w-5 text-emerald-800 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-800">{address}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. PROVA SOCIAL / AVALIAÇÕES GOOGLE MAPS */}
      <section id="avaliacoes" className="py-14 sm:py-20 md:py-28 bg-[#f8faf9]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <span className="text-[11px] sm:text-xs font-bold tracking-widest text-emerald-800 uppercase">
              Nota 4,9 no Google Maps
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-emerald-950">
              O que os Clientes e Pacientes Dizem
            </h2>
          </div>

          <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 md:grid-cols-3">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="rounded-2xl sm:rounded-3xl border border-emerald-900/10 bg-white p-5 sm:p-8 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-slate-700 italic">
                    "{t.text}"
                  </p>

                  {t.ownerReply && (
                    <div className="mt-3 sm:mt-4 rounded-xl border border-emerald-900/10 bg-emerald-50/70 p-3 text-[11px] sm:text-xs text-slate-600">
                      <strong className="text-emerald-900 block mb-1">Resposta da BioMolecular:</strong>
                      "{t.ownerReply}"
                    </div>
                  )}
                </div>

                <div className="mt-5 sm:mt-6 pt-4 border-t border-emerald-900/10 flex items-center gap-3">
                  <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-900 font-bold text-xs sm:text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-emerald-950">{t.name}</span>
                    <span className="block text-[10px] sm:text-xs text-slate-500">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. SIMULADOR DE ENVIO DE RECEITA WHATSAPP */}
      <section id="orcamento" className="border-t border-emerald-900/10 bg-white py-14 sm:py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="rounded-2xl sm:rounded-3xl border border-emerald-900/15 bg-gradient-to-b from-[#f8faf9] to-white p-5 sm:p-10 md:p-12 shadow-xl">
            <div className="text-center">
              <span className="inline-block rounded-full bg-emerald-100 border border-emerald-300 px-3 py-1 text-[11px] sm:text-xs font-bold text-emerald-900">
                Atendimento Farmacêutico Ágil
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-emerald-950">
                Orçamento de Receita pelo WhatsApp
              </h2>
              <p className="mt-2 text-xs sm:text-base text-slate-600">
                Preencha os dados abaixo e envie sua mensagem pronta para a nossa equipe farmacêutica:
              </p>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="mt-8 sm:mt-10 space-y-4 sm:space-y-6">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-emerald-950">Seu Nome Completo:</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Maria Clara Fernandes"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1.5 sm:mt-2 w-full rounded-xl sm:rounded-2xl border border-emerald-900/20 bg-white px-4 py-3.5 text-base text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/10"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-emerald-950">Categoria da Fórmula:</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="mt-1.5 sm:mt-2 w-full rounded-xl sm:rounded-2xl border border-emerald-900/20 bg-white px-4 py-3.5 text-base text-slate-900 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/10"
                  >
                    <option value="Fórmulas Médicas & Alopatia">Fórmulas Médicas & Alopatia</option>
                    <option value="Dermatologia & Dermocosméticos">Dermatologia & Dermocosméticos</option>
                    <option value="Nutrologia & Suplementação Esportiva">Nutrologia & Suplementação Esportiva</option>
                    <option value="Fitoterapia & Modulação do Estresse">Fitoterapia & Modulação do Estresse</option>
                    <option value="Manipulação Veterinária (Pet)">Manipulação Veterinária (Pet)</option>
                    <option value="Outro Tratamento Personalizado">Outro Tratamento Personalizado</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-emerald-950">Forma de Recebimento:</label>
                  <select
                    value={deliveryType}
                    onChange={(e) => setDeliveryType(e.target.value)}
                    className="mt-1.5 sm:mt-2 w-full rounded-xl sm:rounded-2xl border border-emerald-900/20 bg-white px-4 py-3.5 text-base text-slate-900 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/10"
                  >
                    <option value="Entrega Delivery em Teresópolis">Entrega Delivery em Teresópolis</option>
                    <option value="Retirada no Balcão (Parque Regadas)">Retirada no Balcão (Parque Regadas)</option>
                    <option value="Envio para Outro Município">Envio para Outro Município</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-emerald-950">Bairro em Teresópolis (se for Delivery):</label>
                  <input
                    type="text"
                    placeholder="Ex: Várzea, Alto, Agriões, Barra..."
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.target.value)}
                    className="mt-1.5 sm:mt-2 w-full rounded-xl sm:rounded-2xl border border-emerald-900/20 bg-white px-4 py-3.5 text-base text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/10"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-emerald-950">Nome do Médico Prescritor (Opcional):</label>
                  <input
                    type="text"
                    placeholder="Ex: Dr. Roberto / Dra. Patrícia"
                    value={doctorName}
                    onChange={(e) => setDoctorName(e.target.value)}
                    className="mt-1.5 sm:mt-2 w-full rounded-xl sm:rounded-2xl border border-emerald-900/20 bg-white px-4 py-3.5 text-base text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/10"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-emerald-950">Observações ou Dúvidas (Opcional):</label>
                <textarea
                  rows={3}
                  placeholder="Ex: Fórmula em cápsulas sem lactose, com urgência..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="mt-1.5 sm:mt-2 w-full rounded-xl sm:rounded-2xl border border-emerald-900/20 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/10"
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex w-full min-h-[52px] items-center justify-center gap-2 rounded-xl sm:rounded-2xl bg-gradient-to-r from-emerald-800 to-emerald-700 py-4 text-sm sm:text-base font-bold text-white shadow-lg shadow-emerald-950/20 transition-all hover:bg-emerald-900 active:scale-95"
              >
                <Send className="h-4 w-4 sm:h-5 sm:w-5 text-amber-300" />
                <span>Enviar Receita para Análise no WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 11. FAQ SANFONADO */}
      <section id="faq" className="py-14 sm:py-20 md:py-28 bg-[#f8faf9]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center">
            <span className="text-[11px] sm:text-xs font-bold tracking-widest text-emerald-800 uppercase">
              Tire Suas Dúvidas
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-emerald-950">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="mt-8 sm:mt-12 space-y-3 sm:space-y-4">
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-xl sm:rounded-2xl border border-emerald-900/10 bg-white transition"
              >
                <button
                  onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                  className="flex w-full items-center justify-between p-4 sm:p-6 text-left text-xs sm:text-base font-bold text-emerald-950 hover:bg-emerald-50/50 active:bg-emerald-50"
                >
                  <span className="pr-2">{item.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 sm:h-5 sm:w-5 text-emerald-700 shrink-0 transition-transform duration-300 ${
                      faqOpen === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {faqOpen === idx && (
                  <div className="px-4 pb-4 sm:px-6 sm:pb-6 text-xs sm:text-sm leading-relaxed text-slate-700 border-t border-emerald-900/5 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FOOTER */}
      <footer className="border-t border-emerald-950 bg-emerald-950 py-10 sm:py-12 text-emerald-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-emerald-900 border border-emerald-700 text-amber-400 font-extrabold text-sm sm:text-base">
                  BM
                </div>
                <span className="text-base sm:text-lg font-bold text-white">BioMolecular Farmácia de Manipulação</span>
              </div>
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-emerald-300/80 max-w-md">
                Há mais de 35 anos dedicados à manipulação magistral de precisão, dermocosmética avançada e fitoterapia com entrega delivery para Teresópolis e toda a Região Serrana.
              </p>
              <div className="mt-4 sm:mt-6 flex items-start gap-2.5 text-xs text-emerald-300">
                <MapPin className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{address}</span>
              </div>
            </div>

            <div>
              <h5 className="text-xs font-bold tracking-wider text-amber-400 uppercase">Especialidades</h5>
              <ul className="mt-3 sm:mt-4 space-y-2 text-xs sm:text-sm">
                <li><a href="#especialidades" className="hover:text-white">Fórmulas Médicas</a></li>
                <li><a href="#especialidades" className="hover:text-white">Dermocosméticos</a></li>
                <li><a href="#especialidades" className="hover:text-white">Nutrologia Esportiva</a></li>
                <li><a href="#especialidades" className="hover:text-white">Fitoterapia & Sono</a></li>
                <li><a href="#especialidades" className="hover:text-white">Manipulação Pet</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-xs font-bold tracking-wider text-amber-400 uppercase">Horários & Contato</h5>
              <p className="mt-3 sm:mt-4 text-xs font-medium text-emerald-300">{hours}</p>
              <p className="mt-2 text-xs font-bold text-white">WhatsApp: {phoneDisplay}</p>
              <p className="mt-1 text-xs text-emerald-300">Telefone: {phoneLandline}</p>
              <div className="mt-4 sm:mt-6">
                <a
                  href={defaultWhatsAppLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-900 border border-emerald-700 px-4 py-2 text-xs font-bold text-amber-300 hover:bg-emerald-800 active:scale-95"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chamar no WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 flex flex-col items-center justify-between gap-3 sm:gap-4 border-t border-emerald-900 pt-6 sm:pt-8 text-[11px] sm:text-xs text-emerald-400 sm:flex-row text-center sm:text-left">
            <p>© {new Date().getFullYear()} BioMolecular Farmácia de Manipulação. Todos os direitos reservados.</p>
            <p className="font-semibold text-emerald-400">
              Desenvolvido estrategicamente por <span className="text-white">Cronos Agency</span>
            </p>
          </div>
        </div>
      </footer>

      {/* 13. FLOATING STICKY MOBILE BOTTOM BAR (ALTA CONVERSÃO) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-emerald-900/10 bg-white/95 backdrop-blur-lg px-4 py-3 md:hidden shadow-lg">
        <div className="flex items-center gap-2.5">
          <a
            href={receitaWhatsAppLink}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-emerald-800 py-3 text-xs font-bold text-white shadow-md active:scale-95"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <FileText className="h-4 w-4 text-amber-300" />
            <span>Enviar Receita no WhatsApp</span>
          </a>
          <a
            href="#orcamento"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-800/20 bg-emerald-50 text-emerald-900 active:bg-emerald-100"
            aria-label="Ir para formulário"
          >
            <Send className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
