import {
  Clock,
  Facebook,
  Github,
  Instagram,
  Mail,
  Map,
  Phone,
} from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-black text-white overflow-hidden">
      <div className="min-h-[320px] sm:min-h-[420px] flex flex-col justify-center items-center text-center px-4 sm:px-6">
        <h1 className="text-4xl sm:text-5xl md:text-8xl font-light">
          Contact <span className="italic text-[#c5a059]">Us</span>
        </h1>
        <p className="max-w-2xl text-gray-400 mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed">
          Have questions or want to make a reservation? Reach out to Royal
          Platter — we’re here to help!
        </p>
      </div>

      <hr className="border-[#c5a059]/30" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="space-y-8">
          <div>
            <h5 className="text-[#c5a059] tracking-[0.35em] text-xs uppercase">
              Keep Close
            </h5>

            <h1 className="text-2xl sm:text-3xl font-semibold mt-2 tracking-wide">
              Get in touch
            </h1>

            <p className="text-gray-400 mt-4 max-w-lg leading-relaxed text-sm sm:text-base">
              We’d love to hear from you! Whether you have a question, want to
              make a reservation, or just want to share your thoughts, our team
              at Royal Platter is always ready to assist.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl border border-white/10 bg-white/[0.02] transition w-full">
              <Map className="w-7 h-7 sm:w-8 sm:h-8 text-[#c5a059]" />
              <div className="text-sm text-gray-400">
                <p className="font-semibold text-white">Royal Platter</p>
                <p>Pokhara, 14 Fulbari</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl border border-white/10 bg-white/[0.02] transition w-full">
              <Phone className="w-7 h-7 sm:w-8 sm:h-8 text-[#c5a059]" />
              <div className="text-sm text-gray-400">
                <p className="font-semibold text-white">9872637264</p>
                <p>617638462</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl border border-white/10 bg-white/[0.02] transition w-full">
              <Mail className="w-7 h-7 sm:w-8 sm:h-8 text-[#c5a059]" />
              <div className="text-sm text-gray-400">
                <p className="font-semibold text-white">acnapoon@gmail.com</p>
                <p>kikiislove@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl border border-white/10 bg-white/[0.02] transition w-full">
              <Clock className="w-7 h-7 sm:w-8 sm:h-8 text-[#c5a059]" />
              <div className="text-sm text-gray-400">
                <p className="font-semibold text-white">Open 9:00am</p>
                <p>Closed 12:00pm</p>
              </div>
            </div>
          </div>

          <hr className="border-white/10" />

          <div>
            <h1 className="text-xs tracking-[0.3em] text-gray-400 uppercase">
              Follow Us
            </h1>

            <div className="flex gap-3 sm:gap-4 mt-4 justify-center sm:justify-start">
              <Facebook className="w-9 h-9 sm:w-10 sm:h-10 p-2 rounded-full border border-[#c5a059]/40 text-[#c5a059] hover:bg-[#c5a059] hover:text-black transition cursor-pointer" />
              <Instagram className="w-9 h-9 sm:w-10 sm:h-10 p-2 rounded-full border border-[#c5a059]/40 text-[#c5a059] hover:bg-[#c5a059] hover:text-black transition cursor-pointer" />
              <Github className="w-9 h-9 sm:w-10 sm:h-10 p-2 rounded-full border border-[#c5a059]/40 text-[#c5a059] hover:bg-[#c5a059] hover:text-black transition cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl">
          <h1 className="text-2xl sm:text-3xl font-semibold">Your Details</h1>
          <p className="text-sm text-gray-400 mt-2">
            Let us know how to get back to you
          </p>

          <div className="mt-6 sm:mt-8 grid sm:grid-cols-2 gap-4 sm:gap-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-[#c5a059]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-[#c5a059]"
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            className="w-full mt-4 sm:mt-6 bg-black border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-[#c5a059]"
          />

          <textarea
            placeholder="Comment or question..."
            rows={5}
            className="w-full mt-4 sm:mt-6 bg-black border border-white/20 rounded-lg px-4 py-4 focus:outline-none focus:border-[#c5a059] resize-none"
          />

          <button className="w-full sm:w-auto bg-[#c5a059] px-8 sm:px-10 py-3 sm:py-4 rounded-2xl hover:bg-amber-200 text-black font-bold mt-4 transition">
            CONTACT US
          </button>
        </div>
      </div>

      <hr className="border-[#c5a059]/30" />

      <div className="w-full h-[300px] sm:h-[400px] lg:h-[550px] px-4 sm:px-6 lg:px-10 pb-10">
        <iframe
          src="https://www.google.com/maps?q=Pokhara&output=embed"
          className="w-full h-full rounded-2xl grayscale hover:grayscale-0 transition duration-500"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
