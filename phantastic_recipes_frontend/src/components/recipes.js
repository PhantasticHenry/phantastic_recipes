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
        this.getIngredientRecipes();
    }
    
    initBindingsAndEventListeners() {
        this.viewAll.addEventListener('click', this.toggleCardContainer.bind(this));
        this.ingredientsBtn.addEventListener('click', this.toggleIngredientsSelect.bind(this));
        // this.ingredientsBtn.addEventListener('click', this.toggleListOfIngredients.bind(this));
        //not sure how to create ingredient recipes cards

        this.addRecipeBtn.addEventListener('click', function(event) {
            event.preventDefault();
            this.recipesAdapter.createRecipe(event.target.parentElement);
            toggleDisplay('#addRecipeForm');
        }.bind(this))

        addEventListener('onchange', function(e) {
            console.log(e.target)
            
        })
        this.ingredientsSelect.addEventListener('change', function(e) {
            const ingredient = e.target.value;
            // debugger
            this.getIngredientRecipes(ingredient);
            console.log(this.ingredientRecipes);
            
            
        }.bind(this))
       
        // not working
        // this.listOfIngredients.addEventListener('click', function(event) {
        //     let ingredient = event.target;
        //     this.renderRecipesByIngredient(ingredient);
        // })

    }

    handleIngredientClick(e) {
        const li = e.target
    }
    
    
    fetchAndLoadRecipes() {
        this.recipesAdapter.getRecipes().then(recipes => {
            recipes.forEach(recipe => this.recipes.push(new Recipe(recipe)))                        
        })
        .then(() => {
            this.renderRecipes()
        })
    }
    
    renderRecipes() {        
        for (let recipe of this.recipes) {
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

    getIngredientRecipes(ingredient) {
        this.ingredientRecipes = [];
        for(let recipe of this.recipes) {
            for(let recipeIngredient of recipe.ingredients) {
                (recipeIngredient.id == ingredient) && this.ingredientRecipes.push(recipe)
            }
        }
    }

}

