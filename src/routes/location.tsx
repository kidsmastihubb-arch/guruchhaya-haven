import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Navigation, Clock, Plane, Bus, Building, Landmark } from "lucide-react";
import { images, HOTEL, attractions } from "@/lib/hotel";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { WhatsAppButton, CallButton, DirectionsButton } from "@/components/site/Buttons";

const TITLE = "Location | GuruChhaya Hotel and Cottages, Manali";
const DESC =
  "GuruChhaya Hotel and Cottages, Near IL Forno Restaurant, Hadimba Temple Road, Manali, HP 175131. Walking distance to Hadimba Temple, 2 km from Mall Road, 52 km from Kullu-Manali Airport.";

export const Route = createFileRoute("/location")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/location" },
    ],
    links: [{ rel: "canonical", href: "/location" }],
  }),
  component: LocationPage,
});

const attractionIcons = [Landmark, Building, Building, Bus, Plane];

function LocationPage() {
  return (
    <>
      <PageHero
        image={images.exteriorNight}
        alt="Night view of GuruChhaya Hotel and Cottages exterior with fresh snow in Manali"
        eyebrow="Location"
        title="Find us on Hadimba Temple Road, Manali"
        subtitle="Near IL Forno Restaurant — a quiet street beneath the deodar forest, walking distance to Hadimba Devi Temple and minutes from Mall Road."
      >
        <DirectionsButton size="lg" />
        <CallButton size="lg" variant="light" />
      </PageHero>

      {/* ADDRESS + MAP */}
      <section className="container-site py-24 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-2">
          <Reveal direction="left">
            <SectionHeading
              eyebrow="Our Address"
              title="GuruChhaya Hotel and Cottages"
            />
            <div className="mt-6 space-y-4">
              <p className="flex items-start gap-3 text-ink-soft">
                <MapPin className="mt-1 size-5 shrink-0 text-primary" />
                <span>
                  {HOTEL.addressLines[0]}<br />
                  {HOTEL.addressLines[1]}
                </span>
              </p>
              <p className="flex items-center gap-3 text-ink-soft">
                <Clock className="size-5 shrink-0 text-primary" />
                Check-in 12:00 PM · Check-out 11:00 AM
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <DirectionsButton />
              <WhatsAppButton label="Enquire on WhatsApp" />
            </div>

            {/* Nearby attractions */}
            <div className="mt-12">
              <p className="eyebrow">Nearby Attractions</p>
              <ul className="mt-5 space-y-4">
                {attractions.map((a, i) => {
                  const Icon = attractionIcons[i] ?? Landmark;
                  return (
                    <Reveal key={a.name} direction="up" delay={i * 80}>
                      <li className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-soft">
                        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                          <Icon className="size-5" />
                        </span>
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <p className="font-semibold text-ink">{a.name}</p>
                            <span className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-semibold text-primary">{a.distance}</span>
                          </div>
                          <p className="mt-1 text-sm text-ink-soft">{a.note}</p>
                        </div>
                      </li>
                    </Reveal>
                  );
                })}
              </ul>
            </div>
          </Reveal>

          <Reveal direction="right" delay={150} className="overflow-hidden rounded-3xl shadow-lift">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3374.4542434657687!2d77.18020931089367!3d32.24585841083276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390487fca8f2daf1%3A0x223f7113d64b66de!2sGuruChhaya%20Hotel%20and%20Cottages!5e0!3m2!1sen!2sin!4v1788339914249!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Google Maps location of GuruChhaya Hotel and Cottages, Manali"
            />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="container-site pb-24">
        <Reveal direction="up" className="relative overflow-hidden rounded-3xl bg-ink p-10 text-center shadow-lift md:p-16">
          <p className="eyebrow !text-gold">Getting here</p>
          <h2 className="mt-3 text-4xl font-medium leading-tight text-snow md:text-5xl">Need directions or a pickup?</h2>
          <p className="mx-auto mt-4 max-w-md text-snow/80">We can arrange an airport shuttle from Kullu-Manali Airport or guide you from Mall Road — just message us.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <WhatsAppButton size="lg" />
            <DirectionsButton size="lg" variant="light" />
            <CallButton size="lg" variant="light" />
          </div>
        </Reveal>
      </section>
    </>
  );
}
