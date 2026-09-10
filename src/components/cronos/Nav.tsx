import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Início" },
  { to: "/servicos", label: "Serviços" },
  { to: "/ecossistema", label: "Ecossistema" },
  { to: "/contato", label: "Contato" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 flex w-fit max-w-5xl items-center justify-between gap-8 rounded-full glass-card px-5 py-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-display text-sm font-bold tracking-tight text-white">CRONOS</span>
        </Link>

        <nav className="hidden gap-8 text-sm text-white/70 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-white" }}
              className="transition hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/#planos"
            className="hidden rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white transition hover:red-glow sm:inline-block"
          >
            Ver Planos
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full glass-card text-white md:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-6 mt-2 rounded-2xl glass-card p-4 md:hidden">
          <nav className="flex flex-col gap-3 text-sm text-white/80">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "text-primary" }}
                className="rounded-lg px-3 py-2 transition hover:bg-white/5"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
