import React from "react";

interface MenuCardProps {
    name: string;
    description: string;
    price: string;
    image?: string;
    category?: string;
}

const MenuCard: React.FC<MenuCardProps> = ({ name, description, price, image }) => {
    return (
        <div className="group bg-[#151515] rounded-2xl overflow-hidden border border-white/5 hover:border-[#c5a059]/30 transition-all duration-500">
            {/* Image Container with Aspect Ratio */}
            <div className="relative aspect-[4/3] overflow-hidden">
                {image ? (
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                ) : (
                    <div className="w-full h-full bg-neutral-800 flex items-center justify-center">
                        <span className="text-neutral-500 font-serif italic text-xl">{name}</span>
                    </div>
                )}
                {/* Price Badge - Minimalist */}
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md w-12 h-12 rounded-full flex items-center justify-center border border-white/10 group-hover:border-[#c5a059]/50 transition-colors">
                    <span className="text-[#c5a059] font-serif text-sm italic">{price.replace('$', '')}</span>
                </div>
            </div>

            {/* Content */}
            <div className="p-8">
                <div className="flex justify-between items-baseline mb-3">
                    <h3 className="text-2xl font-serif text-white group-hover:text-[#c5a059] transition-colors leading-tight">
                        {name}
                    </h3>
                </div>
                <p className="text-neutral-400 text-[15px] font-light leading-relaxed mb-8 opacity-80 line-clamp-2">
                    {description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <button className="text-[10px] uppercase tracking-[0.3em] text-[#c5a059] font-bold hover:text-white transition-colors cursor-pointer flex items-center gap-2 group/btn">
                        Add to Order
                        <span className="w-8 h-[1px] bg-[#c5a059]/30 group-hover/btn:w-16 group-hover/btn:bg-[#c5a059] transition-all"></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;
