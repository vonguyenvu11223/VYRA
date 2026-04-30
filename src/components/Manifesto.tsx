import Image from "next/image";

export default function Manifesto() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[800px]">
      {/* Left: Editorial Image */}
      <div className="relative overflow-hidden bg-stone-200 min-h-[400px]">
        <Image
          className="object-cover grayscale"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPPQ4DlZMD7bE7uIvwWpby_LR3QB0DAqrcSwIdnNuwesXZS6RbISmrunC5MIMIo8Du7gr0ScnR4_dZqqVwc5K4UqT3xgSFr6gC3sLK6i5Lu4x1DsyngVb1kCRh8QRAfLrUUxlWKiJODz-YVrRA0XUjsBoTPJxZwA6tSaxCeNjO0oB3Wb0IEv-UhM0o4bQRgjUniJA-Kr5IdT3isOo_Ngx2u609Na_gaUan9zXqubxl7qS66UvgBZEmeJ0SJW_sW39Equi7xD0pjqOQ"
          alt="An artistic black and white close-up portrait of a fashion model with sharp features"
          fill
          sizes="50vw"
        />
      </div>

      {/* Right: Manifesto Text */}
      <div className="bg-secondary-fixed flex items-center justify-center p-12 md:p-24">
        <div className="max-w-md">
          <span className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-on-tertiary-container mb-8 block">
            Our Philosophy
          </span>
          <h2 className="font-serif text-5xl leading-[56px] tracking-tight mb-10 text-on-surface">
            The Architecture of Silence
          </h2>
          <div className="space-y-6 text-on-surface-variant font-sans text-lg leading-relaxed italic opacity-80">
            <p>
              At VYRA, we believe that true elegance doesn&apos;t demand attention; it
              commands it through quiet confidence and architectural precision.
            </p>
            <p>
              Our pieces are engineered for the modern icon, stripping away the
              superfluous to reveal the essential beauty of form and fabric. We
              create not for the season, but for the legacy.
            </p>
          </div>
          <div className="mt-12 h-[1px] w-24 bg-amber-500/40"></div>
        </div>
      </div>
    </section>
  );
}
