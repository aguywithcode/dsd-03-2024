import express from 'express';
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
        name: "Milk",
        calories: 42,
        protein: 3.4,
        carbs: 4.7,
        fat: 1.0
    },
    // Add more ingredients as needed
];

// Endpoint to get all ingredients
router.get('/', (req, res) => {
    res.json(ingredients);
});

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
router.post('/ingredients', (req, res) => {
    const newIngredient = req.body;
    newIngredient.id = ingredients.length + 1; // Assign a new ID
    ingredients.push(newIngredient);
    res.status(201).json(newIngredient);
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