import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    title: "Tailored Essentials",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDfTD6cukFYelTKM3gE1L-7U7On9mpRk9jbJLLl2kEervBORRl3y0v8hdKnML12iqDQX9xmTYnGiN1VRq_Sox6mAgpk_mcUFyh_KxQcLEPqov4ENG0ztuOVKp74wkC5pvZHY8vZ-apoYwhtpDjpy4iJmZzHXOpB6KPzS9sWTCJ0XLVezOux-WUuBs53gw1asqTnXoaOsjCAFdXMbpDc1nuoC8Cx4cvFSqhZtdm1niz6LTTzKRcUwsKdN04tLA31ry9i18KrDlk_xZ8g",
    alt: "A vertical fashion campaign image showing a model in a minimal beige trench coat",
    offsetClass: "",
  },
  {
    title: "Evening Statements",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBDNspRm-Ezv0VqpId4_lWQwIRIy6eMDuzW3aqW5cs-94OR9OO7i5icwqPDLicuc924jwsPHEeFO1JFEU6hn0UgQyx13V_n706Iu-qPEoNGOE2lIA0lXb9stDdDzOD-fdhCH0cWdodapVgTwHDcjPcKHZZ7BtX6axBR5egjSfvkBperSzcQeGj9ZtdWSXqwjwYTivri_bu7CqDU-o0c4-6NOE0H39eKJEvwGxU8j7SbGhxfsM8oRDsZ4HVhycYrTmT-BugIQ0-u_otp",
    alt: "A sophisticated editorial shot of an evening gown in matte black silk",
    offsetClass: "mt-12 md:mt-24",
  },
  {
    title: "Everyday Icons",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJAraVxeYF09uFTrHXMh1EAOtpymY6PJhlCMiip0Hpcf84BVSmpIEra17rk94eL0gqVXGmmtM_S2Vom-MnvMOw_tor-c_1Zk70wtpxHnNoKqiRvII4ewWn9R2cae3U1Atjztph3b1YuhIbnRm6snvRLGf6GbkWcrbdvo1knNIfvNRoqa18Cfx6SXXQS7bJ-_Bh8M5wj-ZIkLx2m0ewwqd-ro-3XYqotWECdOXMwa5rns42XipXy62s3oDgEPH5KdUqDgCLzY-rS_Pb",
    alt: "A minimalist fashion photography shot of modern knitwear in a soft oatmeal color",
    offsetClass: "mt-12 md:-mt-12",
  },
];

export default function Collections() {
  return (
    <section className="py-40 px-8 md:px-16 max-w-[1440px] mx-auto">
      {/* Section Header */}
      <div className="mb-24 flex justify-between items-end">
        <div>
          <h2 className="font-serif text-5xl leading-[56px] tracking-tight mb-4">
            Curated Curations
          </h2>
          <p className="font-sans text-base text-on-surface-variant">
            The foundations of a modern wardrobe.
          </p>
        </div>
        <Link
          href="/collections"
          className="font-sans text-xs font-semibold tracking-[0.15em] uppercase border-b border-on-surface pb-1 hover:text-amber-600 hover:border-amber-600 transition-colors"
        >
          View All
        </Link>
      </div>

      {/* Collection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {collections.map((col) => (
          <div
            key={col.title}
            className={`group relative aspect-[3/4] overflow-hidden bg-stone-100 ${col.offsetClass}`}
          >
            <Image
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
              src={col.image}
              alt={col.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
            <div className="absolute bottom-10 left-10">
              <h3 className="font-serif text-[32px] leading-[40px] text-white mb-2">
                {col.title}
              </h3>
              <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-white/80">
                Shop Collection
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
