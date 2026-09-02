import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, MessageCircle, Clock, Navigation } from "lucide-react";
import { images, HOTEL, whatsappUrl, WHATSAPP_MESSAGE } from "@/lib/hotel";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { WhatsAppButton, CallButton, DirectionsButton } from "@/components/site/Buttons";

const TITLE = "Contact | GuruChhaya Hotel and Cottages, Manali";
const DESC =
  "Contact GuruChhaya Hotel and Cottages, Manali. Call or WhatsApp +91 98177 77006 for room availability and bookings. Hadimba Temple Road, Manali, HP 175131.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        image={images.balconyTable}
        alt="Private balcony at GuruChhaya Hotel with cane chairs and cedar forest view"
        eyebrow="Contact"
        title="Get in touch with GuruChhaya"
        subtitle="We reply within minutes on WhatsApp — for bookings, enquiries, travel help or anything else you need."
      >
        <WhatsAppButton size="lg" />
        <CallButton size="lg" variant="light" />
      </PageHero>

      {/* CONTACT CARDS */}
      <section className="container-site py-24 lg:py-32">
        <Reveal direction="up">
          <SectionHeading align="center" eyebrow="Reach Us" title="Three easy ways to connect" />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {/* WhatsApp */}
          <Reveal direction="up" delay={0}>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col items-center gap-4 rounded-3xl border border-border bg-card p-8 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="grid size-16 place-items-center rounded-2xl bg-whatsapp text-whatsapp-foreground transition-transform duration-500 group-hover:scale-110">
                <MessageCircle className="size-7" />
              </span>
              <div>
                <p className="text-lg font-semibold text-ink">WhatsApp</p>
                <p className="mt-1 text-sm text-ink-soft">Chat with us for availability & booking</p>
                <p className="mt-3 font-medium text-primary">{HOTEL.phone}</p>
              </div>
            </a>
          </Reveal>

          {/* Call */}
          <Reveal direction="up" delay={120}>
            <a
              href={`tel:${HOTEL.phoneTel}`}
              className="group flex h-full flex-col items-center gap-4 rounded-3xl border border-border bg-card p-8 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="grid size-16 place-items-center rounded-2xl bg-primary text-primary-foreground transition-transform duration-500 group-hover:scale-110">
                <Phone className="size-7" />
              </span>
              <div>
                <p className="text-lg font-semibold text-ink">Call Now</p>
                <p className="mt-1 text-sm text-ink-soft">Speak with our front desk directly</p>
                <p className="mt-3 font-medium text-primary">{HOTEL.phone}</p>
              </div>
            </a>
          </Reveal>

          {/* Directions */}
          <Reveal direction="up" delay={240}>
            <a
              href={HOTEL.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col items-center gap-4 rounded-3xl border border-border bg-card p-8 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="grid size-16 place-items-center rounded-2xl bg-pine text-accent-foreground transition-transform duration-500 group-hover:scale-110">
                <Navigation className="size-7" />
              </span>
              <div>
                <p className="text-lg font-semibold text-ink">Get Directions</p>
                <p className="mt-1 text-sm text-ink-soft">Open Google Maps to navigate here</p>
                <p className="mt-3 font-medium text-primary">Hadimba Temple Road</p>
              </div>
            </a>
          </Reveal>
        </div>
      </section>

      {/* ADDRESS + DETAILS */}
      <section className="bg-sand/60 py-24 lg:py-32">
        <div className="container-site grid gap-14 lg:grid-cols-2">
          <Reveal direction="left">
            <SectionHeading eyebrow="Visit Us" title="GuruChhaya Hotel and Cottages" />
            <div className="mt-6 space-y-5">
              <p className="flex items-start gap-3 text-ink-soft">
                <MapPin className="mt-1 size-5 shrink-0 text-primary" />
                <span>
                  {HOTEL.addressLines[0]}<br />
                  {HOTEL.addressLines[1]}
                </span>
              </p>
              <p className="flex items-center gap-3 text-ink-soft">
                <Phone className="size-5 shrink-0 text-primary" />
                <a href={`tel:${HOTEL.phoneTel}`} className="hover:text-primary">{HOTEL.phone}</a>
              </p>
              <p className="flex items-center gap-3 text-ink-soft">
                <MessageCircle className="size-5 shrink-0 text-primary" />
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-primary">WhatsApp us</a>
              </p>
              <p className="flex items-center gap-3 text-ink-soft">
                <Clock className="size-5 shrink-0 text-primary" />
                Check-in 12:00 PM · Check-out 11:00 AM · Front desk open 24 hours
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppButton size="lg" />
              <CallButton size="lg" variant="outline" />
              <DirectionsButton size="lg" variant="outline" />
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

      {/* WHATSAPP MESSAGE PREVIEW */}
      <section className="container-site py-24">
        <Reveal direction="up" className="mx-auto max-w-2xl rounded-3xl border border-border bg-card p-8 text-center shadow-soft md:p-12">
          <p className="eyebrow">Quick Enquiry</p>
          <h2 className="mt-3 text-3xl font-medium text-ink md:text-4xl">Send us a WhatsApp message</h2>
          <p className="mt-4 rounded-2xl bg-sand/60 p-5 text-sm italic text-ink-soft">
            "{WHATSAPP_MESSAGE}"
          </p>
          <div className="mt-8">
            <WhatsAppButton size="lg" label="Open WhatsApp" />
          </div>
        </Reveal>
      </section>
    </>
  );
}
