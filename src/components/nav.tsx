"use client";

import { useState, useEffect } from "react";

const links = [
  { id: "inicio", label: "Inicio" },
  { id: "oportunidad", label: "Oportunidad" },
  { id: "datos", label: "Datos" },
  { id: "propuesta", label: "Propuesta" },
  { id: "mecanica", label: "Mecanica" },
  { id: "premios", label: "Premios" },
  { id: "inicio-challenge", label: "Inicio" },
];

export function Nav() {
  const [active, setActive] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = links.map((l) => document.getElementById(l.id));
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (s && s.getBoundingClientRect().top <= 200) {
          setActive(links[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-card-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 flex items-center justify-between h-16">
        <a href="#inicio" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-white" />
          </div>
          <span className="font-display font-bold text-sm tracking-wider uppercase">
            Atisa
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                active === link.id
                  ? "bg-primary/10 text-primary-light"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
