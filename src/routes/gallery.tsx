import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { images, galleryItems, HOTEL } from "@/lib/hotel";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { WhatsAppButton, CallButton } from "@/components/site/Buttons";

const TITLE = "Gallery | GuruChhaya Hotel and Cottages, Manali";
const DESC =
  "Photo gallery of GuruChhaya Hotel and Cottages — cedar-wood rooms, private balconies, snow-covered courtyard, restaurant and panoramic Manali mountain views.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? prev : (prev + 1) % galleryItems.length));
  }, []);
  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? prev : (prev - 1 + galleryItems.length) % galleryItems.length));
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  return (
    <>
      <PageHero
        image={images.snowCourtyard}
        alt="Snow-covered courtyard of GuruChhaya Hotel and Cottages in winter Manali"
        eyebrow="Gallery"
        title="Moments from GuruChhaya"
        subtitle="From snow-dusted balconies to golden-hour valley views — a glimpse of what awaits you at our Manali hotel."
      >
        <WhatsAppButton size="lg" />
        <CallButton size="lg" variant="light" />
      </PageHero>

      {/* MASONRY GALLERY */}
      <section className="container-site py-24 lg:py-32">
        <Reveal direction="up">
          <SectionHeading align="center" eyebrow="Photo Gallery" title="The hotel, the rooms, the mountains" />
        </Reveal>
        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {galleryItems.map((item, i) => (
            <Reveal key={i} direction="up" delay={(i % 3) * 80}>
              <button
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="group relative block w-full overflow-hidden rounded-2xl shadow-soft transition-shadow hover:shadow-lift"
              >
                <div className="img-zoom">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className={`w-full object-cover ${item.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/30" />
                <div className="absolute inset-0 flex items-end p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <p className="text-sm font-medium text-snow">{item.alt}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-site pb-24">
        <Reveal direction="up" className="relative overflow-hidden rounded-3xl shadow-lift">
          <img src={images.valleyDusk} alt="GuruChhaya Hotel glowing at dusk among snow-covered deodar trees" className="absolute inset-0 size-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/20" />
          <div className="relative p-10 md:p-16">
            <p className="eyebrow !text-gold">See it in person</p>
            <h2 className="mt-3 max-w-lg text-4xl font-medium leading-tight text-snow md:text-5xl">Book your stay and make your own memories</h2>
            <p className="mt-4 max-w-md text-snow/80">We reply within minutes on WhatsApp with availability and rates.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppButton size="lg" />
              <CallButton size="lg" variant="light" />
            </div>
          </div>
        </Reveal>
      </section>

      {/* LIGHTBOX */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4"
          onClick={closeLightbox}
        >
          <button
            type="button"
            aria-label="Close gallery"
            onClick={closeLightbox}
            className="absolute right-5 top-5 grid size-12 place-items-center rounded-full bg-snow/10 text-snow transition-colors hover:bg-snow/20"
          >
            <X className="size-6" />
          </button>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 grid size-12 place-items-center rounded-full bg-snow/10 text-snow transition-colors hover:bg-snow/20 md:left-8"
          >
            <ChevronLeft className="size-6" />
          </button>
          <figure className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryItems[lightboxIndex].src}
              alt={galleryItems[lightboxIndex].alt}
              className="max-h-[85vh] w-auto rounded-2xl object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-snow/70">
              {galleryItems[lightboxIndex].alt}
            </figcaption>
          </figure>
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 grid size-12 place-items-center rounded-full bg-snow/10 text-snow transition-colors hover:bg-snow/20 md:right-8"
          >
            <ChevronRight className="size-6" />
          </button>
        </div>
      )}
    </>
  );
}
