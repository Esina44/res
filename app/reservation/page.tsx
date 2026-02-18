import { MoveDown } from "lucide-react";

export default function Reservation() {
  return (
    <>
      <section className="bg-black text-white ">
        <div className="bg-black min-h-[420px] flex flex-col justify-center mt-6 items-center text-center px-6">
          <h1 className="text-5xl md:text-8xl font-bold text-white uppercase">
            Book <span className="text-[#c5a059] italic">Now</span>
          </h1>
          <p className="text-center max-w-2xl text-gray-400 mt-6 text-sm md:text-base leading-relaxed">
            Reserve your table and enjoy an unforgettable dining experience.
            Whether it’s a cozy dinner, a family gathering, or a special
            celebration, we’re ready to welcome you with exceptional service and
            flavors crafted to delight.
          </p>
          <div className="text-6xl">
            <MoveDown className="text-[#c5a059]" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <p className="text-2xl max-w-xl text-center text-[#c5a059]">
            In order to secure your reservation we kindly request to deposite of
            Rs1000
          </p>
          <h1 className="text-sm mt-3 text-gray-400">
            This deposite serves as a conformation of your booking and will be
            deducted from your final bill.
          </h1>
        </div>
        <form className="max-w-2xl mx-auto mt-10 p-10 rounded-2xl border border-[#c5a059]/40  shadow-2xl space-y-4">
          <p className="text-center text-gray-400 text-sm md:text-base leading-relaxed max-w-lg mx-auto">
            Once you have completed the form below with the necessary details,
            you will be automatically redirected to our secure payment window.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h1 className="text-xs mb-2 text-[#c5a059] tracking-wider">
                NAME
              </h1>
              <input
                type="text"
                placeholder="Esina"
                className="w-full bg-black border border-[#c5a059] rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#c5a059]/50 transition"
              />
            </div>

            <div>
              <h1 className="text-xs mb-2 text-[#c5a059] tracking-wider">
                SURNAME
              </h1>
              <input
                type="text"
                placeholder="Esina"
                className="w-full bg-black border border-[#c5a059] rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#c5a059]/50 transition"
              />
            </div>
          </div>

          <div>
            <h1 className="text-xs mb-2 text-[#c5a059] tracking-wider">
              PHONE
            </h1>
            <input
              type="tel"
              placeholder="+977 9872637264"
              className="w-full bg-black border border-[#c5a059] rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#c5a059]/50 transition"
            />
          </div>

          <div>
            <h1 className="text-xs mb-2 text-[#c5a059] tracking-wider">
              EMAIL ADDRESS
            </h1>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full bg-black border border-[#c5a059] rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#c5a059]/50 transition"
            />
          </div>
          <div>
            <h1 className="text-xs mb-2 text-[#c5a059] tracking-wider">
              GUESTS
            </h1>
            <input
              type="number"
              placeholder="Number of Guests"
              min={0}
              className="w-full bg-black border border-[#c5a059] rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#c5a059]/50 transition"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h1 className="text-xs mb-2 text-[#c5a059] tracking-wider">
                DATE
              </h1>
              <input
                type="date"
                className="w-full bg-black border border-[#c5a059] rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#c5a059]/50 transition cursor-pointer"
              />
            </div>

            <div>
              <h1 className="text-xs mb-2 text-[#c5a059] tracking-wider">
                TIME
              </h1>
              <input
                type="time"
                className="w-full bg-black border border-[#c5a059] rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#c5a059]/50 transition cursor-pointer"
              />
            </div>
          </div>
          <button className="w-full bg-[#c5a059] py-4 rounded-xl text-black font-semibold tracking-wide hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition duration-300">
            BOOK NOW
          </button>
        </form>
        <h1 className="mx-auto text-center mt-2 text-[#c5a059]">
          Thank You For Choosing Us!
        </h1>
        <p className="uppercase mx-auto text-center mt-20 text-[#c5a059] pb-2">
          Please note that the deposite is non-refundable in case of
          cancellation or no-show
        </p>
      </section>
    </>
  );
}
