import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-20 px-8 md:px-16 border-t border-stone-200 bg-stone-50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
        {/* Brand */}
        <div className="space-y-8">
          <span className="text-xl font-light tracking-widest text-stone-900 font-serif">
            VYRA
          </span>
          <p className="font-serif text-sm tracking-wide text-stone-600 leading-relaxed">
            Elevating the human form through minimalist architecture and unparalleled craft.
          </p>
        </div>

        {/* Information */}
        <div className="space-y-4">
          <h4 className="font-sans text-[10px] font-semibold tracking-widest text-stone-400 uppercase">
            Information
          </h4>
          <ul className="space-y-2 font-serif text-sm tracking-wide">
            <li>
              <Link href="#" className="text-stone-600 hover:text-amber-600 underline-offset-8 hover:underline transition-colors duration-300">
                Sustainability
              </Link>
            </li>
            <li>
              <Link href="#" className="text-stone-600 hover:text-amber-600 underline-offset-8 hover:underline transition-colors duration-300">
                Shipping &amp; Returns
              </Link>
            </li>
            <li>
              <Link href="#" className="text-stone-600 hover:text-amber-600 underline-offset-8 hover:underline transition-colors duration-300">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* The Brand */}
        <div className="space-y-4">
          <h4 className="font-sans text-[10px] font-semibold tracking-widest text-stone-400 uppercase">
            The Brand
          </h4>
          <ul className="space-y-2 font-serif text-sm tracking-wide">
            <li>
              <Link href="#" className="text-stone-600 hover:text-amber-600 underline-offset-8 hover:underline transition-colors duration-300">
                Store Locator
              </Link>
            </li>
            <li>
              <Link href="#" className="text-stone-600 hover:text-amber-600 underline-offset-8 hover:underline transition-colors duration-300">
                Contact
              </Link>
            </li>
            <li>
              <Link href="#" className="text-stone-600 hover:text-amber-600 underline-offset-8 hover:underline transition-colors duration-300">
                Journal
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div className="space-y-4">
          <h4 className="font-sans text-[10px] font-semibold tracking-widest text-stone-400 uppercase">
            Follow
          </h4>
          <div className="flex gap-4">
            <Link href="#" className="text-stone-600 hover:text-amber-600 transition-colors">Instagram</Link>
            <Link href="#" className="text-stone-600 hover:text-amber-600 transition-colors">Pinterest</Link>
            <Link href="#" className="text-stone-600 hover:text-amber-600 transition-colors">TikTok</Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-20 pt-8 border-t border-stone-200 text-center">
        <p className="font-serif text-[10px] tracking-widest text-stone-400">
          © 2024 VYRA Fashion. Engineered for Elegance.
        </p>
      </div>
    </footer>
  );
}
