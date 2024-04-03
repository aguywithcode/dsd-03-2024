/**@module model/ingredient */
import mongoose from "mongoose";
const Schema = mongoose.Schema;

/**Validator that checks if nutrient numbers are integers
* @param {number} fieldName
*/
const checkInt = function(fieldName) {
    return {
        validator: (value) => Number.isInteger(value),
        message: `${fieldName} must be an integer.`
    }
}

/**Schema object for the Ingredient model.
 * @author Tyler Del Rosario
 * @property name {string} Ingredient Name
 * @property image_url {string} This is unlikely to be implemented.
 * @property calories {string}
 * @property vitamin_A {string}
 * @property vitamin_B {string}
 * @property vitamin_C {string}
 * @property cholesterol {string}
 * @property carbohydrates {string}
 * @property protein {string}
 * @property TBD {string} More nutrients will be added.
 */
const IngredientSchema = new Schema({
    name: {type: String, required: true},

    image_url: {type: String},
    //fridge_id: {type: Schema.Types.ObjectId, ref:"Fridge", required: true},
    
    calories: {type: Number, required: true, validate: checkInt("calories")},
    vitamin_A: {type: Number, required: true, validate: checkInt("vitamin_A")},
    vitamin_B: {type: Number, required: true, validate: checkInt("vitamin_B")},
    vitamin_C: {type: Number, required: true, validate: checkInt("vitamin_C")},
    cholesterol: {type: Number, required: true, validate: checkInt("cholesterol")},
    carbohydrates: {type: Number, required: true, validate: checkInt("carbohydrates")},
    protein: {type: Number, required: true, validate: checkInt("protein")}
});

export default mongoose.model("Ingredient", IngredientSchema);