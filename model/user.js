import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    //Normally, ID doesn't need to be declared, but since we're adding oauth,
    //we may have to use the oauth IDs as the user's ID.
    user_id: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    profile_pic: {type: String},

    fridge: {type: Schema.Types.ObjectId, ref: "Fridge"},
    meal_plan: [{type: Schema.Types.ObjectId, ref: "Meal"}]
});

export default mongoose.model("User", UserSchema);