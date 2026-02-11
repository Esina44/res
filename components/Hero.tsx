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

      <div className="relative z-10 flex flex-col items-center text-center w-full px-4">
        <h4
          className="uppercase tracking-widest text-primary mb-6 animate-fadeIn"
          style={{ fontSize: "14px", fontWeight: "bold" }}
        >
          FINE DINING EXPERIENCE
        </h4>
        <h1 className="text-6xl md:text-8xl font-serif mb-10 leading-tight">
          Where Every Flavor <br />
          <span className="premium-gradient">Tells a Story</span>
        </h1>
        <p className="text-center max-w-2xl mx-auto text-muted text-lg mb-10">
          Indulge in a culinary journey crafted by Michelin-starred chefs. Loyal
          Platter offers an atmosphere of sophistication and a menu that
          redefines luxury.
        </p>
        <div className="flex justify-center gap-6">
          <a href="/menu" className="btn-primary">
            EXPLORE MENU
          </a>
          <a href="/reservation" className="btn-outline">
            BOOK A TABLE
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="text-xs uppercase tracking-widest mb-2 text-muted">
          Scroll
        </span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-[var(--primary)] to-transparent" />
      </div>
    </section>
  );
}
