export default function About() {
  return (
    <>
      <section className="pt-25">
        <div className="bg-black h-[450px] flex flex-col justify-center items-center">
          <h1 className="text-9xl text-center text-white">
            About <span className="italic text-[#c5a059]">Us</span>
          </h1>
          <p className=" text-center max-w-2xl text-gray-300">
            We serve thoughtfully crafted dishes made from quality ingredients,
            blending authentic flavors with modern taste in a warm, welcoming
            space.
          </p>
        </div>
        <hr className="text-[#c5a059]" />
        <div className="w-full bg-black p-20 grid grid-cols-2 gap-2 justify-center items-center">
          <img src="about.jpg" alt="aboutimg" height={300} width={700} />
          <div className="flex flex-col">
            <h1 className="text-white text-6 text-4xl font-bold text-center">
              The Royal{" "}
              <span className="text-[#c5a059] italic">Experience</span>
            </h1>
            <p className="max-w-4xl mx-auto mt-6 text-center text-gray-300 text-lg leading-relaxed px-4">
              Welcome to Royal Platter Restaurant — a place where elegance,
              flavor, and hospitality come together. We created this space to
              offer more than just a meal; we offer an experience that delights
              the senses and brings people closer through food. Every dish is
              thoughtfully prepared using quality ingredients, inspired by rich
              culinary traditions and refined with modern creativity. Our
              atmosphere is designed to be warm, stylish, and inviting — perfect
              for family gatherings, celebrations, or peaceful moments of
              indulgence. From the presentation of each plate to the care in our
              service, we believe every detail matters. At Royal Platter
              Restaurant, our passion is simple: to serve unforgettable taste,
              genuine comfort, and a dining experience you will always want to
              return to.
            </p>
          </div>
        </div>
        <hr className="text-[#c5a059]" />
        <div className="w-full bg-black p-20 grid grid-cols-2 gap-4 justify-center items-center">
          <div className="flex flex-col">
            <h1 className="text-white text-6 text-4xl font-bold text-center">
              Crafting <span className="text-[#c5a059] italic">Meories</span>
            </h1>
            <p className="max-w-4xl mx-auto mt-6 text-center text-gray-300 text-lg leading-relaxed px-4">
              At Royal Platter Restaurant, every detail is designed to make your
              visit unforgettable. From the carefully curated menu to our
              inviting décor and attentive service, we aim to create moments
              that linger in memory long after the last bite. We celebrate the
              art of dining, blending timeless culinary traditions with
              contemporary flair, so each dish tells a story of passion,
              creativity, and excellence. Join us and discover why Royal Platter
              is more than a restaurant — it’s a place where flavor, comfort,
              and elegance meet.
            </p>
          </div>
          <img
            src="people2.jpg"
            alt="aboutimg"
            height={300}
            width={800}
            className="rounded-2xl"
          />
        </div>
        <hr className="text-[#c5a059]" />
        <div className="py-16 bg-[#c5a059] text-black  flex flex-col justify-center">
          <h1 className="text-6xl text-center font-bold mb-8 ">Our Places</h1>
          <ul className="max-w-3xl mx-auto space-y-4 text-center ">
            <li>Royal Platter Downtown – 123 Main Street, Pokhara</li>
            <li>Royal Platter Riverside – 456 River Road, Kathmandu</li>
            <li>Royal Platter Uptown – 789 High Street, Chitwan</li>
            <li>Royal Platter Airport – Terminal 1, Annapurna</li>
          </ul>
        </div>
      </section>
    </>
  );
}
