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
    <>
      <section className="bg-black text-white overflow-hidden">
        <div className="bg-black min-h-[420px] flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl md:text-8xl font-light text-white">
            Contact <span className="italic text-[#c5a059]">Us</span>
          </h1>
          <p className="text-center max-w-2xl text-gray-400 mt-6 text-sm md:text-base leading-relaxed">
            Have questions or want to make a reservation? Reach out to Royal
            Platter — we’re here to help!
          </p>
        </div>

        <hr className="border-[#c5a059]/30" />

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 px-6 py-20">
          <div className="space-y-8">
            <div>
              <h5 className="text-[#c5a059] tracking-[0.35em] text-xs uppercase">
                Keep Close
              </h5>

              <h1 className="text-3xl font-semibold mt-2 tracking-wide">
                Get in touch
              </h1>

              <p className="text-gray-400 mt-4 max-w-lg leading-relaxed">
                We’d love to hear from you! Whether you have a question, want to
                make a reservation, or just want to share your thoughts, our
                team at Royal Platter is always ready to assist. Reach out and
                we’ll make sure your experience is seamless and memorable.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#c5a059]/40 hover:bg-white/[0.04] transition">
                <Map className="w-8 h-8 text-[#c5a059]" />
                <div className="flex flex-col text-sm text-gray-400 gap-1">
                  <h1 className="font-semibold text-white">
                    Royal Platter, Ac
                  </h1>
                  <p>Pokhara, 14 Fulbari</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#c5a059]/40 hover:bg-white/[0.04] transition">
                <Phone className="w-8 h-8 text-[#c5a059]" />
                <div className="flex flex-col text-sm text-gray-400 gap-1">
                  <h1 className="font-semibold text-white">9872637264</h1>
                  <p>617638462</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#c5a059]/40 hover:bg-white/[0.04] transition">
                <Mail className="w-8 h-8 text-[#c5a059]" />
                <div className="flex flex-col text-sm text-gray-400 gap-1">
                  <h1 className="font-semibold text-white">
                    acnapoon@gmail.com
                  </h1>
                  <p>kikiislove@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#c5a059]/40 hover:bg-white/[0.04] transition">
                <Clock className="w-8 h-8 text-[#c5a059]" />
                <div className="flex flex-col text-sm text-gray-400 gap-1">
                  <h1 className="font-semibold text-white">Open 9:00am</h1>
                  <p>Closed 12:00pm</p>
                </div>
              </div>
            </div>

            <hr className="border-white/10" />

            <div>
              <h1 className="text-sm tracking-[0.3em] text-gray-400 uppercase">
                Follow Us
              </h1>

              <div className="flex gap-4 mt-4">
                <Facebook className="w-10 h-10 p-2.5 rounded-full border border-[#c5a059]/40 text-[#c5a059] hover:bg-[#c5a059] hover:text-black hover:scale-105 transition cursor-pointer" />
                <Instagram className="w-10 h-10 p-2.5 rounded-full border border-[#c5a059]/40 text-[#c5a059] hover:bg-[#c5a059] hover:text-black hover:scale-105 transition cursor-pointer" />
                <Github className="w-10 h-10 p-2.5 rounded-full border border-[#c5a059]/40 text-[#c5a059] hover:bg-[#c5a059] hover:text-black hover:scale-105 transition cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl">
            <h1 className="text-3xl font-semibold">Your Details</h1>
            <p className="text-sm text-gray-400 mt-2">
              Let us know how to get back to you
            </p>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div>
                <h1 className="text-xs mb-2 text-gray-400">NAME</h1>
                <input
                  type="text"
                  placeholder="Esina"
                  className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-[#c5a059] transition"
                />
              </div>

              <div>
                <h1 className="text-xs mb-2 text-gray-400">EMAIL ADDRESS</h1>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-[#c5a059] transition"
                />
              </div>
            </div>

            <div className="mt-6">
              <h1 className="text-xs mb-2 text-gray-400">SUBJECT</h1>
              <input
                type="text"
                placeholder="text"
                className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-[#c5a059] transition"
              />
            </div>

            <div className="mt-6">
              <h1 className="text-xs mb-2 text-gray-400">
                COMMENT / QUESTIONS
              </h1>
              <textarea
                placeholder="Esina"
                rows={5}
                className="w-full bg-black border border-white/20 rounded-lg px-4 py-4 focus:outline-none focus:border-[#c5a059] transition resize-none"
              />
            </div>
            <button className="bg-[#c5a059] px-10 py-4 rounded-2xl hover:bg-amber-200  text-black cursor-pointer font-bold mt-2 transition duration-300">
              CONTACT US
            </button>
          </div>
        </div>
        <hr className="border-[#c5a059]/30" />
        <div className="w-full h-[550px] p-10 rounded-2xl ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112488.4142439247!2d83.87421710272294!3d28.22969770622919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995937bbf0376ff%3A0xf6cf823b25802164!2sPokhara!5e0!3m2!1sen!2snp!4v1771346060615!5m2!1sen!2snp"
            className="w-full h-full grayscale hover:grayscale-0 transition duration-500"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}
