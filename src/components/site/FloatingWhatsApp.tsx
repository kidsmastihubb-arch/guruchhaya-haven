import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/hotel";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lift transition-transform duration-300 hover:scale-110 lg:bottom-8 lg:right-8"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-whatsapp/50" />
      <MessageCircle className="relative size-7" />
    </a>
  );
}
