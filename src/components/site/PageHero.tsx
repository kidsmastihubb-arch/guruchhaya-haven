import type { ReactNode } from "react";

export function PageHero({
  image,
  alt,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative flex min-h-[62vh] items-end overflow-hidden">
      <img src={image} alt={alt} className="absolute inset-0 size-full animate-ken-burns object-cover" fetchPriority="high" />
      <div className="overlay-hero absolute inset-0" />
      <div className="container-site relative pb-16 pt-40">
        <p className="eyebrow animate-rise !text-gold">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl animate-rise text-5xl font-medium leading-[1.05] text-snow md:text-7xl [animation-delay:120ms]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-xl animate-rise text-base leading-relaxed text-snow/80 md:text-lg [animation-delay:240ms]">{subtitle}</p>
        )}
        {children && <div className="mt-8 flex flex-wrap gap-3 animate-rise [animation-delay:360ms]">{children}</div>}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-medium leading-tight text-ink md:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg">{text}</p>}
    </div>
  );
}
