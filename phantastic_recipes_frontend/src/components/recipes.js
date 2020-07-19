class Recipes {
    constructor() {
        this.recipes = [];
        this.adapter = new RecipesAdapter();
        this.initBindingsAndEventListeners();
        this.fetchAndLoadRecipes();
    }

    fetchAndLoadRecipes() {
        this.adapter.getRecipes().then(recipes => {
            recipes.forEach(recipe => this.recipes.push(new Recipe(recipe)))                        
        })
        .then(() => {
            this.renderRecipes()
        })
    }
    
    initBindingsAndEventListeners() {
        this.addRecipForm = document.querySelector('#addRecipeForm')
        this.addRecipForm.addEventListener('submit', this.addRecipe)
    }


    createRecipeIngredientsArray(ingredients) {
        let ingredientsArray = [];
        for (const ingredient of ingredients) {
            ingredientsArray.push(ingredient.name);
        }
        return ingredientsArray;        
    }

    addRecipe(recipe) {
        recipe.preventDefault()  
    }

    renderRecipes() {        
        for (let recipe of this.recipes) {
            recipe.createRecipeCard()            
        }
    }

}