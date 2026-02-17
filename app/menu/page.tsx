"use client";

import React, { useState } from "react";
import MenuCard from "@/components/MenuCard";
import CategoryTabs from "@/components/CategoryTabs";
import Button from "@/components/Button";

const menuItems = [
  {
    id: 1,
    name: "Truffle Arancini",
    category: "Starters",
    price: "$18",
    description:
      "Crispy risotto pearls with wild mushroom essence and black truffle.",
    image:
      "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    name: "Burrata & Heirloom",
    category: "Starters",
    price: "$22",
    description:
      "Fresh burrata, heritage tomatoes, basil oil, and balsamic reduction.",
    image:
      "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    name: "Wagyu Carpaccio",
    category: "Starters",
    price: "$28",
    description: "Thinly sliced raw beef, capers, arugula, and aged parmesan.",
    image:
      "https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?auto=format&fit=crop&q=80&w=800",
  },
  // Main Course
  {
    id: 4,
    name: "Wagyu Ribeye Steak",
    category: "Main Course",
    price: "$85",
    description:
      "A5 Grade Wagyu, truffle butter, and roasted seasonal vegetables.",
    image:
      "https://i.pinimg.com/1200x/d9/98/25/d998255976407d2e114b2d91cff5689b.jpg",
  },
  {
    id: 5,
    name: "Saffron Sea Bass",
    category: "Main Course",
    price: "$65",
    description: "Pan-seared sea bass with saffron infusion and citrus foam.",
    image:
      "https://i.pinimg.com/1200x/95/83/23/958323c7861d09f8a749bdb5b7440a2f.jpg",
  },
  {
    id: 6,
    name: "Golden Lobster Ravioli",
    category: "Main Course",
    price: "$55",
    description: "Handmade pasta, fresh lobster meat, and a light cream sauce.",
    image:
      "https://i.pinimg.com/736x/cc/48/c6/cc48c6d34aba8cd90d5a9ce665dc7d0d.jpg",
  },
  // Desserts
  {
    id: 7,
    name: "Chocolate Lava Dome",
    category: "Desserts",
    price: "$16",
    description:
      "Valrhona dark chocolate, salted caramel, and raspberry coulis.",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 8,
    name: "Saffron Pistachio Tart",
    category: "Desserts",
    price: "$14",
    description: "Handcrafted tart with saffron cream and roasted pistachios.",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=800",
  },
  // Drinks
  {
    id: 9,
    name: "Old Fashioned Signature",
    category: "Drinks",
    price: "$18",
    description: "Barrel-aged bourbon, aromatic bitters, and orange zest.",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 10,
    name: "Royal Golden Negroni",
    category: "Drinks",
    price: "$20",
    description: "Gin, sweet vermouth, Campari, and edible gold leaf.",
    image:
      "https://i.pinimg.com/1200x/08/e1/1d/08e11d1242bcc09448b4b5222680d8c7.jpg",
  },
];

const categories = ["All", "Starters", "Main Course", "Desserts", "Drinks"];

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen mx-auto bg-black mt-10 text-white ">
      <section className="relative py-16 md:py-24 border-b border-white/5 ">
        <div className="container px-6 mx-auto text-center animate-fadeIn">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className=" w-8 bg-[#c5a059]/50"></div>
            <span className="text-[#c5a059] uppercase tracking-[0.4em] text-[10px] font-bold">
              Exclusive Selection
            </span>
            <div className=" w-8 bg-[#c5a059]/50"></div>
          </div>
          <h1 className="text-6xl md:text-8xl font-serif tracking-tighter mb-6">
            Our <span className="text-[#c5a059] italic">Menu</span>
          </h1>
          <p className="max-w-xl mx-auto text-neutral-400 text-sm md:text-base font-light opacity-60">
            A celebration of seasonal ingredients and culinary mastery,{" "}
            <br className="hidden md:block" /> curated for a truly royal
            experience.
          </p>
        </div>
      </section>

      <div className="sticky top-0 z-40 backdrop-blur-xl border-b text-center  py-6 mb-6">
        <div className="container mx-auto  px-6">
          <CategoryTabs
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>
      </div>

      {/* Grid Content */}
      <section className="py-20 lg:py-24 mb-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-14">
            {filteredItems.map((item, idx) => (
              <div
                key={`${item.id}-${activeCategory}`}
                className="animate-slideUp"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <MenuCard {...item} />
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-32">
              <p className="text-neutral-500 font-serif italic text-xl opacity-40">
                No items available in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="bg-[#c5a059] text-black md:py-32 ">
        <div className="max-w-4xl mx-auto text-center border p-12 md:p-20 rounded-[2.5rem]">
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-black font-bold">
            Reserved Your Experience?
          </h2>
          <p className=" text-base md:text-lg mb-12 font-light opacity-70 italic">
            Join us for an unforgettable evening. Secure your table today and
            let us take you on a journey of pure gastronomic delight.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 ">
            <Button
              onClick={() => (window.location.href = "/reservation")}
              className="px-12 text-amber-200 cursor-pointer"
            >
              RESERVE NOW
            </Button>
            <Button
              variant="outline"
              onClick={() => (window.location.href = "/contact")}
              className="px-12 text-black border border-black cursor-pointer"
            >
              TALK TO US
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;
