export default function AboutSection() {
  return (
    <section className="py-24 md:py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
                alt="Chef in kitchen"
                className="w-full h-[500px] md:h-[620px] object-cover"
              />
            </div>

            {/* Decorative frame */}
            <div className="absolute -top-8 -left-8 w-40 h-40 border-l-2 border-t-2 border-[#c5a059] opacity-60" />
            <div className="absolute -bottom-8 -right-8 w-40 h-40 border-r-2 border-b-2 border-[#c5a059] opacity-60" />

            {/* Experience badge */}
            <div className="absolute bottom-8 -left-10 bg-black/80 backdrop-blur-md border border-white/10 rounded-2xl px-8 py-6 shadow-xl hidden lg:block">
              <h3 className="text-4xl font-serif text-[#c5a059]">15+</h3>
              <p className="text-xs uppercase tracking-widest text-neutral-400">
                Years of Excellence
              </p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h4 className="uppercase tracking-[0.3em] text-[#c5a059] mb-5 text-sm">
              Our Heritage
            </h4>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8">
              Crafting Culinary Masterpieces Since 2008
            </h2>

            <p className="text-neutral-400 text-lg leading-relaxed mb-6">
              At Loyal Platter, we believe food is more than nourishment — it is
              an art form. Our journey began in a small Paris kitchen, guided by
              a passion for depth of flavor and elegance of presentation.
            </p>

            <p className="text-neutral-400 text-lg leading-relaxed mb-12">
              Today we bring that same dedication to your table, blending
              timeless techniques with modern innovation to create a dining
              experience that is refined, immersive, and unforgettable.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-[#c5a059] font-serif text-2xl mb-2">
                  Authentic
                </h4>
                <p className="text-sm text-neutral-400">
                  Ingredients sourced from trusted local farms
                </p>
              </div>

              <div>
                <h4 className="text-[#c5a059] font-serif text-2xl mb-2">
                  Exquisite
                </h4>
                <p className="text-sm text-neutral-400">
                  Crafted with precision and passion
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
