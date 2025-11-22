import inspection from "../assets/quality_inspection_detail_shot.png"
import making from "../assets/hat-making_process_hands_detail.png"
import materials from "../assets/hat_materials_detail_shot.png"

const Artisanat = () => {
  return (
    <section className="bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-10 pb-4 md:pb-24">
            <h2 className="text-center font-semibold text-2xl md:text-5xl tracking-wide mb-3">Notre savoir-faire</h2>
            <p className="text-gray-600 text-center mb-10">
                De l'approvisionnement à la finition, chaque étape reflète notre dévouement à l'excellence
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4 md:px-8">
                <div>
                    <img 
                    className="rounded-md object-center w-full mb-6"
                    src={materials} alt="hat_materials" />
                    <h3 className="font-semibold text-2xl md:text-2xl text-center">Matériaux de qualité supérieure</h3>
                    <p className="p-3 text-center text-gray-600">Nous nous approvisionnons en feutres de laine, pailles et cuirs de la meilleure qualité auprès de fournisseurs éthiques qui partagent nos valeurs de durabilité et de qualité.</p>
                </div>
                <div>
                    <img 
                    className="rounded-md object-center w-full mb-6"
                    src={making} alt="process_hands" />
                    <h3 className="font-semibold text-2xl md:text-2xl text-center">Techniques traditionnelles</h3>
                    <p className="p-3 text-center text-gray-600">Nos artisans utilisent des méthodes ancestrales transmises de génération en génération, garantissant que chaque chapeau est façonné avec précision et soin.</p>
                </div>
                <div>
                    <img 
                    className="rounded-md object-center w-full mb-6"
                    src={inspection} alt="quality_inspection_detail" />
                    <h3 className="font-semibold text-2xl md:text-2xl text-center">Qualité rigoureuse</h3>
                    <p className="p-3 text-center text-gray-600">Chaque chapeau subit une inspection minutieuse et une finition à la main avant de vous parvenir, garantissant une qualité exceptionnelle.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Artisanat