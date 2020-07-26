class Recipes {
    constructor() {
        this.recipes = [];
        this.recipesAdapter = new RecipesAdapter();
        this.listOfIngredients = new Ingredients();
        this.viewAll = document.querySelector('#viewAll');
        this.ingredientsSelect = document.querySelector('#ingredientsSelect');
        this.addRecipeBtn = document.querySelector('#addRecipeBtn');
        this.cardElement = '#cardContainer';
        this.initBindingsAndEventListeners();
        this.fetchAndLoadRecipes();
    }
    
    initBindingsAndEventListeners() {
        
        this.viewAll.addEventListener('click', function() {
            this.renderRecipes(this.recipes);
            this.toggleCardContainer();
        }.bind(this))

        this.addRecipeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            this.recipesAdapter.createRecipe(e.target.parentElement);
            toggleDisplay('#formContainer');
        }.bind(this))

        this.ingredientsSelect.addEventListener('change', function(e) {
            const ingredient = e.target.value;
            document.querySelector(this.cardElement).style.display = "flex";
            this.handleIngredientRecipes(ingredient);
            this.renderRecipes(this.ingredientRecipes);
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
        clearContainer(this.cardElement);     
        for (let recipe of recipes) {
            recipe.createRecipeCard()            
        }
    }

    toggleCardContainer() {
        document.querySelector(this.cardElement).style.display === "none" && toggleDisplay(this.cardElement)
    }

    handleIngredientRecipes(ingredient) {
        this.ingredientRecipes = [];
        setTimeout(() => toggleDisplay('#ingredientsSelect'), 2000);
        for(let recipe of this.recipes) {
            for(let recipeIngredient of recipe.ingredients) {
                (recipeIngredient.id == ingredient) && this.ingredientRecipes.push(recipe)
            }
        }
    }

    createRecipeIngredientsArray(ingredients) {
        const ingredientsArray = [];
        for (const ingredient of ingredients) {
            ingredientsArray.push(ingredient)
        }
        return ingredientsArray
    }

}

