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
    <div className="flex justify-center">
      <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 p-1.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 no-scrollbar overflow-x-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-8 py-2.5 rounded-full text-lg  font-bold uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer whitespace-nowrap ${
              activeCategory === category
                ? "bg-[#c5a059] shadow-lg"
                : "text-neutral-400  "
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
