export const site = {
  name: "New York S. Storage",
  url: "https://newyorksstorage.com",
  phoneDisplay: "(212) 410-7300",
  phoneHref: "tel:+12124107300",
  email: "info@newyorksstorage.com",
  address: { street: "234 East 121st Street", city: "New York", region: "NY", postalCode: "10035" },
  hours: "Monday–Saturday, 8:00 a.m.–5:30 p.m.",
  customerPortalUrl: "https://ecom3.quikstor.com/new_york_s_storage/login",
} as const;

export const navigation = [
  { label: "Storage Solutions", href: "/storage-types/" },
  { label: "Size Guide", href: "/storage-unit-size-guide/" },
  { label: "Packing Supplies", href: "/packing-moving-supplies/" },
  { label: "Storage 101", href: "/storage-101/" },
  { label: "About", href: "/about-us/" },
  { label: "Contact", href: "/contact-us/" },
] as const;
