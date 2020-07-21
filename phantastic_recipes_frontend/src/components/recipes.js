class Recipes {
    constructor() {
        this.recipes = [];
        this.adapter = new RecipesAdapter();
        this.initBindingsAndEventListeners();
        this.fetchAndLoadRecipes();
    }
    
    initBindingsAndEventListeners() {
        this.allIngredientsBtn = document.querySelector('#ingredients-btn') //all ingredients
        this.recipeCardContainer = document.querySelector('.recipe-card-container')
        // ingredientsBtn.setAttribute('onclick', `openRecipeIngredients(${this.id})`)
        // this.ingredientsBtn = document.querySelector(`#openRecipeIngredients(${this.id})`)
        this.viewAll = document.querySelector('#viewAll')
        this.recipeIngredientsContainer()

        // all ingredients
        this.allIngredientsBtn.addEventListener('click', function() {
            this.openClose('#all-ingredients');
        }.bind(this))

        // recipe card container
        
        // this.viewAll.addEventListener('click', () => {
            //     this.hideOrShowElement(this.recipeCardContainer)
            
            // })
            // this.addRecipeForm = document.querySelector('#addRecipeForm')
            // this.addRecipeForm.addEventListener('submit', this.recipeFormValues).bind(this)
        }
        
    appends() {
        this.viewAll.appendChild(this.recipeCardContainer)
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
    
    // createRecipes(recipe) {
    //     for (let recipe of recipes) {
    //         const ingredients = this.createRecipeIngredientsArray(recipe.ingredients)
    //         this.recipes.push(new Recipe(recipe.title, recipe.recipe_link, recipe.recipe_link, recipe.recipe_origin, recipe.recipe_type, ingredients))
    //     }
    // }
            
    renderRecipes() {        
        for (let recipe of this.recipes) {
            recipe.createRecipeCard()            
        }
    }
    
    recipeIngredientsContainer() {
        const div = document.createElement('div')
        const btn = document.querySelector('#recipes')
        btn.appendChild(div)
        div.setAttribute('id', 'all-ingredients')
        div.setAttribute('class', 'open-button fade-in')
        new Ingredients();
    }
    
                // ingredientsContainer() {
                    //     const container = document.createElement('div')
                    //     container.setAttribute('class', 'container')
    //     container.innerText = 'testing'
    // }

    openClose(id) {
        document.querySelector(id).style.display === "none" ? document.querySelector(id).style.display = "block" : document.querySelector(id).style.display = "none";
    }

}