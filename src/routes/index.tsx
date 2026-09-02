import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Star,
  MapPin,
  Wifi,
  Car,
  Mountain,
  UtensilsCrossed,
  ChevronDown,
  Flame,
  BellRing,
  Clock,
  Shirt,
  Stethoscope,
  Compass,
  Plane,
  Sun,
  Zap,
} from "lucide-react";
import { images, rooms, HOTEL, attractions, amenities } from "@/lib/hotel";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/PageHero";
import { WhatsAppButton, CallButton } from "@/components/site/Buttons";

const TITLE = "GuruChhaya Hotel and Cottages | Mountain-View Hotel in Manali";
const DESC =
  "Boutique 3-star hotel near Hadimba Temple, Manali. Cedar-wood rooms with private balconies, snow-peak views, restaurant, free Wi-Fi & parking. Book on WhatsApp +91 98177 77006.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
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

const highlights = [
  { icon: Mountain, label: "Snow-peak views" },
  { icon: Wifi, label: "Free Wi-Fi" },
  { icon: Car, label: "Free parking" },
  { icon: UtensilsCrossed, label: "In-house restaurant" },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-svh items-center overflow-hidden">
        <img
          src={images.valleyDusk}
          alt="GuruChhaya Hotel and Cottages glowing at dusk among snow-covered deodar trees in Manali"
          className="absolute inset-0 size-full animate-ken-burns object-cover"
          fetchPriority="high"
        />
        <div className="overlay-hero absolute inset-0" />
        <div className="container-site relative pb-28 pt-40">
          <p className="eyebrow animate-rise !text-gold">Hadimba Temple Road · Manali</p>
          <h1 className="mt-5 max-w-4xl animate-rise text-5xl font-medium leading-[1.02] text-snow md:text-7xl lg:text-8xl [animation-delay:120ms]">
            A Peaceful Mountain Stay in the Heart of Manali
          </h1>
          <p className="mt-6 max-w-xl animate-rise text-lg leading-relaxed text-snow/85 [animation-delay:240ms]">
            Tucked beneath the deodar forest on Hadimba Temple Road, GuruChhaya Hotel and Cottages offers cedar-wood
            rooms with private balconies and sweeping Himalayan mountain views — five minutes from Hadimba Devi Temple
            and a short stroll from Mall Road.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 animate-rise [animation-delay:360ms]">
            <WhatsAppButton size="lg" />
            <CallButton size="lg" variant="light" />
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 animate-rise [animation-delay:480ms]">
            <span className="flex items-center gap-2 text-snow">
              <Star className="size-4 fill-gold text-gold" />
              <span className="font-semibold">{HOTEL.rating}</span>
              <span className="text-snow/70">/ 5 from {HOTEL.reviews}+ reviews</span>
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-gold/20 px-3 py-1 text-sm font-semibold text-gold">
              <Star className="size-3.5 fill-current" />
              <Star className="size-3.5 fill-current" />
              <Star className="size-3.5 fill-current" />
              <span className="ml-1">3-Star Hotel</span>
            </span>
            {highlights.map((h) => (
              <span key={h.label} className="flex items-center gap-2 text-sm text-snow/80">
                <h.icon className="size-4 text-gold" /> {h.label}
              </span>
            ))}
          </div>
        </div>
        <a
          href="#welcome"
          aria-label="Scroll to content"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float text-snow/70 transition-colors hover:text-snow"
        >
          <ChevronDown className="size-7" />
        </a>
      </section>

      {/* WELCOME */}
      <section id="welcome" className="container-site grid items-center gap-14 py-24 lg:grid-cols-2 lg:py-32">
        <Reveal direction="left" className="relative">
          <div className="img-zoom rounded-3xl shadow-lift">
            <img src={images.hotelExterior} alt="GuruChhaya Hotel and Cottages exterior with wooden balconies and green roofs" className="aspect-[4/5] w-full object-cover" loading="lazy" />
          </div>
          <div className="glass absolute -bottom-6 -right-4 hidden max-w-[260px] rounded-2xl p-5 shadow-soft sm:block lg:-right-10">
            <p className="font-display text-4xl font-medium text-ink">300 m</p>
            <p className="mt-1 text-sm text-ink-soft">from the ancient Hadimba Devi Temple, hidden in the deodar grove.</p>
          </div>
        </Reveal>
        <Reveal direction="right" delay={120}>
          <SectionHeading
            eyebrow="Welcome to GuruChhaya"
            title="A cedar-wood retreat where the forest meets the town"
            text="Set on the quiet stretch of Hadimba Temple Road next to IL Forno, GuruChhaya Hotel and Cottages blends warm Himachali wood interiors with modern comfort. Every room opens onto a private balcony framed by pine trees and the Pir Panjal peaks."
          />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["Private balconies", "Cane chairs, morning chai and mountain air."],
              ["Snowfall winters", "Watch the courtyard turn white from your window."],
              ["Home-style dining", "Himachali, North Indian and continental fare."],
              ["Walk everywhere", "Temple, museum, cafés and Mall Road nearby."],
            ].map(([t, d]) => (
              <li key={t} className="rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-soft">
                <p className="font-semibold text-ink">{t}</p>
                <p className="mt-1 text-sm text-ink-soft">{d}</p>
              </li>
            ))}
          </ul>
          <Link to="/about" className="group mt-8 inline-flex items-center gap-2 font-semibold text-primary">
            Our story <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </section>

      {/* ROOMS PREVIEW */}
      <section className="bg-sand/60 py-24 lg:py-32">
        <div className="container-site">
          <Reveal direction="up" className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Rooms & Cottages" title="Rooms made of wood, light and views" />
            <Link to="/rooms" className="group inline-flex items-center gap-2 font-semibold text-primary">
              View all rooms <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {rooms.map((room, i) => (
              <Reveal key={room.slug} direction="up" delay={i * 120}>
                <Link to="/rooms" className="group block overflow-hidden rounded-3xl bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                  <div className="img-zoom relative aspect-[4/3]">
                    <img src={room.image} alt={`${room.name} at GuruChhaya Hotel Manali`} className="size-full object-cover" loading="lazy" />
                    <div className="overlay-card absolute inset-0" />
                    <p className="absolute bottom-4 left-5 text-xs uppercase tracking-widest text-snow/90">{room.guests}</p>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-medium text-ink">{room.name}</h3>
                    <p className="mt-2 text-sm text-ink-soft">{room.tagline}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Explore <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MOUNTAIN-VIEW SECTION */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden">
        <img src={images.manaliView} alt="Panoramic snow-covered Manali mountains visible from GuruChhaya Hotel" className="absolute inset-0 size-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="container-site relative py-24">
          <Reveal direction="right" className="glass-dark max-w-xl rounded-3xl p-8 md:p-12">
            <p className="eyebrow !text-gold">Mountain Views</p>
            <h2 className="mt-4 text-4xl font-medium leading-tight text-snow md:text-5xl">
              The Himalayas are your wallpaper
            </h2>
            <p className="mt-5 leading-relaxed text-snow/80">
              From your private balcony, watch the sun climb over the Pir Panjal range. Snow peaks, cedar forest and
              the Beas valley unfold in every direction — this is the Manali postcard brought to life, right outside
              your door.
            </p>
            <div className="mt-8">
              <WhatsAppButton label="Book a Mountain-View Room" message="Hello GuruChhaya, I'd like to book a mountain-view room. Please share availability and rates." />
            </div>
          </Reveal>
        </div>
      </section>

      {/* AMENITIES SECTION */}
      <section className="container-site py-24 lg:py-32">
        <Reveal direction="up">
          <SectionHeading align="center" eyebrow="Amenities" title="Everything you need, wrapped in cedar warmth" />
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.slice(0, 9).map((a, i) => {
            const Icon = amenityIcons[a.icon] ?? Wifi;
            return (
              <Reveal key={a.title} direction="up" delay={(i % 3) * 100}>
                <div className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-ink">{a.title}</p>
                    <p className="mt-1 text-sm text-ink-soft">{a.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <Link to="/amenities" className="group inline-flex items-center gap-2 font-semibold text-primary">
            See all amenities <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* DINING / RESTAURANT SECTION */}
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

      {/* CINEMATIC BAND */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden">
        <img src={images.snowNight} alt="GuruChhaya Hotel at night under heavy snowfall in Manali" className="absolute inset-0 size-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="container-site relative py-24">
          <Reveal direction="right" className="glass-dark max-w-xl rounded-3xl p-8 md:p-12">
            <p className="eyebrow !text-gold">Winter at GuruChhaya</p>
            <h2 className="mt-4 text-4xl font-medium leading-tight text-snow md:text-5xl">
              When Manali turns white, the lodge turns golden
            </h2>
            <p className="mt-5 leading-relaxed text-snow/80">
              Heaters humming, chai steaming, snow piling gently on the balcony rail. December to February here is the
              stuff of postcards — and our team keeps the roads, rooms and bonfire ready.
            </p>
            <div className="mt-8">
              <WhatsAppButton label="Plan a Winter Stay" message="Hello GuruChhaya, I'd like to plan a winter stay in Manali. Please share availability." />
            </div>
          </Reveal>
        </div>
      </section>

      {/* EXPERIENCE GRID */}
      <section className="container-site py-24 lg:py-32">
        <Reveal direction="up">
          <SectionHeading align="center" eyebrow="The Experience" title="Slow mornings, forest walks, warm evenings" />
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {[
            { img: images.balconyTable, t: "Balcony breakfasts", d: "Every room has a wooden balcony facing pine and peaks." },
            { img: images.restaurant, t: "The dining hall", d: "Wood-panelled, warm and serving Himachali siddu to Italian." },
            { img: images.manaliView, t: "Manali at your feet", d: "Snow-lined town views from the upper floors." },
          ].map((c, i) => (
            <Reveal key={c.t} direction="up" delay={i * 120} as="figure" className="group relative overflow-hidden rounded-3xl shadow-soft">
              <div className="img-zoom aspect-[3/4]">
                <img src={c.img} alt={c.t} className="size-full object-cover" loading="lazy" />
              </div>
              <figcaption className="overlay-card absolute inset-0 flex flex-col justify-end p-7">
                <p className="text-2xl font-medium text-snow font-display">{c.t}</p>
                <p className="mt-1 max-w-xs text-sm text-snow/80">{c.d}</p>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </section>

      {/* NEARBY ATTRACTIONS */}
      <section className="bg-sand/60 py-24 lg:py-32">
        <div className="container-site">
          <Reveal direction="up">
            <SectionHeading align="center" eyebrow="Nearby Attractions" title="Everything worth seeing is a short walk away" />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {attractions.map((a, i) => (
              <Reveal key={a.name} direction="up" delay={(i % 3) * 100}>
                <div className="group rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft">
                  <div className="flex items-center justify-between gap-3">
                    <MapPin className="size-5 text-primary" />
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{a.distance}</span>
                  </div>
                  <p className="mt-4 font-semibold text-ink">{a.name}</p>
                  <p className="mt-1 text-sm text-ink-soft">{a.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION TEASER */}
      <section className="bg-ink py-24 text-snow lg:py-32">
        <div className="container-site grid items-center gap-14 lg:grid-cols-2">
          <Reveal direction="left">
            <p className="eyebrow !text-gold">Location</p>
            <h2 className="mt-3 text-4xl font-medium leading-tight md:text-5xl">Quiet street, walking distance to everything</h2>
            <p className="mt-4 flex items-start gap-2 text-snow/75">
              <MapPin className="mt-1 size-4 shrink-0 text-gold" /> {HOTEL.address}
            </p>
            <ul className="mt-8 divide-y divide-snow/10 border-y border-snow/10">
              {attractions.slice(0, 4).map((a) => (
                <li key={a.name} className="flex items-center justify-between gap-4 py-4">
                  <span>{a.name}</span>
                  <span className="shrink-0 rounded-full bg-snow/10 px-3 py-1 text-xs font-semibold text-gold">{a.distance}</span>
                </li>
              ))}
            </ul>
            <Link to="/location" className="group mt-8 inline-flex items-center gap-2 font-semibold text-gold">
              Map & directions <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
          <Reveal direction="right" delay={150} className="img-zoom rounded-3xl shadow-lift">
            <img src={images.exteriorNight} alt="Snow-covered entrance steps of GuruChhaya Hotel at night" className="aspect-[4/3] w-full object-cover" loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="container-site py-24">
        <Reveal direction="up" className="relative overflow-hidden rounded-3xl shadow-lift">
          <img src={images.balconyChairs} alt="Sunset balcony with cane chairs at GuruChhaya Hotel" className="absolute inset-0 size-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/20" />
          <div className="relative p-10 md:p-16">
            <p className="eyebrow !text-gold">Reserve directly</p>
            <h2 className="mt-3 max-w-lg text-4xl font-medium leading-tight text-snow md:text-5xl">Best rates when you book with us on WhatsApp</h2>
            <p className="mt-4 max-w-md text-snow/80">Tell us your dates and group size — we reply within minutes with availability and a direct-booking price.</p>
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
