function Dashboard() {
  return (
    <div className="p-8">
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6">Categories</h2>
        <div className="flex space-x-4">
          {/* Placeholder for category cards */}
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="w-1/4 bg-gray-300 h-32"></div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Favorite Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Cards for favorite recipes */}
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="bg-gray-500 p-4 rounded-lg space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Recipe Name</h3>
                <span>♥</span> {/* Replace with heart icon */}
              </div>
              <p># Calories</p>
              <button className="text-indigo-600 hover:text-indigo-800">
                View Ingredients
              </button>
              <div className="flex space-x-2">
                {/* Tags */}
                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold">
                  TAG 1
                </span>
                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold">
                  TAG 2
                </span>
                <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold">
                  TAG 3
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
