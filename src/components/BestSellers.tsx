import Image from "next/image";

const products = [
  {
    name: "Architectural Poplin Shirt",
    price: "$420",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAriz1pwzX1JV7haJPBjByqHkoXAQ3baqGVEwE-bNDXs58VrTmWQUMIS1n4aRoKfShdPAB-MnjokB-eSrtHynhE9cJhMK47-mp35gsTiH0p37pATq98Qvzpv7l3__uHVi5tiWGJefhG-9BOOpYFEkOb1LiwqyZFJHAxnL3wHldb6cPeCATaTNwtRE6zvRMcCB1Hn_Q9yPqaw6Kr93PvKqu9xOcG5rH_WSGIuVJiOJGO-KtWODdQXgP-IxKPGaL7yUElZ5gDPHxGzPf",
    alt: "White structured shirt",
  },
  {
    name: "Wide-Leg Wool Trousers",
    price: "$650",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-3uUQQjSZ4-F9oXQOg-uoSbJ_AX3qHOqN8hJpn_Ivoz5lGmtWHkLSM4s3Ocr5lPWT9tKsXq9dTQGUw1uByhnP2Ai-1-nZwniYE0Vxz0oIbxlWfKKquEmfbHSgDmUExTVA3_x6Q9GgAiQRjyj2XLRm8_29wJCHDp0uodMX-CssmL1pYdamKb4tRhJoYjMKgYGboQ-Pizd8IV4KwF5TFBgBJadvNyiZN3VRM5p7-0QM-jSdWk5GRVoQWUVqziHotPfrKKC29no1ULAj",
    alt: "Black wool trousers",
  },
  {
    name: "Unisex Sculpted Blazer",
    price: "$1,200",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkllP0BAkphzoGXdKNMWfqQNkvGX3AT_bJKLLlnfq1f2Vr0ZRE5N0WxKgYX0tu3VnfzfjLEaqncrMHhhSycTMHia0R7FnHDz2XSc7an2YgXecgiFka7lFtVhCy0DI0lal8TTQw3YZLWGySAbBu6DJziZV2CYstTHoQevv4LNSFKL1PaZMbhvWcxrBvAkWScArPNYytTEw_TXKwzdhhM7JfKyWqc5gPY6RO3MbLizIv7-x0AM3Ksna_8vjjYuE84TvxEP8OCXfG8bvh",
    alt: "Black blazer in crepe fabric",
  },
  {
    name: "Fluid Silk Slip",
    price: "$580",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADJvlYOU7tBytFXuMzQbkifElaeug2THM8AgCYEaMgFCLE35M89-NV7LKWWmeZ_DtzwG1gCaK5qpl8dPmT60wh5lMZbH_lw_mVywc_GsbPW45u1ZWjvqtMNDDPjZxyrbYgMTdqxfaqg7l7X56tkANWo6H18wS3wvMzzG2AAmSTqhaYM3qP9SZhUGRhJhV-fv_OfKsSvuEpRLYNWZc_-0O004tYyBd_ol6RIGnPiTOfU7MOqO6uHkmw0i_HyC93V2DPJLoKn91NZn0j",
    alt: "Silk slip dress in champagne",
  },
];

export default function BestSellers() {
  return (
    <section className="py-40 bg-surface-container-low">
      <div className="px-8 md:px-16 max-w-[1440px] mx-auto">
        <div className="text-center mb-24">
          <h2 className="font-serif text-5xl leading-[56px] tracking-tight mb-4">The Essentials</h2>
          <div className="h-[1px] w-12 bg-amber-500 mx-auto"></div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
          {products.map((p) => (
            <div key={p.name} className="group cursor-pointer">
              <div className="aspect-[4/5] bg-white overflow-hidden mb-6 relative">
                <Image className="object-cover grayscale hover:grayscale-0 transition-all duration-700" src={p.image} alt={p.alt} fill sizes="(max-width: 768px) 50vw, 25vw" />
                <div className="absolute inset-0 flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="liquid-glass text-on-surface font-sans text-[10px] font-semibold tracking-[0.15em] uppercase px-6 py-3 hover:bg-white transition-colors">Quick Add</button>
                </div>
              </div>
              <p className="font-serif text-lg mb-1">{p.name}</p>
              <p className="font-sans text-sm text-on-surface-variant tracking-widest">{p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
