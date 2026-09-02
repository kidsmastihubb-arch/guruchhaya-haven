import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { HOTEL, whatsappUrl } from "@/lib/hotel";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/rooms", label: "Rooms" },
  { to: "/about", label: "About" },
  { to: "/amenities", label: "Amenities" },
  { to: "/gallery", label: "Gallery" },
  { to: "/location", label: "Location" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid ? "glass shadow-soft py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container-site flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-3">
          <span
            className={cn(
              "grid size-10 place-items-center rounded-full border font-display text-xl font-semibold transition-colors",
              solid ? "border-primary/30 bg-primary text-primary-foreground" : "border-snow/40 bg-snow/10 text-snow backdrop-blur",
            )}
          >
            G
          </span>
          <span className="leading-tight">
            <span className={cn("block font-display text-xl font-semibold tracking-wide", solid ? "text-ink" : "text-snow")}>
              GuruChhaya
            </span>
            <span className={cn("block text-[0.6rem] uppercase tracking-[0.3em]", solid ? "text-ink-soft" : "text-snow/75")}>
              Hotel & Cottages · Manali
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                solid ? "text-ink-soft hover:bg-sand hover:text-ink" : "text-snow/85 hover:bg-snow/15 hover:text-snow",
              )}
              activeProps={{ className: cn("font-semibold", solid ? "bg-sand text-ink" : "bg-snow/20 text-snow") }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={`tel:${HOTEL.phoneTel}`}
            className={cn(
              "inline-flex h-10 items-center gap-2 rounded-full px-4 text-sm font-medium transition-colors",
              solid ? "text-ink hover:bg-sand" : "text-snow hover:bg-snow/15",
            )}
          >
            <Phone className="size-4" /> {HOTEL.phone}
          </a>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-full bg-whatsapp px-5 text-sm font-semibold text-whatsapp-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="size-4" /> Book on WhatsApp
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "grid size-11 place-items-center rounded-full transition-colors lg:hidden",
            solid ? "bg-sand text-ink" : "bg-snow/15 text-snow backdrop-blur",
          )}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        className={cn(
          "grid overflow-hidden transition-[grid-template-rows] duration-500 lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0">
          <nav className="container-site flex flex-col gap-1 pb-5 pt-3" aria-label="Mobile">
            {nav.map((n, i) => (
              <Link
                key={n.to}
                to={n.to}
                className="rounded-xl px-4 py-3 text-base font-medium text-ink transition-colors hover:bg-sand"
                activeProps={{ className: "bg-sand font-semibold" }}
                activeOptions={{ exact: n.to === "/" }}
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-2">
              <a href={`tel:${HOTEL.phoneTel}`} className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-primary/30 text-sm font-semibold text-primary">
                <Phone className="size-4" /> Call Now
              </a>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-whatsapp text-sm font-semibold text-whatsapp-foreground">
                <MessageCircle className="size-4" /> WhatsApp
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
