/**@module model/user */
import mongoose from "mongoose";
const Schema = mongoose.Schema;

/**A Schema object that defines the User model.
 * @author Tyler Del Rosario
 * @property user_id {string} An ID that is unique and will contain a prefix
 * to identify how the user registered. So GOOGLE_ for google oauth, DISCORD_ for
 * discord oauth and PASS_ for name and password.
 * @property profile_pic {string} To be used with Oauth. Stores the users profile picture
 * from discord or google.
 * @property fridge {ObjectID} An objectID that references the fridge/pantry that the user
 * owns.
 * @property meal_plan {array} An array of ObjectIDs that reference meals that the user
 * has selected. 
 */
const UserSchema = new Schema({
    user_id: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    profile_pic: {type: String},

    fridge: {type: Schema.Types.ObjectId, ref: "Fridge"},
    meal_plan: [{type: Schema.Types.ObjectId, ref: "Meal"}]
});

export default mongoose.model("User", UserSchema);