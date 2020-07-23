class Recipes {
    constructor() {
        this.recipes = [];
        this.recipesIngredients = [];
        this.recipesAdapter = new RecipesAdapter();
        this.viewAll = document.querySelector('#viewAll')
        this.addRecipeBtn = document.querySelector('#add-recipe-button')
        // this.form = document.querySelector('#addRecipeForm')
        this.initBindingsAndEventListeners();
        this.fetchAndLoadRecipes();
    }
    
    initBindingsAndEventListeners() {
        
        this.viewAll.addEventListener('click', this.toggleCardContainer.bind(this));
        
        this.addRecipeBtn.addEventListener('click', function(event) {
            event.preventDefault();
            
            this.recipesAdapter.createRecipe(event.target.parentElement);
        }.bind(this))
    }

        
    appends() {
        this.viewAll.appendChild(this.recipeCardContainer)
    }

    
    toggleHidden(element) {
        if (element.classList.contains("hidden")) {
            element.classList.remove("hidden");
        } else {
            element.className += " hidden";
        }
    }
    
    
    toggleCardContainer() {
        this.toggleDisplay('#card-container');
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
    recipeIngredientsContainer() {
        const div = document.createElement('div')
        const btn = document.querySelector('#recipes')
        btn.appendChild(div)
        div.setAttribute('id', 'all-ingredients')
        div.setAttribute('class', 'open-button fade-in')
        new Ingredients();
    }
    
    toggleDisplay(id) {
        document.querySelector(id).style.display === "none" ? document.querySelector(id).style.display = "flex" : document.querySelector(id).style.display = "none";
    }


}

