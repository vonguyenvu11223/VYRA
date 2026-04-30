import Image from "next/image";

const lookbookImages = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJtLsc-zqNcnJL9uZmFpsORKqyRhEx0enpqrWF-5S_q3TFfLAIPz983NyFO8zuGwWcw86f2Efwe3DLoJkOn_IjXjmGo8pj-Y3qL3kpPJE9PgGmeNNXErv0g7YdSCcSnVrJlzZx9mLfzI11QyOe59rhUObCh7VfoUgE5GMMD_cALozu_1vRevu9xy_M4vyQ2ykmC_NymBPpKQVwZbP4S9fdJhMNkEgm1k0UnwBQCwB9jaV1m4CuqocEzpvL5KFVVsm_ITY6iNiICp_O",
    alt: "Editorial lookbook - cashmere coat in library",
    width: 600,
    height: 375,
    aspect: "aspect-[16/10]",
    grayscale: true,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAqAfVJeNPnAHC081l9K3ZUnxLHayxnXa_iCm5zXwEQ4lPcm4nx2cke3S_5ZDhrVPGOrkIsvss49fKLKaVTmDAFcJU6fZAYw1etOIABE2s7MFaI_T2sZSymHDagucfjFT4IaqGp6LYbDHCmeGyr8j6cZFUgYJ2eF6CWeskMgjLN4V4OU9-49k2mohcFXroN6DukX_f5qCj_r4lKcfCoKGPVhnpOT2GsEYJH2PO-0WDltIJotMHSaNFpLvS9jSQ9LAuKuAnBHyQp9Le",
    alt: "Luxury accessories close-up",
    width: 400,
    height: 600,
    aspect: "aspect-[2/3]",
    grayscale: false,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7Yv3oNJ7SWAZCTZdDOk7OhB7KoNljTSY5oTf38Erk3J6vsCHUp_Li4tV2Aq6qdK1Vb9n89ro6N1DYPuqzDqsB2mTfdO3wUfWN19L_W6-aGnapnE63GMLetQ1X1QzC_vq1tCA0HkN2jPiSanzNvWl215urakLkr4LzboNKmWzkAddkzU7ywp0KTL3fGIjWBh2LyiANrOKRBCTjfRMaxhcofwOk8Q4_6Gdf112GB4xdP1GSZJRZppAiKZYPJeVH6qkvD1rgHWOhMoSY",
    alt: "Two models in modern art gallery",
    width: 600,
    height: 375,
    aspect: "aspect-[16/10]",
    grayscale: true,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmf3krI3qdo5PTyZTdY2mWHHgtSOVEGrHDKuO1rOfxnC_D16FgsqYIWJhelFSUObIUyk75u0uUoG1Ytn6-U95lt956biM14lv_sIjD-OnmP1N7uPtvErA1ALytRpN1gX69Jh4Rw8x_-zojhG5QlmJTBKi1Z5fVxF1SXW3hYjh-5se_QxbZR-HCjPUvSdeft0QiB5fNpTPFjIhvpgeB3T44lHUj_H97SptK9HmyqBSK5-s-1vSJndbfduH3T4omYdV8Az2iSIwkIjS1",
    alt: "Avant-garde white shirt editorial",
    width: 400,
    height: 600,
    aspect: "aspect-[2/3]",
    grayscale: false,
  },
];

export default function Lookbook() {
  return (
    <section className="py-40 overflow-hidden">
      <div className="px-8 md:px-16 mb-12">
        <h2 className="font-sans text-xs font-semibold tracking-[0.4em] uppercase text-amber-600">
          Volume III: Light &amp; Shadow
        </h2>
      </div>
      <div className="flex gap-8 px-8 md:px-16 overflow-x-auto no-scrollbar pb-12">
        {lookbookImages.map((img, i) => (
          <div
            key={i}
            className={`flex-none bg-stone-100 ${img.aspect} overflow-hidden`}
            style={{ width: img.width }}
          >
            <Image
              className={`w-full h-auto object-cover ${img.grayscale ? "grayscale" : ""}`}
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              sizes={`${img.width}px`}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
