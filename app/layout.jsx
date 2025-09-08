import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NEXT-GEN BUSINESS CONSULTANCY",
    "url": "https://nextgenbusiness.co.in/",
    "logo": "https://www.nextgenbusiness.co.in/Next-Gen-Logo.png",
    "alternateName": "NEXT-GEN BUSINESS CONSULTNACY PRIVATE LIMITED",
    "sameAs": [
      "https://www.facebook.com/people/Next-Gen-Business-Consultancy-Private-Limited/61574060610065/",
      "https://in.linkedin.com/company/nextgen-business-consultancy",
      "https://www.instagram.com/next_gen_business_consultancy/"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91 9033149731",
        "contactType": "customer service",
        "email": "info@nextgenbusiness.co.in",
        "areaServed": "IN",
        "availableLanguage": ["en", "hi", "gu"]
      }
    ]
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "NEXTGEN BUSINESS CONSULTANCY PRIVATE LIMITED",
    "image": "https://www.nextgenbusiness.co.in/Next-Gen-Logo.png",
    "@id": "https://www.nextgenbusiness.co.in/about",
    "url": "https://nextgenbusiness.co.in/",
    "telephone": "+919898298149",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Drive in Road",
      "addressLocality": "Ahmedabad",
      "postalCode": "380051",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.047053163750352,
      "longitude": 72.52960824232856
    },
    "sameAs": [
      "https://www.facebook.com/p/Next-Gen-Business-Consultancy-Private-Limited-61574060610065/",
      "https://www.instagram.com/next_gen_business_consultancy/",
      "https://www.youtube.com/@Next-Gen-business-consultancy",
      "https://in.linkedin.com/company/nextgen-business-consultancy"
    ]
  };

  return (
    <html lang="en">
      <head>
        {/* ✅ Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        {/* ✅ Professional Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />

        {/* ✅ Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZPW2HYC5BE"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZPW2HYC5BE');
            `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
