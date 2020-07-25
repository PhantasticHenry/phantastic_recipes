class Recipes {
    constructor() {
        this.recipes = [];
        this.recipesAdapter = new RecipesAdapter();
        this.listOfIngredients = new Ingredients();
        this.viewAll = document.querySelector('#viewAll');
        this.addRecipeBtn = document.querySelector('#add-recipe-button');
        this.ingredientsBtn = document.querySelector('#ingredients-btn');
        this.ingredientsSelect = document.querySelector('#ingredients-select');
        // this.mySidenav = document.querySelector('#mySidenav')
        this.initBindingsAndEventListeners();
        this.fetchAndLoadRecipes();
        // this.handleIngredientRecipes();
    }
    
    initBindingsAndEventListeners() {
        this.viewAll.addEventListener('click', function() {
            this.renderRecipes(this.recipes);
            this.toggleCardContainer();
        }.bind(this))
        

        // this.ingredientsBtn.addEventListener('click', this.toggleIngredientsSelect.bind(this));
        this.ingredientsBtn.addEventListener('click', function() {
            this.toggleIngredientsSelect();
            this.toggleCardContainer()
        }.bind(this))

        this.addRecipeBtn.addEventListener('click', function(event) {
            event.preventDefault();
            this.recipesAdapter.createRecipe(event.target.parentElement);
        }.bind(this))

        this.ingredientsSelect.addEventListener('change', function(e) {
            const ingredient = e.target.value;
            // debugger
            this.handleIngredientRecipes(ingredient);
            this.renderRecipes(this.ingredientRecipes);
            document.querySelector('#card-container').style.display = "flex"
            // toggleDisplay('#card-container');

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

    toggleCardContainer() {
        // document.querySelector('#card-container').style.display == "flex" && this.clearContainer('#card-container');
        toggleDisplay('#card-container');
    }



    handleIngredientRecipes(ingredient) {
        // this.clearContainer('#card-container');
        // toggleCardContainer();
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

