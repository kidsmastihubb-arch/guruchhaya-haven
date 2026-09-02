import { createFileRoute } from "@tanstack/react-router";
import {
  Wifi,
  Car,
  Mountain,
  Sun,
  UtensilsCrossed,
  BellRing,
  Zap,
  Flame,
  Clock,
  Shirt,
  Stethoscope,
  Compass,
  Plane,
} from "lucide-react";
import { images, amenities, HOTEL } from "@/lib/hotel";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { WhatsAppButton, CallButton } from "@/components/site/Buttons";

const TITLE = "Amenities | GuruChhaya Hotel and Cottages, Manali";
const DESC =
  "Free Wi-Fi, free parking, mountain views, private balconies, restaurant, room service, power backup, outdoor fireplace, 24-hour front desk, laundry, doctor on call, tour & trek assistance, airport shuttle.";

export const Route = createFileRoute("/amenities")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/amenities" },
    ],
    links: [{ rel: "canonical", href: "/amenities" }],
  }),
  component: AmenitiesPage,
});

const amenityIcons: Record<string, typeof Wifi> = {
  Wifi,
  Car,
  Mountain,
  Sun,
  UtensilsCrossed,
  BellRing,
  Zap,
  Flame,
  Clock,
  Shirt,
  Stethoscope,
  Compass,
  Plane,
};

function AmenitiesPage() {
  return (
    <>
      <PageHero
        image={images.balconyChairs}
        alt="Golden-hour balcony with cane chairs overlooking the Manali valley and snow peaks"
        eyebrow="Amenities"
        title="Everything you need for a comfortable mountain stay"
        subtitle="From free Wi-Fi and parking to an outdoor bonfire and 24-hour front desk — we've thought of every detail so you can simply relax."
      >
        <WhatsAppButton size="lg" />
        <CallButton size="lg" variant="light" />
      </PageHero>

      {/* AMENITY CARDS */}
      <section className="container-site py-24 lg:py-32">
        <Reveal direction="up">
          <SectionHeading align="center" eyebrow="Hotel Facilities" title="Thirteen reasons you'll feel right at home" />
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((a, i) => {
            const Icon = amenityIcons[a.icon] ?? Wifi;
            return (
              <Reveal key={a.title} direction="up" delay={(i % 3) * 100}>
                <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                  <span className="grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-6" />
                  </span>
                  <p className="mt-5 text-lg font-semibold text-ink">{a.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{a.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* DINING SECTION */}
      <section className="bg-sand/60 py-24 lg:py-32">
        <div className="container-site grid items-center gap-14 lg:grid-cols-2">
          <Reveal direction="left" className="img-zoom rounded-3xl shadow-lift">
            <img src={images.restaurant} alt="In-house restaurant with wooden ceiling and stone walls at GuruChhaya Hotel" className="aspect-[4/3] w-full object-cover" loading="lazy" />
          </Reveal>
          <Reveal direction="right" delay={120}>
            <SectionHeading
              eyebrow="Dining"
              title="A warm hall, a full plate, mountain flavours"
              text="Our in-house restaurant serves Indian, North Indian and local Himachali cuisine — from siddu and dham to continental favourites. Vegetarian options are always available, and our kitchen happily accommodates dietary requests."
            />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["Himachali specials", "Siddu, dham, chana madra and local fare."],
                ["Pure vegetarian", "Abundant veg options for every meal."],
                ["Dietary care", "Jain, vegan and allergy-friendly on request."],
                ["Room service", "Hot meals delivered to your door."],
              ].map(([t, d]) => (
                <li key={t} className="rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-soft">
                  <p className="font-semibold text-ink">{t}</p>
                  <p className="mt-1 text-sm text-ink-soft">{d}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <WhatsAppButton label="Ask About Dining" message="Hello GuruChhaya, I'd like to know more about the dining options at your hotel." />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="container-site py-24">
        <Reveal direction="up" className="relative overflow-hidden rounded-3xl bg-ink p-10 text-center shadow-lift md:p-16">
          <p className="eyebrow !text-gold">Ready to experience it all?</p>
          <h2 className="mt-3 text-4xl font-medium leading-tight text-snow md:text-5xl">Book your stay on WhatsApp</h2>
          <p className="mx-auto mt-4 max-w-md text-snow/80">We reply within minutes with availability and the best direct-booking price.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <WhatsAppButton size="lg" />
            <CallButton size="lg" variant="light" />
          </div>
        </Reveal>
      </section>
    </>
  );
}
