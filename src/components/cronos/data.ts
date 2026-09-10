import {
  Globe,
  CalendarCheck,
  Bot,
  ShoppingBag,
  Snowflake,
  Music,
  Sparkles,
  LineChart,
  Layers,
} from "lucide-react";

export const services = [
  {
    icon: Globe,
    title: "Sites & Landing Pages",
    desc: "Páginas de altíssima conversão e design premium.",
    long: "Landing pages cirúrgicas, sites institucionais e e-commerces construídos com performance, SEO técnico e copywriting orientado à conversão. Design exclusivo, sem templates.",
    features: ["Design exclusivo", "Performance 95+ no Lighthouse", "SEO técnico", "CMS sob medida"],
  },
  {
    icon: Sparkles,
    title: "Branding & Identidade",
    desc: "Identidades visuais memoráveis e sistemas de marca completos.",
    long: "Construímos identidades visuais memoráveis — do logotipo ao sistema completo de marca, com guidelines, aplicações e direção de arte para todas as superfícies digitais.",
    features: ["Logotipo & sistema visual", "Guidelines de marca", "Direção de arte", "Aplicações digitais"],
  },
  {
    icon: Bot,
    title: "Automação Inteligente",
    desc: "Agentes de IA e automação de processos complexos.",
    long: "Construímos agentes de IA que atendem, qualificam e vendem 24/7. Integrações com WhatsApp, CRMs, e fluxos n8n / Make para eliminar gargalos operacionais.",
    features: ["Agentes de IA", "Integrações WhatsApp", "Pipelines de dados", "CRM e n8n"],
  },
];

export const extraServices = [
  {
    icon: LineChart,
    title: "Performance & Tráfego",
    desc: "Campanhas pagas com criativos próprios, foco em CPA e escala previsível.",
    long: "Campanhas de mídia paga estruturadas com criativos próprios, segmentação cirúrgica e otimização contínua. Foco em CPA saudável, ROAS previsível e escala sustentável.",
    features: ["Criativos próprios", "Gestão de Meta & Google Ads", "Otimização semanal", "Relatórios de performance"],
  },
  {
    icon: Layers,
    title: "Produtos Digitais",
    desc: "Aplicativos, dashboards e SaaS sob medida para a operação da sua marca.",
    long: "Desenvolvimento de aplicativos, dashboards internos e plataformas SaaS sob medida. Arquitetura escalável, design system próprio e infraestrutura preparada para crescer.",
    features: ["SaaS sob medida", "Apps & dashboards", "Arquitetura escalável", "Código proprietário"],
  },
  {
    icon: Bot,
    title: "Consultoria em IA",
    desc: "Mapeamento de processos e implementação de agentes de IA na sua operação.",
    long: "Diagnóstico completo da sua operação, identificação de gargalos e implementação de agentes de IA para automatizar atendimento, vendas e processos internos.",
    features: ["Mapeamento de processos", "Agentes de IA sob medida", "Integrações com sua stack", "Treinamento da equipe"],
  },
];


export const projects = [
  {
    icon: CalendarCheck,
    name: "Agendou",
    desc: "Plataforma SaaS de agendamento inteligente para estéticas e barbearias.",
    tag: "SaaS / Agendamento",
    long: "Sistema completo white-label de agendamentos com lembretes automáticos via WhatsApp, gestão financeira e dashboard de comissões. Pronto para escalar operações de serviços.",
    gradient: "radial-gradient(circle at 40% 40%, #2a1a4a, #050505 70%)",
  },
  {
    icon: ShoppingBag,
    name: "Vest Fut",
    desc: "E-commerce automático de roupas de futebol.",
    tag: "E-commerce",
    long: "Operação 100% automatizada de e-commerce: catálogo, pagamento, fulfillment e atendimento via IA.",
    gradient: "radial-gradient(circle at 30% 30%, #1f4d2b, #050505 70%)",
  },
  {
    icon: Snowflake,
    name: "Ice Out Club",
    desc: "Marca de streetwear premium, inspirada na Itália.",
    tag: "Fashion / Italian Design",
    long: "Marca de streetwear de alto padrão com estética italiana, dos drops à comunidade.",
    gradient: "radial-gradient(circle at 70% 30%, #1a2a4a, #050505 70%)",
  },
  {
    icon: Music,
    name: "Flow na Cena",
    desc: "Hub e SaaS para artistas musicais independentes.",
    tag: "SaaS / Música",
    long: "Plataforma e hub de mídia para artistas independentes — gestão de carreira e distribuição.",
    gradient: "radial-gradient(circle at 50% 60%, #4a1a2a, #050505 70%)",
  },
];
