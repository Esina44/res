export default function FeaturedMenu() {
  const dishes = [
    {
      name: "Truffle Wagyu Steak",
      price: "$120",
      description:
        "A5 Grade Wagyu, black truffle butter, roasted seasonal vegetables.",
      image:
        "https://i.pinimg.com/1200x/d9/98/25/d998255976407d2e114b2d91cff5689b.jpg",
    },
    {
      name: "Saffron Sea Bass",
      price: "$95",
      description:
        "Pan-seared sea bass, saffron infusion, asparagus, and lemon foam.",
      image:
        "https://i.pinimg.com/1200x/95/83/23/958323c7861d09f8a749bdb5b7440a2f.jpg",
    },
    {
      name: "Golden Lobster Ravioli",
      price: "$85",
      description:
        "Handmade ravioli, fresh lobster meat, edible gold leaf, cream sauce.",
      image:
        "https://i.pinimg.com/736x/cc/48/c6/cc48c6d34aba8cd90d5a9ce665dc7d0d.jpg",
    },
  ];

  return (
    <section className="section-padding bg-[var(--background)]">
      <div className="container">
        <div className="text-center mb-16">
          <h4 className="uppercase tracking-widest text-[var(--primary)] mb-2">
            Our Selection
          </h4>
          <h2 className="text-4xl md:text-5xl font-serif">Signature Dishes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {dishes.map((dish, idx) => (
            <div key={idx} className="glass-card overflow-hidden group">
              <div className="relative h-72 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <button className="btn-primary py-2 px-6 scale-90 group-hover:scale-100 transition-transform">
                    ADD TO CART
                  </button>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-serif">{dish.name}</h3>
                  <span className="text-[var(--primary)] font-bold">
                    {dish.price}
                  </span>
                </div>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="/menu" className="btn-outline">
            VIEW FULL MENU
          </a>
        </div>
      </div>
    </section>
  );
}
