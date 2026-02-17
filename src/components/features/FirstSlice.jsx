import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import Recipes from "../Recipes";

export const FirstSlice = createSlice({
    name:"recipes",
    initialState: {
        recipes : [
        {
            id: uuidv4(),
            title: "Mediterranean Chickpea Salad",
            description: "A refreshing, protein-packed salad tossed in a lemon-olive oil dressing.",
            image:"/Images/Mediterranean Chickpea Salad.jpg",
            servings: 2,
            prepTime: "10 Mins",
            cookTime: "0 Mins",
            ingredients: [
            "2 cups cooked chickpeas",
            "1 cup cherry tomatoes, halved",
            "1 medium cucumber, diced",
            "½ cup red bell pepper, diced",
            "½ cup green bell pepper, diced",
            "¼ cup red onion, finely chopped",
            "¼ cup fresh parsley, chopped",
            "¼ cup feta cheese, crumbled (optional)",
            "3 tablespoons extra virgin olive oil",
            "2 tablespoons fresh lemon juice",
            "1 garlic clove, minced",
            "½ teaspoon salt",
            "¼ teaspoon black pepper",
            "½ teaspoon dried oregano"
            ],
            instructions: [
            "In a large bowl, combine chickpeas, tomatoes, cucumber, bell peppers, red onion, and parsley",
            "In a small bowl, whisk together olive oil, lemon juice, garlic, salt, pepper, and oregano",
            "Pour the dressing over the salad and toss well to combine",
            "Add feta cheese if using",
            "Serve immediately or refrigerate for 15 minutes to let flavors meld"
            ]
        },
        
        {
            id: uuidv4(),
            title: "Avocado & Tomato Wholegrain Toast",
            description: "Creamy avocado spread over toasted wholegrain bread, topped with juicy tomatoes.",
            image:"/Images/Avocado & Tomato Wholegrain Toast.jpg",
            servings: 1,
            prepTime: "5 Mins",
            cookTime: "5 Mins",
            ingredients: [
            "1 slice wholegrain bread",
            "1 ripe avocado",
            "4-5 cherry tomatoes, sliced",
            "Salt and pepper to taste",
            "Red pepper flakes (optional)",
            "Drizzle of olive oil (optional)"
            ],
            instructions: [
            "Toast the wholegrain bread until golden and crispy",
            "Cut the avocado in half, remove the pit, and scoop the flesh into a bowl",
            "Mash the avocado with a fork and season with salt and pepper",
            "Spread the mashed avocado generously over the toasted bread",
            "Top with sliced cherry tomatoes",
            "Sprinkle with additional salt, pepper, and red pepper flakes if desired",
            "Drizzle with olive oil for extra flavor",
            "Serve immediately"
            ]
        },
        
        {
            id: uuidv4(),
            title: "One-Pan Lemon Garlic Salmon with Asparagus",
            description: "A 15-minute weeknight dinner of flaky salmon and tender asparagus.",
            image:"/Images/One-Pan Lemon Garlic Salmon with Asparagus.jpg",
            servings: 2,
            prepTime: "5 Mins",
            cookTime: "12 Mins",
            ingredients: [
            "2 salmon fillets (about 6 oz each)",
            "1 bunch asparagus, trimmed",
            "3 tablespoons butter, melted",
            "3 garlic cloves, minced",
            "1 lemon (juice and slices)",
            "Salt and pepper to taste",
            "½ teaspoon paprika",
            "Fresh parsley, chopped (for garnish)"
            ],
            instructions: [
            "Preheat oven to 400°F (200°C)",
            "In a small bowl, mix melted butter, minced garlic, lemon juice, salt, pepper, and paprika",
            "Place salmon fillets and asparagus on a large baking sheet or oven-safe skillet",
            "Brush the garlic-lemon butter mixture over the salmon and asparagus",
            "Place lemon slices on top of the salmon",
            "Bake for 12-15 minutes until salmon is cooked through and flakes easily with a fork",
            "Garnish with fresh parsley",
            "Serve hot with lemon wedges on the side"
            ]
        },
        
        {
            id: uuidv4(),
            title: "Quinoa Veggie Power Bowl",
            description: "A balanced bowl of fluffy quinoa, roasted veggies and healthy fats.",
            image:"/Images/Quinoa Veggie Power Bowl.jpg",
            servings: 2,
            prepTime: "10 Mins",
            cookTime: "15 Mins",
            ingredients: [
            "1 cup quinoa, rinsed",
            "2 cups water or vegetable broth",
            "1 sweet potato, diced",
            "1 cup chickpeas, drained",
            "2 cups spinach or kale",
            "1 avocado, sliced",
            "2 tablespoons olive oil",
            "1 teaspoon cumin",
            "1 teaspoon paprika",
            "Salt and pepper to taste",
            "Lemon wedges for serving"
            ],
            instructions: [
            "Cook quinoa according to package instructions with water or broth",
            "Preheat oven to 400°F (200°C)",
            "Toss sweet potato and chickpeas with olive oil, cumin, paprika, salt, and pepper",
            "Spread on a baking sheet and roast for 20-25 minutes until golden",
            "Sauté spinach or kale in a pan until wilted",
            "Divide quinoa into bowls",
            "Top with roasted vegetables, chickpeas, sautéed greens, and avocado slices",
            "Serve with lemon wedges"
            ]
        },
        
        {
            id: uuidv4(),
            title: "Sweet Potato Black Bean Tacos",
            description: "Smoky roasted sweet potatoes and black beans tucked into warm tortillas.",
            image:"/Images/Sweet Potato Black Bean Tacos.jpg",
            servings: 3,
            prepTime: "10 Mins",
            cookTime: "15 Mins",
            ingredients: [
            "2 medium sweet potatoes, diced",
            "1 can black beans, drained and rinsed",
            "6 small corn tortillas",
            "1 tablespoon olive oil",
            "1 teaspoon chili powder",
            "1 teaspoon cumin",
            "½ teaspoon smoked paprika",
            "Salt and pepper to taste",
            "Fresh cilantro, chopped",
            "Lime wedges",
            "Optional toppings: avocado, salsa, Greek yogurt"
            ],
            instructions: [
            "Preheat oven to 425°F (220°C)",
            "Toss sweet potato cubes with olive oil, chili powder, cumin, paprika, salt, and pepper",
            "Spread on a baking sheet and roast for 20-25 minutes until tender",
            "Warm black beans in a small pot",
            "Warm tortillas in a dry skillet or microwave",
            "Fill tortillas with roasted sweet potatoes and black beans",
            "Top with cilantro, lime juice, and your favorite toppings",
            "Serve immediately"
            ]
        },
        
        {
            id: uuidv4(),
            title: "Greek Yogurt Berry Parfait",
            description: "Layers of creamy yogurt, fresh berries and crunchy oats for a high-protein snack.",
            image: "/Images/Greek Yogurt Berry Parfait.jpg",
            servings: 1,
            prepTime: "5 Mins",
            cookTime: "0 Mins",
            ingredients: [
            "1 cup Greek yogurt (plain or vanilla)",
            "½ cup mixed berries (strawberries, blueberries, raspberries)",
            "¼ cup granola or oats",
            "1 tablespoon honey or maple syrup",
            "Optional: chia seeds, nuts, coconut flakes"
            ],
            instructions: [
            "In a glass or bowl, add a layer of Greek yogurt",
            "Top with a layer of mixed berries",
            "Add a layer of granola or oats",
            "Repeat layers until glass is full",
            "Drizzle honey or maple syrup on top",
            "Add optional toppings like chia seeds or nuts",
            "Serve immediately or refrigerate for later"
            ]
        },
        
        {
            id: uuidv4(),
            title: "Lentil & Spinach Soup",
            description: "A hearty 30-minute soup rich in plant protein and iron.",
            image:"/Images/Lentil & Spinach Soup.jpg",
            servings: 4,
            prepTime: "10 Mins",
            cookTime: "20 Mins",
            ingredients: [
            "1 cup dried red lentils, rinsed",
            "4 cups vegetable broth",
            "1 can diced tomatoes",
            "2 cups fresh spinach",
            "1 onion, diced",
            "3 garlic cloves, minced",
            "2 carrots, diced",
            "1 teaspoon cumin",
            "1 teaspoon turmeric",
            "2 tablespoons olive oil",
            "Salt and pepper to taste",
            "Lemon juice for serving"
            ],
            instructions: [
            "Heat olive oil in a large pot over medium heat",
            "Sauté onion, garlic, and carrots until softened (5 minutes)",
            "Add cumin and turmeric, stir for 1 minute",
            "Add lentils, diced tomatoes, and vegetable broth",
            "Bring to a boil, then reduce heat and simmer for 20 minutes",
            "Stir in fresh spinach and cook until wilted",
            "Season with salt and pepper",
            "Serve hot with a squeeze of lemon juice"
            ]
        },
        
        {
            id: uuidv4(),
            title: "Banana Oat Pancakes",
            description: "Flour-free pancakes sweetened naturally with ripe bananas.",
            image:"/Images/Banana Oat Pancakes.jpg",
            servings: 2,
            prepTime: "5 Mins",
            cookTime: "10 Mins",
            ingredients: [
            "2 ripe bananas, mashed",
            "2 eggs",
            "½ cup rolled oats",
            "½ teaspoon baking powder",
            "½ teaspoon vanilla extract",
            "Pinch of cinnamon",
            "Butter or oil for cooking",
            "Toppings: fresh berries, maple syrup, yogurt, nuts"
            ],
            instructions: [
            "In a bowl, mash bananas until smooth",
            "Add eggs, oats, baking powder, vanilla, and cinnamon",
            "Mix well until combined (batter will be thick)",
            "Heat a non-stick pan over medium heat with a little butter or oil",
            "Pour small portions of batter to form pancakes",
            "Cook for 2-3 minutes until bubbles form, then flip",
            "Cook another 2 minutes until golden",
            "Serve warm with your favorite toppings"
            ]
        }
        ]
},
    reducers:{
        loadProducts:(state,action) => {
            console.log(state.recipes)
            console.log(action)
        }
    }

})

export const { loadProducts } = FirstSlice.actions;

export const recipesReducer = FirstSlice.reducer;