import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        {/* Primary Meta Tags */}
        <meta
          name="title"
          content="Safe Piano Mover - Professional Piano Moving Services in Hollywood, CA"
        />
        <meta
          name="description"
          content="Professional piano moving services in Hollywood, CA. Safe, reliable, and insured piano movers. Call (747) 245-9992 for a free quote."
        />
        <meta
          name="keywords"
          content="piano movers, piano moving, professional piano movers, Hollywood CA, piano transportation, safe piano moving"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.safepianomover.com/" />
        <meta
          property="og:title"
          content="Safe Piano Mover - Professional Piano Moving Services"
        />
        <meta
          property="og:description"
          content="Professional piano moving services in Hollywood, CA. Safe, reliable, and insured piano movers."
        />
        <meta
          property="og:image"
          content="https://www.safepianomover.com/og-image.jpg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.safepianomover.com/"
        />
        <meta
          property="twitter:title"
          content="Safe Piano Mover - Professional Piano Moving Services"
        />
        <meta
          property="twitter:description"
          content="Professional piano moving services in Hollywood, CA. Safe, reliable, and insured piano movers."
        />
        <meta
          property="twitter:image"
          content="https://www.safepianomover.com/twitter-image.jpg"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Safe Piano Mover",
              image: "https://www.safepianomover.com/logo.png",
              "@id": "https://www.safepianomover.com",
              url: "https://www.safepianomover.com",
              telephone: "+1-747-245-9992",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Hollywood",
                addressLocality: "Los Angeles",
                addressRegion: "CA",
                postalCode: "90028",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 34.0928092,
                longitude: -118.3286614,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "08:00",
                closes: "18:00",
              },
              sameAs: [
                "https://www.instagram.com/safepianomover/",
                "https://www.facebook.com/safepianomover/",
              ],
            }),
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
