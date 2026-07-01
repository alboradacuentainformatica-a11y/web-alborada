import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import {
  Home,
  Info,
  GraduationCap,
  Users,
  FileText,
  Newspaper,
  Mail,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import logo from "../assets/logo.png";

const navItems = [
  { label: "Inicio", url: "/", icon: Home },
  {
    label: "Nosotros",
    icon: Info,
    children: [
      { label: "Historia", url: "/nosotros/historia" },
      { label: "Misión y Visión", url: "/nosotros/mision-vision" },
      { label: "Instalaciones", url: "/nosotros/instalaciones" },
    ],
  },
  { label: "Docentes", url: "/docentes", icon: Users },
  {
    label: "Admisión",
    icon: FileText,
    children: [
      { label: "Proceso", url: "/admision/proceso" },
      { label: "Requisitos", url: "/admision/requisitos" },
    ],
  },
  {
    label: "Vida Estudiantil",
    icon: Info,
    children: [
      { label: "Grados", url: "/vida/actividades" },
      { label: "Cronograma", url: "/vida/cronograma" },
    ],
  },
  { label: "Noticias", url: "/noticias", icon: Newspaper },
  { label: "Contacto", url: "/contacto", icon: Mail },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const pathname = useRouterState({ select: (r) => r.location.pathname });

  const isActive = (url: string) =>
    url === "/" ? pathname === "/" : pathname.startsWith(url);

  const toggleExpanded = (label: string) =>
    setExpanded((prev) => ({ ...prev, [label]: !prev[label] }));

  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src={logo}
              alt="Logo I.E. La Alborada 30225"
              className="h-10 w-10 object-contain"
            />
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                I.E. 30225
              </span>
              <span className="text-sm font-bold">La Alborada</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="relative group">
                  <button className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    item.children.some((c) => isActive(c.url))
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:bg-accent"
                  }`}>
                    <item.icon className="h-4 w-4" />
                    {item.label}
                    <ChevronDown className="h-3 w-3" />
                  </button>
                  <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <div className="rounded-xl border bg-background shadow-lg py-2 min-w-[200px]">
                      {item.children.map((c) => (
                        <Link
                          key={c.url}
                          to={c.url}
                          className={`block px-4 py-2 text-sm hover:bg-accent transition-colors ${
                            isActive(c.url) ? "font-semibold text-primary" : "text-foreground"
                          }`}
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.url}
                  to={item.url!}
                  className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item.url!)
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:bg-accent"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden rounded-lg p-2 hover:bg-accent transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t bg-background">
          <div className="mx-auto max-w-7xl px-4 py-4 space-y-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() => toggleExpanded(item.label)}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                      item.children.some((c) => isActive(c.url))
                        ? "text-primary bg-primary/10 font-semibold"
                        : "text-foreground hover:bg-accent"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      {item.label}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        expanded[item.label] ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expanded[item.label] && (
                    <div className="ml-6 mt-1 space-y-1">
                      {item.children.map((c) => (
                        <Link
                          key={c.url}
                          to={c.url}
                          onClick={() => setOpen(false)}
                          className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                            isActive(c.url)
                              ? "font-semibold text-primary bg-primary/10"
                              : "text-foreground hover:bg-accent"
                          }`}
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.url}
                  to={item.url!}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive(item.url!)
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:bg-accent"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}
