export default function AboutSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: "#0a0a0a" }}>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
                alt="Chef in kitchen"
                className="w-full h-[600px] object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 border-l-2 border-t-2 border-[var(--primary)] z-0" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-r-2 border-b-2 border-[var(--primary)] z-0" />

            <div className="absolute bottom-10 -left-16 glass-card p-8 z-20 hidden lg:block">
              <h3 className="text-4xl font-serif text-[var(--primary)] mb-1">
                15+
              </h3>
              <p className="text-xs uppercase tracking-widest">
                Years of Excellence
              </p>
            </div>
          </div>

          <div>
            <h4 className="uppercase tracking-widest text-[var(--primary)] mb-4">
              Our Heritage
            </h4>
            <h2 className="text-5xl font-serif mb-8 leading-tight">
              Crafting Culinary Masterpieces Since 2008
            </h2>
            <p className="text-[var(--text-muted)] text-lg mb-8 leading-relaxed">
              At Loyal Platter, we believe that food is more than just
              sustenance; it's an art form. Our journey started in a small
              kitchen in Paris, driven by a passion for exploring the depths of
              flavor and the elegance of presentation.
            </p>
            <p className="text-[var(--text-muted)] text-lg mb-10 leading-relaxed">
              Today, we bring that same dedication to your table, combining
              traditional techniques with modern innovation to create a dining
              experience that is both timeless and transformative.
            </p>
            <div className="flex gap-10">
              <div>
                <h4 className="text-[var(--primary)] font-serif text-2xl mb-1">
                  Authentic
                </h4>
                <p className="text-sm text-[var(--text-muted)]">
                  Source from local farms
                </p>
              </div>
              <div>
                <h4 className="text-[var(--primary)] font-serif text-2xl mb-1">
                  Exquisite
                </h4>
                <p className="text-sm text-[var(--text-muted)]">
                  Masterfully prepared
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
