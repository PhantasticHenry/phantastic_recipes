class Recipes {
    constructor() {
        this.recipes = [];
        this.recipesIngredients = [];
        this.recipesAdapter = new RecipesAdapter();
        this.listOfIngredients = new Ingredients();
        this.viewAll = document.querySelector('#viewAll')
        this.addRecipeBtn = document.querySelector('#add-recipe-button')
        this.allIngredients = document.querySelector('#ingredients-btn')
        this.initBindingsAndEventListeners();
        this.fetchAndLoadRecipes();
    }
    
    initBindingsAndEventListeners() {
        this.viewAll.addEventListener('click', this.toggleCardContainer.bind(this));
        
        this.addRecipeBtn.addEventListener('click', function(event) {
            event.preventDefault();
            this.recipesAdapter.createRecipe(event.target.parentElement);
            toggleDisplay('#addRecipeForm');
        }.bind(this))

        this.allIngredients.addEventListener('click', this.toggleListOfIngredients.bind(this));
        // this.allIngredients.addEventListener('click', function() {
        //     toggleDisplay('#all-ingredients')
        // }.bind(this))
    }

    toggleHidden(element) {
        if (element.classList.contains("hidden")) {
            element.classList.remove("hidden");
        } else {
            element.className += " hidden";
        }
    }
    
    toggleCardContainer() {
        toggleDisplay('#card-container');
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
    toggleListOfIngredients() {
        toggleDisplay('#all-ingredients');
    }
    
    // toggleDisplay(id) {
    //     document.querySelector(id).style.display === "none" ? document.querySelector(id).style.display = "flex" : document.querySelector(id).style.display = "none";
    // }


}

