import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const InstructionSchema = new Schema({
    recipe_id: {type: Schema.Types.ObjectID, ref: "Recipe", required: true},
    task: {type: String, required: true}
});

export default mongoose.model("Instruction", InstructionSchema);