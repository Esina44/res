export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop')`,
          filter: "brightness(0.3)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center w-full">
        <h4
          className="uppercase tracking-widest text-primary mb-6 animate-fadeIn"
          style={{ fontSize: "14px", fontWeight: "bold" }}
        >
          FINE DINING EXPERIENCE
        </h4>
        <h1 className="text-6xl md:text-8xl font-serif mb-10 text-white leading-tight">
          Where Every Flavor <br />
          <span className="premium-gradient">Tells a Story</span>
        </h1>
        <p className="text-center max-w-2xl mx-auto text-muted text-lg mb-10">
          At Loyal Platter, every dish is a masterpiece crafted by
          Michelin-starred chefs. Experience refined luxury, elegant ambiance,
          and a culinary journey designed to delight every sense.
        </p>
        <div className="flex justify-center gap-6 text-white">
          <a
            href="/menu"
            className="inline-block px-12 py-4 rounded-full font-semibold tracking-wide
                       border border-[#c5a059] text-[#c5a059]
                       transition-all duration-300
                       hover:bg-[#c5a059] hover:text-black
                       hover:shadow-[0_0_30px_rgba(197,160,89,0.35)]
                       active:scale-95"
          >
            EXPLORE MENU
          </a>
          <a
            href="/reservation"
            className="inline-block px-12 py-4 rounded-full font-semibold tracking-wide
                       border border-[#c5a059] text-[#c5a059]
                       transition-all duration-300
                       hover:bg-[#c5a059] hover:text-black
                       hover:shadow-[0_0_30px_rgba(197,160,89,0.35)]
                       active:scale-95"
          >
            BOOK A TABLE
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="text-xs uppercase tracking-widest mb-2 text-muted">
          Scroll
        </span>
      </div>
    </section>
  );
}
