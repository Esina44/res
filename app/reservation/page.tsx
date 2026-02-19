import { MoveDown } from "lucide-react";

export default function Reservation() {
  return (
    <section className="bg-black text-white px-4 sm:px-6 mt-10">
      <div className="min-h-[320px] sm:min-h-[420px] flex flex-col justify-center items-center text-center mt-4 sm:mt-6">
        <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold uppercase">
          Book <span className="text-[#c5a059] italic">Now</span>
        </h1>

        <p className="max-w-2xl text-gray-400 mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed">
          Reserve your table and enjoy an unforgettable dining experience.
          Whether it’s a cozy dinner, a family gathering, or a special
          celebration, we’re ready to welcome you with exceptional service.
        </p>

        <MoveDown className="text-[#c5a059] text-4xl sm:text-6xl mt-4" />
      </div>

      <div className="flex flex-col items-center justify-center text-center px-2">
        <p className="text-lg sm:text-2xl max-w-xl text-[#c5a059]">
          To secure your reservation, a deposit of Rs 1000 is required.
        </p>

        <p className="text-xs sm:text-sm mt-2 sm:mt-3 text-gray-400 max-w-md">
          This deposit confirms your booking and will be deducted from your
          final bill.
        </p>
      </div>

      <form className="max-w-2xl mx-auto mt-8 sm:mt-10 p-6 sm:p-10 rounded-2xl border border-[#c5a059]/40 shadow-2xl space-y-4">
        <p className="text-center text-gray-400 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
          After submitting the form, you will be redirected to secure payment.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <p className="text-xs mb-2 text-[#c5a059] tracking-wider">NAME</p>
            <input
              type="text"
              placeholder="Esina"
              className="w-full bg-black border border-[#c5a059] rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#c5a059]/50"
            />
          </div>

          <div>
            <p className="text-xs mb-2 text-[#c5a059] tracking-wider">
              SURNAME
            </p>
            <input
              type="text"
              placeholder="Pun"
              className="w-full bg-black border border-[#c5a059] rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#c5a059]/50"
            />
          </div>
        </div>

        <div>
          <p className="text-xs mb-2 text-[#c5a059] tracking-wider">PHONE</p>
          <input
            type="tel"
            placeholder="+977 98XXXXXXXX"
            className="w-full bg-black border border-[#c5a059] rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#c5a059]/50"
          />
        </div>

        <div>
          <p className="text-xs mb-2 text-[#c5a059] tracking-wider">EMAIL</p>
          <input
            type="email"
            placeholder="example@gmail.com"
            className="w-full bg-black border border-[#c5a059] rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#c5a059]/50"
          />
        </div>

        <div>
          <p className="text-xs mb-2 text-[#c5a059] tracking-wider">GUESTS</p>
          <input
            type="number"
            min={1}
            placeholder="Number of Guests"
            className="w-full bg-black border border-[#c5a059] rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#c5a059]/50"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <p className="text-xs mb-2 text-[#c5a059] tracking-wider">DATE</p>
            <input
              type="date"
              className="w-full bg-black border border-[#c5a059] rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#c5a059]/50"
            />
          </div>

          <div>
            <p className="text-xs mb-2 text-[#c5a059] tracking-wider">TIME</p>
            <input
              type="time"
              className="w-full bg-black border border-[#c5a059] rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#c5a059]/50"
            />
          </div>
        </div>

        <button className="w-full bg-[#c5a059] py-3 sm:py-4 rounded-xl text-black font-semibold tracking-wide hover:opacity-90 transition">
          BOOK NOW
        </button>
      </form>

      <p className="text-center mt-4 text-[#c5a059] text-sm">
        Thank You For Choosing Us!
      </p>

      <p className="uppercase text-center mt-12 sm:mt-20 text-[#c5a059] text-xs sm:text-sm pb-4">
        Deposit is non-refundable in case of cancellation or no-show.
      </p>
    </section>
  );
}
