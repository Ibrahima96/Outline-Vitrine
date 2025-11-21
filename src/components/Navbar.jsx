import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import geminiBG from '../assets/gemini.png'
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">

      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? " backdrop-blur border-b border-white bg-white" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center">

          {/* LOGO LEFT */}
          <h1
            className={`font-serif text-xl md:text-2xl font-bold transition-colors
            ${isScrolled ? "text-base-content" : "text-white"}`}
          >
            Artisan Headwear
          </h1>

          {/* NAV CENTER */}
          <nav className="flex-1 hidden md:flex justify-center items-center gap-10">
            <button
              className={`text-sm font-medium hover:opacity-80 transition-colors
              ${isScrolled ? "text-base-content" : "text-white"}`}
            >
              Collection
            </button>

            <button
              className={`text-sm font-medium hover:opacity-80 transition-colors
              ${isScrolled ? "text-base-content" : "text-white"}`}
            >
              Our Story
            </button>

            <button
              className={`text-sm font-medium hover:opacity-80 transition-colors
              ${isScrolled ? "text-base-content" : "text-white"}`}
            >
              Craftsmanship
            </button>
          </nav>

          {/* CART ICON RIGHT */}
          <div className="ml-auto">
            <button
              className={`btn btn-ghost btn-circle ${
                isScrolled ? "text-base-content" : "text-white"
              }`}
            >
              <ShoppingBag className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <img
          src={geminiBG}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* CONTENT */}
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
          <h1 className="text-white text-5xl md:text-7xl font-serif font-bold">
            Artisan Headwear
          </h1>

          <p className="text-white/90 mt-4 text-lg md:text-xl mb-3 ">
           Chapeaux artisanaux alliant élégance intemporelle et savoir-faire durable
          </p>

         <a href="#collection" className="btn btn-neutral btn-wide rounded-md cursor-pointer text-white shadow-md backdrop-blur-md border-0">Explore la collection</a>
        </div>
      </section>

    </div>
  );
}
