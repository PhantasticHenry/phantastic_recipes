class Recipes {
    constructor() {
        this.recipes = [];
        this.recipesAdapter = new RecipesAdapter();
        this.listOfIngredients = new Ingredients();
        this.viewAll = document.querySelector('#viewAll');
        this.addRecipeBtn = document.querySelector('#add-recipe-button');
        this.ingredientsBtn = document.querySelector('#ingredients-btn');
        this.ingredientsSelect = document.querySelector('#ingredients-select');
        // this.listOfIngredients = document.querySelector('#all-ingredients');
        // this.ingredientsContainer = document.querySelector('ingredients-container')
        this.initBindingsAndEventListeners();
        this.fetchAndLoadRecipes();
        this.handleIngredientRecipes();
    }
    
    initBindingsAndEventListeners() {
        // this.viewAll.addEventListener('click', this.toggleCardContainer.bind(this));
        this.viewAll.addEventListener('click', function() {
            this.renderRecipes(this.recipes);
            this.toggleCardContainer();
        }.bind(this))

        this.ingredientsBtn.addEventListener('click', this.toggleIngredientsSelect.bind(this));

        this.addRecipeBtn.addEventListener('click', function(event) {
            event.preventDefault();
            this.recipesAdapter.createRecipe(event.target.parentElement);
            toggleDisplay('#addRecipeForm');
        }.bind(this))

        this.ingredientsSelect.addEventListener('change', function(e) {
            const ingredient = e.target.value;
            // debugger
            this.handleIngredientRecipes(ingredient);
            this.renderRecipes(this.ingredientRecipes);
            console.log("test");
            
        }.bind(this))
        
        
    }

    
    
    fetchAndLoadRecipes() {
        this.recipesAdapter.getRecipes().then(recipes => {
            recipes.forEach(recipe => this.recipes.push(new Recipe(recipe)))                        
        })
        .then(() => {
            this.renderRecipes(this.recipes)
        })
    }
    
    renderRecipes(recipes) {
        this.clearContainer('#card-container');     
        for (let recipe of recipes) {
            recipe.createRecipeCard()            
        }
    }
    toggleIngredientsSelect() {
        toggleDisplay('#ingredients-select');
    }
    // toggleListOfIngredients() {
    //     toggleDisplay('#all-ingredients');
    // }

    toggleCardContainer() {
        toggleDisplay('#card-container');
    }

    handleIngredientRecipes(ingredient) {
        this.clearContainer('#card-container');
        this.ingredientRecipes = [];
        for(let recipe of this.recipes) {
            for(let recipeIngredient of recipe.ingredients) {
                (recipeIngredient.id == ingredient) && this.ingredientRecipes.push(recipe)
            }
        }
    }

    clearContainer(element) {
        document.querySelector(element).innerHTML = ""
    }

    createRecipeIngredientsArray(ingredients) {
        const ingredientsArray = [];
        for (const ingredient of ingredients) {
            ingredientsArray.push(ingredient)
        }
        return ingredientsArray
    }

}

