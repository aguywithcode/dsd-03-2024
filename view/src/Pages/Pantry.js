function Pantry() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">My Ingredients</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* My Ingredients cards */}
        <div className="bg-gray-300 p-4 rounded-lg space-y-2">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Tomatoes</h3>
            <div className="flex items-center">
              <button className="bg-gray-400 w-6 h-6 flex justify-center items-center mr-2">
                +
              </button>
              <button className="bg-gray-400 w-6 h-6 flex justify-center items-center">
                -
              </button>
            </div>
          </div>
          <p>3 in Pantry</p>
          <p>Carbs: #g</p>
          <p>Protein: #g</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6">Ingredients I Need</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Ingredients I Need cards */}
        <div className="bg-gray-300 p-4 rounded-lg space-y-2">
          <h3 className="text-lg font-semibold">Avocado</h3>
          <p>0 in Pantry</p>
          <p>Carbs: #g</p>
          <p>Protein: #g</p>
          <button className="text-indigo-600 hover:text-indigo-800">
            Add to Pantry
          </button>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6">Other Ingredients</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Other Ingredients cards */}
        {/* Repeat this structure for each ingredient */}
        <div className="bg-gray-300 p-4 rounded-lg space-y-2">
          <h3 className="text-lg font-semibold">Potatoes</h3>
          <p>0 in Cart</p>
          <p>Carbs: #g</p>
          <p>Protein: #g</p>
          <button className="text-indigo-600 hover:text-indigo-800">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pantry;
