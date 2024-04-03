/**@module model/meal*/
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/**Schema object for Meal moddel
 * @author Tyler Del Rosario
 * @property owner_id {ObjectID} An ObjectID that references a user in user document.
 * @property recipe_id {ObjectID} An ObjectID that references a recipe in recipe document.
 * @property date {Date} A date that points to a specific day that the meal is tied to.
 */
const MealSchema = new Schema({
    owner_id: {type: Schema.Types.ObjectId, ref:"User", required: true},
    recipe_id: {type: Schema.Types.ObjectId, ref:"Recipe", required: true},
    date: {type: Date}
});

export default mongoose.model("Meal", MealSchema);;