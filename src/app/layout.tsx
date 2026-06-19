import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileActions } from "@/components/layout/mobile-actions";
import { site } from "@/data/site";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Self Storage in NYC & Harlem | New York S. Storage", template: "%s | New York S. Storage" },
  description: "Flexible self storage in Harlem with unit sizes for apartments, moves, students, businesses, and specialty belongings. Get a free quote from New York S. Storage.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_US", siteName: site.name, title: "Self Storage in NYC & Harlem | New York S. Storage", description: "Flexible Manhattan storage, experienced advisors, packing, pickup, and delivery options.", images: [{ url: "/nyc-storage-hero.jpg", width: 1200, height: 800, alt: "Organized storage boxes in a New York apartment" }] },
  twitter: { card: "summary_large_image", title: "Self Storage in NYC & Harlem | New York S. Storage", description: "Flexible Manhattan storage with help from experienced local advisors.", images: ["/nyc-storage-hero.jpg"] },
};

const localBusinessSchema = {
  "@context": "https://schema.org", "@type": "SelfStorage", name: site.name, url: site.url,
  telephone: "+12124107300", email: site.email,
  address: { "@type": "PostalAddress", streetAddress: site.address.street, addressLocality: site.address.city, addressRegion: site.address.region, postalCode: site.address.postalCode, addressCountry: "US" },
  openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "08:00", closes: "17:30" }],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}><body><a className="skip-link" href="#main-content">Skip to content</a><Header /><main id="main-content">{children}</main><Footer /><MobileActions /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} /></body></html>;
}
