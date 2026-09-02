import { BedDouble, Users, Maximize2, Check } from "lucide-react";
import { WhatsAppButton } from "./Buttons";
import type { rooms } from "@/lib/hotel";

type Room = (typeof rooms)[number];

export function RoomCard({ room, reverse = false }: { room: Room; reverse?: boolean }) {
  return (
    <article className="group grid overflow-hidden rounded-3xl bg-card shadow-soft transition-shadow duration-500 hover:shadow-lift lg:grid-cols-2">
      <div className={`img-zoom relative aspect-[4/3] lg:aspect-auto lg:min-h-[420px] ${reverse ? "lg:order-2" : ""}`}>
        <img src={room.image} alt={`${room.name} at GuruChhaya Hotel and Cottages, Manali`} className="size-full object-cover" loading="lazy" />
        <span className="glass absolute left-5 top-5 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ink">
          {room.size}
        </span>
      </div>
      <div className="flex flex-col justify-center p-7 md:p-10">
        <p className="eyebrow">{room.tagline}</p>
        <h3 className="mt-3 text-3xl font-medium text-ink md:text-4xl">{room.name}</h3>
        <p className="mt-4 leading-relaxed text-ink-soft">{room.description}</p>

        <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink">
          <div className="flex items-center gap-2"><Users className="size-4 text-cedar" /> {room.guests}</div>
          <div className="flex items-center gap-2"><BedDouble className="size-4 text-cedar" /> {room.bed}</div>
          <div className="flex items-center gap-2"><Maximize2 className="size-4 text-cedar" /> {room.size}</div>
        </dl>

        <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-ink-soft">
          {room.amenities.map((a) => (
            <li key={a} className="flex items-center gap-2">
              <Check className="size-3.5 shrink-0 text-pine" /> {a}
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <WhatsAppButton
            label="Book on WhatsApp"
            message={`Hello GuruChhaya Hotel and Cottages, I would like to book the ${room.name}. Please share availability and rates.`}
          />
        </div>
      </div>
    </article>
  );
}
