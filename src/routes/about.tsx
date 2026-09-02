import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star, MapPin, Heart, Users, Mountain, Coffee, UtensilsCrossed } from "lucide-react";
import { images, HOTEL } from "@/lib/hotel";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { WhatsAppButton, CallButton } from "@/components/site/Buttons";

const TITLE = "About | GuruChhaya Hotel and Cottages, Manali";
const DESC =
  "Learn about GuruChhaya Hotel and Cottages — a peaceful, family-friendly mountain-view hotel on Hadimba Temple Road, Manali. Warm hospitality, comfortable rooms and scenic Himalayan views.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Heart, title: "Warm Hospitality", desc: "Our team treats every guest like family — from welcome chai to travel tips and late check-out help." },
  { icon: Mountain, title: "Scenic Location", desc: "Set beneath the deodar forest on Hadimba Temple Road, surrounded by snow peaks and cedar trees." },
  { icon: Users, title: "Family-Friendly", desc: "Spacious suites, extra beds, children's meals and safe walkable streets for families travelling together." },
  { icon: Coffee, title: "Comfortable Rooms", desc: "Pine-panelled interiors, private balconies, room heaters and 24×7 hot water for year-round comfort." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        image={images.hotelExterior}
        alt="GuruChhaya Hotel and Cottages wooden exterior with balconies on Hadimba Temple Road, Manali"
        eyebrow="About Us"
        title="A peaceful Himalayan retreat near Hadimba Temple"
        subtitle="Family-run, cedar-warm and quietly tucked into the deodar forest — GuruChhaya Hotel and Cottages is where Manali slows down."
      >
        <WhatsAppButton size="lg" />
        <CallButton size="lg" variant="light" />
      </PageHero>

      {/* STORY */}
      <section className="container-site grid items-center gap-14 py-24 lg:grid-cols-2 lg:py-32">
        <Reveal direction="left" className="img-zoom rounded-3xl shadow-lift">
          <img src={images.balconyTable} alt="Private balcony at GuruChhaya Hotel with cane chairs and cedar forest view" className="aspect-[4/5] w-full object-cover" loading="lazy" />
        </Reveal>
        <Reveal direction="right" delay={120}>
          <SectionHeading
            eyebrow="Our Story"
            title="Where the forest meets the town"
            text="GuruChhaya Hotel and Cottages was born from a simple idea — a quiet, comfortable place on Hadimba Temple Road where families, couples and solo travellers could experience the real Manali. Not the crowded Mall Road, not the distant suburbs — just the sweet spot beneath the ancient deodar grove, steps from the Hadimba Devi Temple."
          />
          <p className="mt-5 leading-relaxed text-ink-soft">
            Every room is finished in warm Himalayan pine, with ambient lighting, plush bedding and a private balcony
            that opens straight onto the cedar forest and snow peaks. Our in-house kitchen serves home-style
            Himachali, North Indian and continental food, and our front desk is staffed around the clock to help with
            treks, cabs, airport shuttles and anything else you need.
          </p>
          <p className="mt-5 leading-relaxed text-ink-soft">
            Whether you're here for a romantic winter getaway, a family summer holiday or a base camp for Rohtang and
            Solang Valley adventures — you'll find warm rooms, helpful people and that unbeatable mountain air.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppButton label="Enquire on WhatsApp" />
            <CallButton variant="outline" />
          </div>
        </Reveal>
      </section>

      {/* VALUES */}
      <section className="bg-sand/60 py-24 lg:py-32">
        <div className="container-site">
          <Reveal direction="up">
            <SectionHeading align="center" eyebrow="What We Stand For" title="The things that make GuruChhaya feel like home" />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} direction="up" delay={(i % 4) * 100}>
                <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft">
                  <span className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <v.icon className="size-5" />
                  </span>
                  <p className="mt-4 font-semibold text-ink">{v.title}</p>
                  <p className="mt-2 text-sm text-ink-soft">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RATING BAND */}
      <section className="bg-ink py-20 text-snow">
        <div className="container-site grid items-center gap-8 text-center sm:grid-cols-3">
          {[
            { value: HOTEL.rating.toString(), label: `Guest rating from ${HOTEL.reviews}+ reviews` },
            { value: `${HOTEL.stars}-star`, label: "Hotel classification" },
            { value: "300 m", label: "From Hadimba Devi Temple" },
          ].map((s, i) => (
            <Reveal key={s.label} direction="up" delay={i * 100}>
              <div>
                <p className="font-display text-5xl font-medium text-gold">{s.value}</p>
                <p className="mt-2 text-sm text-snow/70">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DINING TEASER */}
      <section className="container-site grid items-center gap-14 py-24 lg:grid-cols-2 lg:py-32">
        <Reveal direction="right" delay={120} className="order-2 lg:order-1">
          <SectionHeading
            eyebrow="Dining"
            title="Home-style meals, mountain flavours"
            text="Our restaurant serves Indian, North Indian and local Himachali cuisine — with plenty of vegetarian options and dietary accommodations. Room service is available throughout your stay."
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {["Himachali siddu & dham", "North Indian thali", "Continental breakfast", "Pure vegetarian kitchen", "Jain & vegan on request", "Room service 24×7"].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-ink">
                <UtensilsCrossed className="size-4 text-primary" /> {item}
              </li>
            ))}
          </ul>
          <Link to="/amenities" className="group mt-8 inline-flex items-center gap-2 font-semibold text-primary">
            See all amenities <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
        <Reveal direction="left" className="img-zoom order-1 rounded-3xl shadow-lift lg:order-2">
          <img src={images.restaurant} alt="Wood-panelled restaurant at GuruChhaya Hotel Manali" className="aspect-[4/3] w-full object-cover" loading="lazy" />
        </Reveal>
      </section>

      {/* CTA */}
      <section className="container-site pb-24">
        <Reveal direction="up" className="relative overflow-hidden rounded-3xl shadow-lift">
          <img src={images.snowCourtyard} alt="Snow-covered courtyard of GuruChhaya Hotel and Cottages" className="absolute inset-0 size-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/20" />
          <div className="relative p-10 md:p-16">
            <p className="eyebrow !text-gold">Come stay with us</p>
            <h2 className="mt-3 max-w-lg text-4xl font-medium leading-tight text-snow md:text-5xl">Your peaceful Manali getaway is one WhatsApp away</h2>
            <p className="mt-4 max-w-md text-snow/80">We reply within minutes with availability, rates and any travel help you need.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppButton size="lg" />
              <CallButton size="lg" variant="light" />
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
