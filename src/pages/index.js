import Head from "next/head";
import Hero from "@/components/Hero";
import ProudRated from "@/components/ProudRated";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Working from "@/components/Working";
import ClientTestimonials from "@/components/ClientTestimonials";
import Map from "@/components/Map";
import InstagramSection from "@/components/InstagramSection";
import OtherServices from "@/components/OtherServices";
import Zipcode from "@/components/ZipCode";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Safe Piano Mover | Professional Piano Moving Services in Hollywood, CA
        </title>
        <meta
          name="description"
          content="Professional piano moving services in Hollywood, CA. Safe, reliable, and insured piano movers. Call (747) 245-9992 for a free quote."
        />
        <link rel="canonical" href="https://www.safepianomover.com" />
      </Head>

      <main>
        <Hero />
        <ProudRated />
        <Marquee />
        <Services />
        <Working />
        <ClientTestimonials />
        <div className="ms-5 me-5 mb-5">
          <Map />
        </div>
        <InstagramSection />
        <OtherServices />
        <Zipcode />
        <Footer />
      </main>
    </>
  );
}
