import mongoose from 'mongoose';
import Ingredient from './../model/ingredient.js';
import 'dotenv/config';


const create_ingredient =(ingredient) => {
       
        const newIngredient = new Ingredient(ingredient);
        // Save the new ingredient to the database
         newIngredient.save()
            .then(savedIngredient => {
                console.log("New ingredient saved successfully:", savedIngredient);
          })
            .catch(error => {
                console.error("Error saving ingredient:", error);
            });

}
export default   create_ingredient;