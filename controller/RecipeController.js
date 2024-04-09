import mongoose from 'mongoose';
import Recipe from './../model/recipe.js';
import Ingredient from './../model/ingredient.js';
import 'dotenv/config';

// Function to fetch MongoDB ObjectIds of ingredients
const getOrCreateIngredientIds =async function (ingredientNames) {
  let ingredientIds = [];
  try {
        // Loop through each ingredient name
    for (const name of ingredientNames) {
      // Query the database to find the ingredient
      let ingredient = await Ingredient.findOne({ name });

      // If ingredient not found, create a new one
      if (!ingredient) {
        ingredient = await Ingredient.create({ 
          name: name,
          calories:10,
          vitamin_A:20,
          vitamin_B:30,
          vitamin_C:40,
          cholesterol:50,
          carbohydrates:60,
          image_url:""
         });
         await ingredient.save();
      }

      // Add the ingredient's ObjectId to the list
      ingredientIds.push(ingredient._id);
      console.log("ingredient saved to db and its id is",ingredient._id);
    }
    return   ingredientIds;
  } catch (error) {
    console.error('Error fetching or creating ingredient IDs:', error);
    throw error;
  }
}

const apiKey = process.env.API_KEY;
const getRecipeByName = async(name)=>{
   const url = `https://api.spoonacular.com/recipes/complexSearch?query=${name}&number=10&apiKey=${apiKey}`;
   const response = await fetch(url); 
   const data = await response.json();
  return data.results;
};

// const getRecipeByName = async(name)=>{  
//    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
//    const response = await fetch(url);
//    const res = await response.json();
//    const data = res.meals;
   
//    //create recipe object
   
//     data.forEach(recipeItem => {
//    const ingredients = Object.keys(recipeItem)
//               .filter(key => key.startsWith('strIngredient') && recipeItem[key])
//               .map(key => recipeItem[key]);
//    console.log("ingredients",ingredients);
//     //get Or Create ingredient ids from database
//    const ingredientIds = getOrCreateIngredientIds(ingredients);
//   // ingredientIds.then(ids => console.log("ids", ids));
   
//     //get the instruction?


 
//     //create recipe object and save to database   
//     const recipe = new Recipe({
//       route_id :recipeItem.idMeal,
//       name : recipeItem.strMeal,
//       ingredients :ingredientIds.then(res=>res),
//       instructions :recipeItem.strInstructions,
//    }); 
//    console.log("Recipe",recipe);
//     recipe.save();
//   })
  
//    return data.meals;
//    }
   

   
// const getRecipeByName =(query)=> results;

export default getRecipeByName;