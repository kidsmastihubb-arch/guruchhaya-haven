import { MessageCircle, Phone, Navigation } from "lucide-react";
import { HOTEL, whatsappUrl } from "@/lib/hotel";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

const sizes = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-7 text-sm",
  lg: "h-14 px-9 text-base",
};

type Size = keyof typeof sizes;

export function WhatsAppButton({
  size = "md",
  className,
  label = "Book Your Stay",
  message,
}: {
  size?: Size;
  className?: string;
  label?: string;
  message?: string;
}) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        base,
        sizes[size],
        "bg-whatsapp text-whatsapp-foreground shadow-soft hover:-translate-y-0.5 hover:shadow-lift hover:brightness-105",
        className,
      )}
    >
      <MessageCircle className="size-[1.1em]" />
      {label}
    </a>
  );
}

export function CallButton({ size = "md", className, variant = "outline" }: { size?: Size; className?: string; variant?: "outline" | "light" | "solid" }) {
  return (
    <a
      href={`tel:${HOTEL.phoneTel}`}
      className={cn(
        base,
        sizes[size],
        variant === "outline" && "border border-primary/30 bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
        variant === "light" && "glass-dark text-snow hover:bg-snow hover:text-ink",
        variant === "solid" && "bg-primary text-primary-foreground hover:bg-cedar",
        className,
      )}
    >
      <Phone className="size-[1.1em]" />
      Call Now
    </a>
  );
}

export function DirectionsButton({ size = "md", className, variant = "outline" }: { size?: Size; className?: string; variant?: "outline" | "light" | "solid" }) {
  return (
    <a
      href={HOTEL.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        base,
        sizes[size],
        variant === "outline" && "border border-primary/30 bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
        variant === "light" && "glass-dark text-snow hover:bg-snow hover:text-ink",
        variant === "solid" && "bg-primary text-primary-foreground hover:bg-cedar",
        className,
      )}
    >
      <Navigation className="size-[1.1em]" />
      Get Directions
    </a>
  );
}
