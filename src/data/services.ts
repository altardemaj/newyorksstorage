export type ServiceCategory = "personal" | "moving" | "business" | "specialty" | "climate";
export type IconName = "box" | "building" | "truck" | "snowflake" | "book" | "home" | "vase" | "film" | "medical";

export type StorageService = {
  slug: string;
  title: string;
  shortTitle: string;
  href: string;
  category: ServiceCategory;
  icon: IconName;
  eyebrow: string;
  description: string;
  longDescription: string;
  features: { title: string; description: string }[];
};

export const storageServices: StorageService[] = [
  {
    slug: "self-storage-nyc", title: "Self Storage NYC", shortTitle: "Self Storage", href: "/storage-types/self-storage-nyc/", category: "personal", icon: "box", eyebrow: "Flexible space, right in Harlem",
    description: "Flexible storage for furniture, seasonal items, personal effects, and everything that no longer fits at home.",
    longDescription: "Our comprehensive self storage solutions give New Yorkers a practical place for belongings during a move, renovation, or everyday declutter. Choose the space you need, then speak with a storage advisor about packing, pickup, and access.",
    features: [
      { title: "Make space at home", description: "Create breathing room without parting with the things that matter." },
      { title: "Convenient Harlem location", description: "Located near the 4, 5, and 6 trains and major city routes." },
      { title: "Right-sized units", description: "From compact 5' × 5' spaces to room for whole apartments." },
      { title: "Moving help available", description: "Ask our team about packing, pickup, and return delivery." },
    ],
  },
  {
    slug: "business-storage-nyc", title: "Business Storage NYC", shortTitle: "Business Storage", href: "/storage-types/business-storage-nyc/", category: "business", icon: "building", eyebrow: "Room for your business to grow",
    description: "A flexible home for inventory, records, furniture, equipment, and the things taking over your workplace.",
    longDescription: "Whether you are managing inventory, archiving documents, clearing unused office furniture, or changing how your team works, we can help you find a unit that fits the job without adding permanent office overhead.",
    features: [
      { title: "Wide range of sizes", description: "Choose space for a few records or a larger commercial need." },
      { title: "Archive storage", description: "Move documents and boxes off-site while keeping them organized." },
      { title: "Office furniture", description: "Store spare desks, chairs, shelving, and equipment." },
      { title: "Advisor support", description: "Speak with a real person when your storage needs change." },
    ],
  },
  {
    slug: "moving-storage-nyc", title: "Moving Storage NYC", shortTitle: "Moving Storage", href: "/storage-types/moving-storage-nyc/", category: "moving", icon: "truck", eyebrow: "A smoother space between addresses",
    description: "Short- or long-term storage that keeps your belongings safe when move-out and move-in dates do not line up.",
    longDescription: "Moving in New York rarely follows a perfect timeline. Our Harlem facility gives you a secure place for furniture, boxes, and valuables while you wait for the next set of keys, with pickup and return delivery options available.",
    features: [
      { title: "Short-term options", description: "Store for the gap between move-out and move-in dates." },
      { title: "Space-based quotes", description: "Get a recommendation based on what you actually need to store." },
      { title: "Pickup available", description: "Ask about help moving items from the curb to storage." },
      { title: "Return delivery", description: "Arrange delivery when your new home is ready." },
    ],
  },
  {
    slug: "climate-controlled-storage-nyc", title: "Climate-Controlled Storage NYC", shortTitle: "Climate-Controlled", href: "/storage-types/climate-controlled-storage-nyc/", category: "climate", icon: "snowflake", eyebrow: "Extra care for sensitive belongings",
    description: "A more stable storage environment for belongings that need protection from New York's seasonal swings.",
    longDescription: "Climate-controlled storage can be a smart choice for artwork, antiques, documents, and other temperature-sensitive belongings. Our advisors can help you decide whether it makes sense for what you plan to store.",
    features: [
      { title: "Temperature protection", description: "A steadier environment through summer and winter." },
      { title: "Specialty storage", description: "A suitable option for many sensitive or valuable items." },
      { title: "Dedicated support", description: "Talk through your items with an experienced storage advisor." },
      { title: "Convenient access", description: "A Harlem location reachable by subway, car, truck, or van." },
    ],
  },
  {
    slug: "student-storage-nyc", title: "Student Storage NYC", shortTitle: "Student Storage", href: "/storage-types/student-storage-nyc/", category: "personal", icon: "book", eyebrow: "Less stuff between semesters",
    description: "Practical storage for books, clothes, small furniture, and dorm essentials during breaks, moves, or study abroad.",
    longDescription: "Instead of hauling everything home between semesters, keep school supplies, clothing, and apartment essentials in New York. We offer a range of unit sizes and can help you estimate the space you need.",
    features: [
      { title: "Semester-friendly", description: "Useful for summer, study abroad, and housing transitions." },
      { title: "Compact options", description: "Small units work well for boxes, clothes, and dorm essentials." },
      { title: "Packing supplies", description: "Get boxes and moving supplies for a more organized move." },
      { title: "Pickup and delivery", description: "Ask our team about available moving assistance." },
    ],
  },
  {
    slug: "apartment-storage-nyc", title: "Apartment Storage NYC", shortTitle: "Apartment Storage", href: "/storage-types/apartment-storage-nyc/", category: "personal", icon: "home", eyebrow: "More apartment. Less clutter.",
    description: "Long- or short-term space for furniture, appliances, seasonal gear, and everything your closets cannot handle.",
    longDescription: "New York apartments ask a lot from every square foot. Store bulky furniture, appliances, seasonal items, and renovation overflow nearby, with pickup and delivery options when you need an extra hand.",
    features: [
      { title: "Shuttle service", description: "Ask about curbside pickup for your move into storage." },
      { title: "Right-sized pricing", description: "Get a quote based on the space your belongings require." },
      { title: "Climate-control options", description: "Available for belongings that benefit from extra protection." },
      { title: "Six-day support", description: "Call the team during regular business hours, Monday through Saturday." },
    ],
  },
  {
    slug: "antique-storage-nyc", title: "Antique Storage NYC", shortTitle: "Antique Storage", href: "/storage-types/antique-storage-nyc/", category: "specialty", icon: "vase", eyebrow: "Thoughtful storage for irreplaceable pieces",
    description: "Careful packing and storage options for antique furniture, decorative objects, and collections of many sizes.",
    longDescription: "Antiques deserve a little more thought than an ordinary box. Our storage advisors can discuss professional wrapping, preservation materials, unit sizing, and climate-controlled options for your pieces.",
    features: [
      { title: "Professional wrapping", description: "Ask about packing materials and protection for delicate pieces." },
      { title: "Flexible unit sizes", description: "Accommodate individual objects or larger collections." },
      { title: "Climate-controlled", description: "Options are available for pieces that need a steadier environment." },
      { title: "Harlem location", description: "Visit or call our team six days a week." },
    ],
  },
  {
    slug: "art-film-storage-nyc", title: "Art & Film Storage NYC", shortTitle: "Art & Film Storage", href: "/storage-types/art-film-storage-nyc/", category: "specialty", icon: "film", eyebrow: "Space for creative work and equipment",
    description: "Storage options for artwork, production materials, props, equipment, and creative archives in New York City.",
    longDescription: "Creative projects can quickly outgrow a studio or production space. Our team can help assess the room needed for artwork, props, equipment, materials, and archives, including climate-controlled options where appropriate.",
    features: [
      { title: "Creative archives", description: "Keep past work and production materials organized off-site." },
      { title: "Flexible sizing", description: "Store a focused collection or the contents of a working studio." },
      { title: "Climate-control options", description: "Discuss added environmental protection for sensitive items." },
      { title: "Moving assistance", description: "Ask about packing, pickup, and delivery availability." },
    ],
  },
  {
    slug: "pharmaceutical-storage-nyc", title: "Pharmaceutical Storage NYC", shortTitle: "Pharmaceutical Storage", href: "/storage-types/pharmaceutical-storage-nyc/", category: "specialty", icon: "medical", eyebrow: "Specialty space for business equipment",
    description: "Storage options for pharmaceutical-industry equipment and business materials, with climate-controlled units available.",
    longDescription: "Companies with pharmaceutical equipment or business materials often need stable, organized overflow space. Speak with our team about unit sizes, climate-controlled availability, security, and the specific items you plan to store.",
    features: [
      { title: "Specialty storage", description: "Discuss equipment and business-material requirements with an advisor." },
      { title: "Climate-controlled", description: "A range of climate-controlled unit options is available." },
      { title: "Safe and secure", description: "Security is a central part of the facility and storage process." },
      { title: "On-hand support", description: "Phone support is available six days a week." },
    ],
  },
];

export const serviceCategories = [
  { value: "all", label: "All solutions" }, { value: "personal", label: "Personal" },
  { value: "moving", label: "Moving" }, { value: "business", label: "Business" },
  { value: "specialty", label: "Specialty" }, { value: "climate", label: "Climate-controlled" },
] as const;

export function getService(slug: string) { return storageServices.find((service) => service.slug === slug); }

