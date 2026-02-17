import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="text-3xl font-bold font-serif tracking-wider"
            >
              <span className="text-[#c5a059]">Loyal</span>
              <span> Platter</span>
            </Link>

            <p className="mt-6 text-neutral-400 leading-relaxed max-w-sm mx-auto md:mx-0">
              Experience the pinnacle of fine dining where culinary artistry
              meets refined ambiance. We craft unforgettable moments through
              flavor and elegance.
            </p>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="font-serif uppercase tracking-widest text-[#c5a059] mb-6">
              Contact Information
            </h4>

            <div className="space-y-3 text-neutral-400">
              <p>123 Gastronomy Lane, Culinary City</p>
              <p>+1 (555) 789-1234</p>
              <p>reservations@loyal.com</p>
            </div>
          </div>

          {/* Hours */}
          <div className="text-center md:text-right">
            <h4 className="font-serif uppercase tracking-widest text-[#c5a059] mb-6">
              Opening Hours
            </h4>

            <div className="space-y-3 text-neutral-400">
              <p>Mon – Thu: 5 PM – 10 PM</p>
              <p>Fri – Sat: 5 PM – 11 PM</p>
              <p>Sunday: 11 AM – 9 PM</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-14 pt-8 text-center">
          <p className="text-xs text-neutral-500 tracking-wide">
            © {new Date().getFullYear()} Loyal Platter. Crafted for
            unforgettable dining.
          </p>
        </div>
      </div>
    </footer>
  );
}
