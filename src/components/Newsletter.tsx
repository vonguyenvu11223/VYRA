export default function Newsletter() {
  return (
    <section className="py-32 bg-on-primary-container text-white text-center">
      <div className="max-w-2xl mx-auto px-8">
        <span className="font-sans text-xs font-semibold tracking-[0.3em] uppercase text-amber-500 mb-6 block">
          The Inner Circle
        </span>
        <h2 className="font-serif text-5xl leading-[56px] tracking-tight mb-8">
          Join the Circle
        </h2>
        <p className="font-sans text-base mb-12 opacity-70">
          Be the first to experience our limited-edition drops and editorial stories.
        </p>
        <form className="flex flex-col md:flex-row gap-4 border-b border-white/20 pb-2">
          <input
            className="bg-transparent border-none focus:ring-0 focus:outline-none w-full font-sans text-xs font-semibold tracking-widest placeholder:text-white/40 text-white"
            placeholder="ENTER YOUR EMAIL ADDRESS"
            type="email"
          />
          <button
            className="font-sans text-xs font-semibold tracking-[0.2em] text-amber-500 whitespace-nowrap hover:text-white transition-colors"
            type="submit"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </section>
  );
}
