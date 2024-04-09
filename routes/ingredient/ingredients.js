/**@module controller/google 
* @requires module:model/ingredient
*/
import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import Ingredient from '../../model/ingredient.js';
import create_ingredient from '../../controller/IngredientController.js';

const router = express.Router();

// Sample ingredient data
let ingredients = [
    {
        id: 1,
        name: "Flour",
        calories: 364,
        protein: 10.3,
        carbs: 72.6,
        fat: 1.2
    },
    {
        id: 2,
        name: "If you can see this, then react is successfully connecting to the express server.",
        calories: 42,
        protein: 3.4,
        carbs: 4.7,
        fat: 1.0
    },
    // Add more ingredients as needed
];



// Endpoint to get all ingredients
router.get('/', (req, res) =>{
 res.json(ingredients);
}
   
);

// Endpoint to get a single ingredient by ID
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const ingredient = ingredients.find(ingredient => ingredient.id === id);
    if (ingredient) {
        res.json(ingredient);
    } else {
        res.status(404).json({ error: 'Ingredient not found' });
    }
});

// Endpoint to create a new ingredient
router.post('/', (req,res)=>{
    const response =  create_ingredient(req.body);
    console.log("response",response);
    res.json(response);
});

// Endpoint to update an existing ingredient by ID
router.put('/ingredients/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedIngredient = req.body;
    const index = ingredients.findIndex(ingredient => ingredient.id === id);
    if (index !== -1) {
        ingredients[index] = { ...ingredients[index], ...updatedIngredient };
        res.json(ingredients[index]);
    } else {
        res.status(404).json({ error: 'Ingredient not found' });
    }
});

// Endpoint to delete an ingredient by ID
router.delete('/ingredients/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = ingredients.findIndex(ingredient => ingredient.id === id);
    if (index !== -1) {
        ingredients.splice(index, 1);
        res.json({ message: 'Ingredient deleted' });
    } else {
        res.status(404).json({ error: 'Ingredient not found' });
    }
});

export default router;