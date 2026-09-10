import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import {
  Sparkles, ShieldCheck, HeartHandshake, CheckCircle2, Clock, MapPin,
  Phone, MessageCircle, ChevronDown, Star, ArrowRight, Menu, X, Send,
  FileText, Truck, Award, Check, Leaf, FlaskConical, Stethoscope,
  ShoppingCart, Plus, Minus, Trash2, Tag, ShoppingBag, Eye, Search, Filter
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: ClientLandingPage,
});

// Product Interface
interface Product {
  id: string;
  name: string;
  category: "dermocosmeticos" | "suplementos" | "fitoterapia" | "longevidade" | "pet";
  categoryLabel: string;
  price: number;
  volume: string;
  tag: string;
  badge: string;
  desc: string;
  highlights: string[];
}

interface CartItem extends Product {
  quantity: number;
}

export default function ClientLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("todos");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [addedNotice, setAddedNotice] = useState<string | null>(null);

  // Delivery state in cart
  const [deliveryMethod, setDeliveryMethod] = useState<"delivery" | "retirada">("delivery");
  const [clientAddress, setClientAddress] = useState("");
  const [clientName, setClientName] = useState("");

  // Prescription Form State
  const [rxName, setRxName] = useState("");
  const [rxCategory, setRxCategory] = useState("Fórmulas Médicas & Alopatia");
  const [rxDelivery, setRxDelivery] = useState("Entrega Delivery em Teresópolis");
  const [rxNeighborhood, setRxNeighborhood] = useState("");
  const [rxDoctor, setRxDoctor] = useState("");
  const [rxNotes, setRxNotes] = useState("");

  const phone = "5521999458177";
  const phoneDisplay = "(21) 99945-8177";
  const phoneLandline = "(21) 2742-9145";
  const address = "Av. José Joaquim de Araújo Regadas, 143 - Várzea, Teresópolis - RJ, 25953-040";
  const hours = "Segunda a Sexta: 08:30 às 18:30 | Sábados: 08:30 às 13:00";

  const defaultWhatsAppLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Olá! Acessei o site da BioMolecular Farmácia de Manipulação e gostaria de tirar dúvidas sobre fórmulas manipuladas."
  )}`;

  const receitaWhatsAppLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Olá! Gostaria de enviar a foto da minha receita médica para orçamento e prazo de entrega na BioMolecular."
  )}`;

  // Products Catalog
  const products: Product[] = [
    {
      id: "bm-01",
      name: "Sérum Facial Quádruplo Ácido Hialurônico + Vitamina B5",
      category: "dermocosmeticos",
      categoryLabel: "Dermocosméticos",
      price: 89.90,
      volume: "Frasco Conta-Gotas 30ml",
      tag: "Mais Vendido",
      badge: "Toque Seco & Puro",
      desc: "4 pesos moleculares de ácido hialurônico para hidratação das camadas mais profundas até a superfície. Efeito preenchedor e tensor suave sem oleosidade.",
      highlights: ["Hipoalergênico", "Anti-Idade", "Absorção Imediata"]
    },
    {
      id: "bm-02",
      name: "Vitamina C Pura Estabilizada 20% + Ácido Ferúlico",
      category: "dermocosmeticos",
      categoryLabel: "Dermocosméticos",
      price: 119.00,
      volume: "Frasco Airless 30ml",
      tag: "Destaque Dermatológico",
      badge: "Luminosidade & Colágeno",
      desc: "Fórmula de alta potência antioxidante. Combate radicais livres, estimula a produção endógena de colágeno e uniformiza manchas e tom da pele.",
      highlights: ["Antioxidante Forte", "Clareador", "Estabilidade Máxima"]
    },
    {
      id: "bm-03",
      name: "Creatina Creapure® 100% Micronizada e Lauda",
      category: "suplementos",
      categoryLabel: "Suplementação",
      price: 109.90,
      volume: "Pote Selado 300g (100 doses)",
      tag: "Pureza Alemã 100%",
      badge: "Zero Aditivos",
      desc: "A matéria-prima mais pura do mundo com certificado de análise laboratorial. Máxima absorção para ganho de força, potência e cognição neuroprotetora.",
      highlights: ["Creapure Oficial", "Sem Glúten/Lactose", "Laudo de Análise"]
    },
    {
      id: "bm-04",
      name: "Composto Sono Profundo: Melatonina + Passiflora + Magnésio Bisglicinato",
      category: "fitoterapia",
      categoryLabel: "Fitoterapia & Sono",
      price: 74.90,
      volume: "60 Cápsulas Vegetais",
      tag: "Sono Restaurador",
      badge: "100% Natural",
      desc: "Combinação sinérgica para indução rápida do sono REM de qualidade, alívio do estresse diário e relaxamento muscular sem sonolência residual matinal.",
      highlights: ["Não Vicia", "Equilíbrio Noturno", "Cápsula Vegetal"]
    },
    {
      id: "bm-05",
      name: "Fórmula Imuno-Shield: Vitamina D3 10.000 UI + Zinco Quelato + Própolis",
      category: "longevidade",
      categoryLabel: "Longevidade",
      price: 68.00,
      volume: "60 Cápsulas Oleosas",
      tag: "Imunidade Serrana",
      badge: "Alta Absorção",
      desc: "Blindagem do sistema imune e suporte ósseo especialmente formulado para a temperatura da serra de Teresópolis. Previne infecções e fadiga crônica.",
      highlights: ["Dosagem Eficaz", "Minerais Quelatados", "Vitalidade"]
    },
    {
      id: "bm-06",
      name: "Fotoprotetor Facial Toque Seco FPS 60 com Niacinamida",
      category: "dermocosmeticos",
      categoryLabel: "Dermocosméticos",
      price: 79.90,
      volume: "Bisnaga 50g",
      tag: "Proteção Diária",
      badge: "Anti-Brilho",
      desc: "Filtros solares nobres de amplo espectro UVA/UVB combinados com Niacinamida 4% que controla a oleosidade e protege contra a luz azul de telas.",
      highlights: ["Toque Aveludado", "Proteção Luz Azul", "Não Comedogênico"]
    },
    {
      id: "bm-07",
      name: "Coenzima Q10 Bioidêntica 100mg + PQQ Mitocondrial",
      category: "longevidade",
      categoryLabel: "Longevidade",
      price: 124.00,
      volume: "60 Cápsulas Softgel",
      tag: "Energia Celular",
      badge: "Saúde Cardíaca",
      desc: "Potencializador mitocondrial que devolve o vigor biológico, combate o cansaço mental e protege a saúde cardiovascular e celular contra o envelhecimento precoce.",
      highlights: ["Bioidêntica", "Saúde Mitocondrial", "Vigor Físico"]
    },
    {
      id: "bm-08",
      name: "Biscoitos Veterinários Palatáveis Artro-Pet (Colágeno Tipo II)",
      category: "pet",
      categoryLabel: "Linha Pet",
      price: 85.00,
      volume: "Pote com 30 Biscoitos Sabor Carne",
      tag: "Manipulação Pet",
      badge: "Sabor Irresistível",
      desc: "Tratamento articular para cães e gatos com Colágeno Tipo II não desnaturado e Condroitina em formato de petisco que o animal adora comer voluntariamente.",
      highlights: ["Sem Estresse", "Sabor Carne Grelhada", "Saúde Articular"]
    }
  ];

  // Filtered Products
  const filteredProducts = useMemo(() => {
    if (activeCategory === "todos") return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory, products]);

  // Cart operations
  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });

    setAddedNotice(product.name);
    setTimeout(() => setAddedNotice(null), 3000);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const cartTotal = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cart]);

  const cartCount = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  }, [cart]);

  // Checkout via WhatsApp
  const handleCheckoutWhatsApp = () => {
    if (cart.length === 0) return;

    const deliveryText =
      deliveryMethod === "delivery"
        ? `*Entrega Delivery:* Sim (Endereço: ${clientAddress.trim() || "A combinar no WhatsApp"})`
        : `*Retirada:* No balcão (Parque Regadas, 143 - Várzea)`;

    const itemsText = cart
      .map(
        (i, idx) =>
          `${idx + 1}. *${i.name}*\n   Qtd: ${i.quantity}x | Valor: R$ ${(i.price * i.quantity).toFixed(2).replace(".", ",")}`
      )
      .join("\n\n");

    const message = [
      `*🛒 Pedido de Produtos — BioMolecular Farmácia de Manipulação*`,
      ``,
      clientName.trim() ? `*Cliente:* ${clientName.trim()}` : `*Cliente:* Contato via Site`,
      deliveryText,
      ``,
      `*Itens Escolhidos:*`,
      itemsText,
      ``,
      `*Valor Total dos Produtos:* R$ ${cartTotal.toFixed(2).replace(".", ",")}`,
      ``,
      `_Por favor, confirme a disponibilidade e o prazo de entrega/retirada._`
    ].join("\n");

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  // Prescription Form Handler
  const handleRxSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      `*📄 Envio de Receita para Orçamento — BioMolecular*`,
      ``,
      `*Nome do Paciente:* ${rxName.trim()}`,
      `*Categoria:* ${rxCategory}`,
      `*Forma de Recebimento:* ${rxDelivery}`,
      rxNeighborhood.trim() ? `*Bairro / Endereço:* ${rxNeighborhood.trim()}` : null,
      rxDoctor.trim() ? `*Médico Prescritor:* ${rxDoctor.trim()}` : null,
      rxNotes.trim() ? `*Observações:* ${rxNotes.trim()}` : null,
      ``,
      `_Enviei pelo site oficial e vou anexar a foto da receita em seguida._`
    ].filter(Boolean).join("\n");

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  };

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
      name: "Consenso dos Clientes no Google",
      role: "Média 4,9 estrelas com 139 avaliações",
      text: "Ótimo atendimento, bons preços e medicamentos seguros. Produtos sempre entregues corretamente com bom resultado no tratamento! Presteza, prazos cumpridos e qualidade na matéria-prima.",
      ownerReply: null
    }
  ];

  const faqItems = [
    {
      q: "Como faço para enviar minha receita médica pelo WhatsApp?",
      a: "Basta tirar uma foto nítida da sua prescrição médica pelo celular e clicar em 'Enviar Receita no WhatsApp'. Nossos farmacêuticos conferem a fórmula, calculam o valor e retornam com as opções de pagamento e prazo de entrega em poucos minutos."
    },
    {
      q: "Como funciona a compra dos produtos do catálogo pelo site?",
      a: "Você adiciona os dermocosméticos, suplementos ou fitoterápicos ao carrinho e clica em 'Finalizar Pedido pelo WhatsApp'. Seu pedido chega formatado com todos os itens calculados direto no nosso balcão de atendimento para separação imediata."
    },
    {
      q: "A BioMolecular aceita receitas digitais com QR Code e assinatura digital?",
      a: "Sim! Aceitamos receitas médicas digitais emitidas pelas principais plataformas de telemedicina e consultórios do Brasil (Memed, Conselho Federal de Medicina, prescrições em PDF com QR Code ou token de validação)."
    },
    {
      q: "Como funciona a entrega delivery em Teresópolis?",
      a: "Entregamos com motoboy próprio em todos os bairros de Teresópolis (Várzea, Alto, Agriões, Barra, Comary, São Pedro, Albuquerque, etc.). Medicamentos acondicionados em embalagens protegidas contra luminosidade."
    },
    {
      q: "Qual é a garantia de pureza das matérias-primas?",
      a: "Possuímos mais de 35 anos de atuação com controle de qualidade laboratorial rigoroso. Todos os princípios ativos possuem Laudo de Análise e passam por dupla conferência analítica por nossos farmacêuticos responsáveis."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8faf9] text-[#0f231c] selection:bg-emerald-800/20 selection:text-emerald-950 pb-24 md:pb-0 font-sans">
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="border-b border-emerald-900/10 bg-emerald-950 px-4 py-2 text-center text-xs font-semibold text-emerald-200">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <Sparkles className="h-3.5 w-3.5 text-amber-400 shrink-0" />
            <span>Há mais de 35 anos cuidando da sua saúde em Teresópolis</span>
            <span className="hidden md:inline text-emerald-400">· Parque Regadas, 143</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-[11px] text-emerald-300/80">
            <span>Fixo: {phoneLandline}</span>
            <span>WhatsApp: {phoneDisplay}</span>
          </div>
        </div>
      </div>

      {/* 2. NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-emerald-900/10 bg-white/95 backdrop-blur-md shadow-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          <a href="#" className="flex items-center gap-3 min-w-0">
            <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-900 border border-emerald-700/50 text-amber-400 font-black text-base sm:text-xl shadow-md shadow-emerald-950/20">
              BM
            </div>
            <div className="min-w-0">
              <span className="block text-base font-bold tracking-tight text-emerald-950 sm:text-2xl truncate">
                BioMolecular
              </span>
              <span className="block text-[10px] sm:text-xs font-semibold tracking-wider text-emerald-700 uppercase truncate">
                Farmácia Magistral · Desde 1989
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-7 lg:flex">
            <a href="#catalogo" className="text-sm font-semibold text-emerald-900 transition hover:text-emerald-700 flex items-center gap-1.5">
              <ShoppingBag className="h-4 w-4 text-emerald-700" />
              Catálogo de Produtos
            </a>
            <a href="#como-funciona" className="text-sm font-medium text-slate-700 transition hover:text-emerald-800">
              Enviar Receita
            </a>
            <a href="#especialidades" className="text-sm font-medium text-slate-700 transition hover:text-emerald-800">
              Especialidades
            </a>
            <a href="#qualidade" className="text-sm font-medium text-slate-700 transition hover:text-emerald-800">
              Rigor Farmacêutico
            </a>
            <a href="#sobre" className="text-sm font-medium text-slate-700 transition hover:text-emerald-800">
              A Loja
            </a>
            <a href="#avaliacoes" className="text-sm font-medium text-slate-700 transition hover:text-emerald-800">
              Depoimentos 4.9
            </a>
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Cart Button (apenas Desktop/Tablet, oculto em Mobile) */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative hidden md:flex h-10 sm:h-11 items-center gap-2 rounded-xl sm:rounded-2xl border border-emerald-900/15 bg-emerald-50 px-3 sm:px-4 text-xs sm:text-sm font-bold text-emerald-950 transition hover:bg-emerald-100 active:scale-95"
              aria-label="Abrir Carrinho"
            >
              <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-800 shrink-0" />
              <span className="hidden xs:inline">Carrinho</span>
              {cartCount > 0 && (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-[11px] font-black text-emerald-950 shadow-xs animate-in zoom-in-50">
                  {cartCount}
                </span>
              )}
            </button>

            <a
              href="#orcamento"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-emerald-800 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md shadow-emerald-900/20 transition-all hover:bg-emerald-700 active:scale-95"
            >
              <FileText className="h-4 w-4 text-amber-300" />
              Orçar Receita
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-900/15 text-emerald-950 active:bg-emerald-50 lg:hidden"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="border-b border-emerald-900/10 bg-white px-4 py-4 sm:px-6 sm:py-5 lg:hidden animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-2">
              <a
                href="#catalogo"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-bold text-emerald-950 bg-emerald-50/80 active:bg-emerald-100"
              >
                <ShoppingBag className="h-4 w-4 text-emerald-800" />
                Catálogo de Produtos & Fórmulas
              </a>
              <a
                href="#como-funciona"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-800 active:bg-emerald-50"
              >
                <FileText className="h-4 w-4 text-emerald-700" />
                Como Enviar Receita Médica
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
                Avaliações Google (Nota 4,9)
              </a>

              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsCartOpen(true);
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-900/20 bg-emerald-50 py-3 text-sm font-bold text-emerald-950 active:bg-emerald-100"
                >
                  <ShoppingCart className="h-4 w-4 text-emerald-800" />
                  Abrir Carrinho ({cartCount} itens)
                </button>
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

      {/* Floating Notice when item added */}
      {addedNotice && (
        <div className="fixed top-20 right-4 z-50 rounded-2xl border border-emerald-700/30 bg-emerald-950 p-4 text-white shadow-2xl animate-in slide-in-from-top-4 flex items-center gap-3 max-w-sm">
          <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
          <div className="text-xs">
            <p className="font-bold text-emerald-200">Adicionado ao Carrinho!</p>
            <p className="text-slate-300 line-clamp-1">{addedNotice}</p>
          </div>
          <button
            onClick={() => setIsCartOpen(true)}
            className="ml-auto rounded-lg bg-amber-500 px-2.5 py-1 text-[11px] font-extrabold text-emerald-950 hover:bg-amber-400"
          >
            Ver
          </button>
        </div>
      )}

      {/* 3. HERO SECTION */}
      <section className="relative overflow-hidden py-10 sm:py-16 md:py-24 bg-gradient-to-b from-[#eef7f3]/80 via-[#f8faf9] to-[#f8faf9]">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Text Left */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-800/20 bg-emerald-900/10 px-3.5 py-1 text-[11px] sm:text-xs font-bold text-emerald-900">
                <span className="flex h-2 w-2 rounded-full bg-emerald-600 animate-pulse"></span>
                <span>Farmácia Magistral de Referência em Teresópolis · Desde 1989</span>
              </div>

              <h1 className="mt-4 sm:mt-6 text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-emerald-950 leading-[1.18]">
                A sua receita médica manipulada com{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-emerald-700 to-amber-600">
                  máxima pureza, precisão e mais de 35 anos de tradição.
                </span>
              </h1>

              <p className="mt-4 sm:mt-6 text-sm sm:text-lg leading-relaxed text-slate-700 sm:text-xl">
                Cuidamos do seu tratamento com rigor de laboratório, matérias-primas laudas e atendimento acolhedor no Parque Regadas. Envie a foto da sua prescrição ou compre fórmulas exclusivas a pronta entrega.
              </p>

              {/* Hero CTAs */}
              <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#orcamento"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-emerald-800 to-emerald-700 px-6 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-white shadow-xl shadow-emerald-950/20 transition-all hover:bg-emerald-900 active:scale-95"
                >
                  <Send className="h-5 w-5 text-amber-300 shrink-0" />
                  <span>Enviar Foto da Receita no WhatsApp</span>
                </a>
                <a
                  href="#catalogo"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border border-emerald-900/15 bg-white px-6 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-emerald-900 shadow-xs transition-all hover:bg-emerald-50 active:scale-98"
                >
                  <ShoppingBag className="h-4 w-4 text-emerald-700 shrink-0" />
                  <span>Ver Catálogo de Produtos</span>
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
                    ⭐ 4,9 no Google Maps (139 avaliações de médicos e pacientes)
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-600">
                    Aprovado pelos principais especialistas de saúde da Região Serrana
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
                      <strong className="text-emerald-950">100% dos Ativos com Laudo:</strong> Insumos puros com certificação e dupla checagem analítica.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-emerald-700" />
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <strong className="text-emerald-950">Farmacêuticos em Tempo Integral:</strong> Supervisão direta em todas as etapas da manipulação.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-emerald-700" />
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <strong className="text-emerald-950">Entrega Delivery em Teresópolis:</strong> Receba com comodidade no trabalho ou em casa.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-emerald-700" />
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <strong className="text-emerald-950">Rastreabilidade Total:</strong> Cada frasco e cápsula com controle rigoroso de pesagem.
                    </p>
                  </div>
                </div>

                <div className="rounded-xl sm:rounded-2xl border border-emerald-900/10 bg-emerald-50/70 p-3.5 sm:p-4 flex items-center justify-between">
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
              <span className="mt-1 block text-xs sm:text-sm font-medium text-slate-600">Ativos com Laudo Analítico</span>
            </div>
            <div className="rounded-2xl border border-emerald-900/10 bg-[#f8faf9] p-4 text-center">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-emerald-800">Delivery</span>
              <span className="mt-1 block text-xs sm:text-sm font-medium text-slate-600">Entrega em Toda a Cidade</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SEÇÃO DE PRODUTOS & CARRINHO (NOVO & EXCLUSIVO) */}
      <section id="catalogo" className="py-14 sm:py-20 md:py-28 bg-[#f2f7f4]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 border border-emerald-300/60 px-3.5 py-1 text-xs font-bold text-emerald-900 uppercase tracking-wider">
              <ShoppingBag className="h-3.5 w-3.5 text-emerald-800" />
              Pronta Entrega & Fórmulas Exclusivas
            </span>
            <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold text-emerald-950">
              Catálogo de Fórmulas & Dermocosméticos
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Selecione seus produtos favoritos desenvolvidos por nossos farmacêuticos e finalize o pedido direto pelo WhatsApp com entrega em Teresópolis:
            </p>

            {/* Category Filter Pills */}
            <div className="mt-6 sm:mt-8 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {[
                { key: "todos", label: "Todos os Produtos" },
                { key: "dermocosmeticos", label: "Dermocosméticos" },
                { key: "suplementos", label: "Suplementação" },
                { key: "fitoterapia", label: "Fitoterapia & Sono" },
                { key: "longevidade", label: "Longevidade" },
                { key: "pet", label: "Linha Pet" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveCategory(tab.key)}
                  className={`shrink-0 rounded-full px-4 py-2 text-xs sm:text-sm font-bold transition-all ${
                    activeCategory === tab.key
                      ? "bg-emerald-800 text-white shadow-md shadow-emerald-900/20"
                      : "bg-white border border-emerald-900/15 text-slate-700 hover:bg-emerald-50"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className="group flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-emerald-900/10 bg-white p-5 sm:p-6 shadow-sm hover:shadow-xl hover:border-emerald-700/30 transition-all duration-300"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-block rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[10px] font-bold text-emerald-900">
                      {p.tag}
                    </span>
                    <span className="text-[10px] font-bold text-amber-700">{p.badge}</span>
                  </div>

                  {/* Title & Volume */}
                  <h3 className="mt-3.5 text-base sm:text-lg font-bold text-emerald-950 leading-snug group-hover:text-emerald-800 transition">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-emerald-700">{p.volume}</p>

                  {/* Description */}
                  <p className="mt-2.5 text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {p.desc}
                  </p>

                  {/* Highlights Tags */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price and Add to Cart Button */}
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="text-[11px] text-slate-500 font-medium">Valor por unidade:</span>
                    <span className="text-lg sm:text-xl font-extrabold text-emerald-950">
                      R$ {p.price.toFixed(2).replace(".", ",")}
                    </span>
                  </div>

                  <button
                    onClick={() => addToCart(p)}
                    className="flex w-full items-center justify-center gap-2 rounded-xl sm:rounded-2xl bg-emerald-800 py-3 text-xs sm:text-sm font-bold text-white shadow-md shadow-emerald-900/15 transition hover:bg-emerald-700 active:scale-95"
                  >
                    <ShoppingCart className="h-4 w-4 text-amber-300" />
                    <span>Adicionar ao Carrinho</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Callout Banner if user has items */}
          {cartCount > 0 && (
            <div className="mt-10 rounded-2xl border border-emerald-800/30 bg-emerald-900 text-white p-5 sm:p-6 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 animate-in fade-in">
              <div className="flex items-center gap-3 text-center sm:text-left">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400 text-emerald-950 font-black text-xl shrink-0">
                  {cartCount}
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold">Você tem {cartCount} {cartCount === 1 ? "item" : "itens"} no seu carrinho</h4>
                  <p className="text-xs sm:text-sm text-emerald-200">
                    Total: <strong className="text-amber-300">R$ {cartTotal.toFixed(2).replace(".", ",")}</strong> · Envie o pedido pronto para o WhatsApp!
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsCartOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-3 text-sm font-extrabold text-emerald-950 shadow-md hover:bg-amber-300 active:scale-95 transition"
              >
                <span>Ver Carrinho & Finalizar</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 6. MODAL / DRAWER DO CARRINHO DE COMPRAS */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div
            className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300"
            role="dialog"
            aria-label="Carrinho de Compras"
          >
            {/* Cart Header */}
            <div className="border-b border-slate-200 p-4 sm:p-5 flex items-center justify-between bg-emerald-950 text-white">
              <div className="flex items-center gap-2.5">
                <ShoppingCart className="h-5 w-5 text-amber-400" />
                <h3 className="text-base sm:text-lg font-bold">Seu Carrinho BioMolecular</h3>
                <span className="rounded-full bg-emerald-800 px-2 py-0.5 text-xs font-bold text-amber-300">
                  {cartCount} {cartCount === 1 ? "item" : "itens"}
                </span>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-900 text-slate-300 hover:text-white active:bg-emerald-800"
                aria-label="Fechar carrinho"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3.5">
              {cart.length === 0 ? (
                <div className="py-16 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800 mb-4">
                    <ShoppingBag className="h-8 w-8" />
                  </div>
                  <h4 className="text-base font-bold text-slate-800">Seu carrinho está vazio</h4>
                  <p className="mt-1 text-xs text-slate-500 max-w-xs mx-auto">
                    Navegue pelo nosso catálogo de dermocosméticos e fórmulas exclusivas para adicionar produtos.
                  </p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-800 px-5 py-2.5 text-xs font-bold text-white hover:bg-emerald-700"
                  >
                    Explorar Catálogo
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-slate-200 bg-[#fbfdfc] p-3.5 flex flex-col justify-between gap-3 shadow-xs"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="inline-block rounded-md bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-900">
                          {item.categoryLabel}
                        </span>
                        <h4 className="mt-1 text-sm font-bold text-emerald-950 leading-snug">
                          {item.name}
                        </h4>
                        <p className="text-[11px] text-slate-500">{item.volume}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-slate-400 hover:text-rose-600 p-1"
                        aria-label="Remover item"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-slate-300 rounded-lg overflow-hidden bg-white">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="px-2 py-1 hover:bg-slate-100 active:bg-slate-200 text-slate-700"
                          aria-label="Diminuir quantidade"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="px-3 text-xs font-bold text-emerald-950">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="px-2 py-1 hover:bg-slate-100 active:bg-slate-200 text-slate-700"
                          aria-label="Aumentar quantidade"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>

                      {/* Price */}
                      <span className="text-sm font-extrabold text-emerald-950">
                        R$ {(item.price * item.quantity).toFixed(2).replace(".", ",")}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Cart Footer & Checkout Form */}
            {cart.length > 0 && (
              <div className="border-t border-slate-200 bg-white p-4 sm:p-5 space-y-4">
                {/* Delivery Option */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-emerald-950">Forma de Recebimento:</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setDeliveryMethod("delivery")}
                      className={`flex items-center justify-center gap-1.5 rounded-xl p-2.5 text-xs font-bold border transition ${
                        deliveryMethod === "delivery"
                          ? "border-emerald-800 bg-emerald-50 text-emerald-950 shadow-xs"
                          : "border-slate-200 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      <Truck className="h-3.5 w-3.5" />
                      <span>Delivery em Terê</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setDeliveryMethod("retirada")}
                      className={`flex items-center justify-center gap-1.5 rounded-xl p-2.5 text-xs font-bold border transition ${
                        deliveryMethod === "retirada"
                          ? "border-emerald-800 bg-emerald-50 text-emerald-950 shadow-xs"
                          : "border-slate-200 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      <MapPin className="h-3.5 w-3.5" />
                      <span>Retirar na Loja</span>
                    </button>
                  </div>
                </div>

                {/* Client inputs for fast checkout */}
                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Seu Nome Completo"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-xs text-slate-900 placeholder:text-slate-400 outline-none focus:border-emerald-800"
                  />
                  {deliveryMethod === "delivery" && (
                    <input
                      type="text"
                      placeholder="Endereço / Bairro em Teresópolis"
                      value={clientAddress}
                      onChange={(e) => setClientAddress(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-xs text-slate-900 placeholder:text-slate-400 outline-none focus:border-emerald-800"
                    />
                  )}
                </div>

                {/* Subtotal and Total */}
                <div className="border-t border-slate-100 pt-3 space-y-1">
                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <span>Subtotal dos Produtos:</span>
                    <span>R$ {cartTotal.toFixed(2).replace(".", ",")}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <span>{deliveryMethod === "delivery" ? "Taxa de Entrega:" : "Retirada no Balcão:"}</span>
                    <span className="font-semibold text-emerald-800">
                      {deliveryMethod === "delivery" ? "A calcular no WhatsApp" : "Grátis (Parque Regadas)"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-base font-black text-emerald-950 pt-1">
                    <span>Total Estimado:</span>
                    <span className="text-xl text-emerald-800">
                      R$ {cartTotal.toFixed(2).replace(".", ",")}
                    </span>
                  </div>
                </div>

                {/* WhatsApp Checkout Button */}
                <button
                  onClick={handleCheckoutWhatsApp}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-800 to-emerald-700 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-950/20 hover:bg-emerald-900 active:scale-98 transition"
                >
                  <MessageCircle className="h-4 w-4 text-amber-300" />
                  <span>Finalizar Pedido pelo WhatsApp</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 7. SEÇÃO DIDÁTICA: ENVIE SUA RECEITA EM 3 PASSOS */}
      <section id="como-funciona" className="py-14 sm:py-20 md:py-28 bg-white border-t border-emerald-900/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="rounded-2xl sm:rounded-3xl border border-emerald-900/15 bg-gradient-to-br from-emerald-950 via-emerald-900 to-[#022c22] p-5 sm:p-10 md:p-14 text-white shadow-2xl relative overflow-hidden">
            <div className="max-w-3xl">
              <span className="inline-block rounded-full bg-emerald-800/80 border border-emerald-700/50 px-3 py-1 sm:px-4 sm:py-1 text-[11px] sm:text-xs font-bold text-amber-300 uppercase tracking-wider">
                Manipulação Sob Prescrição
              </span>
              <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
                Como Enviar sua Receita Médica em 3 Passos
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-emerald-100">
                Você não precisa enfrentar trânsito nem esperar no balcão da farmácia. Envie sua receita de onde estiver:
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
                <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-bold text-white">Análise Farmacêutica</h3>
                <p className="mt-2 text-xs sm:text-sm text-emerald-200 leading-relaxed">
                  Nossos farmacêuticos conferem as dosagens, calculam o valor e geram seu código de atendimento no WhatsApp.
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
                  <strong className="text-white">Atendimento Rápido:</strong> Resposta ágil de segunda a sábado por farmacêuticos.
                </p>
              </div>
              <a
                href="#orcamento"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl sm:rounded-full bg-amber-400 px-6 py-3.5 text-sm font-bold text-emerald-950 shadow-lg hover:bg-amber-300 active:scale-95 transition"
              >
                <span>Enviar Receita pelo WhatsApp</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. ESPECIALIDADES MAGISTRAIS */}
      <section id="especialidades" className="py-14 sm:py-20 md:py-28 bg-[#f8faf9]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <span className="text-[11px] sm:text-xs font-bold tracking-widest text-emerald-800 uppercase">
              Linhas de Atuação Magistral
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-emerald-950">
              Especialidades BioMolecular em Teresópolis
            </h2>
            <p className="mt-3 text-xs sm:text-base text-slate-600 max-w-2xl mx-auto">
              Cada fórmula é manipulada sob medida com rigor de laboratório para atender às recomendações exatas do seu médico:
            </p>
          </div>

          <div className="mt-8 sm:mt-14 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Fórmulas Médicas & Alopatia",
                desc: "Cápsulas gelatinosas, sachês, soluções orais e sublinguais dosadas no miligrama prescrito pelo seu médico com balança analítica.",
                tag: "Prescrição Médica",
                badge: "Dosagem Exata"
              },
              {
                title: "Dermatologia & Dermocosméticos",
                desc: "Séruns anti-idade com ácido hialurônico de múltiplos pesos, vitamina C pura estabilizada e fotoprotetores hipoalergênicos.",
                tag: "Skincare Avançado",
                badge: "Toque Seco"
              },
              {
                title: "Nutrologia & Suplementação Esportiva",
                desc: "Creatina micronizada pura Creapure®, aminoácidos essenciais, compostos antioxidantes e modulação metabólica sem aditivos.",
                tag: "Performance & Saúde",
                badge: "Zero Açúcares"
              },
              {
                title: "Fitoterapia & Modulação do Estresse",
                desc: "Extratos botânicos padronizados para ansiedade, qualidade do sono, melatonina pura e fitoterápicos para imunidade.",
                tag: "Saúde Integrativa",
                badge: "100% Botânico"
              },
              {
                title: "Manipulação Veterinária Palatável (Pet)",
                desc: "Biscoitos nos sabores carne e frango e pastas orais flavorizadas que facilitam a medicação de cães e gatos sem sofrimento.",
                tag: "Linha Pet",
                badge: "Fácil Administração"
              },
              {
                title: "Longevidade Celular & Saúde Digestiva",
                desc: "Enzimas digestivas, probióticos liofilizados sob medida, Coenzima Q10 de alta absorção e compostos para saúde mitocondrial.",
                tag: "Longevidade",
                badge: "Alta Absorção"
              }
            ].map((srv, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-emerald-900/10 bg-white p-5 sm:p-7 shadow-sm hover:shadow-md hover:border-emerald-700/30 transition-all"
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

      {/* 9. RIGOR FARMACÊUTICO & DIFERENCIAIS */}
      <section id="qualidade" className="py-14 sm:py-20 md:py-28 bg-[#f3f7f5] border-t border-emerald-900/10">
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
              <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-bold text-emerald-950">Controle de Qualidade Analítico</h3>
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

      {/* 10. SOBRE O ESPAÇO NO PARQUE REGADAS */}
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

      {/* 11. PROVA SOCIAL / AVALIAÇÕES GOOGLE MAPS */}
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

      {/* 12. SIMULADOR DE ENVIO DE RECEITA WHATSAPP */}
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

            <form onSubmit={handleRxSubmit} className="mt-8 sm:mt-10 space-y-4 sm:space-y-6">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-emerald-950">Seu Nome Completo:</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Maria Clara Fernandes"
                  value={rxName}
                  onChange={(e) => setRxName(e.target.value)}
                  className="mt-1.5 sm:mt-2 w-full rounded-xl sm:rounded-2xl border border-emerald-900/20 bg-white px-4 py-3.5 text-base text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/10"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-emerald-950">Categoria da Fórmula:</label>
                  <select
                    value={rxCategory}
                    onChange={(e) => setRxCategory(e.target.value)}
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
                    value={rxDelivery}
                    onChange={(e) => setRxDelivery(e.target.value)}
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
                    value={rxNeighborhood}
                    onChange={(e) => setRxNeighborhood(e.target.value)}
                    className="mt-1.5 sm:mt-2 w-full rounded-xl sm:rounded-2xl border border-emerald-900/20 bg-white px-4 py-3.5 text-base text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/10"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-emerald-950">Nome do Médico Prescritor (Opcional):</label>
                  <input
                    type="text"
                    placeholder="Ex: Dr. Roberto / Dra. Patrícia"
                    value={rxDoctor}
                    onChange={(e) => setRxDoctor(e.target.value)}
                    className="mt-1.5 sm:mt-2 w-full rounded-xl sm:rounded-2xl border border-emerald-900/20 bg-white px-4 py-3.5 text-base text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/10"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-emerald-950">Observações ou Dúvidas (Opcional):</label>
                <textarea
                  rows={3}
                  placeholder="Ex: Fórmula em cápsulas sem lactose, com urgência..."
                  value={rxNotes}
                  onChange={(e) => setRxNotes(e.target.value)}
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

      {/* 13. FAQ SANFONADO */}
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

      {/* 14. FOOTER */}
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
              <h5 className="text-xs font-bold tracking-wider text-amber-400 uppercase">Navegação Rápida</h5>
              <ul className="mt-3 sm:mt-4 space-y-2 text-xs sm:text-sm">
                <li><a href="#catalogo" className="hover:text-white">Catálogo de Produtos</a></li>
                <li><a href="#como-funciona" className="hover:text-white">Enviar Receita</a></li>
                <li><a href="#especialidades" className="hover:text-white">Especialidades</a></li>
                <li><a href="#qualidade" className="hover:text-white">Controle de Qualidade</a></li>
                <li><a href="#orcamento" className="hover:text-white">Orçamento WhatsApp</a></li>
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

      {/* 15. FLOATING STICKY MOBILE BOTTOM BAR (HIGH CONVERSION) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-emerald-900/10 bg-white/95 backdrop-blur-lg px-4 py-3 md:hidden shadow-xl">
        {cartCount > 0 ? (
          <button
            onClick={() => setIsCartOpen(true)}
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 py-3 text-xs sm:text-sm font-black text-emerald-950 shadow-md active:scale-95 transition"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Ver Carrinho ({cartCount} {cartCount === 1 ? "item" : "itens"} · R$ {cartTotal.toFixed(2).replace(".", ",")})</span>
          </button>
        ) : (
          <a
            href={receitaWhatsAppLink}
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-800 py-3 text-xs sm:text-sm font-bold text-white shadow-md active:scale-95 transition"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <FileText className="h-4 w-4 text-amber-300" />
            <span>Enviar Receita no WhatsApp</span>
          </a>
        )}
      </div>
    </div>
  );
}
