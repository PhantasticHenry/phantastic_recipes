class Recipes {
    constructor() {
        this.recipes = [];
        this.adapter = new RecipesAdapter();
        this.initBindingsAndEventListeners();
        this.fetchAndLoadRecipes();
    }

    initBindingsAndEventListeners() {
        this.recipeCardContainer = document.querySelector('.recipe-card-container')
        this.viewAll = document.querySelector('#viewAll')
        this.viewAll.addEventListener('click', () => {
            this.hideOrShowElement(this.recipeCardContainer)
            
        })
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

    createRecipeIngredientsArray(ingredients) {
        let ingredientsArray = [];
        for (let ingredient of ingredients) {
            ingredientsArray.push(ingredient.name)
        }
        return ingredientsArray
    }

    createRecipes(recipe) {
        for (let recipe of reicpes) {
            const ingredients = this.createRecipeIngredientsArray(recipe.ingredients)
            this.recipes.push(new Recipe(recipe.title, recipe.recipe_link, recipe.recipe_link, recipe.recipe_origin, recipe.recipe_type, ingredients))
        }
    }

    renderRecipes() {        
        for (let recipe of this.recipes) {
            recipe.createRecipeCard()            
        }
    }

    // getAndLoadRecipeIngredients() {
    //     this.adapter.getRecipeIngredients(ingredient).then(json => console.log(json)
    //     )
    // }
    // hideOrShowElement(selector) {
    //     if (selector.style.display === ("hidden")) {
    //         selector.style.display = ("hidden");
    //     } else {
    //         selector.style.display += "hidden";
    //     }
    // }

}