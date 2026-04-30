import Image from "next/image";

export default function Hero() {
  return (
    <header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          className="object-cover grayscale brightness-75 scale-105"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAonxmd4RQ3Tas-O6fggre2HHt33gR5wJ9o4ZQPwF_Ta7v3QV7-u1mLCHU1jSpURX7sLJ24u9mAphkZVZErqunTmgR0TX21OqQv8jsq26SQ_YVo4rUgQ4HVAhsQxYSrk9uKWHL1l6K8Hz8vUzMHki6cRxN3IwRtUjd4H1vZXd33zcj0IQzGMbr3DKD2aKjKLq2cCTQQZn6VwMxgRSdUXMelKRdJm3XKAj1KgFBDS-JtesEvlu3culBShzSVVQknbPPv3LAdOm6FLOy"
          alt="A cinematic, high-fashion editorial wide shot featuring a statuesque model wearing an oversized, structured unisex blazer in charcoal grey"
          fill
          priority
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="font-serif text-[80px] leading-[96px] tracking-tight font-light mb-6">
          Elegance Without Labels
        </h1>
        <p className="font-sans text-lg leading-8 mb-12 max-w-2xl mx-auto font-light tracking-wide opacity-90">
          Unisex silhouettes designed for modern icons.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <button className="bg-primary text-on-primary font-sans text-xs font-semibold tracking-[0.2em] uppercase px-10 py-5 hover:bg-amber-600 transition-colors duration-500">
            Discover Collection
          </button>
          <button className="liquid-glass text-white font-sans text-xs font-semibold tracking-[0.2em] uppercase px-10 py-5 hover:bg-white/20 transition-colors duration-500">
            View Lookbook
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
        <span className="material-symbols-outlined">keyboard_double_arrow_down</span>
      </div>
    </header>
  );
}
