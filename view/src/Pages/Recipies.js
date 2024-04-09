import { useState } from "react";
import axios from "axios";

function Recipies() {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);
  const url = "http://localhost:3001/recipes/findByName";
  const categories = [
    "Beef",
    "Chicken",
    "Dessert",
    "Lamb",
    "Miscellaneous",
    "Pasta",
    "Pork",
    "Seafood",
    "Side",
    "Starter",
    "Vegan",
    "Vegetarian",
    "Breakfast",
    "Goat",
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform search logic here
    console.log("Search term:", searchTerm);
    // Update the recipes state with the search  results using axios
    axios
      .get(url, {
        params: {
          name: searchTerm,
        },
      })
      .then((response) => {
        console.log(response);
        setRecipes(response.data);
        console.log(recipes);
      });
  };
  return (
    <div className="p-8">
      <section>
        <div className="container">
          {/* create a search bar menu with a search button */}
          <div className="flex  items-center mb-8">
            <h2 className="text-2xl font-bold mx-2">Search for recipes </h2>
            <div>
              <form className="flex space-x-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Search"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-400">
                  Search
                </button>
              </form>
            </div>
          </div>
          {/* create a filter menu with a filter button */}
        </div>
        <h2 className="text-2xl font-bold mb-6">Categories</h2>
        <div className="flex space-x-4 mb-8 ">
          {/* Placeholder for category cards */}
          {Array.from(categories, (category, index) => (
            <div key={index} className="flex-wrap bg-gray-300 h-24 w-auto">{category}</div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 flex justify-between items-center">
          <span>My Recipes</span>
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-400">
            Add Recipes
          </button>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {/* Placeholder for recipe cards */}

          {Array.from(recipes, (recipe, index) => (
            <div key={index} className="bg-gray-500 p-4 rounded-lg space-y-2">
              <div className="text-center">
                <img src={recipe.image} alt="" className="" />
                <h3 className="text-lg font-semibold">{recipe.title}</h3>
                <span>♥</span>
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
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">All Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Placeholder for recipe cards */}
          {Array.from({ length: 3 }, (_, index) => (
            <div key={index} className="bg-gray-500 p-4 rounded-lg space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Recipe Name</h3>
                <span>♥</span>
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
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Recipies;
