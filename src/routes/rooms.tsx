import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star, Check, Users, BedDouble, Maximize2 } from "lucide-react";
import { images, rooms, HOTEL } from "@/lib/hotel";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { RoomCard } from "@/components/site/RoomCard";
import { WhatsAppButton, CallButton } from "@/components/site/Buttons";

const TITLE = "Rooms & Cottages | GuruChhaya Hotel and Cottages, Manali";
const DESC =
  "Explore cedar-wood rooms and family cottages at GuruChhaya Hotel Manali. Private balconies, mountain views, king beds, free Wi-Fi, room heaters and more. Book on WhatsApp.";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/rooms" },
    ],
    links: [{ rel: "canonical", href: "/rooms" }],
  }),
  component: RoomsPage,
});

const commonFacilities = [
  "Private balcony with mountain or forest view",
  "Free high-speed Wi-Fi",
  "LED TV with satellite channels",
  "Room heater for winter comfort",
  "24×7 hot water",
  "Tea / coffee kettle",
  "Daily housekeeping",
  "Room service",
];

function RoomsPage() {
  return (
    <>
      <PageHero
        image={images.deluxeRoom}
        alt="Deluxe mountain-view room with pine-panelled ceiling at GuruChhaya Hotel Manali"
        eyebrow="Rooms & Cottages"
        title="Stay in warm cedar-wood rooms with balcony views"
        subtitle="Spacious, cosy and finished in Himalayan pine — each room opens onto a private balcony with snow-peak or valley views."
      >
        <WhatsAppButton size="lg" />
        <CallButton size="lg" variant="light" />
      </PageHero>

      {/* ROOM CARDS */}
      <section className="container-site py-24 lg:py-32">
        <Reveal direction="up">
          <SectionHeading eyebrow="Our Rooms" title="Choose your mountain retreat" text="From cosy couples' rooms to family suites, every space is designed for warmth, comfort and that unbeatable balcony view." />
        </Reveal>
        <div className="mt-16 space-y-10">
          {rooms.map((room, i) => (
            <Reveal key={room.slug} direction={i % 2 === 0 ? "left" : "right"} delay={80}>
              <RoomCard room={room} reverse={i % 2 === 1} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ROOM FACILITIES */}
      <section className="bg-sand/60 py-24 lg:py-32">
        <div className="container-site">
          <Reveal direction="up">
            <SectionHeading align="center" eyebrow="Room Facilities" title="In every room, every comfort" />
          </Reveal>
          <div className="mx-auto mt-12 max-w-3xl">
            <ul className="grid gap-4 sm:grid-cols-2">
              {commonFacilities.map((f, i) => (
                <Reveal key={f} direction={i % 2 === 0 ? "left" : "right"} delay={(i % 2) * 80}>
                  <li className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
                    <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-pine/10 text-pine">
                      <Check className="size-4" />
                    </span>
                    <span className="text-sm font-medium text-ink">{f}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ROOM QUICK FACTS */}
      <section className="container-site py-24 lg:py-32">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { icon: Users, label: "Guests", value: "2–4 per room" },
            { icon: BedDouble, label: "Beds", value: "King / Extra bed" },
            { icon: Maximize2, label: "Room size", value: "280–400 sq ft" },
          ].map((f, i) => (
            <Reveal key={f.label} direction="up" delay={i * 100}>
              <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-8 text-center">
                <f.icon className="size-8 text-primary" />
                <p className="text-sm uppercase tracking-widest text-ink-soft">{f.label}</p>
                <p className="text-xl font-medium text-ink">{f.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-site pb-24">
        <Reveal direction="up" className="relative overflow-hidden rounded-3xl bg-ink p-10 text-center shadow-lift md:p-16">
          <p className="eyebrow !text-gold">Ready to book?</p>
          <h2 className="mt-3 text-4xl font-medium leading-tight text-snow md:text-5xl">Reserve your room on WhatsApp</h2>
          <p className="mx-auto mt-4 max-w-md text-snow/80">Tell us your dates and room preference — we reply within minutes with availability and the best direct-booking price.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <WhatsAppButton size="lg" />
            <CallButton size="lg" variant="light" />
          </div>
        </Reveal>
      </section>
    </>
  );
}
