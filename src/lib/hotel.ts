import hotelExterior from "@/assets/hotel-exterior.webp";
import balconyTable from "@/assets/balcony-table.webp";
import snowNight from "@/assets/snow-night.webp";
import valleyDusk from "@/assets/valley-dusk.webp";
import snowCourtyard from "@/assets/snow-courtyard.webp";
import balconyChairs from "@/assets/balcony-chairs.webp";
import restaurant from "@/assets/restaurant.webp";
import exteriorNight from "@/assets/exterior-night.webp";
import deluxeRoom from "@/assets/deluxe-room.webp";
import manaliView from "@/assets/manali-view.webp";

export const images = {
  hotelExterior,
  balconyTable,
  snowNight,
  valleyDusk,
  snowCourtyard,
  balconyChairs,
  restaurant,
  exteriorNight,
  deluxeRoom,
  manaliView,
};

export const HOTEL = {
  name: "GuruChhaya Hotel and Cottages",
  shortName: "GuruChhaya",
  address: "Near IL Forno Restaurant, Hadimba Temple Road, Manali, Himachal Pradesh 175131",
  addressLines: ["Near IL Forno Restaurant, Hadimba Temple Road,", "Manali, Himachal Pradesh 175131"],
  phone: "+91 98177 77006",
  phoneTel: "+919817777006",
  whatsappNumber: "919817777006",
  rating: 4.7,
  reviews: 381,
  stars: 3,
  lat: 32.2458584,
  lng: 77.1802093,
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=GuruChhaya+Hotel+and+Cottages,+Hadimba+Temple+Road,+Manali",
};

export const WHATSAPP_MESSAGE =
  "Hello GuruChhaya Hotel and Cottages, I would like to enquire about room availability and booking.";

