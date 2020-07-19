class Recipe {
    constructor(title, recipe_link, image_link, recipe_origin, recipe_type, ingredients) {
        Object.assign(this, { title, recipe_link, image_link, recipe_origin, recipe_type, ingredients })
    }

    createRecipeCard() {
        const recipeCard = document.createElement('div')
        recipeCard.className = 'recipe-card'
        const recipeTitle = document.createElement('h3')
        recipeTitle.innerHTML = this.title.title 
        recipeCard.appendChild(recipeTitle)
        const recipeLink = document.createElement('a')
        recipeLink.href = this.title.recipe_link
        recipeCard.appendChild(recipeLink)
        const recipeImage = document.createElement('img')
        recipeImage.src = this.title.image_link
        recipeLink.appendChild(recipeImage)

        const recipeIngredients = document.createElement('button')
        recipeIngredients.className = 'recipe-ingredients-open-button'
        recipeIngredients.setAttribute('onclick', 'recipeIngredients')
        recipeIngredients.innerText = 'view ingredients'
        recipeCard.appendChild(recipeIngredients)
        

        // const ingredientsToggle = document.createElement('div')
        // ingredientsToggle.setAttribute('id', 'ingredients-dropdown')
        // recipeCard.appendChild(ingredientsToggle)
        // const ingredientsAtag = document.createElement('a')
        // ingredientsAtag.href = '#'
        // ingredientsAtag.className = 'dropdown-toggle'
        // ingredientsAtag.innerHTML = `Ingredients <br>`
        // ingredientsToggle.appendChild(ingredientsAtag)
        // const ingredientCaret = document.createElement('span')
        // ingredientsAtag.setAttribute('onclick', 'openRecipeIngredients()')
        // ingredientCaret.className = 'caret'
        // ingredientsAtag.appendChild(ingredientCaret)
        // const ingredientsContainer = document.createElement('div')
        // ingredientCaret.appendChild(ingredientsContainer)
        // //class name for dropdown
        // const ingredientsUl = document.createElement('ul')
        // for(let ingredient of this.title.ingredients) {
        //     let li = document.createElement('li')
        //     li.innerHTML = ingredient.name
        //     ingredientsUl.appendChild(li)
        // }
        // ingredientsContainer.appendChild(ingredientsUl)
        
        document.querySelector('.recipe-card-container').appendChild(recipeCard)
    }
}