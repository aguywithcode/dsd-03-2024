import mongoose from "mongoose";
const Schema = mongoose.Schema;

//Subject to change.
const FridgeSchema = new Schema({
    _id: {type: String, required: true, unique: true},
    owner_id: {type: Schema.Types.ObjectId, ref: "User", required: true},
    ingredients: [{type: Schema.Types.ObjectId, ref: "Ingredient"}]
});

FridgeSchema.virtual("url").get(function() {
    return `/fridge/${this._id}`;
});

export default mongoose.model("Fridge", FridgeSchema);