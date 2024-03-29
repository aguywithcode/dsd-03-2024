import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    _id: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    instructions: [{type: Schema.Types.ObjectId, ref:"Instruction"}],
    ingredients: [{type: Schema.Types.ObjectId, ref:"Ingredient"}]
});

RecipeSchema.virtual("url").get(function() {
    return `/recipe/${this._id}`;
});

export default mongoose.model("Recipe", RecipeSchema);