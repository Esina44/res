import React from "react";

interface CategoryTabsProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="overflow-x-auto py-2 no-scrollbar">
      <div className="inline-flex gap-2 md:gap-4 p-1.5 bg-black backdrop-blur-md rounded-full border border-white/10 min-w-max">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-6 md:px-8 py-2.5 rounded-full text-lg font-bold uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer whitespace-nowrap ${
              activeCategory === category
                ? "bg-[#c5a059] shadow-lg text-black"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;
