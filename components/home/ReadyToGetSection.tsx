export function ReadyToGetSection() {
  return (
    <section className="py-20 bg-[#f6f6ef] flex flex-col items-center justify-center text-center">
      <div className="w-full max-w-5xl mx-auto">
        <div className="rounded-[2.5rem] bg-gradient-to-b from-[#964604] to-[#953735] shadow-2xl px-4 md:px-20 py-16 flex flex-col items-center relative overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">
            Ready to Secure Your Financial Future?
          </h2>
          <p className="text-base md:text-lg text-gray-200 mb-8 max-w-xl">
            Discover how our expert advisory, actuarial, and tax services can empower your business to grow, optimize performance, and manage risk. Book a consultation with NYUX Consultancy today.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 rounded-full bg-white text-[#964604] font-semibold shadow hover:bg-[#f7e7d6] hover:text-[#953735] transition text-lg mb-4"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
} 