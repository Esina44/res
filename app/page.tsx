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

      <section className="relative overflow-hidden bg-[#c5a059] text-black py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight font-medium">
            Ready for an Unforgettable <br /> Dining Experience?
          </h2>

          <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto mb-12 italic">
            Join us tonight and discover why Loyal Platter is the preferred
            choice for gourmets and food enthusiasts alike.
          </p>

          <a
            href="/reservation"
            className="inline-block py-4 px-12 rounded-full font-semibold tracking-wide
                 border border-black/30
                 transition-all duration-300
                 hover:bg-black hover:text-[#c5a059]
                 hover:shadow-[0_0_30px_rgba(0,0,0,0.35)]
                 active:scale-95"
          >
            RESERVE YOUR TABLE
          </a>
        </div>

        {/* Decorative circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-black/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-black/10 rounded-full" />
      </section>
    </>
  );
}
