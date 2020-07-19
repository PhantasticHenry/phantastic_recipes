class Recipe {
    constructor({title, recipe_link, image_link, recipe_origin, recipe_type, ingredients}) {
        Object.assign(this, { title, recipe_link, image_link, recipe_origin, recipe_type, ingredients })
    }

    createRecipeCard() {
        const card = document.createElement('div')

        card.className = 'recipe-card'
        const title = document.createElement('h3')
        title.innerHTML = this.title
        card.appendChild(title)
        const link = document.createElement('a')
        link.href = this.recipe_link
        card.appendChild(link)
        const img = document.createElement('img')
        img.src = this.image_link
        link.appendChild(img)

        const ingredients = document.createElement('div')
        ingredients.setAttribute('class', 'recipe-ingredients-open-button')
        ingredients.setAttribute('onclick', 'openRecipeIngredients()')
        ingredients.innerText = 'Ingredients'
        card.appendChild(ingredients)

        const ingredientsDiv = document.createElement('div')
        ingredientsDiv.setAttribute('id', 'recipeIngredients') // change this
        ingredientsDiv.setAttribute('class', 'recipe-ingredients-popup')
        // ingredients.appendChild(ingredientsDiv)
        ingredients.appendChild(ingredientsDiv) // this needs
        const ingredientsPopup = document.createElement('form')
        ingredientsPopup.setAttribute('class', 'recipe-ingredients-container')
        ingredientsDiv.appendChild(ingredientsPopup)
        //ingredients popup content
        const ul = document.createElement('ul')
        for(let ingredients of this.ingredients) {
            const li = document.createElement('li')
            li.innerHTML = ingredients.name
            ul.appendChild(li)
        }
        ingredientsDiv.appendChild(ul)
        //close ingredients popup
        const close = document.createElement('button')
        close.setAttribute('button', 'button')
        close.setAttribute('class', 'btn cancel')
        close.setAttribute('onclick', 'closeRecipeIngredients()')
        close.innerText = 'Close'
        ingredientsDiv.appendChild(close)
        
        

        // const ingredientsToggle = document.createElement('div')
        // ingredientsToggle.setAttribute('id', 'ingredients-dropdown')
        // card.appendChild(ingredientsToggle)
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
        // for(let ingredient of this.ingredients) {
        //     let li = document.createElement('li')
        //     li.innerHTML = ingredient.name
        //     ingredientsUl.appendChild(li)
        // }
        // ingredientsContainer.appendChild(ingredientsUl)
        
        document.querySelector('.recipe-card-container').appendChild(card)
    }
}