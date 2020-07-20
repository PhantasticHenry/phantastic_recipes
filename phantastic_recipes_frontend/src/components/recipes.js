class Recipes {
    constructor() {
        this.recipes = [];
        this.adapter = new RecipesAdapter();
        this.initBindingsAndEventListeners();
        this.fetchAndLoadRecipes();
    }

    initBindingsAndEventListeners() {
        this.addRecipeForm = document.querySelector('#addRecipeForm')
        this.addRecipeForm.addEventListener('submit', this.recipeFormValues.bind(this))
    }
    
    recipeFormValues(e) {
        e.preventDefault()
        
        this.adapter.createRecipe()
    }

    fetchAndLoadRecipes() {
        this.adapter.getRecipes().then(recipes => {
            recipes.forEach(recipe => this.recipes.push(new Recipe(recipe)))                        
        })
        .then(() => {
            this.renderRecipes()
        })
    }




    // createRecipeIngredientsArray(ingredients) {
    //     let ingredientsArray = [];
    //     for (const ingredient of ingredients) {
    //         ingredientsArray.push(ingredient.name);
    //     }
    //     return ingredientsArray;        
    // }


    renderRecipes() {        
        for (let recipe of this.recipes) {
            recipe.createRecipeCard()            
        }
    }

}