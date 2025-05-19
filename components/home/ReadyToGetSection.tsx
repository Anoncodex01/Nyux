export function ReadyToGetSection() {
  return (
    <section className="py-20 bg-[#f6f6ef] flex flex-col items-center justify-center text-center">
      <div className="w-full max-w-5xl mx-auto">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 shadow-2xl px-4 md:px-20 py-16 flex flex-col items-center relative overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">
            Ready To Elevate Your Brand?<br />Take The Next Step With Us!
          </h2>
          <p className="text-base md:text-lg text-blue-100 mb-8 max-w-xl">
            Unleashing Comprehensive Digital Marketing Services Tailored to Elevate Your Online Presence and Boost Your Success.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 rounded-full bg-white text-blue-900 font-semibold shadow hover:bg-blue-100 transition text-lg mb-4"
          >
            Get Started
          </a>
          <div className="text-blue-200 text-sm mt-2 font-handwritten">
            <span className="inline-block">↳ Let's start your journey here!</span>
          </div>
        </div>
      </div>
    </section>
  );
} 