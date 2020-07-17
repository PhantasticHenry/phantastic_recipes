class Recipe {
    constructor(title, recipe_link, image_link, recipe_origin, recipe_type) {
        Object.assign(this, { title, recipe_link, image_link, recipe_origin, recipe_type })
    }

    createRecipeCard() {
        const recipeCard = document.createElement('div')
        recipeCard.className = "recipe-card"
        const recipeTitle = document.createElement('h3')
        recipeTitle.innerHTML = this.title

    }
}