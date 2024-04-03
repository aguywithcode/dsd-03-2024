import mongoose from 'mongoose';
const Schema = mongoose.Schema;

//Subject to change.
const MealSchema = new Schema({
    owner_id: {type: Schema.Types.ObjectId, ref:"User", required: true},
    recipe_id: {type: Schema.Types.ObjectId, ref:"Recipe", required: true},
    date: {type: Date}
});

export default mongoose.model("Meal", MealSchema);;