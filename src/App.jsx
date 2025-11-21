import Card from "./components/Card";
import Navbar from "./components/Navbar";
import hats from "./Data/hats";
export default function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto text-center px-4 " id="collection">
         <h2 className="text-5xl md:text-6xl mb-3 tracking-wide">Notre Collection</h2>
          <p className="text-sm md:text-xl mb-8 text-gray-700 md:leading-9">
          Chaque pièce est méticuleusement fabriquée par des artisans qualifiés
          utilisant des techniques traditionnelles et des matériaux haut de
          gamme
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 space-y-6 md:space-y-8">
       
        {hats.map((hat) => (
          <Card hats={hat} key={hat.id} />
        ))}
      </div>
    </>
  );
}
