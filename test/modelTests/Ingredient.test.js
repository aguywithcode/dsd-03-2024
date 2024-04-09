import mongoose from 'mongoose';
import Ingredient from '../../model/ingredient.js';
import 'dotenv/config';
mongoose.set("strictQuery", false);

const dbURL = process.env.DB_URL;
const testDetails = {
    name: "Carrot",
    fdc_id: 123,
    
    nutrients: {
        calories: 100,
        vitamin_A: 10,
        vitamin_B: 10,
        vitamin_C: 10,
        cholesterol: 10,
        carbohydrates: 10,
        protein: 10,
        total_fat: 10,
        total_saturated_fats: 10,
        total_trans_fats: 10,
        total_monosaturated_fats: 10
    }
}

describe("Ingredient Schema", function(){
    it("Should add an ingredient to the ingredient document", async function(){
        this.timeout(5000);
        await mongoose.connect(dbURL).catch(function(error){
            reject(error);
        });

        const ingredient = new Ingredient(testDetails);

        return new Promise(async function(resolve, reject){
            await ingredient.save().then(function() {
                resolve();
            }).catch((error) => {reject(error)});
        });
    });

    it("Should remove an ingredient from the ingredient document", async function(){
        this.timeout(5000);
        const ingredient = new Ingredient(testDetails);

        return new Promise(function(resolve, reject){
            ingredient.collection.deleteMany({name: {$eq: "Carrot"}});
            mongoose.connection.close().catch((error) => {reject(error)});
            resolve();
        });
    });
});