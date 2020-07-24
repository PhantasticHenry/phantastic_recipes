class Ingredients {
    constructor() {
        this.adapter = new IngredientsAdapter();
        this.ingredientRecipesArray = [];
        this.fetchAndLoadIngredients();
    }

    fetchAndLoadIngredients() {
        this.adapter.getIngredients().then(data => this.sortedIngredientsList(data))
    }
    
    sortedIngredientsList(data) {
        const div = document.createElement('div')
        div.setAttribute('id', 'all-ingredients')
        div.setAttribute('class', 'open-button fade-in')
        div.setAttribute('style', 'display: none')
        
        const recipesContainer = document.createElement('div')
        const ingredientsUl = document.createElement('ul')
        const recipesUl = document.createElement('ul')

        data.sort((a, b) => (a.name > b.name) ? 1 : -1)
        for (let ingredient of data) {
            const ingredientsLi = document.createElement('li')
            ingredientsLi.innerText = `${ingredient.name}   >`
            ingredientsUl.appendChild(ingredientsLi)
            for (let recipe of ingredient.recipes) {
                const recipeLi = document.createElement('li')
                recipeLi.innerText = recipe.title
                recipesUl.appendChild(recipeLi)
            }
        }
        div.appendChild(ingredientsUl)
        document.body.appendChild(div)  
        recipesContainer.appendChild(recipesUl)
        document.body.appendChild(recipesContainer)
    }
    
}