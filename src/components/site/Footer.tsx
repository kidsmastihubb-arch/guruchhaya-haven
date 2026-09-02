import { Link } from "@tanstack/react-router";
import { MapPin, Phone, MessageCircle, Star } from "lucide-react";
import { HOTEL, whatsappUrl } from "@/lib/hotel";

const links = [
  { to: "/rooms", label: "Rooms" },
  { to: "/about", label: "About" },
  { to: "/amenities", label: "Amenities" },
  { to: "/gallery", label: "Gallery" },
  { to: "/location", label: "Location" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="relative mt-24 bg-ink text-snow">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="font-display text-3xl font-semibold">GuruChhaya</p>
          <p className="mt-1 text-xs uppercase tracking-[0.3em] text-snow/60">Hotel & Cottages · Manali</p>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-snow/70">
            A peaceful boutique mountain-view hotel beneath the deodar forest of Hadimba Temple Road — private balconies,
            warm wood interiors and Himalayan hospitality, minutes from Mall Road.
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm">
            <span className="flex items-center gap-1 text-gold">
              <Star className="size-4 fill-current" /> {HOTEL.rating}
            </span>
            <span className="text-snow/60">· {HOTEL.reviews}+ guest reviews · 3-star hotel</span>
          </div>
        </div>

        <div>
          <p className="eyebrow !text-gold">Explore</p>
          <ul className="mt-5 space-y-3 text-sm">
            {links.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-snow/75 transition-colors hover:text-snow">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow !text-gold">Reach Us</p>
          <ul className="mt-5 space-y-4 text-sm text-snow/75">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
              <span>
                {HOTEL.addressLines[0]}
                <br />
                {HOTEL.addressLines[1]}
              </span>
            </li>
            <li>
              <a href={`tel:${HOTEL.phoneTel}`} className="flex items-center gap-3 hover:text-snow">
                <Phone className="size-4 text-gold" /> {HOTEL.phone}
              </a>
            </li>
            <li>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-snow">
                <MessageCircle className="size-4 text-gold" /> WhatsApp us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-snow/10">
        <div className="container-site flex flex-col items-start justify-between gap-2 py-5 text-xs text-snow/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {HOTEL.name}. All rights reserved.</p>
          <p>Check-in 12:00 PM · Check-out 11:00 AM</p>
        </div>
      </div>
    </footer>
  );
}
