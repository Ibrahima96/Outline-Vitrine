const Footer = () => {
  return (
    <section className="bg-[#d4d1ce] p-6">
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 max-w-7xl mx-auto px-4 md:px-8">
        <nav className="text-gray-600">
          <h2 className="footer-title">
            <span className="font-black">Artisan Headwear</span>
          </h2>
          <p className="max-w-sm mx-auto">
            Handcrafted hats that honor tradition and embrace timeless style.
          </p>
        </nav>
        <nav className="text-gray-600">
          <h2 className="footer-title">
            <span className="font-black">Shop</span>
          </h2>
          <a className="link link-hover">All Hats</a>
          <a className="link link-hover">Fedoras</a>
          <a className="link link-hover">Summer Hats</a>
          <a className="link link-hover">Caps</a>
        </nav>
        <nav className="text-gray-600">
          <h2 className="footer-title font-semibold">
            <span className="font-semibold">About</span>
          </h2>
          <a className="link link-hover">Our Story</a>
          <a className="link link-hover">Craftsmanship</a>
          <a className="link link-hover">Sustainability</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <form>
          <h2 className="footer-title ">
            <span className="font-black">Newsletter</span>
          </h2>
          <fieldset className="w-80">
            <p className="text-gray-600 mb-3">
              Subscribe for exclusive offers and new collection announcements
            </p>
            <div className="text-gray-600">
              <label className="text-gray-600">Enter your email address</label>
              <input
                type="text"
                placeholder="username@site.com"
                className="input border border-gray-700 rounded-md py-3 bg-white mb-3 "
              />
              <button className=" bg-orange-400 rounded-md py-3 w-[320px] text-sm px-2 text-white">
                Subscribs
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
    </section>
  );
};

export default Footer;
