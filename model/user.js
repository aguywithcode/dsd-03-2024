import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    //Normally, ID doesn't need to be declared, but since we're adding oauth,
    //we may have to use the oauth IDs as the user's ID.
    _id: {type: String, required: true},

    fridge: {type: Schema.Types.ObjectId, ref: "Fridge", required: true},
    meal_plan: [{type: Schema.Types.ObjectId, ref: "Meal"}]
});

export default mongoose.model("User", UserSchema);