export const whatsappUrl = (message: string = WHATSAPP_MESSAGE) =>
  `https://wa.me/${HOTEL.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const rooms = [
  {
    slug: "deluxe-mountain-view",
    name: "Deluxe Mountain View Room",
    tagline: "Warm wood, soft light, mountains at the window",
    image: deluxeRoom,
    description:
      "A spacious, cosy room finished in warm pine panelling with ambient ceiling lighting, a plush king bed and a private balcony that opens straight onto the cedar forest and snow peaks.",
    size: "280 sq ft",
    guests: "2 Adults + 1 Child",
    bed: "King Bed",
    amenities: ["Private balcony", "Mountain view", "Free Wi-Fi", "LED TV", "Room heater", "Hot water 24×7", "Tea/coffee kettle", "Room service"],
  },
  {
    slug: "premium-balcony-room",
    name: "Premium Balcony Room",
    tagline: "Sunset chairs and a valley that glows at dusk",
    image: balconyChairs,
    description:
      "Our most loved room for couples. A wide wooden terrace with cane chairs faces the Manali valley and the Pir Panjal range — perfect for morning chai and evening light.",
    size: "320 sq ft",
    guests: "2 Adults + 2 Children",
    bed: "King Bed",
    amenities: ["Large private terrace", "Valley & snow-peak view", "Free Wi-Fi", "LED TV", "Room heater", "Wardrobe & seating", "Hot water 24×7", "Room service"],
  },
  {
    slug: "family-cottage",
    name: "Family Cottage Suite",
    tagline: "Space for everyone under one cedar roof",
    image: hotelExterior,
    description:
      "A generous suite-style cottage room on the upper floor with a long shared balcony, ideal for families and small groups travelling together to Manali.",
    size: "400 sq ft",
    guests: "4 Adults",
    bed: "2 King Beds / Extra Bed",
    amenities: ["Extra-long balcony", "Forest & mountain view", "Free Wi-Fi", "LED TV", "Room heater", "Family seating area", "Hot water 24×7", "Room service"],
  },
];

export const amenities = [
  { icon: "Wifi", title: "Free Wi-Fi", desc: "High-speed internet across rooms and common areas." },
  { icon: "Car", title: "Free Private Parking", desc: "Secure on-site parking for cars and bikes." },
  { icon: "Mountain", title: "Mountain Views", desc: "Snow peaks and cedar forest from nearly every room." },
  { icon: "Sun", title: "Private Balconies", desc: "Wooden balconies with cane seating for every room." },
  { icon: "UtensilsCrossed", title: "Restaurant", desc: "In-house multi-cuisine dining with local Himachali food." },
  { icon: "BellRing", title: "Room Service", desc: "Hot meals and chai delivered to your room." },
  { icon: "Zap", title: "Power Backup", desc: "Uninterrupted power through mountain weather." },
  { icon: "Flame", title: "Outdoor Fireplace", desc: "Bonfire evenings under the deodar trees." },
  { icon: "Clock", title: "24-Hour Front Desk", desc: "Always someone to help, day or night." },
  { icon: "Shirt", title: "Laundry", desc: "Same-day laundry and ironing on request." },
  { icon: "Stethoscope", title: "Doctor on Call", desc: "Medical assistance available round the clock." },
  { icon: "Compass", title: "Tour & Trek Assistance", desc: "Rohtang, Solang, Atal Tunnel, Jogini Falls & more." },
  { icon: "Plane", title: "Airport Shuttle", desc: "Pick-up and drop from Kullu-Manali Airport on request." },
] as const;

export const attractions = [
  { name: "Hadimba Devi Temple", distance: "300–400 m", note: "Ancient cedar-wood temple set in a deodar grove — a 5-minute walk." },
  { name: "Museum of Himachal Culture & Folk Art", distance: "approx. 500 m", note: "Local heritage, costumes and wooden artefacts of Kullu valley." },
  { name: "Mall Road & Manali Bazaar", distance: "1.5–2 km", note: "Cafés, woollens, shopping and the heart of town." },
  { name: "Manali Bus Depot", distance: "approx. 2 km", note: "Volvo and HRTC services to Delhi, Chandigarh & Leh." },
  { name: "Kullu-Manali Airport", distance: "approx. 52 km", note: "Bhuntar airport — shuttle available on request." },
];

export const galleryItems = [
  { src: hotelExterior, alt: "GuruChhaya Hotel and Cottages wooden façade with green roofs on Hadimba Temple Road, Manali", tall: false },
  { src: balconyTable, alt: "Private balcony at GuruChhaya Hotel with cane chairs, drinks and cedar forest view", tall: true },
  { src: snowNight, alt: "GuruChhaya Hotel glowing at night after heavy snowfall in Manali", tall: false },
  { src: valleyDusk, alt: "GuruChhaya Hotel lit up at dusk among snow-covered deodar trees", tall: true },
  { src: deluxeRoom, alt: "Deluxe room with pine-panelled ceiling and king bed at GuruChhaya Hotel Manali", tall: false },
  { src: balconyChairs, alt: "Golden-hour balcony with cane chairs overlooking the Manali valley and snow peaks", tall: false },
  { src: snowCourtyard, alt: "Snow-covered courtyard of GuruChhaya Hotel and Cottages in winter", tall: true },
  { src: restaurant, alt: "In-house restaurant with wooden ceiling and stone walls at GuruChhaya Hotel", tall: false },
  { src: exteriorNight, alt: "Night view of GuruChhaya Hotel and Cottages exterior with fresh snow", tall: true },
  { src: manaliView, alt: "Panoramic view of snow-covered Manali town and mountains near GuruChhaya Hotel", tall: false },
];

export const SITE_URL = "https://guruchhayahotel.com";

export const hotelJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Hotel", "LodgingBusiness", "LocalBusiness"],
  name: HOTEL.name,
  alternateName: ["GuruChhaya Hotel Manali", "Guru Chhaya Hotel and Cottages"],
  description:
    "GuruChhaya Hotel and Cottages is a peaceful 3-star mountain-view hotel on Hadimba Temple Road, Manali, 300 m from Hadimba Devi Temple, with private balconies, free Wi-Fi, free parking and an in-house restaurant.",
  telephone: HOTEL.phone,
  starRating: { "@type": "Rating", ratingValue: String(HOTEL.stars) },
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Near IL Forno Restaurant, Hadimba Temple Road",
    addressLocality: "Manali",
    addressRegion: "Himachal Pradesh",
    postalCode: "175131",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: HOTEL.lat, longitude: HOTEL.lng },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: String(HOTEL.rating),
    bestRating: "5",
    reviewCount: String(HOTEL.reviews),
  },
  amenityFeature: amenities.map((a) => ({
    "@type": "LocationFeatureSpecification",
    name: a.title,
    value: true,
  })),
  checkinTime: "12:00",
  checkoutTime: "11:00",
  sameAs: [`https://wa.me/${HOTEL.whatsappNumber}`],
};
