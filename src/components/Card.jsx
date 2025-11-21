
const Card = ({hats}) => {
  
  return (
    <>
    <div className="max-w-7xl mx-auto px-2 md:px-8" >
       
          {/* <!-- Card 1 --> */}
          <div class="group overflow-hidden  transition-all duration-300 rounded-md shadow">
            <div class="aspect-[3/4] overflow-hidden bg-white relative">
              <img
              src={hats.image}
                alt="Classic Fedora"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* <!-- Hover overlay --> */}
              <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button class="bg-white/10 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-md">
                  Quick View
                </button>
              </div>
            </div>
            <div class="p-6 bg-gray-100 shadow">
              <h3 class="font-serif text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                {/* Classic Fedora */}
                {hats.title}
              </h3>
              <div class="flex items-center justify-between gap-4 flex-wrap">
                <p class="text-lg font-medium text-gray-800">${hats.price}</p>
                <span class="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
                  {/* Fedora */}
                  {hats.category}
                </span>
              </div>
            </div>
          </div>
       
      </div>
    </>
  )
}

export default Card