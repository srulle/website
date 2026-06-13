import type { Metadata } from "next"
import type { Service } from "@/lib/service-data"

export const SITE_URL = "https://rsudhas.jambikota.go.id"
export const SITE_NAME = "BLUD RSUD H. Abdurrahman Sayoeti Kota Jambi"
export const HOSPITAL_NAME = "Badan Layanan Umum Daerah Rumah Sakit Umum Daerah H. Abdurrahman Sayoeti"
export const HOSPITAL_SHORT_NAME = "RSUD H. Abdurrahman Sayoeti"
export const SITE_DESCRIPTION =
  "Website resmi BLUD RSUD H. Abdurrahman Sayoeti Kota Jambi, rumah sakit pemerintah bertipe D di Kota Jambi. Temukan informasi layanan, jadwal dokter, pendaftaran, BPJS, alur pelayanan, rawat jalan, rawat inap, IGD, radiologi, laboratorium, farmasi, ICU, dan fasilitas rumah sakit."
export const CONTACT_PHONE = "+62-741-123456"
export const CONTACT_PHONE_DISPLAY = "(0741) 123456"

export const SEO_KEYWORDS = [
  "RSUD H. Abdurrahman Sayoeti",
  "RSUD H. Abdurrahman Sayoeti Kota Jambi",
  "BLUD RSUD H. Abdurrahman Sayoeti",
  "rumah sakit pemerintah Kota Jambi",
  "rumah sakit tipe D Jambi",
  "IGD RSUD Jambi",
  "pendaftaran RSUD H. Abdurrahman Sayoeti",
  "jadwal dokter RSUD H. Abdurrahman Sayoeti",
  "BPJS RSUD H. Abdurrahman Sayoeti",
  "rawat jalan RSUD Jambi",
  "rawat inap RSUD Jambi",
  "radiologi RSUD Jambi",
  "laboratorium RSUD Jambi",
  "farmasi RSUD Jambi",
]

export const hospitalMetadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOSPITAL_SHORT_NAME,
    template: `%s | ${HOSPITAL_SHORT_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SEO_KEYWORDS,
  authors: [{ name: HOSPITAL_SHORT_NAME }],
  creator: "Pemerintah Kota Jambi",
  publisher: "Pemerintah Kota Jambi",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${SITE_URL}/landing`,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: SITE_NAME,
    title: HOSPITAL_SHORT_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: HOSPITAL_SHORT_NAME,
    description: SITE_DESCRIPTION,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icon.svg",
  },
} satisfies Metadata

export const landingPageMetadata = {
  ...hospitalMetadata,
  alternates: {
    canonical: `${SITE_URL}/landing`,
  },
} satisfies Metadata

export const layananPageMetadata = {
  ...hospitalMetadata,
  title: `Layanan & Fasilitas | ${HOSPITAL_SHORT_NAME}`,
  description:
    "Informasi layanan dan fasilitas RSUD H. Abdurrahman Sayoeti Kota Jambi, meliputi rawat jalan, rawat inap, IGD, radiologi, laboratorium, farmasi, ICU, ruang bersalin, pendaftaran, BPJS, dan alur pelayanan.",
  alternates: {
    canonical: `${SITE_URL}/landing/layanan`,
  },
} satisfies Metadata

export const informasiPageMetadata = {
  ...hospitalMetadata,
  title: `Informasi Pasien | ${HOSPITAL_SHORT_NAME}`,
  description:
    "Informasi pasien RSUD H. Abdurrahman Sayoeti Kota Jambi: jadwal dokter, cara daftar, alur pelayanan, informasi tempat tidur, dan layanan BPJS Kesehatan.",
  alternates: {
    canonical: `${SITE_URL}/landing/informasi`,
  },
} satisfies Metadata

export const newsPageMetadata = {
  ...hospitalMetadata,
  title: `Berita & Pengumuman | ${HOSPITAL_SHORT_NAME}`,
  description:
    "Berita, pengumuman, kegiatan, dan informasi terbaru dari RSUD H. Abdurrahman Sayoeti Kota Jambi.",
  alternates: {
    canonical: `${SITE_URL}/landing/news`,
  },
} satisfies Metadata

export type SeoNewsItem = {
  id: number
  title: string
  description: string
  date: string
  category: string
  image: string
}

export function createServiceMetadata(service: Service): Metadata {
  const title = `${service.title} - ${HOSPITAL_SHORT_NAME}`
  const url = `${SITE_URL}/landing/layanan/${service.id}`

  return {
    title,
    description: service.description,
    keywords: [service.title, `${service.title} RSUD Jambi`, `${HOSPITAL_SHORT_NAME} ${service.title}`],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "id_ID",
      siteName: SITE_NAME,
      title,
      description: service.description,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: service.description,
    },
  }
}

export function createNewsMetadata(newsItem: SeoNewsItem): Metadata {
  const title = `${newsItem.title} | ${HOSPITAL_SHORT_NAME}`
  const url = `${SITE_URL}/landing/news/${newsItem.id}`

  return {
    title,
    description: newsItem.description,
    keywords: [newsItem.title, newsItem.category, `${HOSPITAL_SHORT_NAME} berita`],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      locale: "id_ID",
      siteName: SITE_NAME,
      title,
      description: newsItem.description,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: newsItem.description,
    },
  }
}

export const hospitalJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Hospital", "GovernmentOrganization"],
      "@id": `${SITE_URL}/#hospital`,
      name: HOSPITAL_NAME,
      alternateName: HOSPITAL_SHORT_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/logo/logo-kota-jambi.svg`,
      telephone: CONTACT_PHONE,
      areaServed: {
        "@type": "City",
        name: "Kota Jambi",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kota Jambi",
        addressRegion: "Jambi",
        addressCountry: "ID",
      },
      medicalSpecialty: [
        "Emergency",
        "Outpatient",
        "Inpatient",
        "Radiology",
        "Laboratory",
        "Pharmacy",
        "Obstetrics",
        "Pediatrics",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: CONTACT_PHONE,
        contactType: "customer support",
        areaServed: "ID",
        availableLanguage: "Indonesian",
      },
      parentOrganization: {
        "@type": "GovernmentOrganization",
        name: "Pemerintah Kota Jambi",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: {
        "@id": `${SITE_URL}/#hospital`,
      },
      inLanguage: "id-ID",
    },
  ],
}

export function createServiceJsonLd(service: Service) {
  const url = `${SITE_URL}/landing/layanan/${service.id}`

  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: `${service.title} - ${HOSPITAL_SHORT_NAME}`,
    description: service.description,
    url,
    provider: {
      "@id": `${SITE_URL}/#hospital`,
    },
    isPartOf: {
      "@id": `${SITE_URL}/#hospital`,
    },
    serviceType: service.title,
    areaServed: {
      "@type": "City",
      name: "Kota Jambi",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: url,
      servicePhone: CONTACT_PHONE,
    },
  }
}

export function createNewsArticleJsonLd(newsItem: SeoNewsItem) {
  const url = `${SITE_URL}/landing/news/${newsItem.id}`

  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: newsItem.title,
    description: newsItem.description,
    datePublished: newsItem.date,
    dateModified: newsItem.date,
    author: {
      "@type": "Organization",
      name: HOSPITAL_SHORT_NAME,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#hospital`,
      name: HOSPITAL_SHORT_NAME,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    image: [newsItem.image],
    inLanguage: "id-ID",
    articleSection: newsItem.category,
  }
}
