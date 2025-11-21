const Collection = () => {
  return (
    <>
      <section className="bg-gray-50 pt-8 pb-8 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-10 mb-8 ">
          <h2 className="text-5xl md:text-6xl mb-3 tracking-wide text-center md:mb-8 leading-16">
            Styles en vedette
          </h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-8 ">
          <div className="max-w-4xl hover:scale-105 transition-transform duration-500 ">
            <img
              className="rounded-md w-full h-full object-cover "
              src="/src/assets/featured_lifestyle_hat_editorial.png"
              alt="feditorial"
            />
          </div>
          <div className="max-w-4xl">
            <h3 className="text-2xl md:text-4xl font-semibold mb-3">
              Élégance intemporelle
            </h3>
            <p className="text-gray-600   tracking-wide py-2 mb-3">
              Notre collection signature présente des silhouettes classiques
              réimaginées avec des matériaux contemporains. Chaque chapeau
              raconte une histoire d'artisanat patrimonial rencontrant la
              sensibilité du design moderne.
            </p>
            <img
              className="rounded-md w-full object-cover h-[659px]"
              src="/src/assets/featured_hat_detail_lifestyle.png"
              alt="lifestyle"
            />
          </div>
        </div>
      </section>
      {/* Notre histoire */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mt-20 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-8 ">
          <div>
            <h2 className="text-2xl md:text-5xl font-semibold mb-3">
              Notre histoire
            </h2>
            <p className="text-gray-600 mb-4">
              Fondés dans un petit atelier passionné par la préservation des
              techniques traditionnelles de fabrication de chapeaux, nous sommes
              devenus un nom respecté dans le domaine des couvre-chefs
              artisanaux. Notre engagement reste inchangé : créer des chapeaux
              qui honorent le passé tout en embrassant l’avenir.
            </p>
            <p className="text-gray-600 mb-4">
              Chaque chapeau commence avec des matériaux soigneusement
              sélectionnés et se termine par une finition méticuleuse à la main.
              Nous croyons en la qualité plutôt qu’en la quantité, en la
              durabilité plutôt qu’en les tendances et en un savoir-faire qui
              résiste à l’épreuve du temps.
            </p>
          </div>
          <div>
            <img
              className="rounded-md"
              src="/src/assets/hat_workshop_craftsmanship_scene.png"
              alt="craftsmanship"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Collection;
