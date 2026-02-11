import Hero from "@/components/Hero";
import FeaturedMenu from "@/components/FeaturedMenu";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <>
      <Hero />
      <div id="featured">
        <FeaturedMenu />
      </div>
      <AboutSection />

      <section
        className="section-padding relative overflow-hidden"
        style={{ backgroundColor: "var(--primary)", color: "var(--secondary)" }}
      >
        <div className="container relative z-10 text-center">
          <h2 className="text-5xl md:text-6xl font-serif mb-8">
            Ready for an Unforgettable <br /> Dining Experience?
          </h2>
          <p className="text-center text-lg opacity-90 max-w-2xl mx-auto mb-10">
            Join us tonight and discover why Loyal Platter is the preferred
            choice for gourmets and food enthusiasts alike.
          </p>
          <a
            href="/reservation"
            className="inline-block py-4 px-10 rounded-full font-bold hover:scale-105 transition-transform duration-300"
          >
            RESERVE YOUR TABLE
          </a>
        </div>

        {/* Decorative circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-black/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-black/10 rounded-full" />
      </section>
    </>
  );
}
