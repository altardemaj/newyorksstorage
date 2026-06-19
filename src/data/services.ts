export type ServiceCategory =
  | "personal"
  | "moving"
  | "business"
  | "specialty"
  | "climate";

export type StorageService = {
  title: string;
  href: string;
  category: ServiceCategory;
  migrationNote?: string;
};

export const storageServices: StorageService[] = [
  {
    title: "Self Storage",
    href: "/storage-types/self-storage-nyc/",
    category: "personal",
  },
  {
    title: "Business Storage",
    href: "/storage-types/business-storage-nyc/",
    category: "business",
  },
  {
    title: "Moving Storage",
    href: "/storage-types/moving-storage-nyc/",
    category: "moving",
  },
  {
    title: "Climate-Controlled Storage",
    href: "/storage-types/climate-controlled-storage-nyc/",
    category: "climate",
  },
  {
    title: "Student Storage",
    href: "/storage-types/student-storage-nyc/",
    category: "personal",
    migrationNote: "Existing page is thin; expand only with verified details.",
  },
  {
    title: "Apartment Storage",
    href: "/storage-types/apartment-storage-nyc/",
    category: "personal",
  },
  {
    title: "Antique Storage",
    href: "/storage-types/antique-storage-nyc/",
    category: "specialty",
  },
  {
    title: "Art & Film Storage",
    href: "/storage-types/art-film-storage-nyc/",
    category: "specialty",
    migrationNote: "Replace current template placeholder text after review.",
  },
  {
    title: "Pharmaceutical Storage",
    href: "/storage-types/pharmaceutical-storage-nyc/",
    category: "specialty",
    migrationNote: "Do not add regulatory claims without evidence.",
  },
];

