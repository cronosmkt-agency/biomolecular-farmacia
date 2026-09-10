import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, ArrowRight } from "lucide-react";
import cronosLogo from "../../assets/cronos-logo.png";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <img
                src={cronosLogo}
                alt="Logo Cronos Marketing & Design"
                loading="lazy"
                className="h-9 w-9 rounded-full object-cover"
              />
              <span className="text-display text-base font-bold tracking-tight text-white">CRONOS</span>
            </Link>
            <p className="mt-5 max-w-md text-sm text-white/60">
              Infraestrutura completa de tecnologia, design e vendas — focada em escala
              e alto impacto para marcas que pensam grande.
            </p>
            <Link
              to="/contato"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Iniciar projeto
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Navegação</p>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li><Link to="/" className="hover:text-white">Início</Link></li>
              <li><Link to="/servicos" className="hover:text-white">Serviços</Link></li>
              <li><Link to="/ecossistema" className="hover:text-white">Ecossistema</Link></li>
              <li><Link to="/contato" className="hover:text-white">Contato</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Contato</p>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-primary" /> cronosmkt.agency@gmail.com</li>
              <li className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-primary" /> Teresópolis / RJ</li>
              <li>
                <a href="#" aria-label="Instagram" className="inline-flex items-center gap-2 hover:text-white">
                  <Instagram className="h-3.5 w-3.5 text-primary" /> @cronosmkt
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 text-xs text-white/40 sm:flex-row sm:items-center">
          <p>© 2026 Cronos Marketing & Design. Sediada em Teresópolis/RJ.</p>
          <p>Construindo o futuro do digital.</p>
        </div>
      </div>
    </footer>
  );
}
